import { motion } from "motion/react";
import { Shield, Zap, Cpu, Droplets, BarChart3, Globe, CheckCircle2 } from "lucide-react";

const services = [
  {
    category: "Institutional Coordination",
    icon: <Shield className="text-brand-orange" size={40} />,
    items: [
      {
        title: "Precious Metals (Gold)",
        desc: "Coordination between refineries, vaults, sovereigns, and institutional buyers. We facilitate secure and compliant physical asset movements.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Digital Assets (BTC/USDT)",
        desc: "Expert coordination for mining companies, corporate treasuries, OTC desks, and custodians. Specialized in high-volume BTC and USDT transactions.",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Transaction Lifecycle",
        desc: "Asset verification, AML/KYC alignment, CIS exchange, and signatory introductions. We filter brokers to ensure direct and efficient communication.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    category: "Clean Energy & Emerging Tech",
    icon: <Zap className="text-brand-gold" size={40} />,
    items: [
      {
        title: "Hydrogenii Systems",
        desc: "Implementation and consulting for next-generation clean-energy hydrogen systems for industrial and commercial use.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Edge AI Infrastructure",
        desc: "Deployment of localized AI processing power to reduce latency and enhance data security for institutional clients.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Water & Agtech",
        desc: "Advanced water purification technologies and sustainable aquaponics solutions for food and resource security.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
];

export function Services() {
  return (
    <div className="pt-20">
      <section className="bg-brand-blue py-24 text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">Specialized <span className="text-brand-orange italic">Solutions</span></h1>
            <p className="text-xl text-brand-cream/70 leading-relaxed">
              LJC Capital Consulting provides high-level coordination and strategic consulting across two primary pillars: va;uable assest and seekers of such from our relationships
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((section, sIdx) => (
            <div key={sIdx} className="mb-24 last:mb-0">
              <div className="flex items-center space-x-4 mb-12">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-brand-blue/5">
                  {section.icon}
                </div>
                <h2 className="text-3xl font-display font-bold text-brand-blue">{section.category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.items.map((item, iIdx) => (
                  <motion.div
                    key={iIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: iIdx * 0.1 }}
                    className="bg-white rounded-3xl border border-brand-blue/5 shadow-sm hover:shadow-xl transition-all group overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale hover:grayscale-0"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-brand-blue mb-4 group-hover:text-brand-orange transition-colors">{item.title}</h3>
                      <p className="text-brand-blue/60 leading-relaxed mb-6">{item.desc}</p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-sm text-brand-blue/80">
                          <CheckCircle2 size={16} className="text-brand-gold mr-2" />
                          Compliance First
                        </li>
                        <li className="flex items-center text-sm text-brand-blue/80">
                          <CheckCircle2 size={16} className="text-brand-gold mr-2" />
                          Institutional Grade
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-brand-blue mb-8">Our Coordination <span className="text-brand-orange italic">Process</span></h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Asset Verification", desc: "Rigorous verification of proof of assets and control." },
                  { step: "02", title: "AML/KYC Alignment", desc: "Ensuring all parties meet strict regulatory compliance standards." },
                  { step: "03", title: "Direct Introduction", desc: "Facilitating direct signatory communication after broker filtration." },
                  { step: "04", title: "Execution Support", desc: "Providing ongoing consulting throughout the transaction lifecycle." }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-6">
                    <span className="text-4xl font-display font-bold text-brand-gold/30">{item.step}</span>
                    <div>
                      <h4 className="text-lg font-bold text-brand-blue mb-2">{item.title}</h4>
                      <p className="text-brand-blue/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-blue p-12 rounded-[3rem] text-brand-cream relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <BarChart3 className="text-brand-gold mb-8" size={48} />
              <h3 className="text-3xl font-display font-bold mb-6">Strategic Advantage</h3>
              <p className="text-brand-cream/70 mb-8 leading-relaxed">
                We are not a financial institution, custodian, or escrow. We are strategic coordinators who ensure that high-value transactions are executed with the highest level of integrity and compliance.
              </p>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-sm italic">"Our core function is to bridge the gap between institutional sellers and buyers through meticulous alignment and verification."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
