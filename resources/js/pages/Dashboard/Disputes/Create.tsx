import { Head } from '@inertiajs/react';
import { Form } from '@inertiajs/react';
import {
    ArrowLeft,
    AlertTriangle,
    Phone,
    Send,
    ShieldAlert,
    Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { store } from '@/routes/dashboard/disputes';
import type { BreadcrumbItem } from '@/types';

export default function Create({ selectedMilestone }: { selectedMilestone: any }) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Disputes', href: '/dashboard/disputes' },
        { title: 'Raise New Dispute', href: '#' },
    ];

    if (!selectedMilestone) {
        return (
            <AppLayout breadcrumbs={breadcrumbs}>
                <div className="p-6 text-center">
                    <p>No milestone selected. Please select a milestone from a project to raise a dispute.</p>
                    <Button className="mt-4" onClick={() => window.history.back()}>Go Back</Button>
                </div>
            </AppLayout>
        );
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Raise Milestone Dispute" />

            <div className="mx-auto max-w-2xl space-y-6 p-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight">Raise a Dispute</h1>
                        <p className="text-xs text-muted-foreground">Formal objection to milestone progress or quality.</p>
                    </div>
                </div>

                {/* Milestone Context Card (Read Only) */}
                <div className="rounded-xl border border-red-200 bg-red-50/30 p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="rounded-full bg-red-100 p-2 text-red-600">
                            <ShieldAlert size={20} />
                        </div>
                        <div className="space-y-2">
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Target Milestone</p>
                                <h2 className="text-lg font-bold leading-tight">{selectedMilestone.title}</h2>
                            </div>

                            <div className="flex flex-wrap gap-x-6 gap-y-2">
                                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                    <Briefcase size={14} className="text-slate-400" />
                                    <span className="font-medium">{selectedMilestone.project?.name}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                    <AlertTriangle size={14} className="text-slate-400" />
                                    <span>Status: <span className="capitalize">{selectedMilestone.status}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submission Form */}
                <div className="rounded-xl border bg-white shadow-sm">
                    <Form
                        action={store()} // Ensure route name matches your web.php
                        method="post"
                        className="space-y-5 p-6"
                    >
                        {(form) => (
                            <>
                                {/* Hidden ID to link the dispute */}
                                <input type="hidden" name="milestone_id" value={selectedMilestone.id} />

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject / Heading</Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        placeholder="e.g. Incomplete deliverables or quality issues"
                                        required
                                    />
                                    {form.errors?.subject && (
                                        <p className="text-xs font-medium text-red-500">{form.errors.subject}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Reason for Dispute</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Provide a detailed explanation for why this milestone is being disputed..."
                                        rows={6}
                                        required
                                    />
                                    {form.errors?.message && (
                                        <p className="text-xs font-medium text-red-500">{form.errors.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="contact_info">Contact Info for Follow-up</Label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="contact_info"
                                            name="contact_info"
                                            placeholder="Phone or specific email for this case"
                                            className="pl-10"
                                        />
                                    </div>
                                    <p className="text-[10px] italic text-muted-foreground">
                                        The assigned resolver will use this to contact you.
                                    </p>
                                </div>

                                <div className="flex items-center justify-end gap-3 border-t pt-6">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => window.history.back()}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        disabled={form.processing}
                                        className="min-w-35 bg-red-600 text-white hover:bg-red-700"
                                    >
                                        {form.processing ? 'Submitting...' : (
                                            <span className="flex items-center gap-2">
                                                <Send size={16} /> Raise Dispute
                                            </span>
                                        )}
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </AppLayout>
    );
}
