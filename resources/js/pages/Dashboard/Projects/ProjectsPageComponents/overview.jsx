import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MapPin, Calendar, DollarSign, User, FileText, Briefcase } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { Separator } from '@/components/ui/separator.tsx';

export default function Overview({ project }) {

    console.log(project);

    // Status color mapping
    const statusMap = {
        active: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
        pending: 'bg-amber-500/10 text-amber-600 border-amber-200',
        completed: 'bg-blue-500/10 text-blue-600 border-blue-200',
    };

    return (
        <div className="w-full animate-in space-y-6 duration-500 fade-in">
            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                <Card className="border-none bg-muted/80">
                    <CardContent className="p-4">
                        <p className="text-xs font-medium text-muted-foreground uppercase">Budget</p>
                        <p className="text-lg font-bold">KES {project.budget?.toLocaleString()}</p>
                    </CardContent>
                </Card>
                <Card className="border-none bg-muted/80">
                    <CardContent className="p-4">
                        <p className="text-xs font-medium text-muted-foreground uppercase">Status</p>
                        <Badge variant="outline" className={`mt-1 capitalize ${statusMap[project.status] || ''}`}>
                            {project.status}
                        </Badge>
                    </CardContent>
                </Card>
                <Card className="border-none bg-muted/80">
                    <CardContent className="p-4">
                        <p className="text-xs font-medium text-muted-foreground uppercase">Progress</p>
                        <div className="mt-1 flex items-center gap-2">
                            <span className="text-lg font-bold">{project.financial_progress_percentage || 0}%</span>
                            <Progress value={project.financial_progress_percentage} className="h-1.5 w-12" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-none bg-muted/80">
                    <CardContent className="p-4">
                        <p className="text-xs font-medium text-muted-foreground uppercase">Deadline</p>
                        <p className="text-lg font-bold">{formatDate(project.estimated_end_date) || 'TBD'}</p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Info Grid */}
            <div className="rounded-lg border p-4">
                <div className="space-y-2">
                    <div className={'flex items-center gap-2'}>
                        <FileText size={16} className="text-primary" />
                        <h3 className="font-semibold">Project Scope & Description</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.description || 'No description provided for this project.'}
                    </p>
                </div>

                <Separator className="my-4" />

                <div className={'space-y-2'}>
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                        <MapPin size={16} className="text-primary" />
                        Location Details
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                </div>

                <Separator className="my-4" />

                <div className="mb-2 flex items-center gap-3">
                    <div className="rounded-md p-2 text-primary">
                        <Calendar size={18} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Duration</p>
                        <p className="text-xs font-medium">
                            {project.start_date ?? 'N/A'} -{formatDate(project.estimated_end_date)}
                        </p>
                    </div>
                </div>

                <div className="mb-2 flex items-center gap-3">
                    <div className="rounded-md bg-primary/10 p-2 text-primary">
                        <DollarSign size={18} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Spent to Date</p>
                        <p className="text-xs font-medium">KES {project.total_paid?.toLocaleString() || '0'}</p>
                    </div>
                </div>

                {project?.manager?.name && (
                    <div className="flex items-center gap-3 mb-2">
                        <div className="rounded-md bg-primary/10 p-2 text-primary">
                            <User size={18} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase">Manager</p>
                            <p className="text-xs font-medium">{project.manager.name || 'N/A'}</p>
                        </div>
                    </div>
                )}

                {project?.contractor?.name && (
                    <div className="flex items-center gap-3">
                        <div className="rounded-md bg-primary/10 p-2 text-primary">
                            <User size={18} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase">Client</p>
                            <p className="text-xs font-medium">{project.contractor.name || 'N/A'}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
