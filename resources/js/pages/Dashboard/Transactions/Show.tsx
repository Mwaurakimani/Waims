import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Calendar,
    User,
    Briefcase,
    ShieldCheck,
    FileText,
    ExternalLink,
    TrendingUp,
    Wallet,
    AlertCircle,
    CheckCircle2,
    Clock,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress'; // Assumes shadcn progress
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { editTransaction } from '@/wayfinder/App/Http/Controllers/TransactionController';

export default function Show({
    transaction,
    stats,
}: {
    transaction: any;
    stats: any;
}) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Transactions', href: '/dashboard/transactions' },
        { title: transaction.reference, href: '#' },
    ];

    const isReleased = transaction.status === 'released';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Transaction: ${transaction.reference}`} />

            <div className="mx-auto max-w-7xl space-y-6 p-6">
                {/* 1. Top Action Bar */}
                <div className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.history.back()}
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">
                                {transaction.reference}
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Recorded on{' '}
                                {new Date(
                                    transaction.date,
                                ).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Badge
                            variant={isReleased ? 'default' : 'outline'}
                            className={`px-3 py-1 ${isReleased ? 'bg-green-600' : 'border-orange-200 bg-orange-50 text-orange-600'}`}
                        >
                            {isReleased ? (
                                <CheckCircle2 className="mr-1 h-3 w-3" />
                            ) : (
                                <Clock className="mr-1 h-3 w-3" />
                            )}
                            {transaction.status?.replace('_', ' ')}
                        </Badge>
                        <Button>
                            <Link href={editTransaction(transaction.id)}>
                                Edit
                            </Link>
                        </Button>
                        <Button className="bg-blue-600">
                            Download Invoice
                        </Button>
                    </div>
                </div>

                {/* 2. Key Metrics Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <div className="rounded-xl border bg-white p-4 shadow-sm">
                        <p className="text-xs font-medium text-muted-foreground uppercase">
                            Transaction Amount
                        </p>
                        <p className="text-2xl font-bold text-primary">
                            ${parseFloat(transaction.amount).toLocaleString()}
                        </p>
                    </div>
                    <div className="rounded-xl border bg-white p-4 shadow-sm">
                        <p className="text-xs font-medium text-muted-foreground uppercase">
                            Project Budget
                        </p>
                        <p className="text-2xl font-bold">
                            ${stats.budget.toLocaleString()}
                        </p>
                    </div>
                    <div className="rounded-xl border bg-white p-4 shadow-sm">
                        <p className="text-xs font-medium text-muted-foreground uppercase">
                            Total Released
                        </p>
                        <p className="text-2xl font-bold text-green-600">
                            ${stats.total_spent.toLocaleString()}
                        </p>
                    </div>
                    <div className="rounded-xl border bg-white p-4 shadow-sm">
                        <p className="text-xs font-medium text-muted-foreground uppercase">
                            Budget Remaining
                        </p>
                        <p
                            className={`text-2xl font-bold ${stats.remaining < 0 ? 'text-destructive' : 'text-blue-600'}`}
                        >
                            ${stats.remaining.toLocaleString()}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Left Column: Transaction & Project Details */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Financial Health "Infograph" */}
                        <div className="rounded-xl border bg-white p-6 shadow-sm">
                            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                                <TrendingUp
                                    size={20}
                                    className="text-blue-600"
                                />{' '}
                                Project Burn Rate
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">
                                        Usage of Allocated Funds
                                    </span>
                                    <span className="font-bold">
                                        {stats.burn_percentage}%
                                    </span>
                                </div>
                                <Progress
                                    value={stats.burn_percentage}
                                    className="h-3"
                                />
                                <p className="text-xs text-muted-foreground italic">
                                    {stats.burn_percentage > 90
                                        ? '⚠️ Warning: Project is nearing budget limit.'
                                        : 'Project is currently within financial parameters.'}
                                </p>
                            </div>
                        </div>

                        {/* Metadata & Details */}
                        <div className="rounded-xl border bg-white p-6 shadow-sm">
                            <h3 className="mb-4 font-bold">
                                Details & Documentation
                            </h3>
                            <div className="grid grid-cols-2 gap-6 text-sm">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase">
                                        Associated Project
                                    </span>
                                    <p className="flex items-center gap-1 font-medium">
                                        <Briefcase size={14} />{' '}
                                        {transaction.project?.name}
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase">
                                        Record ID
                                    </span>
                                    <p className="font-mono">
                                        {transaction.id}
                                    </p>
                                </div>
                            </div>

                            {transaction.meta && (
                                <div className="mt-6 border-t pt-4">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase">
                                        Meta Tags
                                    </span>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {Object.entries(transaction.meta).map(
                                            ([key, val]) => (
                                                <Badge
                                                    key={key}
                                                    variant="secondary"
                                                    className="text-[10px]"
                                                >
                                                    {key}: {String(val)}
                                                </Badge>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Stakeholders */}
                    <div className="space-y-6">
                        <div className="rounded-xl border bg-white p-6 shadow-sm">
                            <h3 className="mb-6 flex items-center gap-2 font-bold">
                                <ShieldCheck
                                    size={18}
                                    className="text-green-600"
                                />{' '}
                                Project Personnel
                            </h3>

                            <div className="space-y-6">
                                {/* Manager */}
                                <div className="relative border-l-2 border-blue-500 pl-4">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase">
                                        Project Manager
                                    </span>
                                    <p className="mt-1 text-sm font-bold">
                                        {transaction.project?.manager?.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {transaction.project?.manager?.email}
                                    </p>
                                </div>

                                {/* Contractor */}
                                <div className="relative border-l-2 border-orange-500 pl-4">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase">
                                        Prime Contractor
                                    </span>
                                    <p className="mt-1 text-sm font-bold">
                                        {transaction.project?.contractor
                                            ?.name || 'Pending Appointment'}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {transaction.project?.contractor
                                            ?.email || 'N/A'}
                                    </p>
                                </div>

                                {/* Creator */}
                                <div className="mt-4 flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-sm">
                                        <User
                                            size={14}
                                            className="text-slate-500"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase">
                                            Input By
                                        </p>
                                        <p className="text-xs font-medium">
                                            {transaction.user?.name}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="mt-6 w-full text-xs"
                                asChild
                            >
                                <Link
                                    href={`/dashboard/projects/${transaction.project?.id}`}
                                >
                                    View Full Project History{' '}
                                    <ExternalLink size={12} className="ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
