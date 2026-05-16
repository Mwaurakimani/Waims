import { Link, usePage } from '@inertiajs/react';
import { AlertCircle, Briefcase, LayoutGrid, Receipt, Users } from 'lucide-react';
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
import { roles } from '@/data/data';


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
        title: 'Dispute Center',
        href: '/dashboard/disputes',
        icon: AlertCircle,
    },
];

const managerNav: NavItem[] = [
    ...userNav,
    {
        title: 'Financial Logs',
        href: '/dashboard/transactions',
        icon: Receipt,
    },
];

const adminNav: NavItem[] = [
    ...managerNav,
    {
        title: 'User Management',
        href: '/dashboard/users',
        icon: Users,
    },
];

const footerNavItems: NavItem[] = [];

export function AppSidebar() {
    const { auth } = usePage().props;
    const mainNavItems: NavItem[] = (() => {
        if (roles.level1.includes(auth?.user?.role_name as string)) {
            return adminNav;
        } else if (roles.level4.includes(auth?.user?.role_name as string)) {
            return managerNav;
        } else {
            return userNav;
        }
    })()

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
