'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { FadeInOnScroll } from '@/components/Parallax'

export default function WomansDayArticle() {
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
                            May 6, 2024
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            4 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                        Woman's Day at Dignitate
                    </h1>

                    <p className="text-xl text-muted-foreground">
                        Upholding Resilience: The Strength of Black Women Amidst Adversity
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-16 bg-gradient-to-b from-[#e8f4f4] to-[#f5f5f5]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <FadeInOnScroll>
                        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                    In the wake of deplorable comments aimed at Diane Abbott and black women at large, it's imperative to shed light on the daily struggles faced by black women and their unwavering resilience in the face of adversity.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    Despite enduring a constant barrage of derogatory remarks and unjust treatment, black women exhibit remarkable strength, often concealing their internal anguish while projecting resilience to the world. The relentless battle of justifying one's existence and worth takes a toll, yet black women continue to persevere, navigating through a world that frequently undermines their capabilities and diminishes their humanity.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    The recent incidents serve as a stark reminder of the pervasive racism that persists in society, perpetuated not only through overt acts but also through subtle biases ingrained within various institutions.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 border-t pt-8 border-gray-100">
                                    The Power of Safe Spaces
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The assertion that such incidents are not rooted in racism is confounding, highlighting the urgent need for platforms like Upfront Conversation. The Upfront Conversation is a safe space for solace and empowerment, enabling individuals to address pressing issues such as racial discrimination and reclaim their narrative.
                                </p>

                                <div className="bg-[#dffffe] border-l-4 border-[#5d9b97] p-6 rounded-r-xl mb-8">
                                    <p className="text-gray-800 font-medium italic">
                                        EmpowerHer, an initiative within Upfront Conversation, exemplifies the power of collective voices coming together to challenge societal norms and advocate for change.
                                    </p>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 border-t pt-8 border-gray-100">
                                    Beacons of Hope
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Amidst the adversity, there are shining beacons of hope, individuals like Palma Black at Soul Purpose 360, who are dedicated to dismantling the negative stereotypes surrounding black women. Through initiatives aimed at changing the narrative and uplifting black women, Palma and others are making significant strides towards fostering inclusivity and empowerment.
                                </p>

                                <div className="bg-gradient-to-r from-[#2e8b8f] to-[#5d9b97] text-white p-8 rounded-xl my-10">
                                    <h3 className="text-xl font-bold mb-4">Celebrating Remarkable Contributions</h3>
                                    <p className="opacity-90 mb-4">
                                        Tonight, we celebrate the remarkable contributions of black women, acknowledging their resilience, strength, and unwavering determination to create a more equitable world.
                                    </p>
                                    <p className="opacity-90">
                                        Together, we stand in solidarity, amplifying their voices and honoring their invaluable presence in shaping our collective future. Join us as we champion the transformative impact of these extraordinary women and strive towards a more just and inclusive society.
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-10 text-center py-8 border-t border-gray-100">
                                <p className="text-gray-600 mb-4">Want to join our community and make a difference?</p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 bg-[#5d9b97] hover:bg-[#2e8b8f] text-white px-8 py-3 rounded-full font-semibold transition-colors"
                                    >
                                        Get Involved
                                    </Link>
                                    <Link
                                        href="/our-story"
                                        className="inline-flex items-center gap-2 border-2 border-[#5d9b97] text-[#5d9b97] hover:bg-[#5d9b97] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
                                    >
                                        Our Story
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </FadeInOnScroll>

                    {/* Related Articles */}
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">More from Dignitate</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link href="/news/dementia-dialogues" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <p className="text-sm text-[#5d9b97] mb-2">Event</p>
                                <h4 className="font-semibold text-gray-900 group-hover:text-[#2e8b8f] transition-colors">
                                    Dementia Dialogues →
                                </h4>
                            </Link>
                            <Link href="/news/beat-dementia" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <p className="text-sm text-[#5d9b97] mb-2">Research</p>
                                <h4 className="font-semibold text-gray-900 group-hover:text-[#2e8b8f] transition-colors">
                                    "I want to help beat dementia." →
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
