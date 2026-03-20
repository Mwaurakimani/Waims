import { Head, Form } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { store } from '@/wayfinder/App/Http/Controllers/ProjectController';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Projects', href: '/dashboard/projects' },
    { title: 'Create', href: '/dashboard/projects/create' },
];

export default function ProjectCreate({ managers }: { managers: any[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Initiate New Project" />

            <div className="mx-auto max-w-3xl p-6">
                {/* Header with Back Button */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" asChild>
                            <Link href="/dashboard/projects">
                                <ArrowLeft className="h-4 w-4" />
                            </Link>
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">
                                Initiate Project
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Register a new development project and assign
                                oversight.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Card */}
                <div className="rounded-xl border bg-card p-8 shadow-sm">
                    <Form {...store.form()} className="space-y-6">
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-6">
                                    {/* Project Title */}
                                    <div className="space-y-2">
                                        <Label htmlFor="title">
                                            Project Title
                                        </Label>
                                        <Input
                                            id="title"
                                            name="title"
                                            placeholder="e.g. Construction of Modern Market Phase 1"
                                            required
                                            autoFocus
                                        />
                                        <InputError message={errors.title} />
                                    </div>

                                    {/* Location & Category */}
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="location">
                                                Location (Ward/Sub-County)
                                            </Label>
                                            <Input
                                                id="location"
                                                name="location"
                                                placeholder="e.g. Westlands, Ward 4"
                                            />
                                            <InputError
                                                message={errors.location}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="category">
                                                Sector / Category
                                            </Label>
                                            <Select name={'category'}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select sector" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="infrastructure">
                                                        Infrastructure
                                                    </SelectItem>
                                                    <SelectItem value="health">
                                                        Health
                                                    </SelectItem>
                                                    <SelectItem value="education">
                                                        Education
                                                    </SelectItem>
                                                    <SelectItem value="water">
                                                        Water & Sanitation
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <InputError
                                                message={errors.category}
                                            />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2">
                                        <Label htmlFor="description">
                                            Project Description & Objectives
                                        </Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Outline the scope of work..."
                                            className="min-h-25"
                                            name={'description'}
                                        />
                                        <InputError
                                            message={errors.description}
                                        />
                                    </div>

                                    {/* Financials & Timeline */}
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="budget">
                                                Total Allocated Budget ($)
                                            </Label>
                                            <Input
                                                id="budget"
                                                type="number"
                                                name="budget"
                                                placeholder="0.00"
                                            />
                                            <InputError
                                                message={errors.budget}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="estimated_end_date">
                                                Estimated Completion Date
                                            </Label>
                                            <Input
                                                id="estimated_end_date"
                                                type="date"
                                                name={'estimated_end_date'}
                                            />
                                            <InputError
                                                message={
                                                    errors.estimated_end_date
                                                }
                                            />
                                        </div>
                                    </div>

                                    <hr className="my-2 border-dashed" />

                                    {/* Personnel Assignment */}
                                    <div className="space-y-2">
                                        <Label htmlFor="manager_id">
                                            Assign Project Manager
                                        </Label>
                                        <Select name={'manager_id'}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select internal supervisor" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Object.entries(managers).map(
                                                    ([id, name]) => (
                                                        <SelectItem
                                                            key={id}
                                                            value={id.toString()}
                                                        >
                                                            {name}
                                                        </SelectItem>
                                                    ),
                                                )}
                                            </SelectContent>
                                        </Select>
                                        <InputError
                                            message={errors.manager_id}
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full px-8 sm:w-auto"
                                    >
                                        {processing ? (
                                            <Spinner className="mr-2" />
                                        ) : (
                                            <Save className="mr-2 h-4 w-4" />
                                        )}
                                        Create Project
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
