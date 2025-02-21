"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { Linkedin, ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/free-mode';

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Sarah Martinez",
      title: "Expert en Mobilité Électrique",
      company: "EcoTech Solutions",
      image: "speakers/speaker1.jpg",
      linkedin: "#"
    },
    {
      name: "Marc Bernard",
      title: "Directeur Innovation",
      company: "Green Motors",
      image: "speakers/speaker2.jpg",
      linkedin: "#"
    },
    {
      name: "Aisha Rahman",
      title: "Analyste en Technologies Vertes",
      company: "Future Mobility Institute",
      image: "speakers/speaker3.jpg",
      linkedin: "#"
    },
    {
      name: "Thomas Chen",
      title: "Expert en Infrastructure Durable",
      company: "Smart Cities Lab",
      image: "speakers/speaker4.jpg",
      linkedin: "#"
    },
    {
      name: "Laura Schmidt",
      title: "Directrice Développement Durable",
      company: "EcoMobile Group",
      image: "speakers/speaker5.jpg",
      linkedin: "#"
    }
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 font-montserrat overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-8 md:mb-12 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#252F46] mb-4 md:mb-6">
            Nos Speakers
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Découvrez les experts qui façonnent l'avenir de la mobilité durable
          </p>
        </motion.div>
      </div>

      {/* Full Width Slider Section */}
      <div className="relative w-full">
        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev hidden md:flex absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 
                         bg-white rounded-full p-2 md:p-3 lg:p-4 shadow-lg hover:bg-[#6BBEA3]/10 transition-colors group">
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#252F46] group-hover:text-[#6BBEA3] transition-colors" />
        </button>
        <button className="swiper-button-next hidden md:flex absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 
                         bg-white rounded-full p-2 md:p-3 lg:p-4 shadow-lg hover:bg-[#6BBEA3]/10 transition-colors group">
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#252F46] group-hover:text-[#6BBEA3] transition-colors" />
        </button>

        <Swiper
          modules={[Navigation, FreeMode]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          freeMode={true}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 8, slidesOffsetBefore: 16, slidesOffsetAfter: 16 },
            480: { slidesPerView: 1.5, spaceBetween: 12, slidesOffsetBefore: 20, slidesOffsetAfter: 20 },
            640: { slidesPerView: 2, spaceBetween: 16, slidesOffsetBefore: 24, slidesOffsetAfter: 24 },
            768: { slidesPerView: 2.2, spaceBetween: 20, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
            1024: { slidesPerView: 2.8, spaceBetween: 24, slidesOffsetBefore: 40, slidesOffsetAfter: 40 },
            1280: { slidesPerView: 3.2, spaceBetween: 32, slidesOffsetBefore: 48, slidesOffsetAfter: 48 },
            1536: { slidesPerView: 3.5, spaceBetween: 40, slidesOffsetBefore: 64, slidesOffsetAfter: 64 },
          }}
          className="!px-0 md:!px-8 lg:!px-16"
        >
          {speakers.map((speaker, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Image Container */}
                <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl md:rounded-2xl">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 
                             group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252F46] via-transparent to-transparent 
                                opacity-60 md:opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 
                                md:translate-y-12 md:group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 transform 
                                  md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                        {speaker.name}
                      </h3>
                      <p className="text-[#6BBEA3] text-sm sm:text-base md:text-lg mb-1">
                        {speaker.title}
                      </p>
                      <p className="text-white/80 text-sm sm:text-base mb-2 md:mb-4">
                        {speaker.company}
                      </p>
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 md:gap-2 text-sm sm:text-base text-white hover:text-[#6BBEA3] transition-colors"
                      >
                        <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                        <span>View Profile</span>
                      </a>
                    </div>
                  </div>

                  {/* Number Indicator */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/10 backdrop-blur-sm rounded-full 
                                w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                    <span className="text-white text-sm md:text-base font-bold">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SpeakersSection;