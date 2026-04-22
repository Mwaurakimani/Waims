import { Head, Link, router } from '@inertiajs/react';
import {
    Plus,
    Search,
    Filter,
    ChevronDown,
    MoreHorizontal,
    UserCircle,
    BookUser,
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
import { suspend, viewUser} from '@/wayfinder/App/Http/Controllers/UsersController';
import { create as CreateUser } from '@/wayfinder/routes/dashboard/users';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Users', href: 'dashboard/users' },
];

export default function UsersList({usersList}:{usersList:any}) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Management" />

            <div className="flex flex-col gap-6 p-6">
                {/* Top Banner / Header */}
                <div className="flex flex-col items-start justify-between gap-4 rounded-xl border bg-white p-6 shadow-sm sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            User Management
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Manage county staff, contractors, and citizen
                            access.
                        </p>
                    </div>
                    <Button
                        className="shrink-0"
                        onClick={() => router.visit(CreateUser())}
                    >
                        <Plus className="mr-2 h-4 w-4" /> Create User
                    </Button>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search by name or email..."
                                className="pl-10"
                            />
                        </div>
                        <Collapsible
                            open={isFilterOpen}
                            onOpenChange={setIsFilterOpen}
                        >
                            <CollapsibleTrigger asChild>
                                <Button variant="outline">
                                    <Filter className="mr-2 h-4 w-4" /> Filters
                                    <ChevronDown
                                        className={`ml-2 h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
                                    />
                                </Button>
                            </CollapsibleTrigger>
                        </Collapsible>
                    </div>

                    <Collapsible open={isFilterOpen}>
                        <CollapsibleContent className="flex flex-wrap gap-4 rounded-lg border border-dashed bg-muted/30 p-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold uppercase">
                                    Role
                                </label>
                                <select className="flex h-9 w-40 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none">
                                    <option>All Roles</option>
                                    <option>Admin</option>
                                    <option>Project Manager</option>
                                    <option>Contractor</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold uppercase">
                                    Status
                                </label>
                                <select className="flex h-9 w-40 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none">
                                    <option>Any Status</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </div>

                {/* Users Table */}
                <div className="rounded-xl border bg-card">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-75">User</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {usersList?.data?.map((user:any) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <BookUser color={'green'} />
                                                {/*<UserCircle size={20} />*/}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-medium">
                                                    {user.name}
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {user.email}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">
                                            {user.role}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <div
                                                className={`h-2 w-2 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}
                                            />
                                            <span className="text-sm">
                                                {user.status}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                >
                                                    <MoreHorizontal size={16} />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem className="text-primary">
                                                    <Link href={viewUser({ id: user.id })}>
                                                        View User
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive">
                                                    <Link href={suspend({ id: user.id })}>
                                                        Suspend User
                                                    </Link>
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
                <div className="flex items-center justify-between px-2">
                    <p className="text-sm text-muted-foreground">
                        Showing {usersList.from} to {usersList.to} of{' '}
                        {usersList.total} users
                    </p>
                    <div className="flex gap-2">
                        {/* Previous Button */}
                        <Button
                            variant="outline"
                            size="sm"
                            asChild={!!usersList.prev_page_url}
                            disabled={!usersList.prev_page_url}
                        >
                            {usersList.prev_page_url ? (
                                <Link href={usersList.prev_page_url}>
                                    Previous
                                </Link>
                            ) : (
                                <span>Previous</span>
                            )}
                        </Button>

                        {/* Next Button */}
                        <Button
                            variant="outline"
                            size="sm"
                            asChild={!!usersList.next_page_url}
                            disabled={!usersList.next_page_url}
                        >
                            {usersList.next_page_url ? (
                                <Link href={usersList.next_page_url}>Next</Link>
                            ) : (
                                <span>Next</span>
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
