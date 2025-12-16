'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Download, Heart, Users, Mic, Star } from 'lucide-react';
import { FadeInOnScroll } from '@/components/Parallax';
import { CountUp } from '@/components/CountUp';


export default function Impact() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-accent-coral/10 to-transparent">
                <div className="container px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">Stories & Impact</h1>
                    <p className="text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">Real stories. Real change. Real impact.</p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-border/50">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { num: 500, suffix: "+", label: "Carers Supported" },
                            { num: 50, suffix: "+", label: "Training Sessions" },
                            { num: 1000, suffix: "+", label: "Professionals Trained" },
                            { num: 30, suffix: "+", label: "Speaking Engagements" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <div className="text-4xl font-bold text-accent-teal">
                                    <CountUp end={stat.num} suffix={stat.suffix} duration={2500} />
                                </div>
                                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Carer Stories */}
            <section className="py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Carer Stories</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Hear from carers whose lives have been touched by Dignitate's support.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Priya", type: "Family Carer", text: "Finding Dignitate changed everything. For the first time, I was with people who understood the cultural pressures, the expectations, the guilt. Malcolm's sessions gave me permission to look after myself too.", sub: "Caring for her father with Alzheimer's" },
                            { name: "Raj", type: "Spousal Carer", text: "In our community, the husband doesn't usually do the caring. The weekly drop-in sessions became my lifeline. Other carers shared practical tips, but more than that, they shared understanding.", sub: "Caring for his wife of 45 years" },
                            { name: "Aisha", type: "Young Carer", text: "Dignitate connected me with other young carers from similar backgrounds. Finally, people who got it. The resources helped me explain dementia to my family in a way that respected our culture.", sub: "Young carer, now at university" },
                        ].map((story, i) => (
                            <Card key={i} className="relative overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Heart className="h-24 w-24" />
                                </div>
                                <CardContent className="pt-8">
                                    <div className="text-xs font-bold text-accent-teal uppercase tracking-wider mb-2">{story.type}</div>
                                    <h3 className="text-2xl font-bold mb-4">{story.name}'s Story</h3>
                                    <p className="text-muted-foreground italic mb-6">"{story.text}"</p>
                                    <div className="border-t pt-4">
                                        <div className="font-bold text-primary">{story.name}</div>
                                        <div className="text-xs text-muted-foreground">{story.sub}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/contact">
                            <Button variant="outline" size="lg">Share Your Story</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Professional Impact */}
            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Transforming Professional Practice</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Our training goes beyond theory. We're equipping healthcare professionals and community leaders with the practical tools to deliver culturally competent, compassionate care.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { text: "We're now identifying dementia earlier in communities that were previously underserved.", author: "Memory Clinic Lead, NHS Trust" },
                                    { text: "Our care home staff now feel equipped to have sensitive conversations with families.", author: "Care Home Manager, West Midlands" },
                                    { text: "Community members who had never spoken about dementia publicly were sharing stories.", author: "Committee Member, Southall Temple" }
                                ].map((quote, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="min-w-1 w-1 bg-accent-purple rounded-full" />
                                        <div>
                                            <p className="italic text-foreground/80 mb-1">"{quote.text}"</p>
                                            <p className="text-xs font-bold text-accent-purple">{quote.author}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-square md:aspect-auto h-full min-h-[400px] bg-gradient-to-br from-accent-purple/20 to-accent-teal/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center">
                            <Users className="w-24 h-24 text-accent-purple/40 mb-4" />
                            <span className="text-lg font-medium text-muted-foreground">Professional Training</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Milestones Timeline */}
            <section className="py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
                    <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[50%] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                        {[
                            { year: "2021", title: "Dignitate Founded", desc: "Malcolm formalises his mission to support cultural carers as a charity." },
                            { year: "2022", title: "First Carer Hub", desc: "Croydon Hub opens, providing in-person support sessions." },
                            { year: "2023", title: "NHS Partnership", desc: "Partnership with NHS Our Future Health and online expansion." },
                            { year: "2024", title: "Movement Launches", desc: "Rebrand to 'Championing Cultural Carers'. App development begins." },
                            { year: "2025", title: "Global Expansion", desc: "App launch and first international speaking engagements." }
                        ].map((item, i) => (
                            <div key={i} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent-teal shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                                </div>
                                <Card className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 shadow-md hover:shadow-lg transition-all md:group-odd:mr-auto md:group-even:ml-auto`}>
                                    <div className="text-accent-teal font-bold text-xl mb-1">{item.year}</div>
                                    <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Placeholders */}
            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Dignitate in Action</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { icon: Users, label: "Community Events", color: "bg-accent-teal" },
                            { icon: Mic, label: "Speaking Engagements", color: "bg-accent-purple" },
                            { icon: Heart, label: "Carer Support Sessions", color: "bg-accent-coral" },
                            { icon: Star, label: "Training Workshops", color: "bg-primary" },
                            { icon: Users, label: "Partner Meetings", color: "bg-accent-blue" },
                            { icon: Heart, label: "Wellbeing Events", color: "bg-accent-teal" }
                        ].map((item, i) => (
                            <div key={i} className={`aspect-square ${item.color} rounded-xl overflow-hidden relative group flex flex-col items-center justify-center text-white p-6 transition-transform hover:scale-105`}>
                                <item.icon className="w-12 h-12 mb-3 opacity-80" />
                                <span className="text-sm font-medium text-center opacity-90">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reports */}
            <section className="py-20 bg-muted/50">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-2xl font-bold mb-8">Transparency & Reports</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { year: "2023", label: "Download PDF", icon: Download },
                            { year: "2024", label: "Coming Soon", icon: Calendar }
                        ].map((report, i) => (
                            <a key={i} href="#" className="flex flex-col items-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow w-48 border">
                                <report.icon className="h-8 w-8 text-primary mb-3" />
                                <div className="font-bold mb-1">{report.year} Annual Report</div>
                                <div className="text-xs text-muted-foreground">{report.label}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
