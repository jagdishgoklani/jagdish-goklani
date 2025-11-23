import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-indigo-100 to-slate-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/images/image1.jpeg"
                alt="जग ग्वालियरी"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-4 leading-tight">
          जग ग्वालियरी
        </h1>

        <p className="text-xl md:text-2xl text-indigo-900 mb-8 max-w-2xl mx-auto font-serif italic">
          मौलिक और स्वरचित कविताएँ
        </p>

        <p className="text-lg text-slate-700 mb-8 max-w-xl mx-auto">
          जगदीश गोकलानी की भावुक और सुंदर कविताओं का संग्रह
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#poems"
            className="px-8 py-4 bg-amber-700 text-white rounded-full font-semibold hover:bg-amber-800 transition-all transform hover:scale-105 shadow-lg"
          >
            कविताओं को देखें
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-amber-700 rounded-full font-semibold hover:bg-amber-50 transition-all transform hover:scale-105 shadow-lg border-2 border-amber-700"
          >
            संपर्क करें
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
