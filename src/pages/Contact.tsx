import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState, FormEvent } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "Institutional Coordination",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("form-name", "contact");
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        alert("Thank you for your inquiry. LJC Capital Consulting will contact you shortly.");
        setFormState({
          name: "",
          email: "",
          company: "",
          subject: "Institutional Coordination",
          message: ""
        });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-brand-blue text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">Connect with <span className="text-brand-orange italic">LJC</span></h1>
            <p className="text-xl text-brand-cream/70 leading-relaxed">
              For institutional inquiries regarding Valuable Assets and Seekers, please use the form below or contact our executive office directly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="p-10 bg-white rounded-[2rem] border border-brand-blue/5 shadow-sm">
                <h3 className="text-xl font-bold text-brand-blue mb-8 uppercase tracking-widest text-xs">Contact Details</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-blue/5 rounded-xl text-brand-orange">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-blue/40 uppercase tracking-widest mb-1">Email</p>
                      <p className="font-bold text-brand-blue">LPoux@LJCCapitalConsulting.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-blue/5 rounded-xl text-brand-orange">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-blue/40 uppercase tracking-widest mb-1">Phone</p>
                      <p className="font-bold text-brand-blue">626 673-0536</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-blue/5 rounded-xl text-brand-orange">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-blue/40 uppercase tracking-widest mb-1">Registered Address</p>
                      <p className="font-bold text-brand-blue">Loganville, GA 30052, USA</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-blue/5 rounded-xl text-brand-orange">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-blue/40 uppercase tracking-widest mb-1">Operating Address</p>
                      <p className="font-bold text-brand-blue">Rosemead, California</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-brand-orange text-white rounded-[2rem] shadow-xl shadow-brand-orange/20">
                <MessageSquare className="mb-6" size={32} />
                <h4 className="text-xl font-bold mb-4">Direct Consultation</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Louis Jerome Poux is available for direct consultation with institutional counterparties. Please specify your asset class or technology interest in your message.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-12 rounded-[3rem] border border-brand-blue/5 shadow-xl">
                <h3 className="text-3xl font-display font-bold text-brand-blue mb-10">Inquiry Form</h3>
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label id="label-name" className="text-xs font-bold text-brand-blue/60 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full px-6 py-4 bg-brand-light border border-brand-blue/10 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label id="label-email" className="text-xs font-bold text-brand-blue/60 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-6 py-4 bg-brand-light border border-brand-blue/10 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors"
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label id="label-company" className="text-xs font-bold text-brand-blue/60 uppercase tracking-widest ml-1">Company / Institution</label>
                      <input 
                        type="text" 
                        name="company"
                        className="w-full px-6 py-4 bg-brand-light border border-brand-blue/10 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors"
                        placeholder="Institutional Name"
                        value={formState.company}
                        onChange={(e) => setFormState({...formState, company: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label id="label-subject" className="text-xs font-bold text-brand-blue/60 uppercase tracking-widest ml-1">Interest Area</label>
                      <select 
                        name="subject"
                        className="w-full px-6 py-4 bg-brand-light border border-brand-blue/10 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors appearance-none"
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      >
                        <option>Institutional Coordination</option>
                        <option>Digital Assets (BTC/USDT)</option>
                        <option>Precious Metals (Gold)</option>
                        <option>Clean Energy / Hydrogenii</option>
                        <option>Emerging Technologies</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label id="label-message" className="text-xs font-bold text-brand-blue/60 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      name="message"
                      rows={6}
                      required
                      className="w-full px-6 py-4 bg-brand-light border border-brand-blue/10 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors resize-none"
                      placeholder="Please describe your requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-brand-blue text-brand-cream rounded-2xl font-bold hover:bg-brand-blue/90 transition-all flex items-center justify-center group"
                  >
                    Send Inquiry
                    <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
