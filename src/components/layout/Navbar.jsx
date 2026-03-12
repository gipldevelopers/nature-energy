import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { topNav } from '../../constants/siteConstants';
import { products, industries, projects } from '../../data/siteData';

const Motion = motion;

const dropdownData = {
    '/products': products,
    '/industries': industries,
    '/projects': projects
};

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileExpanded, setMobileExpanded] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
        setActiveDropdown(null);
    }, [location.pathname]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-[120] transition-all duration-300 ${scrolled
                ? 'border-b border-[#DCE3E6] bg-[#FDFEFD]/95 shadow-[0_10px_30px_rgba(53,70,83,0.12)] backdrop-blur-xl'
                : 'bg-white border-b border-[#DCE3E6] sm:bg-transparent sm:border-transparent'
                }`}
        >
            <div className="mx-auto flex h-16 sm:h-20 w-[min(1280px,94vw)] items-center justify-between gap-4">
                <Link to="/" className="inline-flex items-center gap-2.5 flex-shrink-0">
                    <img
                        src="/nature organic energy.svg"
                        alt="Nature Organic Energy Logo"
                        className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />
                    <div className="flex flex-col py-1">
                        <span className="text-[14px] sm:text-[17px] font-bold leading-none text-[#354653] whitespace-nowrap">Nature Organic</span>
                        <span className="mt-1 text-[9px] sm:text-[11px] uppercase tracking-[0.16em] leading-none text-[#078DA4] font-bold">Energy</span>
                    </div>
                </Link>

                <nav className="hidden items-center gap-1 lg:flex h-full">
                    {topNav.map((item) => {
                        const hasDropdown = dropdownData[item.path];
                        return (
                            <div
                                key={item.path}
                                className="relative h-full flex items-center"
                                onMouseEnter={() => hasDropdown && setActiveDropdown(item.path)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <NavLink
                                    to={item.path}
                                    end={item.path === '/'}
                                    className={({ isActive }) =>
                                        `flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${isActive
                                            ? 'bg-[#078DA4]/12 text-[#066F82]'
                                            : 'text-[#5B707E] hover:bg-[#F2F6F7] hover:text-[#354653]'
                                        }`
                                    }
                                >
                                    {item.label}
                                    {hasDropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.path ? 'rotate-180' : ''}`} />}
                                </NavLink>

                                {/* Mega Menu Dropdown */}
                                <AnimatePresence>
                                    {activeDropdown === item.path && (
                                        <Motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute left-[-20px] top-[calc(100%-10px)] min-w-[320px] w-max rounded-2xl border border-[#DCE3E6] bg-white p-3 shadow-2xl"
                                        >
                                            <div className="grid gap-1">
                                                {hasDropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.slug}
                                                        to={`${item.path}/${subItem.slug}`}
                                                        className="group flex flex-col rounded-xl px-4 py-3 transition hover:bg-[#F2F6F7]"
                                                    >
                                                        <span className="whitespace-nowrap text-sm font-bold text-[#354653] group-hover:text-[#078DA4]">
                                                            {subItem.name}
                                                        </span>
                                                        {subItem.role && (
                                                            <span className="mt-0.5 text-[10px] text-[#5B707E] uppercase tracking-wide">
                                                                {subItem.role}
                                                            </span>
                                                        )}
                                                    </Link>
                                                ))}
                                            </div>
                                        </Motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
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

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <Motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="fixed right-0 top-16 sm:top-20 z-[140] h-[calc(100svh-64px)] sm:h-[calc(100svh-80px)] w-[min(330px,92vw)] border-l border-[#DCE3E6] bg-[#FDFEFD] p-5 shadow-[0_20px_40px_rgba(53,70,83,0.2)] overflow-y-auto"
                    >
                        <div className="grid gap-2">
                            {topNav.map((item) => {
                                const hasDropdown = dropdownData[item.path];
                                return (
                                    <div key={item.path} className="grid gap-1">
                                        <div className="flex items-center gap-1">
                                            <NavLink
                                                to={item.path}
                                                end={item.path === '/'}
                                                onClick={() => !hasDropdown && setOpen(false)}
                                                className={({ isActive }) =>
                                                    `flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${isActive
                                                        ? 'border-[#078DA4]/40 bg-[#078DA4]/12 text-[#066F82]'
                                                        : 'border-[#DCE3E6] text-[#354653]'
                                                    }`
                                                }
                                            >
                                                {item.label}
                                            </NavLink>
                                            {hasDropdown && (
                                                <button
                                                    onClick={() => setMobileExpanded(mobileExpanded === item.path ? null : item.path)}
                                                    className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all ${
                                                        mobileExpanded === item.path 
                                                        ? 'border-[#078DA4] bg-[#078DA4] text-white' 
                                                        : 'border-[#DCE3E6] text-[#5B707E]'
                                                    }`}
                                                >
                                                    <ChevronDown size={18} className={`transition-transform duration-300 ${mobileExpanded === item.path ? 'rotate-180' : ''}`} />
                                                </button>
                                            )}
                                        </div>

                                        <AnimatePresence>
                                            {hasDropdown && mobileExpanded === item.path && (
                                                <Motion.div 
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="ml-4 overflow-hidden border-l border-[#DCE3E6] pl-4 my-1"
                                                >
                                                    <div className="grid gap-1 py-1">
                                                        {hasDropdown.map(subItem => (
                                                            <Link
                                                                key={subItem.slug}
                                                                to={`${item.path}/${subItem.slug}`}
                                                                onClick={() => setOpen(false)}
                                                                className="group flex flex-col py-2.5 transition-all"
                                                            >
                                                                <span className="text-[14px] font-semibold text-[#5B707E] group-hover:text-[#066F82]">
                                                                    {subItem.name}
                                                                </span>
                                                                {subItem.role && (
                                                                    <span className="text-[10px] uppercase tracking-wider text-[#9EABAE]">
                                                                        {subItem.role}
                                                                    </span>
                                                                )}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </Motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                        <Link
                            to="/contact"
                            className="mt-5 inline-flex w-full justify-center rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-5 py-3 text-sm font-semibold text-[#FDFEFD]"
                        >
                            Get Quote
                        </Link>
                    </Motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
