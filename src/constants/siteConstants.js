export const topNav = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Industries', path: '/industries' },
    { label: 'Technology', path: '/technology' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
];

export const cardBase =
    'rounded-2xl border border-[#DCE3E6] bg-[#FDFEFD]/80 backdrop-blur-xl shadow-[0_16px_36px_rgba(53,70,83,0.14)]';

export const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

export const fuelFactor = { diesel: 0.5, furnace: 0.46, gas: 0.4 };
export const sizeFactor = { small: 0.88, medium: 1, large: 1.12 };
export const loadFactor = { shift: 0.82, extended: 1, continuous: 1.1 };

export const chatData = {
    title: 'Chat with Nature Energy',
    status: 'Online now',
    avatar: 'NE',
    welcomeMsg: 'Hi! Need help choosing the right biomass burner? I can guide you through our energy-saving solutions! 🔥',
    quickQuestions: [
        "What's the fuel saving potential?",
        "How long does installation take?",
        "Can I see industrial examples?",
        "Is support available pan-India?"
    ],
    ctaText: 'Start Chat on WhatsApp',
    footerText: 'Typically replies within few minutes'
};
