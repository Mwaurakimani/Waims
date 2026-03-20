import { Link } from '@inertiajs/react';
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

const mainNavItems: NavItem[] = [
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
