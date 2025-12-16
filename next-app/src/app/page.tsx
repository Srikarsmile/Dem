'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Heart, Users, BookOpen, Mic, Smartphone, Globe, Sparkles, Calendar, Utensils, MapPin, Clock } from 'lucide-react';
import { AuroraBackground } from '@/components/AuroraBackground';
import { FadeInOnScroll } from '@/components/Parallax';
import { ScrollingWallpaper } from '@/components/ScrollingWallpaper';
import { CountUp } from '@/components/CountUp';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Modern Crossfade Wallpaper */}
      <ScrollingWallpaper
        imagePaths={['/images/wallpaper-2.png', '/images/wallpaper-1.png']}
        speed={0.2}
        overlay={true}
        overlayOpacity={0.6}
        objectPosition="center 40%"
        className="pt-20 pb-32 md:pt-32 md:pb-48"
        imageAlt="Dignitate community and Elizabeth"
        transitionDuration={6}
        kenBurnsEffect={true}
      >
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-accent-teal text-white text-sm font-semibold animate-in fade-in slide-in-from-bottom-2 duration-700 shadow-xl">
              🌍 The Cultural Carers Movement
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-1000 drop-shadow-2xl">
              <span className="block text-white">Championing Cultural Carers.</span>
              <span className="block text-accent-teal drop-shadow-lg">Transforming Dementia Care.</span>
            </h1>

            <p className="max-w-[800px] text-lg md:text-xl text-white/95 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 drop-shadow-lg">
              We combine lived experience, cultural intelligence, and digital innovation to support carers and influence systems — in the UK and globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Link href="/support">
                <Button size="lg" className="h-12 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-accent-coral hover:bg-accent-coral/90 text-white border-none">
                  <Heart className="mr-2 h-5 w-5" />
                  I'm a Carer – Get Support
                </Button>
              </Link>
              <Link href="/professional-services?tab=partnerships">
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  For Partners & Commissioners
                </Button>
              </Link>
              <Link href="/professional-services?tab=speaking">
                <Button size="lg" className="h-12 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-accent-purple hover:bg-accent-purple/90 text-white border-none">
                  <Mic className="mr-2 h-5 w-5" />
                  Book Malcolm to Speak
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </ScrollingWallpaper>

      {/* Four Pillars Section */}
      <ScrollingWallpaper
        imagePath="/images/wallpaper-1.png"
        speed={0.3}
        overlay={true}
        overlayOpacity={0.85}
        className="py-12 md:py-20"
        imageAlt="Dignitate community background"
      >
        <div className="container px-4 md:px-6">
          <FadeInOnScroll>
            <div className="text-center mb-12">
              <span className="text-accent-purple font-semibold">What We Do</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Four Pillars of Impact</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Dignitate is more than a local charity — it's a movement with depth and scope.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Support for Cultural Carers",
                desc: "1-to-1 calls, peer support, and culturally sensitive resources for carers from diverse communities.",
                link: "/support",
                color: "text-accent-coral",
                bgColor: "bg-accent-coral/10"
              },
              {
                icon: BookOpen,
                title: "Education & Training",
                desc: "Culturally grounded dementia education for carers, families, and healthcare professionals.",
                link: "/professional-services?tab=training",
                color: "text-accent-purple",
                bgColor: "bg-accent-purple/10"
              },
              {
                icon: Smartphone,
                title: "Digital Innovation",
                desc: "Building the Cultural Carers App — AI-powered support designed with lived experience at its heart.",
                link: "/support?tab=digital",
                color: "text-accent-teal",
                bgColor: "bg-accent-teal/10"
              },
              {
                icon: Mic,
                title: "Advocacy & Speaking",
                desc: "Book Malcolm Gill for conferences, training, and media — driving policy change and shifting narratives.",
                link: "/professional-services?tab=speaking",
                color: "text-accent-blue",
                bgColor: "bg-accent-blue/10"
              }
            ].map((pillar, i) => (
              <FadeInOnScroll key={i} delay={i * 100}>
                <Link href={pillar.link}>
                  <Card className="h-full group hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-border/50">
                    <CardHeader>
                      <div className={`p-3 rounded-xl w-fit ${pillar.bgColor} ${pillar.color} group-hover:scale-110 transition-transform`}>
                        <pillar.icon className="h-8 w-8" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <CardTitle className="text-xl">{pillar.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{pillar.desc}</p>
                      <div className={`flex items-center gap-1 text-sm font-medium ${pillar.color} group-hover:underline`}>
                        Learn more <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </ScrollingWallpaper>

      {/* Our Story Section - Clean layout with light background */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll>
              <div className="relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/malcolm-new-portrait.jpg"
                  alt="Malcolm Gill"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={150}>
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-accent-teal/10 text-accent-teal text-sm font-medium">
                  Lived Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">From Carer to Changemaker</h2>
                <p className="text-lg text-muted-foreground">
                  After 11 years caring for his mother Elizabeth, Malcolm Gill founded Dignitate to ensure no carer from a cultural community faces their journey alone. His lived experience is at the heart of everything we do.
                </p>
                <div className="flex gap-4 pt-4">
                  <Link href="/our-story">
                    <Button variant="outline">Read Our Story</Button>
                  </Link>
                  <Link href="/our-founder">
                    <Button className="bg-accent-teal hover:bg-accent-teal/90 text-white">Meet Malcolm</Button>
                  </Link>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Impact Stats - Clean solid background */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: 500, suffix: "+", label: "Carers Supported" },
              { num: 50, suffix: "+", label: "Training Sessions" },
              { num: 1000, suffix: "+", label: "Professionals Trained" },
              { num: 30, suffix: "+", label: "Speaking Engagements" }
            ].map((stat, i) => (
              <FadeInOnScroll key={i} delay={i * 100}>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-accent-teal">
                    <CountUp end={stat.num} suffix={stat.suffix} duration={2500} />
                  </div>
                  <div className="text-sm font-medium opacity-80 uppercase tracking-wider">{stat.label}</div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* NHS Partnership - Clean layout */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInOnScroll>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-4">
                    Strategic Partnership
                  </div>
                  <h2 className="text-3xl font-bold mb-4">NHS Our Future Health Partner</h2>
                  <blockquote className="italic text-muted-foreground border-l-4 border-accent-teal pl-4 mb-6">
                    "We are proud to Partner with the NHS Our Future Health — the UK's largest health research programme — to help improve healthcare for dementia patients from diverse communities."
                  </blockquote>
                  <p className="font-bold text-right text-primary">— Malcolm Gill, Founder</p>
                  <div className="mt-6">
                    <Link href="https://ourfuturehealth.org.uk/news/my-mothers-dementia-changed-the-course-of-my-life-i-want-to-help-beat-this-terrible-disease/" target="_blank">
                      <Button variant="outline">Read the NHS Feature →</Button>
                    </Link>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/nhs-partnership.png"
                    alt="NHS Our Future Health Partnership"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Featured Event - Every Dish Has A Story */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container px-4 md:px-6">
          <FadeInOnScroll>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-coral text-white rounded-full text-sm font-bold uppercase tracking-wider">
                🌟 Featured Event
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-6 text-gray-900">Every Dish Has A Story</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Part of the <strong>Breaking Barriers Project</strong> — weaving a tapestry of connection through culture, stories, and shared experience.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <FadeInOnScroll delay={100}>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/every-dish-has-a-story.jpg"
                  alt="Every Dish Has A Story - Breaking Barriers Project"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <Card className="border-2 border-amber-200 bg-white/80 backdrop-blur h-full">
                <CardContent className="p-8 space-y-6 flex flex-col justify-center">
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6 border-l-4 border-amber-500">
                    <p className="text-lg text-gray-800 italic leading-relaxed">
                      "At Dignitate, we know cultural carers often give so much of themselves, with little time to pause. That's why we created The Carer's Table — because carers deserve to be cared for too."
                    </p>
                    <p className="mt-4 font-bold text-amber-700">— Malcolm Gill, Founder</p>
                  </div>
                  <Link href="/news" className="block">
                    <Button className="w-full bg-accent-coral hover:bg-accent-coral/90 text-white">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Mission/Vision - With Malcolm & Mother Background */}
      <section
        className="relative py-16 md:py-24 overflow-hidden bg-cover bg-no-repeat bg-[center_25%] md:bg-center"
        style={{ backgroundImage: 'url(/images/malcolm-with-mother.jpg)' }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/60 to-primary/40" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-12 text-center text-white">
            <FadeInOnScroll>
              <div>
                <h2 className="text-3xl font-bold mb-6 drop-shadow-lg">Our Mission</h2>
                <p className="text-xl opacity-95 leading-relaxed drop-shadow-md">
                  Dignitate advances cultural equity in caregiving through global advocacy, digital innovation, and culturally competent training. We empower carers and influence systems by combining lived experience, community insight, and strategic partnerships — driving policy change, shifting narratives, and building an international Cultural Carers movement.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={150}>
              <div>
                <h2 className="text-3xl font-bold mb-6 drop-shadow-lg">Our Vision</h2>
                <p className="text-xl opacity-95 leading-relaxed drop-shadow-md">
                  A world where cultural carers are recognised as key partners in health systems, and where culturally competent care is embedded globally — influencing policy, shaping practice, and transforming the dementia journey for families everywhere.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Link href="https://www.paypal.com/donate/?hosted_button_id=992DZB3FLENTE">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
                    <Heart className="mr-2 h-5 w-5" />
                    Support the Movement
                  </Button>
                </Link>
                <Link href="/support">
                  <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white/20 rounded-full px-8">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Join the App Waitlist
                  </Button>
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <FadeInOnScroll>
            <h2 className="text-3xl font-bold mb-8 text-center">Join the Movement</h2>
          </FadeInOnScroll>
          <FadeInOnScroll delay={150}>
            <div className="max-w-3xl mx-auto bg-card p-8 rounded-2xl shadow-sm border border-border/50">
              <h4 className="font-bold text-xl mb-6">Stay informed about what's going on at Dignitate:</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 text-accent-purple shrink-0" />
                  <span><strong>Education</strong> – Stay informed with valuable knowledge that will empower both you and your families.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-6 w-6 text-accent-blue shrink-0" />
                  <span><strong>Signposting</strong> – Get connected with trustworthy sources of help and advice.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-accent-teal shrink-0" />
                  <span><strong>Who we are working with</strong> – Discover collaborations and the wonderful organisations that share our journey.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-accent-coral shrink-0" />
                  <span><strong>Upcoming Dignitate activities and events</strong> – Be the first to know about events that make a real difference and how you can be part of them.</span>
                </li>
                <li className="pl-9 text-muted-foreground italic">and more!</li>
              </ul>
              <div className="mt-8 flex justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent-teal hover:bg-accent-teal/90 text-white">Get Involved</Button>
                </Link>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

    </div >
  );
}
