import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [emailCopied, setEmailCopied] = useState(false);
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    // Quick links
    const quickLinks = [
        { name: 'Home', href: "/home", icon: '🏠' },
        { name: 'About', href: "/About", icon: '🐱' },
        { name: 'Projects', href: "/Project", icon: '💻' },
        { name: 'Skills', href: "/Skill", icon: '🎨' },
        { name: 'Contact', href: "/Contact", icon: '💖' }
    ];

    // Services
    const services = [
        { name: 'Web Development', icon: '🌐' },
        { name: 'UI/UX Design', icon: '🎨' },
        { name: 'Mobile Apps', icon: '📱' },
        { name: 'Cute Animations', icon: '✨' }
    ];

    // Social media links
    const socialLinks = [
        { name: 'GitHub', icon: '🐙', url: 'https://github.com/Mony20001', color: 'hover:bg-gray-800' },
        { name: 'LinkedIn', icon: '🔗', url: 'https://linkedin.com/in/your-profile', color: 'hover:bg-blue-700' },
        { name: 'Telegram', icon: '💬', url: 'https://t.me/Ramony19', color: 'hover:bg-blue-400' },
        { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/mouny9788?igsh=MXBqbnU0OWRmeDZqNg==', color: 'hover:bg-pink-600' },
        { name: 'Facebook', icon: '👤', url: 'https://www.facebook.com/share/1EQTP51F4E/', color: 'hover:bg-blue-600' },
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (newsletterEmail) {
            setSubscribed(true);
            setNewsletterEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('ra.mony.1224@rupp.edu.kh');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-pink-100 to-pink-200">
            {/* Hello Kitty Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-6xl animate-float">🐱</div>
                <div className="absolute top-40 right-20 text-5xl animate-float-delay">🎀</div>
                <div className="absolute bottom-20 left-1/4 text-7xl animate-float">🐱</div>
                <div className="absolute top-1/2 right-10 text-6xl animate-float-delay">🌸</div>
                <div className="absolute bottom-10 right-1/3 text-5xl animate-float">🎀</div>
                <div className="absolute top-20 left-1/3 text-4xl animate-float-delay">💖</div>
                <div className="absolute bottom-40 right-20 text-6xl animate-float">🐱</div>
                <div className="absolute top-1/3 left-5 text-5xl animate-float-delay">🌸</div>
                <div className="absolute bottom-1/4 right-1/4 text-4xl animate-float">💕</div>
                <div className="absolute top-2/3 left-2/3 text-5xl animate-float-delay">🎀</div>
                <div className="absolute top-20 right-1/4 text-6xl animate-float">🐱</div>
                <div className="absolute bottom-1/2 left-10 text-4xl animate-float-delay">⭐</div>
            </div>

            {/* Kitty Paw Prints */}
            <div className="absolute inset-0 opacity-5">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-3xl animate-paw"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    >
                        🐾
                    </div>
                ))}
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        
                        {/* Brand Column */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                                <div className="text-5xl animate-bounce">🐱</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-pink-700">Ra Mony</h3>
                                    <p className="text-sm text-pink-500">Portfolio</p>
                                </div>
                            </div>
                            <p className="text-pink-600 text-sm mb-4 leading-relaxed">
                                Spreading joy and cuteness through code. Creating beautiful digital experiences with love and care. 🎀
                            </p>
                            <div className="flex justify-center md:justify-start gap-2">
                                <div className="text-2xl">💖</div>
                                <div className="text-2xl">✨</div>
                                <div className="text-2xl">🌸</div>
                                <div className="text-2xl">🎀</div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="text-center md:text-left">
                            <h4 className="text-lg font-bold text-pink-700 mb-4 flex items-center justify-center md:justify-start gap-2">
                                <span>🔗</span> Quick Links <span>🎀</span>
                            </h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            to={link.href}
                                            className="text-pink-600 hover:text-pink-700 transition-colors flex items-center justify-center md:justify-start gap-2 group"
                                        >
                                            <span className="text-lg group-hover:scale-110 transition-transform">{link.icon}</span>
                                            <span>{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="text-center md:text-left">
                            <h4 className="text-lg font-bold text-pink-700 mb-4 flex items-center justify-center md:justify-start gap-2">
                                <span>✨</span> Services <span>💖</span>
                            </h4>
                            <ul className="space-y-2">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <div className="text-pink-600 flex items-center justify-center md:justify-start gap-2">
                                            <span className="text-lg">{service.icon}</span>
                                            <span>{service.name}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="text-center md:text-left">
                            <h4 className="text-lg font-bold text-pink-700 mb-4 flex items-center justify-center md:justify-start gap-2">
                                <span>📧</span> Stay Updated <span>🌸</span>
                            </h4>
                            <p className="text-pink-600 text-sm mb-3">
                                Get cute updates and news! 💕
                            </p>
                            <form onSubmit={handleSubscribe} className="space-y-2">
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="email"
                                        value={newsletterEmail}
                                        onChange={(e) => setNewsletterEmail(e.target.value)}
                                        placeholder="Your email address"
                                        className="flex-1 px-3 py-2 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-400 bg-white/80 text-pink-700 placeholder-pink-300"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all"
                                    >
                                        Subscribe 🎀
                                    </button>
                                </div>
                            </form>
                            {subscribed && (
                                <p className="text-green-600 text-sm mt-2 animate-bounce">
                                    🎉 Thanks for subscribing! 💖
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t-2 border-pink-200 my-8"></div>

                    {/* Contact Info and Social Links */}
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
                        {/* Contact Info */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2 bg-white/50 rounded-full px-4 py-2">
                                <span className="text-xl">🐱</span>
                                <a href="mailto:ra.mony.1224@rupp.edu.kh" className="text-pink-600 hover:text-pink-700">
                                    ra.mony.1224@rupp.edu.kh
                                </a>
                                <button 
                                    onClick={copyEmail}
                                    className="ml-2 text-pink-500 hover:text-pink-700 text-sm"
                                >
                                    {emailCopied ? '✅' : '📋'}
                                </button>
                            </div>
                            <div className="flex items-center gap-2 bg-white/50 rounded-full px-4 py-2">
                                <span className="text-xl">📱</span>
                                <a href="tel:+855978867031" className="text-pink-600 hover:text-pink-700">
                                    +855 97 88 67 031
                                </a>
                            </div>
                            <div className="flex items-center gap-2 bg-white/50 rounded-full px-4 py-2">
                                <span className="text-xl">📍</span>
                                <span className="text-pink-600">Phnom Penh, Cambodia</span>
                            </div>
                        </div>

                        {/* Scroll to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="bg-white/80 hover:bg-pink-100 text-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-md"
                            aria-label="Scroll to top"
                        >
                            <span className="text-2xl">⬆️</span>
                        </button>
                    </div>

                    {/* Social Media Links */}
                    <div className="mb-8">
                        <h4 className="text-center text-pink-700 font-semibold mb-4 flex items-center justify-center gap-2">
                            <span>🎀</span> Follow My Social Media <span>💖</span>
                        </h4>
                        <div className="flex flex-wrap justify-center gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        ${social.color} bg-white/80 text-pink-600
                                        w-12 h-12 rounded-full flex flex-col items-center justify-center
                                        transition-all duration-300 hover:scale-110 hover:text-white
                                        shadow-md group
                                    `}
                                >
                                    <div className="text-2xl group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </div>
                                    <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {social.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Cute Message */}
                    <div className="text-center mb-6">
                        <div className="inline-block bg-white/60 rounded-full px-6 py-2">
                            <p className="text-pink-600 text-sm">
                                🐱 Made with <span className="text-red-500 animate-pulse inline-block">❤️</span> and lots of <span className="text-pink-500">🎀</span> by Ra Mony
                            </p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-pink-500 text-sm">
                            © {currentYear} Ra Mony Portfolio. All rights reserved. 💕
                        </p>
                        <p className="text-pink-400 text-xs mt-1">
                            Spread kindness and happiness everywhere you go! 🌸
                        </p>
                    </div>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="h-1 bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200"></div>
            </div>
        </footer>
    );
};

export default Footer;