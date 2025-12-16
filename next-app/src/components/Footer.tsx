import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white border-t border-border/50 pt-16 pb-8">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4 flex flex-col items-center text-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/dig.png"
                                alt="Dignitate"
                                width={240}
                                height={192}
                                className="h-40 w-auto"
                            />
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Championing Cultural Carers through community, education, and innovation. Ensuring no carer faces dementia alone.
                        </p>
                        <div className="flex space-x-4 pt-2 justify-center">
                            <Link href="https://www.facebook.com/Dignitate.co.uk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent-teal transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="https://www.instagram.com/dignitate_charityuk/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent-teal transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="https://www.linkedin.com/in/malcolm-gill-723342a1/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent-teal transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/our-story" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
                            <li><Link href="/our-founder" className="text-muted-foreground hover:text-primary transition-colors">Our Founder</Link></li>
                            <li><Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">Support for Carers</Link></li>
                            <li><Link href="/professional-services" className="text-muted-foreground hover:text-primary transition-colors">Professional Services</Link></li>
                            <li><Link href="/impact" className="text-muted-foreground hover:text-primary transition-colors">Impact</Link></li>
                            <li><Link href="/news" className="text-muted-foreground hover:text-primary transition-colors">News & Events</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-3 text-muted-foreground">
                                <Mail className="h-5 w-5 text-accent-teal shrink-0" />
                                <a href="mailto:support@dignitate.co.uk" className="hover:text-primary transition-colors">support@dignitate.co.uk</a>
                            </li>
                            <li className="flex items-start space-x-3 text-muted-foreground">
                                <Phone className="h-5 w-5 text-accent-teal shrink-0" />
                                <a href="tel:07939609244" className="hover:text-primary transition-colors">07939 609 244</a>
                            </li>
                            <li className="flex items-start space-x-3 text-muted-foreground">
                                <MapPin className="h-5 w-5 text-accent-teal shrink-0" />
                                <span>London, United Kingdom</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Stay Updated</h3>
                        <p className="text-sm text-muted-foreground">Join our newsletter for the latest updates and resources.</p>
                        <form className="flex space-x-2">
                            <Input
                                type="email"
                                placeholder="Email address"
                                className="bg-background border-border/50 hover:border-accent-teal/50 focus:border-accent-teal"
                            />
                            <Button type="submit" className="bg-accent-teal hover:bg-accent-teal/90 text-white">
                                Join
                            </Button>
                        </form>
                    </div>
                </div>

                <Separator className="bg-border/50" />

                <div className="flex flex-col md:flex-row justify-center items-center py-8 text-sm text-muted-foreground space-y-4 md:space-y-0">
                    <div suppressHydrationWarning>
                        &copy; {new Date().getFullYear()} Dignitate. All rights reserved. Registered Charity No. 1198218
                    </div>
                </div>
            </div>
        </footer >
    );
}
