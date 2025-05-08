import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Code, Database, Server, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(aboutRef, { threshold: 0.2 });

  const services = [
    {
      icon: <Code size={24} />,
      title: 'Full Stack Development',
      description: 'Building robust web applications using React.js, Node.js, and modern web technologies with a focus on clean, maintainable code.'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications using React Native, ensuring seamless user experiences across iOS and Android.'
    },
    {
      icon: <Database size={24} />,
      title: 'Database Design',
      description: 'Designing and implementing efficient database structures using MongoDB, Firebase, and SQL databases for scalable applications.'
    },
    {
      icon: <Server size={24} />,
      title: 'API Development',
      description: 'Developing and integrating RESTful APIs, including payment gateways like eSewa, ensuring secure and efficient data communication.'
    }
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              About <span className="text-amber-500">Me</span>
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              I'm a Full Stack Developer currently working at Techyatra Labs, where I'm developing a comprehensive kindergarten management application. With experience in both web and mobile development, I specialize in creating efficient, user-friendly applications using modern technologies.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              My journey includes valuable experience at Asha Tech and an internship at Sarbatra Pvt Ltd, where I honed my skills in Node.js and API development. I've successfully implemented complex features like payment gateway integration (eSewa) in my projects, demonstrating my ability to deliver complete, production-ready solutions.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-slate-900 dark:bg-amber-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Let's Work Together
            </a>
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="w-full h-[400px] bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Developer working on code" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-500 rounded-2xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-900 dark:bg-slate-700 rounded-2xl"></div>
            </div>
          </div>
        </div>
        
        <div id="services" className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              My <span className="text-amber-500">Skills</span>
            </h2>
            <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
              I offer comprehensive development services across the full stack, specializing in modern web and mobile technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-slate-700 dark:text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;