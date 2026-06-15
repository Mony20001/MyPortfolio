import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Telegram Bot Configuration
    const BOT_TOKEN = '8801431363:AAFvj2n0DiEtwd5wYY8Jxv50tNdvPzW5RT4';
    const CHAT_ID = '1954501737'; // Your Telegram ID

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Send message to Telegram
    const sendToTelegram = async (formData) => {
        const message = `
🎀 *New Contact Form Submission* 🎀
━━━━━━━━━━━━━━━━━━━━
🐱 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📌 *Subject:* ${formData.subject || 'Not specified'}
💬 *Message:* 
${formData.message}
━━━━━━━━━━━━━━━━━━━━
💖 *Sent from Portfolio Website*
🐱 *Hello Kitty Style*
        `;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        
        const params = new URLSearchParams();
        params.append('chat_id', CHAT_ID);
        params.append('text', message);
        params.append('parse_mode', 'Markdown');
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params
            });
            
            const data = await response.json();
            
            if (!data.ok) {
                throw new Error(data.description || 'Failed to send message');
            }
            
            return true;
        } catch (error) {
            console.error('Telegram API Error:', error);
            throw error;
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');
        
        try {
            // Send to Telegram
            await sendToTelegram(formData);
            
            // Success
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (error) {
            console.error('Submission Error:', error);
            setErrorMessage('Failed to send message. Please try again later. 🥺');
            setTimeout(() => setErrorMessage(''), 5000);
        } finally {
            setIsLoading(false);
        }
    };

    // Contact info
    const contactInfo = [
        { icon: '🐱', title: 'Telegram', value: '@Ramony19', link: 'https://t.me/Ramony19' },
        { icon: '📧', title: 'Email', value: 'ra.mony.1224@rupp.edu.kh', link: 'mailto:hello@hellokitty.dev' },
        { icon: '📱', title: 'Phone', value: '+855 97 88 67 031', link: 'tel:+85512345678' },
        { icon: '🎀', title: 'Location', value: 'Phnom Penh, Cambodia', link: null },
        { icon: '💖', title: 'Working Hours', value: 'Mon - Fri, 8:00am - 5:00pm', link: null },
        { icon: '🤖', title: 'Bot', value: '@MonyPortfolio_bot', link: 'https://t.me/MonyPortfolio_bot' }
    ];

    // Social media links
    const socialLinks = [
        { name: 'Telegram', icon: '🤖', url: 'https://t.me/Ramony19', color: 'hover:bg-blue-500' },
        { name: 'GitHub', icon: '🐙', url: 'https://github.com/Mony20001', color: 'hover:bg-gray-800' },
        { name: 'LinkedIn', icon: '🔗', url: 'https://linkedin.com', color: 'hover:bg-blue-700' },
        { name: 'Twitter', icon: '🐦', url: 'https://twitter.com', color: 'hover:bg-blue-400' },
        { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/mouny9788?igsh=MXBqbnU0OWRmeDZqNg==', color: 'hover:bg-pink-600' },
        { name: 'Facebook', icon: '👤', url: 'https://www.facebook.com/share/1EQTP51F4E/', color: 'hover:bg-blue-600' }
    ];

    return (
        <section id="contact" className="py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Hello Kitty Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-white">
                {/* Floating Hello Kitty Icons */}
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
                    {[...Array(40)].map((_, i) => (
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

                {/* Cute Hearts */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(25)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-2xl animate-float"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`
                            }}
                        >
                            💖
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header with Hello Kitty */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="text-6xl mb-4 animate-bounce inline-block">
                        🐱
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-pink-700 mb-4 relative inline-block">
                        Let's Connect! 🎀
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"></span>
                    </h2>
                    <p className="text-pink-600 mt-6 max-w-2xl mx-auto text-lg">
                        I'd love to hear from you! Send me a message and I'll reply on Telegram as soon as possible 💕
                    </p>
                    <div className="mt-3 inline-block bg-pink-100 rounded-full px-4 py-2 text-sm text-pink-700">
                        🤖 Message will be sent to Telegram Bot: @MonyPortfolio_bot
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Telegram Bot Info Card */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200 shadow-lg text-center">
                            <div className="text-8xl mb-3 animate-bounce">🤖</div>
                            <h3 className="text-2xl font-bold text-pink-700">My Telegram Bot</h3>
                            <p className="text-pink-600 mt-2">@MonyPortfolio_bot</p>
                            <a 
                                href="https://t.me/MonyPortfolio_bot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm hover:from-pink-500 hover:to-pink-600 transition-all"
                            >
                                Start Chat on Telegram 💬
                            </a>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-2 border-pink-200 hover:shadow-lg transition-all hover:transform hover:-translate-y-1"
                                >
                                    <div className="text-3xl mb-2">{info.icon}</div>
                                    <h4 className="font-semibold text-pink-700 mb-1">{info.title}</h4>
                                    {info.link ? (
                                        <a 
                                            href={info.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-pink-600 text-sm hover:text-pink-700 break-words"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-pink-600 text-sm">{info.value}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200">
                            <h3 className="text-xl font-bold text-pink-700 mb-4 text-center flex items-center justify-center gap-2">
                                <span>🎀</span> Follow Me <span>💖</span>
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            ${social.color} bg-pink-50 text-pink-600 
                                            rounded-lg p-3 text-center transition-all 
                                            hover:text-white border border-pink-200
                                            hover:border-transparent
                                        `}
                                    >
                                        <div className="text-2xl mb-1">{social.icon}</div>
                                        <div className="text-xs font-medium">{social.name}</div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Cute Quote */}
                        <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-xl p-4 text-center border border-pink-200">
                            <p className="text-pink-700 italic">
                                "បើគ្មានក្តីស្រមៃកុំចង់ក្លាយជាអាយធី! 💕" <br />
                                <span className="text-sm">- Ra Mony</span>
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-pink-200 shadow-xl">
                        <div className="text-center mb-6">
                            <div className="text-4xl mb-2">📝</div>
                            <h3 className="text-2xl font-bold text-pink-700">Send Me a Message 🎀</h3>
                            <p className="text-pink-600 text-sm mt-1">Message will be sent to my Telegram instantly!</p>
                        </div>

                        {isSubmitted && (
                            <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative animate-bounce">
                                <span className="block text-center">
                                    🎉 Thank you! Your message has been sent to my Telegram! 💖
                                </span>
                                <span className="block text-center text-xs mt-1">
                                    I'll reply to you on Telegram within 24 hours!
                                </span>
                            </div>
                        )}

                        {errorMessage && (
                            <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative">
                                <span className="block text-center">
                                    {errorMessage}
                                </span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-pink-700 font-medium mb-2 flex items-center gap-2">
                                    <span>🐱</span> Your Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors bg-white/80"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-pink-700 font-medium mb-2 flex items-center gap-2">
                                    <span>📧</span> Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors bg-white/80"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-pink-700 font-medium mb-2 flex items-center gap-2">
                                    <span>📌</span> Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors bg-white/80"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label className="block text-pink-700 font-medium mb-2 flex items-center gap-2">
                                    <span>💬</span> Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-colors bg-white/80 resize-none"
                                    placeholder="Write your message here... 💕"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`
                                    w-full py-3 rounded-xl font-semibold text-white
                                    transition-all duration-300 transform hover:scale-105
                                    flex items-center justify-center gap-2
                                    ${isLoading 
                                        ? 'bg-pink-400 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 shadow-lg'
                                    }
                                `}
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending to Telegram...
                                    </>
                                ) : (
                                    <>
                                        <span>🤖</span>
                                        Send to Telegram
                                        <span>🎀</span>
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Contact Form Footer */}
                        <div className="mt-6 text-center text-sm text-pink-500 border-t border-pink-200 pt-4">
                            <p>💖 Message will be sent directly to my Telegram! 💖</p>
                            <p className="text-xs mt-1">Check your Telegram for my reply @Ramony19 🎀</p>
                        </div>
                    </div>
                </div>

                {/* Telegram Bot Info Section */}
                <div className="mt-12 bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl p-6 border-2 border-pink-200">
                    <div className="text-center">
                        <div className="text-4xl mb-2">🤖</div>
                        <h3 className="text-xl font-bold text-pink-700 mb-2">Contact me on Telegram</h3>
                        <p className="text-pink-600 mb-4">Scan the QR code or click the button to chat with me directly!</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="bg-white rounded-xl p-3 inline-block">
                                <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-pink-100 rounded-lg flex items-center justify-center">
                                    <div className="text-6xl">🤖</div>
                                </div>
                            </div>
                            <div className="text-left">
                                <p className="text-pink-700 font-semibold">@Ramony19</p>
                                <p className="text-pink-600 text-sm">Bot: @MonyPortfolio_bot</p>
                                <a 
                                    href="https://t.me/Ramony19"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-2 px-4 py-2 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600 transition-all"
                                >
                                    Start Chat 💬
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;