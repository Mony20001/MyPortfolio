import React, { useState, useRef, useEffect } from 'react';

const Certificate = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [hoveredCert, setHoveredCert] = useState(null);
    const [certificates, setCertificates] = useState(() => {
        const saved = localStorage.getItem('myCertificates');
        if (saved) {
            return JSON.parse(saved);
        }
        return [
            {
                id: 1,
                title: 'Web Development Bootcamp',
                issuer: 'Code Academy',
                date: 'January 2024',
                icon: '🌐',
                color: 'from-blue-400 to-purple-400',
                description: 'Completed full-stack web development with React, Node.js, and MongoDB',
                credential: 'CRED-2024-001',
                image: '🏆',
                imageUrl: null,
                orientation: 'landscape'
            },
            {
                id: 2,
                title: 'UI/UX Design Masterclass',
                issuer: 'Design School',
                date: 'December 2023',
                icon: '🎨',
                color: 'from-pink-400 to-rose-400',
                description: 'Mastered user interface design, prototyping, and user experience principles',
                credential: 'CRED-2023-045',
                image: '✨',
                imageUrl: null,
                orientation: 'portrait'
            },
            {
                id: 3,
                title: 'JavaScript Advanced',
                issuer: 'Tech Institute',
                date: 'October 2023',
                icon: '💻',
                color: 'from-yellow-400 to-orange-400',
                description: 'Advanced JavaScript concepts: ES6+, Async/Await, and Design Patterns',
                credential: 'CRED-2023-089',
                image: '⭐',
                imageUrl: null,
                orientation: 'landscape'
            },
            {
                id: 4,
                title: 'Responsive Web Design',
                issuer: 'FreeCodeCamp',
                date: 'September 2023',
                icon: '📱',
                color: 'from-green-400 to-emerald-400',
                description: 'Created responsive websites using CSS Flexbox, Grid, and Media Queries',
                credential: 'CRED-2023-112',
                image: '🎯',
                imageUrl: null,
                orientation: 'landscape'
            },
            {
                id: 5,
                title: 'Python Programming',
                issuer: 'Coding Ninjas',
                date: 'August 2023',
                icon: '🐍',
                color: 'from-blue-500 to-cyan-400',
                description: 'Python fundamentals, data structures, and automation scripts',
                credential: 'CRED-2023-156',
                image: '🚀',
                imageUrl: null,
                orientation: 'portrait'
            },
            {
                id: 6,
                title: 'Digital Marketing',
                issuer: 'Marketing Pro',
                date: 'July 2023',
                icon: '📊',
                color: 'from-red-400 to-pink-400',
                description: 'SEO, Social Media Marketing, and Content Strategy',
                credential: 'CRED-2023-178',
                image: '💡',
                imageUrl: null,
                orientation: 'landscape'
            }
        ];
    });

    const [showUploadModal, setShowUploadModal] = useState(false);
    const [uploadData, setUploadData] = useState({
        title: '',
        issuer: '',
        date: '',
        description: '',
        credential: '',
        image: '📜',
        color: 'from-pink-400 to-purple-400',
        imageFile: null,
        imagePreview: null,
        orientation: 'landscape',
        imageWarning: ''
    });
    const [editingId, setEditingId] = useState(null);
    const fileInputRef = useRef(null);

    // 🔐 Admin authentication
    const [isAdmin, setIsAdmin] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        localStorage.setItem('myCertificates', JSON.stringify(certificates));
    }, [certificates]);

    useEffect(() => {
        const adminSession = localStorage.getItem('adminSession');
        if (adminSession === 'true') {
            setIsAdmin(true);
        }
    }, []);

    // Stats
    const stats = [
        { label: 'Certificates', value: certificates.length, icon: '🏅' },
        { label: 'Skills Learned', value: '24+', icon: '📚' },
        { label: 'Hours Spent', value: '120+', icon: '⏰' },
        { label: 'Projects', value: '15+', icon: '🎯' }
    ];

    // Color options
    const colorOptions = [
        'from-blue-400 to-purple-400',
        'from-pink-400 to-rose-400',
        'from-yellow-400 to-orange-400',
        'from-green-400 to-emerald-400',
        'from-blue-500 to-cyan-400',
        'from-red-400 to-pink-400',
        'from-indigo-400 to-purple-400',
        'from-teal-400 to-green-400'
    ];

    // Icon options
    const iconOptions = ['🌐', '🎨', '💻', '📱', '🐍', '📊', '🏆', '✨', '⭐', '🎯', '🚀', '💡', '📜', '🎓'];

    // 📐 RECOMMENDED IMAGE SIZES FOR CERTIFICATES
    const imageSizeGuide = {
        portrait: {
            width: 1080,
            height: 1350,
            aspectRatio: '4:5',
            description: 'Perfect for vertical certificates, diplomas, and awards',
            examples: ['Certificates', 'Diplomas', 'Awards', 'Achievement Badges'],
            displaySize: 'Portrait (1080×1350px)',
            cssClass: 'h-48'
        },
        landscape: {
            width: 1350,
            height: 1080,
            aspectRatio: '5:4',
            description: 'Ideal for horizontal certificates, completions, and recognitions',
            examples: ['Achievements', 'Badges', 'Completions', 'Course Certificates'],
            displaySize: 'Landscape (1350×1080px)',
            cssClass: 'h-32'
        }
    };

    // 🔐 Handle admin login
    const handleAdminLogin = (e) => {
        e.preventDefault();
        const ADMIN_PASSWORD = '1111'; // 👈 Change this!
        
        if (password === ADMIN_PASSWORD) {
            setIsAdmin(true);
            setShowPasswordModal(false);
            setPassword('');
            setPasswordError('');
            localStorage.setItem('adminSession', 'true');
            resetUploadForm();
            setShowUploadModal(true);
        } else {
            setPasswordError('❌ Wrong password! Please try again. 🥺');
            setPassword('');
        }
    };

    const handleAdminLogout = () => {
        if (window.confirm('Are you sure you want to logout? 🔒')) {
            setIsAdmin(false);
            localStorage.removeItem('adminSession');
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('Image size should be less than 5MB! 📸');
                return;
            }

            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            if (!validTypes.includes(file.type)) {
                alert('Please upload JPEG, PNG, GIF, or WEBP format! 🖼️');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const img = new Image();
                img.onload = () => {
                    const width = img.width;
                    const height = img.height;
                    let orientation = 'landscape';
                    let warning = '';

                    if (height > width) {
                        orientation = 'portrait';
                        if (Math.abs(height - imageSizeGuide.portrait.height) > 200 || 
                            Math.abs(width - imageSizeGuide.portrait.width) > 200) {
                            warning = `💡 Recommended portrait size: ${imageSizeGuide.portrait.width}×${imageSizeGuide.portrait.height}px (4:5 ratio)`;
                        }
                    } else {
                        orientation = 'landscape';
                        if (Math.abs(width - imageSizeGuide.landscape.width) > 200 || 
                            Math.abs(height - imageSizeGuide.landscape.height) > 200) {
                            warning = `💡 Recommended landscape size: ${imageSizeGuide.landscape.width}×${imageSizeGuide.landscape.height}px (5:4 ratio)`;
                        }
                    }

                    setUploadData({
                        ...uploadData,
                        imageFile: file,
                        imagePreview: reader.result,
                        orientation: orientation,
                        imageWarning: warning
                    });
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddCertificate = () => {
        if (!uploadData.title || !uploadData.issuer) {
            alert('Please fill in at least Title and Issuer! 🎀');
            return;
        }

        const newCert = {
            id: editingId || Date.now(),
            title: uploadData.title,
            issuer: uploadData.issuer,
            date: uploadData.date || new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            icon: uploadData.image,
            color: uploadData.color,
            description: uploadData.description || 'Certificate of Achievement',
            credential: uploadData.credential || `CRED-${Date.now()}`,
            image: uploadData.imagePreview ? '📷' : uploadData.image,
            imageUrl: uploadData.imagePreview || null,
            orientation: uploadData.orientation || 'landscape'
        };

        if (editingId) {
            setCertificates(certificates.map(cert => 
                cert.id === editingId ? newCert : cert
            ));
        } else {
            setCertificates([...certificates, newCert]);
        }

        resetUploadForm();
        setShowUploadModal(false);
    };

    const handleEditCertificate = (cert) => {
        if (!isAdmin) {
            setShowPasswordModal(true);
            return;
        }
        setEditingId(cert.id);
        setUploadData({
            title: cert.title,
            issuer: cert.issuer,
            date: cert.date,
            description: cert.description,
            credential: cert.credential,
            image: cert.icon,
            color: cert.color,
            imageFile: null,
            imagePreview: cert.imageUrl,
            orientation: cert.orientation || 'landscape',
            imageWarning: ''
        });
        setShowUploadModal(true);
    };

    const handleDeleteCertificate = (id) => {
        if (!isAdmin) {
            setShowPasswordModal(true);
            return;
        }
        if (window.confirm('Are you sure you want to delete this certificate? 🥺')) {
            setCertificates(certificates.filter(cert => cert.id !== id));
        }
    };

    const resetUploadForm = () => {
        setUploadData({
            title: '',
            issuer: '',
            date: '',
            description: '',
            credential: '',
            image: '📜',
            color: 'from-pink-400 to-purple-400',
            imageFile: null,
            imagePreview: null,
            orientation: 'landscape',
            imageWarning: ''
        });
        setEditingId(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const openAdminPanel = () => {
        if (isAdmin) {
            resetUploadForm();
            setShowUploadModal(true);
        } else {
            setShowPasswordModal(true);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="relative inline-block">
                        <div className="text-6xl mb-4 animate-bounce">📜</div>
                        <div className="absolute -top-4 -right-8 text-3xl animate-float">🎀</div>
                        <div className="absolute -bottom-2 -left-8 text-3xl animate-float-delay">✨</div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        My Certificates
                    </h1>
                    <p className="text-gray-600 mt-2 text-lg">
                        Professional achievements and certifications 🎓
                    </p>
                    
                    {/* 📐 IMAGE SIZE GUIDE - VISIBLE TO EVERYONE */}
                    <div className="mt-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-pink-200 max-w-3xl mx-auto">
                        <h3 className="text-lg font-bold text-pink-700 mb-4 flex items-center justify-center gap-2">
                            <span>📐</span> Recommended Image Sizes for Certificates
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Portrait */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <span className="text-3xl">📱</span>
                                    <span className="font-bold text-purple-700">Portrait</span>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-600">1080 × 1350px</div>
                                    <div className="text-sm text-gray-600">4:5 Aspect Ratio</div>
                                    <div className="text-xs text-gray-500 mt-1">Perfect for: Certificates, Diplomas, Awards</div>
                                    <div className="mt-2 bg-purple-100 rounded-full px-3 py-1 text-xs text-purple-700 inline-block">
                                        ✅ Vertical Layout
                                    </div>
                                </div>
                            </div>

                            {/* Landscape */}
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <span className="text-3xl">🖥️</span>
                                    <span className="font-bold text-blue-700">Landscape</span>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">1350 × 1080px</div>
                                    <div className="text-sm text-gray-600">5:4 Aspect Ratio</div>
                                    <div className="text-xs text-gray-500 mt-1">Perfect for: Achievements, Badges, Completions</div>
                                    <div className="mt-2 bg-blue-100 rounded-full px-3 py-1 text-xs text-blue-700 inline-block">
                                        ✅ Horizontal Layout
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 text-center text-xs text-gray-500">
                            💡 Max file size: 5MB • Formats: JPEG, PNG, GIF, WEBP • Auto-detect orientation
                        </div>
                    </div>

                    {/* Admin Controls */}
                    <div className="mt-4 flex justify-center gap-3 flex-wrap">
                        {isAdmin ? (
                            <>
                                <button
                                    onClick={openAdminPanel}
                                    className="px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full hover:from-pink-500 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                                >
                                    <span>🔧</span> Manage Certificates
                                </button>
                                <button
                                    onClick={handleAdminLogout}
                                    className="px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                                >
                                    <span>🔒</span> Logout
                                </button>
                                <div className="text-green-600 text-sm flex items-center">
                                    ✅ Admin Mode Active
                                </div>
                            </>
                        ) : (
                            <button
                                onClick={openAdminPanel}
                                className="px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full hover:from-pink-500 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                            >
                                <span>🔒</span> Admin Access
                            </button>
                        )}
                    </div>

                    <div className="flex justify-center gap-2 mt-4">
                        <span className="text-2xl">🐱</span>
                        <span className="text-2xl">🌸</span>
                        <span className="text-2xl">💖</span>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-pink-100"
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-pink-600">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Certificate Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="relative group"
                            onMouseEnter={() => setHoveredCert(cert.id)}
                            onMouseLeave={() => setHoveredCert(null)}
                        >
                            <div
                                className={`
                                    bg-white rounded-2xl shadow-lg overflow-hidden 
                                    transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
                                    border-2 border-pink-100 hover:border-pink-300
                                    cursor-pointer
                                `}
                                onClick={() => setSelectedCert(cert)}
                            >
                                {/* Certificate Image with Orientation-based height */}
                                <div className={`
                                    bg-gradient-to-r ${cert.color} 
                                    flex items-center justify-center relative
                                    ${cert.orientation === 'portrait' ? 'h-48' : 'h-32'}
                                `}>
                                    {cert.imageUrl ? (
                                        <img 
                                            src={cert.imageUrl} 
                                            alt={cert.title}
                                            className={`
                                                h-full w-full object-cover
                                                ${cert.orientation === 'portrait' ? 'object-top' : 'object-center'}
                                            `}
                                        />
                                    ) : (
                                        <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                                            {cert.image}
                                        </div>
                                    )}
                                    
                                    {/* Orientation Badge */}
                                    <div className="absolute top-2 right-2 bg-white/30 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-white flex items-center gap-1">
                                        {cert.orientation === 'portrait' ? '📱' : '🖥️'}
                                        <span className="capitalize">{cert.orientation}</span>
                                    </div>
                                    
                                    {/* Size Info */}
                                    <div className="absolute bottom-2 left-2 bg-white/30 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
                                        {cert.orientation === 'portrait' ? '1080×1350px' : '1350×1080px'}
                                    </div>
                                    
                                    <div className="absolute bottom-2 right-2 bg-white/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white">
                                        {cert.date}
                                    </div>
                                    
                                    {isAdmin && (
                                        <div className="absolute top-2 left-2 flex gap-1">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleEditCertificate(cert);
                                                }}
                                                className="bg-white/80 hover:bg-white rounded-full w-7 h-7 flex items-center justify-center text-xs transition-all shadow-md"
                                                title="Edit Certificate"
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDeleteCertificate(cert.id);
                                                }}
                                                className="bg-white/80 hover:bg-white rounded-full w-7 h-7 flex items-center justify-center text-xs transition-all shadow-md"
                                                title="Delete Certificate"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Certificate Content */}
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {cert.title}
                                        </h3>
                                        <span className="text-2xl">{cert.icon}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                        {cert.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <span>🔑</span>
                                            <span>{cert.credential}</span>
                                        </div>
                                        <button className="text-pink-500 hover:text-pink-700 text-sm font-semibold transition-colors">
                                            View Details →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="mt-12 flex justify-center gap-3 flex-wrap">
                    <span className="text-3xl animate-float">🐱</span>
                    <span className="text-3xl animate-float-delay">🎀</span>
                    <span className="text-3xl animate-float">⭐</span>
                    <span className="text-3xl animate-float-delay">🌸</span>
                    <span className="text-3xl animate-float">💖</span>
                    <span className="text-3xl animate-float-delay">✨</span>
                </div>

                <div className="mt-8 text-center">
                    <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md">
                        <p className="text-pink-600 text-sm">
                            🎓 Every certificate is a step towards greatness. Keep learning! 💪
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal for Certificate Details */}
            {selectedCert && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
                    onClick={() => setSelectedCert(null)}
                >
                    <div 
                        className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative animate-scale-in max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-3 right-3 w-8 h-8 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors text-pink-600"
                        >
                            ✕
                        </button>

                        <div className="text-center">
                            <div className={`
                                bg-gradient-to-r ${selectedCert.color} 
                                rounded-2xl flex items-center justify-center mb-4 overflow-hidden
                                ${selectedCert.orientation === 'portrait' ? 'h-64' : 'h-48'}
                            `}>
                                {selectedCert.imageUrl ? (
                                    <img 
                                        src={selectedCert.imageUrl} 
                                        alt={selectedCert.title}
                                        className="h-full w-full object-contain"
                                    />
                                ) : (
                                    <div className="text-7xl">{selectedCert.image}</div>
                                )}
                            </div>
                            
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                {selectedCert.title}
                            </h2>
                            
                            <div className="flex items-center justify-center gap-2 text-gray-600 mb-3 flex-wrap">
                                <span>{selectedCert.icon}</span>
                                <span className="font-semibold">{selectedCert.issuer}</span>
                                <span className="text-gray-400">•</span>
                                <span>{selectedCert.date}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                                    {selectedCert.orientation === 'portrait' ? '📱 Portrait' : '🖥️ Landscape'}
                                </span>
                            </div>
                            
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                {selectedCert.description}
                            </p>
                            
                            <div className="bg-gray-50 rounded-xl p-3 mb-4">
                                <div className="flex items-center justify-center gap-2 text-sm">
                                    <span className="text-gray-500">Credential ID:</span>
                                    <span className="font-mono text-pink-600">{selectedCert.credential}</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-1">
                                    <span>📐 {selectedCert.orientation === 'portrait' ? '1080×1350px' : '1350×1080px'}</span>
                                    <span>•</span>
                                    <span>{selectedCert.orientation === 'portrait' ? '4:5 Ratio' : '5:4 Ratio'}</span>
                                </div>
                            </div>
                            
                            <div className="flex gap-2 justify-center flex-wrap">
                                <button className="px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full hover:from-pink-500 hover:to-pink-600 transition-all">
                                    🎉 Share Achievement
                                </button>
                                <button 
                                    onClick={() => setSelectedCert(null)}
                                    className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-all"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Password Modal */}
            {showPasswordModal && !isAdmin && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
                    onClick={() => {
                        setShowPasswordModal(false);
                        setPassword('');
                        setPasswordError('');
                    }}
                >
                    <div 
                        className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => {
                                setShowPasswordModal(false);
                                setPassword('');
                                setPasswordError('');
                            }}
                            className="absolute top-3 right-3 w-8 h-8 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors text-pink-600"
                        >
                            ✕
                        </button>

                        <div className="text-center">
                            <div className="text-5xl mb-4">🔒</div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Admin Access Required
                            </h2>
                            <p className="text-gray-600 mb-4 text-sm">
                                Please enter the admin password to manage certificates. 🎀
                            </p>
                            
                            <form onSubmit={handleAdminLogin} className="space-y-4">
                                <div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter admin password..."
                                        className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 transition-colors text-center"
                                        autoFocus
                                    />
                                    {passwordError && (
                                        <p className="text-red-500 text-sm mt-2 animate-bounce">{passwordError}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full hover:from-pink-500 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl font-semibold"
                                >
                                    🔓 Unlock Access
                                </button>
                            </form>

                            <p className="text-xs text-gray-400 mt-4">
                                💡 Only the owner has access to this feature
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Upload/Edit Modal */}
            {showUploadModal && isAdmin && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
                    onClick={() => {
                        if (window.confirm('Are you sure you want to close? Your changes will be lost. 🥺')) {
                            setShowUploadModal(false);
                            resetUploadForm();
                        }
                    }}
                >
                    <div 
                        className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative animate-scale-in max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => {
                                if (window.confirm('Are you sure you want to close? Your changes will be lost. 🥺')) {
                                    setShowUploadModal(false);
                                    resetUploadForm();
                                }
                            }}
                            className="absolute top-3 right-3 w-8 h-8 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors text-pink-600"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold text-center mb-6">
                            {editingId ? '✏️ Edit Certificate' : '📤 Upload New Certificate'}
                        </h2>

                        <div className="space-y-4">
                            {/* 📐 Detailed Image Size Guide */}
                            <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-xl p-4 border-2 border-pink-200">
                                <h3 className="font-semibold text-pink-700 mb-3 flex items-center gap-2">
                                    <span>📐</span> Image Size Guide
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white/80 rounded-lg p-3 text-center border-2 border-purple-200">
                                        <div className="text-3xl mb-1">📱</div>
                                        <div className="font-bold text-purple-700">Portrait</div>
                                        <div className="text-sm font-semibold text-purple-600">1080 × 1350px</div>
                                        <div className="text-xs text-gray-500">4:5 Ratio</div>
                                        <div className="text-xs text-green-600 mt-1">✅ Vertical</div>
                                    </div>
                                    <div className="bg-white/80 rounded-lg p-3 text-center border-2 border-blue-200">
                                        <div className="text-3xl mb-1">🖥️</div>
                                        <div className="font-bold text-blue-700">Landscape</div>
                                        <div className="text-sm font-semibold text-blue-600">1350 × 1080px</div>
                                        <div className="text-xs text-gray-500">5:4 Ratio</div>
                                        <div className="text-xs text-green-600 mt-1">✅ Horizontal</div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2 text-center">
                                    💡 Max file size: 5MB • Formats: JPEG, PNG, GIF, WEBP
                                </p>
                            </div>

                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Certificate Image 🖼️
                                </label>
                                <div 
                                    className="border-2 border-dashed border-pink-200 rounded-xl p-4 text-center hover:border-pink-400 transition-colors cursor-pointer"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleImageUpload}
                                        accept="image/*"
                                        className="hidden"
                                    />
                                    {uploadData.imagePreview ? (
                                        <div className="relative">
                                            <img 
                                                src={uploadData.imagePreview} 
                                                alt="Preview" 
                                                className={`max-h-48 mx-auto rounded-lg ${
                                                    uploadData.orientation === 'portrait' ? 'object-contain' : 'object-cover'
                                                }`}
                                            />
                                            <div className="mt-2 text-sm text-gray-600">
                                                {uploadData.orientation === 'portrait' ? '📱 Portrait' : '🖥️ Landscape'}
                                                <span className="ml-2 text-xs text-gray-400">
                                                    {uploadData.orientation === 'portrait' ? '1080×1350px' : '1350×1080px'}
                                                </span>
                                                {uploadData.imageWarning && (
                                                    <p className="text-yellow-600 text-xs mt-1">{uploadData.imageWarning}</p>
                                                )}
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setUploadData({
                                                        ...uploadData,
                                                        imagePreview: null,
                                                        imageFile: null,
                                                        imageWarning: ''
                                                    });
                                                    if (fileInputRef.current) {
                                                        fileInputRef.current.value = '';
                                                    }
                                                }}
                                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="py-8">
                                            <div className="text-4xl mb-2">📸</div>
                                            <p className="text-gray-500">Click to upload certificate image</p>
                                            <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 5MB</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Orientation Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Image Orientation 📐
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setUploadData({...uploadData, orientation: 'portrait'})}
                                        className={`p-3 rounded-xl border-2 transition-all ${
                                            uploadData.orientation === 'portrait'
                                                ? 'border-purple-400 bg-purple-50'
                                                : 'border-gray-200 hover:border-purple-200'
                                        }`}
                                    >
                                        <div className="text-2xl">📱</div>
                                        <div className="font-semibold">Portrait</div>
                                        <div className="text-xs text-gray-500">1080×1350px</div>
                                        <div className="text-xs text-purple-600">4:5 Ratio</div>
                                    </button>
                                    <button
                                        onClick={() => setUploadData({...uploadData, orientation: 'landscape'})}
                                        className={`p-3 rounded-xl border-2 transition-all ${
                                            uploadData.orientation === 'landscape'
                                                ? 'border-blue-400 bg-blue-50'
                                                : 'border-gray-200 hover:border-blue-200'
                                        }`}
                                    >
                                        <div className="text-2xl">🖥️</div>
                                        <div className="font-semibold">Landscape</div>
                                        <div className="text-xs text-gray-500">1350×1080px</div>
                                        <div className="text-xs text-blue-600">5:4 Ratio</div>
                                    </button>
                                </div>
                            </div>

                            {/* Title */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Certificate Title * 🏷️
                                </label>
                                <input
                                    type="text"
                                    value={uploadData.title}
                                    onChange={(e) => setUploadData({...uploadData, title: e.target.value})}
                                    className="w-full px-4 py-2 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 transition-colors"
                                    placeholder="e.g., Web Development Bootcamp"
                                />
                            </div>

                            {/* Issuer */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Issuing Organization * 🏢
                                </label>
                                <input
                                    type="text"
                                    value={uploadData.issuer}
                                    onChange={(e) => setUploadData({...uploadData, issuer: e.target.value})}
                                    className="w-full px-4 py-2 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 transition-colors"
                                    placeholder="e.g., Code Academy"
                                />
                            </div>

                            {/* Date */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Date Issued 📅
                                </label>
                                <input
                                    type="text"
                                    value={uploadData.date}
                                    onChange={(e) => setUploadData({...uploadData, date: e.target.value})}
                                    className="w-full px-4 py-2 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 transition-colors"
                                    placeholder="e.g., January 2024"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Description 📝
                                </label>
                                <textarea
                                    value={uploadData.description}
                                    onChange={(e) => setUploadData({...uploadData, description: e.target.value})}
                                    className="w-full px-4 py-2 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 transition-colors resize-none"
                                    rows="3"
                                    placeholder="What did you learn or achieve?"
                                />
                            </div>

                            {/* Credential ID */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Credential ID 🔑
                                </label>
                                <input
                                    type="text"
                                    value={uploadData.credential}
                                    onChange={(e) => setUploadData({...uploadData, credential: e.target.value})}
                                    className="w-full px-4 py-2 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 transition-colors"
                                    placeholder="e.g., CRED-2024-001"
                                />
                            </div>

                            {/* Icon */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Icon Emoji 🎨
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {iconOptions.map((icon) => (
                                        <button
                                            key={icon}
                                            onClick={() => setUploadData({...uploadData, image: icon})}
                                            className={`text-2xl p-2 rounded-lg transition-all ${
                                                uploadData.image === icon 
                                                    ? 'bg-pink-200 scale-110' 
                                                    : 'bg-gray-100 hover:bg-pink-100'
                                            }`}
                                        >
                                            {icon}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Color Theme 🎨
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {colorOptions.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setUploadData({...uploadData, color: color})}
                                            className={`w-10 h-10 rounded-full bg-gradient-to-r ${color} transition-all ${
                                                uploadData.color === color 
                                                    ? 'ring-4 ring-pink-400 scale-110' 
                                                    : 'hover:scale-105'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleAddCertificate}
                                className="w-full py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full hover:from-pink-500 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl font-semibold"
                            >
                                {editingId ? '💾 Update Certificate' : '📤 Upload Certificate'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificate;