'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Calendar, ArrowRight, Users, Mic, Award, BookOpen, Heart, Building, Trophy } from 'lucide-react';
import { FadeInOnScroll } from '@/components/Parallax';

export default function News() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    // News and updates - including content from LinkedIn and legacy site
    const newsItems = [
        {
            date: "November 2024",
            category: "Fundraising",
            title: "London Marathon 2026 - Chris Lockwood Running for Dignitate",
            excerpt: "Chris Lockwood from Icon Kitchen Designs is running the 2026 London Marathon in support of Dignitate! Chris was involved in 'The Carers Table' event and is now taking on this incredible challenge to raise funds for our charity.",
            icon: Trophy,
            externalLink: "https://lnkd.in/eZ2ZJEtz"
        },
        {
            date: "March 2024",
            category: "Speaking",
            title: "Dementia Adventure: Relationships and Memories",
            excerpt: "Malcolm Gill spoke at Dementia Adventure about the importance of relationships and memories in dementia care, sharing insights from his personal caregiving journey and the work of Dignitate.",
            icon: Mic
        },
        {
            date: "June 2021",
            category: "Event",
            title: "Carers Wellbeing Event to Kick Off UK Carers Week",
            excerpt: "A FREE online event from 2pm-4pm featuring speakers including Malcolm Gill, Dr Nnanna Oparaeche, Karia Von V tok, and Funmi Olutoye - giving carers the chance to learn how to stay healthy.",
            icon: Heart,
            link: "/news/carers-wellbeing-event"
        },
        {
            date: "December 2024",
            category: "Partnership",
            title: "NHS Our Future Health Collaboration Continues",
            excerpt: "We're proud to continue our partnership with the UK's largest health research programme, working to increase participation from diverse communities in vital dementia research.",
            icon: Building
        },
        {
            date: "October 2024",
            category: "Community",
            title: "500+ Carers Now Supported",
            excerpt: "We've reached a significant milestone - over 500 carers from cultural communities have received support from Dignitate through our various programmes.",
            icon: Users
        },
        {
            date: "August 2024",
            category: "Innovation",
            title: "Cultural Carers App Development Begins",
            excerpt: "We've started development on our first-of-its-kind mobile app designed specifically for carers from cultural communities.",
            icon: Heart
        },
        {
            date: "July 2024",
            category: "Recognition",
            title: "Charity Registration Year 3",
            excerpt: "Dignitate marks three years as a registered charity (1196886), continuing our mission to support cultural carers across the UK.",
            icon: Award
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-accent-blue/10 to-transparent">
                <div className="container px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">News & Updates</h1>
                    <p className="text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 max-w-2xl mx-auto">
                        Stay informed about our latest work, events, and impact.
                    </p>
                </div>
            </section>

            {/* Recent Events Section */}
            <section className="py-12 bg-gradient-to-br from-emerald-50 to-teal-50">
                <div className="container px-4 md:px-6">
                    <FadeInOnScroll>
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold tracking-tight mb-2">Recent Events</h2>
                            <p className="text-muted-foreground">Celebrating our successful community events</p>
                        </div>
                    </FadeInOnScroll>

                    <FadeInOnScroll delay={150}>
                        <Card className="max-w-4xl mx-auto border-2 border-emerald-500/30 bg-gradient-to-br from-white to-emerald-50/50 mb-12">
                            <CardContent className="p-8">
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                                        <Image
                                            src="/images/every-dish-has-a-story.jpg"
                                            alt="Every Dish Has A Story Event"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase mb-2">
                                                ✓ Event Completed
                                            </span>
                                            <h3 className="text-2xl font-bold mb-2">Every Dish Has A Story</h3>
                                            <p className="text-muted-foreground text-sm mb-4">
                                                Successfully brought generations together through culture, stories, and shared meals. Part of the Intergenerational 2.0 project.
                                            </p>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-emerald-600" />
                                                <span className="font-medium">Held on 31st May 2025, Saturday</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-emerald-600" />
                                                <span>1:00 PM – 4:00 PM</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 pt-2">
                                            <Link href="/impact">
                                                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">View Impact</Button>
                                            </Link>
                                            <a href="mailto:support@dignitate.co.uk">
                                                <Button variant="outline">Learn More</Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </FadeInOnScroll>

                </div>
            </section>

            {/* The Carer's Table Video - Purple Section */}
            <section className="py-12 bg-gradient-to-br from-accent-purple/10 to-accent-purple/5">
                <div className="container px-4 md:px-6">
                    <FadeInOnScroll delay={200}>
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
                                    <Heart className="w-4 h-4" />
                                    Part of Every Dish Has A Story
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    The Carer's Table
                                </h3>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    In partnership with Icon Kitchen Designs, we created a night of luxury, laughter, and connection — where cultural carers were invited to simply be cared for.
                                </p>
                            </div>

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                                <video
                                    controls
                                    className="w-full aspect-video"
                                    poster="/images/every-dish-has-a-story.jpg"
                                >
                                    <source src="/videos/carers-table-event.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="mt-6 text-center">
                                <blockquote className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
                                    "At Dignitate, we know cultural carers often give so much of themselves, with little time to pause. That's why we created The Carer's Table — because carers deserve to be cared for too."
                                </blockquote>
                                <p className="mt-3 font-bold text-accent-purple">— Malcolm Gill, Founder</p>
                            </div>
                        </div>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* Intergenerational Workshop Gallery - Teal Section */}
            <section className="py-12 bg-gradient-to-br from-accent-teal/10 to-accent-teal/5">
                <div className="container px-4 md:px-6">

                    <FadeInOnScroll delay={250}>
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-teal/10 text-accent-teal rounded-full text-sm font-medium mb-4">
                                    <Users className="w-4 h-4" />
                                    Intergenerational 2.0 Project
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Breaking Barriers Through Art
                                </h3>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Bringing generations together through creativity — elders and young people painting, sharing stories, and building connections.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {[
                                    { src: "/images/workshop-group.jpg", alt: "Intergenerational art workshop - group painting session" },
                                    { src: "/images/workshop-intergenerational.jpg", alt: "Elder and young person painting together" },
                                    { src: "/images/workshop-painting-flowers.jpg", alt: "Participant painting beautiful flowers" },
                                    { src: "/images/workshop-artwork.jpg", alt: "Artwork created during workshop" },
                                    { src: "/images/workshop-team.jpg", alt: "Dignitate team at the workshop" },
                                    { src: "/images/workshop-activity.jpg", alt: "Workshop activity in progress" },
                                ].map((image, i) => (
                                    <div
                                        key={i}
                                        className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3]' : 'aspect-square'}`}
                                        onClick={() => setSelectedImage(image.src)}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* What to Expect - Coral Section */}
            <section className="py-12 bg-gradient-to-br from-accent-coral/10 to-accent-coral/5">
                <div className="container px-4 md:px-6">

                    <FadeInOnScroll delay={300}>
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-center mb-8">What to Expect</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { icon: BookOpen, title: "Share Food", desc: "Bring a dish that holds meaning - a recipe from those you cared for" },
                                    { icon: Users, title: "Share Stories", desc: "Connect with others and share the memories behind your meal" },
                                    { icon: Heart, title: "Build Community", desc: "Be part of an intergenerational celebration of culture and care" }
                                ].map((item, i) => (
                                    <Card key={i} className="text-center border-none shadow-md">
                                        <CardContent className="pt-8 pb-6">
                                            <div className="inline-flex p-4 rounded-full bg-accent-coral/10 mb-4">
                                                <item.icon className="w-8 h-8 text-accent-coral" />
                                            </div>
                                            <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </FadeInOnScroll>
                </div>
            </section>


            {/* Featured Update */}
            <section className="py-12 bg-primary text-primary-foreground">
                <div className="container px-4 md:px-6">
                    <FadeInOnScroll>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Featured</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Championing Cultural Carers: Our 2024 Mission
                            </h2>
                            <p className="text-lg opacity-90 mb-6">
                                This year, we've expanded our reach to support more carers than ever, launched new training programmes for NHS professionals, and continued building the Cultural Carers movement. Thank you for being part of this journey.
                            </p>
                            <Link href="/about">
                                <Button className="bg-white text-primary hover:bg-white/90">Learn More About Us</Button>
                            </Link>
                        </div>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <FadeInOnScroll>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {newsItems.map((item, i) => {
                                const hasLink = item.link || item.externalLink;
                                const cardContent = (
                                    <Card key={i} className={`group hover:shadow-lg transition-all h-full ${hasLink ? 'cursor-pointer' : ''}`}>
                                        <CardHeader>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.category}</span>
                                                <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                                                    <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                                </div>
                                            </div>
                                            <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                                            <CardDescription className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {item.date}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                                            {item.link && (
                                                <p className="text-sm font-medium text-primary mt-4 group-hover:underline flex items-center gap-1">
                                                    Read Article <ArrowRight className="h-3 w-3" />
                                                </p>
                                            )}
                                            {item.externalLink && (
                                                <p className="text-sm font-medium text-primary mt-4 group-hover:underline flex items-center gap-1">
                                                    Donate Now <ArrowRight className="h-3 w-3" />
                                                </p>
                                            )}
                                        </CardContent>
                                    </Card>
                                );

                                if (item.link) {
                                    return (
                                        <Link key={i} href={item.link} className="block">
                                            {cardContent}
                                        </Link>
                                    );
                                } else if (item.externalLink) {
                                    return (
                                        <a key={i} href={item.externalLink} target="_blank" rel="noopener noreferrer" className="block">
                                            {cardContent}
                                        </a>
                                    );
                                } else {
                                    return cardContent;
                                }
                            })}
                        </div>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="container px-4 md:px-6">
                    <FadeInOnScroll>
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                            <p className="text-muted-foreground mb-8">
                                Subscribe to our newsletter for the latest news, events, and resources from Dignitate.
                            </p>
                            <Card className="p-6">
                                <form className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                    <Button type="submit" size="lg">Subscribe</Button>
                                </form>
                                <p className="text-xs text-muted-foreground mt-4">
                                    We respect your privacy. Unsubscribe anytime.
                                </p>
                            </Card>
                        </div>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* Categories */}
            <section className="py-16">
                <div className="container px-4 md:px-6">
                    <FadeInOnScroll>
                        <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {["All", "Community", "Events", "Training", "Partnerships", "Innovation", "Recognition"].map((cat, i) => (
                                <Button key={i} variant={i === 0 ? "default" : "outline"} size="sm" className="rounded-full">
                                    {cat}
                                </Button>
                            ))}
                        </div>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-accent-blue text-white">
                <div className="container px-4 md:px-6 text-center">
                    <FadeInOnScroll>
                        <h2 className="text-2xl font-bold mb-4">Have a Story to Share?</h2>
                        <p className="opacity-90 mb-6">
                            We'd love to hear from carers, partners, and community members.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-white text-accent-blue hover:bg-white/90">Get in Touch</Button>
                        </Link>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* Image Lightbox */}
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-none" showCloseButton={false}>
                    <VisuallyHidden.Root>
                        <DialogTitle>Workshop Image Gallery</DialogTitle>
                    </VisuallyHidden.Root>
                    {selectedImage && (
                        <div className="relative w-full aspect-[4/3]">
                            <Image
                                src={selectedImage}
                                alt="Workshop image"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 90vw"
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
