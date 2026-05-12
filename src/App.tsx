import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Video, 
  ChevronRight, 
  Check, 
  Mail, 
  User, 
  Send,
  Zap,
  Globe,
  Star,
  Instagram,
  ArrowUpRight
} from 'lucide-react';

// --- Types ---
interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  accent: 'gold' | 'silver' | 'bronze';
  isPopular?: boolean;
}

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-onyx/80 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="text-2xl font-serif tracking-widest uppercase">Presta<span className="text-gold">Show</span></div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] opacity-60 font-medium">
        <a href="#expertise" className="hover:text-gold transition-colors">Expertise</a>
        <a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a>
        <a href="#offres" className="hover:text-gold transition-colors">Formules</a>
        <a href="#contact" className="hover:text-gold transition-colors py-1 border-b border-transparent hover:border-gold">Contact</a>
      </div>

      <button onClick={() => document.getElementById('offres')?.scrollIntoView()} className="hidden sm:block px-6 py-2 border border-gold text-gold text-[11px] uppercase tracking-[0.2em] hover:bg-gold hover:text-onyx transition-all duration-300">
        Découvrir nos offres
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Dark cinematic background effects */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-[10px] uppercase tracking-[0.3em] font-medium mb-8">
          Exclusivité & Excellence
        </span>
        
        <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[1.1] mb-8 tracking-tight">
          Votre talent mérite une <br /> 
          <span className="gold-text-gradient italic">vitrine d'exception</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Pensé par un vidéaste pour les créatifs de l'image. Nous transformons votre portfolio en une expérience immersive et luxueuse.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a
            href="#offres"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 bg-gold text-onyx rounded-full text-sm uppercase tracking-widest font-bold flex items-center gap-3 transition-shadow hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] shadow-lg shadow-gold/10"
          >
            Découvrir nos offres
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <a href="#contact" className="text-sm uppercase tracking-widest font-medium text-white/40 hover:text-white transition-colors flex items-center gap-2 group">
            Parler à un expert
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
          </a>
        </div>
      </motion.div>
    </div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20"
    >
      <span className="text-[10px] uppercase tracking-[0.2em]">Scroll pour explorer</span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
    </motion.div>
  </section>
);

const PricingCard = ({ tier, index }: { tier: PricingTier; index: number }) => {
  const accentClasses = {
    gold: 'border-gold gold-text',
    silver: 'border-silver silver-text',
    bronze: 'border-white/5 text-silver/60'
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative p-8 h-full card-gradient border transition-all duration-500 cursor-default flex flex-col ${tier.isPopular ? 'scale-105 shadow-2xl z-10 border-silver shadow-silver/5' : 'hover:border-white/20 border-white/5'} ${tier.accent === 'gold' ? 'border-gold shadow-gold/5' : ''}`}
    >
      {tier.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 text-[9px] uppercase font-bold tracking-tighter">
          Recommandé
        </div>
      )}

      <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-2">Option 0{index + 1}</div>
      <div className={`text-xl font-serif mb-1 ${tier.accent === 'gold' ? 'text-gold' : tier.accent === 'silver' ? 'text-white' : 'text-silver'}`}>
        Pack {tier.name.toUpperCase()}
      </div>
      <div className="text-[9px] uppercase tracking-widest mb-4 opacity-40">{tier.description}</div>
      
      <div className="text-3xl font-light mb-8 font-serif">
        €{tier.price}<span className="text-sm opacity-50">/{tier.name === 'Gold' ? 'projet' : 'site'}</span>
      </div>

      <ul className="text-[12px] space-y-4 mb-10 flex-grow">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 opacity-70">
            <span className="text-gold">•</span>
            {feature}
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 border ${tier.accent === 'gold' ? 'bg-gold text-onyx border-gold' : tier.isPopular ? 'bg-white text-black border-white' : 'border-white/10 hover:border-white text-white/60 hover:text-white'}`}>
        Choisir ce pack
      </button>
    </motion.div>
  );
};

const Pricing = () => {
  const tiers: PricingTier[] = [
    {
      name: "Bronze",
      price: "490",
      description: "L'Essentiel",
      accent: 'bronze',
      features: [
        "Site Vitrine Responsive",
        "Hébergement Premium (1 an)",
        "Nom de Domaine (.fr / .com)",
        "Design Cinématique Standard",
        "SEO de Base",
      ]
    },
    {
      name: "Silver",
      price: "890",
      description: "La Gestion",
      accent: 'silver',
      isPopular: true,
      features: [
        "Tout le Pack Bronze",
        "Automatisation Flux Clients",
        "Devis & Facturation Intégrés",
        "Espace Client Sécurisé",
        "Multi-pages Interactives"
      ]
    },
    {
      name: "Gold",
      price: "1490",
      description: "L'Élite",
      accent: 'gold',
      features: [
        "Tout le Pack Silver",
        "Teaser Vidéo Publicitaire (15s)",
        "Stratégie Réseaux Sociaux",
        "SEO Avancé & Local",
        "Maintenance VIP Prioritaire"
      ]
    }
  ];

  return (
    <section id="offres" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">Nos Formules</h2>
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-light italic">
            Une structure de prix pensée pour accompagner votre croissance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 relative z-10 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <PricingCard tier={tier} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="col-span-12 md:col-span-4">
            <h3 className="font-serif text-3xl text-gold mb-4 leading-tight">Projet en tête ?</h3>
            <p className="text-[12px] opacity-40 leading-relaxed uppercase tracking-widest max-w-xs">
              Donnez à votre image la stature qu'elle mérite. Réponse garantie sous 24h.
            </p>
          </div>
          
          <div className="col-span-12 md:col-span-8">
            <form className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-1">
                <input type="text" placeholder="Nom complet" className="input-field" />
              </div>
              <div className="space-y-1">
                <input type="email" placeholder="Email professionnel" className="input-field" />
              </div>
              <div className="space-y-1">
                <select className="input-field appearance-none cursor-pointer">
                  <option value="" disabled selected>Type de prestation</option>
                  <option value="bronze">Pack Bronze</option>
                  <option value="silver">Pack Silver</option>
                  <option value="gold">Pack Gold</option>
                </select>
              </div>
              <div className="space-y-1">
                <input type="text" placeholder="Votre message" className="input-field" />
              </div>
              <div className="sm:col-span-2 pt-6">
                <button className="px-12 py-4 border border-gold text-gold text-[11px] uppercase tracking-[0.2em] hover:bg-gold hover:text-onyx transition-all duration-500 font-bold">
                  Envoyer ma demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
            <Camera className="text-onyx w-4 h-4" />
          </div>
          <span className="text-lg font-serif font-bold tracking-tight">Presta<span className="text-gold">Show</span></span>
        </div>
        <p className="text-white/30 text-sm font-light max-w-sm leading-relaxed">
          Sublimez votre art grâce à une expertise digitale dédiée aux créateurs de l'image. 
          Le luxe n'est pas un gadget, c'est votre standard.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold">Suivez-nous</h4>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:border-gold hover:text-gold transition-all group">
            <Instagram className="w-5 h-5 opacity-50 group-hover:opacity-100" />
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold">Légal</h4>
        <p className="text-white/30 text-xs font-light hover:text-white transition-colors cursor-pointer tracking-wider">Mentions Légales</p>
        <p className="text-white/30 text-xs font-light hover:text-white transition-colors cursor-pointer tracking-wider">Confidentialité</p>
      </div>
    </div>
    
    <div className="text-center mt-20 pt-10 border-t border-white/5">
      <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">© 2024 PrestaShow. Crafted with Excellence.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="luxury-gradient selection:bg-gold/30">
      <Navbar />
      <main>
        <Hero />
            <section id="expertise" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 inline-block">Savoir-faire</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Notre Expertise</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-16">
              {/* Expertise content remains the same */}
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center border border-gold/20">
                  <Video className="text-gold w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold">Design Cinématique</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  Chaque détail est pensé comme un plan de cinéma. Fluidité, esthétisme et minimalisme pour une immersion totale.
                </p>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <Zap className="text-white/70 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold">Vitesse Absolue</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  L'hébergement le plus rapide du marché pour que vos galeries HD chargent instantanément, partout dans le monde.
                </p>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center border border-gold/20">
                  <Star className="text-gold w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold">Premium Support</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  Un interlocuteur unique qui connaît votre métier. Plus qu'un prestataire, un partenaire de votre réussite.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-32 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 inline-block">Réalisations</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">Portfolio</h2>
              </div>
              <p className="text-white/40 text-sm font-light max-w-sm italic">
                Une sélection de nos dernières collaborations avec des créateurs visionnaires.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="aspect-video bg-white/5 border border-white/10 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-onyx to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-10 left-10">
                  <span className="text-[10px] uppercase tracking-widest text-gold mb-2 block">Vidéaste</span>
                  <h4 className="text-2xl font-serif">Studio Lumière</h4>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="aspect-video bg-white/5 border border-white/10 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-onyx to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-10 left-10">
                  <span className="text-[10px] uppercase tracking-widest text-gold mb-2 block">Photographe</span>
                  <h4 className="text-2xl font-serif">Horizon Visuals</h4>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
