import { Head } from '@inertiajs/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

// --- Dummy Data ---
const spendingData = [
    { day: 'Mon', amount: 400 },
    { day: 'Tue', amount: 300 },
    { day: 'Wed', amount: 600 },
    { day: 'Thu', amount: 800 },
    { day: 'Fri', amount: 500 },
    { day: 'Sat', amount: 200 },
    { day: 'Sun', amount: 100 },
];

const activities = [
    { id: 1, user: 'Alex', action: 'Approved budget', time: '2 mins ago' },
    { id: 2, user: 'Sam', action: 'Created Project Alpha', time: '1 hour ago' },
    { id: 3, user: 'System', action: 'Backup completed', time: '3 hours ago' },
    { id: 4, user: 'Jordan', action: 'Updated status to Active', time: '5 hours ago' },
    { id: 5, user: 'Taylor', action: 'Added new member', time: 'Yesterday' },
];

const projects = [
    { id: 'PRJ-001', title: 'Skyline Plaza', location: 'New York', status: 'Active', spending: '$12,400' },
    { id: 'PRJ-002', title: 'Oak Ridge Mall', location: 'Chicago', status: 'Pending', spending: '$8,200' },
    { id: 'PRJ-003', title: 'Riverfront Park', location: 'Austin', status: 'Completed', spending: '$45,000' },
    { id: 'PRJ-004', title: 'Tech Hub V2', location: 'Seattle', status: 'Active', spending: '$2,100' },
];

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Dashboard', href: dashboard() }];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <main className="flex flex-col gap-6 p-6">
                {/* Top Section: Charts & Activity */}
                <div className="flex flex-col gap-6 lg:flex-row">
                    {/* Weekly Spending Chart */}
                    <Card className="min-h-[400px] flex-1">
                        <CardHeader>
                            <CardTitle>Weekly Spending</CardTitle>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={spendingData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="day" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Recent Activity Feed */}
                    <Card className="w-full lg:w-[350px]">
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {activities.map((item) => (
                                    <div key={item.id} className="flex gap-4 text-sm">
                                        <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                                        <div className="flex flex-col">
                                            <p className="font-medium text-gray-900 dark:text-gray-100">
                                                <span className="font-bold">{item.user}</span> {item.action}
                                            </p>
                                            <span className="text-xs text-muted-foreground">{item.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Bottom Section: Watched Projects Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Watched Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Location</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Spending</TableHead>
                                    <TableHead className="text-right">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {projects.map((project) => (
                                    <TableRow key={project.id}>
                                        <TableCell className="font-mono text-xs">{project.id}</TableCell>
                                        <TableCell className="font-medium">{project.title}</TableCell>
                                        <TableCell>{project.location}</TableCell>
                                        <TableCell>
                                            <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                                                {project.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{project.spending}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                View Details
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </main>
        </AppLayout>
    );
}
