import { Head, Link, router } from '@inertiajs/react';
import {
    Search,
    Filter,
    ChevronDown,
    MoreHorizontal,
    AlertCircle,
    User,
    ExternalLink,
    Clock,
    CheckCircle2,
    XCircle
} from 'lucide-react';
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "@/components/ui/collapsible";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from '@/components/ui/input';
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
import { index } from '@/wayfinder/App/Http/Controllers/DisputeController';
import { destroy, show } from '@/wayfinder/routes/dashboard/disputes';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Disputes', href: '/dashboard/disputes' },
];

export default function DisputeList({ disputes, filters }: { disputes: any, filters: any }) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'open': return <AlertCircle size={14} className="text-red-500" />;
            case 'in_review': return <Clock size={14} className="text-orange-500" />;
            case 'resolved': return <CheckCircle2 size={14} className="text-green-500" />;
            case 'dismissed': return <XCircle size={14} className="text-slate-500" />;
            default: return null;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dispute Management" />

            <div className="flex flex-col gap-6 p-6">
                {/* Header */}
                <div className="flex flex-col items-start justify-between gap-4 rounded-xl border bg-white p-6 shadow-sm sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Disputes</h1>
                        <p className="text-sm text-muted-foreground">Manage and resolve milestone-related conflicts.</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search by subject..."
                                className="pl-10"
                                defaultValue={filters.search}
                                onBlur={(e) => router.get(index(), { search: e.target.value }, { preserveState: true })}
                            />
                        </div>
                        <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                            <CollapsibleTrigger asChild>
                                <Button variant="outline">
                                    <Filter className="mr-2 h-4 w-4" /> Filters
                                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                                </Button>
                            </CollapsibleTrigger>
                        </Collapsible>
                    </div>

                    <Collapsible open={isFilterOpen}>
                        <CollapsibleContent className="flex flex-wrap gap-4 rounded-lg border border-dashed bg-muted/30 p-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase text-muted-foreground">Status</label>
                                <select
                                    className="flex h-9 w-40 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                                    onChange={(e) => router.get(index(), { status: e.target.value }, { preserveState: true })}
                                >
                                    <option value="">All Statuses</option>
                                    <option value="open">Open</option>
                                    <option value="in_review">In Review</option>
                                    <option value="resolved">Resolved</option>
                                    <option value="dismissed">Dismissed</option>
                                </select>
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </div>

                {/* Table */}
                <div className="rounded-xl border bg-card">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Subject & Milestone</TableHead>
                                <TableHead>Raised By</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date Raised</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {disputes.data.map((dispute: any) => (
                                <TableRow key={dispute.id} className="group">
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-sm">{dispute.subject}</span>
                                            <span className="text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5">
                                                <ExternalLink size={10} />
                                                Milestone: {dispute.milestone?.title}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-xs">
                                            <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">
                                                {dispute.raiser?.name?.charAt(0)}
                                            </div>
                                            {dispute.raiser?.name}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="capitalize flex items-center gap-1.5 w-fit font-medium">
                                            {getStatusIcon(dispute.status)}
                                            {dispute.status.replace('_', ' ')}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-xs text-muted-foreground">
                                        {new Date(dispute.created_at).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem onClick={() => router.visit(show(dispute.id))}>
                                                    View Details
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="text-destructive"
                                                    onClick={() => { if(confirm('Delete dispute?')) router.delete(destroy(dispute.id)) }}
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

                {/* Pagination */}
                <div className="mt-2 flex items-center justify-between px-2">
                    <p className="text-xs text-muted-foreground italic">
                        Showing {disputes.from} to {disputes.to} of {disputes.total} disputes
                    </p>
                    {/*<Pagination links={disputes.links} />*/}
                </div>
            </div>
        </AppLayout>
    );
}
