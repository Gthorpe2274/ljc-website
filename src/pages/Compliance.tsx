import { motion } from "motion/react";
import { Shield, FileText, CheckCircle2, AlertCircle, Lock } from "lucide-react";

export function Compliance() {
  return (
    <div className="pt-20">
      <section className="bg-brand-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-blue mb-8">Compliance & <span className="text-brand-orange italic">Integrity</span></h1>
              <p className="text-xl text-brand-blue/70 mb-8 leading-relaxed">
                LJC Capital Consulting operates with a "Compliance First" methodology. We strictly adhere to AML/KYC protocols and U.S. regulatory expectations to ensure the safety and legitimacy of every institutional coordination.
              </p>
              <div className="p-8 bg-white rounded-3xl border border-brand-blue/10 shadow-sm">
                <div className="flex items-center space-x-3 mb-4 text-brand-orange">
                  <Shield size={24} />
                  <h3 className="font-bold uppercase tracking-widest text-sm">Regulatory Adherence</h3>
                </div>
                <p className="text-brand-blue/60 text-sm leading-relaxed">
                  Counterparties must provide proof of asset control, Client Information Sheet (CIS), and signatory ID prior to any formal communication. This establishes identity and authority at the outset.
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Lock />, title: "Confidentiality", desc: "Non-disclosure and data protection at every stage." },
                { icon: <FileText />, title: "CIS Protocol", desc: "Standardized Client Information Sheet exchange." },
                { icon: <CheckCircle2 />, title: "AML/KYC", desc: "Rigorous Anti-Money Laundering checks." },
                { icon: <AlertCircle />, title: "Broker Filtration", desc: "Eliminating intermediaries for direct execution." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-brand-blue text-brand-cream rounded-3xl">
                  <div className="text-brand-gold mb-4">{item.icon}</div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-brand-cream/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-brand-blue mb-4">Purpose of CIS</h2>
            <p className="text-brand-blue/60">The Client Information Sheet (CIS) is a critical document for institutional operations.</p>
          </div>

          <div className="space-y-6">
            {[
              "Establishes identity and authority prior to signatory communication.",
              "Required for institutional sellers, buyers, and compliance teams.",
              "Essential for legal departments and OTC desks to perform due diligence.",
              "Ensures all parties are aligned with U.S. regulatory expectations."
            ].map((text, idx) => (
              <div key={idx} className="flex items-center space-x-4 p-6 bg-brand-light rounded-2xl border border-brand-blue/5">
                <div className="w-8 h-8 rounded-full bg-brand-blue text-brand-cream flex items-center justify-center font-bold shrink-0">
                  {idx + 1}
                </div>
                <p className="text-brand-blue/80 font-medium">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 bg-brand-orange/5 rounded-[3rem] border border-brand-orange/20">
            <h3 className="text-2xl font-display font-bold text-brand-blue mb-4 flex items-center">
              <AlertCircle className="text-brand-orange mr-3" />
              Important Notice
            </h3>
            <p className="text-brand-blue/70 leading-relaxed">
              LJC Capital Consulting is <strong>not</strong> a financial institution, custodian, or escrow service. We are a consulting and institutional coordination firm. We do not hold client funds or assets directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
