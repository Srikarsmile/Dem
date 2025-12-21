'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Mic, Users, Heart, Building, BookOpen, Globe, Linkedin, Calendar, Quote } from 'lucide-react';
import { FadeInOnScroll } from '@/components/Parallax';


export default function OurFounder() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-[#c4dcdc] to-transparent">
                <div className="container px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#2e8b8f]">Our Founder</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Meet Malcolm Gill - carer, advocate, and champion of cultural carers.
                    </p>
                </div>
            </section>

            {/* Main Profile Section */}
            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/images/malcolm-team-enhanced.png"
                                    alt="Malcolm Gill - Founder of Dignitate"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                            {/* Credentials Tags */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                {["Lived Experience Expert", "NHS Advisor", "International Speaker", "Policy Advocate", "Charity Founder"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-muted rounded-full text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Malcolm Gill</h2>
                                <p className="text-xl text-accent-teal font-medium mt-2">Founder & CEO, Dignitate</p>
                            </div>

                            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-accent-teal pl-6 py-2">
                                "I feel so privileged and proud for the opportunity to bring this charity to you, as it is my passion and born from my personal experience of 11 years living with Dementia. It is still a journey I am on and sometimes it can be difficult and overwhelming however it is also humbling and rewarding. Together I genuinely believe and have every faith that we can make a difference."
                            </blockquote>

                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Malcolm Gill is a pioneering voice in dementia care and cultural diversity. After <strong>11 years as a carer</strong> for his mother Elizabeth who lived with vascular dementia, Malcolm founded Dignitate to ensure no carer from a cultural community faces their journey alone.
                                </p>
                                <p>
                                    His unique combination of <strong>lived experience, cultural insight, and strategic vision</strong> has made him a sought-after speaker at conferences, a trusted advisor to healthcare organizations, and a powerful advocate for policy change.
                                </p>
                                <p>
                                    Malcolm's work focuses on breaking down the barriers that prevent marginalized communities from accessing dementia support - addressing issues of stigma, language, and systemic inequality.
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <Link href="/speaking">
                                    <Button size="lg" className="bg-accent-teal text-white hover:bg-accent-teal/90">
                                        <Mic className="mr-2 h-4 w-4" /> Book Malcolm
                                    </Button>
                                </Link>
                                <Link href="https://uk.linkedin.com/in/malcolm-gill-723342a1" target="_blank">
                                    <Button variant="outline" size="lg">
                                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credentials & Expertise */}
            <section className="py-20 bg-[#dffffe]">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Credentials & Expertise</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Malcolm brings a unique combination of personal experience and professional commitment to dementia care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: Heart, title: "11 Years Caregiving Experience", desc: "Primary carer for his mother with vascular dementia from 2011-2022", color: "text-accent-coral" },
                            { icon: Building, title: "NHS Our Future Health Partner", desc: "Strategic partner with the UK's largest health research programme", color: "text-accent-blue" },
                            { icon: Mic, title: "International Speaker", desc: "Keynote speaker at dementia conferences and healthcare events", color: "text-accent-teal" },
                            { icon: BookOpen, title: "Dementia Educator", desc: "Developed culturally tailored training programmes for carers and professionals", color: "text-accent-purple" },
                            { icon: Users, title: "Community Leader", desc: "Built a network of cultural carers across the UK", color: "text-accent-coral" },
                            { icon: Globe, title: "Policy Advocate", desc: "Advisor on diversity and inclusion in dementia care policy", color: "text-accent-blue" }
                        ].map((item, i) => (
                            <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className={`p-3 rounded-full w-fit mb-4 bg-muted ${item.color}`}>
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speaking & Media Highlights */}
            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Speaking & Media</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Malcolm regularly speaks at conferences, contributes to media, and advises on policy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Speaking CTA */}
                        <Card className="border-accent-teal/20 flex flex-col justify-center">
                            <CardContent className="p-8 text-center">
                                <Mic className="h-12 w-12 text-accent-teal mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Book Malcolm to Speak</h3>
                                <p className="text-muted-foreground mb-6">
                                    Keynotes, training sessions, panel discussions, and media appearances.
                                </p>
                                <Link href="/speaking">
                                    <Button className="w-full bg-accent-teal text-white hover:bg-accent-teal/90">View Speaking & Topics</Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Recent Engagements */}
                        <Card className="border-[#9bdbd9]">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-[#5d9b97]" />
                                    Engagements & Recognition
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[
                                        "NHS Our Future Health Partnership",
                                        "National Dementia Conference Speaker",
                                        "Care Home & Memory Clinic Training",
                                        "Faith Community Workshops",
                                        "Policy Advisory & Consultations"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-[#5d9b97]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="https://ourfuturehealth.org.uk/news/my-mothers-dementia-changed-the-course-of-my-life-i-want-to-help-beat-this-terrible-disease/" target="_blank" className="block mt-6">
                                    <Button variant="outline" className="w-full">Read NHS Feature &rarr;</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Featured Quote */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <Quote className="h-16 w-16 opacity-20 mx-auto mb-8" />
                        <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                            "Dignitate is an organisation passionate about giving back dignity to our elders who are experiencing dementia. Care is culture. When we understand this, everything changes."
                        </blockquote>
                        <div className="font-bold text-xl">- Malcolm Gill</div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Connect with Malcolm</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Whether you want to book Malcolm for an event, discuss a partnership, or simply learn more about Dignitate.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/speaking">
                            <Button size="lg" className="bg-accent-teal text-white hover:bg-accent-teal/90">Book Malcolm</Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline">Contact Us</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
