import React, { useState, useEffect } from 'react';

const Skill = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [animateItems, setAnimateItems] = useState(false);

    useEffect(() => {
        setAnimateItems(true);
    }, []);

    // Skill categories
    const categories = [
        { id: 'all', name: '🌈 All Skills' },
        { id: 'frontend', name: '🎀 Frontend' },
        { id: 'backend', name: '🐱 Backend' },
        { id: 'database', name: '💖 Database' },
        { id: 'tools', name: '🌸 Tools & Others' }
    ];

    // Skills data with Hello Kitty theme
    const skillsData = [
        // Frontend Skills
        { id: 1, name: 'React.js', level: 0, category: 'frontend', icon: '⚛️', color: '#FF69B4' },
        { id: 2, name: 'Next.js', level: 0, category: 'frontend', icon: '▲', color: '#FF1493' },
        { id: 3, name: 'JavaScript', level: 0, category: 'frontend', icon: '🟡', color: '#FFB6C1' },
        { id: 4, name: 'TypeScript', level: 0, category: 'frontend', icon: '🔷', color: '#FF69B4' },
        { id: 5, name: 'Tailwind CSS', level: 0, category: 'frontend', icon: '🎨', color: '#FF1493' },
        { id: 6, name: 'HTML5/CSS3', level: 0, category: 'frontend', icon: '🌐', color: '#FFB6C1' },
        
        // Backend Skills
        { id: 7, name: 'Node.js', level: 0, category: 'backend', icon: '🟢', color: '#FF69B4' },
        { id: 8, name: 'Express.js', level: 0, category: 'backend', icon: '🚂', color: '#FF1493' },
        { id: 9, name: 'Python', level: 0, category: 'backend', icon: '🐍', color: '#FFB6C1' },
        { id: 10, name: 'PHP', level: 0, category: 'backend', icon: '🐘', color: '#FF69B4' },
        
        // Database Skills
        { id: 11, name: 'MongoDB', level: 0, category: 'database', icon: '🍃', color: '#FF1493' },
        { id: 12, name: 'MySQL', level: 0, category: 'database', icon: '🐬', color: '#FFB6C1' },
        { id: 13, name: 'PostgreSQL', level: 0, category: 'database', icon: '🐘', color: '#FF69B4' },
        
        // Tools & Others
        { id: 14, name: 'Git/GitHub', level: 0, category: 'tools', icon: '📚', color: '#FF1493' },
        { id: 15, name: 'Docker', level: 0, category: 'tools', icon: '🐳', color: '#FFB6C1' },
        { id: 16, name: 'Figma', level: 0, category: 'tools', icon: '🎨', color: '#FF69B4' },
        { id: 17, name: 'REST APIs', level: 0, category: 'tools', icon: '🔌', color: '#FF1493' }
    ];

    const filteredSkills = activeCategory === 'all' 
        ? skillsData 
        : skillsData.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Hello Kitty Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-white">
                {/* Hello Kitty Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 text-6xl">🐱</div>
                    <div className="absolute top-40 right-20 text-5xl">🎀</div>
                    <div className="absolute bottom-20 left-1/4 text-7xl">🐱</div>
                    <div className="absolute top-1/2 right-10 text-6xl">🌸</div>
                    <div className="absolute bottom-10 right-1/3 text-5xl">🎀</div>
                    <div className="absolute top-20 left-1/3 text-4xl">💖</div>
                    <div className="absolute bottom-40 right-20 text-6xl">🐱</div>
                    <div className="absolute top-1/3 left-5 text-5xl">🌸</div>
                    <div className="absolute bottom-1/4 right-1/4 text-4xl">💕</div>
                </div>
                
                {/* Kitty Paw Prints */}
                <div className="absolute inset-0 opacity-5">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-3xl"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                transform: `rotate(${Math.random() * 360}deg)`
                            }}
                        >
                            🐾
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header with Hello Kitty */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="text-6xl mb-4 animate-bounce">
                        🐱 🎀
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-pink-700 mb-4 relative inline-block">
                        My Skills
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-pink-400 rounded-full mt-2"></span>
                    </h2>
                    <p className="text-pink-600 mt-6 max-w-2xl mx-auto text-lg">
                        technologies and adorable tools I work with 🎀💖
                    </p>
                </div>

                {/* Category Filters with Hello Kitty Colors */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`
                                px-5 py-2 rounded-full font-medium transition-all duration-300
                                ${activeCategory === category.id 
                                    ? 'bg-pink-500 text-white shadow-lg transform scale-105' 
                                    : 'bg-white/80 text-pink-700 hover:bg-pink-100 hover:shadow-md'
                                }
                            `}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={skill.id}
                            className={`
                                bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg 
                                hover:shadow-2xl transition-all duration-300 
                                hover:transform hover:-translate-y-2
                                border-2 border-pink-200
                                ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}
                            style={{
                                transitionDelay: `${index * 50}ms`,
                                transitionProperty: 'all'
                            }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div 
                                    className="text-5xl"
                                    style={{ color: skill.color }}
                                >
                                    {skill.icon}
                                </div>
                                <div className="text-2xl font-bold text-pink-600">
                                    {skill.level}%
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-semibold text-pink-800 mb-3">
                                {skill.name}
                            </h3>
                            
                            {/* Progress Bar with Hello Kitty Colors */}
                            <div className="w-full bg-pink-100 rounded-full h-3 overflow-hidden">
                                <div 
                                    className="h-full rounded-full transition-all duration-1000 ease-out"
                                    style={{
                                        width: animateItems ? `${skill.level}%` : '0%',
                                        backgroundColor: skill.color,
                                        transitionDelay: `${index * 100}ms`
                                    }}
                                ></div>
                            </div>
                            
                            {/* Kitty icon at the end of progress */}
                            <div className="text-right mt-1 opacity-50 text-xs">
                                🐱
                            </div>
                        </div>
                    ))}
                </div>

                {/* No results message */}
                {filteredSkills.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-pink-500 text-lg">No skills found in this category... 🎀</p>
                    </div>
                )}

                {/* Skill Stats with Hello Kitty Theme */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/80 rounded-2xl p-6 text-center backdrop-blur-sm border-2 border-pink-200 hover:scale-105 transition-transform">
                        <div className="text-4xl mb-2">🐱</div>
                        <div className="text-3xl font-bold text-pink-700">{skillsData.length}</div>
                        <div className="text-pink-600 mt-2">Total Skills</div>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 text-center backdrop-blur-sm border-2 border-pink-200 hover:scale-105 transition-transform">
                        <div className="text-4xl mb-2">🎀</div>
                        <div className="text-3xl font-bold text-pink-700">
                            {Math.round(skillsData.reduce((acc, skill) => acc + skill.level, 0) / skillsData.length)}%
                        </div>
                        <div className="text-pink-600 mt-2">Average Proficiency</div>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 text-center backdrop-blur-sm border-2 border-pink-200 hover:scale-105 transition-transform">
                        <div className="text-4xl mb-2">💖</div>
                        <div className="text-3xl font-bold text-pink-700">
                            {new Set(skillsData.map(s => s.category)).size}
                        </div>
                        <div className="text-pink-600 mt-2">Categories</div>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 text-center backdrop-blur-sm border-2 border-pink-200 hover:scale-105 transition-transform">
                        <div className="text-4xl mb-2">🌸</div>
                        <div className="text-3xl font-bold text-pink-700">0</div>
                        <div className="text-pink-600 mt-2">Years Experience</div>
                    </div>
                </div>

                {/* Hello Kitty Character */}
                <div className="fixed bottom-5 right-5 opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-20">
                    <div className="text-7xl animate-bounce">
                        🐱
                    </div>
                    <div className="text-xs text-pink-500 text-center">Hello Kitty says hi! 💕</div>
                </div>
            </div>
        </section>
    );
};

export default Skill;