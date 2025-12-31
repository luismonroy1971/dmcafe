import React from 'react';

export const Header = () => {
    return (
        <header className="py-10 px-4 flex flex-col items-center justify-center relative">
            <div className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-dm-gray/60 via-dm-gray/25 to-transparent pointer-events-none" />

            <div className="w-64 md:w-80 mb-5 relative z-10 transform-3d">
                <div className="relative rounded-[28px] overflow-hidden bg-white/55 supports-backdrop-filter:bg-white/35 backdrop-blur-md border border-white/40 shadow-2xl shadow-black/10">
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
                </div>
            </div>
        </header>
    );
};
