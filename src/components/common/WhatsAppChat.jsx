import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { contactInfo } from '../../data/siteData';
import { chatData } from '../../constants/siteConstants';

export function WhatsAppChat() {
    const [isOpen, setIsOpen] = useState(false);

    const handleWhatsAppClick = (message = '') => {
        const encodedMsg = encodeURIComponent(message || "Hi, I'm interested in Nature Organic Energy biomass burners.");
        window.open(`https://wa.me/91${contactInfo.whatsapp}?text=${encodedMsg}`, '_blank');
    };

    return (
        <div className="fixed bottom-4 right-4 z-[200] flex flex-col items-end gap-3 md:bottom-5 md:right-5">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-2 flex w-[280px] xs:w-[300px] sm:w-[360px] max-h-[80vh] flex-col overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-in fade-in slide-in-from-bottom-6 duration-300">
                    {/* Header - Fixed */}
                    <div className="flex-none bg-[#25D366] p-4 sm:p-6 text-white relative">
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                        >
                            <X size={18} />
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="h-11 w-11 sm:h-14 sm:w-14 rounded-full bg-white/20 flex items-center justify-center border border-white/30 text-lg sm:text-xl font-bold">
                                {chatData.avatar}
                            </div>
                            <div>
                                <h3 className="font-bold text-base sm:text-lg leading-none">{chatData.title}</h3>
                                <div className="mt-2.5 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
                                    <span className="text-[10px] sm:text-xs font-medium text-white/90">{chatData.status}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat Body - Scrollable */}
                    <div className="flex-1 overflow-y-auto bg-[#F0F2F5]/50 p-4 sm:p-5 custom-scrollbar">
                        <div className="relative rounded-2xl bg-white p-3 sm:p-4 shadow-sm border border-[#DCE3E6]">
                            <p className="text-[9px] font-bold text-[#2BB673] mb-1.5 uppercase tracking-tighter">Typing...</p>
                            <div className="flex gap-2 sm:gap-3">
                                <div className="flex-none h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#E8F8F0] flex items-center justify-center text-[#2BB673] text-[10px] sm:text-[11px] font-bold border border-[#2BB673]/20">
                                    {chatData.avatar[0]}
                                </div>
                                <p className="text-xs sm:text-sm text-[#354653] leading-relaxed">
                                    {chatData.welcomeMsg}
                                </p>
                            </div>
                            {/* Tail */}
                            <div className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 border-r border-b border-[#DCE3E6] bg-white"></div>
                        </div>

                        {/* Quick Questions */}
                        <div className="mt-6">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-[#5B707E] mb-3">Quick questions:</p>
                            <div className="flex flex-col gap-2">
                                {chatData.quickQuestions.slice(0, 3).map((q) => (
                                    <button
                                        key={q}
                                        onClick={() => handleWhatsAppClick(q)}
                                        className="text-left w-full rounded-xl border border-[#DCE3E6] bg-white px-3 py-2.5 text-[11px] font-semibold text-[#354653] hover:border-[#25D366] hover:bg-[#FDFEFD] hover:text-[#25D366] transition-all shadow-sm"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA - Fixed */}
                    <div className="flex-none p-4 sm:p-6 bg-[#F0F2F5]/50 text-center border-t border-[#DCE3E6]/50">
                        <button 
                            onClick={() => handleWhatsAppClick()}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-xs sm:text-sm font-bold text-white shadow-[0_12px_24px_rgba(37,211,102,0.3)] transition-transform active:scale-[0.98] hover:opacity-95"
                        >
                            <MessageCircle size={18} fill="currentColor" />
                            {chatData.ctaText}
                        </button>
                        <p className="mt-3 text-[10px] font-medium text-[#9EABAE]">
                            {chatData.footerText}
                        </p>
                    </div>
                </div>
            )}

            {/* Floating Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full shadow-2xl transition-all duration-300 active:scale-90 ${
                    isOpen 
                    ? 'bg-[#354653] rotate-90' 
                    : 'bg-[#25D366] hover:scale-110'
                }`}
            >
                {isOpen ? (
                    <X size={24} className="text-white" />
                ) : (
                    <div className="relative">
                        <MessageCircle size={28} className="text-white" />
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[8px] font-black text-[#25D366]">1</span>
                    </div>
                )}
            </button>
        </div>
    );
}
