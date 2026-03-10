import heroBg from '../assets/images/hero_bg.png';
import burnerMain from '../assets/images/burner_main.png';
import boilerRoom from '../assets/images/boiler_room.png';
import machine1 from '../assets/images/machine_1.png';
import pellets from '../assets/images/pellets.png';

export const imageSet = {
  heroBg,
  burnerMain,
  boilerRoom,
  machine1,
  pellets,
  factoryHall: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df0d?auto=format&fit=crop&w=1800&q=80',
  furnaceLine: 'https://images.unsplash.com/photo-1565715101849-67a08f0a7eea?auto=format&fit=crop&w=1800&q=80',
  automation: 'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=1800&q=80',
  steelPlant: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1800&q=80',
  installSite: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80',
  boilerPlant: '/photo-1504328345606-18bbc8c9d7d1.jpg',
  textile: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1800&q=80',
  foodLine: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=1800&q=80',
  controlRoom: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1800&q=80',
  machine2: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=1800&q=80',
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Industries', path: '/industries' },
  { label: 'Technology', path: '/technology' },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export const trustStats = [
  { label: 'Industrial Installations', value: '280+' },
  { label: 'Average Fuel Cost Reduction', value: '40-50%' },
  { label: 'Service Coverage', value: 'Pan India' },
  { label: 'System Uptime Target', value: '99%' },
];

export const products = [
  {
    slug: 'industrial-pellet-burner',
    name: 'Industrial Pellet Burner',
    image: imageSet.machine1,
    tagline: 'Heavy-duty burner for high-demand process heating environments.',
    overview: [
      'The Industrial Pellet Burner is designed for continuous manufacturing environments where thermal load is high and process consistency is critical. Its combustion chamber geometry and air distribution logic are optimized for complete pellet burn and stable output.',
      'Factories replacing diesel or furnace oil systems with this model typically experience faster operating cost control while maintaining required thermal intensity for boilers, thermal oil heaters, and direct process lines.',
    ],
    highlights: [
      'Up to 50% monthly fuel cost reduction potential',
      'PLC driven combustion + feeder synchronization',
      'High-grade refractory chamber for long service life',
      'Stable flame profile for fluctuating process demand',
    ],
    specs: [
      ['Heat Capacity', '300,000 - 3,000,000 kcal/hr'],
      ['Fuel Compatibility', 'Agro-waste biomass pellets'],
      ['Automation Level', 'Fully automatic with digital controls'],
      ['Combustion Efficiency', 'Up to 92% (application dependent)'],
      ['Electrical Load', 'As per capacity model'],
      ['Installation Type', 'Skid / Retrofit / Custom'],
    ],
    applications: [
      'Central utility boiler heating',
      'Thermal fluid process loops',
      'Hot air generation chambers',
      'Drying and dehydration production lines',
    ],
    processFlow: [
      'Bulk pellet storage and level monitoring',
      'Metered screw feeding to combustion chamber',
      'Intelligent air-fuel ratio control',
      'Stable heat transfer to process equipment',
    ],
  },
  {
    slug: 'boiler-pellet-burner',
    name: 'Boiler Pellet Burner',
    image: imageSet.boilerRoom,
    tagline: 'High-efficiency combustion solution for industrial boilers.',
    overview: [
      'The Boiler Pellet Burner platform is engineered for steam generation reliability with controlled flame shape and temperature management.',
      'It is suitable for both retrofit and greenfield projects where plant teams need lower fuel spend, reduced soot deposition, and predictable boiler performance.',
    ],
    highlights: [
      'Optimized for shell and package boilers',
      'Automatic ignition and flame supervision',
      'Reduced maintenance load in long cycles',
      'Lower fuel volatility impact vs conventional fuels',
    ],
    specs: [
      ['Heat Capacity', '200,000 - 2,500,000 kcal/hr'],
      ['Ignition', 'Auto electric ignition'],
      ['Control System', 'PLC with temperature feedback'],
      ['Fuel Feed', 'Automatic screw feeder'],
      ['Combustion Air', 'Variable speed blower control'],
      ['Retrofit Readiness', 'High'],
    ],
    applications: ['Food steam lines', 'Textile utility boilers', 'Chemical utility sections', 'Dairy process steam'],
    processFlow: [
      'Fuel receives from hopper to feeder',
      'Controlled ignition starts combustion',
      'Heat release tuned to boiler load',
      'Closed-loop temperature stabilization',
    ],
  },
  {
    slug: 'bakery-oven-pellet-burner',
    name: 'Bakery Oven Pellet Burner',
    image: imageSet.foodLine,
    tagline: 'Precision thermal output for bakery and food oven systems.',
    overview: [
      'This model is tuned for consistent oven heating where batch quality depends on repeatable thermal curves.',
      'Its responsive control profile helps bakery operators maintain product consistency while reducing heating cost pressure over long production shifts.',
    ],
    highlights: [
      'Uniform thermal profile support',
      'Fast ramp-up with controlled combustion',
      'Compact integration for bakery facilities',
      'Low operator complexity and reliable operation',
    ],
    specs: [
      ['Heat Capacity', '80,000 - 600,000 kcal/hr'],
      ['Working Temperature', '120 C - 380 C'],
      ['Fuel', 'Biomass pellets'],
      ['Control', 'Digital setpoint control'],
      ['Response Time', 'Fast ignition and stabilization'],
      ['Footprint', 'Compact industrial'],
    ],
    applications: ['Rotary baking ovens', 'Tunnel ovens', 'Snack plant heating', 'Confectionery lines'],
    processFlow: [
      'Pellet feed initialization',
      'Controlled combustion starts',
      'Oven zone temperature balancing',
      'Continuous operation with auto adjustment',
    ],
  },
  {
    slug: 'custom-biomass-heating-systems',
    name: 'Custom Biomass Heating Systems',
    image: imageSet.factoryHall,
    tagline: 'End-to-end engineered systems for special industrial thermal demand.',
    overview: [
      'Nature Energy custom systems are designed from thermal load study to installation and commissioning. Each system is engineered around process reality, utility constraints, and production goals.',
      'These projects typically include custom combustion chamber sizing, feeder architecture, controls, safety interlocks, and support frameworks tailored to site operating conditions.',
    ],
    highlights: [
      'Plant-specific combustion engineering',
      'Custom panel and automation strategy',
      'Integrated safety logic and monitoring',
      'Turnkey delivery with commissioning',
    ],
    specs: [
      ['Project Type', 'Engineered-to-order'],
      ['Capacity', 'As per design study'],
      ['Fuel', 'Biomass pellets / custom blend'],
      ['Control Architecture', 'Custom PLC + HMI'],
      ['Delivery Model', 'Turnkey / phased'],
      ['Service Scope', 'Installation + training + support'],
    ],
    applications: ['Dryer parks', 'Agro processing lines', 'Chemical utility blocks', 'Special process heating'],
    processFlow: [
      'Thermal survey and engineering baseline',
      'System design and fabrication',
      'Site integration and commissioning',
      'Performance tuning and handover',
    ],
  },
];

export const industries = [
  {
    slug: 'food-processing-industry',
    name: 'Food Processing Industry',
    image: imageSet.foodLine,
    intro:
      'Food plants need clean and stable heat for ovens, steam, and drying operations. Biomass pellet burners provide controlled heating with lower recurring fuel cost.',
    challenge:
      'Diesel and furnace oil dependence increases production cost and reduces margin predictability in food operations with long heating cycles.',
    benefits: [
      'Lower monthly heating cost with stable process temperature',
      'Reliable thermal supply for continuous production',
      'Better cost planning due to reduced fuel volatility',
    ],
    useCases: ['Baking and roasting', 'Steam cooking', 'Dehydration and drying', 'Utility boiler sections'],
  },
  {
    slug: 'textile-manufacturing-industry',
    name: 'Textile Manufacturing Industry',
    image: imageSet.textile,
    intro:
      'Textile operations depend heavily on thermal processes for drying, finishing, and utility heating. Controlled biomass systems improve thermal efficiency and cost structure.',
    challenge:
      'Frequent heating demand swings and expensive fuel sources create high operating costs in textile finishing lines.',
    benefits: [
      'Controlled hot air output for fabric drying',
      'Reduced fuel bill with automation-led combustion',
      'Stable performance across extended shift cycles',
    ],
    useCases: ['Stenter line heating', 'Fabric drying', 'Heat setting', 'Utility boiler support'],
  },
  {
    slug: 'chemical-industry',
    name: 'Chemical Industry',
    image: imageSet.controlRoom,
    intro:
      'Chemical plants require dependable process heat with strong safety control. Nature Energy systems provide managed combustion and reliable thermal delivery.',
    challenge:
      'Unstable fuel economics and process-critical heat demand can impact throughput, quality, and utility cost targets.',
    benefits: [
      'Consistent utility heat for controlled production',
      'Improved operating economics for thermal loads',
      'Automation-backed safety and monitoring framework',
    ],
    useCases: ['Reactor support heating', 'Utility boilers', 'Drying chambers', 'Batch thermal systems'],
  },
  {
    slug: 'boiler-plants',
    name: 'Boiler Plants',
    image: imageSet.boilerPlant,
    intro:
      'Boiler houses can reduce fuel operating expense significantly by replacing diesel/furnace systems with pellet-based burner solutions.',
    challenge:
      'High steam demand plus rising fuel price creates cost pressure in central utility operations.',
    benefits: [
      'High-value retrofit opportunity with measurable savings',
      'Cleaner and controlled combustion behavior',
      'Reliable steam utility support for industrial processes',
    ],
    useCases: ['Package boiler retrofit', 'Steam generation utility', 'Central heating plants', 'Industrial utility blocks'],
  },
  {
    slug: 'dryer-systems',
    name: 'Dryer Systems',
    image: imageSet.installSite,
    intro:
      'Industrial dryers need sustained hot airflow with predictable thermal performance. Biomass systems deliver this at a lower recurring fuel cost.',
    challenge:
      'Conventional burners drive up drying cost in continuous or high-volume moisture control lines.',
    benefits: [
      'Lower per-batch drying cost',
      'Improved heating consistency in long runs',
      'Scalable architecture for varying dryer loads',
    ],
    useCases: ['Tray dryers', 'Conveyor dryers', 'Agro dryers', 'Industrial dehydration systems'],
  },
  {
    slug: 'bakery-production',
    name: 'Bakery Production',
    image: imageSet.burnerMain,
    intro:
      'Bakery production quality depends on consistent oven thermal behavior. Pellet burners help maintain quality while reducing heating overhead.',
    challenge:
      'Conventional burner systems can increase batch cost and cause unstable heating in longer production cycles.',
    benefits: [
      'Better quality consistency through controlled heat',
      'Reduced operating fuel expense',
      'Simple operator workflow with automation support',
    ],
    useCases: ['Bread lines', 'Biscuit ovens', 'Snack production', 'Confectionery heating'],
  },
];

export const projects = [
  {
    slug: 'surat-textile-retrofit',
    name: 'Textile Dryer Retrofit Program',
    image: imageSet.textile,
    location: 'Surat, Gujarat',
    industry: 'Textile Manufacturing',
    capacity: '1,200,000 kcal/hr',
    savings: '48% monthly fuel savings',
    challenge:
      'The client had high furnace oil consumption across dryer lines and needed a reliable alternative without reducing production speed.',
    solution:
      'Nature Energy deployed an automatic pellet burner with custom feeder design and adaptive combustion controls tuned for variable drying load.',
    result:
      'Fuel spend dropped by nearly half while thermal consistency improved, leading to better line stability and lower maintenance interventions.',
  },
  {
    slug: 'vadodara-food-boiler',
    name: 'Food Plant Boiler Conversion',
    image: imageSet.foodLine,
    location: 'Vadodara, Gujarat',
    industry: 'Food Processing',
    capacity: '900,000 kcal/hr',
    savings: '44% monthly fuel savings',
    challenge:
      'Steam utility costs were increasing due to diesel usage and impacting operating margin across production shifts.',
    solution:
      'A boiler-focused pellet burner package was integrated with existing control systems and optimized for steam load demand.',
    result:
      'The plant stabilized utility expenses and improved steam generation reliability with lower monthly fuel outflow.',
  },
  {
    slug: 'pune-chemical-utility',
    name: 'Chemical Utility Heating Upgrade',
    image: imageSet.controlRoom,
    location: 'Pune, Maharashtra',
    industry: 'Chemical Industry',
    capacity: '1,500,000 kcal/hr',
    savings: '50% monthly fuel savings',
    challenge:
      'Utility heating in chemical operations required robust control and dependable high-load output with better cost efficiency.',
    solution:
      'A custom biomass heating architecture with smart interlocks, panel integration, and tuned combustion logic was deployed.',
    result:
      'The site achieved major fuel savings while maintaining process-grade thermal stability and operational safety standards.',
  },
];

export const blogs = [
  {
    slug: 'diesel-vs-biomass-fuel-cost-comparison',
    title: 'Diesel vs Biomass Fuel Cost Comparison for Industrial Heating',
    image: imageSet.boilerRoom,
    excerpt:
      'A detailed operational cost comparison framework for plants evaluating burner conversion from diesel to biomass pellets.',
    content: [
      'Industrial fuel economics are no longer a minor utility topic. For process-heavy factories, burner fuel cost directly shapes product margin and growth capacity.',
      'Diesel-driven systems are exposed to price volatility, which can disrupt budgeting and force frequent revision of production cost assumptions.',
      'Biomass pellet burners help stabilize this risk with lower average operating cost per unit of thermal output and improved efficiency when combustion is engineered correctly.',
      'A practical evaluation should include hourly heat load, monthly runtime, current fuel logistics, burner efficiency, and expected downtime reduction after automation.',
      'Plants that execute conversion with proper thermal study typically realize measurable savings while keeping process reliability intact.',
    ],
  },
  {
    slug: 'industrial-energy-saving-strategies',
    title: 'Industrial Energy Saving Strategies That Actually Work',
    image: imageSet.factoryHall,
    excerpt:
      'A practical roadmap covering combustion tuning, heat recovery, process integration, and fuel strategy modernization.',
    content: [
      'Energy saving programs fail when they focus only on one equipment change without system-level analysis.',
      'The strongest improvements come from combining burner optimization, process heat mapping, utility balancing, and automated control tuning.',
      'Plants should begin with thermal baseline measurement and identify where heat is lost before selecting retrofit options.',
      'When biomass conversion is included with proper feeder and air-fuel control, thermal cost structure can improve significantly.',
      'Sustained savings require preventive maintenance discipline and periodic operating data review.',
    ],
  },
  {
    slug: 'future-of-biomass-energy-technology',
    title: 'Future of Biomass Energy Technology in Manufacturing',
    image: imageSet.automation,
    excerpt:
      'Why modern biomass systems are evolving into smart, data-driven, industrial energy platforms.',
    content: [
      'Biomass burner technology is moving beyond basic combustion into integrated digital thermal management.',
      'Modern systems include PLC intelligence, performance monitoring, predictive alerts, and adaptive combustion behavior.',
      'This shift allows factories to track fuel efficiency in real time and correct deviations before they affect production quality.',
      'As industries focus on cost control and cleaner operations, biomass adoption is expected to grow in utility and process heating domains.',
      'Future-ready plants will treat thermal systems as strategic assets rather than standalone utility equipment.',
    ],
  },
];

export const galleryImages = [
  { id: 1, category: 'manufacturing', title: 'Machine Fabrication Bay', image: imageSet.factoryHall },
  { id: 2, category: 'installation', title: 'On-Site Burner Installation', image: imageSet.installSite },
  { id: 3, category: 'application', title: 'Boiler Room Operation', image: imageSet.boilerPlant },
  { id: 4, category: 'machine', title: 'Industrial Pellet Burner Unit', image: imageSet.machine1 },
  { id: 5, category: 'application', title: 'Textile Heating Integration', image: imageSet.textile },
  { id: 6, category: 'technology', title: 'Combustion Control Panel', image: imageSet.controlRoom },
  { id: 7, category: 'machine', title: 'Burner Assembly View', image: imageSet.burnerMain },
  { id: 8, category: 'fuel', title: 'Biomass Pellet Handling', image: imageSet.pellets },
  { id: 9, category: 'application', title: 'Food Process Heating Line', image: imageSet.foodLine },
];

export const faqGroups = [
  {
    group: 'Fuel & Cost',
    items: [
      {
        question: 'What fuel does a Nature Energy burner use?',
        answer:
          'Our systems are designed for biomass pellets made from agricultural waste streams, enabling cost-efficient and cleaner industrial heating.',
      },
      {
        question: 'How much savings can industries expect?',
        answer:
          'Most installations observe around 40-50% monthly fuel cost reduction compared to diesel or furnace oil, depending on load profile and runtime.',
      },
    ],
  },
  {
    group: 'Operation & Maintenance',
    items: [
      {
        question: 'Is the burner operation automatic?',
        answer:
          'Yes. Systems include automatic ignition, controlled fuel feeding, and programmable combustion management for stable operation.',
      },
      {
        question: 'What maintenance is required?',
        answer:
          'Routine ash management, periodic inspection, and preventive maintenance scheduling are recommended for long-term peak performance.',
      },
    ],
  },
  {
    group: 'Applications & Support',
    items: [
      {
        question: 'Which industries can use pellet burner systems?',
        answer:
          'Food processing, textile, chemical, boiler plants, dryer systems, and bakery production are among the common use cases.',
      },
      {
        question: 'Do you provide installation and after-sales support?',
        answer:
          'Yes. Nature Energy provides engineering, installation, commissioning, operator training, and post-installation support services.',
      },
    ],
  },
];

export const processSteps = [
  { title: 'Design Engineering', detail: 'Thermal load study and combustion architecture design.' },
  { title: 'Metal Fabrication', detail: 'Precision fabrication of combustion and feeding assemblies.' },
  { title: 'Machine Assembly', detail: 'System integration of burner, feeder, panel, and controls.' },
  { title: 'Quality Testing', detail: 'Load testing, safety checks, and performance validation.' },
  { title: 'Installation', detail: 'Site deployment, commissioning, and operational handover.' },
];

