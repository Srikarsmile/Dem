'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, Users, Heart, CheckCircle } from 'lucide-react'
import { FadeInOnScroll } from '@/components/Parallax'

export default function CarersWellbeingEventArticle() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Article Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-[#c4dcdc] to-transparent">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to News
                    </Link>

                    <div className="flex items-center gap-4 text-muted-foreground mb-4">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            June 5, 2023
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            4 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                        Carers Wellbeing Event to Kick Off UK Carers Week
                    </h1>

                    <p className="text-xl text-muted-foreground">
                        A successful event bringing together carers and professionals to provide support, education, and community connection.
                    </p>
                </div>
            </section>

            {/* Featured Image */}
            <section className="py-8">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <FadeInOnScroll>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/carers-wellbeing-event.jpg"
                                alt="Carers Wellbeing Event - attendees and speakers at the event"
                                width={1200}
                                height={675}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-16 bg-gradient-to-b from-[#e8f4f4] to-[#f5f5f5]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

                        {/* Event Success Banner */}
                        <div className="bg-gradient-to-r from-[#2e8b8f] to-[#5d9b97] text-white rounded-xl p-6 mb-10 flex items-center gap-4">
                            <CheckCircle className="w-8 h-8 flex-shrink-0" />
                            <div>
                                <p className="font-bold text-lg">Event Completed Successfully</p>
                                <p className="opacity-90 text-sm">Held on 5th June 2023 as part of UK Carers Week</p>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                On 5th June 2023, we hosted a much-needed Carers Wellbeing Event with the aim of providing support and education to those caring for their loved ones. The event was centred around promoting a person-centred approach to caregiving, recognizing the diverse cultural stigmas that carers may encounter, and enhancing their understanding of dementia awareness.
                            </p>

                            <p className="text-gray-700 mb-8">
                                We had the privilege of hearing from incredible speakers who shared their expertise and personal stories. Their insights were truly inspiring and provided valuable takeaways for everyone in attendance.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 mt-10">
                                <Users className="w-6 h-6 text-[#5d9b97]" />
                                Topics Covered
                            </h2>
                        </div>

                        {/* Topics Grid */}
                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            <div className="bg-[#dffffe] rounded-xl p-6 border-l-4 border-[#5d9b97]">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Exploring Cultural Stigmas</h3>
                                <p className="text-gray-600 text-sm">
                                    Acknowledging that caregiving can be viewed differently across cultures and how to navigate those challenges.
                                </p>
                            </div>

                            <div className="bg-[#dffffe] rounded-xl p-6 border-l-4 border-[#5d9b97]">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Dementia Awareness</h3>
                                <p className="text-gray-600 text-sm">
                                    Providing a deeper understanding of the condition and how it affects both the individual and their caregiver.
                                </p>
                            </div>

                            <div className="bg-[#dffffe] rounded-xl p-6 border-l-4 border-[#5d9b97]">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Person-Centred Care</h3>
                                <p className="text-gray-600 text-sm">
                                    Emphasizing the importance of tailoring care to the unique needs and preferences of the individual receiving it.
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 mt-10">
                                <Heart className="w-6 h-6 text-[#5d9b97]" />
                                Event Success
                            </h2>

                            <p className="text-gray-700 mb-6">
                                The event was a huge success, and we were thrilled to see so many carers come together to learn, share their experiences, and support one another. It was a reminder of the incredible work that carers do every day and the importance of providing them with the resources and support they need.
                            </p>

                            <div className="bg-[#dffffe] border-l-4 border-[#9bdbd9] p-6 rounded-r-xl mb-8">
                                <p className="text-gray-800 font-medium italic">
                                    "We would like to thank our speakers and everyone who attended the event. We look forward to hosting more events in the future and continuing to support our community of carers."
                                </p>
                                <p className="text-[#2e8b8f] font-semibold mt-3">- Dignitate Team</p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 mt-10">
                                <Users className="w-6 h-6 text-[#5d9b97]" />
                                About Carers Week
                            </h2>

                            <p className="text-gray-700 mb-6">
                                Carers Week is an annual campaign to raise awareness of caring, highlight the challenges unpaid carers face and recognise the contribution they make to families and communities throughout the UK.
                            </p>

                            <div className="bg-[#dffffe] border-l-4 border-[#9bdbd9] p-6 rounded-r-xl mb-8">
                                <p className="text-gray-800 font-medium">
                                    According to Carers UK, there are <strong>6.5 million people</strong> in the UK who are carers. Many face significant challenges including isolation and lack of support.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-10 text-center py-8 border-t border-gray-100">
                            <p className="text-gray-600 mb-4">Want to stay updated on future Dignitate events?</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-[#5d9b97] hover:bg-[#2e8b8f] text-white px-8 py-3 rounded-full font-semibold transition-colors"
                            >
                                Join Our Community
                            </Link>
                        </div>
                    </article>

                    {/* Related Articles */}
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">More from Dignitate</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link href="/news/beat-dementia" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <p className="text-sm text-[#5d9b97] mb-2">Feature</p>
                                <h4 className="font-semibold text-gray-900 group-hover:text-[#2e8b8f] transition-colors">
                                    "I want to help beat dementia." →
                                </h4>
                            </Link>
                            <Link href="/news" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <p className="text-sm text-[#5d9b97] mb-2">News & Updates</p>
                                <h4 className="font-semibold text-gray-900 group-hover:text-[#2e8b8f] transition-colors">
                                    View All News & Events →
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
