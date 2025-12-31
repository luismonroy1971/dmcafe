import React from 'react';

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-dm-white text-dm-black font-sans selection:bg-dm-magenta/25 selection:text-dm-black relative overflow-hidden">
            <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-dm-white" />
                <div className="absolute -top-36 -left-36 h-165 w-165 rounded-full bg-[#9292FF]/55 blur-3xl" />
                <div className="absolute -bottom-36 -right-36 h-165 w-165 rounded-full bg-[#FF9AC8]/55 blur-3xl" />
                <div className="absolute top-1/4 -left-20 h-130 w-130 rounded-full bg-[#FF9AC8]/35 blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 h-130 w-130 rounded-full bg-[#9292FF]/35 blur-3xl" />
                <div className="absolute inset-0 bg-linear-to-br from-[#9292FF]/18 via-transparent to-[#FF9AC8]/18" />
                <div
                    className="absolute inset-0 opacity-[0.22] mix-blend-multiply"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
                    }}
                />
            </div>

            <div className="max-w-5xl mx-auto min-h-screen flex flex-col bg-dm-white/70 supports-backdrop-filter:bg-dm-white/55 backdrop-blur-xl sm:border-x sm:border-dm-gray/70 shadow-2xl shadow-black/10">
                {children}
            </div>
            <a
                href="https://wa.me/51989320537"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp: +51 989 320 537"
                className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-black/20 hover:bg-green-600 hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dm-white"
            >
                <svg
                    viewBox="0 0 32 32"
                    width="26"
                    height="26"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M16.02 3C9.39 3 4 8.39 4 15.02c0 2.33.67 4.6 1.95 6.56L4 29l7.63-1.99A12 12 0 0 0 16.02 27C22.64 27 28 21.64 28 15.02 28 8.39 22.64 3 16.02 3Zm0 21.78c-1.85 0-3.64-.5-5.21-1.46l-.37-.22-4.52 1.18 1.21-4.4-.24-.38A9.72 9.72 0 0 1 6.3 15c0-5.37 4.36-9.73 9.72-9.73 5.37 0 9.73 4.36 9.73 9.73 0 5.36-4.36 9.72-9.73 9.72Zm5.52-7.3c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.48-.5-.68-.51l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
                </svg>
            </a>
        </div>
    );
};
