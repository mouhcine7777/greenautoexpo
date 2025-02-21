"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Battery, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative bg-white py-24 font-montserrat overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-[#6BBEA3]/10 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#252F46]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main large image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative z-20 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/about1.jpg"
                alt="Green Auto Expo Event"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252F46]/50 to-transparent" />
            </motion.div>

            {/* Floating smaller images */}
            <motion.div
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -left-8 -bottom-12 z-30 w-48 h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="/about2.jpg"
                alt="Exhibition Detail"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -right-8 -top-12 z-10 w-48 h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="/about3.jpg"
                alt="Green Technology"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-[#6BBEA3]/10 rounded-full">
              <span className="text-[#6BBEA3] font-semibold">À propos de l'événement</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#252F46]">
              Découvrez le Futur 
              <span className="block text-[#6BBEA3] mt-2">de la Mobilité Verte</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Le Green Auto Expo se distingue comme le rendez-vous incontournable 
              du printemps, célébrant l'innovation automobile et la mobilité durable. 
              Dans un cadre exceptionnel au cœur des jardins d'Anfa Park, nous réunissons 
              passionnés, experts et curieux autour d'une vision commune : un avenir 
              plus vert pour l'industrie automobile.
            </p>

            {/* Feature boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-[#252F46]/5 rounded-xl p-6 hover:bg-[#252F46]/10 transition-colors">
                <Leaf className="w-10 h-10 text-[#6BBEA3] mb-4" />
                <h3 className="font-semibold text-xl text-[#252F46] mb-2">Éco-Responsable</h3>
                <p className="text-gray-600">Integration harmonieuse et respect de l'environnement</p>
              </div>

              <div className="bg-[#252F46]/5 rounded-xl p-6 hover:bg-[#252F46]/10 transition-colors">
                <Battery className="w-10 h-10 text-[#6BBEA3] mb-4" />
                <h3 className="font-semibold text-xl text-[#252F46] mb-2">Innovation</h3>
                <p className="text-gray-600">Véhicules électriques et technologies hybrides</p>
              </div>

              <div className="bg-[#252F46]/5 rounded-xl p-6 hover:bg-[#252F46]/10 transition-colors">
                <Calendar className="w-10 h-10 text-[#6BBEA3] mb-4" />
                <h3 className="font-semibold text-xl text-[#252F46] mb-2">11 Jours</h3>
                <p className="text-gray-600">D'expositions et d'animations interactives</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;