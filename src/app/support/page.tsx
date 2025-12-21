'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Phone, Video, Users, Calendar, BookOpen, MessageCircle, CheckCircle, ArrowRight, Smartphone, Lock, Sparkles, FileText, Activity, Microscope } from 'lucide-react';
import { FadeInOnScroll } from '@/components/Parallax';

function SupportContent() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState('for-carers');

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab && ['for-carers', 'digital', 'faq'].includes(tab)) {
            setActiveTab(tab);
        }
    }, [searchParams]);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-[#c4dcdc] to-transparent">
                <div className="container px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">Support & Resources</h1>
                    <p className="text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 max-w-2xl mx-auto">
                        Everything you need to support your caregiving journey.
                    </p>
                </div>
            </section>

            {/* Tabbed Content */}
            <section className="py-12">
                <div className="container px-4 md:px-6">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
                            <TabsTrigger value="for-carers">For Carers</TabsTrigger>
                            <TabsTrigger value="digital">Digital & App</TabsTrigger>
                            <TabsTrigger value="faq">FAQs</TabsTrigger>
                        </TabsList>

                        {/* TAB 1: FOR CARERS */}
                        <TabsContent value="for-carers" className="space-y-16">
                            {/* Intro */}
                            <div className="bg-[#dffffe] py-12">
                                <FadeInOnScroll parallax parallaxSpeed={0.15}>
                                    <div className="max-w-4xl mx-auto text-center">
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            At Dignitate, we understand the unique challenges faced by carers from cultural communities. Whether you're caring for a parent, spouse, or loved one with dementia, we provide <strong>culturally sensitive support</strong> that respects your traditions, language, and family dynamics.
                                        </p>
                                    </div>
                                </FadeInOnScroll>
                            </div>

                            {/* Support Services */}
                            <div>
                                <FadeInOnScroll parallax parallaxSpeed={0.2}>
                                    <div className="text-center mb-16">
                                        <h2 className="text-3xl font-bold tracking-tight mb-4">Our Support Services</h2>
                                        <p className="text-muted-foreground max-w-2xl mx-auto">
                                            Free support for carers, led by people who truly understand your experience.
                                        </p>
                                    </div>
                                </FadeInOnScroll>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                    {/* 1-to-1 Calls */}
                                    <FadeInOnScroll delay={0} parallax parallaxSpeed={0.1}>
                                        <Card className="border-l-4 border-accent-coral shadow-md hover:shadow-lg transition-shadow h-full">
                                            <CardHeader>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="p-2 rounded-lg bg-accent-coral/10">
                                                        <Phone className="h-6 w-6 text-accent-coral" />
                                                    </div>
                                                    <CardTitle className="text-xl">Weekly 1-to-1 Calls</CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <p className="text-muted-foreground">
                                                    Connect with a dedicated carer who understands your journey. Our weekly calls provide a safe space to share, get advice, and feel supported.
                                                </p>
                                                <ul className="space-y-2 text-sm">
                                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-coral" /> Conducted online for your convenience</li>
                                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-coral" /> Led by experienced carers</li>
                                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-coral" /> Culturally sensitive approach</li>
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </FadeInOnScroll>

                                    {/* Drop-in Service */}
                                    <FadeInOnScroll delay={100} parallax parallaxSpeed={0.12}>
                                        <Card className="border-l-4 border-accent-blue shadow-md hover:shadow-lg transition-shadow h-full">
                                            <CardHeader>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="p-2 rounded-lg bg-accent-blue/10">
                                                        <Video className="h-6 w-6 text-accent-blue" />
                                                    </div>
                                                    <CardTitle className="text-xl">Weekly Online Drop-ins</CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <p className="text-muted-foreground">
                                                    A safe and welcoming online space where you can seek guidance, ask questions, and connect with others who understand.
                                                </p>
                                                <ul className="space-y-2 text-sm">
                                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-blue" /> No appointment needed</li>
                                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-blue" /> Join whenever suits you</li>
                                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-blue" /> Supportive community atmosphere</li>
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </FadeInOnScroll>

                                    {/* Peer Support */}
                                    <FadeInOnScroll delay={200} parallax parallaxSpeed={0.14}>
                                        <Card className="border-l-4 border-accent-purple shadow-md hover:shadow-lg transition-shadow h-full">
                                            <CardHeader>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="p-2 rounded-lg bg-accent-purple/10">
                                                        <Users className="h-6 w-6 text-accent-purple" />
                                                    </div>
                                                    <CardTitle className="text-xl">Fortnightly Peer Support</CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <p className="text-muted-foreground">
                                                    Join our peer-to-peer support calls and connect with other carers who share similar experiences. Build friendships and share practical tips.
                                                </p>
                                                <ul className="space-y-2 text-sm">
                                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-purple" /> Led by carers, for carers</li>
                                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-purple" /> Share experiences openly</li>
                                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-purple" /> Build lasting connections</li>
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </FadeInOnScroll>

                                    {/* Events */}
                                    <FadeInOnScroll delay={300} parallax parallaxSpeed={0.16}>
                                        <Card className="border-l-4 border-accent-teal shadow-md hover:shadow-lg transition-shadow h-full">
                                            <CardHeader>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="p-2 rounded-lg bg-accent-teal/10">
                                                        <Calendar className="h-6 w-6 text-accent-teal" />
                                                    </div>
                                                    <CardTitle className="text-xl">Events & Activities</CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <p className="text-muted-foreground">
                                                    Join our community events, workshops, and gatherings designed to bring carers together in celebration and support.
                                                </p>
                                                <ul className="space-y-2 text-sm">
                                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-teal" /> Cultural celebration events</li>
                                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-teal" /> Wellbeing workshops</li>
                                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent-teal" /> Community gatherings</li>
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </FadeInOnScroll>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="py-16 bg-[#2e8b8f] text-white rounded-2xl">
                                <div className="container px-4 md:px-6 text-center">
                                    <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
                                    <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                                        Take the first step. Reach out today and let us support you on your caregiving journey.
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Link href="/contact">
                                            <Button size="lg" className="bg-white text-[#2e8b8f] hover:bg-white/90">Get Support Now</Button>
                                        </Link>
                                        <Link href="/news">
                                            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20">View Our Events</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* TAB 2: DIGITAL & APP */}
                        <TabsContent value="digital" className="space-y-16">
                            {/* App Waitlist Section */}
                            <div>
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-8">
                                        <div>
                                            <span className="inline-block px-3 py-1 rounded-full bg-accent-teal/10 text-accent-teal text-xs font-bold uppercase mb-4">Coming Soon</span>
                                            <h2 className="text-3xl font-bold mb-4">The Cultural Carers App</h2>
                                            <p className="text-lg text-muted-foreground">
                                                A first-of-its-kind mobile app designed specifically for carers from cultural communities. Built with lived experience at its heart, putting support, resources, and community connection in your pocket.
                                            </p>
                                        </div>

                                        <div className="grid gap-6">
                                            {[
                                                { icon: Users, title: "Peer Community", desc: "Connect with other cultural carers who understand your journey." },
                                                { icon: FileText, title: "Culturally Relevant Resources", desc: "Guides and information designed for your cultural context." },
                                                { icon: Activity, title: "Self-Care Tools", desc: "Wellbeing check-ins and mindfulness resources." },
                                            ].map((feat, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <div className="mt-1 p-2 rounded-lg bg-accent-teal/10 text-accent-teal h-fit">
                                                        <feat.icon className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold">{feat.title}</h4>
                                                        <p className="text-sm text-muted-foreground">{feat.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Card className="border-accent-teal/20 shadow-lg bg-card/50 backdrop-blur-sm relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-teal to-accent-blue" />
                                        <CardHeader>
                                            <CardTitle>Join the Waitlist</CardTitle>
                                            <CardDescription>Be the first to access the app and get exclusive updates.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <form className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="wl-name">Full Name</Label>
                                                    <Input id="wl-name" placeholder="Your name" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="wl-email">Email Address</Label>
                                                    <Input id="wl-email" type="email" placeholder="your@email.com" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="wl-role">I am a...</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select role" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="carer">Carer / Family Member</SelectItem>
                                                            <SelectItem value="professional">Healthcare Professional</SelectItem>
                                                            <SelectItem value="community">Community Leader</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <Button className="w-full bg-accent-teal hover:bg-accent-teal/90 text-white">Join Waitlist</Button>
                                                <p className="text-xs text-center text-muted-foreground">We respect your privacy. Unsubscribe anytime.</p>
                                            </form>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* Digital Vision */}
                            <div className="py-12 bg-[#dffffe] rounded-2xl">
                                <div className="container px-4 md:px-6">
                                    <div className="text-center mb-16">
                                        <h2 className="text-3xl font-bold tracking-tight mb-4">Digital Vision</h2>
                                        <p className="text-muted-foreground max-w-2xl mx-auto">
                                            Technology should serve communities, not the other way around.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {[
                                            { icon: Users, title: "Lived Experience First", desc: "Every feature is shaped by real experiences. We build with the community, not just for them." },
                                            { icon: Sparkles, title: "Culturally Intelligent", desc: "Designed with nuance - from language options to content that reflects diverse contexts." },
                                            { icon: Lock, title: "Privacy & Trust", desc: "We prioritise privacy and security, understanding the sensitivity around dementia." },
                                        ].map((vis, i) => (
                                            <div key={i} className="flex flex-col items-center text-center p-6 border border-border/50 rounded-xl bg-card hover:bg-accent-teal/5 transition-colors">
                                                <div className="p-4 rounded-full bg-muted mb-4 text-primary">
                                                    <vis.icon className="h-8 w-8" />
                                                </div>
                                                <h3 className="text-xl font-bold mb-2">{vis.title}</h3>
                                                <p className="text-muted-foreground">{vis.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Research Partnerships CTA */}
                            <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 overflow-hidden relative text-center">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10 max-w-2xl mx-auto">
                                    <div className="flex items-center justify-center gap-2 text-accent-teal font-medium mb-4">
                                        <Microscope className="h-5 w-5" />
                                        <span>Research & Collaboration</span>
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
                                    <p className="text-lg opacity-90 leading-relaxed mb-8">
                                        We work with leading research institutions, NHS trusts, and innovation partners to advance culturally appropriate dementia care and digital solutions.
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Link href="/professional-services?tab=partnerships">
                                            <Button size="lg" className="bg-white text-primary hover:bg-white/90">View Our Partners</Button>
                                        </Link>
                                        <Link href="/contact">
                                            <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white/20">Become a Partner</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* TAB 3: FAQs */}
                        <TabsContent value="faq" className="space-y-8">
                            <div className="max-w-4xl mx-auto">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                        Dementia has recently overtaken cancer as the most feared illness for the UK's 55 and over age group and for many years it has been the great unspoken, much like cancer once was.
                                    </p>
                                </div>

                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    <AccordionItem value="item-1" className="border border-border/40 rounded-lg px-6 bg-card">
                                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-accent-blue py-6">
                                            What is dementia?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                            Dementia is a term used to describe a decline in cognitive function that is severe enough to interfere with daily activities. It is not a specific disease but a collection of symptoms that different underlying conditions can cause. The most common cause of dementia is Alzheimer's disease, but other causes include vascular dementia, dementia with Lewy bodies, frontotemporal dementia, and mixed dementia. Dementia can affect memory, thinking, language, judgment, and behaviour and can lead to a decline in a person's ability to perform daily tasks. While there is no cure for dementia, early diagnosis and treatment can help slow the disease's progression and improve the quality of life for those affected.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2" className="border border-border/40 rounded-lg px-6 bg-card">
                                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-accent-blue py-6">
                                            What are the symptoms of dementia?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                            <p className="mb-4">The symptoms of dementia can vary depending on the type of dementia and the stage of the disease but generally include a decline in cognitive function that is severe enough to interfere with daily activities. Some common symptoms of dementia include:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li><strong>Memory loss:</strong> A person with dementia may have trouble remembering recent events or information and may ask the same question repeatedly.</li>
                                                <li><strong>Difficulty with communication:</strong> As dementia progresses, a person may have trouble finding the right words or understanding others.</li>
                                                <li><strong>Difficulty with planning and organization:</strong> A person with dementia may have trouble planning, organizing, and completing tasks, such as managing finances or following a recipe.</li>
                                                <li><strong>Difficulty with familiar tasks:</strong> A person with dementia may forget how to do once everyday tasks, such as dressing or cooking.</li>
                                                <li><strong>Poor judgment:</strong> A person with dementia may make poor decisions, such as giving away large amounts of money or neglecting personal hygiene.</li>
                                                <li><strong>Changes in mood and behaviour:</strong> A person with dementia may experience changes in mood, such as depression or anxiety, and may exhibit inappropriate behaviour, such as aggression or wandering.</li>
                                                <li><strong>Loss of motivation:</strong> A person with dementia may lose interest in activities they once enjoyed and may become withdrawn.</li>
                                                <li><strong>Difficulty with spatial awareness:</strong> A person with dementia may have trouble judging distances and navigating familiar environments.</li>
                                                <li><strong>Inability to recognize familiar faces or objects:</strong> As dementia progresses, a person may have difficulty recognizing familiar people or objects.</li>
                                            </ul>
                                            <p className="mt-4">If you or a loved one is experiencing any of these symptoms, seeking medical attention as soon as possible for a proper diagnosis and treatment is essential. Early diagnosis and intervention can help slow the disease's progression and improve quality of life.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3" className="border border-border/40 rounded-lg px-6 bg-card">
                                        <AccordionTrigger className="text-lg text-left font-bold hover:no-underline hover:text-accent-blue py-6">
                                            How many different types of dementia are there and what are the symptoms?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                            <p className="mb-4">There are several types of dementia, each with unique symptoms and underlying causes. However, the most common types of dementia include:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li><strong>Alzheimer's disease:</strong> The most common form of dementia, accounting for about 60-80% of cases. It is a progressive disease that affects memory, thinking, and behaviour.</li>
                                                <li><strong>Vascular dementia:</strong> Caused by reduced blood flow to the brain, often due to a stroke or other vascular condition. Symptoms may include difficulty with planning, organizing, and decision-making.</li>
                                                <li><strong>Dementia with Lewy bodies (DLB):</strong> Caused by abnormal protein deposits in the brain. It can lead to fluctuations in alertness and attention, visual hallucinations, and movement problems.</li>
                                                <li><strong>Frontotemporal dementia (FTD):</strong> Affects the frontal and temporal lobes. Symptoms may include changes in personality and behaviour, language difficulties, and problems with movement.</li>
                                                <li><strong>Mixed dementia:</strong> A person has multiple types of dementia (e.g., Alzheimer's and vascular dementia).</li>
                                                <li><strong>Young-onset dementia:</strong> Dementia that occurs before the age of 65.</li>
                                            </ul>
                                            <p className="mt-4">It is essential to seek medical attention if you or a loved one is experiencing any of these symptoms, as early diagnosis and treatment can help slow the disease's progression and improve quality of life.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-4" className="border border-border/40 rounded-lg px-6 bg-card">
                                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-accent-blue py-6">
                                            What causes dementia?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                            <p className="mb-4">There is no single cause of dementia, as various factors can cause it. However, in most cases, dementia is caused by damage to the brain cells that affects cognitive function. The most common causes include:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li><strong>Alzheimer's disease:</strong> Build-up of abnormal proteins (plaques and tangles) in the brain.</li>
                                                <li><strong>Vascular dementia:</strong> Reduced blood flow to the brain causing damage to brain cells.</li>
                                                <li><strong>Dementia with Lewy bodies (DLB):</strong> Abnormal protein deposits called Lewy bodies.</li>
                                                <li><strong>Frontotemporal dementia (FTD):</strong> Genetic mutations or abnormal protein deposits in frontal/temporal lobes.</li>
                                            </ul>
                                            <p className="mt-4">Other factors include traumatic brain injury, Parkinson's disease, Huntington's disease, and Creutzfeldt-Jakob disease. Risks include age, genetics, lifestyle, and environmental factors.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-5" className="border border-border/40 rounded-lg px-6 bg-card">
                                        <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-accent-blue py-6">
                                            What treatment is available for dementia?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                            <p className="mb-4">While there is currently no cure, treatments can help manage symptoms and improve quality of life:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li><strong>Medications:</strong> Can improve cognitive function (Alzheimer's) or treat behavioural symptoms.</li>
                                                <li><strong>Non-pharmacological interventions:</strong> Cognitive stimulation therapy, reminiscence therapy, and occupational therapy.</li>
                                                <li><strong>Lifestyle modifications:</strong> Regular exercise, healthy diet, and adequate sleep.</li>
                                                <li><strong>Support for caregivers:</strong> Support groups, respite care, and counselling.</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <div className="text-center mt-12">
                                    <p className="text-muted-foreground mb-6">Still have questions?</p>
                                    <Link href="/contact">
                                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Get in Touch</Button>
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

export default function Support() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <SupportContent />
        </Suspense>
    );
}
