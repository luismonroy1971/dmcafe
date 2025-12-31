import React from 'react';

export const Footer = () => {
    return (
        <footer className="py-8 text-center border-t border-white/5 mt-12 relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-dm-red/10 to-transparent pointer-events-none" />
            <p className="text-dm-gray/60 text-sm relative z-10">
                &copy; {new Date().getFullYear()} Restaurante Premium.
            </p>
            <p className="text-dm-gray/45 text-xs mt-1 relative z-10">
                Diseñado para su deleite.
            </p>
        </footer>
    );
};
