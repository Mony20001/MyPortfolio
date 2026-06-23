import React, { useState, useEffect } from 'react';

const Certificate = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    // Certificate data with full certificate images
    const certificates = [
        {
            id: 1,
            title: 'Basic C++ & OOP',
            issuer: 'គ្រូអាយធីចិត្តល្អ',
            date: 'March 15 2025',
            icon: '🌐',
            color: 'from-pink-400 to-purple-400',
            description: 'Completed Basic of C++ with praties and project ',
            credential: '0009879ETEC',
            image: '',
            // Full certificate images (no crop, showing entire certificate)
            certificateImage: {
                portrait: '/image/c++.png',
                landscape: '/image/c++.png'
            },
            thumbnail: {
                portrait: '/image/c++.png',
                landscape: '/image/c++.png'
            },
            skills: ['Advance C++','OOP', 'Algorithm', 'MySQL Database'],
            level: 'Beginner'
        },
        {
            id: 2,
            title: 'Photoshop & UI/UX Design',
            issuer: 'គ្រូអាយធីចិត្តល្អ',
            date: 'December 15 2025',
            icon: '🎨',
            color: 'from-pink-400 to-rose-400',
            description: 'Adobe Photoshop and UX/UI With Project design',
            credential: '0006879ETEC',
            image: '',
            certificateImage: {
                portrait: '/image/adobe.jpg',
                landscape: '/image/adobe.jpg'
            },
            thumbnail: {
                portrait: '/image/adobe.jpg',
                landscape: '/image/adobe.jpg'
            },
            skills: ['Figma', 'Prototyping', 'User Research', 'Wireframing'],
            level: 'Beginner'
        },
        {
            id: 3,
            title: 'Java Language',
            issuer: 'គ្រូអាយធីចិត្តល្អ',
            date: 'March 15 2026',
            icon: '💻',
            color: 'from-yellow-400 to-orange-400',
            description: 'Complete Java with proect course ',
            credential: '2604114ETEC',
            image: '',
            certificateImage: {
                portrait: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=600&fit=contain',
                landscape: '/image/java.jpg'
            },
            thumbnail: {
                portrait: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop',
                landscape: '/image/java.jpg'
            },
            skills: ['ES6+', 'Async/Await', 'Design Patterns', 'OOP'],
            level: 'Beginner'
        },
        {
            id: 4,
            title: ' Web Frontend',
            issuer: 'គ្រូអាយធីចិត្តល្អ',
            date: 'December 15 2025',
            icon: '📱',
            color: 'from-green-400 to-emerald-400',
            description: 'Complete Frontend with pratices course and project',
            credential: '0008902ETEC',
            image: '',
            certificateImage: {
                portrait: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=contain',
                landscape: '/image/frontend.jpg'
            },
            thumbnail: {
                portrait: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
                landscape: '/image/frontend.jpg'
            },
            skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap','ReactJs'],
            level: 'Beginner'
        },
        {
            id: 5,
            title: 'Computer & Networking',
            issuer: 'គ្រូអាយធីចិត្តល្អ',
            date: 'February 15 2025',
            icon: '🐍',
            color: 'from-blue-400 to-cyan-400',
            description: 'complete basic computer and networking',
            credential: '0009702ETEC',
            image: '',
            certificateImage: {
                portrait: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=600&fit=contain',
                landscape: '/image/network.png'
            },
            thumbnail: {
                portrait: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=300&fit=crop',
                landscape: '/image/network.png'
            },
            skills: ['Computer', 'Networking'],
            level: 'Beginner'
        },
        {
            id: 6,
            title: 'Deploma(12)',
            issuer: 'Marketing Pro',
            date: 'December 8 2024',
            icon: '📊',
            color: 'from-red-400 to-pink-400',
            description: 'Gradute high school',
            credential: 'Room22 table542',
            image: '',
            certificateImage: {
                portrait: 'https://images.unsplash.com/photo-1432889821006-2d28494f4aec?w=400&h=600&fit=contain',
                landscape: '/image/deploma.jpg'
            },
            thumbnail: {
                portrait: 'https://images.unsplash.com/photo-1432889821006-2d28494f4aec?w=400&h=300&fit=crop',
                landscape: '/image/deploma.jpg'
            },
            skills: ['B', 'E', 'B', 'C','B','B','F'],
            level: 'Beginner'
        },
        {
            id: 7,
            title: 'Buddha School',
            issuer: 'Soramarit School',
            date: 'March 18 2022',
            icon: '📊',
            color: 'from-red-400 to-pink-400',
            description: 'Complete study in Dharma school',
            credential: 'CRED-2023-178',
            image: '',
            certificateImage: {
                portrait: 'https://images.unsplash.com/photo-1432889821006-2d28494f4aec?w=400&h=600&fit=contain',
                landscape: '/image/buddha.jpg'
            },
            thumbnail: {
                portrait: 'https://images.unsplash.com/photo-1432889821006-2d28494f4aec?w=400&h=300&fit=crop',
                landscape: '/image/buddha.jpg'
            },
            skills: [],
            level: 'Beginner'
        },
        {
            id: 8,
            title: 'សិក្ខាសាលា',
            issuer: 'RUPP',
            date: 'November 10 2024',
            icon: '📊',
            color: 'from-red-400 to-pink-400',
            description: 'Reinvent: Transform Your habits,Transform Your life',
            credential: 'CRED-2023-178',
            image: '',
            certificateImage: {
                portrait: 'https://images.unsplash.com/photo-1432889821006-2d28494f4aec?w=400&h=600&fit=contain',
                landscape: '/image/sikhasala.jpg'
            },
            thumbnail: {
                portrait: 'https://images.unsplash.com/photo-1432889821006-2d28494f4aec?w=400&h=300&fit=crop',
                landscape: '/image/sikhasala.jpg'
            },
            skills: [],
            level: 'Beginner'
        },
        {
            id: 9,
            title: 'សិក្ខាសាលា',
            issuer: 'Beltie ',
            date: 'August 6 2025',
            icon: '📊',
            color: 'from-red-400 to-pink-400',
            description: 'វេទិកាយុវជន-បញ្ញវន្តមុស្លីម២១ឆ្នាំ២០២៥',
            credential: 'CRED-2023-178',
            image: '',
            certificateImage: {
                portrait: 'https://images.unsplash.com/photo-1432889821006-2d28494f4aec?w=400&h=600&fit=contain',
                landscape: '/image/sikhasala1.jpg'
            },
            thumbnail: {
                portrait: 'https://images.unsplash.com/photo-1432889821006-2d28494f4aec?w=400&h=300&fit=crop',
                landscape: '/image/sikhasala1.jpg'
            },
            skills: [],
            level: 'Beginner'
        }
    ];

    // Stats
    const stats = [
        { label: 'Certificates', value: certificates.length, icon: '🏅' },
        { label: 'Skills Learned', value: '24+', icon: '📚' },
        { label: 'Hours Spent', value: '120+', icon: '⏰' },
        { label: 'Projects', value: '15+', icon: '🎯' }
    ];

    // Helper function to get image
    const getImage = (images, type) => {
        if (!images) return null;
        return images[type] || images.portrait || images.landscape || null;
    };

    // Add animation keyframes
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-15px) rotate(5deg); }
            }
            @keyframes float-delay {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-15px) rotate(-5deg); }
            }
            @keyframes fade-in {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
            }
            @keyframes scale-in {
                from { transform: scale(0.8) rotate(-5deg); opacity: 0; }
                to { transform: scale(1) rotate(0deg); opacity: 1; }
            }
            @keyframes gradient-shift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            @keyframes pulse-glow {
                0%, 100% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.3); }
                50% { box-shadow: 0 0 40px rgba(236, 72, 153, 0.6); }
            }
            @keyframes kitty-walk {
                0% { transform: translateX(0) rotate(0deg); }
                25% { transform: translateX(10px) rotate(5deg); }
                75% { transform: translateX(-10px) rotate(-5deg); }
                100% { transform: translateX(0) rotate(0deg); }
            }
            @keyframes heart-beat {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
            }
            .animate-float {
                animation: float 4s ease-in-out infinite;
            }
            .animate-float-delay {
                animation: float-delay 4s ease-in-out infinite;
                animation-delay: 2s;
            }
            .animate-fade-in {
                animation: fade-in 0.5s ease-out;
            }
            .animate-scale-in {
                animation: scale-in 0.5s ease-out;
            }
            .gradient-shift {
                background-size: 200% 200%;
                animation: gradient-shift 6s ease infinite;
            }
            .pulse-glow {
                animation: pulse-glow 2s ease-in-out infinite;
            }
            .kitty-walk {
                animation: kitty-walk 3s ease-in-out infinite;
            }
            .heart-beat {
                animation: heart-beat 1.5s ease-in-out infinite;
            }
            .glass-effect {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            .line-clamp-2 {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .card-hover {
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .card-hover:hover {
                transform: translateY(-10px) scale(1.02);
                box-shadow: 0 20px 60px rgba(236, 72, 153, 0.3);
            }
            .hello-kitty-bg {
                background-image: 
                    radial-gradient(circle at 10% 20%, rgba(255, 182, 193, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 90% 80%, rgba(255, 182, 193, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(255, 105, 180, 0.1) 0%, transparent 70%);
            }
            .clickable-area {
                cursor: pointer;
            }
            .full-certificate {
                object-fit: contain;
                width: 100%;
                height: 100%;
            }
            .certificate-modal-image {
                max-height: 70vh;
                width: auto;
                max-width: 100%;
                object-fit: contain;
            }
            .certificate-container {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 300px;
                background: #f5f5f5;
                border-radius: 12px;
                padding: 20px;
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    // Function to handle card click
    const handleCardClick = (cert) => {
        setSelectedCert(cert);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100 py-12 px-4 relative overflow-hidden hello-kitty-bg">
            {/* Hello Kitty Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 text-6xl animate-float kitty-walk">🎀</div>
                <div className="absolute top-20 right-20 text-5xl animate-float-delay">🌸</div>
                <div className="absolute bottom-20 left-20 text-7xl animate-float">🐱</div>
                <div className="absolute bottom-10 right-10 text-6xl animate-float-delay">💖</div>
                <div className="absolute top-1/2 left-5 text-4xl animate-float">✨</div>
                <div className="absolute top-1/3 right-5 text-4xl animate-float-delay">⭐</div>
                <div className="absolute top-40 left-1/4 text-3xl heart-beat">❤️</div>
                <div className="absolute bottom-40 right-1/4 text-3xl heart-beat" style={{ animationDelay: '0.5s' }}>💕</div>
                <div className="absolute top-60 right-1/3 text-2xl heart-beat" style={{ animationDelay: '1s' }}>💗</div>
                <div className="absolute top-1/4 left-1/3 text-4xl opacity-20">🐾</div>
                <div className="absolute bottom-1/3 right-1/4 text-4xl opacity-20">🐾</div>
                <div className="absolute top-1/2 left-2/3 text-4xl opacity-20">🐾</div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="relative inline-block">
                        <div className="text-7xl mb-4 animate-float kitty-walk">🐱</div>
                        <div className="absolute -top-6 -right-10 text-4xl animate-float-delay">🎀</div>
                        <div className="absolute -bottom-4 -left-10 text-4xl animate-float">💖</div>
                        <div className="absolute -top-8 -left-8 text-3xl animate-float">🌸</div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent gradient-shift">
                            My Certificates
                        </span>
                    </h1>
                    <p className="text-pink-700 text-lg mb-6 max-w-2xl mx-auto">
                        ✨ Each certificate is a precious achievement in my learning journey! 🎀
                    </p>
                    <div className="flex justify-center items-center gap-4">
                        <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-pink-400"></div>
                        <span className="text-2xl heart-beat">💕</span>
                        <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-pink-400"></div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center card-hover border-2 border-pink-200 hover:border-pink-400 transition-all"
                        >
                            <div className="text-4xl mb-3">{stat.icon}</div>
                            <div className="text-3xl font-bold text-pink-600">
                                {stat.value}
                            </div>
                            <div className="text-pink-500 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Certificate Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative clickable-area"
                            onMouseEnter={() => setHoveredCert(cert.id)}
                            onMouseLeave={() => setHoveredCert(null)}
                        >
                            <div
                                className={`
                                    bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden card-hover
                                    transition-all duration-500 border-2 border-pink-200 hover:border-pink-400
                                    clickable-area
                                `}
                                onClick={() => handleCardClick(cert)}
                            >
                                {/* Certificate Thumbnail */}
                                <div className={`
                                    h-56 bg-gradient-to-r ${cert.color} 
                                    flex items-center justify-center relative
                                    overflow-hidden
                                `}>
                                    <img 
                                        src={getImage(cert.thumbnail, 'landscape')} 
                                        alt={cert.title}
                                        className="hidden md:block w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                    />
                                    <img 
                                        src={getImage(cert.thumbnail, 'portrait')} 
                                        alt={cert.title}
                                        className="md:hidden w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-pink-800/30 to-transparent"></div>
                                    
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-8xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-2xl">
                                            {cert.image}
                                        </div>
                                    </div>

                                    <div className="absolute top-4 right-4">
                                        <span className={`
                                            px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider
                                            ${cert.level === 'Expert' ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white' :
                                              cert.level === 'Advanced' ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white' :
                                              'bg-gradient-to-r from-pink-300 to-pink-400 text-white'}
                                            shadow-lg
                                        `}>
                                            🎀 {cert.level}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-pink-600 font-semibold shadow-lg">
                                            🏛️ {cert.issuer}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-4 right-4">
                                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-pink-600 font-semibold shadow-lg">
                                            📅 {cert.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                                            {cert.title}
                                        </h3>
                                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                                            {cert.icon}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {cert.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {cert.skills.slice(0, 3).map((skill, idx) => (
                                            <span 
                                                key={idx}
                                                className="px-2 py-1 bg-pink-50 rounded-full text-xs text-pink-600 border border-pink-200"
                                            >
                                                💕 {skill}
                                            </span>
                                        ))}
                                        {cert.skills.length > 3 && (
                                            <span className="px-2 py-1 bg-pink-50 rounded-full text-xs text-pink-400 border border-pink-200">
                                                +{cert.skills.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-pink-100">
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <span>🔑</span>
                                            <span className="font-mono">{cert.credential}</span>
                                        </div>
                                        <button 
                                            className="text-pink-500 group-hover:text-pink-700 text-sm font-semibold transition-colors flex items-center gap-1"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleCardClick(cert);
                                            }}
                                        >
                                            View Full Certificate 
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="mt-16 flex justify-center gap-4 flex-wrap">
                    <span className="text-4xl animate-float kitty-walk">🐱</span>
                    <span className="text-4xl animate-float-delay">🎀</span>
                    <span className="text-4xl animate-float">🌸</span>
                    <span className="text-4xl animate-float-delay heart-beat">💖</span>
                    <span className="text-4xl animate-float">✨</span>
                    <span className="text-4xl animate-float-delay">⭐</span>
                    <span className="text-4xl animate-float">💕</span>
                </div>

                {/* Motivational Message */}
                <div className="mt-8 text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 inline-block border-2 border-pink-200 shadow-lg">
                        <p className="text-pink-600 text-sm font-medium">
                            🌟 Every certificate is a precious treasure! Keep learning and growing! 🎀
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal - Full Certificate View */}
            {selectedCert && (
                <div 
                    className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4 z-50 animate-fade-in"
                    onClick={() => setSelectedCert(null)}
                >
                    <div 
                        className="bg-white rounded-3xl max-w-5xl w-full p-6 shadow-2xl relative animate-scale-in max-h-[95vh] overflow-y-auto border-2 border-pink-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-4 right-4 w-12 h-12 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-all text-pink-600 hover:rotate-90 duration-300 z-10 shadow-lg"
                        >
                            ✕
                        </button>

                        {/* Modal Content */}
                        <div className="text-center">
                            {/* Full Certificate Image - Displayed Entirely */}
                            <div className="relative mb-6 rounded-2xl overflow-hidden bg-gray-50 border-2 border-pink-200 p-4">
                                <div className="certificate-container">
                                    {/* Landscape - Full Certificate */}
                                    <div className="hidden md:block w-full">
                                        <img 
                                            src={getImage(selectedCert.certificateImage, 'landscape')} 
                                            alt={selectedCert.title}
                                            className="certificate-modal-image"
                                            style={{
                                                maxHeight: '70vh',
                                                width: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                    
                                    {/* Portrait - Full Certificate */}
                                    <div className="md:hidden w-full">
                                        <img 
                                            src={getImage(selectedCert.certificateImage, 'portrait')} 
                                            alt={selectedCert.title}
                                            className="certificate-modal-image"
                                            style={{
                                                maxHeight: '70vh',
                                                width: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                </div>
                                
                                {/* Certificate Watermark */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full border-2 border-pink-200 shadow-lg">
                                        <span className="text-sm font-semibold text-pink-600">
                                            📜 {selectedCert.title} - Full Certificate
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                {selectedCert.title}
                            </h2>
                            
                            <div className="flex items-center justify-center gap-3 text-gray-600 mb-4 flex-wrap">
                                <span className="text-2xl">{selectedCert.icon}</span>
                                <span className="font-semibold text-pink-600">{selectedCert.issuer}</span>
                                <span className="text-gray-400">•</span>
                                <span>{selectedCert.date}</span>
                                <span className="text-gray-400">•</span>
                                <span className={`
                                    px-2 py-0.5 rounded-full text-xs font-semibold
                                    ${selectedCert.level === 'Expert' ? 'bg-pink-100 text-pink-600' :
                                      selectedCert.level === 'Advanced' ? 'bg-purple-100 text-purple-600' :
                                      'bg-pink-50 text-pink-500'}
                                `}>
                                    🎀 {selectedCert.level}
                                </span>
                            </div>
                            
                            <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
                                {selectedCert.description}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 justify-center mb-6">
                                {selectedCert.skills.map((skill, idx) => (
                                    <span 
                                        key={idx}
                                        className="px-3 py-1 bg-pink-50 rounded-full text-sm text-pink-600 border border-pink-200"
                                    >
                                        💕 {skill}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="bg-pink-50 rounded-xl p-4 mb-6 border border-pink-200 max-w-md mx-auto">
                                <div className="flex items-center justify-center gap-2 text-sm">
                                    <span className="text-gray-500">Credential ID:</span>
                                    <span className="font-mono text-pink-600 font-semibold">{selectedCert.credential}</span>
                                </div>
                            </div>
                            
                            <div className="flex gap-3 justify-center flex-wrap">
                                <button className="px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full hover:from-pink-500 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                                    <span>🎀</span> Share Achievement
                                </button>
                                <button 
                                    onClick={() => setSelectedCert(null)}
                                    className="px-6 py-3 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition-all border-2 border-pink-200"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificate;