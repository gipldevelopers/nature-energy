import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Cog,
  Factory,
  Flame,
  Fuel,
  Globe2,
  Hammer,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Recycle,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  TestTube2,
  TrendingUp,
  Truck,
  Wrench,
  X,
} from 'lucide-react';
import {
  blogs,
  faqGroups,
  galleryImages,
  imageSet,
  industries,
  processSteps,
  products,
  projects,
  trustStats,
} from './data/siteData';
import './App.css';

const Motion = motion;

const topNav = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Industries', path: '/industries' },
  { label: 'Technology', path: '/technology' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const cardBase =
  'rounded-2xl border border-[#DCE3E6] bg-[#FDFEFD]/80 backdrop-blur-xl shadow-[0_16px_36px_rgba(53,70,83,0.14)]';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fuelFactor = { diesel: 0.5, furnace: 0.46, gas: 0.4 };
const sizeFactor = { small: 0.88, medium: 1, large: 1.12 };
const loadFactor = { shift: 0.82, extended: 1, continuous: 1.1 };

function formatINR(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start = 0;

    const tick = (time) => {
      if (!start) {
        start = time;
      }
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, target]);

  return value;
}

function SafeImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = imageSet.heroBg;
      }}
    />
  );
}

function Reveal({ className = '', children, delay = 0 }) {
  return (
    <Motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.22 }}
      transition={{ delay }}
    >
      {children}
    </Motion.div>
  );
}

function SectionTitle({ label, title, text }) {
  return (
    <Reveal className="max-w-4xl">
      {label ? (
        <span className="inline-flex rounded-full border border-[#DCE3E6] bg-[#F2F6F7] px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#066F82]">
          {label}
        </span>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#354653] md:text-4xl">{title}</h2>
      {text ? <p className="mt-3 text-base leading-relaxed text-[#5B707E] md:text-lg">{text}</p> : null}
    </Reveal>
  );
}

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        left: (index * 19) % 100,
        top: (index * 29) % 100,
        size: (index % 3) + 2,
        duration: 5 + (index % 6),
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <Motion.span
          key={particle.id}
          className="absolute rounded-full bg-[#9EABAE]/40"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size * 2}px`,
            height: `${particle.size * 2}px`,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: particle.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function MagneticLink({ to, children, variant = 'primary', className = '' }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const base =
    variant === 'primary'
      ? 'border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] text-[#FDFEFD]'
      : 'border-[#DCE3E6] bg-[#FDFEFD]/12 text-[#FDFEFD]';

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.12, y: y * 0.18 });
  };

  return (
    <Motion.div
      ref={ref}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 320, damping: 18, mass: 0.6 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className="inline-flex"
    >
      <Link
        to={to}
        className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition hover:scale-[1.02] ${base} ${className}`}
      >
        {children}
      </Link>
    </Motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || location.pathname !== '/';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[120] transition-all duration-300 ${
        solid
          ? 'border-b border-[#DCE3E6] bg-[#FDFEFD]/95 shadow-[0_10px_30px_rgba(53,70,83,0.12)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 w-[min(1280px,94vw)] items-center justify-between gap-4">
        <Link to="/" className="inline-flex items-baseline gap-1 text-[#354653]">
          <span className="text-xl font-semibold text-[#078DA4]">Nature</span>
          <span className="text-xl font-bold">Energy</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {topNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-[#078DA4]/12 text-[#066F82]'
                    : solid
                      ? 'text-[#5B707E] hover:bg-[#F2F6F7] hover:text-[#354653]'
                      : 'text-[#FDFEFD]/90 hover:bg-[#FDFEFD]/10 hover:text-[#FDFEFD]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-5 py-3 text-sm font-semibold text-[#FDFEFD] shadow-[0_10px_24px_rgba(6,111,130,0.3)]"
          >
            Get Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#DCE3E6] bg-[#FDFEFD]/90 text-[#354653] lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <Motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed right-0 top-20 z-[140] h-[calc(100svh-80px)] w-[min(330px,92vw)] border-l border-[#DCE3E6] bg-[#FDFEFD] p-5 shadow-[0_20px_40px_rgba(53,70,83,0.2)]"
          >
            <div className="grid gap-2">
              {topNav.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl border px-4 py-3 text-sm font-medium ${
                      isActive
                        ? 'border-[#078DA4]/40 bg-[#078DA4]/12 text-[#066F82]'
                        : 'border-[#DCE3E6] text-[#354653]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-5 inline-flex w-full justify-center rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-5 py-3 text-sm font-semibold text-[#FDFEFD]"
            >
              Get Quote
            </Link>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <Motion.div
      className="fixed inset-x-0 top-0 z-[180] h-1 origin-left bg-gradient-to-r from-[#078DA4] to-[#066F82]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-[130] flex flex-col items-end gap-3">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-full border border-[#078DA4] bg-[#078DA4] px-4 py-3 text-sm font-semibold text-[#FDFEFD] shadow-[0_14px_28px_rgba(6,111,130,0.28)]"
      >
        <Calculator size={16} />
        Get Quote
      </Link>
      <a
        href="https://wa.me/919800000000"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-[#2BB673] bg-[#2BB673] px-4 py-3 text-sm font-semibold text-[#FDFEFD] shadow-[0_14px_28px_rgba(43,182,115,0.28)]"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>
    </div>
  );
}

function Footer() {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Products', to: '/products' },
    { label: 'Industries', to: '/industries' },
    { label: 'Technology', to: '/technology' },
    { label: 'Projects', to: '/projects' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Blog', to: '/blog' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="mt-10 border-t border-[#DCE3E6] bg-[#F2F6F7]">
      <div className="mx-auto grid w-[min(1280px,94vw)] gap-8 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <h3 className="text-2xl font-bold text-[#354653]">
            <span className="text-[#078DA4]">Nature</span> Energy
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5B707E]">
            Premium industrial biomass pellet burner systems for boilers, dryers, ovens, and high-demand process
            heating applications.
          </p>
          <div className="mt-4 grid gap-2 text-sm text-[#5B707E]">
            <p className="inline-flex items-center gap-2">
              <Phone size={15} /> +91 98XXX XXXXX
            </p>
            <p className="inline-flex items-center gap-2">
              <Mail size={15} /> sales@natureenergy.in
            </p>
            <p className="inline-flex items-center gap-2">
              <MapPin size={15} /> Ahmedabad, Gujarat, India
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#354653]">Quick Links</h4>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-[#5B707E]">
            {links.map((item) => (
              <Link key={item.to} to={item.to} className="transition hover:text-[#066F82]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={`${cardBase} p-5`}>
          <h4 className="text-lg font-semibold text-[#354653]">Need Technical Consultation?</h4>
          <p className="mt-2 text-sm leading-relaxed text-[#5B707E]">
            Share your current fuel type, monthly utility cost, and heating load. Our engineering team will suggest the
            right biomass system with expected savings.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-4 py-2 text-sm font-semibold text-[#FDFEFD]"
          >
            Request Consultation
          </Link>
        </div>
      </div>
      <div className="border-t border-[#DCE3E6] py-4 text-center text-xs text-[#9EABAE]">
        © {new Date().getFullYear()} Nature Energy. All rights reserved.
      </div>
    </footer>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={ref} className="relative overflow-hidden px-[3vw]">
      <div className="relative min-h-[calc(100svh-88px)] overflow-hidden rounded-[28px] border border-[#DCE3E6]">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster={imageSet.heroBg}>
          <source src="https://cdn.coverr.co/videos/coverr-industrial-heating-9710/1080p.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(53,70,83,0.9),rgba(6,111,130,0.66))]" />
        <div className="industrial-texture absolute inset-0" />
        <ParticleField />

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-88px)] w-[min(1280px,94vw)] grid-cols-1 items-center gap-8 py-8 xl:grid-cols-[1.06fr_0.94fr]">
          <Reveal>
            <span className="inline-flex rounded-full border border-[#DCE3E6]/30 bg-[#FDFEFD]/12 px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#FDFEFD]">
              Industrial Biomass Energy
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.04] text-[#FDFEFD] md:text-6xl">
              High Efficiency Biomass Pellet Burners for Industrial Heating
            </h1>
            <h2 className="mt-4 text-xl font-medium leading-relaxed text-[#FDFEFD]/92 md:text-2xl">
              Reduce Industrial Fuel Costs by up to 50% with Advanced Biomass Energy Technology
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#FDFEFD]/84 md:text-lg">
              Nature Energy designs and manufactures advanced biomass pellet burner systems that replace traditional
              diesel and furnace oil burners used in industrial heating applications.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <MagneticLink to="/contact" variant="primary">
                Get Free Quote <ArrowRight size={15} />
              </MagneticLink>
              <MagneticLink to="/products" variant="ghost">
                Explore Products
              </MagneticLink>
            </div>

            <Motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4"
            >
              {trustStats.map((item) => (
                <Motion.article
                  key={item.label}
                  variants={fadeUp}
                  className="rounded-xl border border-[#DCE3E6]/35 bg-[#FDFEFD]/12 p-3 backdrop-blur-md"
                >
                  <p className="text-lg font-semibold text-[#FDFEFD]">{item.value}</p>
                  <p className="text-xs text-[#FDFEFD]/80">{item.label}</p>
                </Motion.article>
              ))}
            </Motion.div>
          </Reveal>

          <Motion.div style={{ y: parallaxY }} className="relative hidden xl:block">
            <div className={`relative p-6 ${cardBase} border-[#DCE3E6]/40 bg-[#FDFEFD]/18`}>
              <SafeImage
                src={imageSet.machine1}
                alt="Industrial biomass burner machine"
                className="mx-auto h-[420px] w-full object-contain"
              />
              {[
                { label: 'Automatic Fuel Feeding', style: 'left-2 top-10' },
                { label: 'High Efficiency Combustion', style: 'right-2 top-28' },
                { label: 'Low Emission System', style: 'left-4 bottom-24' },
                { label: 'Smart Control Panel', style: 'right-4 bottom-12' },
              ].map((item) => (
                <Motion.span
                  key={item.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute rounded-full border border-[#DCE3E6]/50 bg-[#FDFEFD]/85 px-3 py-2 text-xs font-medium text-[#354653] ${item.style}`}
                >
                  {item.label}
                </Motion.span>
              ))}
            </div>
          </Motion.div>

          <button
            type="button"
            onClick={() => document.getElementById('industry-problem')?.scrollIntoView({ behavior: 'smooth' })}
            className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#DCE3E6]/40 bg-[#FDFEFD]/15 px-4 py-2 text-xs uppercase tracking-[0.1em] text-[#FDFEFD]"
          >
            Scroll Down <ChevronDown size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const [fuel, setFuel] = useState('diesel');
  const [cost, setCost] = useState(100000);
  const [size, setSize] = useState('medium');
  const [load, setLoad] = useState('continuous');

  const monthlySaving = useMemo(
    () => Math.max(18000, Math.round(cost * fuelFactor[fuel] * sizeFactor[size] * loadFactor[load])),
    [fuel, cost, size, load],
  );

  const yearlySaving = monthlySaving * 12;
  const monthlyAnimated = useCountUp(monthlySaving, 900);
  const yearlyAnimated = useCountUp(yearlySaving, 1000);
  const savingCounter = useCountUp(50000, 900);

  return (
    <main className="pb-8">
      <HeroSection />

      <section id="industry-problem" className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-9">
        <SectionTitle
          label="Industry Problem"
          title="Manufacturing industries are still trapped in high-cost fossil fuel heating"
          text="Diesel, furnace oil, and gas-based burners increase operational cost and environmental pressure. Nature Energy pellet burners provide a cleaner, lower-cost industrial heat alternative."
        />
        <Motion.div className="mt-6 grid gap-4 md:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false }}>
          {[
            { title: 'High Fuel Cost', desc: 'Conventional burners create heavy monthly fuel burden for industrial heating.', icon: Fuel },
            { title: 'Rising Energy Prices', desc: 'Price volatility disrupts production cost planning and profitability.', icon: TrendingUp },
            { title: 'Environmental Pollution', desc: 'Fossil fuel combustion increases emission load and compliance risk.', icon: Leaf },
          ].map((item) => (
            <Motion.article key={item.title} variants={fadeUp} className={`${cardBase} p-5`}>
              <item.icon size={20} className="text-[#078DA4]" />
              <h3 className="mt-3 text-xl font-semibold text-[#354653]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B707E]">{item.desc}</p>
            </Motion.article>
          ))}
        </Motion.div>
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal className={`${cardBase} overflow-hidden p-0`}>
            <SafeImage src={imageSet.burnerMain} alt="Biomass burner technology" className="h-full min-h-[320px] w-full object-cover" />
          </Reveal>
          <Reveal>
            <SectionTitle
              label="Our Solution"
              title="Biomass pellet burner technology for efficient industrial heat output"
              text="Compressed agricultural waste pellets are automatically fed to a controlled combustion chamber to generate high-temperature heat for boilers, ovens, dryers, and process systems."
            />
            <ul className="mt-4 grid gap-3 text-sm text-[#5B707E] md:text-base">
              {[
                'Up to 50% reduction in fuel cost',
                'Fully automatic fuel feeding system',
                'High combustion efficiency',
                'Low maintenance operation',
                'Environment friendly renewable fuel',
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#2BB673]" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] min-h-[100svh] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-9">
        <SectionTitle
          label="Products"
          title="Ultra-modern biomass burner product showcase"
          text="Every product opens its own dedicated detailed page with specifications, applications, process logic, and quote support."
        />

        <div className="mt-6 hidden grid-cols-4 gap-4 xl:grid">
          {products.map((product) => (
            <Motion.article
              key={product.slug}
              whileHover={{ y: -7 }}
              className={`${cardBase} group flex h-full flex-col p-4 transition`}
            >
              <div className="overflow-hidden rounded-xl border border-[#DCE3E6]">
                <SafeImage
                  src={product.image}
                  alt={product.name}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#354653]">{product.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B707E]">{product.tagline}</p>
              <Link to={`/products/${product.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#066F82]">
                View Details <ArrowRight size={14} />
              </Link>
            </Motion.article>
          ))}
        </div>

        <div className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto xl:hidden">
          {products.map((product) => (
            <article key={product.slug} className={`${cardBase} w-[85vw] flex-none snap-center p-4 sm:w-[62vw]`}>
              <SafeImage src={product.image} alt={product.name} className="h-48 w-full rounded-xl border border-[#DCE3E6] object-cover" />
              <h3 className="mt-3 text-lg font-semibold text-[#354653]">{product.name}</h3>
              <p className="mt-2 text-sm text-[#5B707E]">{product.tagline}</p>
              <Link to={`/products/${product.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#066F82]">
                View Details <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
        <SectionTitle
          label="Industries Served"
          title="Industrial applications powered by biomass pellet burner systems"
          text="Food processing, textile, chemical, boiler, dryer, and bakery operations where thermal consistency and cost control are critical."
        />
        <Motion.div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false }}>
          {industries.map((industry) => (
            <Motion.article key={industry.slug} variants={fadeUp} className={`${cardBase} group p-4`}>
              <SafeImage src={industry.image} alt={industry.name} className="h-44 w-full rounded-xl border border-[#DCE3E6] object-cover" />
              <h3 className="mt-3 text-lg font-semibold text-[#354653]">{industry.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B707E]">{industry.intro}</p>
              <Link to={`/industries/${industry.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#066F82]">
                Explore Industry <ArrowRight size={14} />
              </Link>
            </Motion.article>
          ))}
        </Motion.div>
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-9">
        <SectionTitle
          label="Fuel Cost Saving"
          title="Interactive industrial fuel savings calculator"
          text="Estimate monthly and yearly savings by switching from diesel/furnace/gas burners to biomass pellet systems."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className={`${cardBase} p-5`}>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="text-sm text-[#354653]">
                Current Fuel Type
                <select value={fuel} onChange={(event) => setFuel(event.target.value)} className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#FDFEFD] px-3 py-2 text-sm text-[#354653]">
                  <option value="diesel">Diesel Burner</option>
                  <option value="furnace">Furnace Oil Burner</option>
                  <option value="gas">Gas Burner</option>
                </select>
              </label>
              <label className="text-sm text-[#354653]">
                Monthly Fuel Cost
                <input type="number" min="10000" value={cost} onChange={(event) => setCost(Number(event.target.value) || 10000)} className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#FDFEFD] px-3 py-2 text-sm text-[#354653]" />
              </label>
              <label className="text-sm text-[#354653]">
                Factory Size
                <select value={size} onChange={(event) => setSize(event.target.value)} className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#FDFEFD] px-3 py-2 text-sm text-[#354653]">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </label>
              <label className="text-sm text-[#354653]">
                Heating Requirement
                <select value={load} onChange={(event) => setLoad(event.target.value)} className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#FDFEFD] px-3 py-2 text-sm text-[#354653]">
                  <option value="shift">Single Shift</option>
                  <option value="extended">Extended Shift</option>
                  <option value="continuous">24x7 Continuous</option>
                </select>
              </label>
            </div>
          </div>

          <div className={`${cardBase} p-5`}>
            <p className="text-sm text-[#5B707E]">Estimated Monthly Saving</p>
            <h3 className="mt-2 text-4xl font-semibold text-[#066F82]">{formatINR(monthlyAnimated)}</h3>
            <p className="mt-4 text-sm text-[#5B707E]">Estimated Yearly Saving</p>
            <h4 className="mt-2 text-3xl font-semibold text-[#2BB673]">{formatINR(yearlyAnimated)}</h4>
            <p className="mt-4 text-sm leading-relaxed text-[#5B707E]">
              Savings are indicative and can be validated with a detailed thermal and fuel study by our engineering team.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
        <SectionTitle label="How It Works" title="Process timeline from pellet storage to industrial heat output" />
        <Motion.div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false }}>
          {[
            { title: 'Pellet Storage System', text: 'Biomass pellets are stored safely in hopper units.', icon: Building2 },
            { title: 'Automatic Feeding System', text: 'Fuel is auto-transferred to combustion chamber.', icon: SlidersHorizontal },
            { title: 'Efficient Combustion', text: 'Controlled burn generates high-temperature heat.', icon: Flame },
            { title: 'Industrial Heat Output', text: 'Heat is used for boilers, dryers, ovens, and process systems.', icon: Factory },
          ].map((item) => (
            <Motion.article key={item.title} variants={fadeUp} className={`${cardBase} p-4`}>
              <item.icon size={20} className="text-[#078DA4]" />
              <h3 className="mt-3 text-lg font-semibold text-[#354653]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B707E]">{item.text}</p>
            </Motion.article>
          ))}
        </Motion.div>
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-9">
        <SectionTitle label="Why Choose Nature Energy" title="Industrial trust built on engineering, manufacturing, and support" />
        <Motion.div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false }}>
          {[
            { title: 'In-house manufacturing facility', icon: Factory },
            { title: 'Advanced combustion engineering', icon: Flame },
            { title: 'Energy efficient heating systems', icon: TrendingUp },
            { title: 'Nationwide installation support', icon: Truck },
            { title: 'Reliable after-sales service', icon: ShieldCheck },
          ].map((item) => (
            <Motion.article key={item.title} variants={fadeUp} className={`${cardBase} p-4`}>
              <item.icon size={20} className="text-[#078DA4]" />
              <h3 className="mt-3 text-base font-semibold text-[#354653]">{item.title}</h3>
            </Motion.article>
          ))}
        </Motion.div>
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
        <SectionTitle label="Project Installations" title="Real case studies and measurable industrial savings" />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.slug} className={`${cardBase} p-4`}>
              <SafeImage src={project.image} alt={project.name} className="h-44 w-full rounded-xl border border-[#DCE3E6] object-cover" />
              <h3 className="mt-3 text-lg font-semibold text-[#354653]">{project.name}</h3>
              <p className="mt-1 text-sm text-[#5B707E]">{project.industry} - {project.location}</p>
              <p className="mt-1 text-sm text-[#5B707E]">Burner Capacity: {project.capacity}</p>
              <p className="mt-1 text-sm text-[#2BB673]">Fuel Saving: {project.savings}</p>
              <Link to={`/projects/${project.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#066F82]">
                View Case Study <ArrowRight size={14} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-9">
        <SectionTitle label="Testimonials" title="What industrial clients say after conversion" />
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {[
            'After installing the Nature Energy pellet burner system, our textile factory reduced fuel costs by nearly 45 percent while maintaining consistent heating output.',
            'The retrofit was smooth, operation is automatic, and the monthly diesel expense reduction has significantly improved our plant utility cost control.',
          ].map((quote) => (
            <Reveal key={quote} className={`${cardBase} p-6`}>
              <p className="text-lg leading-relaxed text-[#354653]">"{quote}"</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[linear-gradient(128deg,#066F82,#354653)] p-7 md:p-10">
        <Reveal>
          <h2 className="text-3xl font-semibold text-[#FDFEFD] md:text-4xl">Start Saving Industrial Fuel Costs Today</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#FDFEFD]/88 md:text-lg">
            Upgrade your heating system with Nature Energy biomass pellet burner technology and reduce operational fuel costs immediately.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <MagneticLink to="/contact" variant="primary" className="!border-[#FDFEFD]/40 !bg-[#078DA4]">
              Request Free Consultation
            </MagneticLink>
            <MagneticLink to="/contact" variant="ghost">
              Get Instant Quotation
            </MagneticLink>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
        <SectionTitle
          label="Before vs After"
          title="Traditional fuel system compared with biomass pellet burner"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className={`${cardBase} p-5`}>
            <p className="text-sm text-[#5B707E]">Traditional Fuel System</p>
            <h3 className="mt-2 text-xl font-semibold text-[#354653]">Diesel Burner</h3>
            <p className="mt-3 text-3xl font-semibold text-[#066F82]">{formatINR(100000)} / month</p>
          </div>
          <div className={`${cardBase} grid place-items-center px-4 py-8`}>
            <p className="text-sm text-[#5B707E]">Estimated Saving</p>
            <h3 className="mt-1 text-3xl font-semibold text-[#2BB673]">{formatINR(savingCounter)}</h3>
          </div>
          <div className={`${cardBase} p-5`}>
            <p className="text-sm text-[#5B707E]">Biomass Pellet Burner</p>
            <h3 className="mt-2 text-xl font-semibold text-[#354653]">Nature Energy System</h3>
            <p className="mt-3 text-3xl font-semibold text-[#066F82]">{formatINR(50000)} / month</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function PageHero({ label, title, subtitle, image }) {
  return (
    <section className="px-[3vw] pt-2">
      <div className="relative overflow-hidden rounded-[24px] border border-[#DCE3E6]">
        <SafeImage src={image} alt={title} className="h-[56svh] min-h-[360px] w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(53,70,83,0.88),rgba(6,111,130,0.68))]" />
        <div className="industrial-texture absolute inset-0" />
        <div className="absolute inset-0 mx-auto flex w-[min(1280px,94vw)] items-end pb-10">
          <Reveal>
            <span className="inline-flex rounded-full border border-[#DCE3E6]/35 bg-[#FDFEFD]/14 px-3 py-1 text-xs uppercase tracking-[0.1em] text-[#FDFEFD]">
              {label}
            </span>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-[#FDFEFD] md:text-5xl">{title}</h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#FDFEFD]/88 md:text-lg">{subtitle}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <main className="pb-8">
      <PageHero
        label="About Company"
        title="Nature Energy builds high-performance biomass heating systems for modern industries"
        subtitle="A leading manufacturer of industrial biomass pellet burner systems designed to replace expensive fossil fuel heating equipment."
        image={imageSet.factoryHall}
      />

      <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className={`${cardBase} p-6 md:p-8`}>
          <SectionTitle
            label="Company Overview"
            title="Engineering-first approach for real industrial results"
            text="Nature Energy works with process industries to design combustion architecture that aligns with runtime pattern, load behavior, and operating cost objectives."
          />
          <p className="mt-4 text-base leading-relaxed text-[#5B707E]">
            From product design and manufacturing to installation and commissioning, our focus is to deliver thermal
            reliability, lower fuel expenditure, and easier operations for plant utility teams.
          </p>
        </Reveal>
        <Reveal className={`${cardBase} overflow-hidden p-0`}>
          <SafeImage src={imageSet.steelPlant} alt="Manufacturing facility" className="h-full min-h-[340px] w-full object-cover" />
        </Reveal>
      </section>

      <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-3">
        {[
          { title: 'Mission', desc: 'To provide sustainable industrial heating technologies that reduce fuel costs and environmental impact.', icon: Globe2 },
          { title: 'Vision', desc: 'To become a global leader in biomass energy technology solutions for industrial heating.', icon: TrendingUp },
          { title: 'Core Strength', desc: 'In-house manufacturing, advanced combustion engineering, and nationwide implementation support.', icon: Factory },
        ].map((item) => (
          <Reveal key={item.title} className={`${cardBase} p-6`}>
            <item.icon size={20} className="text-[#078DA4]" />
            <h3 className="mt-3 text-xl font-semibold text-[#354653]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5B707E]">{item.desc}</p>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-9">
        <SectionTitle label="Manufacturing Facility" title="How Nature Energy machines are built" />
        <Motion.div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false }}>
          {processSteps.map((step, index) => {
            const Icon = [Cog, Hammer, Wrench, TestTube2, Truck][index % 5];
            return (
              <Motion.article key={step.title} variants={fadeUp} className={`${cardBase} p-4`}>
                <Icon size={19} className="text-[#078DA4]" />
                <h3 className="mt-3 text-base font-semibold text-[#354653]">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5B707E]">{step.detail}</p>
              </Motion.article>
            );
          })}
        </Motion.div>
      </section>
    </main>
  );
}

function ProductsPage() {
  return (
    <main className="pb-8">
      <PageHero
        label="Products"
        title="Premium biomass pellet burner systems for diverse industrial heating loads"
        subtitle="Industrial Pellet Burner, Boiler Pellet Burner, Bakery Oven Pellet Burner, and Custom Biomass Heating Systems."
        image={imageSet.burnerMain}
      />

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
        <SectionTitle
          label="Product Portfolio"
          title="Select a product to view full detail page"
          text="Each product detail page includes overview, key features, technical specifications, applications, image gallery, and quote form."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <Reveal key={product.slug} className={`${cardBase} group p-4`}>
              <SafeImage src={product.image} alt={product.name} className="h-48 w-full rounded-xl border border-[#DCE3E6] object-cover" />
              <h3 className="mt-3 text-lg font-semibold text-[#354653]">{product.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B707E]">{product.tagline}</p>
              <Link to={`/products/${product.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#066F82]">
                View Details <ArrowRight size={14} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <NotFoundPage />;
  }

  const gallery = [product.image, imageSet.machine1, imageSet.boilerRoom, imageSet.burnerMain, imageSet.pellets];

  return (
    <main className="pb-8">
      <PageHero label="Product Detail" title={product.name} subtitle={product.tagline} image={product.image} />

      <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className={`${cardBase} p-6`}>
          <SectionTitle label="Overview" title="Engineered for industrial heating efficiency" />
          {product.overview.map((item) => (
            <p key={item} className="mt-3 text-sm leading-relaxed text-[#5B707E] md:text-base">
              {item}
            </p>
          ))}
        </Reveal>

        <Reveal className={`${cardBase} p-6`}>
          <h3 className="text-xl font-semibold text-[#354653]">Key Features</h3>
          <ul className="mt-4 grid gap-3 text-sm text-[#5B707E] md:text-base">
            {product.highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#2BB673]" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-9">
        <SectionTitle label="Technical Specifications" title="Detailed specification matrix" />
        <div className={`${cardBase} mt-6 overflow-x-auto p-1`}>
          <table className="w-full border-collapse text-sm">
            <tbody>
              {product.specs.map(([key, value]) => (
                <tr key={key} className="border-b border-[#DCE3E6] last:border-b-0">
                  <th className="w-[36%] px-4 py-3 text-left font-semibold text-[#354653]">{key}</th>
                  <td className="px-4 py-3 text-[#5B707E]">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-2">
        <Reveal className={`${cardBase} p-6`}>
          <h3 className="text-xl font-semibold text-[#354653]">Applications</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5B707E] md:text-base">
            {product.applications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-xl font-semibold text-[#354653]">Process Flow</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5B707E] md:text-base">
            {product.processFlow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className={`${cardBase} p-6`}>
          <h3 className="text-xl font-semibold text-[#354653]">Image Gallery</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {gallery.map((img, index) => (
              <SafeImage key={`${img}-${index}`} src={img} alt={`${product.name} gallery ${index + 1}`} className="h-32 w-full rounded-xl border border-[#DCE3E6] object-cover" />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
        <SectionTitle label="Get Quote" title="Request technical proposal" />
        <form className={`${cardBase} mt-6 grid gap-3 p-5 md:grid-cols-2`}>
          <label className="text-sm text-[#354653]">Name<input className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" type="text" placeholder="Your name" /></label>
          <label className="text-sm text-[#354653]">Company Name<input className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" type="text" placeholder="Company" /></label>
          <label className="text-sm text-[#354653]">Phone<input className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" type="tel" placeholder="Phone" /></label>
          <label className="text-sm text-[#354653]">Industry<input className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" type="text" placeholder="Industry" /></label>
          <label className="text-sm text-[#354653] md:col-span-2">Message<textarea className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" rows="4" placeholder="Requirement" /></label>
          <button type="button" className="inline-flex rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-5 py-3 text-sm font-semibold text-[#FDFEFD] md:col-span-2 md:w-fit">
            Get Quotation
          </button>
        </form>
      </section>
    </main>
  );
}

function IndustriesPage() {
  return (
    <main className="pb-8">
      <PageHero
        label="Industries"
        title="Biomass heating solutions for core manufacturing sectors"
        subtitle="Food processing, textile, chemical, boiler plants, dryer systems, and bakery production."
        image={imageSet.steelPlant}
      />

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
        <SectionTitle label="Industry Grid" title="Select an industry to view a dedicated detail page" />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <Reveal key={industry.slug} className={`${cardBase} p-4`}>
              <SafeImage src={industry.image} alt={industry.name} className="h-44 w-full rounded-xl border border-[#DCE3E6] object-cover" />
              <h3 className="mt-3 text-lg font-semibold text-[#354653]">{industry.name}</h3>
              <p className="mt-2 text-sm text-[#5B707E]">{industry.intro}</p>
              <Link to={`/industries/${industry.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#066F82]">
                View Industry <ArrowRight size={14} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

function IndustryDetailPage() {
  const { slug } = useParams();
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    return <NotFoundPage />;
  }

  return (
    <main className="pb-8">
      <PageHero label="Industry Detail" title={industry.name} subtitle={industry.intro} image={industry.image} />

      <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-2">
        <Reveal className={`${cardBase} p-6`}>
          <h3 className="text-xl font-semibold text-[#354653]">Industry Challenge</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#5B707E] md:text-base">{industry.challenge}</p>
        </Reveal>
        <Reveal className={`${cardBase} p-6`}>
          <h3 className="text-xl font-semibold text-[#354653]">Benefits of Biomass Heating</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#5B707E] md:text-base">
            {industry.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-9">
        <SectionTitle label="Typical Applications" title="How pellet burners are used in this industry" />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {industry.useCases.map((item, index) => {
            const Icon = [Factory, Flame, Settings2, Building2][index % 4];
            return (
              <Reveal key={item} className={`${cardBase} p-4`}>
                <Icon size={18} className="text-[#078DA4]" />
                <h3 className="mt-3 text-base font-semibold text-[#354653]">{item}</h3>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function TechnologyPage() {
  const saving = useCountUp(50, 850);
  const efficiency = useCountUp(92, 950);
  const automation = useCountUp(100, 900);

  return (
    <main className="pb-8">
      <PageHero
        label="Technology"
        title="Engineering behind Nature Energy biomass pellet burner systems"
        subtitle="Biomass fuel technology, combustion engineering, automation control systems, and energy efficiency design."
        image={imageSet.automation}
      />

      <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-2">
        {[
          { title: 'Biomass Fuel Technology', text: 'Compressed agricultural waste pellets offer high thermal output with better cost control than conventional fuels.', icon: Leaf },
          { title: 'Combustion Engineering', text: 'Optimized air-fuel ratio and chamber design enable stable high-temperature heat generation.', icon: Flame },
          { title: 'Automation Control Systems', text: 'Automatic fuel feeding, digital monitoring, and safety interlocks improve reliability.', icon: SlidersHorizontal },
          { title: 'Energy Efficiency Design', text: 'Thermal tuning and control logic reduce fuel consumption while maintaining performance.', icon: TrendingUp },
        ].map((item) => (
          <Reveal key={item.title} className={`${cardBase} p-6`}>
            <item.icon size={20} className="text-[#078DA4]" />
            <h3 className="mt-3 text-xl font-semibold text-[#354653]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5B707E] md:text-base">{item.text}</p>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-3">
        {[
          ['Fuel Cost Saving Potential', `${saving}%`],
          ['Combustion Efficiency Target', `${efficiency}%`],
          ['Automation-Ready Operation', `${automation}%`],
        ].map(([label, value]) => (
          <Reveal key={label} className={`${cardBase} p-6 text-center`}>
            <p className="text-4xl font-semibold text-[#066F82]">{value}</p>
            <p className="mt-2 text-sm text-[#5B707E]">{label}</p>
          </Reveal>
        ))}
      </section>
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="pb-8">
      <PageHero
        label="Projects"
        title="Industrial installation case studies"
        subtitle="Factory image, industry type, location, burner capacity, and fuel saving outcomes."
        image={imageSet.installSite}
      />

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
        <SectionTitle label="Installations" title="Open detailed project pages" />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.slug} className={`${cardBase} p-4`}>
              <SafeImage src={project.image} alt={project.name} className="h-44 w-full rounded-xl border border-[#DCE3E6] object-cover" />
              <h3 className="mt-3 text-lg font-semibold text-[#354653]">{project.name}</h3>
              <p className="mt-1 text-sm text-[#5B707E]">{project.industry}</p>
              <p className="mt-1 text-sm text-[#5B707E]">{project.location}</p>
              <p className="mt-1 text-sm text-[#5B707E]">Burner Capacity: {project.capacity}</p>
              <p className="mt-1 text-sm text-[#2BB673]">Fuel Saving: {project.savings}</p>
              <Link to={`/projects/${project.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#066F82]">
                View Case Study <ArrowRight size={14} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <main className="pb-8">
      <PageHero label="Project Detail" title={project.name} subtitle={`${project.industry} | ${project.location}`} image={project.image} />

      <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-3">
        <Reveal className={`${cardBase} p-6`}>
          <h3 className="text-lg font-semibold text-[#354653]">Challenge</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">{project.challenge}</p>
        </Reveal>
        <Reveal className={`${cardBase} p-6`}>
          <h3 className="text-lg font-semibold text-[#354653]">Solution</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">{project.solution}</p>
        </Reveal>
        <Reveal className={`${cardBase} p-6`}>
          <h3 className="text-lg font-semibold text-[#354653]">Result</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">{project.result}</p>
          <p className="mt-3 text-sm text-[#2BB673]">Savings: {project.savings}</p>
        </Reveal>
      </section>
    </main>
  );
}

function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const categories = ['all', 'manufacturing', 'installation', 'application', 'machine', 'technology', 'fuel'];
  const items = filter === 'all' ? galleryImages : galleryImages.filter((item) => item.category === filter);

  return (
    <main className="pb-8">
      <PageHero
        label="Gallery"
        title="Manufacturing, machine installation, industrial applications"
        subtitle="Premium image gallery with category filter and interactive full-view mode."
        image={imageSet.factoryHall}
      />

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.08em] ${
                filter === category
                  ? 'border-[#078DA4]/40 bg-[#078DA4]/12 text-[#066F82]'
                  : 'border-[#DCE3E6] text-[#5B707E]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item)}
              className={`${cardBase} group overflow-hidden p-0 text-left`}
            >
              <div className="overflow-hidden">
                <SafeImage src={item.image} alt={item.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <p className="px-4 py-3 text-sm font-medium text-[#354653]">{item.title}</p>
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selected ? (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] grid place-items-center bg-[#354653]/90 p-4"
            onClick={() => setSelected(null)}
          >
            <div className="w-[min(1100px,94vw)] overflow-hidden rounded-2xl border border-[#DCE3E6] bg-[#FDFEFD]">
              <SafeImage src={selected.image} alt={selected.title} className="max-h-[80svh] w-full object-contain" />
              <p className="px-4 py-3 text-sm font-semibold text-[#354653]">{selected.title}</p>
            </div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}

function BlogPage() {
  return (
    <main className="pb-8">
      <PageHero
        label="Blog"
        title="Industrial fuel technology insights"
        subtitle="Diesel vs biomass comparison, industrial energy saving strategies, and future of biomass heating technology."
        image={imageSet.controlRoom}
      />

      <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <Reveal key={blog.slug} className={`${cardBase} p-4`}>
              <SafeImage src={blog.image} alt={blog.title} className="h-44 w-full rounded-xl border border-[#DCE3E6] object-cover" />
              <h3 className="mt-3 text-lg font-semibold text-[#354653]">{blog.title}</h3>
              <p className="mt-2 text-sm text-[#5B707E]">{blog.excerpt}</p>
              <Link to={`/blog/${blog.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#066F82]">
                Read Article <ArrowRight size={14} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return <NotFoundPage />;
  }

  const related = blogs.filter((item) => item.slug !== blog.slug).slice(0, 2);

  return (
    <main className="pb-8">
      <PageHero label="Blog Detail" title={blog.title} subtitle={blog.excerpt} image={blog.image} />

      <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className={`${cardBase} p-6 md:p-8`}>
          {blog.content.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-sm leading-relaxed text-[#5B707E] md:text-base">
              {paragraph}
            </p>
          ))}
        </Reveal>
        <Reveal className={`${cardBase} p-6`}>
          <h3 className="text-lg font-semibold text-[#354653]">Related Articles</h3>
          <div className="mt-4 grid gap-3">
            {related.map((item) => (
              <Link key={item.slug} to={`/blog/${item.slug}`} className="rounded-xl border border-[#DCE3E6] p-3 text-sm text-[#5B707E] transition hover:border-[#078DA4]/40 hover:text-[#066F82]">
                {item.title}
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function FAQPage() {
  const [open, setOpen] = useState('0-0');

  return (
    <main className="pb-8">
      <PageHero
        label="FAQ"
        title="Frequently asked questions"
        subtitle="Fuel, savings, applications, operation, and maintenance of biomass pellet burner systems."
        image={imageSet.boilerPlant}
      />

      <section className="mx-auto mt-6 w-[min(980px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-9">
        {faqGroups.map((group, gIndex) => (
          <Reveal key={group.group} className="mb-4 last:mb-0">
            <h3 className="text-xl font-semibold text-[#354653]">{group.group}</h3>
            <div className="mt-3 grid gap-3">
              {group.items.map((item, iIndex) => {
                const key = `${gIndex}-${iIndex}`;
                const active = open === key;
                return (
                  <article key={item.question} className={`${cardBase} overflow-hidden p-0`}>
                    <button
                      type="button"
                      onClick={() => setOpen(active ? '' : key)}
                      className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-medium text-[#354653]"
                    >
                      {item.question}
                      <ChevronDown size={16} className={`transition ${active ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {active ? (
                        <Motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-4 pb-4 text-sm leading-relaxed text-[#5B707E]"
                        >
                          {item.answer}
                        </Motion.p>
                      ) : null}
                    </AnimatePresence>
                  </article>
                );
              })}
            </div>
          </Reveal>
        ))}
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="pb-8">
      <PageHero
        label="Contact"
        title="Get in touch for industrial biomass burner consultation"
        subtitle="Share your fuel type, monthly heating cost, and required capacity for a custom technical proposal."
        image={imageSet.installSite}
      />

      <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className={`${cardBase} p-6`}>
          <h3 className="text-xl font-semibold text-[#354653]">Company Contact Information</h3>
          <div className="mt-4 grid gap-2 text-sm text-[#5B707E] md:text-base">
            <p className="inline-flex items-center gap-2"><Phone size={16} /> +91 98XXX XXXXX</p>
            <p className="inline-flex items-center gap-2"><Mail size={16} /> sales@natureenergy.in</p>
            <p className="inline-flex items-center gap-2"><MapPin size={16} /> Ahmedabad, Gujarat, India</p>
          </div>
          <iframe
            title="Nature Energy Map"
            className="mt-4 h-64 w-full rounded-xl border border-[#DCE3E6]"
            loading="lazy"
            src="https://maps.google.com/maps?q=Ahmedabad&t=&z=11&ie=UTF8&iwloc=&output=embed"
          />
        </Reveal>

        <Reveal className={`${cardBase} p-6`}>
          <h3 className="text-xl font-semibold text-[#354653]">Get Quotation</h3>
          <form className="mt-4 grid gap-3 md:grid-cols-2">
            <label className="text-sm text-[#354653]">Name<input className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" type="text" /></label>
            <label className="text-sm text-[#354653]">Company Name<input className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" type="text" /></label>
            <label className="text-sm text-[#354653]">Phone<input className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" type="tel" /></label>
            <label className="text-sm text-[#354653]">Industry<input className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" type="text" /></label>
            <label className="text-sm text-[#354653] md:col-span-2">Required Burner Capacity<input className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" type="text" /></label>
            <label className="text-sm text-[#354653] md:col-span-2">Message<textarea className="mt-2 w-full rounded-xl border border-[#DCE3E6] px-3 py-2" rows="4" /></label>
            <button type="button" className="inline-flex rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-5 py-3 text-sm font-semibold text-[#FDFEFD] md:col-span-2 md:w-fit">
              Get Quotation
            </button>
          </form>
        </Reveal>
      </section>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="mx-auto w-[min(880px,94vw)] pb-8 pt-28">
      <Reveal className={`${cardBase} p-10 text-center`}>
        <h2 className="text-3xl font-semibold text-[#354653]">Page Not Found</h2>
        <p className="mt-3 text-[#5B707E]">The page you requested is not available.</p>
        <Link to="/" className="mt-5 inline-flex rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-5 py-3 text-sm font-semibold text-[#FDFEFD]">
          Back to Home
        </Link>
      </Reveal>
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function AppShell() {
  const location = useLocation();

  return (
    <div className="bg-[#FDFEFD]">
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <FloatingActions />

      <AnimatePresence mode="wait">
        <Motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.36, ease: 'easeOut' }}
          className="pt-20"
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/:slug" element={<IndustryDetailPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
