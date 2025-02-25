"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Users, ChevronRight, Star } from 'lucide-react';

const ProgramSection = () => {
  const [activeDay, setActiveDay] = useState(1);

  const programs = [
    {
      day: 1,
      date: "3 Avril",
      title: "Ouverture et Innovation",
      events: [
        {
          time: "10:00",
          title: "Cérémonie d'ouverture",
          location: "Hall Principal",
          type: "Événement Principal"
        },
        {
          time: "14:00",
          title: "Le Futur de la Mobilité Électrique",
          location: "Salle Conférence A",
          type: "Conférence"
        },
        {
          time: "16:00",
          title: "Démonstration de Nouvelles Technologies",
          location: "Zone d'Exposition",
          type: "Démonstration"
        }
      ]
    },
    {
      day: 2,
      date: "4 Avril",
      title: "Technologies Vertes",
      events: [
        {
          time: "11:00",
          title: "Innovations en Batteries Électriques",
          location: "Salle Conférence B",
          type: "Panel"
        },
        {
          time: "15:00",
          title: "Workshop: Éco-Conduite",
          location: "Atelier 1",
          type: "Workshop"
        }
      ]
    },
    {
      day: 3,
      date: "5 Avril",
      title: "Mobilité Durable",
      events: [
        {
          time: "10:30",
          title: "Forum sur l'Infrastructure Verte",
          location: "Grand Auditorium",
          type: "Forum"
        },
        {
          time: "14:30",
          title: "Présentation des Startups",
          location: "Innovation Hub",
          type: "Pitch"
        }
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#6BBEA3]/10 py-12 md:py-16 lg:py-24 font-montserrat">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#252F46] mb-4 md:mb-6">
            Programme de l'événement
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Découvrez notre programme riche en conférences, démonstrations et ateliers 
            dédiés à l'avenir de la mobilité durable.
          </p>
        </motion.div>

        {/* Day Selection - Made scrollable for mobile */}
        <div className="flex justify-start md:justify-center space-x-2 md:space-x-4 mb-8 md:mb-12 overflow-x-auto pb-4 px-4">
          {programs.map((program) => (
            <motion.button
              key={program.day}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 md:px-6 py-2 md:py-3 rounded-xl flex flex-col items-center min-w-[100px] md:min-w-[120px] flex-shrink-0
                ${activeDay === program.day 
                  ? 'bg-[#252F46] text-white' 
                  : 'bg-white text-[#252F46] hover:bg-[#252F46]/5'}`}
              onClick={() => setActiveDay(program.day)}
            >
              <span className="text-xs md:text-sm">Jour {program.day}</span>
              <span className="font-semibold text-sm md:text-base">{program.date}</span>
              {activeDay === program.day && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-1 w-2 h-2 bg-[#6BBEA3] rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Program Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto px-4"
          >
            {programs.find(p => p.day === activeDay)?.events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 md:p-6 mb-4 shadow-lg shadow-[#6BBEA3]/5 
                         hover:shadow-xl hover:shadow-[#6BBEA3]/10 transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                  <div className="bg-[#6BBEA3]/10 rounded-xl p-2 md:p-3 text-center w-full sm:w-auto sm:min-w-[100px] mb-3 sm:mb-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#6BBEA3] mx-auto mb-1" />
                    <span className="text-[#252F46] font-semibold text-sm md:text-base">{event.time}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-[#252F46] mb-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-col xs:flex-row flex-wrap gap-2 md:gap-4 text-gray-600 text-sm md:text-base">
                      <div className="flex items-center gap-1 md:gap-2">
                        <MapPin className="w-4 h-4 text-[#6BBEA3] flex-shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <Star className="w-4 h-4 text-[#6BBEA3] flex-shrink-0" />
                        <span className="truncate">{event.type}</span>
                      </div>
                    </div>
                  </div>

                  <button className="bg-[#252F46]/5 hover:bg-[#252F46]/10 rounded-full p-2 
                                   transition-colors group hidden sm:block">
                    <ChevronRight className="w-5 h-5 text-[#252F46] 
                                           group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Mobile view button */}
                <div className="mt-3 flex justify-end sm:hidden">
                  <button className="bg-[#252F46]/5 hover:bg-[#252F46]/10 rounded-full p-2 
                                   transition-colors group">
                    <ChevronRight className="w-5 h-5 text-[#252F46] 
                                           group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProgramSection;