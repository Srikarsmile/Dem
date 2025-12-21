'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { FadeInOnScroll } from '@/components/Parallax'

export default function DementiaDiagnosisDisparityArticle() {
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
                            November 8, 2023
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            5 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                        Addressing the Dementia Diagnosis Disparity
                    </h1>

                    <p className="text-xl text-muted-foreground">
                        A Call for Equitable Healthcare - More than half of local authority districts in England are failing to meet the government's target dementia diagnosis rate.
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
                                    Dementia, a condition that affects the lives of millions, has become a growing concern in England. A recent report has shed light on a disheartening reality: more than half of local authority districts in the country are failing to meet the government's target dementia diagnosis rate of 66.7%. This alarming discrepancy in diagnosis rates demands immediate attention and calls into question the fairness and accessibility of healthcare services.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 border-t pt-8 border-gray-100">
                                    The Alarming Disparity
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    The statistics are concerning, with over half of the areas falling short of the government's benchmark. Some towns and districts, such as South Hams and Tonbridge and Malling, have even lower rates, with only 44% and 48% of dementia cases diagnosed, respectively. In stark contrast, regions like Stoke-on-Trent, Nottingham, Rotherham, and Southend have surpassed the 80% mark in diagnosis rates.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 border-t pt-8 border-gray-100">
                                    The Human Toll
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Behind these numbers are real people – more than 115,000 individuals living with dementia are missing out on a diagnosis due to their geographical location. This means delayed access to vital care and support, further exacerbating the challenges faced by both patients and their families.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 border-t pt-8 border-gray-100">
                                    Exploring the Factors
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    A report by the all-party parliamentary group on dementia discovered that while dementia might be more prevalent in deprived and rural areas, only a quarter of the variation in diagnosis rates can be attributed to these factors. Structural issues like cultural barriers, difficulties in accessing primary care, lengthy waits for memory assessments, lack of post-diagnostic support, inadequate availability of scanners, and challenges associated with attending medical appointments are all contributing to this dilemma.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 border-t pt-8 border-gray-100">
                                    The Urgent Need for Change
                                </h2>

                                <div className="bg-[#dffffe] border-l-4 border-[#5d9b97] p-6 rounded-r-xl mb-8">
                                    <p className="text-gray-800 font-medium italic">
                                        "The current situation has been described as a 'postcode lottery,' where a person's diagnosis depends on their location rather than their condition."
                                    </p>
                                    <p className="text-gray-600 text-sm mt-2">- Debbie Abrahams MP, Co-chair of the APPG on dementia</p>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    Debbie Abrahams MP, the co-chair of the APPG on dementia, emphasized the critical importance of timely diagnosis, especially in light of new potential treatments for Alzheimer's disease.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 border-t pt-8 border-gray-100">
                                    The Way Forward
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    To rectify this situation, the report has called upon the government to significantly increase scanning capacity and the healthcare workforce. Additionally, it urges NHS integrated care boards to develop strategic local plans aimed at improving access to diagnostic services.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    The situation has also spurred political responses, with the shadow health secretary, Wes Streeting, proposing a 'fit for the future fund' to double the number of scanners across the health service, funded by abolishing the non-dom tax status.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 border-t pt-8 border-gray-100">
                                    The NHS Perspective
                                </h2>

                                <p className="text-gray-700 mb-6">
                                    Fiona Carragher, the director of research and influencing at Alzheimer's Society, decried the impact of geography and support networks on an individual's chances of receiving a timely diagnosis. She highlighted the suffering experienced by hundreds of thousands of people facing dementia alone.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    An NHS spokesperson acknowledged the recent increase in dementia diagnosis rates but stressed that catching it early makes the most significant difference. The plea to individuals and their families to seek medical help if they suspect dementia symptoms remains crucial.
                                </p>

                                <div className="bg-gradient-to-r from-[#2e8b8f] to-[#5d9b97] text-white p-8 rounded-xl my-10">
                                    <h3 className="text-xl font-bold mb-4">A Call to Action</h3>
                                    <p className="opacity-90 mb-4">
                                        The current state of dementia diagnosis rates in England paints a sombre picture of inequity in healthcare. To provide all individuals with the diagnosis, care, and support they deserve, it is imperative that both policymakers and healthcare providers take immediate action.
                                    </p>
                                    <p className="opacity-90">
                                        By addressing the structural issues and disparities in healthcare services, England can ensure that no patient suffers due to their geographical location, thereby fostering a more compassionate and fair healthcare system for all.
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-10 text-center py-8 border-t border-gray-100">
                                <p className="text-gray-600 mb-4">Want to learn more about supporting dementia awareness?</p>
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
                            <Link href="/news/beat-dementia" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <p className="text-sm text-[#5d9b97] mb-2">Research</p>
                                <h4 className="font-semibold text-gray-900 group-hover:text-[#2e8b8f] transition-colors">
                                    "I want to help beat dementia." →
                                </h4>
                            </Link>
                            <Link href="/news/carers-wellbeing-event" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <p className="text-sm text-[#5d9b97] mb-2">Event</p>
                                <h4 className="font-semibold text-gray-900 group-hover:text-[#2e8b8f] transition-colors">
                                    Carers Wellbeing Event to Kick Off UK Carers Week →
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
