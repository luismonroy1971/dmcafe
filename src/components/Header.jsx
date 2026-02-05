import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

export const Header = () => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const mapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3903.3360555459067!2d-77.06042!3d-11.951219000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU3JzA0LjQiUyA3N8KwMDMnMzcuNSJX!5e0!3m2!1ses!2spe!4v1770320025374!5m2!1ses!2spe';
    const closeMap = () => setIsMapOpen(false);
    const MotionDiv = motion.div;

    useEffect(() => {
        if (!isMapOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeMap();
        };

        document.addEventListener('keydown', handleKeyDown);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [isMapOpen]);

    return (
        <header className="py-10 px-4 flex flex-col items-center justify-center relative">
            <div className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-dm-gray/60 via-dm-gray/25 to-transparent pointer-events-none" />

            <MotionDiv className="w-64 md:w-80 mb-5 relative z-10 transform-3d" style={{ perspective: 1200 }}>
                <MotionDiv
                    whileHover={{ rotateX: 10, rotateY: -12, y: -3 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    className="relative rounded-[28px] overflow-hidden bg-white/55 supports-backdrop-filter:bg-white/35 backdrop-blur-md border border-white/40 shadow-2xl shadow-black/10"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <img
                        src="/dm_logo.png"
                        alt="DM CAFÉ Logo"
                        className="w-full h-auto object-contain rounded-[28px]"
                        style={{
                            transform: "perspective(900px) rotateX(10deg) translateY(-2px)",
                            filter:
                                "drop-shadow(0 18px 28px rgba(0,0,0,0.16)) drop-shadow(0 6px 10px rgba(0,0,0,0.10))",
                        }}
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/70 via-white/0 to-white/0 mix-blend-soft-light"
                        style={{ transform: "translateZ(1px)" }}
                    />
                </MotionDiv>
            </MotionDiv>

            <div className="relative z-10">
                <div className="rounded-full p-px bg-linear-to-r from-dm-red via-dm-magenta to-[#9292FF] shadow-xl shadow-black/25 hover:shadow-2xl hover:shadow-dm-red/15 transition-shadow">
                    <button
                        type="button"
                        onClick={() => setIsMapOpen(true)}
                        className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950/85 supports-backdrop-filter:bg-zinc-950/60 backdrop-blur-md text-white text-sm font-semibold px-6 py-3 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dm-red/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                    >
                        <span aria-hidden="true" className="absolute inset-0 rounded-full bg-linear-to-r from-white/10 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <MapPin className="w-4 h-4 text-dm-red" />
                        <span className="font-display tracking-tight">Cómo llegar</span>
                        <ArrowUpRight className="w-4 h-4 text-dm-gray/80 group-hover:text-white transition-colors" />
                    </button>
                </div>
            </div>

            {isMapOpen && (
                createPortal(
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mapa de ubicación"
                        className="fixed inset-0 z-9999 flex items-center justify-center p-4"
                    >
                        <button
                            type="button"
                            aria-label="Cerrar mapa"
                            onClick={closeMap}
                            className="absolute inset-0 bg-black/70"
                        />
                        <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl shadow-black/40">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                                <div className="text-sm font-semibold text-zinc-100">Ubicación</div>
                                <button
                                    type="button"
                                    onClick={closeMap}
                                    className="rounded-full px-3 py-1.5 text-sm font-semibold text-zinc-100/90 hover:text-zinc-100 hover:bg-white/10 transition-colors"
                                >
                                    Cerrar
                                </button>
                            </div>
                            <div className="w-full h-[60vh] max-h-130 bg-black">
                                <iframe
                                    src={mapsEmbedUrl}
                                    title="Google Maps"
                                    className="w-full h-full"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>,
                    document.body
                )
            )}
        </header>
    );
};
