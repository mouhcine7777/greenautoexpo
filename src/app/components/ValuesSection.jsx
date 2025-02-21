"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Lightbulb, Users, Recycle, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const ValuesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3); // Default to desktop
  const sliderRef = useRef(null);
  
  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const values = [
    {
      icon: Leaf,
      title: "Mobilité Durable",
      description: "Le Green Auto Expo met en avant les solutions automobiles du futur, privilégiant les technologies propres et les innovations respectueuses de l'environnement. L'objectif est de sensibiliser et accompagner la transition vers des modes de transport plus responsables.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technologie",
      description: "L'événement est une vitrine des dernières avancées en matière de mobilité intelligente, avec une place de choix pour les véhicules électriques, hybrides et autonomes, ainsi que les infrastructures de recharge et nouvelles solutions de mobilité urbaine.",
    },
    {
      icon: Users,
      title: "Expérience Immersive & Éducative",
      description: "Au-delà d'une simple exposition, le Green Auto Expo propose une expérience engageante avec des conférences, des réservations d'essais de véhicules et démonstrations en direct pour permettre aux visiteurs de mieux comprendre les enjeux et opportunités de la mobilité de demain.",
    },
    {
      icon: Recycle,
      title: "Responsabilité Environnementale",
      description: "L'événement est conçu pour réduire son impact écologique grâce à un aménagement respectueux, une gestion raisonnée des déchets et une mise en avant des pratiques écoresponsables.",
    },
    {
      icon: Globe,
      title: "Accessibilité & Partage",
      description: "Ouvert à tous les publics, le salon vise à rendre la mobilité durable accessible, que ce soit pour les professionnels du secteur, les familles, ou les citoyens souhaitant adopter un mode de transport plus écologique.",
    },
  ];

  // Clone first and last items for infinite loop
  const extendedValues = [...values.slice(-1), ...values, ...values.slice(0, 1)];

  const nextSlide = () => {
    setActiveIndex((prev) => {
      const next = prev + 1;
      if (next >= values.length) {
        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.style.transition = 'none';
            setActiveIndex(0);
            requestAnimationFrame(() => {
              if (sliderRef.current) {
                sliderRef.current.style.transition = 'transform 300ms ease-in-out';
              }
            });
          }
        }, 300);
      }
      return next;
    });
  };

  const prevSlide = () => {
    setActiveIndex((prev) => {
      const next = prev - 1;
      if (next < 0) {
        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.style.transition = 'none';
            setActiveIndex(values.length - 1);
            requestAnimationFrame(() => {
              if (sliderRef.current) {
                sliderRef.current.style.transition = 'transform 300ms ease-in-out';
              }
            });
          }
        }, 300);
      }
      return next;
    });
  };

  // Mouse and Touch event handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 50) {
      if (walk > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 50) {
      if (walk > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      setIsDragging(false);
    }
  };

  return (
    <section className="relative bg-white py-12 md:py-24 font-montserrat overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#252F46] mb-4">
            Valeurs du Salon
          </h2>
          <p className="text-[#252F46]/70 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Découvrez les principes fondamentaux qui guident notre vision d'un avenir automobile plus durable
          </p>
          <div className="w-24 h-1 bg-[#252F46] mx-auto rounded-full" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative px-4 md:px-12">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#252F46]/10 hover:bg-[#252F46]/20 rounded-full text-[#252F46] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#252F46]/10 hover:bg-[#252F46]/20 rounded-full text-[#252F46] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div 
            className="overflow-hidden touch-pan-y"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${(activeIndex + 1) * (100 / slidesPerView)}%)` }}
            >
              {extendedValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="group h-full min-h-[400px] bg-[#252F46]/5 hover:bg-[#252F46]/10 transition-colors duration-300 border-2 border-[#252F46]/0 hover:border-[#252F46]/20 rounded-2xl">
                    <div className="p-6 md:p-8">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl 
                                    bg-[#252F46]/10 text-[#252F46] mb-6 
                                    group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl md:text-2xl font-bold text-[#252F46] mb-4">
                        {value.title}
                      </h3>
                      <p className="text-[#252F46]/70 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {values.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-6 bg-[#252F46]' : 'bg-[#252F46]/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;