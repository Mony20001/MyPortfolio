import React, { useState, useEffect } from 'react';

const Project = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [animateItems, setAnimateItems] = useState(false);

    useEffect(() => {
        setAnimateItems(true);
    }, []);

    // Project categories with Hello Kitty theme
    const categories = [
        { id: 'all', name: '🎀 All Projects' },
        { id: 'web', name: '🐱 Web Apps' },
        { id: 'mobile', name: '💖 Mobile Apps' },
        { id: 'design', name: '🌸 UI/UX Design' },
        { id: 'backend', name: '🎀 Backend' }
    ];

    // Projects data
    const projectsData = [
        {
            id: 1,
            title: 'Shop Shoes ',
            category: 'website',
            image: '/image/zendo.png',
            icon: '🛒',
            description: 'A cute e-commerce platform featuring Hello Kitty products with shopping cart and payment integration.',
            tech: ['HTML', 'CSS', 'Java Scrip'],
            github: 'https://github.com/Mony20001/Final-Project.git',
            demo: 'https://mony-shopkh.vercel.app',
            featured: true,
            year: '2025'
        },
        {
            id: 2,
            title: 'Portfolio',
            category: 'web',
            image: '/image/folio.png',
            icon: '✅',
            description: 'Cute task management tool with Hello Kitty theme, real-time updates, and team collaboration.',
            tech: ['React Js', 'Java Scripe', 'Tailwind', 'Css',],
            github: 'https://github.com/Mony20001/MyPortfolio.git',
            demo: 'my-portfolio-teal-beta-11.vercel.app',
            featured: true,
            year: '2026'
        },
        {
            id: 3,
            title: 'Kitty Food Delivery',
            category: 'mobile',
            image: 'https://via.placeholder.com/400x300/FFB6C1/FFFFFF?text=Kitty+Food',
            icon: '🍕',
            description: 'Adorable food delivery app with Hello Kitty characters and real-time order tracking.',
            tech: ['React Native', 'Firebase', 'Google Maps API', 'Redux'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            featured: false,
            year: '2023'
        },
        {
            id: 4,
            title: 'Kitty Portfolio',
            category: 'design',
            image: 'https://via.placeholder.com/400x300/FFD1DC/FFFFFF?text=Kitty+Portfolio',
            icon: '🎨',
            description: 'Cute portfolio website with Hello Kitty animations and responsive design.',
            tech: ['React', 'Framer Motion', 'Tailwind CSS', 'EmailJS'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            featured: true,
            year: '2024'
        },
        {
            id: 5,
            title: 'Kitty Analytics Dashboard',
            category: 'web',
            image: 'https://via.placeholder.com/400x300/FFC0CB/FFFFFF?text=Kitty+Analytics',
            icon: '📊',
            description: 'Cute analytics dashboard with Hello Kitty themed data visualization.',
            tech: ['Vue.js', 'D3.js', 'Express', 'MySQL', 'Chart.js'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            featured: false,
            year: '2023'
        },
        {
            id: 6,
            title: 'Kitty Weather App',
            category: 'mobile',
            image: 'https://via.placeholder.com/400x300/FFB6C1/FFFFFF?text=Kitty+Weather',
            icon: '🌤️',
            description: 'Beautiful weather app with Hello Kitty theme and 7-day forecast.',
            tech: ['Flutter', 'OpenWeather API', 'BLoC', 'Firebase'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            featured: false,
            year: '2023'
        },
        {
            id: 7,
            title: 'Kitty API Gateway',
            category: 'backend',
            image: 'https://via.placeholder.com/400x300/FFD1DC/FFFFFF?text=Kitty+API',
            icon: '🔌',
            description: 'Scalable API gateway with cute Hello Kitty interface and authentication.',
            tech: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            featured: true,
            year: '2024'
        },
        {
            id: 8,
            title: 'Kitty Learning Platform',
            category: 'web',
            image: 'https://via.placeholder.com/400x300/FFC0CB/FFFFFF?text=Kitty+Learning',
            icon: '📚',
            description: 'Online learning platform with Hello Kitty characters and cute course designs.',
            tech: ['React', 'Django', 'PostgreSQL', 'AWS S3', 'Bootstrap'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            featured: false,
            year: '2023'
        }
    ];

    // Filter projects
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === filter);

    // Get featured projects
    const featuredProjects = projectsData.filter(project => project.featured);

    return (
        <section id="projects" className="py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Hello Kitty Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-white">
                {/* Hello Kitty Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 text-6xl animate-bounce">🐱</div>
                    <div className="absolute top-40 right-20 text-5xl animate-pulse">🎀</div>
                    <div className="absolute bottom-20 left-1/4 text-7xl animate-bounce">🐱</div>
                    <div className="absolute top-1/2 right-10 text-6xl animate-pulse">🌸</div>
                    <div className="absolute bottom-10 right-1/3 text-5xl animate-bounce">🎀</div>
                    <div className="absolute top-20 left-1/3 text-4xl animate-pulse">💖</div>
                    <div className="absolute bottom-40 right-20 text-6xl animate-bounce">🐱</div>
                    <div className="absolute top-1/3 left-5 text-5xl animate-pulse">🌸</div>
                    <div className="absolute bottom-1/4 right-1/4 text-4xl animate-bounce">💕</div>
                    <div className="absolute top-2/3 left-2/3 text-5xl animate-pulse">🎀</div>
                    <div className="absolute top-20 right-1/4 text-6xl animate-bounce">🐱</div>
                </div>
                
                {/* Kitty Paw Prints */}
                <div className="absolute inset-0 opacity-5">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-3xl"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                                animation: `float ${2 + Math.random() * 3}s infinite`
                            }}
                        >
                            🐾
                        </div>
                    ))}
                </div>

                {/* Cute Stars */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-2xl"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `twinkle ${1 + Math.random() * 2}s infinite`
                            }}
                        >
                            ⭐
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
                        My Projects 🎀
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"></span>
                    </h2>
                    <p className="text-pink-600 mt-6 max-w-2xl mx-auto text-lg">
                        Projects made with  💖
                    </p>
                </div>

                {/* Featured Projects Section */}
                {filter === 'all' && (
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold text-pink-700 mb-6 text-center flex items-center justify-center gap-2">
                            <span>🌟</span> Featured My Projects <span>🎀</span>
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featuredProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`
                                        bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl 
                                        hover:shadow-2xl transition-all duration-300 
                                        hover:transform hover:-translate-y-2
                                        border-2 border-pink-200
                                        ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                                    `}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            🌟 Featured
                                        </div>
                                        <div className="absolute bottom-4 left-4 text-5xl">
                                            {project.icon}
                                        </div>
                                        <div className="absolute top-4 left-4 text-3xl">
                                            🎀
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-pink-800 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-pink-600 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.slice(0, 4).map((tech, i) => (
                                                <span key={i} className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm border border-pink-200">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.tech.length > 4 && (
                                                <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm border border-pink-200">
                                                    +{project.tech.length - 4}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex gap-4">
                                            <a 
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                                            >
                                                🐱 GitHub
                                            </a>
                                            <a 
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-pink-600 transition-colors"
                                            >
                                                🎀 Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Category Filters with Hello Kitty Colors */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setFilter(category.id)}
                            className={`
                                px-5 py-2 rounded-full font-medium transition-all duration-300
                                ${filter === category.id 
                                    ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg transform scale-105' 
                                    : 'bg-white/80 text-pink-700 hover:bg-pink-100 hover:shadow-md border border-pink-200'
                                }
                            `}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`
                                bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg 
                                hover:shadow-2xl transition-all duration-300 
                                hover:transform hover:-translate-y-2 cursor-pointer
                                border-2 border-pink-200
                                ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute top-3 left-3 text-4xl">
                                    {project.icon}
                                </div>
                                <div className="absolute bottom-3 right-3 bg-pink-500/80 text-white px-2 py-1 rounded text-sm">
                                    🎀 {project.year}
                                </div>
                                <div className="absolute top-3 right-3 text-2xl">
                                    🐱
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-pink-800 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-pink-600 text-sm mb-3 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.tech.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-pink-50 text-pink-600 rounded text-xs border border-pink-200">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="px-2 py-1 bg-pink-50 text-pink-600 rounded text-xs border border-pink-200">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(project.github, '_blank');
                                        }}
                                        className="flex-1 text-sm px-3 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                                    >
                                        🐱 GitHub
                                    </button>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(project.demo, '_blank');
                                        }}
                                        className="flex-1 text-sm px-3 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-pink-600 transition-colors"
                                    >
                                        🎀 Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No results message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🐱</div>
                        <p className="text-pink-500 text-lg">No projects found in this category... 🎀</p>
                    </div>
                )}
            </div>

            {/* Modal for Project Details with Hello Kitty Theme */}
            {selectedProject && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <div 
                        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-pink-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative h-64">
                            <img 
                                src={selectedProject.image} 
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
                            >
                                ✕
                            </button>
                            <div className="absolute top-4 left-4 text-5xl">
                                🎀
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-3xl font-bold text-pink-800">
                                    {selectedProject.title}
                                </h2>
                                <div className="text-5xl">{selectedProject.icon}</div>
                            </div>
                            <p className="text-pink-600 mb-4 text-lg">
                                {selectedProject.description}
                            </p>
                            <div className="mb-4">
                                <h3 className="font-semibold text-pink-800 mb-2 flex items-center gap-2">
                                    <span>🐱</span> Technologies Used <span>🎀</span>
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm border border-pink-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <a 
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                                >
                                    🐱 View on GitHub
                                </a>
                                <a 
                                    href={selectedProject.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-pink-600 transition-colors"
                                >
                                    🎀 Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};

export default Project;