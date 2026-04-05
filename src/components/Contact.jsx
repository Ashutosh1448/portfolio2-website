import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Copy, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ashutoshagrawal1448@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // TODO: Replace with real EmailJS keys
    emailjs.sendForm('service_rsjrfgf', 'template_74wepzq', formRef.current, 'Jeg6629UTtC5xnzVF')
      .then(() => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
      }, (error) => {
          console.error(error);
          setLoading(false);
          setError(true);
      });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-text max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            {/* EMAIL CARD */}
            <div className="glass-effect p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors flex flex-col gap-6">
              <div className="flex flex-col xl:flex-row xl:items-center gap-4">
                <a href="mailto:ashutoshagrawal1448@gmail.com" title="Send Email" className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <Mail size={24} />
                </a>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-1">Email</h4>
                  <a href="mailto:ashutoshagrawal1448@gmail.com" className="text-muted-text hover:text-primary transition-colors block break-all">
                    ashutoshagrawal1448@gmail.com
                  </a>
                </div>
              </div>
              <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white font-medium transition-colors border border-white/5">
                {copied ? <CheckCircle2 size={16} className="text-green-400"/> : <Copy size={16} />}
                <span className={copied ? "text-green-400" : "text-muted-text"}>{copied ? "Email Copied!" : "Copy Email Address"}</span>
              </button>
            </div>
            
            {/* SOCIAL PROFILES CARD */}
            <div className="glass-effect p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
              <h4 className="text-xl font-bold text-white mb-4">Connect with me</h4>
              <div className="flex flex-col xl:flex-row gap-4">
                <a href="https://www.linkedin.com/in/ashutosh-agrawal-b90a9a296" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-white font-medium transition-colors border border-white/5 hover:border-primary hover:text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
                <a href="https://github.com/Ashutosh1448" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-white font-medium transition-colors border border-white/5 hover:border-primary hover:text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* LOCATION CARD */}
            <div className="glass-effect p-8 rounded-2xl flex items-start gap-4 border border-white/5 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex shrink-0 items-center justify-center">
                <MapPin size={24} />
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-xl font-bold text-white mb-1">Location</h4>
                <p className="text-muted-text">Bhopal</p>
              </div>
            </div>

            {/* PHONE CARD */}
            <div className="glass-effect p-8 rounded-2xl flex items-start gap-4 border border-white/5 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex shrink-0 items-center justify-center">
                <Phone size={24} />
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-xl font-bold text-white mb-1">Phone</h4>
                <p className="text-muted-text">+91 9425145676</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex-[1.5] glass-effect p-8 md:p-12 rounded-2xl border border-white/5 flex flex-col gap-6"
          >
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-muted-text mb-2">Name</label>
              <input type="text" name="user_name" required className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
            </div>
            
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-muted-text mb-2">Email</label>
              <input type="email" name="user_email" required className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-text mb-2">Message</label>
              <textarea name="message" required rows={5} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Your message..."></textarea>
            </div>
            
            <button type="submit" disabled={loading} className="w-full bg-primary text-white font-medium py-4 rounded-lg hover:bg-primary/90 transition-colors flex justify-center items-center gap-2">
              {loading ? 'Sending Message...' : 'Send Message'} {!loading && <Send size={18} />}
            </button>
            
            {success && <p className="text-green-400 text-center text-sm font-medium mt-2">Message sent successfully!</p>}
            {error && <p className="text-red-400 text-center text-sm font-medium mt-2">Failed to send message. Please try again.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
