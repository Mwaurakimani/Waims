import { Head, Link } from '@inertiajs/react';
import {
    User,
    Mail,
    Calendar,
    Briefcase,
    FileText,
    Edit3,
    MapPin,
    CheckCircle2,
    Clock,
    AlertTriangle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem, User as UserType } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Assuming you pass the user and their related data from the Controller
interface Props {
    user: any; // User with roles
    projects: any[]; // Projects assigned/contracted
    reports: any[]; // Reports related to this user
}

export default function UsersView({ user, projects, reports }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Users', href: '/dashboard/users' },
        { title: user.name, href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`View User - ${user.name}`} />

            <div className="p-6">
                {/* Top Header Section */}
                <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-xl border bg-card p-6 shadow-sm md:flex-row md:items-center">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                            <User size={32} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl font-bold tracking-tight">
                                    {user.name}
                                </h1>
                                <Badge
                                    variant="secondary"
                                    className="text-[10px] tracking-wider uppercase"
                                >
                                    {user.role?.name || 'Citizen'}
                                </Badge>
                            </div>
                            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                                <Mail size={14} /> {user.email}
                            </p>
                        </div>
                    </div>
                    <Button asChild className="gap-2">
                        <Link href={`/dashboard/users/${user.id}/edit`}>
                            <Edit3 size={16} /> Edit Account
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* MAJOR PANEL (Left - 8 Columns) */}
                    <div className="space-y-6 lg:col-span-8">
                        <Tabs defaultValue="projects" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
                                <TabsTrigger value="projects" className="gap-2">
                                    <Briefcase size={14} /> Assigned Projects
                                </TabsTrigger>
                                <TabsTrigger value="reports" className="gap-2">
                                    <FileText size={14} /> Related Reports
                                </TabsTrigger>
                            </TabsList>

                            {/* Projects Tab */}
                            <TabsContent
                                value="projects"
                                className="mt-6 space-y-4"
                            >
                                {projects.length > 0 ? (
                                    projects.map((project) => (
                                        <Card
                                            key={project.id}
                                            className="transition-shadow hover:shadow-md"
                                        >
                                            <CardContent className="flex items-center justify-between p-5">
                                                <div className="space-y-1">
                                                    <h3 className="text-lg font-bold">
                                                        {project.title}
                                                    </h3>
                                                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                                        <span className="flex items-center gap-1">
                                                            <MapPin size={12} />{' '}
                                                            {project.location}
                                                        </span>
                                                        <span className="flex items-center gap-1 font-semibold text-primary">
                                                            Budget: $
                                                            {project.budget}
                                                        </span>
                                                    </div>
                                                </div>
                                                <Badge
                                                    variant={
                                                        project.status ===
                                                        'active'
                                                            ? 'default'
                                                            : 'outline'
                                                    }
                                                >
                                                    {project.status}
                                                </Badge>
                                            </CardContent>
                                        </Card>
                                    ))
                                ) : (
                                    <div className="rounded-xl border border-dashed py-12 text-center text-muted-foreground">
                                        No active projects assigned.
                                    </div>
                                )}
                            </TabsContent>

                            {/* Reports Tab */}
                            <TabsContent
                                value="reports"
                                className="mt-6 space-y-4"
                            >
                                {reports.length > 0 ? (
                                    reports.map((report) => (
                                        <Card
                                            key={report.id}
                                            className="border-l-4 border-l-orange-500"
                                        >
                                            <CardHeader className="p-4">
                                                <div className="flex justify-between">
                                                    <CardTitle className="text-md">
                                                        {report.subject}
                                                    </CardTitle>
                                                    <span className="text-[10px] font-bold text-muted-foreground uppercase">
                                                        {report.created_at}
                                                    </span>
                                                </div>
                                                <CardDescription className="line-clamp-2">
                                                    {report.description}
                                                </CardDescription>
                                            </CardHeader>
                                        </Card>
                                    ))
                                ) : (
                                    <div className="rounded-xl border border-dashed py-12 text-center text-muted-foreground">
                                        No reports flagged for this user.
                                    </div>
                                )}
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* SUB PANEL (Right - 4 Columns) */}
                    <div className="space-y-6 lg:col-span-4">
                        {/* Quick Stats */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                                    User Overview
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between rounded-lg bg-muted/30 p-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle2
                                            className="text-green-600"
                                            size={16}
                                        />{' '}
                                        Completed
                                    </div>
                                    <span className="font-bold">12</span>
                                </div>
                                <div className="flex items-center justify-between rounded-lg bg-muted/30 p-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Clock
                                            className="text-blue-600"
                                            size={16}
                                        />{' '}
                                        In Progress
                                    </div>
                                    <span className="font-bold">4</span>
                                </div>
                                <div className="flex items-center justify-between rounded-lg bg-muted/30 p-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <AlertTriangle
                                            className="text-orange-600"
                                            size={16}
                                        />{' '}
                                        Disputes
                                    </div>
                                    <span className="font-bold">1</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Metadata */}
                        <Card>
                            <CardContent className="space-y-4 p-6 text-sm">
                                <div className="space-y-1">
                                    <span className="block text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                        Account Created
                                    </span>
                                    <div className="flex items-center gap-2 font-medium">
                                        <Calendar
                                            size={14}
                                            className="text-primary"
                                        />{' '}
                                        {user.created_at}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                        Department Access
                                    </span>
                                    <div className="flex items-center gap-2 font-medium">
                                        <Briefcase
                                            size={14}
                                            className="text-primary"
                                        />{' '}
                                        Infrastructure Dept.
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
