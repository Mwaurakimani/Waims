import { Head, Link } from '@inertiajs/react';
import {
    Plus,
    Search,
    MoreHorizontal,
    Building2,
    MapPin,
    User,
    HardHat,
    DollarSign,
    Pickaxe,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

interface Project {
    id: number;
    title: string;
    location: string;
    manager: string;
    contractor: string;
    budget: string;
    status: string;
    progress: number;
}

interface Props {
    projects: {
        data: Project[];
        links: any[];
    };
}

export default function ProjectsList({ projects }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Project Registry', href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Project Registry" />

            <div className="flex flex-col gap-6 p-6">
                {/* Header Section */}
                <div className="flex items-center justify-between rounded-xl border bg-card p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="rounded-lg bg-primary/10 p-3 text-primary">
                            {/*<Pickaxe />*/}
                            {/*<Building2 size={24} />*/}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">
                                Project Registry
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Monitor all county-level development projects.
                            </p>
                        </div>
                    </div>
                    <Button asChild>
                        <Link href="/dashboard/projects/create">
                            <Plus className="mr-2 h-4 w-4" /> New Project
                        </Link>
                    </Button>
                </div>

                {/* Controls Section */}
                <div className="flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search projects by title, location or contractor..."
                            className="pl-10"
                        />
                    </div>
                    <Button variant="outline">Filters</Button>
                </div>

                {/* Projects Table */}
                <div className="overflow-hidden rounded-xl border bg-card">
                    <Table>
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead className="w-75">
                                    Project Details
                                </TableHead>
                                <TableHead>Personnel</TableHead>
                                <TableHead>Financial Progress</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projects.data.map((project) => (
                                <TableRow
                                    key={project.id}
                                    className="transition-colors hover:bg-muted/30"
                                >
                                    <TableCell>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-slate-900">
                                                {project.title}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                                <MapPin size={12} />{' '}
                                                {project.location}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-center gap-2 text-xs">
                                                <User
                                                    size={12}
                                                    className="text-blue-500"
                                                />
                                                <span className="font-medium text-slate-700">
                                                    {project.manager}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs">
                                                <HardHat
                                                    size={12}
                                                    className="text-orange-500"
                                                />
                                                <span className="text-muted-foreground">
                                                    {project.contractor}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="w-45 space-y-1.5">
                                            <div className="flex justify-between text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                                                <span className="flex items-center gap-1">
                                                    <DollarSign size={10} />{' '}
                                                    {project.budget}
                                                </span>
                                                <span>{project.progress}%</span>
                                            </div>
                                            <Progress
                                                value={project.progress}
                                                className="h-1.5"
                                            />
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                project.status === 'Active'
                                                    ? 'default'
                                                    : 'secondary'
                                            }
                                        >
                                            {project.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                >
                                                    <MoreHorizontal size={16} />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent
                                                align="end"
                                                className="w-40"
                                            >
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href={`/dashboard/projects/${project.id}`}
                                                    >
                                                        View Details
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Manage Milestones
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive">
                                                    Halt Project
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Simplified Pagination */}
                <div className="flex items-center justify-between px-2">
                    <p className="text-sm text-muted-foreground italic">
                        Viewing {projects.data.length} projects in this sector.
                    </p>
                    <div className="flex gap-2">
                        {projects.links.map((link, i) => (
                            <Button
                                key={i}
                                variant={link.active ? 'default' : 'outline'}
                                size="sm"
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                asChild
                            >
                                <Link href={link.url || '#'} />
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
