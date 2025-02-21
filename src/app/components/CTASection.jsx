"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link'; // Import the Link component

const CreativeCTASection = () => {
  return (
    <section className="relative font-montserrat overflow-hidden">
      {/* Background with diagonal split */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute top-0 left-0 w-full h-full bg-[#252F46]" />
      </div>

      <div className="relative py-20">
        <div className="container mx-auto px-4">
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Event Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              {/* Large Decorative Text */}
              <div className="relative mb-6">
                <span className="absolute -top-8 left-0 text-[120px] font-bold text-[#6BBEA3]/10 leading-none">
                  2025
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Green Auto<br />
                  <span className="text-[#6BBEA3]">Expo</span>
                </h2>
              </div>

              {/* Event Details */}
              <div className="space-y-6 mt-8">
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#6BBEA3]/20 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#6BBEA3]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Date</p>
                    <p className="text-white text-xl font-semibold">3-13 Avril 2025</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#6BBEA3]/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#6BBEA3]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Lieu</p>
                    <p className="text-white text-xl font-semibold">Anfa Park, Casablanca</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-6 -right-6">
                  <div className="w-12 h-12 rounded-full bg-[#6BBEA3] flex items-center justify-center animate-pulse">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-[#252F46] text-2xl md:text-3xl font-bold mb-4">
                  Réservez votre place
                </h3>
                
                <p className="text-[#252F46]/70 mb-8">
                  Soyez parmi les premiers à découvrir les innovations qui façonneront l'avenir de la mobilité durable.
                </p>

                <Link href="/inscription">
                  <motion.div 
                    className="w-full bg-[#252F46] text-white py-4 px-8 rounded-xl font-semibold
                             hover:bg-[#6BBEA3] transition-colors duration-300
                             relative overflow-hidden group cursor-pointer text-center" // Added text-center here
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">S'inscrire maintenant</span>
                    <div className="absolute inset-0 bg-[#6BBEA3] transform origin-left scale-x-0 
                                  group-hover:scale-x-100 transition-transform duration-300" />
                  </motion.div>
                </Link>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#252F46]/60">
                  <span className="w-2 h-2 rounded-full bg-[#6BBEA3] animate-ping" />
                  Places limitées disponibles
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Simple line divider */}
      <div className="relative">
        <div className="absolute bottom-0 w-full h-px bg-[#6BBEA3]/20"></div>
      </div>
    </section>
  );
};

export default CreativeCTASection;