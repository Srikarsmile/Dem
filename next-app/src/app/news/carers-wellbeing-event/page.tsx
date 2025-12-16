'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Users, Heart } from 'lucide-react'

export default function CarersWellbeingEventArticle() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Article Header */}
            <section className="bg-primary text-primary-foreground py-16 pt-32">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to News
                    </Link>

                    <div className="flex items-center gap-4 text-white/80 mb-4">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            June 2, 2021
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            5 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Carers Wellbeing Event to Kick Off UK Carers Week
                    </h1>

                    <p className="text-xl text-white/90">
                        A FREE online event bringing together carers and professionals to learn how to stay healthy whilst caring for a loved one.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

                        {/* Event Details Banner */}
                        <div className="bg-primary-50 rounded-xl p-6 mb-10 border-l-4 border-primary-500">
                            <div className="flex flex-wrap gap-6">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Date</p>
                                    <p className="font-semibold text-gray-900">Friday, June 4th, 2021</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Time</p>
                                    <p className="font-semibold text-gray-900">2pm – 4pm</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Format</p>
                                    <p className="font-semibold text-gray-900">FREE Online Event</p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                A carers wellbeing event is being held on Friday June 4th to mark the start of <strong>UK Carers Week 2021</strong>. Dignitate are proud to be holding the "Carers Wellbeing Event for Dementia Carers". It's a FREE online event from 2pm until 4pm to give carers the chance to learn how to keep themselves healthy whilst caring for a loved one.
                            </p>

                            <p className="text-gray-700 mb-8">
                                There will be a chance to network with other carers at the event and hear from a wonderful range of speakers and professionals.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Users className="w-6 h-6 text-primary-500" />
                                Inspirational Speakers
                            </h2>
                        </div>

                        {/* Speakers Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Malcolm Gill</h3>
                                <p className="text-primary-600 text-sm font-medium mb-3">Founder and Chairman, Dignitate</p>
                                <p className="text-gray-600 text-sm">
                                    Malcolm has over 11 years of lived experience as a carer for his Mother Elizabeth who continues to live with dementia. Malcolm is passionate, driven and dedicated to support UK and Global culturally diverse Carers. Malcolm also works as an advisor for the NHS and is Co-Chair of the NHS Race and Health Observatory Older Peoples Working Group.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Dr Nnanna Oparaeche</h3>
                                <p className="text-primary-600 text-sm font-medium mb-3">Managing Director, O'Echecs Medical Health and Social Care Company</p>
                                <p className="text-gray-600 text-sm">
                                    Dr Nnanna is trained as an anaesthetist but also set up an Echecs Medical Home to look after individuals in a home setting. He works with families as an advocate. Dr Nnanna is determined to support BAME communities through education, signposting and other methods of support.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Karia Von V tok</h3>
                                <p className="text-primary-600 text-sm font-medium mb-3">Founder and Director, No1 Mind and Body Platform</p>
                                <p className="text-gray-600 text-sm">
                                    Karia is a qualified Psychotherapist, Neuro-Linguistics and Weight management practitioner. She has spent the last five years creating No1 Mind and Body Platform, bringing her unique range of personal development skills, emotional health and wellbeing programmes into one place.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Funmi Olutoye</h3>
                                <p className="text-primary-600 text-sm font-medium mb-3">Personal Trainer and Carer</p>
                                <p className="text-gray-600 text-sm">
                                    Funmi is passionate about supporting individuals to promote a healthy lifestyle by being a personal trainer. She is also a carer for her mother, bringing both professional expertise and lived experience to the event.
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Heart className="w-6 h-6 text-primary-500" />
                                About Carers Week
                            </h2>

                            <p className="text-gray-700 mb-6">
                                Carers Week is an annual campaign to raise awareness of caring, highlight the challenges unpaid carers face and recognise the contribution they make to families and communities throughout the UK.
                            </p>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                                <p className="text-gray-800 font-medium">
                                    According to Carers UK, there are <strong>6.5 million people</strong> in the UK who are carers. The pandemic has had a big impact on carers, leaving them feeling isolated and struggling.
                                </p>
                            </div>

                            <p className="text-gray-700">
                                Make sure you register for the event to discover how to look after yourself whilst caring for a loved one.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="mt-10 text-center py-8 border-t border-gray-100">
                            <p className="text-gray-600 mb-4">Want to stay updated on future Dignitate events?</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                            >
                                Join Our Community
                            </Link>
                        </div>
                    </article>

                    {/* Related Articles */}
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">More from Dignitate</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link href="/news" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <p className="text-sm text-primary-500 mb-2">News & Updates</p>
                                <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                    View All News & Events →
                                </h4>
                            </Link>
                            <Link href="/support" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <p className="text-sm text-primary-500 mb-2">Support</p>
                                <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                    Our Support Services for Carers →
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
