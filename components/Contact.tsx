import React from 'react';
import { Phone, Mail, Globe, Instagram, Facebook, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-3xl overflow-hidden p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Info (Left) */}
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold text-violet-400 tracking-widest uppercase mb-3">Get in Touch</h2>
                <h3 className="text-4xl font-bold text-white mb-6">Let's start a project together</h3>
                <p className="text-gray-400">Reach out to us for a consultation or just to say hello. We are always open to discussing new projects and creative ideas.</p>
              </div>

              <div className="space-y-6">
                <a href="tel:+916235448211" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-violet-600 transition-colors">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg">+91 6235448211</span>
                </a>
                
                <a href="https://wa.me/916235448211" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <span className="text-lg">+91 6235448211 (WhatsApp)</span>
                </a>

                <a href="mailto:contact@zeldic.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg">contact@zeldic.com</span>
                </a>

                 <a href="https://www.zeldic.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                    <Globe size={20} />
                  </div>
                  <span className="text-lg">www.zeldic.com</span>
                </a>
              </div>
              
              <div className="pt-8 flex gap-4">
                 <a href="https://instagram.com/zeldic.ads" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 transition-all">
                   <Instagram size={24} />
                 </a>
                 <a href="https://www.facebook.com/profile.php?id=61585040540166" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 transition-all">
                   <Facebook size={24} />
                 </a>
              </div>
            </div>

            {/* Minimal Form (Right) */}
            <div className="flex flex-col justify-center">
               <form className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-sm text-gray-400 ml-1">Name</label>
                     <input type="text" className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-gray-500 transition-all" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm text-gray-400 ml-1">Email</label>
                     <input type="email" className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-gray-500 transition-all" placeholder="john@example.com" />
                   </div>
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-sm text-gray-400 ml-1">Service Interest</label>
                   <select className="w-full px-4 py-3 rounded-xl input-glass text-white bg-black/50 transition-all appearance-none cursor-pointer">
                     <option>Social Media Marketing</option>
                     <option>Web Development</option>
                     <option>SEO / SEM</option>
                     <option>Branding</option>
                     <option>Other</option>
                   </select>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm text-gray-400 ml-1">Message</label>
                   <textarea rows={4} className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-gray-500 transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                 </div>

                 <button type="submit" className="w-full py-4 bg-white hover:bg-gray-200 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 mt-4">
                   <span>Send Message</span>
                   <Send size={18} />
                 </button>
               </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;