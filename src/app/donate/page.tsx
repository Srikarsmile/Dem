'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Heart, Gift, Building, CheckCircle, PoundSterling, FileText, Users, BookOpen, Mic, PiggyBank, ScrollText } from 'lucide-react';
import { FadeInOnScroll } from '@/components/Parallax';


export default function Donate() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-accent-coral/10 to-transparent">
                <div className="container px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">Support Our Work</h1>
                    <p className="text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">Help us champion cultural carers and transform dementia care.</p>
                </div>
            </section>

            {/* Main Donation Section */}
            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 rounded-full bg-accent-coral/10 text-accent-coral text-sm font-medium">Make a Difference</div>
                            <h2 className="text-3xl font-bold">Why Your Support Matters</h2>
                            <p className="text-lg text-muted-foreground">
                                Dementia care is in crisis, and families from cultural communities are often hitting barriers of language, stigma, and systemic bias.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                Your donation helps us provide direct support to these hidden carers, deliver cultural competency training to the NHS, and advocate for policy change.
                            </p>
                            <div className="pt-4">
                                <a href="https://www.paypal.com/donate/?hosted_button_id=992DZB3FLENTE" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="h-14 px-8 text-lg bg-accent-coral hover:bg-accent-coral/90 text-white shadow-lg hover:-translate-y-1 transition-transform">
                                        <Heart className="mr-2 h-5 w-5 fill-current" /> Donate via PayPal
                                    </Button>
                                </a>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { amount: "£10", desc: "Provides a carer with a specialised handbook in their own language." },
                                { amount: "£25", desc: "Funds a one-hour support session for a family in crisis." },
                                { amount: "£100", desc: "Helps run a community workshop to break down stigma in faith groups." },
                                { amount: "£500", desc: "Sponsors a full training day for NHS professionals on cultural competence." }
                            ].map((item, i) => (
                                <Card key={i} className="border-accent-coral/20 hover:border-accent-coral/50 transition-colors">
                                    <CardContent className="flex items-center gap-6 p-6">
                                        <div className="text-3xl font-bold text-accent-coral w-20 text-center">{item.amount}</div>
                                        <p className="text-muted-foreground text-sm md:text-base">{item.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Where Your Money Goes */}
            <section className="py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Where Your Money Goes</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We're committed to transparency. Here's how we use every pound to make a difference.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: Users, percent: "40%", title: "Direct Carer Support", desc: "1-to-1 support, drop-ins, peer groups", color: "bg-accent-coral" },
                            { icon: BookOpen, percent: "25%", title: "Education & Training", desc: "Courses, workshops, resources", color: "bg-accent-purple" },
                            { icon: Mic, percent: "20%", title: "Advocacy & Awareness", desc: "Speaking, campaigns, policy work", color: "bg-accent-teal" },
                            { icon: Building, percent: "15%", title: "Operations", desc: "Running costs, technology, admin", color: "bg-accent-blue" }
                        ].map((item, i) => (
                            <Card key={i} className="text-center relative overflow-hidden">
                                <div className={`h-2 w-full ${item.color}`} />
                                <CardContent className="pt-8 pb-6">
                                    <div className={`mx-auto p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 ${item.color}/10`}>
                                        <item.icon className={`h-8 w-8 ${item.color.replace('bg-', 'text-')}`} />
                                    </div>
                                    <div className="text-3xl font-bold mb-2">{item.percent}</div>
                                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gift Aid */}
            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <Card className="border-2 border-accent-teal/30 bg-accent-teal/5">
                            <CardContent className="p-8 md:p-12">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="inline-block px-3 py-1 rounded-full bg-accent-teal text-white text-sm font-bold mb-4">
                                            UK Taxpayers Only
                                        </div>
                                        <h2 className="text-3xl font-bold mb-4">Gift Aid</h2>
                                        <p className="text-muted-foreground mb-4">
                                            If you're a UK taxpayer, Gift Aid increases the value of your donation by 25p for every £1 you give – at no extra cost to you!
                                        </p>
                                        <p className="text-muted-foreground">
                                            That means a <strong>£10 donation becomes £12.50</strong>, and a <strong>£100 donation becomes £125</strong>.
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow-sm border">
                                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                            <FileText className="h-5 w-5 text-accent-teal" />
                                            How it works
                                        </h3>
                                        <ul className="space-y-3 text-sm">
                                            {[
                                                "You must be a UK taxpayer",
                                                "Tick the Gift Aid box when donating",
                                                "We claim 25% from HMRC at no cost to you",
                                                "Higher rate taxpayers can claim additional relief"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <CheckCircle className="h-4 w-4 text-accent-teal mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Ways to Give */}
            <section className="py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Other Ways to Give</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card className="text-center group hover:shadow-lg transition-all">
                            <CardHeader>
                                <div className="p-4 bg-accent-teal/10 text-accent-teal rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Gift className="h-8 w-8" />
                                </div>
                                <CardTitle>Fundraise</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">Run a marathon, host a bake sale, or organise a community event to support us.</p>
                                <Link href="/contact" className="text-accent-teal font-bold hover:underline">Get in touch &rarr;</Link>
                            </CardContent>
                        </Card>

                        <Card className="text-center group hover:shadow-lg transition-all">
                            <CardHeader>
                                <div className="p-4 bg-accent-purple/10 text-accent-purple rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Building className="h-8 w-8" />
                                </div>
                                <CardTitle>Corporate Partners</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">Partner with us for your CSR initiatives and help transform care on a large scale.</p>
                                <Link href="/partners" className="text-accent-purple font-bold hover:underline">Partner with us &rarr;</Link>
                            </CardContent>
                        </Card>

                        <Card className="text-center group hover:shadow-lg transition-all">
                            <CardHeader>
                                <div className="p-4 bg-accent-coral/10 text-accent-coral rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <ScrollText className="h-8 w-8" />
                                </div>
                                <CardTitle>Leave a Legacy</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">A gift in your Will can help future generations of cultural carers. Every legacy makes a lasting difference.</p>
                                <Link href="/contact" className="text-accent-coral font-bold hover:underline">Learn more &rarr;</Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Monthly Giving */}
            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block p-4 bg-accent-purple/10 text-accent-purple rounded-full mb-6">
                            <PiggyBank className="h-12 w-12" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Become a Monthly Supporter</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            Regular giving helps us plan ahead and provide consistent support to carers. Even a small monthly contribution makes a big difference over time.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://www.paypal.com/donate/?hosted_button_id=992DZB3FLENTE" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-accent-purple hover:bg-accent-purple/90 text-white">
                                    Set Up Monthly Donation
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Thank You / CTA */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Thank You</h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto mb-4">
                        Every donation, no matter the size, helps us support carers and families who are often invisible and underserved.
                    </p>
                    <p className="opacity-80">
                        Registered Charity Number: <strong>1196886</strong>
                    </p>
                </div>
            </section>
        </div>
    );
}
