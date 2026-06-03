/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  ChevronRight,
  Download,
  Send,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  color: string;
  image?: string;
}

interface Skill {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

// --- Components ---

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [blobPos, setBlobPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over a button or link
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, .clay-card');
      setIsHovering(!!isClickable);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlobPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.12, // Slightly slower for more "lag"
        y: prev.y + (mousePos.y - prev.y) * 0.12,
      }));
    }, 16);
    return () => clearInterval(interval);
  }, [mousePos]);

  return (
    <>
      <div 
        className="cursor-dot hidden md:block" 
        style={{ 
          left: mousePos.x, 
          top: mousePos.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
        }} 
      />
      <div 
        className="cursor-blob hidden md:block" 
        style={{ 
          left: blobPos.x, 
          top: blobPos.y,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          backgroundColor: isHovering ? 'var(--color-clay-coral)' : 'var(--color-clay-accent)',
          transform: 'translate(-50%, -50%)',
          opacity: isHovering ? 0.5 : 0.3
        }} 
      />
    </>
  );
};

const BackgroundBlobs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
    <div className="bg-blob bg-clay-lavender top-[-10%] left-[-10%]" />
    <div className="bg-blob bg-clay-coral bottom-[-10%] right-[-10%] [animation-delay:-4s]" />
    <div className="bg-blob bg-clay-mint top-[40%] left-[60%] [animation-delay:-8s]" />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className={`glass-clay flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-full transition-colors duration-300 ${isScrolled ? 'bg-white/10' : 'bg-white/5'}`}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-clay-lavender clay-card flex items-center justify-center text-clay-bg font-heading font-bold text-lg">
            RH
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setActiveLink(link)}
              className={`relative text-sm font-medium transition-colors hover:text-clay-lavender ${activeLink === link ? 'text-clay-lavender' : 'text-clay-muted'}`}
            >
              {link}
              {activeLink === link && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-clay-lavender rounded-full shadow-[0_2px_4px_rgba(201,184,255,0.5)]"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2 bg-clay-coral clay-card text-clay-bg font-bold text-sm hover:scale-105 active:scale-95 transition-all">
            Hire Me
          </button>
          <button 
            className="md:hidden text-clay-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 glass-clay rounded-[28px] p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map(link => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                onClick={() => {
                  setActiveLink(link);
                  setIsMenuOpen(false);
                }}
                className="text-lg font-medium text-clay-white hover:text-clay-lavender py-2 border-b border-white/5"
              >
                {link}
              </a>
            ))}
            <button className="w-full py-4 bg-clay-coral clay-card text-clay-bg font-bold mt-2">
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => {
  const [headingText, setHeadingText] = useState('');
  const fullHeading = "Muhammad Rehan\nDeveloper &\nCyber Enthusiast";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setHeadingText(fullHeading.slice(0, i));
      i++;
      if (i > fullHeading.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-clay-mint clay-pill text-clay-bg font-bold text-sm w-fit">
            👋 Hey, I'm in a mint clay pill badge
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight whitespace-pre-line">
            {headingText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-lg text-clay-muted max-w-lg leading-relaxed">
            17-year-old self-taught developer from Multan, Pakistan. I build clean code and dream in cybersecurity.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="px-8 py-4 bg-clay-lavender clay-card text-clay-bg font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
              View My Work <ChevronRight size={20} />
            </button>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/rehan789567" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 clay-card flex items-center justify-center hover:bg-clay-lavender hover:text-clay-bg transition-all">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/muhammad-rehan-600640393/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 clay-card flex items-center justify-center hover:bg-clay-lavender hover:text-clay-bg transition-all">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center"
        >
          {/* Main Photo Cutout Container */}
          <div className="relative w-72 h-80 md:w-96 md:h-[480px] z-10">
            <div className="absolute inset-0 bg-clay-coral animate-morph opacity-40 blur-2xl scale-110" />
            <div className="absolute inset-0 bg-clay-mint animate-morph [animation-delay:-4s] opacity-40 blur-2xl scale-110" />
            
            {/* The "Cutout" Blob Frame */}
            <div className="w-full h-full bg-clay-lavender animate-morph overflow-hidden shadow-clay border-4 border-white/30 relative">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                alt="Person coding on a laptop" 
                className="w-full h-full object-cover scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Overlay to soften the bottom for a "cutout" feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-clay-lavender/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating Stickers */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-4 md:-left-12 px-4 py-2 bg-clay-yellow clay-card text-clay-bg font-bold text-xs md:text-sm rotate-[-6deg] z-20 hover:scale-110 cursor-default"
          >
            ⚡ C Developer
          </motion.div>
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 -right-4 md:-right-12 px-4 py-2 bg-clay-lavender clay-card text-clay-bg font-bold text-xs md:text-sm rotate-[4deg] z-20 hover:scale-110 cursor-default"
          >
            🔐 Cybersecurity
          </motion.div>
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 left-1/4 px-4 py-2 bg-clay-mint clay-card text-clay-bg font-bold text-xs md:text-sm rotate-[-3deg] z-20 hover:scale-110 cursor-default"
          >
            🌐 Web Dev
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const timeline = [
    { year: '2022', event: 'Started learning C' },
    { year: '2023', event: 'Built first websites' },
    { year: '2024', event: 'Started freelancing' },
    { year: '2025', event: 'Exploring cybersecurity' },
    { year: '2026', event: 'Board exams + leveling up' },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-clay-lavender clay-card p-8 md:p-12 text-clay-bg"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 flex flex-col gap-6">
            <span className="font-mono text-sm opacity-70">// about.me</span>
            <h2 className="text-4xl font-heading font-bold">Who Am I?</h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed opacity-90">
              <p>
                I'm a 17-year-old self-taught developer based in Multan, Pakistan. Currently in Class 10, I've spent the last few years diving deep into the world of technology and code.
              </p>
              <p>
                My journey began with C programming, where I learned the fundamentals of logic and memory. Since then, I've expanded into web development and freelancing, always looking for new challenges to solve.
              </p>
              <p>
                Looking ahead, I'm passionate about cybersecurity. I believe that in an AI-driven world, human judgment and ethical hacking are more critical than ever.
              </p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-clay-bg/20 flex flex-col gap-8">
            {timeline.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-4 h-4 bg-clay-bg rounded-full shadow-clay" />
                <span className="font-heading font-bold text-sm block">{item.year}</span>
                <span className="text-sm opacity-80">{item.event}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Skills = () => {
  const skills: Skill[] = [
    { name: 'C Programming', description: 'Where I started. Logic, memory, control.', icon: <Cpu />, color: 'bg-clay-lavender' },
    { name: 'HTML5', description: 'Structure is everything.', icon: <Globe />, color: 'bg-clay-coral' },
    { name: 'CSS3', description: 'I make things look like they belong.', icon: <Code2 />, color: 'bg-clay-blue' },
    { name: 'UI/UX Design', description: 'Claymorphism, glassmorphism, you name it.', icon: <ShieldCheck />, color: 'bg-clay-yellow' },
    { name: 'Git & GitHub', description: 'Version control is a superpower.', icon: <Github />, color: 'bg-clay-mint' },
    { name: 'Cybersecurity', description: 'The endgame. Learning every day.', icon: <ShieldCheck />, color: 'bg-clay-lavender' },
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">What I Work With</h2>
        <div className="w-32 h-3 bg-clay-coral clay-pill" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`${skill.color} clay-card p-8 text-clay-bg group cursor-default`}
          >
            <div className="w-14 h-14 bg-white/30 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-[-10deg] transition-transform">
              {React.cloneElement(skill.icon as React.ReactElement, { size: 32 })}
            </div>
            <h3 className="text-2xl font-heading font-bold mb-2">{skill.name}</h3>
            <p className="opacity-80 leading-relaxed">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`${project.color} clay-card overflow-hidden text-clay-bg flex flex-col`}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div className="p-4">
        <div className="rounded-[20px] overflow-hidden shadow-inner bg-white/20 aspect-video relative group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="p-8 pt-4 flex flex-col gap-4 flex-grow">
        <h3 className="text-3xl font-heading font-bold">{project.title}</h3>
        <p className="opacity-80 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/30 clay-pill text-xs font-bold">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto pt-6">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3 bg-clay-bg text-clay-white clay-card text-sm font-bold flex items-center gap-2 hover:scale-105 transition-all"
          >
            View Code <Github size={16} />
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-white/20 text-clay-bg clay-card text-sm font-bold flex items-center gap-2 hover:scale-105 transition-all"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'My own corner of the internet. Claymorphism, animations, and personality.',
      tags: ['HTML', 'CSS', 'JS', 'React', 'Tailwind'],
      github: 'https://github.com/rehan789567',
      color: 'bg-clay-lavender',
      image: 'https://picsum.photos/seed/portfolio/800/500'
    },
    {
      title: 'ATM Machine Interface',
      description: 'C based logic with a modern interface. Simulates banking operations securely.',
      tags: ['HTML', 'CSS', 'JS', 'C', 'Logic'],
      github: 'https://github.com/rehan789567',
      color: 'bg-clay-coral',
      image: 'https://picsum.photos/seed/atm-machine/800/500'
    },
    {
      title: 'Neo Calculator',
      description: 'A glassmorphic calculator with advanced functions and smooth neumorphic elements.',
      tags: ['HTML', 'CSS', 'JS', 'Glassmorphism'],
      github: 'https://github.com/rehan789567',
      color: 'bg-clay-yellow',
      image: 'https://picsum.photos/seed/calculator/800/500'
    },
    {
      title: 'Vault App',
      description: 'A secure digital vault for managing sensitive information with encrypted local storage.',
      tags: ['HTML', 'CSS', 'JS', 'Encryption'],
      github: 'https://github.com/rehan789567',
      color: 'bg-clay-blue',
      image: 'https://picsum.photos/seed/vault/800/500'
    },
    {
      title: 'Number Guessing Game',
      description: 'Interactive browser-based game with levels and dynamic feedback systems.',
      tags: ['HTML', 'CSS', 'JS', 'Gaming'],
      github: 'https://github.com/rehan789567',
      color: 'bg-clay-mint',
      image: 'https://picsum.photos/seed/game/800/500'
    },
    {
      title: 'Projects Web',
      description: 'The central hub where all my web and software projects are hosted and categorized.',
      tags: ['HTML', 'CSS', 'JS', 'Hub'],
      github: 'https://rehan789567.github.io/projects-web/',
      color: 'bg-clay-lavender',
      image: 'https://picsum.photos/seed/web-hub/800/500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Things I've Built</h2>
        <div className="w-32 h-3 bg-clay-mint clay-pill" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div key={project.title}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrerpgka", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-5xl font-heading font-bold">Let's Build Something</h2>
          <p className="text-lg text-clay-muted leading-relaxed">
            I'm open to freelance work, collaborations, and just a good conversation about tech.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <a href="https://github.com/rehan789567" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 clay-card flex items-center justify-center group-hover:bg-clay-lavender group-hover:text-clay-bg transition-all">
                <Github size={24} />
              </div>
              <span className="font-medium text-clay-muted group-hover:text-clay-white transition-colors">github.com/rehan789567</span>
            </a>
            <a href="https://linkedin.com/in/muhammad-rehan-600640393/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 clay-card flex items-center justify-center group-hover:bg-clay-lavender group-hover:text-clay-bg transition-all">
                <Linkedin size={24} />
              </div>
              <span className="font-medium text-clay-muted group-hover:text-clay-white transition-colors">linkedin.com/in/muhammad-rehan</span>
            </a>
            <a href="mailto:muhammadrehan82008@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 clay-card flex items-center justify-center group-hover:bg-clay-lavender group-hover:text-clay-bg transition-all">
                <Mail size={24} />
              </div>
              <span className="font-medium text-clay-muted group-hover:text-clay-white transition-colors">muhammadrehan82008@gmail.com</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-clay-yellow clay-card p-8 md:p-10 text-clay-bg"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm ml-2">Name</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Your Name"
                className="bg-white/60 rounded-2xl px-6 py-4 shadow-inner border-none focus:ring-4 focus:ring-clay-accent/30 outline-none transition-all placeholder:text-clay-bg/40"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm ml-2">Email</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="your@email.com"
                className="bg-white/60 rounded-2xl px-6 py-4 shadow-inner border-none focus:ring-4 focus:ring-clay-accent/30 outline-none transition-all placeholder:text-clay-bg/40"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm ml-2">Message</label>
              <textarea 
                name="message"
                required
                rows={4}
                placeholder="What's on your mind?"
                className="bg-white/60 rounded-2xl px-6 py-4 shadow-inner border-none focus:ring-4 focus:ring-clay-accent/30 outline-none transition-all placeholder:text-clay-bg/40 resize-none"
              />
            </div>
            <button 
              type="submit"
              className={`mt-4 py-4 clay-card font-bold text-lg flex items-center justify-center gap-2 transition-all ${isSubmitted ? 'bg-clay-mint' : 'bg-clay-coral'}`}
            >
              {isSubmitted ? (
                <>Sent! <CheckCircle2 size={24} /></>
              ) : (
                <>Send Message <Send size={20} /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/5 px-6">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
      <div className="w-12 h-12 bg-clay-lavender clay-card flex items-center justify-center text-clay-bg font-heading font-bold text-xl">
        RH
      </div>
      <p className="text-clay-muted text-center max-w-md">
        Built with React, Tailwind & too much caffeine ☕
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-clay-muted hover:text-clay-white transition-colors">
            {link}
          </a>
        ))}
      </div>
      <div className="text-xs text-clay-muted/60 text-center">
        © 2026 Muhammad Rehan · Made in Multan, Pakistan 🇵🇰
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-clay-accent selection:text-white">
      <CustomCursor />
      <BackgroundBlobs />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
