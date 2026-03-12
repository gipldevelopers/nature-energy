import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { imageSet } from '../../data/siteData';
import { cardBase } from '../../constants/siteConstants';

export function IndustryInstallations() {
    const installs = [
        { name: 'Textile Dyeing', location: 'Tiruppur, TN', scale: '1.5M Kcal', image: imageSet.textile, slug: 'surat-textile-retrofit' },
        { name: 'Food Processing', location: 'Nashik, MH', scale: '500K Kcal', image: imageSet.foodLine, slug: 'vadodara-food-boiler' },
        { name: 'Chemical Reactor', location: 'Ankleshwar, GJ', scale: '2.5M Kcal', image: imageSet.controlRoom, slug: 'pune-chemical-utility' },
        { name: 'Hospitality Boiler', location: 'Udaipur, RJ', scale: '300K Kcal', image: imageSet.installSite, slug: 'surat-textile-retrofit' },
    ];

    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-8 md:p-12">
            <SectionTitle
                label="Sector Success"
                title="Specialized Installs per Industry"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {installs.map((item) => (
                    <Reveal key={item.name} className={`${cardBase} group overflow-hidden p-0 transition-all duration-300 hover:shadow-2xl`}>
                        <Link to={`/projects/${item.slug}`} className="block h-full group">
                            <div className="relative h-48 overflow-hidden">
                                <SafeImage src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-xs font-bold text-[#66D9E8] uppercase tracking-wider">{item.location}</p>
                                </div>
                                <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-[#354653] group-hover:text-[#078DA4] transition-colors duration-300">{item.name}</h4>
                                <p className="mt-1 text-xs text-[#5B707E]">Thermal Scale: <strong>{item.scale}</strong></p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#078DA4]">View Case Study</span>
                                    <div className="h-6 w-6 rounded-full bg-[#078DA4]/10 flex items-center justify-center text-[#078DA4] group-hover:bg-[#078DA4] group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight size={12} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
