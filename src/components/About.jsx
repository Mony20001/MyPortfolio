import React, { useState, useEffect } from 'react';

const About = () => {
    const [animateItems, setAnimateItems] = useState(false);
    const [activeTab, setActiveTab] = useState('bio');

    useEffect(() => {
        setAnimateItems(true);
    }, []);

    // About data
    const aboutData = {
        name: 'RA MONY',
        role: ' Full-Stack Developer',
        location: 'Phnom Penh, Cambodia',
        experience: '0+ Years',
        projects: '0+',
        clients: '0+',
        happiness: '0% 💕'
    };

    // Fun facts
    const funFacts = [
        { icon: '🐱', fact: 'មេត្តា ករុណា មុទិតា ឧបេក្ខា' },
        { icon: '🎀', fact: 'ភាពស្ងប់ស្ងាត់គឺជាថាមពលដ៏អស្ចារ្យ' },
        { icon: '🍎', fact: "សេចក្តីស្មោះត្រង់ គឺជាគុណតម្លៃរបស់មនុស្ស" },
        { icon: '🎨', fact: 'សាងបាបបានបាប​ សាងបុណ្យបានបុណ្យ' },
        { icon: '💖', fact: 'សេចក្តីខឹងក្រោធគឺជាការដុតកម្លោចខ្លួនឯង' },
        { icon: '🌟', fact: 'ថ្ងៃនេះអ្នកប្រឹង ថ្ងៃស្អែកអ្នកបាន' }
    ];

    // Skills list
    const skillsList = [
        { name: 'Frontend Development', level: 0, icon: '🎨' },
        { name: 'UI/UX Design', level: 0, icon: '💖' },
        { name: 'Backend Development', level: 0, icon: '🎀' },
        { name: 'Problem Solving', level: 0, icon: '🐱' },
        { name: 'Team Collaboration', level: 0, icon: '💕' },
        { name: 'Creativity', level: 0, icon: '✨' }
    ];

    // Timeline data
    const timeline = [
        {
            year: '2026',
            title: '🧑‍💻 Studing In Second Years',
            description: 'RUPP',
            icon: '👨‍🎓'
        },
        {
            year: '2026',
            title: '🪛 Internship Frontend',
            description: 'គ្រូអាយធីចិត្តល្អ',
            icon: '💼'
        },
        {
            year: '2026',
            title: '🎀 Java Programming',
            description: 'គ្រូអាយធីចិត្តល្អ',
            icon: '🌐'
        },
        {
            year: '2025-2026',
            title: '🐱 UX/UI & Frontend',
            description: 'គ្រូអាយធីចិត្តល្អ',
            icon: '💻'
        },
        {
            year: '2025-2026',
            title: '🎨 Basic Computer & Basic Programming',
            description: 'គ្រូអាយធីចិត្តល្អ',
            icon: '✨'
        },
        {
            year: '2025',
            title: '🌸 Graduation',
            description: 'Graduated with High School',
            icon: '🎓'
        }
    ];

    // Hobbies
    const hobbies = [
        { name: 'Camping', icon: '⛺', color: 'pink' },
        { name: 'Reading', icon: '📚', color: 'purple' },
        { name: 'Music', icon: '🎵', color: 'blue' },
        { name: 'Sport', icon: '🏋️', color: 'green' },
        { name: 'Coding', icon: '🧑‍💻', color: 'orange' },
        { name: 'Dharma', icon: '☸️', color: 'red' }
    ];

    return (
        <section id="about" className="py-16 md:py-24 px-4 relative overflow-hidden">
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
                </div>

                {/* Kitty Paw Prints */}
                <div className="absolute inset-0 opacity-5">
                    {[...Array(50)].map((_, i) => (
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
                    {[...Array(30)].map((_, i) => (
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
                        About Me 🎀
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"></span>
                    </h2>
                    <p className="text-pink-600 mt-6 max-w-2xl mx-auto text-lg">
                        Get to know about me behind the code! 💕
                    </p>
                </div>

                {/* Profile Card and Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Left Column - Profile Card */}
                    <div className="space-y-6">
                        {/* Main Profile Card */}
                        <div className={`
                            bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200 shadow-xl
                            ${animateItems ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                        `} style={{ transitionDelay: '100ms' }}>
                            <div className="text-center">
                                <div className="relative inline-block">
                                    <div className="text-8xl mb-3 animate-bounce">🐱</div>
                                    <div className="absolute -top-2 -right-2 text-3xl animate-pulse">🎀</div>
                                </div>
                                <h3 className="text-2xl font-bold text-pink-700 mb-2">{aboutData.name}</h3>
                                <p className="text-pink-500 mb-4">{aboutData.role}</p>
                                <div className="flex justify-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">📍 {aboutData.location}</span>
                                </div>
                                <p className="text-pink-600 mb-6 leading-relaxed">
                                    សួស្តីអ្នកទាំងអស់គ្នា! ខ្ញុំគឺ មុនី! ខ្ញុំគឺជានិស្សិតអាយធីម្នាក់ដែលកំពុងសិក្សានៅ
                                    សាកលវិទ្យាល័យភូមិន្ទ។​ Royal University of Phnom Penh 💖
                                </p>
                                
                                {/* Stats */}
                                <div className="grid grid-cols-4 gap-3 pt-4 border-t border-pink-200">
                                    <div>
                                        <div className="text-2xl font-bold text-pink-700">{aboutData.experience}</div>
                                        <div className="text-xs text-pink-500">Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-pink-700">{aboutData.projects}</div>
                                        <div className="text-xs text-pink-500">Projects</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-pink-700">{aboutData.clients}</div>
                                        <div className="text-xs text-pink-500">Clients</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-pink-700">{aboutData.happiness}</div>
                                        <div className="text-xs text-pink-500">Happiness</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fun Facts */}
                        <div className={`
                            bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200
                            ${animateItems ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                        `} style={{ transitionDelay: '200ms' }}>
                            <h3 className="text-xl font-bold text-pink-700 mb-4 text-center flex items-center justify-center gap-2">
                                <span>✨</span> អត្ថបទអប់រំចិត្ត <span>💖</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {funFacts.map((fact, index) => (
                                    <div key={index} className="flex items-center gap-2 p-2 bg-pink-50 rounded-lg">
                                        <div className="text-2xl">{fact.icon}</div>
                                        <p className="text-pink-700 text-sm">{fact.fact}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hobbies */}
                        <div className={`
                            bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200
                            ${animateItems ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                        `} style={{ transitionDelay: '300ms' }}>
                            <h3 className="text-xl font-bold text-pink-700 mb-4 text-center flex items-center justify-center gap-2">
                                <span>🎨</span> My Hobbies <span>🌸</span>
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {hobbies.map((hobby, index) => (
                                    <div key={index} className="text-center group cursor-pointer">
                                        <div className={`
                                            w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-50 
                                            rounded-full flex items-center justify-center text-3xl
                                            border-2 border-pink-200 group-hover:scale-110 transition-transform
                                        `}>
                                            {hobby.icon}
                                        </div>
                                        <p className="text-xs text-pink-600 mt-1">{hobby.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Tabs Content */}
                    <div className="space-y-6">
                        {/* Tab Buttons */}
                        <div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-xl p-2 border-2 border-pink-200">
                            <button
                                onClick={() => setActiveTab('bio')}
                                className={`
                                    flex-1 py-2 rounded-lg font-medium transition-all
                                    ${activeTab === 'bio' 
                                        ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md' 
                                        : 'text-pink-600 hover:bg-pink-50'
                                    }
                                `}
                            >
                                🐱 Bio
                            </button>
                            <button
                                onClick={() => setActiveTab('skills')}
                                className={`
                                    flex-1 py-2 rounded-lg font-medium transition-all
                                    ${activeTab === 'skills' 
                                        ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md' 
                                        : 'text-pink-600 hover:bg-pink-50'
                                    }
                                `}
                            >
                                🎀 Skills
                            </button>
                            <button
                                onClick={() => setActiveTab('journey')}
                                className={`
                                    flex-1 py-2 rounded-lg font-medium transition-all
                                    ${activeTab === 'journey' 
                                        ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md' 
                                        : 'text-pink-600 hover:bg-pink-50'
                                    }
                                `}
                            >
                                💖 Journey
                            </button>
                        </div>

                        {/* Bio Tab */}
                        {activeTab === 'bio' && (
                            <div className={`
                                bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200
                                ${animateItems ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                            `} style={{ transitionDelay: '150ms' }}>
                                <h3 className="text-xl font-bold text-pink-700 mb-4 flex items-center gap-2">
                                    <span>📖</span> Personal Information 🎀
                                </h3>
                                <div className="space-y-3 text-pink-700">
                                    <p>
                                        ឈ្មោះ​​ ៖ រ៉ា មុនី​ <br /> ភេទ ៖ ប្រុស <br />ថ្ងៃខែឆ្នាំកំណើត​ ៖ ៣០ តុលា ២០០៤ <br />
                                        ជនជាតិ​ ៖ ខ្មែរ​<br />
                                        កំពស់​ ៖​ ១.៦៧​<br />
                                        ទីកន្លែងកំណើត ភូមិអណ្តូងជ័យ​ ឃុំក្រែក ស្រុកពញាក្រែក ខេត្តកំពង់ចាម <br />
                                        សព្វថ្ងៃស្នាក់នៅ វត្តនាគវ័ន​ ភូមិ២ សង្កាត់បឹងកក់២ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ
                                    </p>
                                    <p>
                                        🌟 ធ្លាប់បួសស្នាក់អាស្រ័យក្នុងព្រះពុទ្ធសាសនាដើម្បីសិក្សារៀនសូត្រធម៌អាថ៏ស្វែងរកចំណេះវិជ្ជាបាន
                                            រយៈពេល១០វស្សា(៩ឆ្នាំ)។
                                    </p>
                                </div>
                                <div className="mt-4 p-3 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg">
                                    <p className="text-pink-700 italic text-center">
                                        "ប្រទេសជាតិមួយខ្លាំងគឺអាស្រ័យលើប្រព័ន្ធអប់រំនិងធនធានមនុស្ស" 💕
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Skills Tab */}
                        {activeTab === 'skills' && (
                            <div className={`
                                bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200
                                ${animateItems ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                            `} style={{ transitionDelay: '150ms' }}>
                                <h3 className="text-xl font-bold text-pink-700 mb-4 flex items-center gap-2">
                                    <span>✨</span> My Skills & Expertise 🎨
                                </h3>
                                <div className="space-y-4">
                                    {skillsList.map((skill, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-2xl">{skill.icon}</span>
                                                    <span className="text-pink-700 font-medium">{skill.name}</span>
                                                </div>
                                                <span className="text-pink-600 text-sm">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-pink-100 rounded-full h-2 overflow-hidden">
                                                <div 
                                                    className="h-full rounded-full transition-all duration-1000"
                                                    style={{
                                                        width: animateItems ? `${skill.level}%` : '0%',
                                                        background: 'linear-gradient(90deg, #F472B6, #EC4899)'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 p-3 bg-pink-50 rounded-lg text-center">
                                    <p className="text-pink-700 text-sm">
                                        🎀 Always learning and improving to bring more to the web!
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Journey Tab */}
                        {activeTab === 'journey' && (
                            <div className={`
                                bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-200
                                ${animateItems ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                            `} style={{ transitionDelay: '150ms' }}>
                                <h3 className="text-xl font-bold text-pink-700 mb-4 flex items-center gap-2">
                                    <span>🌟</span> My Journey 🐱
                                </h3>
                                <div className="space-y-4">
                                    {timeline.map((item, index) => (
                                        <div key={index} className="flex gap-3 relative">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center text-2xl border-2 border-pink-300">
                                                    {item.icon}
                                                </div>
                                                {index < timeline.length - 1 && (
                                                    <div className="absolute left-6 top-12 w-0.5 h-12 bg-pink-200"></div>
                                                )}
                                            </div>
                                            <div className="flex-1 pb-4">
                                                <div className="text-pink-500 text-sm font-semibold">{item.year}</div>
                                                <h4 className="text-pink-700 font-bold">{item.title}</h4>
                                                <p className="text-pink-600 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Cute Quote Card */}
                        <div className={`
                            bg-gradient-to-r from-pink-200 to-pink-100 rounded-xl p-4 text-center border border-pink-300
                            ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `} style={{ transitionDelay: '400ms' }}>
                            <div className="text-3xl mb-2">💝</div>
                            <p className="text-pink-800 font-medium">
                                "ការងារច្រើន​ ដេកមិនគ្រប់ រស់មិនយូរទេ!"
                            </p>
                            <p className="text-pink-600 text-sm mt-2">- Ra Mony</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`
                    text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-pink-200
                    ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `} style={{ transitionDelay: '500ms' }}>
                    <div className="text-5xl mb-3 animate-bounce inline-block">🐱</div>
                    <h3 className="text-2xl font-bold text-pink-700 mb-3">Want to work together?</h3>
                    <p className="text-pink-600 mb-4">
                        I'm always open to new opportunities and collaborations!
                    </p>
                    <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-semibold hover:from-pink-500 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
                    >
                        Let's Connect! 🎀
                    </button>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                
            `}</style>
        </section>
    );
};

export default About;