import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
    MapPin,
    Calendar,
    DollarSign,
    User,
    FileText,
    Briefcase,
} from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function Overview({ project }) {
    // Status color mapping
    const statusMap = {
        active: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
        pending: 'bg-amber-500/10 text-amber-600 border-amber-200',
        completed: 'bg-blue-500/10 text-blue-600 border-blue-200',
    };

    return (
        <div className="animate-in space-y-6 duration-500 fade-in">
            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                <Card className="border-none bg-muted/30 shadow-none">
                    <CardContent className="p-4">
                        <p className="text-xs font-medium text-muted-foreground uppercase">
                            Budget
                        </p>
                        <p className="text-lg font-bold">
                            KES {project.budget?.toLocaleString()}
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-none bg-muted/30 shadow-none">
                    <CardContent className="p-4">
                        <p className="text-xs font-medium text-muted-foreground uppercase">
                            Status
                        </p>
                        <Badge
                            variant="outline"
                            className={`mt-1 capitalize ${statusMap[project.status] || ''}`}
                        >
                            {project.status}
                        </Badge>
                    </CardContent>
                </Card>
                <Card className="border-none bg-muted/30 shadow-none">
                    <CardContent className="p-4">
                        <p className="text-xs font-medium text-muted-foreground uppercase">
                            Progress
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                            <span className="text-lg font-bold">
                                {project.progress || 0}%
                            </span>
                            <Progress
                                value={project.progress}
                                className="h-1.5 w-12"
                            />
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-none bg-muted/30 shadow-none">
                    <CardContent className="p-4">
                        <p className="text-xs font-medium text-muted-foreground uppercase">
                            Deadline
                        </p>
                        <p className="text-lg font-bold">
                            {formatDate(project.estimated_end_date) || 'TBD'}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Info Grid */}
            <div className="grid grid-cols-1 gap-6">
                {/* Left: Description (Huge) */}
                <div className="space-y-4 md:col-span-2 p-10 shadow-lg rounded">
                    <div className="space-y-2">
                        <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                            <FileText size={16} className="text-primary" />
                            Project Scope & Description
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            {project.description ||
                                'No description provided for this project.'}
                        </p>
                    </div>

                    <div className="border-t pt-4">
                        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                            <MapPin size={16} className="text-primary" />
                            Location Details
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {project.location}
                        </p>
                    </div>
                </div>

                {/* Right: Metadata (Condensed) */}
                <Card className="h-fit">
                    <CardContent className="space-y-4 p-4">
                        <div className="flex items-center gap-3">
                            <div className="rounded-md bg-primary/10 p-2 text-primary">
                                <Calendar size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase">
                                    Duration
                                </p>
                                <p className="text-xs font-medium">
                                    {project.start_date ?? 'N/A'} -
                                    {formatDate(project.estimated_end_date)}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="rounded-md bg-primary/10 p-2 text-primary">
                                <DollarSign size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase">
                                    Spent to Date
                                </p>
                                <p className="text-xs font-medium">
                                    $
                                    {project.total_paid?.toLocaleString() ||
                                        '0'}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="rounded-md bg-primary/10 p-2 text-primary">
                                <User size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase">
                                    Manager
                                </p>
                                <p className="text-xs font-medium">
                                    {project.manager.name || 'N/A'}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="rounded-md bg-primary/10 p-2 text-primary">
                                <Briefcase size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase">
                                    Contractor
                                </p>
                                <p className="text-xs font-medium">
                                    {project?.contractor?.name || 'N/A'}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
