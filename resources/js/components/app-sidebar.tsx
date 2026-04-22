import { Link, usePage } from '@inertiajs/react';
import {
    AlertCircle,
    BookOpen,
    Briefcase,
    ClipboardCheck,
    FolderGit2,
    LayoutGrid,
    Receipt,
    Users,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const userNav: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Project Registry',
        href: '/dashboard/project',
        icon: Briefcase,
    },
    {
        title: 'Financial Logs',
        href: '/dashboard/transactions',
        icon: Receipt,
    },
    {
        title: 'Dispute Center',
        href: '/dashboard/disputes',
        icon: AlertCircle,
    },
];


const adminNav: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'User Management',
        href: '/dashboard/users',
        icon: Users,
    },
    {
        title: 'Project Registry',
        href: '/dashboard/project',
        icon: Briefcase,
    },
    {
        title: 'Financial Logs',
        href: '/dashboard/transactions',
        icon: Receipt,
    },
    {
        title: 'Dispute Center',
        href: '/dashboard/disputes',
        icon: AlertCircle,
    },
];



const footerNavItems: NavItem[] = [
];

export function AppSidebar() {
    const {auth} = usePage().props;
    const mainNavItems: NavItem[] =
        auth.user.role_name === 'Admin' || auth.user.role_name === 'Moderator'
            ? adminNav
            : userNav;

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
