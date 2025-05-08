import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink, FileDown } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
  description: string;
  technologies: string[];
};

const Portfolio: React.FC = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(portfolioRef, { threshold: 0.1 });
  
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Techyatra Labs - Kindergarten App',
      category: 'current',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      url: '#',
      description: 'Currently developing a comprehensive kindergarten management application as a full-stack developer at Techyatra Labs.',
      technologies: ['React-native', 'Node.js', 'Full Stack', 'Database Design']
    },
    {
      id: 2,
      title: 'Online Bus Ticketing System',
      category: 'web',
      image: 'https://images.pexels.com/photos/2402648/pexels-photo-2402648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      url: '#',
      description: 'Developed a full-stack bus ticketing platform with React and Firebase, featuring eSewa payment integration.',
      technologies: ['React', 'Firebase', 'eSewa API', 'Tailwind CSS']
    },
    {
      id: 3,
      title: 'Asha Tech Projects',
      category: 'work',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      url: '#',
      description: 'Contributed to various projects during a 2-month tenure, focusing on front-end development and UI improvements.',
      technologies: ['React', 'TypeScript', 'Material UI']
    },
    {
      id: 4,
      title: 'Sarbatra Internship',
      category: 'work',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      url: '#',
      description: 'Gained valuable experience in Node.js and API handling during internship period.',
      technologies: ['Node.js', 'REST APIs', 'MongoDB']
    }
  ];
  
  const filters = [
    { id: 'all', name: 'All' },
    { id: 'current', name: 'Current Work' },
    { id: 'web', name: 'Web Apps' },
    { id: 'work', name: 'Past Experience' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section 
      id="portfolio" 
      ref={portfolioRef}
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-amber-500">Work</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
            Explore my recent projects and work experience. Each project represents a unique challenge and learning opportunity.
          </p>
          <a 
            href="/resume.pdf" 
            download
            className="inline-flex items-center px-6 py-3 mt-6 bg-slate-900 dark:bg-amber-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Download Resume <FileDown size={16} className="ml-2" />
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-amber-100 dark:hover:bg-slate-600'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } transition-all duration-700`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.url} 
                    className="inline-flex items-center text-amber-400 hover:text-amber-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm px-3 py-1 rounded-full shadow-md">
                {filters.find(f => f.id === project.category)?.name}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;