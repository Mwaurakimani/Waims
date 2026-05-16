import { Head } from '@inertiajs/react';
import { Form } from '@inertiajs/react'; // Ensure this matches your project's Form component source
import { ArrowLeft, Save, AlertCircle, Lock, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { updateTransaction } from '@/actions/App/Http/Controllers/TransactionController';

export default function Edit({ transaction }: { transaction: any }) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Transactions', href: '/dashboard/transactions' },
        { title: 'Update Status', href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Transaction Status" />

            <div className="p-6">
                <div className="mb-6 flex items-center gap-4">
                    <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <h1 className="text-xl font-bold tracking-tight">Edit Transaction Status</h1>
                </div>

                <div className="space-y-6">
                    {/* Audit-Locked Details (Read Only) */}
                    <div className="rounded-xl border border-dashed bg-slate-50/50 p-6 shadow-sm">
                        <div className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                            <Lock size={12} /> Transaction Record (Locked)
                        </div>

                        <div className="grid grid-cols-2 gap-y-5 text-sm">
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-muted-foreground uppercase">Reference</p>
                                <p className="font-semibold">{transaction.reference}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-muted-foreground uppercase">Project</p>
                                <p className="font-semibold text-primary">{transaction.project?.title}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-muted-foreground uppercase">Amount</p>
                                <p className="font-mono font-bold">
                                    {'KES ' +
                                        parseFloat(transaction.amount).toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                        })}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-muted-foreground uppercase">Date</p>
                                <p className="font-medium">{new Date(transaction.date).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>

                    {/* Status Update Form */}
                    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                        <Form
                            action={updateTransaction({
                                id: transaction.id,
                            })}
                            method="patch"
                            className="space-y-6 p-6"
                        >
                            {(form) => (
                                <>
                                    <div className="space-y-3">
                                        <Label htmlFor="status" className="text-sm font-bold">
                                            Current Execution Status
                                        </Label>

                                        <select
                                            id="status"
                                            name="status"
                                            defaultValue={transaction.status}
                                            className="flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                                            required
                                        >
                                            <option value="pending_release">Pending Release</option>
                                            <option value="released">Released</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>

                                        {form.errors?.status && (
                                            <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-500">
                                                <AlertCircle size={12} /> {form.errors.status}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex gap-3 rounded-lg border border-blue-100 bg-blue-50 p-4">
                                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                                        <p className="text-xs leading-relaxed text-blue-800 italic">
                                            Modifying the status updates the financial tracking of the associated
                                            project. Amount and Project links remain immutable for audit integrity.
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-end gap-3 border-t pt-4">
                                        <Button type="button" variant="outline" onClick={() => window.history.back()}>
                                            Cancel
                                        </Button>
                                        <Button type="submit" disabled={form.processing} className="min-w-35">
                                            {form.processing ? (
                                                'Saving...'
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    <Save size={16} /> Save Status
                                                </span>
                                            )}
                                        </Button>
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
