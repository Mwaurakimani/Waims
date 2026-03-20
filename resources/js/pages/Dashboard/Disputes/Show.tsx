import { Head, Form } from '@inertiajs/react';
import {
    CheckCircle2,
    AlertCircle,
    Lock,
    ShieldCheck,
    ArrowLeft,
    Calendar,
    User,
    Scale,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { updateStatus } from '@/wayfinder/App/Http/Controllers/DisputeController';

export default function Show({ dispute }: { dispute: any }) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Disputes', href: '/dashboard/disputes' },
        { title: 'View Case', href: '#' },
    ];

    const isClosed = ['resolved', 'dismissed'].includes(dispute.status);

    return (
        <Layout breadcrumbs={breadcrumbs}>
            <Head title={`Dispute: ${dispute.subject}`} />

            <div className="mx-auto max-w-5xl space-y-6 p-6">
                {/* Header Actions */}
                <div className="flex items-center justify-between">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to List
                    </Button>
                    <Badge
                        variant={isClosed ? 'default' : 'outline'}
                        className={`px-3 py-1 capitalize ${dispute.status === 'open' ? 'border-red-200 bg-red-50 text-red-700' : ''}`}
                    >
                        {dispute.status?.replace('_', ' ') || 'Pending'}
                    </Badge>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Left: Dispute Details */}
                    <div className="space-y-6 lg:col-span-2">
                        <div className="rounded-xl border bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                <Scale size={14} /> Dispute Case Details
                            </div>
                            <h1 className="text-2xl font-bold tracking-tight">
                                {dispute.subject}
                            </h1>
                            <div className="mt-4 rounded-lg border bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
                                {dispute.message}
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-6 text-sm">
                                <div>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase">
                                        Target Milestone
                                    </p>
                                    <p className="font-medium text-primary">
                                        {dispute.milestone?.title}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase">
                                        Project
                                    </p>
                                    <p className="font-medium">
                                        {dispute.milestone?.project?.name}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Resolution Logic */}
                        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                            <div className="flex items-center justify-between border-b bg-slate-50 p-4">
                                <h3 className="flex items-center gap-2 text-sm font-bold">
                                    <ShieldCheck
                                        size={18}
                                        className="text-blue-600"
                                    />
                                    Resolution Summary
                                </h3>
                                {isClosed && (
                                    <Badge
                                        variant="secondary"
                                        className="gap-1 text-[10px]"
                                    >
                                        <Lock size={10} /> Locked
                                    </Badge>
                                )}
                            </div>

                            {isClosed ? (
                                <div className="space-y-4 p-6">
                                    <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                                        <p className="mb-2 text-[10px] font-bold text-green-700 uppercase">
                                            Final Decision
                                        </p>
                                        <p className="text-sm font-medium text-green-900">
                                            {dispute.resolution}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground italic">
                                        <CheckCircle2
                                            size={14}
                                            className="text-green-600"
                                        />
                                        Closed by {dispute.resolver?.name} on{' '}
                                        {new Date(
                                            dispute.resolved_at,
                                        ).toLocaleString()}
                                    </div>
                                </div>
                            ) : (
                                <Form
                                    action={updateStatus(dispute.id)}
                                    method="patch"
                                    className="space-y-5 p-6"
                                >
                                    {(form) => (
                                        <>
                                            <div className="space-y-2">
                                                <Label htmlFor="status">
                                                    Decision
                                                </Label>
                                                <select
                                                    id="status"
                                                    name="status"
                                                    defaultValue={
                                                        dispute.status
                                                    }
                                                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:ring-1 focus:ring-ring"
                                                >
                                                    <option value="open">
                                                        Keep Open
                                                    </option>
                                                    <option value="in_review">
                                                        Move to Review
                                                    </option>
                                                    <option value="resolved">
                                                        Mark as Resolved
                                                    </option>
                                                    <option value="dismissed">
                                                        Dismiss Dispute
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="resolution">
                                                    Resolution Findings
                                                </Label>
                                                <Textarea
                                                    id="resolution"
                                                    name="resolution"
                                                    placeholder="Explain the outcome and any required adjustments..."
                                                    defaultValue={
                                                        dispute.resolution
                                                    }
                                                    rows={5}
                                                    required
                                                />
                                                {form.errors?.resolution && (
                                                    <p className="text-xs font-medium text-red-500">
                                                        {form.errors.resolution}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="flex justify-end border-t pt-4">
                                                <Button
                                                    type="submit"
                                                    disabled={form.processing}
                                                    className="min-w-[160px] bg-blue-600 hover:bg-blue-700"
                                                >
                                                    {form.processing
                                                        ? 'Saving...'
                                                        : 'Finalize Decision'}
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </Form>
                            )}
                        </div>
                    </div>

                    {/* Right Side: Stakeholders */}
                    <div className="space-y-6">
                        <div className="rounded-xl border bg-card p-6 shadow-sm">
                            <h3 className="mb-4 text-sm font-semibold">
                                Case Stakeholders
                            </h3>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-muted-foreground uppercase">
                                        Raised By
                                    </label>
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
                                            {dispute.raiser?.name?.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">
                                                {dispute.raiser?.name}
                                            </p>
                                            <p className="text-[10px] text-muted-foreground">
                                                {dispute.raiser?.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-muted-foreground uppercase">
                                        Contact for Follow-up
                                    </label>
                                    <p className="flex items-center gap-2 text-sm font-medium">
                                        <AlertCircle
                                            size={14}
                                            className="text-orange-500"
                                        />
                                        {dispute.contact_info ||
                                            'No secondary contact provided'}
                                    </p>
                                </div>

                                <hr />

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-muted-foreground uppercase">
                                        Case Timeline
                                    </label>
                                    <div className="mt-2 space-y-3">
                                        <div className="flex items-center gap-2 text-xs">
                                            <Calendar
                                                size={14}
                                                className="text-slate-400"
                                            />
                                            <span>
                                                Opened:{' '}
                                                {new Date(
                                                    dispute.created_at,
                                                ).toLocaleDateString()}
                                            </span>
                                        </div>
                                        {dispute.resolved_at && (
                                            <div className="flex items-center gap-2 text-xs">
                                                <CheckCircle2
                                                    size={14}
                                                    className="text-green-500"
                                                />
                                                <span>
                                                    Closed:{' '}
                                                    {new Date(
                                                        dispute.resolved_at,
                                                    ).toLocaleDateString()}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
