import { useState } from 'react';
import { Form } from '@inertiajs/react';
import { ShieldCheck, AlertTriangle, X, DollarSign, Info } from 'lucide-react';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ProjectController from '@/actions/App/Http/Controllers/ProjectController.ts';

export default function PaymentValidationModal({ transaction }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-orange-700"
                >
                    <ShieldCheck size={14} /> Release Funds
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-106.25">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <ShieldCheck className="text-emerald-500" size={20} />
                        Validate Fund Release
                    </DialogTitle>
                    <DialogDescription>
                        Confirming this release will immediately transfer the funds to the contractor's account.
                    </DialogDescription>
                </DialogHeader>

                {/* Wayfinder + Inertia v2 Form Integration */}
                <Form
                    {...ProjectController.releaseFunds(transaction.id).form()}
                    onSuccess={() => setIsOpen(false)}
                    className="space-y-6 pt-4"
                >
                    {({ processing }) => (
                        <>
                            <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
                                <div className="flex gap-3">
                                    <AlertTriangle className="mt-0.5 shrink-0 text-orange-600" size={18} />
                                    <div className="space-y-1">
                                        <p className="text-sm font-semibold text-orange-800">Review Transaction</p>
                                        <div className="space-y-1 text-xs text-orange-700">
                                            <p>
                                                Reference:{' '}
                                                <span className="font-mono font-medium">{transaction.reference}</span>
                                            </p>
                                            <p className="pt-1 text-base font-bold text-orange-900">
                                                Amount: ${transaction.amount?.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 rounded-lg border bg-muted/30 p-3">
                                <Info className="mt-0.5 shrink-0 text-muted-foreground" size={16} />
                                <p className="text-xs leading-relaxed text-muted-foreground">
                                    By releasing these funds, you verify that the associated project milestones have
                                    been completed to satisfaction and are approved for payment.
                                </p>
                            </div>

                            <DialogFooter className="gap-2 sm:gap-0">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() => setIsOpen(false)}
                                    disabled={processing}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-emerald-600 hover:bg-emerald-700"
                                    disabled={processing}
                                >
                                    {processing ? 'Processing...' : 'Confirm Release'}
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}
