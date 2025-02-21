"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Bookmark } from 'lucide-react';

const AgendaPage = () => {
  const [activeDay, setActiveDay] = useState(1);
  
  // Event schedule data
  const agenda = {
    1: [
      {
        time: "10:00 - 12:00",
        title: "Cérémonie d'ouverture",
        description: "Discours inaugural des officiels et présentation des innovations majeures du salon.",
        location: "Pavillon Principal",
        speaker: "Ministre de l'Industrie",
        category: "Cérémonie"
      },
      {
        time: "14:00 - 16:00",
        title: "Avenir des infrastructures de recharge",
        description: "Panel de discussion sur le développement des bornes de recharge au Maroc.",
        location: "Espace Conférences",
        speaker: "Experts en mobilité électrique",
        category: "Conférence"
      },
      {
        time: "16:30 - 18:00",
        title: "Exposition des nouveaux modèles 2025",
        description: "Découverte des derniers véhicules électriques des constructeurs internationaux.",
        location: "Hall d'Exposition",
        speaker: "Représentants des constructeurs",
        category: "Exposition"
      }
    ],
    2: [
      {
        time: "09:30 - 11:30",
        title: "Technologies de batteries innovantes",
        description: "Présentation des avancées technologiques dans le stockage d'énergie.",
        location: "Espace Innovation",
        speaker: "Dr. Karim Benabdallah",
        category: "Atelier"
      },
      {
        time: "13:00 - 15:00",
        title: "Mobilité urbaine durable",
        description: "Solutions pour transformer les déplacements urbains vers un modèle plus écologique.",
        location: "Pavillon Villes Durables",
        speaker: "Urbanistes et ingénieurs",
        category: "Table ronde"
      },
      {
        time: "16:00 - 18:30",
        title: "Essais de véhicules électriques",
        description: "Testez les derniers modèles de voitures électriques sur circuit fermé.",
        location: "Zone d'Essai Extérieure",
        speaker: "Équipes techniques",
        category: "Expérience"
      }
    ],
    3: [
      {
        time: "10:00 - 12:30",
        title: "L'hydrogène vert au Maroc",
        description: "Potentiel et perspectives de la filière hydrogène pour la mobilité.",
        location: "Espace Énergies Alternatives",
        speaker: "Chercheurs et industriels",
        category: "Conférence"
      },
      {
        time: "14:00 - 16:00",
        title: "Atelier jeunes ingénieurs",
        description: "Session pratique pour étudiants sur la conception de systèmes électriques.",
        location: "Espace Éducation",
        speaker: "Professeurs EMSI et ENSAM",
        category: "Atelier"
      }
    ]
  };
  
  // Calculate total days from agenda keys
  const totalDays = Object.keys(agenda).length;
  
  // Generate array of day numbers
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white font-montserrat">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[#6BBEA3]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#252F46]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      {/* Header Section */}
      <div className="relative bg-[#252F46] py-28">
        <div className="absolute inset-0 bg-[#252F46] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#6BBEA3]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#6BBEA3]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-5 py-2 bg-[#6BBEA3]/10 rounded-full mb-6">
              <span className="text-[#6BBEA3] font-medium">Programme de l'événement</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Agenda du <span className="text-[#6BBEA3]">Green Auto Expo</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Découvrez notre programme complet d'activités, de conférences et d'expositions
              durant les 11 jours du salon de la mobilité durable.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Day Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <div className="bg-[#252F46]/5 rounded-full p-1 flex">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`rounded-full px-6 py-3 text-lg font-medium transition-all ${
                  activeDay === day
                    ? 'bg-[#6BBEA3] text-white shadow-lg shadow-[#6BBEA3]/20'
                    : 'text-[#252F46] hover:bg-[#252F46]/10'
                }`}
              >
                Jour {day}
              </button>
            ))}
          </div>
          
          <div className="w-full flex justify-center mt-6">
            <div className="flex items-center gap-2 md:gap-3 bg-[#252F46]/5 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-[#6BBEA3]" />
              <span className="text-[#252F46] text-base md:text-lg font-medium">
                {activeDay === 1 ? "3 Avril 2025" : 
                 activeDay === 2 ? "4 Avril 2025" : 
                 activeDay === 3 ? "5 Avril 2025" : `${2 + activeDay} Avril 2025`}
              </span>
            </div>
          </div>
        </motion.div>
        
        {/* Schedule Timeline */}
        <div className="max-w-4xl mx-auto">
          {agenda[activeDay].map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="mb-8"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Time Column */}
                <div className="w-full md:w-1/4">
                  <div className="flex items-center gap-3 bg-[#252F46]/5 rounded-lg px-4 py-3">
                    <Clock className="w-5 h-5 text-[#6BBEA3]" />
                    <span className="text-[#252F46] font-semibold">{event.time}</span>
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="w-full md:w-3/4">
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-[#252F46]">{event.title}</h3>
                      <span className="px-3 py-1 bg-[#6BBEA3]/10 text-[#6BBEA3] text-sm font-medium rounded-full">
                        {event.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-[#6BBEA3]" />
                        <span className="text-gray-700">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#6BBEA3]" />
                        <span className="text-gray-700">{event.speaker}</span>
                      </div>
                    </div>
                    
                    <button className="mt-6 group flex items-center gap-2 text-[#6BBEA3] font-medium hover:text-[#252F46] transition-colors">
                      <Bookmark className="w-4 h-4 group-hover:fill-[#6BBEA3] transition-all" />
                      Ajouter à mon agenda
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-[#252F46] rounded-3xl p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6BBEA3]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Planifiez votre visite
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Consultez le programme complet et organisez votre visite pour profiter au maximum 
                de cet événement exceptionnel dédié à la mobilité verte.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button className="group relative bg-[#6BBEA3] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold 
                                 text-base md:text-lg w-full sm:w-auto
                                 overflow-hidden transition-all hover:shadow-lg hover:shadow-[#6BBEA3]/50">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Télécharger le programme complet
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                </button>

                <button className="relative overflow-hidden border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 
                                 rounded-full font-semibold text-base md:text-lg w-full sm:w-auto
                                 group hover:border-[#6BBEA3]">
                  <span className="relative z-10 group-hover:text-[#252F46] transition-colors">
                    S'inscrire à un événement
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgendaPage;