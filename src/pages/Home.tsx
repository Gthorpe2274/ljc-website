import { motion } from "motion/react";
import { ChevronRight, Shield, Zap, Globe, BarChart3, Droplets, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-light">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1B365D_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-blue">Institutional Coordination</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-display font-bold text-brand-blue leading-[1.1] mb-8">
                Bridging <span className="text-brand-orange italic">Opportunities</span> & <span className="text-brand-gold">Sources</span>
              </h1>
              <p className="text-xl text-brand-blue/70 mb-10 max-w-lg leading-relaxed">
                Expert coordination for Valuable Assets and Seekers. We deliver high-impact solutions for a changing global economy.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/services" className="px-8 py-4 bg-brand-blue text-brand-cream rounded-full font-bold hover:bg-brand-blue/90 transition-all flex items-center justify-center group shadow-xl shadow-brand-blue/20">
                  Our Services
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-brand-blue text-brand-blue rounded-full font-bold hover:bg-brand-blue hover:text-brand-cream transition-all text-center">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                  alt="Global Finance Coordination" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-brand-blue/5 max-w-xs hidden md:block">
                <BarChart3 className="text-brand-orange mb-4" size={32} />
                <p className="text-sm font-medium text-brand-blue">
                  "Coordinating institutional Gold, BTC, and USDT transactions with precision and integrity."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Sectors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">Core Expertise</h2>
            <p className="text-4xl font-display font-bold text-brand-blue">Strategic Operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-brand-blue" size={32} />,
                title: "Institutional Coordination",
                desc: "Asset verification, AML/KYC alignment, and signatory introductions for Gold, BTC, and USDT."
              },
              {
                icon: <Zap className="text-brand-blue" size={32} />,
                title: "Clean Energy",
                desc: "Hydrogenii clean-energy systems and sustainable agtech solutions for global infrastructure."
              },
              {
                icon: <Cpu className="text-brand-blue" size={32} />,
                title: "Emerging Tech",
                desc: "Edge AI infrastructure and advanced water purification technologies."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-brand-light border border-brand-blue/5 hover:shadow-2xl transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">{item.title}</h3>
                <p className="text-brand-blue/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-24 bg-brand-blue text-brand-cream overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Globe size={600} className="translate-x-1/2 -translate-y-1/4" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Global Network. <br />
                <span className="text-brand-orange">Institutional Integrity.</span>
              </h2>
              <p className="text-brand-cream/70 mb-12 text-lg">
                We operate at the intersection of traditional finance and the digital future, ensuring compliance and efficiency in every transaction.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-brand-gold mb-2">US-Based</p>
                  <p className="text-sm uppercase tracking-widest opacity-60">Operations</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-brand-gold mb-2">AML/KYC</p>
                  <p className="text-sm uppercase tracking-widest opacity-60">Compliant</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 flex flex-col justify-end">
                  <Droplets className="text-brand-orange mb-4" size={32} />
                  <h4 className="font-bold">Water Tech</h4>
                </div>
                <div className="aspect-square rounded-2xl bg-brand-orange p-6 flex flex-col justify-end">
                  <Zap className="text-white mb-4" size={32} />
                  <h4 className="font-bold text-white">Hydrogenii</h4>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl bg-brand-gold p-6 flex flex-col justify-end">
                  <Shield className="text-brand-blue mb-4" size={32} />
                  <h4 className="font-bold text-brand-blue">Gold/BTC</h4>
                </div>
                <div className="aspect-[4/5] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 flex flex-col justify-end">
                  <Cpu className="text-brand-orange mb-4" size={32} />
                  <h4 className="font-bold">Edge AI</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-brand-blue mb-8">Ready to coordinate your next institutional move?</h2>
          <p className="text-lg text-brand-blue/60 mb-12">
            Connect with our executive leadership to discuss your specific requirements for Valuable Assets and Seekers.
          </p>
          <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-brand-orange text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-brand-orange/20">
            Get Started
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
