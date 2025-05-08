import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-bold">
              Siddh<span className="text-amber-500">artha</span>
            </a>
            <p className="mt-4 text-slate-400 max-w-xs">
              Creating Advanced, functional website/Apps that help your brand stand out in a crowded marketplace.
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(link => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      className="text-slate-400 hover:text-amber-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                {[, 'Web Development','AppDevlopment', 'UI/UX Design', 'Strategy'].map(service => (
                  <li key={service}>
                    <a 
                      href="#services" 
                      className="text-slate-400 hover:text-amber-400 transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Kathmandu,Nepal</li>
                <li>Siddharthatimalsina@gmail.com</li>
                <li>+977 9840923187</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Siddharth . All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;