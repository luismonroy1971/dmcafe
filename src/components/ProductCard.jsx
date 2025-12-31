import React from 'react';
import { motion } from 'framer-motion';

export const ProductCard = ({ product, variant }) => {
    const MotionDiv = motion.div;
    const accentGradientClass = variant === 'b'
        ? 'from-[#FF9AC8] to-[#9292FF]'
        : 'from-[#9292FF] to-[#FF9AC8]';
    const imageSrc = product.image
        ? product.image.startsWith('/') ? product.image : `/${product.image}`
        : null;
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-px bg-linear-to-br ${accentGradientClass} shadow-xl shadow-black/10 hover:shadow-black/20 transition-shadow duration-300`}
        >
            <div className="rounded-[15px] bg-dm-white/75 supports-backdrop-filter:bg-dm-white/60 backdrop-blur-xl border border-white/40 overflow-hidden">
                <div className="flex flex-col sm:flex-row gap-4 p-4">
                    {imageSrc && (
                        <div className="w-full sm:w-36 h-40 sm:h-36 shrink-0 rounded-xl overflow-hidden bg-dm-white/60 border border-dm-black/10 relative">
                            <img
                                src={encodeURI(imageSrc)}
                                alt={product.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-black/10" />
                        </div>
                    )}

                    <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="text-xl font-semibold text-dm-black font-display tracking-tight leading-snug">
                                {product.name}
                            </h3>
                            <span className="shrink-0 rounded-full bg-dm-black/90 text-dm-white text-sm font-semibold px-3 py-1 whitespace-nowrap shadow-md shadow-black/15">
                                {product.price}
                            </span>
                        </div>
                        <div className="mt-2">
                            <div className="text-[11px] uppercase tracking-[0.22em] text-dm-black/60">
                                Detalles
                            </div>
                            <p className="text-sm text-dm-black/80 mt-1 leading-relaxed line-clamp-3">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MotionDiv>
    );
};
