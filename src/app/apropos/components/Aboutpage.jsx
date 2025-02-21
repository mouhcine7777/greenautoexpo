"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Battery, Calendar, Users, Award, MapPin, ArrowRight, Car, ChevronRight } from 'lucide-react';

const Aboutpage = () => {
  // Timeline data
  const timeline = [
    {
      year: "2020",
      title: "Première édition",
      description: "Lancement de la première édition avec 35 exposants et plus de 10,000 visiteurs."
    },
    {
      year: "2022",
      title: "Expansion internationale",
      description: "L'événement accueille ses premiers exposants internationaux et double sa superficie."
    },
    {
      year: "2024",
      title: "Green Innovation Award",
      description: "Introduction des premiers prix d'innovation pour les solutions de mobilité durable."
    },
    {
      year: "2025",
      title: "Édition actuelle",
      description: "L'exposition la plus ambitieuse à ce jour, avec plus de 100 exposants et 50,000 visiteurs attendus."
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: "Sophia Benali",
      role: "Directrice de l'événement",
      image: "/team1.jpg"
    },
    {
      name: "Karim Tazi",
      role: "Responsable des partenariats",
      image: "/team2.jpg"
    },
    {
      name: "Leila Mernissi",
      role: "Coordinatrice des exposants",
      image: "/team3.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-montserrat">
        <div className="absolute inset-0 z-0">
          <img 
            src="/about2.jpg" 
            alt="Green Auto Expo Vue Panoramique" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#252F46]/80 via-[#252F46]/70 to-[#252F46]/90" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 px-4 py-20 mt-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="inline-block px-6 py-3 mb-8 bg-white/10 backdrop-blur-sm rounded-full"
            >
              <span className="text-[#6BBEA3] font-semibold">À propos de nous</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
            >
              Notre Passion pour la 
              <span className="block text-[#6BBEA3] mt-2">Mobilité Durable</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-12"
            >
              Pionnier dans la promotion des technologies automobiles vertes au Maroc, 
              le Green Auto Expo est né d'une vision ambitieuse pour transformer notre rapport à la mobilité.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="#mission" className="bg-[#6BBEA3] text-white px-8 py-3 rounded-full font-semibold 
                              hover:bg-[#6BBEA3]/90 transition flex items-center gap-2">
                Notre mission <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>

      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-white font-montserrat relative overflow-hidden">
        <div className="absolute -right-32 top-0 w-96 h-96 bg-[#6BBEA3]/10 rounded-full blur-3xl" />
        <div className="absolute -left-32 bottom-0 w-96 h-96 bg-[#252F46]/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-2 bg-[#6BBEA3]/10 rounded-full">
                <span className="text-[#6BBEA3] font-semibold">Notre mission</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#252F46]">
                Façonner l'Avenir de 
                <span className="block text-[#6BBEA3] mt-2">la Mobilité au Maroc</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Le Green Auto Expo se distingue comme le rendez-vous incontournable 
                du printemps, célébrant l'innovation automobile et la mobilité durable. 
                Dans un cadre exceptionnel au cœur des jardins d'Anfa Park, nous réunissons 
                passionnés, experts et curieux autour d'une vision commune : un avenir 
                plus vert pour l'industrie automobile.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Notre ambition est double : sensibiliser le grand public aux enjeux 
                de la mobilité durable et créer un écosystème favorable à l'innovation 
                en connectant les acteurs clés du secteur. Nous croyons fermement que 
                le Maroc a un rôle crucial à jouer dans la transition vers des solutions 
                de transport plus respectueuses de l'environnement.
              </p>

              {/* Key values */}
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
                  <Users className="w-10 h-10 text-[#6BBEA3] mb-4" />
                  <h3 className="font-semibold text-xl text-[#252F46] mb-2">Communauté</h3>
                  <p className="text-gray-600">Rassembler experts, innovateurs et passionnés</p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
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
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252F46]/50 to-transparent" />
                
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">100+</p>
                    <p className="text-sm text-white/80">Exposants</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">50K+</p>
                    <p className="text-sm text-white/80">Visiteurs</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">20+</p>
                    <p className="text-sm text-white/80">Conférences</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ x: 20, y: -20, rotate: 10 }}
                whileInView={{ x: 0, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -right-8 -top-8 z-30 bg-[#6BBEA3] text-white rounded-full px-6 py-6 shadow-lg"
              >
                <Award className="w-12 h-12" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white font-montserrat">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Map/Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
                <img
                  src="/venue-map.jpg" 
                  alt="Anfa Park Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252F46]/70 to-transparent"></div>
                
                {/* Location pin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="bg-[#6BBEA3] p-4 rounded-full shadow-lg"
                  >
                    <MapPin className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
                
                {/* Location details */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Anfa Park, Casablanca</h3>
                  <p className="text-white/80 mb-4">Boulevard de l'Océan Atlantique, Casablanca 20250</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-white/30 transition"
                  >
                    Obtenir l'itinéraire <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Venue information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-2 bg-[#6BBEA3]/10 rounded-full">
                <span className="text-[#6BBEA3] font-semibold">Le lieu</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#252F46]">
                Un Cadre 
                <span className="block text-[#6BBEA3] mt-2">Exceptionnel</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Niché au cœur de Casablanca, Anfa Park offre un écrin de verdure idéal 
                pour notre exposition dédiée à la mobilité durable. Ce lieu emblématique 
                allie parfaitement modernité et respect de l'environnement, reflétant 
                les valeurs fondamentales du Green Auto Expo.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Avec plus de 50 000 m² d'espaces d'exposition, tant en intérieur qu'en 
                extérieur, le site permet une expérience immersive unique. Les jardins 
                paysagers servent de toile de fond naturelle pour les véhicules du futur, 
                créant un contraste saisissant entre innovation technologique et beauté naturelle.
              </p>

              {/* Venue features */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="bg-[#6BBEA3]/20 p-2 rounded-full">
                    <Car className="w-5 h-5 text-[#6BBEA3]" />
                  </div>
                  <span className="text-gray-700">Parking gratuit</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#6BBEA3]/20 p-2 rounded-full">
                    <Users className="w-5 h-5 text-[#6BBEA3]" />
                  </div>
                  <span className="text-gray-700">Accessible PMR</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#6BBEA3]/20 p-2 rounded-full">
                    <Battery className="w-5 h-5 text-[#6BBEA3]" />
                  </div>
                  <span className="text-gray-700">Bornes de recharge</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#6BBEA3]/20 p-2 rounded-full">
                    <Calendar className="w-5 h-5 text-[#6BBEA3]" />
                  </div>
                  <span className="text-gray-700">Ouvert 9h-19h</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#252F46] to-[#3A4563] text-white font-montserrat">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 max-w-2xl mx-auto">
            Prêt à découvrir le futur de la 
            <span className="text-[#6BBEA3]"> mobilité verte</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Rejoignez-nous du 3 au 13 Avril 2025 pour une expérience immersive au cœur 
            de l'innovation automobile durable.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a href="#" className="bg-[#6BBEA3] text-white px-10 py-4 rounded-full text-lg font-semibold
                               hover:bg-[#6BBEA3]/90 transition-colors inline-flex items-center gap-2">
              Réserver vos billets <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Aboutpage;