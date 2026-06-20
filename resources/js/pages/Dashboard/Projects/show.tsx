import { Head, Form, usePage } from '@inertiajs/react';
import { ShieldCheck } from 'lucide-react';
import { releaseFunds } from '@/actions/App/Http/Controllers/ProjectController';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';

// Wayfinder actions (Assuming these are generated)
import Assignments from '@/pages/Dashboard/Projects/ProjectsPageComponents/assignments';
import Financials from '@/pages/Dashboard/Projects/ProjectsPageComponents/financials';
import Milestones from '@/pages/Dashboard/Projects/ProjectsPageComponents/milestones';
import Overview from '@/pages/Dashboard/Projects/ProjectsPageComponents/overview';
import { roles } from '@/data/data';

export default function ProjectDetailView({
    project,
    milestones,
    transactions,
    managers,
    contractors,
}: {
    project: any;
    milestones: any[];
    transactions: any[];
    notifications: any[];
    managers: any[];
    contractors: any[];
}) {
    return (
        <AppLayout
            breadcrumbs={[
                { title: 'Projects', href: '/projects' },
                {
                    title: project.title,
                    href: `/dashboard/projects/${project.id}`,
                },
            ]}
        >
            <Head title={project.title} />

            <div className="p-8">
                {/* LEFT SIDE: MAIN CONTENT (8 Cols) */}
                <div className="lg:col-span-8">
                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="mb-4">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="assignments">Assignments</TabsTrigger>
                            <TabsTrigger value="milestones">Milestones</TabsTrigger>
                            <TabsTrigger value="financials">Financials</TabsTrigger>
                        </TabsList>

                        {/* Overview Section */}
                        <TabsContent value="overview">
                            <Overview project={project} />
                        </TabsContent>

                        {/* Assignments Section */}
                        <TabsContent value="assignments">
                            <Assignments project={project} managers={managers} contractors={contractors} />
                        </TabsContent>

                        {/* Milestones Section */}
                        <TabsContent value="milestones">
                            <Milestones project={project} milestones={milestones} />
                        </TabsContent>

                        {/* Transaction List & Payment Section */}
                        <TabsContent value="financials">
                            <Financials project={project} transactions={transactions} />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </AppLayout>
    );
}

// Sub-component for Payment Validation
function PaymentValidationModal({ transaction }: { transaction: any }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" variant="outline">
                    Release Funds
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Validate Fund Release</DialogTitle>
                </DialogHeader>
                <Form {...releaseFunds(transaction.id)} className="space-y-4">
                    {({ processing }) => (
                        <>
                            <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
                                <p className="text-sm text-orange-800">
                                    Are you sure you want to release <strong>${transaction.amount}</strong>? This action
                                    validates that project milestones are verified.
                                </p>
                            </div>
                            <DialogFooter>
                                <Button type="submit" disabled={processing} className="w-full">
                                    <ShieldCheck className="mr-2" size={16} /> Confirm & Release
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}
