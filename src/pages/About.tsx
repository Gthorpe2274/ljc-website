import { motion } from "motion/react";
import { Mail, MapPin, Globe, Shield, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <div className="pt-20">
      {/* Vision Section */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">Our Firm</h2>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-blue mb-8 leading-tight">
                LJC Capital <span className="text-brand-gold italic">Consulting</span>
              </h1>
              <p className="text-xl text-brand-blue/70 mb-8 leading-relaxed">
                Based in the United States, LJC Capital Consulting is a firm specializing in Valuable Assets and Seekers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-1 bg-brand-orange/10 rounded-full">
                    <CheckCircle2 size={18} className="text-brand-orange" />
                  </div>
                  <p className="text-brand-blue/80 font-medium">U.S.-based consulting and institutional coordination.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-1 bg-brand-orange/10 rounded-full">
                    <CheckCircle2 size={18} className="text-brand-orange" />
                  </div>
                  <p className="text-brand-blue/80 font-medium">Global reach with operations in Rosemead, California.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-1 bg-brand-orange/10 rounded-full">
                    <CheckCircle2 size={18} className="text-brand-orange" />
                  </div>
                  <p className="text-brand-blue/80 font-medium">Strict adherence to AML/KYC and U.S. regulatory expectations.</p>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Executive Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-gold rounded-full flex items-center justify-center p-8 text-center shadow-xl">
                <p className="text-brand-blue font-bold text-sm uppercase tracking-widest">Integrity Driven</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">Leadership</h2>
            <p className="text-4xl font-display font-bold text-brand-blue">Executive Management</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Lou Poux */}
            <div className="bg-brand-light rounded-[3rem] p-12 border border-brand-blue/5 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-48 h-48 rounded-full bg-brand-blue flex items-center justify-center text-brand-cream text-6xl font-display border-4 border-brand-gold shrink-0">
                LP
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-brand-blue mb-2">Louis Jerome Poux (Lou)</h3>
                <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-6">CEO &amp; Principal Consultant</p>
                <div className="text-brand-blue/70 mb-8 leading-relaxed space-y-5">
                  <p>
                    As CEO and Principal Consultant of LJC Capital Consulting, Lou provides the strategic vision, institutional discipline, and high‑level advisory leadership that define the firm's global impact. He architects the frameworks, relationships, and execution pathways that enable companies, investors, and counterparties to navigate complex transactions with clarity, confidence, and operational integrity.
                  </p>
                  <p>
                    Lou leads with a dual mandate: <span className="font-semibold text-brand-blue">vision at the top, precision in the details.</span> He sets the strategic direction of the firm while personally overseeing the most critical elements of client engagement—ensuring that every transaction, advisory mandate, and institutional introduction is grounded in compliance, verification, and best‑practice execution.
                  </p>
                  <p>
                    As Principal Consultant, Lou serves as the primary architect of LJC Capital's advisory methodologies. He synthesizes complex corporate, financial, and transactional environments into actionable pathways that support capital strategies, institutional buyer‑seller coordination, and high‑stakes decision‑making. His work spans commodities, digital assets, clean energy, AI, water, and agtech—delivering solutions that are both operationally sound and globally relevant.
                  </p>
                  <div>
                    <p className="font-semibold text-brand-blue mb-3">Lou's leadership is defined by:</p>
                    <ul className="space-y-2 pl-1">
                      {[
                        "Institutional‑grade transaction structuring across commodities, digital assets, and capital markets",
                        "High‑integrity counterpart coordination, ensuring every engagement is verified, compliant, and strategically aligned",
                        "Strategic advisory for corporate repositioning, investor readiness, and market expansion",
                        "Litigation‑ready documentation and procedural rigor that protect clients and counterparties",
                        "Framework development that elevates industry standards and eliminates ambiguity in complex deals",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-orange shrink-0" />
                          <span className="text-brand-blue/80 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    He is the firm's primary relationship architect—cultivating and managing institutional networks, strategic partners, and high‑value counterparties. His approach blends strategic foresight with operational discipline, enabling LJC Capital Consulting to deliver advisory solutions that are polished, credible, and built for real‑world execution.
                  </p>
                  <p>
                    Through his leadership, LJC Capital Consulting operates with a standard of excellence that prioritizes transparency, accountability, and institutional rigor—empowering clients to move through pivotal moments with clarity and momentum.
                  </p>
                </div>
                <div className="flex flex-wrap gap-6">
                  <a href="mailto:Lou@LJCCapitalConsulting.com" className="flex items-center space-x-2 text-brand-blue hover:text-brand-orange transition-colors">
                    <Mail size={18} />
                    <span className="text-sm font-medium">Lou@LJCCapitalConsulting.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Cynthia Allende-Poux */}
            <div className="bg-brand-light rounded-[3rem] p-12 border border-brand-blue/5 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-48 h-48 rounded-full bg-brand-gold flex items-center justify-center text-brand-blue text-6xl font-display border-4 border-brand-blue shrink-0">
                CAP
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-brand-blue mb-2">Cynthia Allende‑Poux</h3>
                <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-6">Co‑CEO &amp; Chief Operating Officer</p>
                <div className="text-brand-blue/70 mb-8 leading-relaxed space-y-5">
                  <p>
                    Cynthia Allende‑Poux serves as Co‑CEO and Chief Operating Officer of LJC Capital Consulting, where she leads the firm's operational architecture and ensures that every advisory engagement meets the highest standards of institutional excellence. She is the integrator who transforms strategic vision into precise, repeatable execution—aligning people, systems, and processes across the entire organization.
                  </p>
                  <p>
                    Cynthia oversees the full operational lifecycle of LJC Capital's work, including compliance, verification, project delivery, internal systems, and cross‑team coordination. Her leadership ensures that every transaction, advisory mandate, and client engagement moves with clarity, discipline, and momentum.
                  </p>
                  <p>
                    Under her direction, the firm's operational divisions—including Operations, Compliance, Client Delivery, Systems Optimization, and Communications—function as a unified engine capable of supporting complex corporate transformations, capital strategies, and institutional buyer‑seller coordination.
                  </p>
                  <p>
                    Cynthia's commitment to quality, scalability, and operational integrity strengthens LJC Capital Consulting's ability to deliver advisory solutions that are polished, credible, and built for real‑world impact.
                  </p>
                </div>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-2 text-brand-blue">
                    <Globe size={18} className="text-brand-orange" />
                    <span className="text-sm font-medium">Operations &amp; Institutional Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Framework Section */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">Operational Framework</h2>
              <h3 className="text-3xl font-display font-bold text-brand-blue mb-6">Commercial Support & Consulting</h3>
              <p className="text-brand-blue/70 leading-relaxed mb-6">
                The Company provides consulting, marketing, and transactional support services in connection with the sale of physical commodities and commercial products. 
              </p>
              <div className="p-6 bg-white rounded-2xl border border-brand-blue/10 shadow-sm">
                <p className="text-brand-blue/80 font-medium italic">
                  "The Company does not engage in the offer, sale, or distribution of securities and does not act as a broker-dealer, placement agent, or investment adviser."
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-brand-blue/5 shadow-sm">
                <h4 className="text-lg font-bold text-brand-blue mb-4 uppercase tracking-widest text-xs">Client Assistance Scope</h4>
                <p className="text-brand-blue/60 mb-6">The Company may assist clients by:</p>
                <ul className="space-y-4">
                  {[
                    "Advising on pricing, marketing, and distribution strategies for commodities and products",
                    "Identifying and introducing potential purchasers or commercial counterparties",
                    "Facilitating communications between buyers and sellers",
                    "Providing general commercial consulting services related to product sales"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-brand-gold font-bold">({['i', 'ii', 'iii', 'iv'][idx]})</span>
                      <span className="text-brand-blue/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 bg-brand-blue text-brand-cream rounded-3xl">
                <h4 className="text-lg font-bold mb-4 uppercase tracking-widest text-xs text-brand-gold">Compensation Structure</h4>
                <p className="text-sm leading-relaxed opacity-80">
                  The Company may receive fees, including transaction-based compensation, in connection with the sale of commodities or commercial products, provided that such transactions do not involve securities or investment contracts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-brand-blue text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Shield className="text-brand-orange mb-6" size={40} />
              <h4 className="text-2xl font-display font-bold mb-4">Confidentiality</h4>
              <p className="text-brand-cream/60 leading-relaxed">
                We maintain the highest standards of discretion and confidentiality for all institutional counterparties and transactions.
              </p>
            </div>
            <div>
              <Globe className="text-brand-gold mb-6" size={40} />
              <h4 className="text-2xl font-display font-bold mb-4">Global Reach</h4>
              <p className="text-brand-cream/60 leading-relaxed">
                Our network spans refineries, mining companies, and institutional buyers across the globe, coordinated from our U.S. headquarters.
              </p>
            </div>
            <div>
              <CheckCircle2 className="text-brand-orange mb-6" size={40} />
              <h4 className="text-2xl font-display font-bold mb-4">Compliance</h4>
              <p className="text-brand-cream/60 leading-relaxed">
                Adherence to U.S. regulatory expectations and AML/KYC protocols is at the core of every operation we coordinate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
