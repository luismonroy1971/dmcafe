import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ProductCard } from './ProductCard';

export const CategorySection = ({ category }) => {
    const [isOpen, setIsOpen] = useState(false);
    const MotionDiv = motion.div;

    return (
        <div className="w-full mb-4 break-inside-avoid">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-56 relative rounded-2xl overflow-hidden group border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-dm-red/20 hover:scale-[1.02]"
            >
                {category.image ? (
                    <img
                        src={encodeURI(category.image)}
                        alt={category.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />
                ) : (
                    <div className="absolute inset-0 bg-linear-to-br from-dm-surface via-dm-bg to-dm-black w-full h-full" />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:bg-black/60" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                        <h2 className="text-3xl font-bold text-white mb-2 font-display tracking-tight drop-shadow-lg">
                            {category.name}
                        </h2>
                        <p className="text-sm font-semibold uppercase tracking-wider inline-flex items-center px-3 py-1.5 rounded-xl bg-[#9292FF] text-white shadow-lg shadow-black/20">
                            {category.description}
                        </p>
                    </div>

                    {/* Expand Indicator */}
                    <div className={`absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 ${isOpen ? 'rotate-180 bg-dm-red/25 text-dm-red' : 'text-white'}`}>
                        <ChevronDown className="w-6 h-6" />
                    </div>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <MotionDiv
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pt-2 pb-4 px-1 space-y-3">
                            {category.products.map((product, index) => (
                                <ProductCard key={product.id} product={product} variant={index % 2 === 0 ? 'a' : 'b'} />
                            ))}
                        </div>
                    </MotionDiv>
                )}
            </AnimatePresence>
        </div>
    );
};
