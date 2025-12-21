'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, ExternalLink } from 'lucide-react'
import { FadeInOnScroll } from '@/components/Parallax'

export default function DementiaDialoguesArticle() {
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
                            3 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                        Dementia Dialogues
                    </h1>

                    <p className="text-xl text-muted-foreground">
                        Dignitate hosts Dementia Dialogues - A special event during Dementia Awareness Week
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
                                    🌟 Get ready to mark your calendars as Dignitate is thrilled to announce a super special event that promises to be both enlightening and impactful. 🎉
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 border-t pt-8 border-gray-100">
                                    Esteemed Guest Speakers
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    🎤 Join us as we welcome esteemed guest speakers who bring with them invaluable lived experiences in the journey of dementia, as well as leaders who are leading the charge in the fight against dementia.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    From esteemed Palliative Care Nurses and Public Health experts to dedicated Nurse Prescribers, our lineup is packed with individuals who have dedicated their careers to building greater equity in healthcare, especially for Minoritised and Marginalised communities in the UK.
                                </p>

                                <div className="bg-[#dffffe] border-l-4 border-[#5d9b97] p-6 rounded-r-xl mb-8">
                                    <p className="text-gray-800 font-medium italic">
                                        💡 These speakers will share personal stories, groundbreaking research, and innovative strategies that highlight the importance of inclusivity and empowerment in healthcare, alongside invaluable insights and expertise on crucial topics that are shaping the landscape of dementia awareness.
                                    </p>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 border-t pt-8 border-gray-100">
                                    Art and Dementia
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    🎨 But that's not all! We are also delighted to welcome a creative artist who will be speaking about how she uses art in dementia. Her unique perspective will shed light on the transformative power of art in enriching the lives of those affected by dementia.
                                </p>

                                <div className="bg-gradient-to-r from-[#2e8b8f] to-[#5d9b97] text-white p-8 rounded-xl my-10">
                                    <h3 className="text-xl font-bold mb-4">🤝 A Call to Action</h3>
                                    <p className="opacity-90 mb-4">
                                        This isn't just an event; it's a CALL TO ACTION. Together, we can amplify these voices, raise awareness, and foster a community of support and understanding.
                                    </p>
                                    <p className="opacity-90">
                                        📅 So, mark your calendars and stay tuned for more details. Together, let's celebrate resilience, honor personal stories, and make a meaningful impact during Dementia Awareness Week!
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-10 text-center py-8 border-t border-gray-100">
                                <p className="text-gray-600 mb-4">Learn more about our speakers and get involved</p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <a
                                        href="https://www.linkedin.com/in/malcolm-gill-723342a1/recent-activity/all/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-[#5d9b97] hover:bg-[#2e8b8f] text-white px-8 py-3 rounded-full font-semibold transition-colors"
                                    >
                                        View on LinkedIn
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 border-2 border-[#5d9b97] text-[#5d9b97] hover:bg-[#5d9b97] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </FadeInOnScroll>

                    {/* Related Articles */}
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">More from Dignitate</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link href="/news/womans-day-at-dignitate" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <p className="text-sm text-[#5d9b97] mb-2">Community</p>
                                <h4 className="font-semibold text-gray-900 group-hover:text-[#2e8b8f] transition-colors">
                                    Woman's Day at Dignitate →
                                </h4>
                            </Link>
                            <Link href="/news/dementia-diagnosis-disparity" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <p className="text-sm text-[#5d9b97] mb-2">Healthcare</p>
                                <h4 className="font-semibold text-gray-900 group-hover:text-[#2e8b8f] transition-colors">
                                    Addressing the Dementia Diagnosis Disparity →
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
