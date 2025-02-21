"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronDown, MapPin, ExternalLink, Star, CarFront, Battery, Zap, ShieldCheck } from 'lucide-react';

const ExposantsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredExposants, setFilteredExposants] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Tous');
  const [featuredExposant, setFeaturedExposant] = useState(null);
  
  // Sample exposants data
  const exposants = [
    {
      id: 1,
      name: "EcoDrive Motors",
      logo: "/ecodrive-logo.png",
      category: "Constructeur",
      country: "Maroc",
      description: "Startup marocaine spécialisée dans la conversion de véhicules classiques en véhicules électriques. Nos kits permettent une transition écologique abordable.",
      standLocation: "Pavillon A - Stand 12",
      website: "https://ecodrivemotors.ma",
      featured: true,
      specialties: ["Conversion électrique", "Véhicules hybrides", "Bornes de recharge"],
      highlight: "Dévoilement du premier utilitaire marocain 100% électrique"
    },
    {
      id: 2,
      name: "GreenTech Mobility",
      logo: "/greentech-logo.png",
      category: "Technologie",
      country: "France",
      description: "Leader européen dans le développement de solutions intelligentes pour optimiser l'autonomie des batteries et améliorer l'expérience de conduite des véhicules électriques.",
      standLocation: "Pavillon B - Stand 05",
      website: "https://greentechmobility.fr",
      featured: false,
      specialties: ["Systèmes de gestion de batterie", "Applications connectées", "Optimisation d'autonomie"]
    },
    {
      id: 3,
      name: "SolarWheel",
      logo: "/solarwheel-logo.png",
      category: "Énergie",
      country: "Allemagne",
      description: "Pionnier dans l'intégration de panneaux solaires flexibles aux carrosseries des véhicules électriques, améliorant ainsi leur autonomie jusqu'à 25% en conditions optimales.",
      standLocation: "Pavillon C - Stand 23",
      website: "https://solarwheel.de",
      featured: true,
      specialties: ["Panneaux solaires flexibles", "Intégration carrosserie", "Systèmes d'appoint énergétique"],
      highlight: "Démonstration du prototype SunRunner avec 500km d'autonomie"
    },
    {
      id: 4,
      name: "BatteryPlus",
      logo: "/batteryplus-logo.png",
      category: "Composants",
      country: "Chine",
      description: "Fabricant de batteries de nouvelle génération utilisant des matériaux durables et recyclables. Nos batteries offrent une densité énergétique 30% supérieure aux standards actuels.",
      standLocation: "Pavillon D - Stand 41",
      website: "https://batteryplus.cn",
      featured: false,
      specialties: ["Batteries haute densité", "Matériaux recyclables", "Systèmes de refroidissement avancés"]
    },
    {
      id: 5,
      name: "EcoCharge",
      logo: "/ecocharge-logo.png",
      category: "Infrastructure",
      country: "Maroc",
      description: "Entreprise marocaine dédiée au déploiement d'infrastructures de recharge alimentées par énergie solaire dans tout le Royaume. Solution clé en main pour collectivités et entreprises.",
      standLocation: "Pavillon A - Stand 18",
      website: "https://ecocharge.ma",
      featured: false,
      specialties: ["Bornes de recharge solaires", "Smart Grid", "Solutions pour copropriétés"]
    },
    {
      id: 6,
      name: "SafeDrive Systems",
      logo: "/safedrive-logo.png",
      category: "Sécurité",
      country: "États-Unis",
      description: "Spécialiste des systèmes de sécurité avancés pour véhicules électriques, incluant la détection d'incendie de batterie et les protocoles d'urgence automatisés.",
      standLocation: "Pavillon B - Stand 27",
      website: "https://safedrivesystems.com",
      featured: false,
      specialties: ["Détection d'incendie", "Systèmes d'alerte", "Formation sécurité"]
    },
    {
      id: 7,
      name: "Renew Mobility",
      logo: "/renew-logo.png",
      category: "Constructeur",
      country: "Espagne",
      description: "Constructeur de véhicules électriques compacts pour la mobilité urbaine. Nos modèles intègrent des matériaux recyclés à plus de 70% et sont entièrement démontables en fin de vie.",
      standLocation: "Pavillon C - Stand 09",
      website: "https://renewmobility.es",
      featured: true,
      specialties: ["Véhicules urbains", "Économie circulaire", "Design modulaire"],
      highlight: "Lancement de la citadine ReGen avec autonomie de 350km"
    },
    {
      id: 8,
      name: "AutoVolt",
      logo: "/autovolt-logo.png",
      category: "Technologie",
      country: "Japon",
      description: "Développeur de la technologie de charge ultra-rapide permettant de charger un véhicule électrique à 80% en moins de 10 minutes, tout en préservant la durée de vie de la batterie.",
      standLocation: "Pavillon D - Stand 15",
      website: "https://autovolt.jp",
      featured: false,
      specialties: ["Charge ultra-rapide", "Refroidissement liquide", "Gestion thermique"]
    }
  ];
  
  const categories = ['Tous', 'Constructeur', 'Technologie', 'Énergie', 'Composants', 'Infrastructure', 'Sécurité'];
  const countries = ['Tous', 'Maroc', 'France', 'Allemagne', 'Chine', 'États-Unis', 'Espagne', 'Japon'];
  
  // Filter exposants based on active category, search query, and country
  useEffect(() => {
    let filtered = [...exposants];
    
    // Filter by category
    if (activeCategory !== 'Tous') {
      filtered = filtered.filter(expo => expo.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(expo => 
        expo.name.toLowerCase().includes(query) || 
        expo.description.toLowerCase().includes(query) ||
        expo.specialties.some(spec => spec.toLowerCase().includes(query))
      );
    }
    
    // Filter by country
    if (selectedCountry !== 'Tous') {
      filtered = filtered.filter(expo => expo.country === selectedCountry);
    }
    
    setFilteredExposants(filtered);
    
    // Set featured exposant
    const featured = exposants.find(expo => expo.featured === true);
    setFeaturedExposant(featured);
  }, [activeCategory, searchQuery, selectedCountry]);
  
  // Category icon mapping
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Constructeur':
        return <CarFront className="w-6 h-6" />;
      case 'Technologie':
        return <Zap className="w-6 h-6" />;
      case 'Énergie':
        return <Battery className="w-6 h-6" />;
      case 'Sécurité':
        return <ShieldCheck className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

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
              <span className="text-[#6BBEA3] font-medium">Nos partenaires innovants</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Découvrez nos <span className="text-[#6BBEA3]">Exposants</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Rencontrez les pionniers de la mobilité durable qui façonnent l'avenir du transport écologique.
              Constructeurs, équipementiers et innovateurs vous attendent.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Featured Exposant */}
      {featuredExposant && (
        <div className="container mx-auto px-4 -mt-16 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 md:h-80 bg-[#252F46]/10">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img 
                    src={featuredExposant.logo} 
                    alt={`Logo ${featuredExposant.name}`}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-[#6BBEA3] text-white px-4 py-2 rounded-full font-medium text-sm">
                  Exposant à l'honneur
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-[#252F46]/5 text-[#6BBEA3]">
                        {getCategoryIcon(featuredExposant.category)}
                      </div>
                      <span className="text-[#252F46] font-semibold">{featuredExposant.category}</span>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-500">{featuredExposant.country}</span>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-[#252F46] mb-4">{featuredExposant.name}</h2>
                    <p className="text-gray-600 mb-6">{featuredExposant.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredExposant.specialties.map((specialty, index) => (
                        <span key={index} className="bg-[#252F46]/5 text-[#252F46] px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    <div className="bg-[#6BBEA3]/10 border-l-4 border-[#6BBEA3] p-4 rounded">
                      <h4 className="font-semibold text-[#252F46] mb-2">À ne pas manquer</h4>
                      <p className="text-gray-700">{featuredExposant.highlight}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4 min-w-[250px]">
                    <div className="bg-[#252F46]/5 rounded-xl p-5">
                      <h4 className="font-semibold text-[#252F46] mb-3">Informations</h4>
                      
                      <div className="flex items-start gap-3 mb-4">
                        <MapPin className="w-5 h-5 text-[#6BBEA3] mt-1" />
                        <div>
                          <span className="block text-gray-800 font-medium">Emplacement</span>
                          <span className="text-gray-600">{featuredExposant.standLocation}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <ExternalLink className="w-5 h-5 text-[#6BBEA3] mt-1" />
                        <div>
                          <span className="block text-gray-800 font-medium">Site web</span>
                          <a href={featuredExposant.website} target="_blank" rel="noopener noreferrer"
                             className="text-[#6BBEA3] hover:underline">
                            {featuredExposant.website.replace(/(^\w+:|^)\/\//, '')}
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <button className="bg-[#6BBEA3] text-white px-5 py-3 rounded-xl font-semibold 
                                      hover:bg-[#5aa990] transition-colors">
                      Prendre rendez-vous
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Search and Filter Bar */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un exposant ou une technologie..."
                className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-200 focus:border-[#6BBEA3] focus:ring-2 focus:ring-[#6BBEA3]/20 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Category Tabs - Desktop */}
            <div className="hidden md:flex overflow-x-auto gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-3 rounded-lg whitespace-nowrap transition-colors ${
                    activeCategory === category 
                    ? 'bg-[#252F46] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Filter Button */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#252F46]/5 text-[#252F46] hover:bg-[#252F46]/10 transition-colors md:w-auto"
            >
              <Filter className="w-5 h-5" />
              <span>Filtrer</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {/* Mobile Category Selector */}
          <div className="md:hidden mt-4 overflow-x-auto pb-2">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm transition-colors ${
                    activeCategory === category 
                    ? 'bg-[#252F46] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Filter Dropdown */}
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-[#252F46] mb-2">Pays d'origine</h4>
                  <div className="space-y-2">
                    {countries.map((country) => (
                      <div key={country} className="flex items-center">
                        <input
                          type="radio"
                          id={`country-${country}`}
                          name="country"
                          className="w-4 h-4 text-[#6BBEA3] focus:ring-[#6BBEA3]/20"
                          checked={selectedCountry === country}
                          onChange={() => setSelectedCountry(country)}
                        />
                        <label htmlFor={`country-${country}`} className="ml-2 text-gray-700">
                          {country}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Exposants Grid */}
      <div className="container mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-[#252F46] mb-8">
          {filteredExposants.length} Exposants 
          {activeCategory !== 'Tous' ? ` dans "${activeCategory}"` : ''}
          {selectedCountry !== 'Tous' ? ` du ${selectedCountry}` : ''}
        </h2>
        
        {filteredExposants.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-[#252F46] mb-2">Aucun exposant trouvé</h3>
            <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExposants.map((exposant) => (
              <motion.div
                key={exposant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100
                            ${exposant.id === featuredExposant?.id ? 'hidden' : ''}`}
              >
                <div className="h-48 bg-[#252F46]/5 relative">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <img 
                      src={exposant.logo} 
                      alt={`Logo ${exposant.name}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-full bg-[#252F46]/5 text-[#6BBEA3]">
                        {getCategoryIcon(exposant.category)}
                      </div>
                      <span className="text-sm font-medium text-gray-600">{exposant.category}</span>
                    </div>
                    <span className="text-sm text-gray-500">{exposant.country}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#252F46] mb-3">{exposant.name}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{exposant.description}</p>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-6">
                    <MapPin className="w-4 h-4 text-[#6BBEA3]" />
                    <span>{exposant.standLocation}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exposant.specialties.slice(0, 2).map((specialty, index) => (
                      <span key={index} className="bg-[#252F46]/5 text-[#252F46] px-3 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                    {exposant.specialties.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        +{exposant.specialties.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-[#6BBEA3] text-white px-4 py-2 rounded-lg font-medium 
                                      hover:bg-[#5aa990] transition-colors text-sm">
                      Voir le profil
                    </button>
                    <a 
                      href={exposant.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      {/* Call to Action */}
      <div className="bg-[#252F46]/5 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#252F46] mb-6">
              Vous souhaitez <span className="text-[#6BBEA3]">exposer</span> au salon ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez les leaders de la mobilité durable et présentez vos innovations 
              lors du premier salon dédié aux véhicules écologiques au Maroc.
            </p>
            
            <button className="group relative bg-[#6BBEA3] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold 
                           text-base md:text-lg
                           overflow-hidden transition-all hover:shadow-lg hover:shadow-[#6BBEA3]/50">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Demander un dossier exposant
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExposantsPage;