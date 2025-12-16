'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin, Heart, Users, Mic, Handshake } from 'lucide-react';
import Link from 'next/link';
import { FadeInOnScroll } from '@/components/Parallax';


export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-accent-teal/10 to-transparent">
                <div className="container px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">Contact Us</h1>
                    <p className="text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">We are here to help.</p>
                </div>
            </section>

            {/* Quick Contact Paths */}
            <section className="py-12 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        {/* <span className="text-accent-blue font-semibold uppercase tracking-wider text-sm">How Can We Help?</span> */}
                        <h2 className="text-3xl font-bold mt-2">Get in Touch</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Heart, title: "I'm a Carer", desc: "Looking for support or diverse community connection?", link: "/support", linkText: "Get Support", color: "text-accent-coral" },
                            { icon: Handshake, title: "Partner With Us", desc: "NHS or care provider seeking collaboration?", link: "/professional-services", linkText: "Partnerships", color: "text-accent-purple" },
                            { icon: Mic, title: "Book Malcolm", desc: "Invite Malcolm to speak at your next event.", link: "/professional-services?tab=speaking", linkText: "Enquiries", color: "text-accent-teal" },
                            { icon: Users, title: "Volunteer", desc: "Share your time and skills with us.", link: "#form", linkText: "Get Involved", color: "text-accent-blue" }
                        ].map((item, i) => (
                            <Card key={i} className="text-center hover:shadow-lg transition-all group">
                                <CardContent className="pt-6 flex flex-col items-center h-full">
                                    <div className={`p-4 rounded-full bg-muted mb-4 group-hover:scale-110 transition-transform ${item.color}`}>
                                        <item.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{item.desc}</p>
                                    <Link href={item.link} className={`text-sm font-bold hover:underline ${item.color}`}>
                                        {item.linkText} &rarr;
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20" id="form">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                                <p className="text-lg text-muted-foreground">Whether you're seeking support, want to partner with us, or have questions about our work, we'd love to hear from you.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <div className="font-bold">General Enquiries</div>
                                        <a href="mailto:support@dignitate.co.uk" className="text-primary hover:underline">support@dignitate.co.uk</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <div className="font-bold">Phone</div>
                                        <a href="tel:07939609244" className="text-muted-foreground hover:text-foreground">07939 609 244</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mic className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <div className="font-bold">Speaking Enquiries</div>
                                        <a href="mailto:speaking@dignitate.co.uk" className="text-primary hover:underline">speaking@dignitate.co.uk</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <div className="font-bold">Location</div>
                                        <p className="text-muted-foreground">London, United Kingdom</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-muted rounded-xl border border-border/50">
                                <h3 className="font-bold mb-2">Join Our Newsletter</h3>
                                <p className="text-sm text-muted-foreground mb-4">Stay updated on events, resources, and the Cultural Carers movement.</p>
                                <form className="flex gap-2">
                                    <Input placeholder="Your email address" type="email" required className="bg-background" />
                                    <Button type="submit">Subscribe</Button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Card className="shadow-lg border-muted">
                            <CardHeader>
                                <CardTitle>Send Us a Message</CardTitle>
                                <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="type">I am a... *</Label>
                                        <Select required>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Please select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="carer">Carer seeking support</SelectItem>
                                                <SelectItem value="partner">Organisation seeking partnership</SelectItem>
                                                <SelectItem value="speaking">Booking Malcolm</SelectItem>
                                                <SelectItem value="volunteer">Volunteer</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="fname">First Name *</Label>
                                            <Input id="fname" required placeholder="Jane" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lname">Last Name *</Label>
                                            <Input id="lname" required placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input id="email" type="email" required placeholder="jane@example.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone (Optional)</Label>
                                        <Input id="phone" type="tel" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea id="message" required placeholder="How can we help you?" className="min-h-[150px]" />
                                    </div>

                                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
