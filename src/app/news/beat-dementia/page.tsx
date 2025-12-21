'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, ExternalLink } from 'lucide-react'
import { FadeInOnScroll } from '@/components/Parallax'

export default function BeatDementiaArticle() {
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
                            November 21, 2023
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            6 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                        "I want to help beat dementia."
                    </h1>

                    <p className="text-xl text-muted-foreground">
                        Volunteer Malcolm Gill joined 'Our Future Health' so that research can change the way we look at the condition.
                    </p>
                </div>
            </section>

            {/* Featured Image */}
            <section className="py-8">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <FadeInOnScroll>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/malcolm-our-future-health.jpg"
                                alt="Malcolm Gill - Dignitate Founder and Our Future Health volunteer"
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

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                When Malcolm Gill became a full-time carer, he was horribly unprepared for the life he would lead. Now he's joining Our Future Health so that research can change how we view the condition.
                            </p>

                            <p className="text-gray-700 mb-6">
                                Have you ever really thought about dementia? About what it means to be diagnosed with it – or what it's like to care for someone suffering from the debilitating disease?
                            </p>

                            <p className="text-gray-700 mb-6">
                                If you haven't, you probably should. As figures from Alzheimer's UK show, there are 57 million people currently suffering from the disease worldwide – including 900,000 people in the UK. By 2040, it's believed that 1.6 million people in this country will have the disease.
                            </p>

                            <p className="text-gray-700 mb-6">
                                To put it even more starkly: dementia and Alzheimer's regularly ranks as a leading cause of death in the UK. In one way or another, dementia is likely to impact your life – yet many of us are not prepared to deal with it when it hits.
                            </p>

                            <p className="text-gray-700 mb-8">
                                That's precisely what happened to Malcolm Gill. The 46-year-old project coordinator from Croydon began to care for his mother, Elizabeth, nine years ago, after she was diagnosed with vascular dementia. It was an event that opened Malcolm's eyes to life with dementia – and led to him launching a new project to help others deal with the disease.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 border-t pt-8 border-gray-100">
                                Caring to the end
                            </h2>

                            <div className="bg-[#dffffe] border-l-4 border-[#5d9b97] p-6 rounded-r-xl mb-8">
                                <p className="text-gray-800 font-medium italic">
                                    "I experienced the carer's journey – what they go through mentally. I had no idea about dementia, so I had to educate myself."
                                </p>
                            </div>

                            <p className="text-gray-700 mb-6">
                                Today, Malcolm remembers a challenging time – emotionally, physically, and financially. The first few years of caring for his mother were difficult, as he struggled to continue work while helping his mother to deal with her disease. She would get lost or confused, often knocking on her neighbours' doors for help.
                            </p>

                            <p className="text-gray-700 mb-6">
                                Malcolm took time off work and moved into her house to become her full-time carer. However, her condition continued to deteriorate. Elizabeth became incontinent and trips outside would make her feel anxious, which in turn led to her suffering depression.
                            </p>

                            <p className="text-gray-700 mb-8">
                                Eventually, Elizabeth was referred to a palliative care hospice. In the end, she never went – Malcolm continued to care for her at home until her final days. "Towards the end, we were at peace with the disease, as there was nothing else anyone could do," he says. Elizabeth died in 2022, aged 81, 12 years after her diagnosis.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 border-t pt-8 border-gray-100">
                                A new beginning
                            </h2>

                            <p className="text-gray-700 mb-6">
                                Elizabeth's illness changed Malcolm's life. Today, he works for the hospice that his mum was referred to, helping to provide care for people as they reach the end of their lives. And when he's not working at the hospice, Malcolm runs Dignitate, a platform he launched to help educate and support at-home carers.
                            </p>

                            <div className="bg-[#dffffe] border-l-4 border-[#5d9b97] p-6 rounded-r-xl mb-8">
                                <p className="text-gray-800 font-medium italic">
                                    "Dignitate is a community of carers, because self-isolation can be a huge problem. Once you come to us, we add you into a group where everyone shares their experiences and supports each other. It helps to take away the fear following the diagnosis."
                                </p>
                            </div>

                            <p className="text-gray-700 mb-6">
                                A focus of Dignitate is to help spread awareness of dementia within the South Asian community. As a British Asian, Malcolm explains that he was raised in a culture that perceives dementia as a mental condition rather than a neurodegenerative disease.
                            </p>

                            <p className="text-gray-700 mb-8">
                                "This means we're missing the early signs of dementia. We only recognise it when there's a physical problem, but by that point it's too late and any services that are open to us are useless. The South Asian community is simply not dealing well with dementia."
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 border-t pt-8 border-gray-100">
                                How dementia impacts South Asians
                            </h2>

                            <p className="text-gray-700 mb-6">
                                Recent research found that the South Asian community in the UK has a higher likelihood of developing dementia than the national average. This is thought to be due to South Asians' increased risk of developing other issues, such as diabetes and cardiac disease, which are risk factors for dementia.
                            </p>

                            <p className="text-gray-700 mb-6">
                                In addition, the report concluded that South Asian dementia sufferers are being failed by a system that's designed primarily for the white British population. It found that misdiagnosis was common, often due to patients presenting with symptoms at a young age or having pre-existing conditions such as depression.
                            </p>

                            <p className="text-gray-700 mb-8">
                                Communication was a barrier too, as well as the fact that cognitive testing tools used by medical teams relied on a degree of knowledge about British history, which many South Asian patients don't possess. This is combined with a lack of culturally appropriate care services.
                            </p>

                            <div className="bg-gradient-to-r from-[#2e8b8f] to-[#5d9b97] text-white p-8 rounded-xl my-10">
                                <h3 className="text-xl font-bold mb-4">Joining Our Future Health</h3>
                                <p className="opacity-90 mb-4">
                                    For Malcolm, Our Future Health offers an opportunity to drastically improve healthcare for all types of dementia sufferers – and consequently also help carers across the country. Our Future Health is committed to building a truly representative group of volunteers, which means new discoveries will benefit diverse groups of people.
                                </p>
                                <p className="opacity-90 italic">
                                    "The research is important, especially in terms of dementia. My hope is that it starts to look at a possible genetic link, which might mean we're able to pick it up earlier."
                                </p>
                            </div>

                            <div className="bg-[#dffffe] border-l-4 border-[#5d9b97] p-6 rounded-r-xl mb-8">
                                <p className="text-gray-800 font-medium italic">
                                    "Joining Our Future Health is like giving a gift. You're giving a gift to the generations below you, to help recognise certain conditions quicker. I'm telling everyone that I'm supporting Our Future Health – my friends, my family, the Dignitate community. By joining this programme, you're helping your daughter, your son, your grandchildren. It will create a better future for everyone."
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-10 text-center py-8 border-t border-gray-100">
                            <p className="text-gray-600 mb-4">Want to learn more about supporting dementia research?</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://ourfuturehealth.org.uk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#5d9b97] hover:bg-[#2e8b8f] text-white px-8 py-3 rounded-full font-semibold transition-colors"
                                >
                                    Visit Our Future Health
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 border-2 border-[#5d9b97] text-[#5d9b97] hover:bg-[#5d9b97] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
                                >
                                    Join Dignitate Community
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Related Articles */}
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">More from Dignitate</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link href="/news/carers-wellbeing-event" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <p className="text-sm text-[#5d9b97] mb-2">Event</p>
                                <h4 className="font-semibold text-gray-900 group-hover:text-[#2e8b8f] transition-colors">
                                    Carers Wellbeing Event to Kick Off UK Carers Week →
                                </h4>
                            </Link>
                            <Link href="/our-story" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <p className="text-sm text-[#5d9b97] mb-2">Our Story</p>
                                <h4 className="font-semibold text-gray-900 group-hover:text-[#2e8b8f] transition-colors">
                                    Learn More About Elizabeth's Story →
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
