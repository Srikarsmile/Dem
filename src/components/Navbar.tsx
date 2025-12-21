'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, Home, Info, BookOpen, User, Heart, GraduationCap, HelpCircle, Calendar, Mic, Smartphone, TrendingUp, Handshake, Newspaper, Mail, X } from 'lucide-react';

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    const mainLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Our Story', path: '/our-story' },
        { name: 'Our Founder', path: '/our-founder' },
    ];

    const supportLinks = [
        { name: 'Support for Carers', path: '/support', desc: 'Services, digital tools & FAQs' },
        { name: 'Professional Services', path: '/professional-services', desc: 'Training, speaking & partnerships' },
    ];

    const moreLinks = [
        { name: 'Impact', path: '/impact', desc: 'Stories & results' },
        { name: 'News & Events', path: '/news', desc: 'Latest updates & upcoming events' },
    ];

    // Mobile nav with icons
    const mobileAboutLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: Info },
        { name: 'Our Story', path: '/our-story', icon: BookOpen },
        { name: 'Our Founder', path: '/our-founder', icon: User },
    ];

    const mobileSupportLinks = [
        { name: 'Support for Carers', path: '/support', icon: Heart },
        { name: 'Professional Services', path: '/professional-services', icon: GraduationCap },
    ];

    const mobileMoreLinks = [
        { name: 'Impact', path: '/impact', icon: TrendingUp },
        { name: 'News & Events', path: '/news', icon: Newspaper },
        { name: 'Contact', path: '/contact', icon: Mail },
    ];

    // Get color for each page path - now using consistent brand teal
    const getPageColor = () => {
        return 'teal'; // All pages use brand teal for consistency
    };

    // Dynamic navbar color based on page - using consistent brand teal
    const getNavbarClasses = () => {
        // All pages use consistent brand teal styling
        return 'border-[#9bdbd9]/30 bg-gradient-to-r from-background via-background to-[#dffffe]/30';
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm ${getNavbarClasses()}`} suppressHydrationWarning>
            <div className="container flex h-16 items-center">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center shrink-0">
                    <Image
                        src="/images/dig.png"
                        alt="Dignitate"
                        width={120}
                        height={96}
                        className="h-12 w-auto"
                        priority
                    />
                </Link>

                {/* Center: Desktop Navigation */}
                <nav className="hidden lg:flex items-center justify-center gap-6 flex-1">
                    {mainLinks.map((link) => {
                        // Use consistent brand teal for all links
                        const hoverClass = 'hover:text-[#2e8b8f]';
                        const activeClass = 'text-[#2e8b8f]';
                        const underlineClass = 'bg-[#5d9b97]';

                        return (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-sm font-medium transition-all duration-300 ${hoverClass} relative group py-1 ${pathname === link.path ? activeClass : 'text-muted-foreground'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-[3px] ${underlineClass} rounded-full transition-all duration-300 group-hover:w-full ${pathname === link.path ? 'w-full' : ''
                                    }`} />
                            </Link>
                        );
                    })}

                    {/* Support Dropdown */}
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-[#2e8b8f] bg-transparent transition-colors duration-300">
                                    Support
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[300px] gap-2 p-4">
                                        {supportLinks.map((link) => {
                                            // Use consistent brand teal for all dropdown items
                                            const hoverBg = 'hover:bg-[#dffffe]';
                                            const hoverText = 'hover:text-[#2e8b8f]';

                                            return (
                                                <li key={link.path}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={link.path}
                                                            className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors ${hoverBg} ${hoverText} focus:bg-accent focus:text-accent-foreground`}
                                                        >
                                                            <div className="text-sm font-medium leading-none">{link.name}</div>
                                                            <p className="text-xs leading-snug text-muted-foreground mt-1">{link.desc}</p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* More Dropdown */}
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-[#2e8b8f] bg-transparent transition-colors duration-300">
                                    More
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[300px] gap-2 p-4">
                                        {moreLinks.map((link) => {
                                            // Use consistent brand teal for all dropdown items
                                            const hoverBg = 'hover:bg-[#dffffe]';
                                            const hoverText = 'hover:text-[#2e8b8f]';

                                            return (
                                                <li key={link.path}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={link.path}
                                                            className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors ${hoverBg} ${hoverText} focus:bg-accent focus:text-accent-foreground`}
                                                        >
                                                            <div className="text-sm font-medium leading-none">{link.name}</div>
                                                            <p className="text-xs leading-snug text-muted-foreground mt-1">{link.desc}</p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Link
                        href="/contact"
                        className={`text-sm font-medium transition-all duration-300 hover:text-[#2e8b8f] relative group py-1 ${pathname === '/contact' ? 'text-[#2e8b8f]' : 'text-muted-foreground'
                            }`}
                    >
                        Contact
                        <span className={`absolute -bottom-1 left-0 w-0 h-[3px] bg-[#5d9b97] rounded-full transition-all duration-300 group-hover:w-full ${pathname === '/contact' ? 'w-full' : ''
                            }`} />
                    </Link>
                </nav>

                {/* Right: Donate Button (Desktop) */}
                <div className="hidden lg:block shrink-0">
                    <a href="https://www.paypal.com/donate/?hosted_button_id=992DZB3FLENTE" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-accent-coral hover:bg-accent-coral/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                            Donate
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-3 ml-auto">
                    <a href="https://www.paypal.com/donate/?hosted_button_id=992DZB3FLENTE" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-accent-coral hover:bg-accent-coral/90 text-white rounded-full px-4 shadow-md">
                            <Heart className="h-4 w-4 mr-1.5 fill-current" />
                            Donate
                        </Button>
                    </a>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-foreground">
                                <Menu className="h-7 w-7" strokeWidth={2.5} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] p-0 overflow-y-auto">
                            {/* Sidebar Header */}
                            <div className="bg-primary text-primary-foreground p-6">
                                <div className="flex items-center justify-between">
                                    <Image
                                        src="/images/dig.png"
                                        alt="Dignitate"
                                        width={120}
                                        height={96}
                                        className="h-10 w-auto"
                                    />
                                </div>
                                <p className="text-sm opacity-80 mt-2">Championing Cultural Carers</p>
                            </div>

                            {/* Navigation Sections */}
                            <nav className="p-4 space-y-6">
                                {/* About Section */}
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">About Us</h3>
                                    <div className="space-y-1">
                                        {mobileAboutLinks.map((link) => (
                                            <Link
                                                key={link.path}
                                                href={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${pathname === link.path
                                                    ? 'bg-accent-teal/10 text-accent-teal font-medium'
                                                    : 'text-foreground hover:bg-muted'
                                                    }`}
                                            >
                                                <link.icon className="h-5 w-5" />
                                                <span>{link.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Support Section */}
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Support</h3>
                                    <div className="space-y-1">
                                        {mobileSupportLinks.map((link) => (
                                            <Link
                                                key={link.path}
                                                href={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${pathname === link.path
                                                    ? 'bg-accent-teal/10 text-accent-teal font-medium'
                                                    : 'text-foreground hover:bg-muted'
                                                    }`}
                                            >
                                                <link.icon className="h-5 w-5" />
                                                <span>{link.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* More Section */}
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Explore</h3>
                                    <div className="space-y-1">
                                        {mobileMoreLinks.map((link) => (
                                            <Link
                                                key={link.path}
                                                href={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${pathname === link.path
                                                    ? 'bg-accent-teal/10 text-accent-teal font-medium'
                                                    : 'text-foreground hover:bg-muted'
                                                    }`}
                                            >
                                                <link.icon className="h-5 w-5" />
                                                <span>{link.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </nav>

                            {/* Donate CTA */}
                            <div className="p-4 mt-auto border-t border-border">
                                <a href="https://www.paypal.com/donate/?hosted_button_id=992DZB3FLENTE" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-accent-coral hover:bg-accent-coral/90 text-white h-12 text-base font-semibold shadow-lg">
                                        <Heart className="h-5 w-5 mr-2 fill-current" />
                                        Donate Now
                                    </Button>
                                </a>
                                <p className="text-xs text-center text-muted-foreground mt-3">
                                    Registered Charity: 1196886
                                </p>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div >
    );
}
