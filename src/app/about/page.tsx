'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen, Users, HandHeart, Target, Eye, Award, Building2 } from 'lucide-react';
import { FadeInOnScroll } from '@/components/Parallax';

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-[#c4dcdc] to-transparent">
                <div className="container px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">About Dignitate</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
                        A cultural dementia charity devoted to addressing dementia through a culturally sensitive and inclusive approach.
                    </p>
                </div>
            </section>

            {/* Charity Info Banner */}
            <section className="py-6 bg-primary text-primary-foreground">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-wrap justify-center items-center gap-8 text-center">
                        <div className="flex items-center gap-2">
                            <Award className="h-5 w-5" />
                            <span className="font-medium">Registered Charity Number: 1196886</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Building2 className="h-5 w-5" />
                            <span>London, United Kingdom</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Heart className="h-5 w-5" />
                            <span>Est. 2021</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values / What We Stand For */}
            <section className="py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <FadeInOnScroll>
                        <div className="text-center mb-8 md:mb-16">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">What We Stand For</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Dignitate's core values guide everything we do in supporting cultural carers.
                            </p>
                        </div>
                    </FadeInOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: Heart, title: "Empowerment of young dementia leaders", color: "text-accent-coral bg-accent-coral/10" },
                            { icon: BookOpen, title: "Education, Stigma and Community", color: "text-accent-purple bg-accent-purple/10" },
                            { icon: Target, title: "Global and local impact", color: "text-accent-teal bg-accent-teal/10" },
                            { icon: HandHeart, title: "Dignity and early intervention", color: "text-accent-blue bg-accent-blue/10" },
                            { icon: Users, title: "Inclusivity and cultural sensitivity", color: "text-accent-coral bg-accent-coral/10" },
                        ].map((value, i) => (
                            <FadeInOnScroll key={i} delay={i * 100} className="h-full">
                                <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-card/60 h-full">
                                    <CardContent className="p-6 flex items-center gap-4 h-full">
                                        <div className={`p-3 rounded-full ${value.color}`}>
                                            <value.icon className="h-6 w-6" />
                                        </div>
                                        <span className="text-lg font-medium">{value.title}</span>
                                    </CardContent>
                                </Card>
                            </FadeInOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-12 md:py-20 bg-[#dffffe]">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Mission */}
                        <FadeInOnScroll>
                            <Card className="border-none shadow-lg h-full">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-accent-teal/10">
                                            <Target className="h-6 w-6 text-accent-teal" />
                                        </div>
                                        <CardTitle className="text-2xl">Our Mission</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground leading-relaxed">
                                        Dignitate's mission is to place dementia and caring within cultural communities at the heart of health equity. We empower carers and families - often unseen and underserved - to access support, share experiences, and sustain their wellbeing alongside those they care for.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Through culturally competent approaches, preventative care, and peer-led networks, we work to reduce stigma, dismantle barriers to access, and build bridges between communities and services.
                                    </p>
                                </CardContent>
                            </Card>
                        </FadeInOnScroll>

                        {/* Vision */}
                        <FadeInOnScroll delay={150}>
                            <Card className="border-none shadow-lg h-full">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-[#c4dcdc]">
                                            <Eye className="h-6 w-6 text-[#2e8b8f]" />
                                        </div>
                                        <CardTitle className="text-2xl">Our Vision</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground leading-relaxed">
                                        We envision a future where dementia and caring are recognised as shared human experiences, free from stigma or marginalisation. In this future, carers - particularly from culturally diverse backgrounds - are supported, empowered, and celebrated for the vital role they play.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Dignitate strives to be a catalyst for change, where health and social systems respond with equity and cultural understanding.
                                    </p>
                                </CardContent>
                            </Card>
                        </FadeInOnScroll>
                    </div>
                </div>
            </section>

            {/* We Strive To */}
            <section className="py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <FadeInOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">We Strive To...</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Four pillars that guide our work in transforming dementia care for cultural communities.
                            </p>
                        </div>
                    </FadeInOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Raise Awareness",
                                desc: "We find this critical in helping individuals and communities better understand the challenges faced by those with the condition. By increasing awareness about dementia, we can help people recognize the signs and symptoms of the disease.",
                                icon: Target,
                                color: "border-accent-teal"
                            },
                            {
                                title: "Educate",
                                desc: "Provide culturally appropriate education and courses. Educate people on how to support individuals with dementia, including providing proper care and creating dementia-friendly environments.",
                                icon: BookOpen,
                                color: "border-accent-purple"
                            },
                            {
                                title: "Build Community",
                                desc: "A community-led platform to provide a supportive space to connect, share experiences, and access resources. We aim to foster inclusivity, reduce stigma, and promote well-being for all.",
                                icon: Users,
                                color: "border-accent-coral"
                            },
                            {
                                title: "Support",
                                desc: "Support for carers from individuals with personal caregiving experience. Our platform offers peer support, allowing you to connect with others who understand your challenges.",
                                icon: HandHeart,
                                color: "border-accent-blue"
                            }
                        ].map((pillar, i) => (
                            <FadeInOnScroll key={i} delay={i * 100} className="h-full">
                                <Card className={`border-l-4 ${pillar.color} shadow-sm hover:shadow-md transition-shadow h-full`}>
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <pillar.icon className="h-6 w-6 text-primary" />
                                            <CardTitle className="text-xl">{pillar.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
                                    </CardContent>
                                </Card>
                            </FadeInOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Preview */}
            <section className="py-12 md:py-20 bg-[#dffffe]">
                <div className="container px-4 md:px-6">
                    <FadeInOnScroll>
                        <div className="max-w-4xl mx-auto">
                            <Card className="border-none shadow-lg overflow-hidden">
                                <CardContent className="p-8 md:p-12">
                                    <h2 className="text-2xl font-bold mb-6 text-center">Our Story</h2>
                                    <blockquote className="text-lg md:text-xl text-muted-foreground italic text-center leading-relaxed mb-6">
                                        "I lost Mum in 2011 to dementia, and she passed away in 2022. I found it extremely hard to adjust to Mum's diagnosis of vascular dementia. I had no idea what was out there for us to help us, dealing with it all was a lot.
                                        <br /><br />
                                        Trust me, you get through it, and we are here to support you. We are here to help you make those memories. If we have you both laughing and hugging each other, then this has all been worth it . . ."
                                    </blockquote>
                                    <p className="text-center font-bold text-[#2e8b8f]">- Malcolm Gill, Founder</p>
                                    <div className="text-center mt-8">
                                        <Link href="/our-story">
                                            <Button variant="outline" size="lg">Read Our Full Story &rarr;</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </FadeInOnScroll>
                </div>
            </section>



            {/* CTA Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                        Whether you're a carer seeking support, a professional wanting to learn, or someone who wants to make a difference - we welcome you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/support">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90">Get Support</Button>
                        </Link>
                        <Link href="/donate">
                            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20">Donate</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
