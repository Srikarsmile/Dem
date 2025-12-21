'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Quote } from 'lucide-react';
import { FadeInOnScroll } from '@/components/Parallax';

export default function OurStory() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-accent-teal/10 to-transparent">
                <div className="container px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#2e8b8f]">Our Story. . .</h1>
                </div>
            </section>

            {/* Journey Timeline Container */}
            <div className="relative">
                {/* Central Line (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -ml-[1px] border-l-2 border-dashed border-[#9bdbd9] z-0" aria-hidden="true" />

                {/* Section 1: Intro & Early Life */}
                <section className="py-12 relative z-10">
                    <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                        {/* Timeline Marker (Desktop) */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-[#5d9b97] shadow-lg z-20">
                            <div className="w-2 h-2 rounded-full bg-[#5d9b97]" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <FadeInOnScroll className="order-2 md:order-1">
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed md:pr-12">
                                    <p>
                                        Dignitate was born out of my personal experiences caring for my mother, Elizabeth Gill after she was diagnosed with dementia. My father's stroke in August 2011 solidified my determination to found Dignitate.
                                    </p>
                                    <p>
                                        My mother, Elizabeth Gill, was born on 15th October 1940 in Rawalpindi, Pakistan. She was orphaned at an early age due to Partition and was raised by her uncle's family and her sister. Despite the challenges of a new country and a large family, she still managed to have a happy childhood.
                                    </p>
                                </div>
                            </FadeInOnScroll>
                            <FadeInOnScroll delay={200} className="order-1 md:order-2">
                                <div
                                    className="relative aspect-[3/4] md:w-3/4 mx-auto hover:scale-105 transition-transform duration-500 md:pl-6 cursor-pointer"
                                    onClick={() => setSelectedImage('/images/elizabeth-younger.jpg')}
                                >
                                    <div className="relative h-full w-full bg-white p-3 shadow-xl rounded-sm">
                                        <Image
                                            src="/images/elizabeth-younger.jpg"
                                            alt="Elizabeth Gill in younger years"
                                            fill
                                            className="object-cover rounded-sm"
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                        />
                                    </div>
                                </div>
                            </FadeInOnScroll>
                        </div>
                    </div>
                </section>

                {/* Section 2: Adulthood & Career */}
                <section className="py-12 relative z-10">
                    <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                        {/* Timeline Marker (Desktop) */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-[#5d9b97] shadow-lg z-20">
                            <div className="w-2 h-2 rounded-full bg-[#5d9b97]" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-dense">
                            {/* Image on Left for this section (Source shows text right, image left effectively in reading flow or alt) - Let's alternate */}
                            <FadeInOnScroll delay={200} className="order-1 md:col-start-1">
                                <div
                                    className="relative aspect-[4/5] md:w-3/4 mx-auto hover:scale-105 transition-transform duration-500 md:pr-6 cursor-pointer"
                                    onClick={() => setSelectedImage('/images/elizabeth-nursing.jpg')}
                                >
                                    <div className="relative h-full w-full bg-white p-3 shadow-xl rounded-sm">
                                        <Image
                                            src="/images/elizabeth-nursing.jpg"
                                            alt="Elizabeth Gill in nursing uniform"
                                            fill
                                            className="object-cover rounded-sm"
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                        />
                                    </div>
                                </div>
                            </FadeInOnScroll>
                            <FadeInOnScroll className="order-2 md:col-start-2">
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed md:pl-12">
                                    <p>
                                        As an adult, societal norms encouraged my mother towards marriage, but she chose to pursue her dreams. She excelled in her nursing training at Holy Family Hospital in Rawalpindi and joined the army, quickly becoming a staff nurse. Later, she accepted a position in Jordan despite family disapproval, relishing the country's more liberal environment.
                                    </p>
                                    <p>
                                        Inspired by her relationship with Princess Muna in Jordan, my mother moved to England in 1974 and worked at Sidcup Hospital. She married my father in 1975 and settled in Croydon, continuing her work as a staff nurse at Mayday University Hospital. I was born in 1976 and my brother arrived four years later.
                                    </p>
                                </div>
                            </FadeInOnScroll>
                        </div>
                    </div>
                </section>

                {/* Section 3: Challenges & Founding */}
                <section className="py-12 relative z-10">
                    <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                        {/* Timeline Marker (Desktop) */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-[#5d9b97] shadow-lg z-20">
                            <div className="w-2 h-2 rounded-full bg-[#5d9b97]" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <FadeInOnScroll className="order-2 md:order-1">
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed md:pr-12">
                                    <p>
                                        However, in 1984, my mother suffered a work accident that caused her to break both clavicles. A brain haemorrhage the following year led to her early retirement due to loss of sensation in her left side. Yet, she found fulfilment in helping elderly individuals in nursing homes.
                                    </p>
                                    <p>
                                        In 2011, both my parents fell ill – my father had a stroke, and my mother developed Vascular Dementia, which led me to admit them both to Mayday Hospital.
                                    </p>
                                    <p>
                                        By 2013, my mother's Vascular Dementia diagnosis was confirmed. I sought to understand more about this condition, educating myself with the help of Dementia Friends.
                                    </p>
                                </div>
                            </FadeInOnScroll>
                            <FadeInOnScroll delay={200} className="order-1 md:order-2">
                                <div
                                    className="relative aspect-[3/4] md:w-3/4 mx-auto hover:scale-105 transition-transform duration-500 md:pl-6 cursor-pointer"
                                    onClick={() => setSelectedImage('/images/elizabeth-recent.jpg')}
                                >
                                    <div className="relative h-full w-full bg-white p-3 shadow-xl rounded-sm">
                                        <Image
                                            src="/images/elizabeth-recent.jpg"
                                            alt="Elizabeth Gill in recent years"
                                            fill
                                            className="object-cover object-top rounded-sm"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </FadeInOnScroll>
                        </div>
                    </div>
                </section>
            </div>

            {/* Testimonials Section */}
            <section className="py-16 bg-gradient-to-b from-transparent via-accent-teal/5 to-transparent">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                    <FadeInOnScroll>
                        <h2 className="text-3xl font-bold text-center mb-12 text-[#2e8b8f]">What People Say</h2>
                    </FadeInOnScroll>

                    <div className="space-y-12">
                        {/* Testimonial 1 */}
                        <FadeInOnScroll>
                            <div className="relative bg-background/80 backdrop-blur-sm border border-border/40 rounded-xl p-8 text-center shadow-sm">
                                <Quote className="h-8 w-8 text-accent-teal mx-auto mb-6 opacity-50" />
                                <p className="text-lg md:text-xl italic text-foreground/80 leading-relaxed mb-6 font-light">
                                    "It was an absolute pleasure having Malcolm Gill with us during our Women's Conference. Malcolm demonstrated his passion to shared with us, invaluable information on Dementia and Alzheimer. This is an areas which is of great concern to so many of us as it's raising at a tremendous rate particularly amongst the aging population. The feedback received from all those present has been extremely encouraging and we are sure to keep intouch with Malcolm in order to support and for further gathering to share with his knowledge in this area. Once again our thanks and gratitude goes our to Malcolm for giving up a portion of his day to join us and share with us on this subject."
                                </p>
                                <div className="flex items-center justify-center gap-2 text-accent-teal">
                                    <span className="font-semibold">Anonymous</span>
                                </div>
                            </div>
                        </FadeInOnScroll>

                        {/* Testimonial 2 */}
                        <FadeInOnScroll delay={200}>
                            <div className="relative bg-background/80 backdrop-blur-sm border border-border/40 rounded-xl p-8 text-center shadow-sm">
                                <Quote className="h-8 w-8 text-accent-teal mx-auto mb-6 opacity-50" />
                                <p className="text-lg md:text-xl italic text-foreground/80 leading-relaxed mb-6 font-light">
                                    "The presenter Malcolm, was very informative. I particularly appreciated the fact that he came from the place of having experienced caring for an individual with the disorder. This with his medical knowledge of the subject presented a clear picture of what could be expected in someone afflicted with this illness. The information that Malcolm shared was relevant and presented sensitively. The pace was spot on, allowing us to absorb the information, comment and ask questions throughout. I find that I could identify with a lot of the points raised, having experienced caring for a family member with the condition. I'd like to thank Malcolm for shedding more light on the subject."
                                </p>
                                <div className="flex items-center justify-center gap-2 text-accent-teal">
                                    <span className="font-semibold">Anonymous</span>
                                </div>
                            </div>
                        </FadeInOnScroll>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-12">
                <div className="container px-4 md:px-6">
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
                </div>
            </section>

            {/* Image Lightbox */}
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none" showCloseButton={false}>
                    <VisuallyHidden.Root>
                        <DialogTitle>Image Gallery</DialogTitle>
                    </VisuallyHidden.Root>
                    {selectedImage && (
                        <div className="relative w-full aspect-[4/3]">
                            <Image
                                src={selectedImage}
                                alt="Elizabeth Gill"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 80vw"
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
