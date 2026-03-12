// ── Core product / hero images (your original high-quality PNGs) ──
import heroBg        from '../assets/images/hero_bg.png';
import burnerMain    from '../assets/images/burner_main.png';
import boilerRoom    from '../assets/images/boiler_room.png';
import machine1      from '../assets/images/machine_1.png';
import pellets       from '../assets/images/pellets.png';
import ctaConsultation from '../assets/images/cta_consultation.png';

// ── All original images from the public folder ──
import heroBgOrig      from '../assets/images/hero_bg.jpg';        // Hero background original
import burnerMainOrig  from '../assets/images/burner_main.jpg';    // Burner unit close-up
import boilerRoomOrig  from '../assets/images/boiler_room.jpg';    // Boiler room interior
import machine1Orig    from '../assets/images/machine_1.jpg';      // Machine fabrication bay
import ctaOrig         from '../assets/images/cta_consultation.jpg'; // Consultation scene
import riceHusk        from '../assets/images/rice_husk.jpg';      // Biomass / rice husk pellets
import factoryHallImg  from '../assets/images/factory_hall.jpg';   // Factory hall wide view
import furnaceLineImg  from '../assets/images/furnace_line.jpg';   // Furnace line / industrial heating
import installSiteImg  from '../assets/images/install_site.jpg';   // Installation / commissioning site
import textileImg      from '../assets/images/textile.jpg';        // Textile manufacturing line
import controlRoomImg  from '../assets/images/control_room.jpg';   // Control room / automation panel
import foodLineImg     from '../assets/images/food_line.jpg';      // Food processing heating line
import imagesImg       from '../assets/images/images.jpg';         // Additional industrial view
import pelletStorage   from '../assets/images/pellet_storage.jpg'; // Pellet / pallet storage

export const imageSet = {
  // Core (PNG – used in hero & product cards)
  heroBg,
  burnerMain,
  boilerRoom,
  machine1,
  pellets,
  ctaConsultation,

  // Extended – every slot gets its own distinct original image
  factoryHall:  factoryHallImg,    // Gallery / About – wide factory view
  furnaceLine:  furnaceLineImg,    // Technology / Projects – furnace line
  automation:   controlRoomImg,    // Blog / Technology – automation panel
  steelPlant:   heroBgOrig,       // About – steel / industrial plant
  installSite:  installSiteImg,   // Industries / Projects – install site
  boilerPlant:  boilerRoomOrig,   // Industries – boiler plant interior
  textile:      textileImg,       // Industries – textile manufacturing
  foodLine:     foodLineImg,      // Industries / Products – food processing
  controlRoom:  controlRoomImg,   // Industries / Blog – control room

  // Additional unique images available for gallery & sections
  riceHusk:     riceHusk,         // Fuel section – biomass rice husk
  pelletStorage: pelletStorage,   // Gallery – pellet/pallet storage
  industrialView: imagesImg,      // Gallery – additional industrial
  burnerOrig:   burnerMainOrig,   // Gallery – original burner close-up
  machine1Orig: machine1Orig,     // Gallery – original machine view
  ctaOrig:      ctaOrig,          // CTA section alternate
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

export const contactInfo = {
  address: '01, Bhagwati Nagar OPP Kathwada GIDC & Indore Highway, Kathwada, Ahmedabad 382430',
  mobile: '9904888070',
  email: 'natureenergy-sales@gmail.com',
  whatsapp: '9904888070',
  mapEmbedUrl: 'https://maps.google.com/maps?q=01,%20Bhagwati%20Nagar%20OPP%20Kathwada%20GIDC%20%26%20Indore%20Highway,%20Kathwada,%20Ahmedabad%20382430&t=&z=13&ie=UTF8&iwloc=&output=embed',
  referenceWebsites: [
    { name: 'Burner India', url: '#' },
    { name: 'Green Fire', url: '#' }
  ]
};

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
      'Dual-stage air injection for gasification',
      'Intelligent air-fuel ratio PID control',
      'Stable heat transfer to process equipment',
    ],
    whyChoose: [
      { title: 'In-House Fabricated', desc: 'Every burner is built at our Ahmedabad facility under controlled quality conditions. No outsourced combustion chambers.' },
      { title: 'Anti-Slagging Design', desc: 'Cast refractory geometry prevents ash fusion at high temperatures, reducing clinker buildup and unplanned shutdowns.' },
      { title: 'Remote Monitoring Ready', desc: 'Optional IoT module allows remote temperature visibility, alarm notifications, and fuel cycle tracking via mobile.' },
    ],
    techDetails: [
      { label: 'Combustion Type', value: 'Gasification + combustion hybrid (dual-stage)' },
      { label: 'Flame Stability', value: 'Active PID loop with thermocouple feedback' },
      { label: 'Fuel Hopper Capacity', value: '200 – 800 kg (model dependent)' },
      { label: 'Ash Removal', value: 'Integrated pull-out tray with weekly cleaning cycle' },
      { label: 'Control Panel', value: 'IP54-rated powder-coated enclosure with HMI' },
    ],
    faqs: [
      { q: 'What pellet sizes can this burner handle?', a: '6mm and 8mm diameter pellets are standard. Custom feed screws can accommodate 10mm pellets.' },
      { q: 'How long does installation take?', a: 'Typical site installation takes 3–5 working days including electrical, mechanical, and initial test firing.' },
      { q: 'Is after-sales support available pan-India?', a: 'Yes. We have service engineers and spare part depots across Gujarat, Maharashtra, Tamil Nadu, and Punjab.' },
    ],
    relatedSlugs: ['boiler-pellet-burner', 'custom-biomass-heating-systems'],
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
      'Pellet transferred from hopper to feed screw',
      'Controlled ignition sequence initiates combustion',
      'Flame supervison confirmed before full load',
      'Heat release tuned to boiler steam demand',
      'Closed-loop temperature stabilization with feedback',
    ],
    whyChoose: [
      { title: 'Drop-in Retrofit', desc: 'Designed to physically bolt onto the existing burner mounting of most Indian-made boilers. No boiler modification required in the majority of installations.' },
      { title: 'Supervised Safety', desc: 'Integrated flame failure detection and automatic shutdown logic ensures safe operation even during power fluctuations or fuel interruptions.' },
      { title: 'Low-Soot Operation', desc: 'Complete combustion chemistry eliminates the carbon soot buildup that degrades boiler tube efficiency in conventional oil-fired systems.' },
    ],
    techDetails: [
      { label: 'Flame Scanner', value: 'UV / IR detection with auto-shutdown on failure' },
      { label: 'Fuel Feed System', value: 'Single-screw metered feeder with VFD control' },
      { label: 'Air Staging', value: 'Primary and secondary air zones for complete burn' },
      { label: 'HMI Display', value: '7-inch color touchscreen with alarm log' },
      { label: 'Communication', value: 'Modbus RTU for integration with plant SCADA' },
    ],
    faqs: [
      { q: 'Can this replace a diesel-fired burner on an existing boiler?', a: 'Yes. Most installations are direct retrofits to the existing burner port on the boiler front plate, requiring no structural modification.' },
      { q: 'What are the maintenance intervals?', a: 'Ash tray cleaning weekly, combustion chamber inspection monthly, and full service annually. Service typically takes 4–6 hours.' },
      { q: 'What is the minimum order quantity and delivery time?', a: 'Standard models can be delivered in 3–4 weeks. Custom capacity models require 6–8 weeks from order confirmation.' },
    ],
    relatedSlugs: ['industrial-pellet-burner', 'custom-biomass-heating-systems'],
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
      'Pellet feed initialization from hopper',
      'Controlled ignition sequence begins',
      'Oven zone temperature rises along set curve',
      'Stable thermostat-controlled batch operation',
      'Auto-shutdown or idle mode between batches',
    ],
    whyChoose: [
      { title: 'Food-Grade Compliance', desc: 'Combustion gases are fully isolated from the baking chamber by design, maintaining FSSAI and hygiene compliance standards.' },
      { title: 'Batch Cost Reduction', desc: 'Customers report 35–45% reduction in heating cost per batch compared to LPG, directly improving product line profitability.' },
      { title: 'Simple Operator Training', desc: 'Intuitive HMI with pre-set baking profiles means line operators require less than 2 hours of training to run the system independently.' },
    ],
    techDetails: [
      { label: 'Temperature Stability', value: '±3°C variance on thermocouple feedback in stable operation' },
      { label: 'Combustion Chamber', value: 'Insulated refractory with low external surface temperature' },
      { label: 'Heat Transfer Mode', value: 'Indirect hot air or direct radiation (model dependent)' },
      { label: 'Ignition', value: 'Electric auto-ignition with retry logic' },
      { label: 'Safety', value: 'High-temperature cutoff, draft failure alarm, flame supervision' },
    ],
    faqs: [
      { q: 'Can it replace our existing LPG burner on the tunnel oven?', a: 'Yes, in most cases. We do a site audit first to verify flange dimensions and heat load requirements before recommending a model.' },
      { q: 'Does this affect baking quality or product taste?', a: 'No. The combustion gases are separated from the food zone. Our customers report identical or improved product consistency after switching.' },
      { q: 'What is the payback period for a mid-size bakery?', a: 'Most mid-size bakeries with 8–12 hour daily run cycles see full payback within 10–14 months based on current LPG vs pellet pricing.' },
    ],
    relatedSlugs: ['industrial-pellet-burner', 'boiler-pellet-burner'],
  },
  {
    slug: 'custom-biomass-heating-systems',
    name: 'Custom Biomass Heating Systems',
    image: imageSet.factoryHall,
    tagline: 'End-to-end engineered systems for special industrial thermal demand.',
    overview: [
      'Nature Organic Energy custom systems are designed from thermal load study to installation and commissioning. Each system is engineered around process reality, utility constraints, and production goals.',
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
      'On-site thermal survey and data collection',
      'Engineering design and specification review',
      'Fabrication and factory acceptance test',
      'Site integration, piping, and electrical commissioning',
      'Performance tuning, training, and formal handover',
    ],
    whyChoose: [
      { title: 'Full Thermal Audit', desc: 'We map every heat source, loss point, and demand zone before designing. This ensures the system is sized correctly and not over/under specified.' },
      { title: 'No Generic Solutions', desc: 'Every custom project is unique. We do not adapt a standard product — we engineer from scratch based on your process reality.' },
      { title: 'Long-Term Partnership', desc: 'Custom clients get priority support, dedicated service engineers, and annual performance review meetings as part of the project agreement.' },
    ],
    techDetails: [
      { label: 'Combustion Sizing Method', value: 'Thermal load mapping + safety margin calculation' },
      { label: 'Control Strategy', value: 'Multi-zone PLC with independent loop control per zone' },
      { label: 'Safety Architecture', value: 'Emergency stop, high-temp cutoff, fuel feed interlock, flame supervision' },
      { label: 'Communication Protocol', value: 'Modbus TCP/IP or Ethernet/IP for plant DCS integration' },
      { label: 'Structural Design', value: 'Includes structural support frame, walkways, and maintenance access' },
    ],
    faqs: [
      { q: 'What information do you need to start a custom project?', a: 'We need your current fuel type and consumption, process temperature requirements, available utilities, and site layout. A 1-hour initial call is usually sufficient to begin scoping.' },
      { q: 'How long does a typical custom project take?', a: 'From signed order to commissioning is typically 10–14 weeks for single-zone systems and 14–20 weeks for multi-zone or large-capacity installations.' },
      { q: 'Do you provide engineering drawings and documentation?', a: 'Yes. Every custom project includes P&ID drawings, electrical panel layout, operation and maintenance manual, and commissioning report.' },
    ],
    relatedSlugs: ['industrial-pellet-burner', 'boiler-pellet-burner'],
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
      'Chemical plants require dependable process heat with strong safety control. Nature Organic Energy systems provide managed combustion and reliable thermal delivery.',
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
    completionYear: '2023',
    projectDuration: '4 Months',
    challenge: 'The client had high furnace oil consumption across dryer lines and needed a reliable alternative without reducing production speed.',
    solution: 'Nature Organic Energy deployed an automatic pellet burner with custom feeder design and adaptive combustion controls tuned for variable drying load.',
    result: 'Fuel spend dropped by nearly half while thermal consistency improved, leading to better line stability and lower maintenance interventions.',
    keyMetrics: [
      { label: 'Fuel Saving', value: '48%' },
      { label: 'ROI Period', value: '11 Months' },
      { label: 'Old Fuel', value: 'Furnace Oil' },
      { label: 'Install Time', value: '5 Days' },
    ],
    technologies: ['High-Capacity Pellet Burner', 'Automated Bulk Feeder', 'Central Control Panel'],
    timeline: [
      { phase: 'Project Audit', detail: 'Detailed mapping of dryer thermal load cycles.' },
      { phase: 'System Design', detail: 'Engineering the custom burner flange and feeder path.' },
      { phase: 'Commissioning', detail: 'Installation and performance tuning on active line.' },
    ],
    testimonial: {
      quote: "The switch to Nature Organic Energy was smoother than expected. Our drying quality remains identical, but our fuel bills are down dramatically.",
      name: "Operations Manager",
      company: "Surat Textile Unit"
    }
  },
  {
    slug: 'vadodara-food-boiler',
    name: 'Food Plant Boiler Conversion',
    image: imageSet.foodLine,
    location: 'Vadodara, Gujarat',
    industry: 'Food Processing',
    capacity: '900,000 kcal/hr',
    savings: '44% monthly fuel savings',
    completionYear: '2023',
    projectDuration: '3 Months',
    challenge: 'Steam utility costs were increasing due to diesel usage and impacting operating margin across production shifts.',
    solution: 'A boiler-focused pellet burner package was integrated with existing control systems and optimized for steam load demand.',
    result: 'The plant stabilized utility expenses and improved steam generation reliability with lower monthly fuel outflow.',
    keyMetrics: [
      { label: 'Fuel Saving', value: '44%' },
      { label: 'ROI Period', value: '14 Months' },
      { label: 'Old Fuel', value: 'Diesel' },
      { label: 'Steam Stability', value: '±0.2 bar' },
    ],
    technologies: ['Boiler Pellet Burner', 'Smart PID Steam Control', 'UV Flame Supervision'],
    timeline: [
      { phase: 'Site Survey', detail: 'Verification of boiler burner mounting and flue path.' },
      { phase: 'Retrofit', detail: 'Direct installation on the original burner port.' },
      { phase: 'Training', detail: 'Intensive operator training for the shift supervisors.' },
    ],
    testimonial: {
      quote: "Our steam pressure recovery is much faster with this system. The fuel cost predictability is a major plus for our management.",
      name: "Plant Head",
      company: "Vadodara Food Processing"
    }
  },
  {
    slug: 'pune-chemical-utility',
    name: 'Chemical Utility Heating Upgrade',
    image: imageSet.controlRoom,
    location: 'Pune, Maharashtra',
    industry: 'Chemical Industry',
    capacity: '1,500,000 kcal/hr',
    savings: '50% monthly fuel savings',
    completionYear: '2024',
    projectDuration: '6 Months',
    challenge: 'Utility heating in chemical operations required robust control and dependable high-load output with better cost efficiency.',
    solution: 'A custom biomass heating architecture with smart interlocks, panel integration, and tuned combustion logic was deployed.',
    result: 'The site achieved major fuel savings while maintaining process-grade thermal stability and operational safety standards.',
    keyMetrics: [
      { label: 'Fuel Saving', value: '50%' },
      { label: 'ROI Period', value: '9 Months' },
      { label: 'Old Fuel', value: 'Furnace Oil' },
      { label: 'System Uptime', value: '99.5%' },
    ],
    technologies: ['Custom Combustion Chamber', 'PLC Automation System', 'Hazard Area Integration'],
    timeline: [
      { phase: 'Thermal Study', detail: 'Analysis of multiple process heating zones.' },
      { phase: 'Fabrication', detail: 'Off-site building of the custom heater block.' },
      { phase: 'Site Integration', detail: 'Piping and electrical interlocks with plant SCADA.' },
    ],
    testimonial: {
      quote: "The safety logic in the Nature Organic Energy system is top-notch. It integrated perfectly with our existing plant emergency protocols.",
      name: "Technical Director",
      company: "Pune Chemical Utility"
    }
  }
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
  { id: 1,  category: 'manufacturing', title: 'Machine Fabrication Bay',         image: imageSet.factoryHall },
  { id: 2,  category: 'installation',  title: 'On-Site Burner Installation',      image: imageSet.installSite },
  { id: 3,  category: 'application',   title: 'Boiler Room Operation',             image: imageSet.boilerPlant },
  { id: 4,  category: 'machine',       title: 'Industrial Pellet Burner Unit',    image: imageSet.machine1 },
  { id: 5,  category: 'application',   title: 'Textile Heating Integration',      image: imageSet.textile },
  { id: 6,  category: 'technology',    title: 'Combustion Control Panel',         image: imageSet.controlRoom },
  { id: 7,  category: 'machine',       title: 'Burner Assembly Close-Up',         image: imageSet.burnerOrig },
  { id: 8,  category: 'fuel',          title: 'Biomass Rice Husk Pellets',        image: imageSet.riceHusk },
  { id: 9,  category: 'application',   title: 'Food Process Heating Line',        image: imageSet.foodLine },
  { id: 10, category: 'fuel',          title: 'Pellet & Fuel Storage Area',       image: imageSet.pelletStorage },
  { id: 11, category: 'manufacturing', title: 'Industrial Facility Overview',     image: imageSet.industrialView },
  { id: 12, category: 'machine',       title: 'Machine Unit – Original View',     image: imageSet.machine1Orig },
  { id: 13, category: 'technology',    title: 'Furnace & Heating Line',           image: imageSet.furnaceLine },
  { id: 14, category: 'installation',  title: 'Expert Consultation & Planning',   image: imageSet.ctaOrig },
];

export const faqGroups = [
  {
    group: 'Fuel & Cost',
    items: [
      {
        question: 'What fuel does a Nature Organic Energy burner use?',
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
          'Yes. Nature Organic Energy provides engineering, installation, commissioning, operator training, and post-installation support services.',
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

