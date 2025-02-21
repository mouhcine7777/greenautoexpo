"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRightCircle } from 'lucide-react';
import Link from 'next/link'; // Import the Link component

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-montserrat">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/herobg.jpg" 
          alt="Green Auto Expo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#252F46]/95 via-[#252F46]/80 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-1"
      >
        <div className="absolute top-10 md:top-20 left-10 md:left-20 w-32 md:w-64 h-32 md:h-64 bg-[#6BBEA3]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-48 md:w-96 h-48 md:h-96 bg-[#6BBEA3]/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl">

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight mb-4 md:mb-6">
                Future of
                <span className="block text-[#6BBEA3] mt-1 md:mt-2">Green Mobility</span>
              </h1>
            </motion.div>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 md:space-y-6 mb-8 md:mb-12"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8">
                <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-[#6BBEA3]" />
                  <span className="text-white text-base md:text-lg">3-13 Avril 2025</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#6BBEA3]" />
                  <span className="text-white text-base md:text-lg">Anfa Park, Casablanca</span>
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              Découvrez la prochaine génération de l'innovation automobile au premier salon de la mobilité durable au Maroc.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <Link href="/inscription" className="group relative bg-[#6BBEA3] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold 
                               text-base md:text-lg w-full sm:w-auto text-center
                               overflow-hidden transition-all hover:shadow-lg hover:shadow-[#6BBEA3]/50">
                <span className="relative z-10 flex items-center justify-center gap-2">
                S'inscrire maintenant
                  <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
              </Link>

              <button className="relative overflow-hidden border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 
                               rounded-full font-semibold text-base md:text-lg w-full sm:w-auto text-center
                               group hover:border-[#6BBEA3]">
                <span className="relative z-10 group-hover:text-[#252F46] transition-colors">
                Explorer le programme
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;