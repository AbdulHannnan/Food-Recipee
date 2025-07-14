import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to My Website 🚀
          </h1>
          <p className="text-gray-600 mb-6">
            This is a modern hero section built with React + Vite. You can customize this easily.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <img 
            src="/hero-image.png" // put your image in `public` folder
            alt="Hero Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
