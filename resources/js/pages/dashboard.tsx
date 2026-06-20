import { Head, usePage } from '@inertiajs/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Progress } from '@/components/ui/progress';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Dashboard', href: dashboard() }];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// --- Role-Specific Components ---

const AdminDashboard = ({ data }: { data: any }) => (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {Object.entries(data.stats).map(([key, value]) => (
            <Card key={key}>
                <CardHeader>
                    <CardTitle className="text-sm font-medium capitalize text-muted-foreground">{key.replace(/_/g, ' ')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">
                        {typeof value === 'number' && key.includes('total_') ? `KES ${value.toLocaleString()}` : value}
                    </p>
                </CardContent>
            </Card>
        ))}
        <Card className="col-span-1 lg:col-span-4">
            <CardHeader>
                <CardTitle>Projects by Status</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data.projects_by_status} dataKey="count" nameKey="status" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                            {data.projects_by_status.map((entry: any, index: number) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    </div>
);

const ModeratorDashboard = ({ data }: { data: any }) => (
    <Card>
        <CardHeader>
            <CardTitle>Project Manager Overview</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Manager</TableHead>
                        <TableHead>Completed Projects</TableHead>
                        <TableHead>Active Projects</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.managers.map((manager: any) => (
                        <TableRow key={manager.id}>
                            <TableCell>{manager.name}</TableCell>
                            <TableCell>{manager.completed_projects}</TableCell>
                            <TableCell>{manager.managed_projects.filter((p: any) => p.status !== 'completed').length}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const ManagerDashboard = ({ data }: { data: any }) => (
    <Card>
        <CardHeader>
            <CardTitle>My Projects</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Project</TableHead>
                        <TableHead>Contractor</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Financial Progress</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.projects.map((project: any) => (
                        <TableRow key={project.id}>
                            <TableCell>{project.title}</TableCell>
                            <TableCell>{project.contractor?.name || 'N/A'}</TableCell>
                            <TableCell><Badge>{project.status}</Badge></TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Progress value={project.progress} className="w-[60%]" />
                                    <span>{project.progress}%</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const ContractorDashboard = ({ data }: { data: any }) => (
    <div className="space-y-6">
        <Card>
            <CardHeader><CardTitle>Open for Tendering</CardTitle></CardHeader>
            <CardContent>
                <Table>
                    <TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Budget</TableHead></TableRow></TableHeader>
                    <TableBody>
                        {data.open_projects.map((p: any) => <TableRow key={p.id}><TableCell>{p.title}</TableCell><TableCell>KES {p.budget.toLocaleString()}</TableCell></TableRow>)}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
            <CardHeader><CardTitle>My Awarded Projects</CardTitle></CardHeader>
            <CardContent>
                <Table>
                    <TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                    <TableBody>
                        {data.my_projects.map((p: any) => <TableRow key={p.id}><TableCell>{p.title}</TableCell><TableCell><Badge>{p.status}</Badge></TableCell></TableRow>)}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
);

const CitizenDashboard = ({ data }: { data: any }) => (
    <Card>
        <CardHeader>
            <CardTitle>Ongoing and Completed Projects</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Project</TableHead>
                        <TableHead>Manager</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.projects.map((project: any) => (
                        <TableRow key={project.id}>
                            <TableCell>{project.title}</TableCell>
                            <TableCell>{project.manager?.name || 'N/A'}</TableCell>
                            <TableCell><Badge>{project.status}</Badge></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);


export default function Dashboard() {
    const { auth, dashboard } = usePage().props as any;
    const userRole = auth.user.role.name;

    const renderDashboard = () => {
        switch (userRole) {
            case 'Admin':
                return <AdminDashboard data={dashboard} />;
            case 'Moderator':
                return <ModeratorDashboard data={dashboard} />;
            case 'Project Manager':
                return <ManagerDashboard data={dashboard} />;
            case 'Contractor':
                return <ContractorDashboard data={dashboard} />;
            case 'Citizen':
                return <CitizenDashboard data={dashboard} />;
            default:
                return <Card><CardHeader><CardTitle>Welcome</CardTitle></CardHeader><CardContent><p>Your dashboard is being set up.</p></CardContent></Card>;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <main className="flex flex-col gap-6 p-6">
                {renderDashboard()}
            </main>
        </AppLayout>
    );
}
