import { useState } from 'react';
import { Form } from '@inertiajs/react';
import { Plus, DollarSign, Receipt, Calendar, Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from '@/components/ui/dialog';
import PaymentValidationModal from '@/pages/Dashboard/Projects/ProjectsPageComponents/PaymentValidationModal.jsx';

// Import Wayfinder action
import { releaseFunds } from '@/wayfinder/App/Http/Controllers/ProjectController';

export default function Financials({ project, transactions }) {
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    // Get Wayfinder action details
    const createAction = releaseFunds(project.id);

    return (
        <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                <div className="space-y-1">
                    <CardTitle className="text-xl font-bold">Transaction History</CardTitle>
                    <p className="text-xs text-muted-foreground">Manage project funds and releases.</p>
                </div>

                {/* Create Transaction Entry Point */}
                <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                    <DialogTrigger asChild>
                        <Button size="sm" className="gap-2">
                            <Plus size={16} /> New Transaction
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-106.25">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                                <Wallet className="text-primary" size={20} />
                                Record New Transaction
                            </DialogTitle>
                        </DialogHeader>

                        {/* Inertia v2 Form Integration */}
                        <Form
                            action={createAction.url}
                            method={createAction.method}
                            onSuccess={() => setIsCreateOpen(false)}
                            className="space-y-4 pt-4"
                        >
                            {(form) => (
                                <>
                                    <div className="space-y-2">
                                        <Label htmlFor="reference">Reference / Purpose</Label>
                                        <Input
                                            id="reference"
                                            name="reference"
                                            placeholder="e.g. Phase 1 Material Procurement"
                                            required
                                        />
                                        {form.errors?.reference && (
                                            <p className="text-xs text-red-500">{form.errors.reference}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="amount">Amount ($)</Label>
                                            <div className="relative">
                                                <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    id="amount"
                                                    name="amount"
                                                    type="number"
                                                    step="0.01"
                                                    className="pl-8"
                                                    placeholder="0.00"
                                                    required
                                                />
                                            </div>
                                            {form.errors?.amount && (
                                                <p className="text-xs text-red-500">{form.errors.amount}</p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="date">Transaction Date</Label>
                                            <Input
                                                id="date"
                                                name="date"
                                                type="date"
                                                defaultValue={new Date().toISOString().split('T')[0]}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <DialogFooter className="pt-4">
                                        <Button type="submit" disabled={form.processing} className="w-full">
                                            {form.processing ? 'Recording...' : 'Save Transaction'}
                                        </Button>
                                    </DialogFooter>
                                </>
                            )}
                        </Form>
                    </DialogContent>
                </Dialog>
            </CardHeader>

            <CardContent className="pt-6">
                <div className="space-y-0">
                    {transactions.length > 0 ? (
                        transactions.map((tx, index) => (
                            <div
                                key={tx.id}
                                className={`flex items-center justify-between py-4 ${
                                    index !== transactions.length - 1 ? 'border-b' : ''
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-muted p-2">
                                        <Receipt size={18} className="text-muted-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">{tx.reference}</p>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <Calendar size={12} />
                                            {tx.date}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-foreground">
                                            ${tx.amount?.toLocaleString()}
                                        </p>
                                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                                            {tx.status?.replace('_', ' ')}
                                        </p>
                                    </div>

                                    {/* Action column */}
                                    <div className="min-w-30 flex justify-end">
                                        {tx.status === 'pending_release' ? (
                                            <PaymentValidationModal transaction={tx} />
                                        ) : (
                                            <div className="flex items-center gap-1 text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                                                <Wallet size={12} /> Released
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed rounded-xl">
                            <Receipt size={32} className="text-muted-foreground/40 mb-2" />
                            <p className="text-sm font-medium text-muted-foreground">No transactions recorded</p>
                            <p className="text-xs text-muted-foreground/60">Click "New Transaction" to begin tracking funds.</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
