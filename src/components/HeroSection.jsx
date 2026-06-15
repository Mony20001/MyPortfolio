import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Hello Kitty theme */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://wallpapers.com/images/hd/hello-kitty-aesthetic-flowers-and-bow-5jed6v09y1ikbc92.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Pink Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/60 via-rose-300/50 to-pink-200/70" />
      
      {/* Cute Polka Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `radial-gradient(circle at 20px 20px, #ff69b4 3px, transparent 3px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 animate-bounce-slow opacity-40">
        <span className="text-7xl">🎀</span>
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse-slow opacity-35">
        <span className="text-7xl">🐱</span>
      </div>
      <div className="absolute top-1/3 right-16 animate-spin-slow opacity-25">
        <span className="text-5xl">🌸</span>
      </div>
      <div className="absolute bottom-1/4 left-20 animate-float opacity-30">
        <span className="text-6xl">✨</span>
      </div>
      <div className="absolute top-40 right-1/4 animate-float-delay opacity-20">
        <span className="text-4xl">💖</span>
      </div>
      <div className="absolute bottom-32 left-1/3 animate-bounce-slow opacity-25">
        <span className="text-5xl">🍰</span>
      </div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            
            {/* Profile Image Section */}
            <div className="flex-shrink-0 group">
              <div className="relative">
                {/* Cute rotating ring effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 rounded-full opacity-70 group-hover:opacity-100 blur-md transition duration-500 group-hover:scale-105"></div>
                
                {/* Main Profile Image Container */}
                <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition duration-500">
                  {/* Fixed: Changed from backslashes to forward slashes for web compatibility */}
                  <img 
                    src="/image/profile.png" 
                    alt="Profile"
                    className="w-full h-full object-cover "
                  />
                </div>
                
                {/* Cute badge overlay */}
                <div className="absolute -bottom-2 -right-2 bg-pink-500 rounded-full p-2 shadow-lg animate-bounce">
                  <span className="text-2xl">🎀</span>
                </div>
                
                {/* Hello Kitty ear decoration */}
                <div className="absolute -top-4 -left-4">
                  <span className="text-3xl drop-shadow-lg">🐱</span>
                </div>
              </div>
            </div>
            
            {/* Text Content Section */}
            <div className="flex-1 text-center lg:text-left">
              {/* Welcome Badge */}
              <div className="inline-block mb-6 animate-bounce">
                <div className="bg-white/40 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border-2 border-pink-300">
                  <span className="text-pink-700 font-bold text-sm md:text-base flex items-center gap-2">
                    <span>🌟</span> WELCOME TO RA MONY PORTFOLIO <span>🎀</span>
                  </span>
                </div>
              </div>
              
              {/* Name Title */}
              <h1 id='Mony' className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span  className="bg-gradient-to-r from-pink-700 via-rose-500 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl">
                  រ៉ា​ មុនី
                </span>
              </h1>
              
              {/* Role Badge */}
              <div className="inline-block mb-5">
                <div className="bg-white/30 backdrop-blur-sm rounded-full px-5 py-1.5 border border-pink-200">
                  <span className="text-pink-600 font-semibold text-sm md:text-base flex items-center gap-2">
                    <span>✨</span> I'm a Full-Stack Developer <span>✨</span>
                  </span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl text-gray-800 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed backdrop-blur-sm bg-white/30 rounded-2xl p-5 font-medium">
                ខ្ញុំបាទឈ្មោះ​ រ៉ា​ មុនី  🎨
                ជានិស្សិតឆ្នាំទីពីរផ្នែកអាយធីនៃសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ។ 
                <span className="text-pink-600 font-bold"> ❤️ Computer Science </span> and
                <span className="text-rose-500 font-bold"> Engineering </span>. 
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <button className="group relative bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden text-sm md:text-base">
                  <span className="relative z-10 flex items-center gap-2">
                    <span>🐱</span> VIEW CV <span>🎨</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="bg-white/50 backdrop-blur-md border-2 border-pink-400 text-pink-700 font-bold py-3 px-8 rounded-full hover:bg-white/70 hover:border-pink-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg text-sm md:text-base">
                  <span>💌</span> CONTACT ME <span>📧</span>
                </button>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                <a href="/skill" className="bg-white/40 backdrop-blur-sm p-2 rounded-full hover:bg-pink-100 transition duration-300 shadow-md">
                  <span className="text-2xl">📷</span>
                </a>
                <a href="/project" className="bg-white/40 backdrop-blur-sm p-2 rounded-full hover:bg-pink-100 transition duration-300 shadow-md">
                  <span className="text-2xl">🐦</span>
                </a>
                <a href="/contact" className="bg-white/40 backdrop-blur-sm p-2 rounded-full hover:bg-pink-100 transition duration-300 shadow-md">
                  <span className="text-2xl">💼</span>
                </a>
                <a href="/about" className="bg-white/40 backdrop-blur-sm p-2 rounded-full hover:bg-pink-100 transition duration-300 shadow-md">
                  <span className="text-2xl">🎨</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-md border border-pink-200">
              <div className="font-bold text-2xl md:text-3xl text-pink-600">0</div>
              <div className="text-xs md:text-sm text-gray-700 font-medium">My Project</div>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-md border border-pink-200">
              <div className="font-bold text-2xl md:text-3xl text-pink-600">0</div>
              <div className="text-xs md:text-sm text-gray-700 font-medium">Projects Done</div>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-md border border-pink-200">
              <div className="font-bold text-2xl md:text-3xl text-pink-600">0</div>
              <div className="text-xs md:text-sm text-gray-700 font-medium">Years Experience</div>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
            <div className="w-7 h-12 border-2 border-pink-500 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-pink-500 rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;