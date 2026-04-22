import { Head, router } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import {
    MoreHorizontal,
    Calendar,
    Download
} from 'lucide-react';
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Transactions', href: '/dashboard/transactions' },
];



function Pagination({ links }: { links: any[] }) {
    if (links.length <= 3) return null;

    return (
        <div className="flex flex-wrap justify-center gap-1 py-4">
            {links.map((link, key) =>
                link.url === null ? (
                    <div
                        key={key}
                        className="rounded border px-4 py-2 text-sm text-gray-400"
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ) : (
                    <Link
                        key={key}
                        href={link.url}
                        className={`rounded border px-4 py-2 text-sm hover:bg-white focus:border-primary ${link.active ? 'bg-primary text-white' : ''}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ),
            )}
        </div>
    );
}


export default function TransactionList({ transactions }: { transactions: any }) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Transactions" />

            <div className="flex flex-col gap-6 p-6">
                {/* Header Section (Same as your snippet) */}
                <div className="flex flex-col items-start justify-between gap-4 rounded-xl border bg-white p-6 shadow-sm sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Financial Records
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Manage project expenditures and fund releases.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" /> Export
                        </Button>
                        {/*<Button*/}
                        {/*    size="sm"*/}
                        {/*    onClick={() => router.visit('/transactions/create')}*/}
                        {/*>*/}
                        {/*    <Plus className="mr-2 h-4 w-4" /> Record Transaction*/}
                        {/*</Button>*/}
                    </div>
                </div>

                {/* Search & Filter Bar (Same logic) */}
                <div className="flex flex-col gap-4">
                    {/* ... (Search input and Filter toggle) */}
                </div>

                {/* Updated Table */}
                <div className="rounded-xl border bg-card">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Reference & Project</TableHead>
                                <TableHead>Recorded By</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">
                                    Amount
                                </TableHead>
                                <TableHead className="text-right">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions?.data?.map((tx: any) => (
                                <TableRow key={tx.id}>
                                    <TableCell className="text-xs whitespace-nowrap text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            {new Date(
                                                tx.date,
                                            ).toLocaleDateString()}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">
                                                {tx.reference}
                                            </span>
                                            <span className="text-xs text-primary">
                                                {tx.project?.title ||
                                                    'No Project Assigned'}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-[10px]">
                                                {tx.user?.name?.charAt(0)}
                                            </div>
                                            {tx.user?.name}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                tx.status === 'released'
                                                    ? 'default'
                                                    : 'secondary'
                                            }
                                            className={`capitalize ${tx.status === 'released' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                                        >
                                            {tx.status.replace('_', ' ')}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right font-mono font-bold">
                                        $
                                        {parseFloat(tx.amount).toLocaleString(
                                            undefined,
                                            { minimumFractionDigits: 2 },
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                >
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem
                                                    onClick={() =>
                                                        router.visit(
                                                            `/dashboard/transactions/${tx.id}`,
                                                        )
                                                    }
                                                >
                                                    View Details
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onClick={() =>
                                                        router.visit(
                                                            `/dashboard/transactions/${tx.id}/edit`,
                                                        )
                                                    }
                                                >
                                                    Edit Record
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="text-destructive"
                                                    onClick={() => {
                                                        if (
                                                            confirm(
                                                                'Delete this record?',
                                                            )
                                                        )
                                                            router.delete(
                                                                `/transactions/${tx.id}`,
                                                            );
                                                    }}
                                                >
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Add pagination details and controls below the table */}
            <div className="mt-4 flex items-center justify-between px-2">
                <p className="text-sm text-muted-foreground">
                    Showing {transactions.from} to {transactions.to} of{' '}
                    {transactions.total} records
                </p>
                <Pagination links={transactions.links} />
            </div>
        </AppLayout>
    );
}
