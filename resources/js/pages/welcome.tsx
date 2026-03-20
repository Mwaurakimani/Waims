import { Head } from '@inertiajs/react';
import { LayoutDashboard, ArrowRight, ShieldCheck, Users, BarChart3 } from 'lucide-react';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { register } from '@/routes';
import { store as loginStore } from '@/routes/login';

type Props = {
    auth: { user: any };
    canLogin: boolean;
    canRegister: boolean;
};

export default function Welcome({ auth, canLogin, canRegister }: Props) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Head title="Welcome" />

            {/* Navigation */}
            <nav className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                            <LayoutDashboard size={20} />
                        </div>
                        <span>County<span className="text-primary">Connect</span></span>
                    </div>

                    <div className="flex items-center gap-4">
                        {auth.user ? (
                            <Button asChild variant="ghost">
                                <TextLink href="/dashboard">Dashboard</TextLink>
                            </Button>
                        ) : (
                            <>
                                {canLogin && (
                                    <Button asChild variant="ghost">
                                        <TextLink href={loginStore()}>Log in</TextLink>
                                    </Button>
                                )}
                                {canRegister && (
                                    <Button asChild>
                                        <TextLink href={register()}>Get Started</TextLink>
                                    </Button>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main>
                <section className="py-20 px-4 sm:px-6 lg:py-32 text-center max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-6 border">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Real-time Workflow Automation
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                        Operational Efficiency for <br />
                        <span className="text-primary">County Management.</span>
                    </h1>
                    <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                        Centralize project tracking, automate approvals, and minimize corruption through a transparent digital workflow.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="h-12 px-8 text-base">
                            View Public Feed <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                            Documentation
                        </Button>
                    </div>
                </section>

                {/* Core Features Grid */}
                <section className="py-20 bg-muted/30 border-y">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={<ShieldCheck className="text-primary" />}
                                title="Enhanced Accountability"
                                description="Automated logs and approval chains reduce manual intervention and corruption risks."
                            />
                            <FeatureCard
                                icon={<Users className="text-primary" />}
                                title="Citizen Participation"
                                description="Public tracking and reporting features foster trust between leaders and the community."
                            />
                            <FeatureCard
                                icon={<BarChart3 className="text-primary" />}
                                title="Real-time Monitoring"
                                description="Live dashboards for budgets, timelines, and contractor performance metrics."
                            />
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-10 border-t text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} County Workflow Systems. Built for Transparency.</p>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-card p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg">{icon}</div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
    );
}
