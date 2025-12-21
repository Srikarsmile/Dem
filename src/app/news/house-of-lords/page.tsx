import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

export default function HouseOfLordsPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 overflow-hidden bg-gradient-to-b from-[#c4dcdc] to-transparent">
                <div className="container px-4 md:px-6 relative z-10">
                    <Link
                        href="/news"
                        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to News
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex flex-wrap gap-3 mb-6">
                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                                Event
                            </Badge>
                            <Badge variant="outline" className="text-muted-foreground">
                                3 Min Read
                            </Badge>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                            Our future health. House of Lords event.
                        </h1>

                        <div className="flex items-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5" />
                                <span>31st July 2023</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5" />
                                <span>Published 10:00 AM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image - standard container for alignment */}
            <div className="container px-4 md:px-6 -mt-8 mb-12 relative z-20">
                <div className="rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
                    <Image
                        src="/images/house-of-lords.jpg"
                        alt="Dignitate at the House of Lords"
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Article Content */}
            <article className="container px-4 md:px-6 pb-24">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="prose prose-lg prose-teal dark:prose-invert max-w-none">
                        <p className="lead text-xl text-muted-foreground leading-relaxed">
                            I had the opportunity to attend a UK parliamentary event organized by Our Future Health at the House of Lords on 5 July. We engaged with influential MPs who joined us in discovering the transformative power of the Our Future Health research programme.
                        </p>

                        <p>
                            During the event, we delved into the remarkable progress made thus far and shared invaluable insights with the guests. It was truly inspiring to hear firsthand from other volunteers as they fearlessly shared their personal experiences and stories, igniting a passion for change within all of us.
                        </p>

                        <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-gray-700 dark:text-gray-300">
                            "The Our Future Health programme stands tall as the UK's largest-ever health research initiative, dedicated to helping people lead healthier, more vibrant lives for longer."
                        </blockquote>

                        <p>
                            The Our Future Health programme stands tall as the UK's largest-ever health research initiative, dedicated to helping people lead healthier, more vibrant lives for longer. By pioneering the discovery and rigorous testing of cutting-edge approaches to disease prevention, earlier detection, and advanced treatments, we're shaping a future where wellness takes centre stage.
                        </p>
                    </div>


                </div>

                {/* Related Articles */}
                <div className="max-w-4xl mx-auto mt-20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">More from Dignitate</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link href="/news/beat-dementia" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                            <p className="text-sm text-primary font-medium mb-3">Feature Article</p>
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                                "I want to help beat dementia" - Malcolm's Story →
                            </h4>
                        </Link>
                        <Link href="/news/carers-wellbeing-event" className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                            <p className="text-sm text-primary font-medium mb-3">Event</p>
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                                Carers Wellbeing Event to Kick Off UK Carers Week →
                            </h4>
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    )
}
