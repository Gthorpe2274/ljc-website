import { motion } from "motion/react";
import { Shield, Lock, Eye, FileText, Scale, Info } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-blue text-brand-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold tracking-widest uppercase mb-6">
              Legal
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight tracking-tight">
              Privacy <span className="text-brand-orange">Policy</span>
            </h1>
            <p className="text-xl text-brand-cream/80 leading-relaxed">
              At LJC Capital Consulting, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl shadow-brand-blue/5 border border-brand-blue/5">
            <div className="prose prose-lg max-w-none text-brand-blue/80">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <Shield size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-brand-blue m-0">Introduction</h2>
                  <p className="text-sm text-brand-blue/50 m-0">Effective Date: March 29, 2026</p>
                </div>
              </div>
              
              <p className="mb-8">
                LJC Capital Consulting, LLC ("we," "us," or "our") operates the website LJCCapitalConsulting.com. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/10">
                  <div className="flex items-center space-x-3 mb-4 text-brand-blue">
                    <Eye size={20} className="text-brand-orange" />
                    <h3 className="text-lg font-bold m-0">Information Collection</h3>
                  </div>
                  <p className="text-sm leading-relaxed">
                    We collect several different types of information for various purposes to provide and improve our Service to you, including personal identification information (Name, email address, etc.).
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/10">
                  <div className="flex items-center space-x-3 mb-4 text-brand-blue">
                    <Lock size={20} className="text-brand-orange" />
                    <h3 className="text-lg font-bold m-0">Data Security</h3>
                  </div>
                  <p className="text-sm leading-relaxed">
                    The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-brand-blue mb-4 flex items-center">
                <FileText size={20} className="mr-3 text-brand-orange" />
                Use of Data
              </h3>
              <p className="mb-6">
                LJC Capital Consulting uses the collected data for various purposes:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>

              <h3 className="text-xl font-display font-bold text-brand-blue mb-4 flex items-center">
                <Scale size={20} className="mr-3 text-brand-orange" />
                Legal Requirements
              </h3>
              <p className="mb-8">
                LJC Capital Consulting may disclose your Personal Data in the good faith belief that such action is necessary to:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>To comply with a legal obligation</li>
                <li>To protect and defend the rights or property of LJC Capital Consulting</li>
                <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>To protect the personal safety of users of the Service or the public</li>
                <li>To protect against legal liability</li>
              </ul>

              <div className="mt-16 p-8 rounded-3xl bg-brand-blue text-brand-cream relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-display font-bold mb-4 flex items-center relative z-10">
                  <Info size={20} className="mr-3 text-brand-orange" />
                  Contact Us
                </h3>
                <p className="text-brand-cream/80 mb-0 relative z-10">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 space-y-2 relative z-10">
                  <p className="m-0 font-medium">Email: LPoux@LJCCapitalConsulting.com</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
