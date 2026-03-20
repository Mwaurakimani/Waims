import { useState } from 'react';
import { Form, router, useForm } from '@inertiajs/react';
import {
    Plus,
    MoreVertical,
    CheckCircle,
    AlertCircle,
    Trash2,
    Calendar,
    FileUp,
    X,
    ExternalLink,
    Clock,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { formatDate } from '@/lib/utils';

import {
    store,
    update,
    destroy,
} from '@/wayfinder/App/Http/Controllers/MilestoneController.ts';
import {
    markAsComplete as complete,
    approve,
    reject,
    dispute,
    resolve,
} from '@/wayfinder/App/Http/Controllers/MilestoneController';
import { create } from '@/wayfinder/App/Http/Controllers/DisputeController.ts';



export default function Milestones({ project, milestones }) {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [selectedMilestone, setSelectedMilestone] = useState(null);

    const statusStyles = {
        pending: 'bg-slate-100 text-slate-700',
        completed: 'bg-emerald-100 text-emerald-700',
        disputed: 'bg-red-100 text-red-700',
        approved: 'bg-blue-100 text-blue-700',
    };

    return (
        <div className="space-y-6">
            {/* Top Actions Container */}
            <div className="flex items-center justify-between rounded-xl border border-dashed bg-muted/30 p-4">
                <div>
                    <h3 className="text-lg font-bold">Project Milestones</h3>
                    <p className="text-sm text-muted-foreground">
                        Track and manage deliverable phases.
                    </p>
                </div>

                <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                    <DialogTrigger asChild>
                        <Button className="gap-2">
                            <Plus size={16} /> New Milestone
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-125">
                        <DialogHeader>
                            <DialogTitle>Create New Milestone</DialogTitle>
                        </DialogHeader>
                        <MilestoneForm
                            project={project}
                            onSuccess={() => setIsAddOpen(false)}
                        />
                    </DialogContent>
                </Dialog>
            </div>

            {/* Chronological List */}
            <div className="relative space-y-4 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {milestones.length > 0 ? (
                    milestones.map((ms) => (
                        <div key={ms.id} className="group relative pl-12">
                            {/* Timeline Node */}
                            <div
                                className={`absolute left-0 z-10 mt-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background shadow-sm ${statusStyles[ms.status]}`}
                            >
                                {ms.status === 'completed' ? (
                                    <CheckCircle size={18} />
                                ) : (
                                    <Clock size={18} />
                                )}
                            </div>

                            <Card
                                className="cursor-pointer transition-all hover:shadow-md"
                                onClick={() => setSelectedMilestone(ms)}
                            >
                                <CardContent className="flex items-center justify-between p-5">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <h4 className="text-lg font-bold">
                                                {ms.title}
                                            </h4>
                                            <Badge
                                                variant="outline"
                                                className={`capitalize ${statusStyles[ms.status]}`}
                                            >
                                                {ms.status}
                                            </Badge>
                                        </div>
                                        <p className="line-clamp-1 text-sm text-muted-foreground">
                                            {ms.description}
                                        </p>
                                        <div className="flex items-center gap-4 pt-1 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />{' '}
                                                {formatDate(ms.start_date)} -{' '}
                                                {formatDate(ms.end_date)}
                                            </span>
                                            {ms.files_count > 0 && (
                                                <span className="flex items-center gap-1">
                                                    <FileUp size={12} />{' '}
                                                    {ms.files_count} files
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical size={18} />
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    ))
                ) : (
                    <div className="py-12 text-center text-muted-foreground">
                        No milestones defined yet.
                    </div>
                )}
            </div>

            {/* Edit/Update Dialog */}
            <Dialog
                open={!!selectedMilestone}
                onOpenChange={() => setSelectedMilestone(null)}
            >
                <DialogContent className="sm:max-w-150">
                    <DialogHeader>
                        <DialogTitle>Manage Milestone</DialogTitle>
                    </DialogHeader>
                    {selectedMilestone && (
                        <MilestoneForm
                            project={project}
                            milestone={selectedMilestone}
                            onSuccess={() => setSelectedMilestone(null)}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}

/**
 * Reusable Form for Create & Edit
 */
function MilestoneForm({ project, milestone = null, onSuccess }) {
    const action = milestone ? update(milestone.id) : store(project.id);

    return (
        <Form
            action={action.url}
            method={action.method}
            onSuccess={onSuccess}
            className="space-y-4"
        >
            {({ errors, processing }) => (
                <>
                    <div className="space-y-2">
                        <Label>Title</Label>
                        <Input
                            name={'title'}
                            defaultValue={milestone?.title || ''}
                            placeholder="e.g., Foundation Completion"
                        />
                        {errors?.title && (
                            <p className="text-xs text-red-500">
                                {errors?.title}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                            name={'description'}
                            defaultValue={milestone?.description}
                            placeholder="Describe what constitutes this phase..."
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Start Date</Label>
                            <Input
                                type="date"
                                name="start_date"
                                defaultValue={
                                    milestone?.start_date?.split('T')[0] || ''
                                }
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>End Date (Deadline)</Label>
                            <Input
                                type="date"
                                name="end_date"
                                defaultValue={
                                    milestone?.end_date?.split('T')[0] || ''
                                }
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Supporting Files</Label>
                        <Input
                            type="file"
                            name="files[]" // Crucial: name must match your backend validation (array)
                            multiple
                        />

                        {/* Existing Files Display */}
                        {milestone?.files_url?.length > 0 && (
                            <div className="mt-2 space-y-2 rounded-lg border bg-muted/20 p-2">
                                {milestone.files_url.map((file, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between border-b p-1 text-xs last:border-0"
                                    >
                                        <span className="flex items-center gap-2">
                                            <FileUp size={12} /> {file.name}
                                        </span>
                                        <div className="flex gap-2">
                                            <a
                                                href={file.url}
                                                target="_blank"
                                                className="text-blue-500 hover:underline"
                                            >
                                                View
                                            </a>
                                            {/* To remove existing files, you'll likely need a hidden input or a separate action */}
                                            <button
                                                type="button"
                                                className="text-red-500"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <DialogFooter className="flex-col gap-2 pt-4 sm:flex-row">
                        {milestone && (
                            <div className="mr-auto flex flex-wrap gap-2">
                                {/* CONTRACTOR: Mark as Complete */}
                                {milestone.status === 'pending' && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                                        onClick={() =>
                                            router.post(
                                                complete(milestone.id).url,
                                                {},
                                                {
                                                    onSuccess: () => {
                                                        onSuccess();
                                                    },
                                                },
                                            )
                                        }
                                    >
                                        Complete
                                    </Button>
                                )}

                                {/* MANAGER: Approve or Reject */}
                                {milestone.status === 'completed' && (
                                    <>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="border-blue-200 text-blue-600 hover:bg-blue-50"
                                            onClick={() =>
                                                router.post(
                                                    approve(milestone.id).url,
                                                    {},
                                                    {
                                                        onSuccess: () => {
                                                            onSuccess();
                                                        },
                                                    },
                                                )
                                            }
                                        >
                                            Approve
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="border-orange-200 text-orange-600 hover:bg-orange-50"
                                            onClick={() => {
                                                const reason = prompt(
                                                    'Reason for rejection:',
                                                );
                                                if (reason)
                                                    router.post(
                                                        reject(milestone.id)
                                                            .url,
                                                        { reason },
                                                        {
                                                            onSuccess: () => {
                                                                onSuccess();
                                                            },
                                                        },
                                                    );
                                            }}
                                        >
                                            Reject
                                        </Button>
                                    </>
                                )}

                                {/* ANY PARTY: Dispute (if not already disputed) */}
                                {milestone.status !== 'disputed' && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="border-red-200 text-red-600 hover:bg-red-50"
                                        onClick={() => router.get(
                                            create().url,
                                        {
                                            milestone: milestone.id,
                                        })
                                    }
                                    >
                                        Raise Dispute
                                    </Button>
                                )}

                                {/* ADMIN: Resolve Dispute */}
                                {milestone.status === 'disputed' && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="border-purple-200 text-purple-600 hover:bg-purple-50"
                                        onClick={() => {
                                            const notes =
                                                prompt('Resolution notes:');
                                            if (notes)
                                                router.post(
                                                    resolve(milestone.id).url,
                                                    {
                                                        notes,
                                                        final_status:
                                                            'approved', // Or logic to choose status
                                                    },
                                                    {
                                                        onSuccess: () => {
                                                            onSuccess();
                                                        },
                                                    },
                                                );
                                        }}
                                    >
                                        Resolve
                                    </Button>
                                )}

                                {/* DELETE */}
                                <Button
                                    type="button"
                                    variant="ghost"
                                    className="text-red-500 hover:bg-red-50 hover:text-red-700"
                                    onClick={() => {
                                        if (
                                            confirm(
                                                'Permanently delete this milestone?',
                                            )
                                        ) {
                                            router.delete(
                                                destroy(milestone.id).url,{},{
                                                    onSuccess: () => {
                                                        onSuccess();
                                                    },
                                                }
                                            );
                                        }
                                    }}
                                >
                                    <Trash2 size={16} />
                                </Button>
                            </div>
                        )}

                        <Button type="submit" disabled={processing}>
                            {milestone ? 'Update Details' : 'Create Milestone'}
                        </Button>
                    </DialogFooter>
                </>
            )}
        </Form>
    );
}

// Helper handlers for buttons outside the main form
// function updateStatus(id, status) {
//     const action = updateMilestoneStatus(id);
//     Form.post(action.url, { status });
// }
//
// function deleteMs(id) {
//     if (confirm('Are you sure you want to delete this milestone?')) {
//         const action = deleteMilestone(id);
//         Form.delete(action.url);
//     }
// }
