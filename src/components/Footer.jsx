import { Eye, Sparkles, Target, Users } from 'lucide-react';

export const Footer = () => {
    const sections = [
        {
            id: 'about',
            label: 'Quiénes somos',
            title: 'Equipo y propuesta',
            description:
                'Integramos un equipo de emprendimiento, comprometido con los clientes y que ofrecemos productos de la mejor calidad y frescura. Contamos con una amplia variedad de dulces y repostería de línea para todo tipo de gustos.',
            Icon: Users,
            gradient: 'from-[#9292FF] to-[#FF9AC8]',
        },
        {
            id: 'mission',
            label: 'Misión',
            title: 'Delicia con eficiencia',
            description:
                'Deleitar a nuestros clientes con deliciosos productos, elaborados eficientemente con insumos de calidad y por un equipo humano comprometido. Ser la dulcería líder y preferida por el sabor, calidad y creatividad de nuestros productos, la excelente atención y la cercanía a nuestros clientes.',
            Icon: Target,
            gradient: 'from-[#FF9AC8] to-[#9292FF]',
        },
        {
            id: 'vision',
            label: 'Visión',
            title: 'Referencia sostenible',
            description:
                'Ser el referente en dulcerías velando por una cadena alimentaria sostenible, cuyo reconocimiento provenga tanto de consumidores, proveedores y la sociedad.',
            Icon: Eye,
            gradient: 'from-[#9292FF] to-[#FF9AC8]',
        },
        {
            id: 'pillars',
            label: 'Pilares estratégicos',
            title: 'Nuestro motor',
            description:
                'Esfuerzo, sacrificio, trabajo bien realizado e innovación son los 4 pilares que nos han permitido posicionarnos paulatinamente. La pasión y dedicación con las que hacemos nuestros productos tienen una única razón de ser: satisfacer al cliente.',
            Icon: Sparkles,
            gradient: 'from-[#FF9AC8] to-[#9292FF]',
        },
    ];

    return (
        <footer className="py-10 px-4 border-t border-white/5 mt-12 relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-dm-red/10 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left items-stretch">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className={`group relative rounded-2xl p-px bg-linear-to-br ${section.gradient} shadow-2xl shadow-black/20 hover:shadow-2xl hover:shadow-dm-red/10 transition-all duration-300 hover:-translate-y-0.5 h-full md:h-80`}
                        >
                            <div aria-hidden="true" className={`pointer-events-none absolute -inset-6 bg-linear-to-br ${section.gradient} blur-2xl opacity-25 group-hover:opacity-45 transition-opacity`} />
                            <div className="relative rounded-[15px] bg-zinc-950/70 supports-backdrop-filter:bg-zinc-950/55 backdrop-blur-xl border border-white/10 p-5 overflow-hidden h-full flex flex-col text-white">
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-black/30 opacity-70" />
                                <div className="relative flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/80">
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-dm-red/90 shadow-[0_0_0_4px_rgba(227,6,19,0.12)]" />
                                            {section.label}
                                        </div>
                                        <h3 className="mt-2 text-xl font-semibold text-white font-display tracking-tight leading-snug">
                                            {section.title}
                                        </h3>
                                    </div>
                                    <div className={`shrink-0 rounded-2xl p-px bg-linear-to-br ${section.gradient}`}>
                                        <div className="rounded-[15px] bg-white/5 border border-white/10 p-2.5">
                                            <section.Icon className="w-5 h-5 text-white/90" />
                                        </div>
                                    </div>
                                </div>
                                <p className="relative mt-3 text-sm text-white/75 leading-relaxed line-clamp-6">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex flex-col items-center gap-1 text-center">
                    <p className="text-white/70 text-sm">
                        &copy; {new Date().getFullYear()} Dulce Maná.
                    </p>
                    <p className="text-white/55 text-xs">
                        Diseñado para su deleite.
                    </p>
                </div>
            </div>
        </footer>
    );
};
