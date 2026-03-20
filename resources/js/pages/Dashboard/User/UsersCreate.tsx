import { Head, Form } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { ArrowLeft, UserPlus } from 'lucide-react';
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
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { store } from '@/wayfinder/App/Http/Controllers/UsersController';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Users', href: '/dashboard/users' },
    { title: 'Create', href: '/dashboard/users/create' },
];

export default function UsersCreate() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create New User" />

            <div className="mx-auto max-w-2xl p-6">
                {/* Header with Back Button */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" asChild>
                            <Link href="/dashboard/users">
                                <ArrowLeft className="h-4 w-4" />
                            </Link>
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">
                                Create User
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Add a new staff member, contractor, or official.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Card */}
                <div className="rounded-xl border bg-card p-8 shadow-sm">
                    <Form {...store.form()} className="space-y-6">
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-4">
                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="e.g. John Doe"
                                            required
                                            autoFocus
                                        />
                                        <InputError message={errors.name} />
                                    </div>

                                    {/* Email Address */}
                                    <div className="space-y-2">
                                        <Label htmlFor="email">
                                            Email Address
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="john.doe@county.go.ke"
                                            required
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    {/* Role Selection */}
                                    <div className="space-y-2">
                                        <Label htmlFor="role">
                                            System Role
                                        </Label>
                                        <Select name="role">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Assign a role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">
                                                    Admin
                                                </SelectItem>
                                                <SelectItem value="2">
                                                    Moderator
                                                </SelectItem>
                                                <SelectItem value="3">
                                                    Project Manager
                                                </SelectItem>
                                                <SelectItem value="4">
                                                    Citizen
                                                </SelectItem>
                                                <SelectItem value="5">
                                                    Contractor
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.role} />
                                        <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                                            Controls dashboard access and
                                            permissions
                                        </p>
                                    </div>

                                    {/* Temporary Password Notice */}
                                    <div className="rounded-lg border border-dashed bg-muted/50 p-4 text-xs text-muted-foreground">
                                        Note: A default password will be
                                        generated and sent to the user's email
                                        address for their first login.
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
                                            <UserPlus className="mr-2 h-4 w-4" />
                                        )}
                                        Save User
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
