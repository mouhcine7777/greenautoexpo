"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  const menuLinks = ["À propos", "Agenda", "Exposants", "Contact"];

  return (
    <footer className="bg-[#252F46] font-montserrat">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
          {/* Logo section */}
          <motion.div 
            className="lg:col-span-4 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/logo.png"
              alt="Green Auto Expo"
              width={180}
              height={180}
              className="object-contain"
            />
          </motion.div>

          {/* Menu Links */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ul className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {menuLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-[#6BBEA3] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact and Social section */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-4 items-center lg:items-end">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                <a href="mailto:contact@greenexpo.ma" className="text-white/70 hover:text-[#6BBEA3] transition-colors duration-300 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#6BBEA3]" />
                  contact@greenexpo.ma
                </a>
                <span className="text-white/70 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#6BBEA3]" />
                  Anfa Park, Casablanca
                </span>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-[#6BBEA3]/20 flex items-center justify-center
                             hover:bg-[#6BBEA3] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-4 h-4 text-[#6BBEA3] group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="mt-6 pt-4 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Green Auto Expo. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;