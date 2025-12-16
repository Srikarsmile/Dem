'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mic, Video, Radio, FileText, Download, UserCheck, MessageSquare, Quote, Laptop, Target, BookOpen, Users, Building, Heart, Star, Handshake, ArrowRight, ExternalLink } from 'lucide-react';
import { FadeInOnScroll } from '@/components/Parallax';
import { CountUp } from '@/components/CountUp';

export default function ProfessionalServices() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState('training');

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab && ['training', 'speaking', 'partnerships'].includes(tab)) {
            setActiveTab(tab);
        }
    }, [searchParams]);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-accent-purple/10 to-transparent">
                <div className="container px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">Professional Services</h1>
                    <p className="text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 max-w-2xl mx-auto">
                        Training, speaking engagements, and partnership opportunities for organizations.
                    </p>
                </div>
            </section>

            {/* Tabbed Content */}
            <section className="py-12">
                <div className="container px-4 md:px-6">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
                            <TabsTrigger value="training">Training</TabsTrigger>
                            <TabsTrigger value="speaking">Speaking</TabsTrigger>
                            <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
                        </TabsList>

                        {/* TAB 1: TRAINING */}
                        <TabsContent value="training" className="space-y-16">
                            {/* Intro Section */}
                            <div>
                                <FadeInOnScroll parallax parallaxSpeed={0.2}>
                                    <div className="grid md:grid-cols-2 gap-12 items-center">
                                        <div className="space-y-6">
                                            <h2 className="text-3xl font-bold">Understanding dementia through a culturally relevant lens</h2>
                                            <p className="text-lg text-muted-foreground">
                                                We combine lived experience with clinical expertise to deliver education that truly resonates with cultural communities. Our training empowers carers to provide compassionate, dignified care while supporting their own wellbeing.
                                            </p>
                                            <div className="flex gap-4">
                                                <Link href="/contact">
                                                    <Button size="lg" className="bg-accent-purple text-white hover:bg-accent-purple/90">Enquire Now</Button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                                            <Image
                                                src="/images/training-workshop.png"
                                                alt="Dignitate Training Workshop"
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </FadeInOnScroll>
                            </div>

                            {/* Who We Train */}
                            <div className="bg-muted/30 py-16 rounded-2xl">
                                <FadeInOnScroll parallax parallaxSpeed={0.15}>
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-bold tracking-tight mb-4">Who We Train</h2>
                                    </div>
                                </FadeInOnScroll>

                                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto px-6">
                                    {[
                                        { icon: Heart, title: "Family Carers", desc: "Courses on understanding dementia, communication, and carer wellbeing.", color: "text-accent-coral bg-accent-coral/10" },
                                        { icon: Users, title: "Community Groups", desc: "Workshops for faith communities, gurdwaras, mosques, temples, and churches.", color: "text-accent-teal bg-accent-teal/10" },
                                        { icon: Building, title: "NHS & Professionals", desc: "Commissionable training for healthcare staff on cultural competence.", color: "text-accent-purple bg-accent-purple/10" }
                                    ].map((item, i) => (
                                        <FadeInOnScroll key={i} delay={i * 100} parallax parallaxSpeed={0.1 + (i * 0.05)} className="h-full">
                                            <Card className="text-center h-full hover:shadow-lg transition-shadow border-border/50">
                                                <CardHeader>
                                                    <div className={`mx-auto p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2 ${item.color}`}>
                                                        <item.icon className="h-8 w-8" />
                                                    </div>
                                                    <CardTitle>{item.title}</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-muted-foreground">{item.desc}</p>
                                                </CardContent>
                                            </Card>
                                        </FadeInOnScroll>
                                    ))}
                                </div>
                            </div>

                            {/* What We Cover */}
                            <div>
                                <FadeInOnScroll>
                                    <div className="max-w-3xl mx-auto">
                                        <div className="text-center mb-12">
                                            <h2 className="text-3xl font-bold tracking-tight mb-4">Training Topics</h2>
                                            <p className="text-muted-foreground">Our courses cover culturally relevant dementia education.</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                                            {[
                                                "Understanding dementia types and stages",
                                                "Cultural stigma, shame, and honour",
                                                "Effective communication skills",
                                                "Family dynamics in cultural contexts",
                                                "Creating dementia-friendly environments",
                                                "Faith, culture, and storytelling in care",
                                                "Carer wellbeing and reducing burnout",
                                                "End-of-life planning and transitions"
                                            ].map((topic, i) => (
                                                <div key={i} className="flex items-center gap-3 py-2">
                                                    <div className="h-2 w-2 rounded-full bg-accent-purple shrink-0" />
                                                    <span>{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </FadeInOnScroll>
                            </div>

                            {/* Testimonials */}
                            <div className="bg-muted/30 py-16 rounded-2xl">
                                <FadeInOnScroll>
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-bold tracking-tight mb-4">What People Say</h2>
                                    </div>
                                </FadeInOnScroll>
                                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
                                    {[
                                        { quote: "The training was eye-opening. We've completely transformed how we engage with South Asian families.", author: "Memory Assessment Service", role: "NHS Trust, London" },
                                        { quote: "People finally felt comfortable discussing dementia - the stigma is slowly lifting in our community.", author: "Gurdwara Committee Member", role: "West London" },
                                        { quote: "Malcolm's lived experience brings authenticity that no textbook could provide. Essential training.", author: "Dementia Service Manager", role: "NHS, Midlands" }
                                    ].map((t, i) => (
                                        <FadeInOnScroll key={i} delay={i * 100} className="h-full">
                                            <Card className="h-full border-none bg-card">
                                                <CardContent className="pt-6">
                                                    <div className="flex gap-1 mb-4">
                                                        {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-4 w-4 fill-accent-amber text-accent-amber" />)}
                                                    </div>
                                                    <p className="italic text-muted-foreground mb-6">"{t.quote}"</p>
                                                    <div>
                                                        <div className="font-bold text-sm">{t.author}</div>
                                                        <div className="text-xs text-muted-foreground">{t.role}</div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </FadeInOnScroll>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="py-16 bg-accent-purple text-white rounded-2xl">
                                <div className="container px-4 md:px-6 text-center">
                                    <h2 className="text-3xl font-bold mb-4">Ready to Book Training?</h2>
                                    <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
                                        Whether you're a family carer or healthcare professional, we can help.
                                    </p>
                                    <div className="flex flex-wrap gap-4 justify-center">
                                        <Link href="/contact">
                                            <Button size="lg" className="bg-white text-accent-purple hover:bg-white/90">Get in Touch</Button>
                                        </Link>
                                        <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white/20" onClick={() => setActiveTab('speaking')}>Book Malcolm to Speak</Button>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* TAB 2: SPEAKING */}
                        <TabsContent value="speaking" className="space-y-16">
                            {/* Malcolm Profile */}
                            <div>
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/images/malcolm-enhanced.png"
                                            alt="Malcolm Gill"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                        <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-sm p-4 rounded-xl text-white">
                                            <p className="font-serif italic text-lg text-center">"Care is culture. When we understand this, everything changes."</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="inline-block px-3 py-1 rounded-full bg-accent-teal/10 text-accent-teal text-sm font-medium">
                                            International Speaker & Thought Leader
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold">Malcolm Gill</h2>
                                        <p className="text-xl text-primary font-medium">Founder, Dignitate | Champion of Cultural Carers</p>

                                        <div className="space-y-4 text-muted-foreground text-lg">
                                            <p>
                                                Malcolm Gill is a pioneering voice in dementia care and cultural diversity. After 11 years as a
                                                carer for his mother who lived with vascular dementia, Malcolm founded Dignitate to ensure no
                                                carer from a cultural community faces their journey alone.
                                            </p>
                                            <p>
                                                Today, Malcolm speaks at conferences, advises healthcare organisations, and leads training
                                                sessions across the UK and internationally. His unique combination of lived experience, cultural
                                                insight, and strategic vision makes him a compelling and transformative speaker.
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-4">
                                            {["Lived Experience Expert", "NHS Advisor", "Conference Keynote Speaker", "Policy Influencer"].map((tag, i) => (
                                                <span key={i} className="px-3 py-1 bg-muted rounded-full text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4 pt-6">
                                            <a href="#booking"><Button size="lg" className="bg-accent-teal text-white hover:bg-accent-teal/90">Book Malcolm</Button></a>
                                            <a href="#topics"><Button variant="outline" size="lg">View Topics</Button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Speaking Topics */}
                            <div className="bg-muted/30 py-16 rounded-2xl" id="topics">
                                <div className="container px-4 md:px-6">
                                    <div className="text-center mb-16">
                                        <h2 className="text-3xl font-bold tracking-tight mb-4">Speaking Topics</h2>
                                        <p className="text-muted-foreground max-w-2xl mx-auto">
                                            Tailored presentations for conferences, training sessions, and events.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[
                                            { icon: Mic, title: "The Cultural Carers Movement", desc: "Why carers from cultural communities need specific support, and how organisations can respond.", badge: "Keynote" },
                                            { icon: UserCheck, title: "Dementia Through a Cultural Lens", desc: "Understanding how culture shapes the experience of dementia - from stigma and silence to faith and family.", badge: "Healthcare" },
                                            { icon: Quote, title: "From Carer to Changemaker", desc: "Malcolm's personal journey of purpose, resilience, and impact.", badge: "Inspirational" },
                                            { icon: Target, title: "Cultural Competence in Practice", desc: "Practical strategies for delivering culturally sensitive dementia care.", badge: "Training" },
                                            { icon: Laptop, title: "Digital Innovation in Care", desc: "How technology can support cultural carers and research partnerships.", badge: "Innovation" },
                                            { icon: MessageSquare, title: "Breaking the Silence", desc: "Addressing dementia stigma in cultural communities and faith groups.", badge: "Community" }
                                        ].map((topic, i) => (
                                            <Card key={i} className="group hover:shadow-lg transition-all border-border/50 bg-card/50">
                                                <CardHeader>
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="p-2 rounded-lg bg-accent-teal/10 text-accent-teal group-hover:bg-accent-teal group-hover:text-white transition-colors">
                                                            <topic.icon className="h-6 w-6" />
                                                        </div>
                                                        <span className="text-[10px] font-bold px-2 py-1 bg-muted rounded uppercase tracking-wider text-muted-foreground">{topic.badge}</span>
                                                    </div>
                                                    <CardTitle className="text-xl leading-tight">{topic.title}</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-muted-foreground text-sm">{topic.desc}</p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Testimonials */}
                            <div>
                                <h2 className="text-3xl font-bold text-center mb-16">What People Say</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[
                                        { quote: "Malcolm's keynote was the highlight of our conference. His blend of personal story and strategic insight left our audience inspired.", author: "Conference Organiser", role: "National Dementia Conference" },
                                        { quote: "Authentic, powerful, and practical. Malcolm doesn't just talk about change - he shows you exactly how to achieve it.", author: "Director of Nursing", role: "NHS Trust" },
                                        { quote: "The impact was incredible. People who had never discussed dementia openly were sharing their stories for the first time.", author: "Community Leader", role: "Faith Organisation" }
                                    ].map((t, i) => (
                                        <Card key={i} className="bg-primary/5 border-none">
                                            <CardContent className="pt-6">
                                                <Quote className="h-8 w-8 text-accent-teal/40 mb-4" />
                                                <p className="text-lg italic text-muted-foreground mb-6">"{t.quote}"</p>
                                                <div>
                                                    <div className="font-bold">{t.author}</div>
                                                    <div className="text-sm text-primary/80">{t.role}</div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Booking Form */}
                            <div className="py-16 bg-muted/30 rounded-2xl" id="booking">
                                <div className="container px-4 md:px-6 max-w-3xl">
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-bold mb-4">Book Malcolm for Your Event</h2>
                                        <p className="text-muted-foreground">Tell us about your event and we'll be in touch.</p>
                                    </div>

                                    <Card className="p-6 md:p-8">
                                        <form className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Your Name *</Label>
                                                    <Input id="name" placeholder="Full name" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email Address *</Label>
                                                    <Input id="email" type="email" placeholder="your@email.com" required />
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="org">Organisation</Label>
                                                    <Input id="org" placeholder="Your organisation" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone Number</Label>
                                                    <Input id="phone" placeholder="Optional" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="type">Event Type *</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select event type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="conference">Conference Keynote</SelectItem>
                                                        <SelectItem value="training">Training Session</SelectItem>
                                                        <SelectItem value="workshop">Workshop</SelectItem>
                                                        <SelectItem value="panel">Panel Discussion</SelectItem>
                                                        <SelectItem value="media">Media / Podcast</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="date">Preferred Date</Label>
                                                    <Input id="date" type="date" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="location">Location</Label>
                                                    <Input id="location" placeholder="City or Online" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="details">Tell Us About Your Event *</Label>
                                                <Textarea id="details" placeholder="Please share details about your event..." className="min-h-[120px]" />
                                            </div>

                                            <Button type="submit" size="lg" className="w-full bg-accent-teal hover:bg-accent-teal/90 text-white">Submit Enquiry</Button>
                                            <p className="text-center text-xs text-muted-foreground">We typically respond within 2-3 working days.</p>
                                        </form>
                                    </Card>
                                </div>
                            </div>
                        </TabsContent>

                        {/* TAB 3: PARTNERSHIPS */}
                        <TabsContent value="partnerships" className="space-y-16">
                            {/* Featured Partner - NHS */}
                            <div>
                                <div className="max-w-5xl mx-auto">
                                    <Card className="border-2 border-accent-teal/30 bg-gradient-to-br from-accent-teal/5 to-accent-blue/5 overflow-hidden">
                                        <CardContent className="p-8 md:p-12">
                                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                                <div>
                                                    <div className="inline-block px-3 py-1 rounded-full bg-accent-teal text-white text-sm font-bold mb-4">
                                                        Official Partner
                                                    </div>
                                                    <h2 className="text-3xl font-bold mb-4">NHS Our Future Health</h2>
                                                    <p className="text-muted-foreground mb-4">
                                                        We're proud to partner with the UK's largest health research programme. Together, we're working to increase participation from diverse cultural communities in vital dementia research, ensuring future treatments work for everyone.
                                                    </p>
                                                    <p className="text-muted-foreground mb-6">
                                                        This partnership enables us to contribute to groundbreaking research while advocating for the unique needs of cultural communities affected by dementia.
                                                    </p>
                                                    <blockquote className="italic border-l-4 border-accent-teal pl-4 py-2 text-muted-foreground mb-6">
                                                        "We are lucky enough to Partner with the NHS Our Future Health. The UK's largest health research programme to help improve healthcare for dementia patients."
                                                        <span className="block mt-2 not-italic font-bold text-foreground">— Malcolm Gill, Founder</span>
                                                    </blockquote>
                                                    <Link href="https://ourfuturehealth.org.uk/news/my-mothers-dementia-changed-the-course-of-my-life-i-want-to-help-beat-this-terrible-disease/" target="_blank">
                                                        <Button className="bg-accent-teal text-white hover:bg-accent-teal/90">
                                                            Read the Feature Article <ExternalLink className="ml-2 h-4 w-4" />
                                                        </Button>
                                                    </Link>
                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <div className="relative w-64 h-48">
                                                        <Image
                                                            src="/images/nhs-logo.png"
                                                            alt="NHS Our Future Health"
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* Partnership Areas */}
                            <div className="bg-muted/30 py-16 rounded-2xl">
                                <div className="container px-4 md:px-6">
                                    <div className="text-center mb-16">
                                        <h2 className="text-3xl font-bold tracking-tight mb-4">How We Partner</h2>
                                        <p className="text-muted-foreground max-w-2xl mx-auto">
                                            We collaborate with organisations across healthcare, research, and community sectors.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                                        {[
                                            { icon: Building, title: "NHS & Healthcare", desc: "Training programmes and cultural competence for healthcare providers" },
                                            { icon: Users, title: "Research Institutions", desc: "Collaborating on dementia research with diverse community participation" },
                                            { icon: Heart, title: "Community Organisations", desc: "Working with faith groups, community centres, and cultural organisations" },
                                            { icon: Handshake, title: "Corporate Partners", desc: "CSR initiatives and sponsorship opportunities to scale our impact" }
                                        ].map((area, i) => (
                                            <Card key={i} className="text-center group hover:shadow-lg transition-all">
                                                <CardContent className="pt-8">
                                                    <div className="p-4 rounded-full bg-muted w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                                        <area.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                                                    </div>
                                                    <h3 className="font-bold text-lg mb-2">{area.title}</h3>
                                                    <p className="text-sm text-muted-foreground">{area.desc}</p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Impact Together */}
                            <div className="py-16 bg-primary text-primary-foreground rounded-2xl">
                                <div className="container px-4 md:px-6">
                                    <div className="max-w-4xl mx-auto text-center">
                                        <h2 className="text-3xl font-bold mb-8">Together, We've Achieved</h2>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                            {[
                                                { num: 500, suffix: "+", label: "Carers Supported" },
                                                { num: 1000, suffix: "+", label: "Professionals Trained" },
                                                { num: 50, suffix: "+", label: "Training Sessions" },
                                                { num: 30, suffix: "+", label: "Speaking Events" }
                                            ].map((stat, i) => (
                                                <div key={i} className="space-y-2">
                                                    <div className="text-4xl font-bold">
                                                        <CountUp end={stat.num} suffix={stat.suffix} duration={2500} />
                                                    </div>
                                                    <div className="text-sm opacity-80">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Become a Partner */}
                            <div>
                                <div className="max-w-3xl mx-auto text-center">
                                    <Handshake className="h-16 w-16 mx-auto text-accent-purple mb-6" />
                                    <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
                                    <p className="text-lg text-muted-foreground mb-8">
                                        Are you an organisation looking to improve cultural competence in dementia care? We'd love to explore how we can work together.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                                        {[
                                            { title: "Training Partnerships", desc: "Deliver cultural competence training to your staff" },
                                            { title: "Research Collaborations", desc: "Engage diverse communities in your research" },
                                            { title: "Corporate Sponsorship", desc: "Support our mission through CSR initiatives" }
                                        ].map((item, i) => (
                                            <Card key={i} className="border-accent-purple/20">
                                                <CardContent className="pt-6 text-center">
                                                    <h3 className="font-bold mb-2">{item.title}</h3>
                                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                    <Link href="/contact">
                                        <Button size="lg" className="bg-accent-purple text-white hover:bg-accent-purple/90">
                                            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </div>
    );
}
