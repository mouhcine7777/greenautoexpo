"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User, Mail, Phone, Briefcase, Car, CheckCircle2 } from 'lucide-react';

const InscriptionPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    attendingDays: [],
    heardFrom: '',
    newsletter: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'newsletter') {
        setFormData({...formData, [name]: checked});
      } else if (name.startsWith('day-')) {
        const day = name.replace('day-', '');
        setFormData({
          ...formData,
          attendingDays: checked
            ? [...formData.attendingDays, day]
            : formData.attendingDays.filter(d => d !== day)
        });
      }
    } else {
      setFormData({...formData, [name]: value});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden font-montserrat flex items-center justify-center">
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

        {/* Success Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 max-w-md w-full mx-4"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#6BBEA3] rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Inscription Complète!</h2>
            
            <p className="text-gray-300 mb-8">
              Merci de vous être inscrit au Green Auto Expo. Un email de confirmation a été envoyé à <span className="text-[#6BBEA3]">{formData.email}</span>.
            </p>
            
            <div className="bg-white/10 rounded-lg p-4 mb-8 w-full">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="flex-shrink-0 w-5 h-5 text-[#6BBEA3]" />
                <div className="text-white">3-13 Avril 2025</div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="flex-shrink-0 w-5 h-5 text-[#6BBEA3]" />
                <div className="text-white">Anfa Park, Casablanca</div>
              </div>
            </div>
            
            <button className="bg-[#6BBEA3] text-white px-6 py-3 rounded-full font-semibold w-full hover:shadow-lg hover:shadow-[#6BBEA3]/50 transition-all">
              Télécharger le Billet
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-montserrat">
{/* Background Image with Overlay */}
<div className="absolute inset-0 z-0">
  <img 
    src="/herobg.jpg" 
    alt="Green Auto Expo" 
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-tr from-[#252F46]/100 via-[#252F46]/95 to-[#252F46]/80" />
</div>



      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Inscrivez-vous au <span className="text-[#6BBEA3]">Green Auto Expo</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Rejoignez-nous pour une expérience immersive présentant l'avenir de la mobilité durable au Maroc.
              </p>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Informations Personnelles */}
                  <div className="md:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Informations Personnelles</h2>
                  </div>
                  
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6BBEA3]" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nom Complet"
                      className="w-full bg-white/10 text-white backdrop-blur-sm rounded-lg pl-12 pr-4 py-4 border border-white/20 focus:border-[#6BBEA3] focus:outline-none focus:ring-2 focus:ring-[#6BBEA3]/50"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6BBEA3]" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Adresse Email"
                      className="w-full bg-white/10 text-white backdrop-blur-sm rounded-lg pl-12 pr-4 py-4 border border-white/20 focus:border-[#6BBEA3] focus:outline-none focus:ring-2 focus:ring-[#6BBEA3]/50"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6BBEA3]" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Numéro de Téléphone"
                      className="w-full bg-white/10 text-white backdrop-blur-sm rounded-lg pl-12 pr-4 py-4 border border-white/20 focus:border-[#6BBEA3] focus:outline-none focus:ring-2 focus:ring-[#6BBEA3]/50"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6BBEA3]" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Entreprise (Facultatif)"
                      className="w-full bg-white/10 text-white backdrop-blur-sm rounded-lg pl-12 pr-4 py-4 border border-white/20 focus:border-[#6BBEA3] focus:outline-none focus:ring-2 focus:ring-[#6BBEA3]/50"
                    />
                  </div>
                  
                  {/* Intérêts */}
                  <div className="md:col-span-2 mt-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Vos Intérêts</h2>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-white text-lg mb-2">Quel est votre principal intérêt ?</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-white/10 text-grey backdrop-blur-sm rounded-lg px-4 py-4 border border-white/20 focus:border-[#6BBEA3] focus:outline-none"
                      required
                    >
                      <option value="" disabled>Sélectionnez une option</option>
                      <option value="electric">Véhicules Électriques</option>
                      <option value="hybrid">Technologie Hybride</option>
                      <option value="hydrogen">Piles à Combustible à Hydrogène</option>
                      <option value="infrastructure">Infrastructure de Recharge</option>
                      <option value="parts">Pièces et Composants Auto</option>
                      <option value="sustainable">Fabrication Durable</option>
                    </select>
                  </div>
                  
                  {/* Détails de Présence */}
                  <div className="md:col-span-2 mt-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Détails de Présence</h2>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="text-xl text-white mb-4">Quels jours serez-vous présent ?</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                      {["3 Avril", "4 Avril", "5 Avril", "6 Avril", "7 Avril", "8 Avril", 
                        "9 Avril", "10 Avril", "11 Avril", "12 Avril", "13 Avril"].map((day) => (
                        <label key={day} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20 cursor-pointer hover:bg-white/15 transition">
                          <input
                            type="checkbox"
                            name={`day-${day}`}
                            onChange={handleChange}
                            className="form-checkbox h-5 w-5 text-[#6BBEA3] rounded focus:ring-[#6BBEA3]"
                          />
                          <span className="text-white">{day}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 flex items-start space-x-3 mt-4">
                    <input
                      type="checkbox"
                      name="newsletter"
                      id="newsletter"
                      onChange={handleChange}
                      className="form-checkbox h-5 w-5 text-[#6BBEA3] rounded focus:ring-[#6BBEA3] mt-1"
                    />
                    <label htmlFor="newsletter" className="text-gray-300">
                      Je souhaite recevoir des mises à jour sur les futurs événements et innovations en matière de mobilité verte.
                    </label>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="md:col-span-2 mt-8">
                    <button
                      type="submit"
                      className="bg-[#6BBEA3] text-white px-8 py-4 rounded-full font-semibold w-full md:w-auto md:min-w-64 hover:shadow-lg hover:shadow-[#6BBEA3]/50 transition-all text-lg"
                    >
                      Finaliser l'inscription
                    </button>
                  </div>
                </div>
              </form>

              {/* Event Info Footer */}
              <div className="bg-white/5 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#6BBEA3]" />
                  <span className="text-white">3-13 Avril 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#6BBEA3]" />
                  <span className="text-white">Anfa Park, Casablanca</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-[#6BBEA3]" />
                  <span className="text-white">50+ Exposants</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InscriptionPage;