"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, LinkedinIcon, InstagramIcon, FacebookIcon } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-montserrat bg-[#252F46] py-20">
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-1"
      >
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#6BBEA3]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#6BBEA3]/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contactez <span className="text-[#6BBEA3]">Nous</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions sur le Green Auto Expo 2025
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#6BBEA3]/20 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#6BBEA3]" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Adresse</h3>
            <p className="text-gray-300">Anfa Park, Boulevard de l'Ocean Atlantique</p>
            <p className="text-gray-300">Casablanca, Maroc</p>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#6BBEA3]/20 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#6BBEA3]" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Téléphone</h3>
            <p className="text-gray-300">+212 5XX-XXXXXX</p>
            <p className="text-gray-300">+212 6XX-XXXXXX</p>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#6BBEA3]/20 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-[#6BBEA3]" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Horaires d'exposition</h3>
            <p className="text-gray-300">Lun - Ven: 10:00 - 20:00</p>
            <p className="text-gray-300">Sam - Dim: 09:00 - 22:00</p>
          </motion.div>
        </div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-white mb-8">Suivez-nous sur les réseaux sociaux</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#6BBEA3] transition-colors">
                <LinkedinIcon className="w-6 h-6 text-white" />
              </div>
            </a>
            <a href="#" className="group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#6BBEA3] transition-colors">
                <InstagramIcon className="w-6 h-6 text-white" />
              </div>
            </a>
            <a href="#" className="group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#6BBEA3] transition-colors">
                <FacebookIcon className="w-6 h-6 text-white" />
              </div>
            </a>
          </div>
        </motion.div>

        {/* Email Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-[#6BBEA3]/20 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto">
            <Mail className="w-12 h-12 text-[#6BBEA3] mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Support par email</h3>
            <p className="text-gray-300 mb-4">Pour toute question ou information supplémentaire</p>
            <a href="mailto:contact@greenautoexpo.ma" className="text-[#6BBEA3] hover:text-white transition-colors text-lg font-semibold">
              contact@greenautoexpo.ma
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;