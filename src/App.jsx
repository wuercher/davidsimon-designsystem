import React, { useState } from 'react';
import { ArrowRight, Brain, Target, Compass, Star, ChevronRight, Menu, X, Check, HelpCircle, Quote, Phone, Mail, User } from 'lucide-react';

export default function App() {
    const [activeTab, setActiveTab] = useState('homepage');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Inject Custom Fonts
    const fontStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
    
    :root {
      --color-blue-dark: #121F33;
      --color-blue-light: #2E476B;
      --color-gold: #C5A059;
      --color-gold-light: #F2E8D3;
      --color-beige: #F8F6F0;
      --color-white: #FFFFFF;
    }

    .font-heading { font-family: 'Outfit', sans-serif; }
    .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
  `;

    const menuItems = ['Philosophie', 'Angebot', 'Über mich', 'FAQ', 'Kontakt'];

    return (
        <div className="min-h-screen bg-[#F8F6F0] font-body text-[#121F33]">
            <style>{fontStyles}</style>

            {/* Top Navigation */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F2E8D3]">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <button onClick={() => setActiveTab('homepage')} className="font-heading font-bold text-xl text-[#121F33] shrink-0 hover:opacity-80 transition-opacity">
                        DAVID<span className="text-[#C5A059]">SIMON</span>
                    </button>

                    {/* Center Navigation */}
                    <nav className="hidden lg:flex flex-1 justify-center gap-8 items-center" aria-label="Hauptnavigation">
                        {menuItems.slice(0, 3).map((item, idx) => (
                            <a 
                                key={idx} 
                                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                                onClick={() => setActiveTab('homepage')}
                                className="text-[#2E476B] hover:text-[#C5A059] font-medium transition-colors text-sm uppercase tracking-wider"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Right Navigation & CTA */}
                    <div className="hidden lg:flex gap-6 items-center shrink-0">
                        {menuItems.slice(3).map((item, idx) => (
                            <a 
                                key={idx} 
                                href={`#${item.toLowerCase()}`} 
                                onClick={() => setActiveTab('homepage')}
                                className="text-[#2E476B] hover:text-[#C5A059] font-medium transition-colors text-sm uppercase tracking-wider"
                            >
                                {item}
                            </a>
                        ))}
                        <button 
                            onClick={() => setActiveTab('designsystem')}
                            className={`font-medium transition-colors text-sm uppercase tracking-wider ${activeTab === 'designsystem' ? 'text-[#C5A059]' : 'text-[#2E476B] hover:text-[#C5A059]'}`}
                        >
                            Designsystem
                        </button>
                        <button className="bg-[#121F33] text-white px-6 py-3 rounded-none hover:bg-[#2E476B] transition-colors font-medium ml-2">
                            Erstgespräch buchen
                        </button>
                    </div>

                    <button className="lg:hidden shrink-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white px-6 py-6 border-b border-[#F2E8D3] flex flex-col gap-6 shadow-xl">
                        {menuItems.map((item, idx) => (
                            <a 
                                key={idx} 
                                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                                onClick={() => { setActiveTab('homepage'); setMobileMenuOpen(false); }}
                                className="text-left font-medium text-[#121F33] text-lg hover:text-[#C5A059] transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <button 
                            onClick={() => { setActiveTab('designsystem'); setMobileMenuOpen(false); }}
                            className="text-left font-medium text-[#121F33] text-lg hover:text-[#C5A059] transition-colors"
                        >
                            Designsystem
                        </button>
                        <div className="pt-4 border-t border-[#F2E8D3]">
                            <button className="w-full bg-[#121F33] text-white px-6 py-4 rounded-none hover:bg-[#2E476B] transition-colors font-medium text-lg">
                                Erstgespräch buchen
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="pt-20">
                {activeTab === 'homepage' ? <HomepageView /> : <DesignSystemView />}
            </div>
        </div>
    );
}

/* =========================================
   HOMEPAGE MOCKUP
========================================= */
const HomepageView = () => {
    return (
        <main itemScope itemType="https://schema.org/WebPage">
            {/* Hero Section - SEO Optimized H1 & Description */}
            <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                    <div className="space-y-4">
                        <span className="text-[#C5A059] font-heading tracking-widest uppercase text-sm font-semibold block">
                            Zertifizierter Mental Coach & Resilienz-Trainer
                        </span>
                        <h1 className="font-heading text-5xl md:text-7xl font-light leading-[1.1] text-[#121F33]">
                            Klarheit für deinen <br />
                            <span className="font-semibold text-[#121F33]">Geist.</span> Raum für dein <br />
                            <span className="italic text-[#C5A059]">Potenzial.</span>
                        </h1>
                    </div>
                    <p className="text-lg text-[#2E476B] leading-relaxed max-w-md font-light">
                        <strong>Evidenzbasiertes Mental Coaching</strong> für Fach- und Führungskräfte. Ich begleite dich dabei, mentale Blockaden zu lösen, Resilienz aufzubauen und deine Ziele mit vollem Fokus zu erreichen.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="bg-[#121F33] text-white px-8 py-4 flex items-center justify-center gap-2 hover:bg-[#2E476B] transition-colors font-medium">
                            Kostenloses Erstgespräch <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
                <div className="relative">
                    {/* SEO Optimized Image with explicit alt tag */}
                    <div className="w-full aspect-[4/5] bg-[#F2E8D3] rounded-tl-full rounded-br-full overflow-hidden relative shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#121F33]/10 to-transparent"></div>
                        <img
                            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2000&auto=format&fit=crop"
                            alt="Mental Coach in ruhiger Umgebung für Fokus und Klarheit"
                            className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                        />
                    </div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#C5A059] rounded-full mix-blend-multiply blur-2xl opacity-40"></div>
                </div>
            </section>

            {/* GEO Definition Section (AI snippet bait) */}
            <section className="bg-white py-20 border-y border-[#F2E8D3]">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-6">
                    <h2 className="font-heading text-3xl font-medium text-[#121F33]">Was ist modernes Mental Coaching?</h2>
                    <p className="text-[#2E476B] text-lg font-light leading-relaxed">
                        Mental Coaching ist ein zielgerichteter Prozess zur Optimierung der kognitiven und emotionalen Fähigkeiten. Im Gegensatz zur Psychotherapie richtet sich Coaching an psychisch gesunde Menschen, die durch <strong>Mindset-Arbeit, Stressmanagement und Resilienztraining</strong> ihre persönliche und berufliche Leistungsfähigkeit steigern möchten.
                    </p>
                </div>
            </section>

            {/* Philosophie / Approach */}
            <section id="philosophie" className="bg-[#121F33] text-white py-32">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-16">
                    <div className="md:col-span-1 space-y-6">
                        <h2 className="font-heading text-4xl font-light">
                            Meine <br /><span className="text-[#C5A059] font-semibold">Philosophie</span>
                        </h2>
                        <p className="text-[#F8F6F0]/70 font-light leading-relaxed">
                            Wahre Veränderung beginnt im Inneren. Mein wissenschaftlich fundierter Ansatz verbindet kognitive Verhaltensmethoden mit tiefer systemischer Empathie.
                        </p>
                    </div>
                    <div className="md:col-span-2 grid sm:grid-cols-2 gap-12">
                        <article className="space-y-4">
                            <Brain className="text-[#C5A059] w-10 h-10" strokeWidth={1.5} aria-hidden="true" />
                            <h3 className="font-heading text-xl font-medium">Mindset Shift & Transformation</h3>
                            <p className="text-[#F8F6F0]/70 text-sm leading-relaxed font-light">
                                Wir identifizieren limitierende Glaubenssätze und transformieren sie in kraftvolle mentale Ressourcen für deinen Alltag und Beruf.
                            </p>
                        </article>
                        <article className="space-y-4">
                            <Target className="text-[#C5A059] w-10 h-10" strokeWidth={1.5} aria-hidden="true" />
                            <h3 className="font-heading text-xl font-medium">Fokus & Zielerreichung</h3>
                            <p className="text-[#F8F6F0]/70 text-sm leading-relaxed font-light">
                                In einer reizüberfluteten Welt erlernst du Strategien, um den Lärm auszublenden und dich messbar auf deine Kernziele zu konzentrieren.
                            </p>
                        </article>
                        <article className="space-y-4">
                            <Compass className="text-[#C5A059] w-10 h-10" strokeWidth={1.5} aria-hidden="true" />
                            <h3 className="font-heading text-xl font-medium">Nachhaltige Resilienz</h3>
                            <p className="text-[#F8F6F0]/70 text-sm leading-relaxed font-light">
                                Aufbau von psychischer Widerstandskraft (Resilienz). Du erlernst Techniken, um in Stresssituationen ruhig zu agieren und Burnout präventiv zu begegnen.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Angebot / Services - Explicit naming for SEO */}
            <section id="angebot" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <span className="text-[#C5A059] font-heading tracking-widest uppercase text-sm font-semibold">
                        Leistungen & Coaching-Pakete
                    </span>
                    <h2 className="font-heading text-4xl font-light text-[#121F33]">
                        Spezialisiertes Mental Coaching
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "1:1 Mental Coaching",
                            subtitle: "Für persönliche Durchbrüche",
                            price: "ab 150€ / Session",
                            features: ["Individuelle Potenzialanalyse", "Auflösung von Blockaden", "Konkreter Action Plan", "Zwischen-Support via WhatsApp"],
                            highlight: false
                        },
                        {
                            title: "Executive & Leadership Mentoring",
                            subtitle: "Für Führungskräfte",
                            price: "Individuelles Paket",
                            features: ["Rollenverständnis & Führung", "Sichere Entscheidungsfindung", "Performance & Life Balance", "Konfliktmanagement"],
                            highlight: true
                        },
                        {
                            title: "Resilienz & Stressmanagement",
                            subtitle: "Für Teams im Unternehmen",
                            price: "Auf Anfrage",
                            features: ["Stressprävention im Job", "Achtsamkeitstraining", "Gesunde Team-Dynamik", "Workshops vor Ort / Online"],
                            highlight: false
                        }
                    ].map((service, idx) => (
                        <article key={idx} className={`p-10 transition-transform hover:-translate-y-2 duration-300 ${service.highlight ? 'bg-[#121F33] text-white shadow-xl' : 'bg-white text-[#121F33] shadow-lg border border-[#F2E8D3]'}`}>
                            <h3 className={`font-heading text-2xl font-medium mb-2 ${service.highlight ? 'text-white' : 'text-[#121F33]'}`}>{service.title}</h3>
                            <p className={`text-sm mb-6 ${service.highlight ? 'text-[#C5A059]' : 'text-[#2E476B]'}`}>{service.subtitle}</p>

                            <div className={`text-xl font-light mb-8 pb-8 border-b ${service.highlight ? 'border-white/20' : 'border-[#F2E8D3]'}`}>
                                {service.price}
                            </div>

                            <ul className="space-y-4 mb-10" aria-label={`Vorteile von ${service.title}`}>
                                {service.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm font-light">
                                        <Check className={`w-5 h-5 shrink-0 ${service.highlight ? 'text-[#C5A059]' : 'text-[#121F33]'}`} strokeWidth={2} aria-hidden="true" />
                                        <span className={service.highlight ? 'text-white/80' : 'text-[#2E476B]'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 font-medium transition-colors ${service.highlight ? 'bg-[#C5A059] text-white hover:bg-[#b08d2b]' : 'bg-[#F8F6F0] text-[#121F33] hover:bg-[#E8D5A5]'}`}>
                                Details ansehen
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            {/* Über mich - Optimized for E-E-A-T (Expertise, Trust) */}
            <section id="über-mich" className="py-32 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 md:order-1">
                    <div className="aspect-[3/4] w-full max-w-md mx-auto bg-white p-4 shadow-xl rotate-[-2deg]">
                        <img
                            src="https://images.unsplash.com/photo-1552697676-e88931168fec?q=80&w=1500&auto=format&fit=crop"
                            alt="David, zertifizierter Mental Coach und Achtsamkeitstrainer"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="space-y-8 order-1 md:order-2">
                    <span className="text-[#C5A059] font-heading tracking-widest uppercase text-sm font-semibold">
                        Über Mich & Meine Expertise
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-light text-[#121F33] leading-tight">
                        Hi, ich bin David.<br />
                        <span className="font-semibold">Dein zertifizierter Coach.</span>
                    </h2>
                    <div className="space-y-4 text-[#2E476B] font-light leading-relaxed">
                        <p>
                            Mit über 10 Jahren Führungserfahrung in der Wirtschaft weiß ich genau, wie sich Druck, hohe Erwartungen und mentaler Stress anfühlen. Der äußere Erfolg war da, doch die innere Klarheit fehlte.
                        </p>
                        <p>
                            Heute bin ich <strong>TÜV-zertifizierter systemischer Coach und diplomierter Achtsamkeitstrainer</strong>. Mein Fokus liegt darauf, evidenzbasierte Methoden der Psychologie greifbar in den Alltag meiner Klienten zu integrieren.
                        </p>
                        <p>
                            In meinen Sessions schaffe ich einen wertungsfreien Raum. Kein esoterisches Blabla, sondern anwendbare Strategien für messbare Veränderungen.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 text-[#121F33] font-medium hover:text-[#C5A059] transition-colors pt-4 border-b border-transparent hover:border-[#C5A059] pb-1">
                        Mehr zu meinen Qualifikationen <ChevronRight size={18} />
                    </button>
                </div>
            </section>

            {/* FAQ Section - Crucial for GEO (Generative Engine Optimization) */}
            <section id="faq" className="bg-white py-32 border-t border-[#F2E8D3]">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-16 space-y-4">
                        <HelpCircle className="w-12 h-12 text-[#C5A059] mx-auto mb-4" strokeWidth={1.5} />
                        <h2 className="font-heading text-4xl font-light text-[#121F33]">Häufig gestellte Fragen (FAQ)</h2>
                        <p className="text-[#2E476B] font-light">Alles, was du vor dem ersten Schritt wissen musst.</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "Wie unterscheidet sich Mental Coaching von Psychotherapie?",
                                a: "Psychotherapie heilt psychische Erkrankungen und arbeitet oft stark vergangenheitsorientiert. Mental Coaching hingegen richtet sich an gesunde Menschen und ist ressourcen- und zukunftsorientiert. Wir arbeiten an konkreten Zielen, Mindset und Resilienz."
                            },
                            {
                                q: "Wie schnell wirken die Coaching-Strategien?",
                                a: "Viele Klienten spüren bereits nach dem ersten 1:1 Deep Dive deutlich mehr Klarheit und Entlastung. Für eine nachhaltige Transformation von tiefsitzenden Glaubenssätzen oder Führungskompetenzen empfehle ich einen Prozess von 3 bis 6 Monaten."
                            },
                            {
                                q: "Findet das Mental Coaching online oder vor Ort statt?",
                                a: "Ich biete maximale Flexibilität: Wir können uns persönlich in meiner Coaching-Praxis treffen oder die Sessions bequem via verschlüsseltem Video-Call (Zoom/Teams) durchführen. Die Qualität der Ergebnisse ist bei beiden Formaten identisch."
                            }
                        ].map((faq, idx) => (
                            <details key={idx} className="group border border-[#F2E8D3] p-6 cursor-pointer bg-[#F8F6F0] hover:bg-white transition-colors">
                                <summary className="font-heading text-lg font-medium text-[#121F33] list-none flex justify-between items-center">
                                    {faq.q}
                                    <span className="text-[#C5A059] group-open:rotate-45 transition-transform text-2xl font-light">+</span>
                                </summary>
                                <p className="mt-4 text-[#2E476B] font-light leading-relaxed">
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer / CTA - SEO Location & Contact info */}
            <footer className="bg-[#121F33] text-white pt-32 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C5A059] rounded-full mix-blend-multiply blur-[100px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10 mb-32">
                    <h2 className="font-heading text-5xl font-light">
                        Bereit für deinen <span className="text-[#C5A059] font-semibold">mentalen Durchbruch?</span>
                    </h2>
                    <p className="text-[#F8F6F0]/70 font-light text-lg max-w-xl mx-auto">
                        Buche dir jetzt ein unverbindliches, kostenloses Erstgespräch. Wir analysieren deine aktuelle Situation und schauen, ob wir menschlich zusammenpassen.
                    </p>
                    <button className="bg-[#C5A059] text-white px-10 py-5 text-lg hover:bg-white hover:text-[#121F33] transition-colors font-medium shadow-lg">
                        Kostenloses Erstgespräch wählen
                    </button>
                </div>

                <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-12 grid md:grid-cols-2 gap-8 text-sm text-[#F8F6F0]/50 font-light">
                    <div>
                        <strong className="text-white block mb-2 font-medium">MindCoach Praxis für Mentale Stärke</strong>
                        Beispielstraße 42, 1010 Wien, Österreich<br />
                        E-Mail: kontakt@mindcoach-beispiel.at<br />
                        Tel: +43 123 456789
                    </div>
                    <div className="md:text-right flex flex-col md:items-end justify-end gap-4">
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Impressum</a>
                            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
                            <a href="#" className="hover:text-white transition-colors">AGB</a>
                        </div>
                        <div>© {new Date().getFullYear()} MindCoach. Alle Rechte vorbehalten.</div>
                    </div>
                </div>
            </footer>
        </main>
    );
};

/* =========================================
   DESIGN SYSTEM VIEW
========================================= */
const DesignSystemView = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-32">

            {/* Intro */}
            <div className="space-y-4 max-w-3xl">
                <h1 className="font-heading text-5xl font-semibold text-[#121F33]">Design System</h1>
                <p className="text-lg text-[#2E476B] font-light leading-relaxed">
                    Das Corporate Design für den Mental Coach. Die visuelle Sprache ist geprägt von großen Freiräumen (Big Spacing), klaren Linien und einer Farbpalette, die Vertrauen, Ruhe und Premium-Qualität ausstrahlt.
                </p>
            </div>

            {/* Colors */}
            <section className="space-y-12">
                <div className="border-b border-[#F2E8D3] pb-4">
                    <h2 className="font-heading text-3xl font-medium text-[#121F33]">01. Farbpalette (Color Palette)</h2>
                    <p className="text-[#2E476B] mt-2 font-light">Gold, Beige und Blau als vertrauensbildende Basis.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <ColorSwatch color="#121F33" name="Deep Blue" usage="Primary Text, Headers, Footer" />
                    <ColorSwatch color="#2E476B" name="Soft Blue" usage="Secondary Text, Subtitles" />
                    <ColorSwatch color="#C5A059" name="Premium Gold" usage="Accents, Primary Buttons, Highlights" />
                    <ColorSwatch color="#F8F6F0" name="Calm Beige" usage="Main Background" border />
                    <ColorSwatch color="#FFFFFF" name="Pure White" usage="Cards, Contrast Backgrounds" border />
                    <ColorSwatch color="#F2E8D3" name="Light Gold" usage="Borders, Soft Highlights" border />
                </div>
            </section>

            {/* Typography */}
            <section className="space-y-12">
                <div className="border-b border-[#F2E8D3] pb-4">
                    <h2 className="font-heading text-3xl font-medium text-[#121F33]">02. Typografie (Typography)</h2>
                    <p className="text-[#2E476B] mt-2 font-light">
                        Google Fonts: <strong>Outfit</strong> (für geometrische, moderne Headlines) und <strong>Plus Jakarta Sans</strong> (sehr nah an Google Sans, perfekt für Lesbarkeit).
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-8 p-8 bg-white border border-[#F2E8D3]">
                        <div>
                            <p className="text-sm text-[#C5A059] uppercase tracking-wider mb-2">Primary Font / Headings</p>
                            <p className="font-heading text-4xl mb-1 text-[#121F33]">Outfit</p>
                            <p className="text-sm text-[#2E476B]">Light, Regular, Medium, SemiBold</p>
                        </div>
                        <div className="space-y-6 text-[#121F33]">
                            <h1 className="font-heading text-5xl font-light">Heading H1</h1>
                            <h2 className="font-heading text-4xl font-medium">Heading H2</h2>
                            <h3 className="font-heading text-2xl font-semibold">Heading H3</h3>
                        </div>
                    </div>

                    <div className="space-y-8 p-8 bg-white border border-[#F2E8D3]">
                        <div>
                            <p className="text-sm text-[#C5A059] uppercase tracking-wider mb-2">Secondary Font / Body</p>
                            <p className="font-body text-4xl mb-1 text-[#121F33]">Plus Jakarta Sans</p>
                            <p className="text-sm text-[#2E476B]">Light, Regular, Medium</p>
                        </div>
                        <div className="space-y-4 text-[#121F33]">
                            <p className="font-body text-lg font-light leading-relaxed">
                                <strong>Lead Paragraph:</strong> Dies ist ein Einleitungstext. Er nutzt eine leichte Schriftstärke, um Ruhe und Offenheit auszustrahlen. Perfekt für emotionale Botschaften.
                            </p>
                            <p className="font-body text-base font-light leading-relaxed text-[#2E476B]">
                                <strong>Body Text:</strong> Der normale Fließtext ist hervorragend lesbar, großzügig im Zeilenabstand gesetzt und wirkt durch den leichten Graublau-Ton nicht zu hart.
                            </p>
                            <p className="font-body text-sm font-medium uppercase tracking-widest text-[#C5A059]">
                                Overline / Labels
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Icons */}
            <section className="space-y-12">
                <div className="border-b border-[#F2E8D3] pb-4">
                    <h2 className="font-heading text-3xl font-medium text-[#121F33]">03. Ikonografie (Icons)</h2>
                    <p className="text-[#2E476B] mt-2 font-light">Feine, minimalistische Vektor-Icons (Stroke Width: 1.5), passend zur modernen Typografie.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 p-8 bg-white border border-[#F2E8D3]">
                    {[
                        { icon: Brain, name: 'Brain' },
                        { icon: Target, name: 'Target' },
                        { icon: Compass, name: 'Compass' },
                        { icon: Star, name: 'Star' },
                        { icon: Quote, name: 'Quote' },
                        { icon: HelpCircle, name: 'FAQ' },
                        { icon: Check, name: 'Check' },
                        { icon: User, name: 'User' },
                        { icon: Phone, name: 'Phone' },
                        { icon: Mail, name: 'Mail' }
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center space-y-3 text-[#2E476B] hover:text-[#C5A059] transition-colors p-4">
                            <item.icon className="w-8 h-8" strokeWidth={1.5} />
                            <span className="text-xs font-mono bg-[#F8F6F0] px-2 py-1 rounded">{item.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* UI Elements */}
            <section className="space-y-12">
                <div className="border-b border-[#F2E8D3] pb-4">
                    <h2 className="font-heading text-3xl font-medium text-[#121F33]">04. UI Komponenten</h2>
                    <p className="text-[#2E476B] mt-2 font-light">Eckig, minimalistisch, modern. Große Klickflächen für Barrierefreiheit.</p>
                </div>

                <div className="space-y-12">
                    {/* Buttons */}
                    <div>
                        <h3 className="font-heading text-xl mb-6 text-[#121F33]">Buttons</h3>
                        <div className="flex flex-wrap gap-6 items-center p-8 bg-white border border-[#F2E8D3]">
                            <button className="bg-[#121F33] text-white px-8 py-4 hover:bg-[#2E476B] transition-colors font-medium">
                                Primary Dark
                            </button>
                            <button className="bg-[#C5A059] text-white px-8 py-4 hover:bg-[#b08d2b] transition-colors font-medium">
                                Primary Gold
                            </button>
                            <button className="border border-[#121F33] text-[#121F33] px-8 py-4 hover:bg-[#121F33] hover:text-white transition-colors font-medium">
                                Secondary Outline
                            </button>
                            <button className="flex items-center gap-2 text-[#121F33] font-medium hover:text-[#C5A059] transition-colors">
                                Text Link <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Cards */}
                    <div>
                        <h3 className="font-heading text-xl mb-6 text-[#121F33]">Cards (mit Big Spacing)</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-[#F8F6F0] border border-[#F2E8D3]">
                            <div className="bg-white p-12 shadow-lg border border-[#F2E8D3]">
                                <Target className="text-[#C5A059] w-8 h-8 mb-6" />
                                <h4 className="font-heading text-2xl font-medium mb-4 text-[#121F33]">Service Card</h4>
                                <p className="text-[#2E476B] font-light leading-relaxed mb-8">
                                    Viel Freiraum (Padding) innerhalb der Karte sorgt für einen aufgeräumten, stressfreien Look. Genau das, was Klienten suchen.
                                </p>
                                <button className="text-[#121F33] font-medium uppercase text-sm tracking-wider hover:text-[#C5A059] transition-colors">
                                    Mehr erfahren
                                </button>
                            </div>

                            <div className="bg-[#121F33] text-white p-12 shadow-xl flex flex-col justify-between">
                                <div>
                                    <Star className="text-[#C5A059] w-8 h-8 mb-6" />
                                    <h4 className="font-heading text-2xl font-medium mb-4">Highlighted Card</h4>
                                    <p className="text-[#F8F6F0]/70 font-light leading-relaxed mb-8">
                                        Dunkle Karten werden genutzt, um besondere Premium-Angebote oder Kernphilosophien visuell hervorzuheben.
                                    </p>
                                </div>
                                <button className="bg-[#C5A059] text-white w-full py-4 font-medium transition-colors hover:bg-[#b08d2b]">
                                    Aktion ausführen
                                </button>
                            </div>

                            <div className="bg-white p-10 border border-[#F2E8D3] shadow-md flex flex-col justify-between relative overflow-hidden group">
                                <Quote className="absolute top-8 right-8 text-[#F8F6F0] w-24 h-24 -z-10 group-hover:scale-110 transition-transform duration-500" />
                                <div className="z-10">
                                    <div className="flex gap-1 mb-6 text-[#C5A059]">
                                        <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                                    </div>
                                    <p className="text-[#2E476B] italic font-light leading-relaxed mb-8">
                                        "Testimonial Card: Das Coaching hat mir extrem geholfen, wieder klarer zu sehen und meinen Fokus auf das Wesentliche zu richten. Sehr empfehlenswert."
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 z-10">
                                    <div className="w-12 h-12 bg-[#F2E8D3] rounded-full overflow-hidden shrink-0">
                                        <User className="w-full h-full p-2 text-[#C5A059]" />
                                    </div>
                                    <div>
                                        <p className="font-heading font-medium text-[#121F33]">Max Mustermann</p>
                                        <p className="text-xs text-[#C5A059] uppercase tracking-wider">CEO, Tech GmbH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Elements */}
                    <div>
                        <h3 className="font-heading text-xl mb-6 text-[#121F33]">Formularelemente (Inputs)</h3>
                        <div className="grid md:grid-cols-2 gap-8 p-8 bg-white border border-[#F2E8D3]">
                            <div className="space-y-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-[#121F33]">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Dein Name"
                                        className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#F2E8D3] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all font-light text-[#121F33] placeholder-[#2E476B]/50"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-[#121F33]">Anliegen (Auswahl)</label>
                                    <select className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#F2E8D3] focus:outline-none focus:border-[#C5A059] transition-all font-light text-[#121F33]">
                                        <option>1:1 Mental Coaching</option>
                                        <option>Leadership Mentoring</option>
                                        <option>Allgemeine Anfrage</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-[#121F33]">Nachricht</label>
                                    <textarea
                                        rows="3"
                                        placeholder="Wie kann ich dich unterstützen?"
                                        className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#F2E8D3] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all font-light text-[#121F33] placeholder-[#2E476B]/50 resize-none"
                                    ></textarea>
                                </div>
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center justify-center mt-1">
                                        <input type="checkbox" className="peer appearance-none w-5 h-5 border border-[#C5A059] bg-[#F8F6F0] checked:bg-[#C5A059] transition-colors cursor-pointer" />
                                        <Check className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm font-light text-[#2E476B] group-hover:text-[#121F33] transition-colors">
                                        Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Accordion / Interactive */}
                    <div>
                        <h3 className="font-heading text-xl mb-6 text-[#121F33]">Akkordeon (FAQ & Toggles)</h3>
                        <div className="p-8 bg-[#F8F6F0] border border-[#F2E8D3]">
                            <details className="group border border-[#F2E8D3] p-6 cursor-pointer bg-white transition-colors">
                                <summary className="font-heading text-lg font-medium text-[#121F33] list-none flex justify-between items-center">
                                    Wie ist der Ablauf eines Erstgesprächs?
                                    <span className="text-[#C5A059] group-open:rotate-45 transition-transform text-2xl font-light">+</span>
                                </summary>
                                <p className="mt-4 text-[#2E476B] font-light leading-relaxed border-t border-[#F2E8D3] pt-4">
                                    Das Erstgespräch ist völlig unverbindlich. Wir nehmen uns ca. 30 Minuten Zeit, um dein Anliegen zu besprechen, offene Fragen zu klären und herauszufinden, ob wir eine gute Basis für die Zusammenarbeit haben.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* Templates & Sections */}
            <section className="space-y-12 pb-32">
                <div className="border-b border-[#F2E8D3] pb-4">
                    <h2 className="font-heading text-3xl font-medium text-[#121F33]">05. Templates & Layout-Sektionen</h2>
                    <p className="text-[#2E476B] mt-2 font-light">Vorgefertigte Block-Elemente für den modularen Aufbau weiterer Seitenbausteine.</p>
                </div>

                <div className="space-y-16">

                    {/* Header Template */}
                    <div className="space-y-6">
                        <h3 className="font-heading text-xl text-[#121F33]">Header / Navigation</h3>
                        <div className="bg-[#F8F6F0] p-8 border border-[#F2E8D3]">
                            <header className="bg-white/90 px-6 py-4 flex justify-between items-center shadow-sm">
                                <div className="font-heading font-bold text-xl text-[#121F33]">
                                    DAVID<span className="text-[#C5A059]">SIMON</span>
                                </div>
                                <div className="hidden md:flex gap-8 items-center">
                                    <span className="text-[#C5A059] font-medium text-sm uppercase tracking-wider cursor-pointer border-b-2 border-[#C5A059] pb-1">Start</span>
                                    <span className="text-[#2E476B] hover:text-[#C5A059] font-medium transition-colors text-sm uppercase tracking-wider cursor-pointer">Philosophie</span>
                                    <span className="text-[#2E476B] hover:text-[#C5A059] font-medium transition-colors text-sm uppercase tracking-wider cursor-pointer">Kontakt</span>
                                </div>
                                <button className="hidden md:block bg-[#121F33] text-white px-6 py-3 text-sm font-medium hover:bg-[#2E476B] transition-colors">
                                    Termin buchen
                                </button>
                                <button className="md:hidden text-[#121F33]">
                                    <Menu size={24} />
                                </button>
                            </header>
                        </div>
                    </div>

                    {/* Content Section Template */}
                    <div className="space-y-6">
                        <h3 className="font-heading text-xl text-[#121F33]">Split-Content Section (Bild / Text)</h3>
                        <div className="bg-white border border-[#F2E8D3] p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="aspect-[4/3] bg-[#F2E8D3] flex flex-col items-center justify-center text-[#C5A059] rounded-tl-[80px] rounded-br-[80px]">
                                    <span className="font-mono text-sm block mb-2">[Platzhalter für Bild]</span>
                                    <span className="text-xs opacity-60">z.B. Coaching-Gespräch</span>
                                </div>
                                <div className="space-y-6">
                                    <span className="text-[#C5A059] font-heading tracking-widest uppercase text-xs font-semibold">Subtitel / Kategorie</span>
                                    <h2 className="font-heading text-3xl md:text-4xl font-light text-[#121F33] leading-tight">
                                        Fokus setzen. <br /><span className="font-semibold">Potenzial entfalten.</span>
                                    </h2>
                                    <p className="text-[#2E476B] font-light leading-relaxed">
                                        Dies ist ein generisches Modul für Fließtexte. Es nutzt viel Raum, um das Angebot oder die Philosophie näher zu beschreiben. Der großzügige Zeilenabstand (line-height) sorgt für beste Lesbarkeit und ein ruhiges Lesegefühl.
                                    </p>
                                    <button className="border-b border-[#121F33] text-[#121F33] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors font-medium flex items-center gap-2 w-max mt-4">
                                        Weiterlesen <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Template */}
                    <div className="space-y-6">
                        <h3 className="font-heading text-xl text-[#121F33]">Call-to-Action (CTA) Sektion</h3>
                        <div className="bg-[#121F33] border border-[#F2E8D3] p-12 md:p-20 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059] rounded-full mix-blend-multiply blur-[60px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2E476B] rounded-full mix-blend-multiply blur-[60px] opacity-30 -translate-x-1/2 translate-y-1/2"></div>

                            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                                <h2 className="font-heading text-3xl md:text-4xl font-light text-white">
                                    Bereit für den <span className="text-[#C5A059] font-semibold">nächsten Schritt?</span>
                                </h2>
                                <p className="text-[#F8F6F0]/70 font-light leading-relaxed">
                                    Ein kurzer, überzeugender Text, der den Nutzer zur Kontaktaufnahme motiviert. Ohne Risiko, völlig unverbindlich.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="bg-[#C5A059] text-white px-8 py-4 font-medium hover:bg-white hover:text-[#121F33] transition-colors shadow-lg">
                                        Erstgespräch anfragen
                                    </button>
                                    <button className="border border-white/20 text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors">
                                        Mehr erfahren
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Imagery & Mood */}
            <section className="space-y-12">
                <div className="border-b border-[#F2E8D3] pb-4">
                    <h2 className="font-heading text-3xl font-medium text-[#121F33]">06. Bildsprache (Imagery)</h2>
                    <p className="text-[#2E476B] mt-2 font-light">Fotografien sollten authentisch, ruhig und leicht entsättigt sein. Warme Töne (passend zum Gold) und viel Freiraum in den Motiven unterstreichen den mentalen Raum.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="aspect-square bg-gray-200 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#C5A059]/10 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0"></div>
                            <img src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=800&auto=format&fit=crop" alt="Mood: Natur" className="w-full h-full object-cover grayscale-[30%]" />
                        </div>
                        <h4 className="font-heading font-medium text-[#121F33]">Metaphorisch & Beruhigend</h4>
                        <p className="text-sm font-light text-[#2E476B]">Weite Landschaften, ruhiges Wasser. Symbolisiert mentalen Raum und emotionale Tiefe.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="aspect-square bg-gray-200 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#C5A059]/10 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0"></div>
                            <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&auto=format&fit=crop" alt="Mood: Portrait" className="w-full h-full object-cover grayscale-[30%]" />
                        </div>
                        <h4 className="font-heading font-medium text-[#121F33]">Nahbar & Empathisch</h4>
                        <p className="text-sm font-light text-[#2E476B]">Portraits mit weichem Licht. Blickkontakt schafft Vertrauen, ohne dominant zu wirken.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="aspect-square bg-gray-200 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#121F33]/20 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0"></div>
                            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop" alt="Mood: Workspace" className="w-full h-full object-cover grayscale-[20%]" />
                        </div>
                        <h4 className="font-heading font-medium text-[#121F33]">Professionell & Aufgeräumt</h4>
                        <p className="text-sm font-light text-[#2E476B]">Detailaufnahmen von strukturierter Arbeitsumgebung. Steht für Fokus und Business-Coaching.</p>
                    </div>
                </div>
            </section>

            {/* Spacing & Grid */}
            <section className="space-y-12 pb-32">
                <div className="border-b border-[#F2E8D3] pb-4">
                    <h2 className="font-heading text-3xl font-medium text-[#121F33]">07. Spacing System (Abstände)</h2>
                    <p className="text-[#2E476B] mt-2 font-light">Das Geheimnis eines luxuriösen und ruhigen Designs liegt im "Big Spacing". Wir nutzen bewusst große Abstände (Multiplikatoren von 8px), um Elementen Raum zum Atmen zu geben.</p>
                </div>

                <div className="bg-white border border-[#F2E8D3] p-8 md:p-12">
                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 flex justify-end"><span className="text-sm font-mono text-[#2E476B]">8px</span></div>
                            <div className="h-8 bg-[#F2E8D3] w-2"></div>
                            <p className="text-sm font-light text-[#121F33]">Minimaler Abstand (z.B. Icon zu Text)</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 flex justify-end"><span className="text-sm font-mono text-[#2E476B]">16px</span></div>
                            <div className="h-8 bg-[#E8D5A5] w-4"></div>
                            <p className="text-sm font-light text-[#121F33]">Listen-Elemente, Button Padding innen</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 flex justify-end"><span className="text-sm font-mono text-[#2E476B]">32px</span></div>
                            <div className="h-8 bg-[#C5A059] w-8"></div>
                            <p className="text-sm font-light text-[#121F33]">Abstand zwischen Textblöcken (Margin Bottom)</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 flex justify-end"><span className="text-sm font-mono text-[#2E476B]">64px</span></div>
                            <div className="h-8 bg-[#2E476B] w-16"></div>
                            <p className="text-sm font-light text-[#121F33]">Inneres Padding von Cards und kleineren Content-Sektionen</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 flex justify-end"><span className="text-sm font-mono text-[#2E476B]">128px</span></div>
                            <div className="h-8 bg-[#121F33] w-32"></div>
                            <p className="text-sm font-light text-[#121F33]">Sektions-Abstände (Vertical Padding zwischen den Hauptbereichen)</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

const ColorSwatch = ({ color, name, usage, border = false }) => (
    <div className="flex flex-col">
        <div
            className={`h-32 w-full rounded-none mb-4 ${border ? 'border border-[#E2D8C3]' : ''}`}
            style={{ backgroundColor: color }}
        ></div>
        <div className="space-y-1">
            <h4 className="font-heading font-medium text-[#121F33]">{name}</h4>
            <p className="font-mono text-xs text-[#2E476B] bg-white inline-block px-2 py-1 border border-[#F2E8D3]">{color}</p>
            <p className="text-xs text-[#2E476B] mt-2 font-light">{usage}</p>
        </div>
    </div>
);