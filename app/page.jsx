"use client"; // Yeh line runtime error fix karegi

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowUpRight, Globe, MonitorSmartphone, 
  TrendingUp, PenTool, Mail, MapPin, 
  ArrowRight, Quote, ChevronLeft, ChevronRight,
  CheckCircle2, Workflow, Activity, BarChart3, Users, Zap,
  Plus, Minus, Send
} from 'lucide-react';

// --- MOCK DATA ---
const services = [
  {
    title: "Premium Digital Architecture",
    description: "Precision-crafted, high-performance websites acting as the luxurious digital face of your established brand.",
    icon: <MonitorSmartphone strokeWidth={1} className="w-10 h-10 text-neutral-800" />,
    action: "View Architecture"
  },
  {
    title: "Enterprise Transformation",
    description: "A complete white-glove transition for legacy businesses moving into the digital ecosystem.",
    icon: <Globe strokeWidth={1} className="w-10 h-10 text-neutral-800" />,
    action: "Explore Transition"
  },
  {
    title: "E-Commerce Engineering",
    description: "Scalable online retail platforms that seamlessly sync with your physical store's POS.",
    icon: <TrendingUp strokeWidth={1} className="w-10 h-10 text-neutral-800" />,
    action: "See E-Commerce"
  },
  {
    title: "Brand Identity",
    description: "Sophisticated visual design that positions your brand at the absolute premium end of the market.",
    icon: <PenTool strokeWidth={1} className="w-10 h-10 text-neutral-800" />,
    action: "Discover Branding"
  }
];

const testimonials = [
  {
    name: "Rajesh Singhania",
    role: "Director, Singhania Textiles",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200",
    quote: "Before Creba Studio, our entire B2B wholesale operation was managed via WhatsApp and Excel. They mapped our physical workflow and built a custom procurement portal. It seamlessly integrated with our existing ERP. It's not just a website; it's reduced our manual processing time by 60%.",
    metric: "60% Less Admin Work"
  },
  {
    name: "Priya Desai",
    role: "Founder, House of Aura Boutique",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200",
    quote: "I was extremely hesitant about taking my luxury boutique online because standard templates look cheap. Shray and Anmol understood exactly how to translate our in-store premium experience into a digital interface. Our online sales now match our flagship store's revenue.",
    metric: "Matched Physical Revenue"
  },
  {
    name: "Vikrant Chauhan",
    role: "CEO, Prime Logistics",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200",
    quote: "We had a legacy tracking system that was frustrating our corporate clients. Creba built a sleek, real-time web dashboard that completely overhauled our client experience. The technical execution was flawless, and they trained our staff on how to use the new backend.",
    metric: "Zero Client Complaints"
  },
  {
    name: "Ananya Sharma",
    role: "Operations Head, Sharma Retail",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    quote: "The biggest fear for a multi-store physical retail chain is inventory syncing. Creba delivered an e-commerce ecosystem that talks directly to our offline billing software. If a shirt sells in the store, it's instantly marked out of stock online. Pure operational brilliance.",
    metric: "100% Inventory Sync"
  },
  {
    name: "Karan Mehta",
    role: "Director, The Grand Heritage Hotels",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "We were losing nearly 30% of our margins to third-party booking aggregators. The team at Creba Studio built us a highly secure, incredibly fast direct-booking portal. Within three months, direct online bookings became our primary source of reservations.",
    metric: "3x Direct Bookings"
  }
];

// --- FOUNDERS DATA ---
// Aapke public folder ki images ab yahan connected hain
const founders = [
  {
    name: "Shray Chaudhary",
    role: "Co-Founder & Director",
    image: "/shray.jpg", 
    bio: "With a profound understanding of business strategy and scaling, Shray architects the roadmap for traditional brands entering the digital space. He ensures every technical solution translates directly to operational efficiency and revenue growth."
  },
  {
    name: "Anmol Mishra",
    role: "Co-Founder & Technical Head",
    image: "/anmol.jpg", 
    bio: "Anmol brings enterprise-grade engineering to legacy businesses. He specializes in bridging the gap between existing physical POS/ERP systems and scalable cloud infrastructure, ensuring flawless synchronization and blazing-fast web performance."
  },
  {
    name: "Vikram",
    role: "Co-Founder & Creative Lead",
    image: "/vikram.jpg", 
    bio: "Vikram translates offline brand prestige into stunning digital interfaces. He meticulously crafts the visual identity and user experience so that a brand's online presence feels just as luxurious and intuitive as its physical counterpart."
  }
];

const processSteps = [
  {
    num: "01",
    title: "System Audit & Strategy",
    desc: "We analyze your offline workflows, POS, and inventory management to design a digital architecture that mirrors your physical operations without friction."
  },
  {
    num: "02",
    title: "Infrastructure Engineering",
    desc: "Building the custom backend and API bridges. We ensure your new digital storefront talks directly to your existing in-store billing software."
  },
  {
    num: "03",
    title: "Premium UI/UX Design",
    desc: "Crafting a bespoke frontend interface that captures your offline brand's prestige, optimized relentlessly for high-ticket conversions."
  },
  {
    num: "04",
    title: "Training & Handover",
    desc: "We don't just hand over the keys. We train your ground staff and management on operating the new digital ecosystem flawlessly."
  }
];

const faqs = [
  {
    question: "Do we need to pause our offline operations during the transition?",
    answer: "Not at all. Our parallel deployment strategy ensures zero downtime. Your physical store operates exactly as before while we build, test, and sync your new digital infrastructure in the background."
  },
  {
    question: "Our staff is not very tech-savvy. How will they manage online orders?",
    answer: "We build intuitive, simplified dashboards specifically designed for non-technical users. Furthermore, phase 04 of our methodology includes comprehensive, hands-on training for your entire ground staff."
  },
  {
    question: "Will the new website integrate with our current billing software (POS)?",
    answer: "Yes. Unlike standard agencies that rely on disjointed plugins, we engineer custom API bridges that allow your physical POS and online store to share inventory and revenue data in real-time."
  },
  {
    question: "How long does a complete offline-to-online transition take?",
    answer: "A standard enterprise transition takes between 6 to 10 weeks, depending on the complexity of your current ERP/POS systems and the scale of your digital storefront requirements."
  }
];

// --- MAIN COMPONENT ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NavLinks = () => (
    <>
      {['home', 'services', 'contact'].map((page) => (
        <button
          key={page}
          onClick={() => navigateTo(page)}
          className={`text-xs tracking-[0.15em] uppercase transition-colors hover:text-neutral-500 ${
            activePage === page ? 'text-neutral-900 font-semibold' : 'text-neutral-400'
          }`}
        >
          {page}
        </button>
      ))}
    </>
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Header - Not fixed, will scroll away. Includes bottom border for separation. */}
      <nav className="absolute top-0 w-full z-50 bg-white/50 py-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Section */}
          <div 
            className="group flex items-center gap-3 cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:rotate-12">
              <img 
                src="/logo.png" 
                alt="Creba Logo" 
                className="w-full h-full object-cover grayscale brightness-150"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <Zap size={20} className="text-white absolute" />
            </div>
            <div className="text-2xl md:text-3xl font-sans font-bold tracking-tighter text-neutral-900">
              <span>CREBA STUDIO.</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLinks />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-neutral-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X strokeWidth={1.5} size={28} /> : <Menu strokeWidth={1.5} size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#FDFBF7] pt-32 px-6 flex flex-col md:hidden h-screen">
          <div className="flex flex-col space-y-8 items-start">
            {['home', 'services', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => navigateTo(page)}
                className={`text-2xl font-sans font-medium tracking-tight capitalize transition-colors ${
                  activePage === page ? 'text-neutral-900' : 'text-neutral-400'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="pt-32 pb-12 min-h-screen">
        {activePage === 'home' && <Home navigateTo={navigateTo} />}
        {activePage === 'services' && <Services />}
        {activePage === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="col-span-1 md:col-span-6">
              <div className="text-3xl font-sans font-medium tracking-tighter text-white mb-6">
                CREBA STUDIO.
              </div>
              <p className="max-w-md text-neutral-400 leading-relaxed text-sm">
                Elevating physical brands into premium digital experiences. We partner with visionary offline businesses to architect their digital future.
              </p>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h4 className="text-white text-xs tracking-[0.15em] uppercase mb-6">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h4 className="text-white text-xs tracking-[0.15em] uppercase mb-6">Support</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-neutral-500" />
                  <a href="mailto:support@crebastudio.in" className="hover:text-white transition-colors">support@crebastudio.in</a>
                </li>
                <li className="pt-4 text-neutral-500 flex items-start gap-2">
                  <MapPin size={16} className="shrink-0 mt-0.5" />
                  <span>IIIT Una, Saloh<br/>Himachal Pradesh 177209</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider">
            <p>&copy; {new Date().getFullYear()} CREBA STUDIO. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer transition-colors">TWITTER</span>
              <span className="hover:text-white cursor-pointer transition-colors">LINKEDIN</span>
              <span className="hover:text-white cursor-pointer transition-colors">INSTAGRAM</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- PAGE COMPONENTS ---

function Home({ navigateTo }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <div className="animate-in fade-in duration-1000">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pt-20 pb-24 text-center relative">
        <div className="hidden md:flex absolute top-10 right-0 bg-white border border-neutral-200 px-4 py-2 rounded-full shadow-xl items-center gap-3 animate-pulse">
          <Activity size={16} className="text-green-600" />
          <span className="text-xs font-semibold tracking-widest uppercase text-neutral-600">Systems Operational</span>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-8 bg-neutral-900"></div>
          <span className="text-xs tracking-[0.2em] uppercase font-semibold">Creba Studio</span>
          <div className="h-[1px] w-8 bg-neutral-900"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-medium font-sans tracking-tighter leading-[1.05] mb-8 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-500 text-gradient">
          Transforming physical legacies into digital empires.
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
          We engineer elite, high-performance digital storefronts and robust web infrastructure for established offline businesses ready to dominate the web.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => navigateTo('contact')}
            className="group relative bg-neutral-900 hover:bg-neutral-800 text-white text-xs tracking-[0.15em] uppercase px-10 py-5 transition-all duration-300 w-full sm:w-auto font-medium shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 rounded-full ring-4 ring-neutral-900/10 hover:ring-neutral-900/30"
          >
            Start Your Transition
          </button>
          <button 
            onClick={() => navigateTo('services')}
            className="group flex items-center justify-center gap-4 text-xs tracking-[0.15em] uppercase font-semibold text-neutral-900 hover:text-neutral-500 transition-colors py-5 w-full sm:w-auto"
          >
            Explore our Services
            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-neutral-900 py-6 overflow-hidden border-y border-neutral-800 relative z-20">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-neutral-400 text-sm tracking-[0.2em] uppercase font-medium w-[200%]">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span>ERP & POS Integration</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
              <span className="text-white font-bold">B2B Wholesale Portals</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
              <span>Direct-to-Consumer Scaling</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
              <span className="text-white font-bold">Operational Automation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Metrics Section */}
      <section className="bg-white py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-neutral-400 mb-4 block">Proven Metrics</span>
              <h2 className="text-3xl md:text-5xl font-sans tracking-tighter font-medium mb-6">Numbers that dictate market dominance.</h2>
              <p className="text-neutral-600 text-lg font-normal tracking-wide leading-relaxed mb-10">
                We don't just launch websites; we launch revenue engines. Our digital infrastructure is built to handle massive scale while drastically cutting down manual operational costs.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-2 text-neutral-900">
                    <Users size={20} className="text-neutral-400" />
                    <span className="text-4xl font-medium tracking-tight">50+</span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-semibold">Offline Brands Digitized</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 text-neutral-900">
                    <Zap size={20} className="text-neutral-400 shrink-0" />
                    <span className="text-lg lg:text-xl font-medium tracking-tight whitespace-nowrap">
                      Growth <span className="text-neutral-300 font-light mx-1">|</span> Build <span className="text-neutral-300 font-light mx-1">|</span> Dominate
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-semibold">Our Core Strategy</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FDFBF7] border border-neutral-200 rounded-3xl p-10 shadow-sm relative">
              <div className="flex justify-between items-center mb-12">
                <h4 className="font-medium tracking-tight text-neutral-900">Quarterly Online Growth</h4>
                <BarChart3 className="text-neutral-400" />
              </div>
              
              <div className="flex items-end justify-between gap-2 h-48 border-b border-neutral-200 pb-2">
                {[
                  { height: '30%', label: 'Q1', value: '15%' },
                  { height: '45%', label: 'Q2', value: '35%' },
                  { height: '65%', label: 'Q3', value: '70%' },
                  { height: '100%', label: 'Q4', value: '210%' }
                ].map((bar, i) => (
                  <div key={i} className="w-1/4 flex flex-col items-center group">
                    <div className="relative w-full px-2 md:px-6 flex justify-center h-48 items-end">
                      <div 
                        className={`w-full rounded-t-md transition-all duration-500 cursor-pointer ${i === 3 ? 'bg-neutral-900 shadow-lg group-hover:bg-neutral-800' : 'bg-neutral-200 group-hover:bg-neutral-300'}`}
                        style={{ height: bar.height }}
                      >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs py-1.5 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                          +{bar.value} Growth
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-neutral-400 mt-4 font-medium uppercase tracking-widest">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Offline Bottleneck */}
      <section className="bg-white py-24 md:py-32 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-sans tracking-tighter font-medium mb-6">The Offline Bottleneck.</h2>
            <p className="text-neutral-500 text-lg font-light max-w-2xl mx-auto tracking-wide">We understand physical retail, manufacturing, and legacy services. Standard websites don't fix real operational problems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                num: "01",
                title: "Manual Order Chaos",
                desc: "Relying on WhatsApp, Excel, and phone calls for B2B orders limits how fast you can scale. It's error-prone and exhausts your team."
              },
              {
                num: "02",
                title: "The Aggregator Trap",
                desc: "Surrendering 20-30% of your margins to third-party platforms (Swiggy, Amazon, MakeMyTrip) because you lack a strong direct digital presence."
              },
              {
                num: "03",
                title: "Fragmented Inventory",
                desc: "Fear of overselling because standard e-commerce templates do not communicate with your physical store's existing billing software."
              }
            ].map((item, i) => (
              <div key={i} className="group bg-neutral-50 p-10 lg:p-12 border border-neutral-200 hover:bg-neutral-950 transition-all duration-500 cursor-pointer flex flex-col justify-between h-full min-h-[400px] rounded-3xl">
                <span className="text-neutral-300 font-light text-6xl md:text-7xl block group-hover:text-neutral-700 transition-colors duration-500 tracking-tighter">{item.num}</span>
                <div className="mt-auto pt-10">
                  <h3 className="text-2xl md:text-[1.7rem] font-medium mb-4 group-hover:text-white transition-colors duration-500 tracking-tight leading-snug">{item.title}</h3>
                  <p className="text-neutral-500 font-normal leading-relaxed group-hover:text-neutral-400 transition-colors duration-500 text-sm tracking-wide">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The Industry vs. Us */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-neutral-400 mb-4 block">The Industry vs. Us</span>
              <h2 className="text-3xl md:text-5xl font-sans tracking-tighter font-medium mb-6">Why traditional web agencies fail offline brands.</h2>
              <p className="text-neutral-500 text-lg font-light max-w-2xl mx-auto tracking-wide">Most agencies build static digital brochures. We engineer complete operational ecosystems.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-neutral-200 rounded-3xl overflow-hidden bg-neutral-50">
              <div className="p-10 md:p-16 relative group transition-opacity duration-500 hover:opacity-100 md:opacity-70">
                <h3 className="text-2xl font-medium tracking-tight mb-10 text-neutral-400">The Standard Agency</h3>
                <ul className="space-y-8">
                  {[
                    "Sells you a generic, off-the-shelf template.",
                    "Ignores your physical store's existing billing software.",
                    "Hands over the website with zero staff training.",
                    "Focuses purely on aesthetics instead of business utility.",
                    "Leaves you dependent on third-party aggregators."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <X className="text-neutral-300 shrink-0 mt-0.5" size={24} strokeWidth={1.5} />
                      <span className="text-neutral-500 font-light tracking-wide text-lg">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-neutral-950 p-10 md:p-16 relative text-white shadow-2xl z-10 scale-100 md:scale-105 md:-ml-2 rounded-3xl transition-transform duration-500 hover:scale-110">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neutral-800 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3 opacity-50"></div>
                <h3 className="text-3xl font-medium tracking-tight mb-10 text-white flex items-center gap-4">
                  <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></span>
                  The Creba Standard
                </h3>
                <ul className="space-y-8">
                  {[
                    "Architects custom digital systems around your operations.",
                    "Engineers deep two-way syncs with your in-store POS & ERP.",
                    "Provides white-glove onboarding and ground staff training.",
                    "Obsesses over reducing your manual administrative load.",
                    "Builds independent infrastructure to bypass aggregator fees."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <CheckCircle2 className="text-white shrink-0 mt-0.5" size={24} strokeWidth={1.5} />
                      <span className="text-neutral-300 font-light tracking-wide text-lg leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-white py-24 md:py-32 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-neutral-400 mb-4 block">Our Methodology</span>
              <h2 className="text-4xl md:text-5xl font-sans tracking-tighter font-medium mb-6">How we digitize your operations.</h2>
              <p className="text-neutral-500 text-lg font-light tracking-wide">A seamless, disruption-free framework designed specifically for operational brick-and-mortar businesses.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative p-8 md:p-10 border border-neutral-200 rounded-3xl bg-neutral-50 hover:bg-neutral-900 hover:text-white transition-colors duration-500 group">
                <span className="text-4xl font-light tracking-tighter text-neutral-300 group-hover:text-neutral-700 transition-colors duration-500 mb-8 block">{step.num}</span>
                <h3 className="text-xl font-medium tracking-tight mb-4">{step.title}</h3>
                <p className="text-neutral-500 font-light text-sm leading-relaxed group-hover:text-neutral-400 transition-colors duration-500">{step.desc}</p>
                {index !== processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-neutral-300 group-hover:bg-neutral-700 transition-colors duration-500 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section - Updated for colorful images */}
      <section className="bg-white py-24 md:py-32 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-neutral-400 mb-4 block">The Leadership</span>
            <h2 className="text-4xl md:text-5xl font-sans tracking-tight font-medium mb-6">The Architects.</h2>
            <p className="text-neutral-600 text-lg font-normal tracking-wide max-w-2xl mx-auto">
              We are a team of engineers, designers, and strategists obsessed with bringing operational elegance to traditional businesses.
            </p>
          </div>

          <div className="space-y-8 md:space-y-12 mt-16 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center bg-[#FDFBF7] p-8 md:p-10 rounded-3xl border border-neutral-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow duration-500">
                <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-200 border border-neutral-200 relative group">
                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 lg:w-3/4">
                  <h2 className="text-3xl md:text-4xl font-sans tracking-tight font-medium mb-2 text-neutral-900">{founder.name}</h2>
                  <p className="text-neutral-500 text-sm font-semibold tracking-[0.15em] uppercase mb-6">{founder.role}</p>
                  <p className="text-neutral-600 font-normal text-lg leading-relaxed tracking-wide">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#FDFBF7] py-32 overflow-hidden border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans tracking-tighter font-medium mb-4">The Digital Impact.</h2>
              <p className="text-neutral-500 text-lg font-light tracking-wide max-w-xl">Real operational results from established founders who trusted us with their transition.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={prevSlide} className="p-4 border border-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors rounded-full text-neutral-600">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="p-4 border border-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors rounded-full text-neutral-600">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative w-full">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center bg-white p-10 md:p-16 border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl">
                    <div className="w-full lg:w-7/12 relative">
                      <Quote className="absolute -top-6 -left-6 text-neutral-100 w-24 h-24 -z-10" />
                      <p className="text-xl md:text-2xl font-light font-sans text-neutral-800 leading-relaxed mb-10 tracking-wide">
                        "{t.quote}"
                      </p>
                      <div className="border border-neutral-200 inline-flex px-6 py-3 text-xs tracking-widest uppercase font-semibold text-neutral-900 bg-neutral-50 rounded-full">
                        {t.metric}
                      </div>
                    </div>
                    <div className="w-full lg:w-5/12 flex flex-col items-start lg:items-center border-t lg:border-t-0 lg:border-l border-neutral-200 pt-10 lg:pt-0">
                      <img src={t.image} alt={t.name} className="w-28 h-28 rounded-full object-cover grayscale mb-6 border border-neutral-200 p-1" />
                      <h4 className="font-medium tracking-tight text-xl text-neutral-900 mb-1">{t.name}</h4>
                      <p className="text-neutral-500 text-sm font-light tracking-wide text-center">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-12 gap-3">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === i ? 'w-10 bg-neutral-900' : 'w-6 bg-neutral-300 hover:bg-neutral-400'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-32 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans tracking-tighter font-medium mb-6">Common inquiries.</h2>
            <p className="text-neutral-500 text-lg font-light tracking-wide">Clarity on how we manage the transition without disrupting your current revenue.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <div key={index} className="border border-neutral-200 rounded-2xl overflow-hidden bg-neutral-50">
                  <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none">
                    <span className="text-lg font-medium tracking-tight text-neutral-900 pr-8">{faq.question}</span>
                    {isOpen ? <Minus className="text-neutral-400 shrink-0" size={20} /> : <Plus className="text-neutral-900 shrink-0" size={20} />}
                  </button>
                  <div className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 md:pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-neutral-500 font-light leading-relaxed tracking-wide">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 py-32 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-sans tracking-tighter font-medium mb-8">Ready to dominate your digital market?</h2>
          <p className="text-neutral-400 text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto">
            Stop losing margins to aggregators and start building your own independent digital infrastructure today.
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="bg-white hover:bg-neutral-200 text-neutral-900 text-sm tracking-widest uppercase px-12 py-6 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center gap-3 mx-auto"
          >
            Schedule a Strategy Call <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

// --- SERVICES PAGE ---
function Services() {
  const specializedServices = [
    {
      title: "Digital Storefronts",
      desc: "Your website is the digital equivalent of your flagship store. We design elite, data-driven interfaces that are beautiful, intuitive, and highly optimized for conversion.",
      features: ["Custom UI/UX Architecture", "Responsive Mobile-First Design", "Headless CMS Integration"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "E-Commerce Ecosystems",
      desc: "We build scalable online retail platforms that seamlessly sync with your physical store's POS. Pure operational brilliance.",
      features: ["ERP & POS Integration", "Secure Payment Gateways", "Inventory Auto-sync"],
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "B2B Wholesale Portals",
      desc: "Ditch the WhatsApp and Excel order sheets. We build custom B2B procurement portals that modernize your entire global supply chain operations.",
      features: ["Custom Ordering Logic", "Client Specific Pricing", "Real-time Order Tracking"],
      img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Brand Identity & UX",
      desc: "We capture the absolute essence of your offline prestige and translate it into a stunning digital interface.",
      features: ["Visual Identity Systems", "Premium Typography", "Interactive Prototyping"],
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
      <div className="max-w-3xl mb-24">
        <div className="h-[1px] w-12 bg-neutral-900 mb-8"></div>
        <h1 className="text-5xl md:text-7xl font-sans tracking-tighter font-medium mb-8">Capabilities.</h1>
        <p className="text-xl text-neutral-500 font-light tracking-wide leading-relaxed">
          We bring a multidisciplinary approach to every project, ensuring your transition from offline to online is technically flawless and visually striking.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-y-24">
        {specializedServices.map((srv, index) => (
          <div key={index} className="flex flex-col group">
            <div className="w-full h-64 md:h-80 overflow-hidden rounded-3xl bg-neutral-200 mb-8 relative">
              <img src={srv.img} alt={srv.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-neutral-400 font-medium text-lg tracking-tight">0{index + 1}.</span>
              <h2 className="text-2xl md:text-3xl font-sans tracking-tight font-medium text-neutral-900">{srv.title}</h2>
            </div>
            <p className="text-neutral-500 font-light tracking-wide text-base leading-relaxed mb-8 flex-grow">{srv.desc}</p>
            <ul className="space-y-3 mt-auto">
              {srv.features.map((feat, i) => (
                <li key={i} className="flex items-center text-xs tracking-widest uppercase font-semibold text-neutral-800">
                  <div className="w-1.5 h-1.5 bg-neutral-900 mr-3 rounded-full"></div> {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- CONTACT PAGE ---
function Contact() {
  return (
    <div className="animate-in fade-in duration-1000 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
        <div>
          <div className="h-[1px] w-12 bg-neutral-900 mb-8"></div>
          <h1 className="text-5xl md:text-7xl font-sans tracking-tighter font-medium mb-8">Start the <br/>conversation.</h1>
          <p className="text-xl text-neutral-500 font-light tracking-wide mb-16 leading-relaxed">
            Ready to scale your legacy business into the digital space? We take on a strictly limited number of projects to ensure uncompromising, white-glove service.
          </p>
          <div className="space-y-12">
            <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-neutral-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-neutral-200 shrink-0">
                  <Mail className="text-neutral-600" size={20} />
                </div>
                <p className="text-xs tracking-[0.15em] uppercase font-semibold text-neutral-400">Official Support</p>
              </div>
              <a href="mailto:support@crebastudio.in" className="text-2xl font-medium tracking-tight hover:text-neutral-500 transition-colors block mt-2">
                support@crebastudio.in
              </a>
            </div>
            <div className="flex items-start gap-4 p-4">
              <MapPin className="text-neutral-400 shrink-0 mt-1" size={24} />
              <div>
                <p className="text-xs tracking-[0.15em] uppercase font-semibold text-neutral-400 mb-2">Headquarters</p>
                <p className="text-lg font-light tracking-wide text-neutral-700 leading-relaxed">IIIT Una, Saloh<br/>Himachal Pradesh 177209</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 md:p-14 border border-neutral-200 rounded-3xl shadow-sm h-fit">
          <h3 className="text-2xl font-medium tracking-tight mb-8">Project Inquiry Form</h3>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input type="text" id="firstName" className="peer w-full bg-neutral-50 border border-neutral-200 rounded-xl py-4 px-5 text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all placeholder-transparent" placeholder="First Name" />
                <label htmlFor="firstName" className="absolute left-5 -top-2.5 bg-white px-1 text-xs text-neutral-400 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-neutral-900 peer-focus:bg-white rounded">First Name</label>
              </div>
              <div className="relative">
                <input type="text" id="lastName" className="peer w-full bg-neutral-50 border border-neutral-200 rounded-xl py-4 px-5 text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all placeholder-transparent" placeholder="Last Name" />
                <label htmlFor="lastName" className="absolute left-5 -top-2.5 bg-white px-1 text-xs text-neutral-400 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-neutral-900 peer-focus:bg-white rounded">Last Name</label>
              </div>
            </div>
            <div className="relative">
              <input type="email" id="email" className="peer w-full bg-neutral-50 border border-neutral-200 rounded-xl py-4 px-5 text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all placeholder-transparent" placeholder="Email Address" />
              <label htmlFor="email" className="absolute left-5 -top-2.5 bg-white px-1 text-xs text-neutral-400 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-neutral-900 peer-focus:bg-white rounded">Email Address</label>
            </div>
            <div className="relative">
              <textarea id="project" rows="4" className="peer w-full bg-neutral-50 border border-neutral-200 rounded-xl py-4 px-5 text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all resize-none placeholder-transparent" placeholder="Details"></textarea>
              <label htmlFor="project" className="absolute left-5 -top-2.5 bg-white px-1 text-xs text-neutral-400 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-neutral-900 peer-focus:bg-white rounded">Project Details</label>
            </div>
            <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm tracking-[0.15em] uppercase font-semibold py-5 transition-all mt-4 rounded-xl flex items-center justify-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] group">
              Submit Inquiry <Send size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}