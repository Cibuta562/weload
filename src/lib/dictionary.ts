import type { Locale } from "./i18n";

export interface Dictionary {
  brandTagline: string;
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    getQuote: string;
    menu: string;
    close: string;
    menuTagline: string;
  };
  cookie: {
    text: string;
    policy: string;
    preferences: string;
    deny: string;
    accept: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    stats: { value: string; label: string }[];
    trustLabel: string;
    markets: string[];
    liveLabel: string;
    liveStatus: string;
    etaLabel: string;
    progressLabel: string;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesSubtitle: string;
    storyEyebrow: string;
    storyHeading: string;
    story: { tag: string; title: string; desc: string }[];
    whyEyebrow: string;
    whyTitle: string;
    whySubtitle: string;
    why: { title: string; desc: string }[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    learnMore: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    modesEyebrow: string;
    modesHeading: string;
    modeTag: string;
  };
  service: {
    whatWeOffer: string;
    faqTitle: string;
    backToServices: string;
    ctaTitle: string;
    ctaButton: string;
    otherServices: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string[];
    missionTitle: string;
    mission: string;
    visionTitle: string;
    vision: string;
    valuesTitle: string;
    values: { title: string; desc: string }[];
    statsTitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    infoTitle: string;
    emailLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursValue: string;
    addressLabel: string;
    addressValue: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      service: string;
      servicePlaceholder: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      required: string;
    };
  };
  footer: {
    about: string;
    servicesTitle: string;
    companyTitle: string;
    contactTitle: string;
    rights: string;
    madeWith: string;
  };
}

const ro: Dictionary = {
  brandTagline: "Transport și logistică internațională",
  nav: {
    home: "Acasă",
    services: "Servicii",
    about: "Despre noi",
    contact: "Contact",
    getQuote: "Cere ofertă",
    menu: "Meniu",
    close: "Închide",
    menuTagline: "Transport și logistică internațională",
  },
  cookie: {
    text: "Folosim cookie-uri pentru a îmbunătăți navigarea, a analiza traficul și a sprijini eforturile noastre de marketing.",
    policy: "Politica de cookie-uri",
    preferences: "Preferințe",
    deny: "Refuz",
    accept: "Accept toate",
  },
  home: {
    heroEyebrow: "Transport & logistică",
    heroTitle: "Mărfurile tale, livrate oriunde la cel mai bun cost",
    heroSubtitle:
      "Fie că vorbim de camioane complete sau de grupaj, național sau global, oferim o gamă completă de soluții pentru a-ți transporta marfa în siguranță și la timp.",
    heroCtaPrimary: "Cere o ofertă",
    heroCtaSecondary: "Vezi serviciile",
    stats: [
      { value: "30 min", label: "Răspuns la cererea de ofertă" },
      { value: "Global", label: "Acoperire geografică" },
      { value: "24/7", label: "Asistență transport" },
      { value: "CMR", label: "Asigurare inclusă" },
    ],
    liveLabel: "Transport activ",
    liveStatus: "În tranzit",
    etaLabel: "Livrare estimată",
    progressLabel: "Progres rută",
    trustLabel: "Mutăm marfă în toată Europa și mai departe",
    markets: [
      "Germania",
      "Franța",
      "Italia",
      "Spania",
      "Olanda",
      "Belgia",
      "Polonia",
      "Austria",
      "UK",
      "Elveția",
      "Turcia",
      "Serbia",
      "Moldova",
      "Ucraina",
    ],
    servicesEyebrow: "Ce facem",
    servicesTitle: "Soluții complete de transport pentru orice tip de marfă",
    servicesSubtitle:
      "Rutier, maritim, aerian, feroviar sau multimodal — alegem împreună soluția potrivită pentru fiecare expediere.",
    storyEyebrow: "Cum funcționează",
    storyHeading: "De la cerere la livrare, totul într-un singur flux",
    story: [
      {
        tag: "Pasul 01",
        title: "Spune-ne ce ai de transportat",
        desc: "Trimite detaliile mărfii și ale rutei. Primești o ofertă personalizată în mai puțin de 30 de minute, fără bătăi de cap.",
      },
      {
        tag: "Pasul 02",
        title: "Alegem împreună ruta optimă",
        desc: "Rutier, maritim, aerian, feroviar sau multimodal — îți propunem soluția cu cel mai bun raport între cost, timp și fiabilitate.",
      },
      {
        tag: "Pasul 03",
        title: "Urmărești marfa în timp real",
        desc: "Tracking GPS și actualizări de status pe tot parcursul, cu un coordonator dedicat disponibil 24/7.",
      },
      {
        tag: "Pasul 04",
        title: "Livrăm la timp, în siguranță",
        desc: "Marfa ajunge la destinație conform termenului, cu asigurare CMR standard inclusă pentru fiecare cursă.",
      },
    ],
    whyEyebrow: "De ce WeLoad",
    whyTitle: "Un partener logistic pe care te poți baza",
    whySubtitle:
      "Combinăm tehnologia, experiența și o rețea solidă de parteneri pentru a-ți oferi un serviciu impecabil.",
    why: [
      {
        title: "Răspuns rapid",
        desc: "Ofertă personalizată în mai puțin de 30 de minute pentru majoritatea cererilor.",
      },
      {
        title: "Vizibilitate completă",
        desc: "Tracking GPS și actualizări de status pe tot parcursul transportului.",
      },
      {
        title: "Marfă asigurată",
        desc: "Asigurare CMR standard și acoperire all-risk suplimentară la cerere.",
      },
      {
        title: "Acoperire extinsă",
        desc: "Toată Uniunea Europeană, plus UK, Elveția, Turcia, Serbia, Moldova și Ucraina.",
      },
      {
        title: "Consultanță logistică",
        desc: "Te ajutăm să alegi modul de transport optim pentru cost și termen.",
      },
      {
        title: "Echipă dedicată",
        desc: "Un coordonator dedicat pentru fiecare client, de la preluare la livrare.",
      },
    ],
    ctaTitle: "Ai o marfă de transportat?",
    ctaSubtitle: "Spune-ne ce ai nevoie și îți pregătim o ofertă personalizată rapid.",
    ctaButton: "Contactează-ne",
    learnMore: "Află mai multe",
  },
  servicesPage: {
    eyebrow: "Serviciile noastre",
    title: "Soluții de transport pentru fiecare nevoie",
    subtitle:
      "De la transport rutier la soluții multimodale complexe, acoperim întregul lanț logistic.",
    modesEyebrow: "Modurile noastre",
    modesHeading: "Cinci moduri de transport, un singur partener",
    modeTag: "Mod de transport",
  },
  service: {
    whatWeOffer: "Ce oferim",
    faqTitle: "Întrebări frecvente",
    backToServices: "Toate serviciile",
    ctaTitle: "Hai să discutăm despre transportul tău",
    ctaButton: "Cere o ofertă",
    otherServices: "Alte servicii",
  },
  about: {
    eyebrow: "Despre noi",
    title: "Mișcăm marfa lumii, cu grijă pentru fiecare detaliu",
    lead: "WeLoad este un partener logistic dedicat, construit în jurul unei idei simple: transportul ar trebui să fie predictibil, transparent și fără bătăi de cap.",
    body: [
      "Am pornit de la frustrarea comună a companiilor care își trimit marfa în lume: oferte care întârzie, lipsă de vizibilitate și prea mulți intermediari. Așa că am construit o echipă care răspunde rapid, comunică deschis și își asumă responsabilitatea de la preluare până la livrare.",
      "Astăzi coordonăm transporturi rutiere, maritime, aeriene și feroviare către toată Europa și mai departe, combinându-le în soluții multimodale atunci când contează fiecare zi și fiecare leu. Tehnologia ne ajută să optimizăm rutele, dar oamenii fac diferența.",
    ],
    missionTitle: "Misiunea noastră",
    mission:
      "Să oferim companiilor de orice dimensiune acces la transport de încredere, cu prețuri corecte și un serviciu uman, fără compromisuri la calitate.",
    visionTitle: "Viziunea noastră",
    vision:
      "Un lanț logistic în care fiecare expediere este vizibilă, previzibilă și sustenabilă — de la prima cerere de ofertă până la ultima milă.",
    valuesTitle: "Valorile noastre",
    values: [
      { title: "Transparență", desc: "Prețuri clare și comunicare deschisă, fără surprize." },
      { title: "Promptitudine", desc: "Răspundem rapid și respectăm termenele asumate." },
      { title: "Grijă", desc: "Tratăm fiecare expediere ca și cum ar fi a noastră." },
      { title: "Sustenabilitate", desc: "Optimizăm rutele pentru a reduce impactul asupra mediului." },
    ],
    statsTitle: "WeLoad în cifre",
  },
  contact: {
    eyebrow: "Contact",
    title: "Hai să discutăm despre transportul tău",
    subtitle:
      "Completează formularul și revenim cu o ofertă personalizată. Pentru cereri urgente, sună-ne direct.",
    infoTitle: "Date de contact",
    emailLabel: "Email",
    phoneLabel: "Telefon",
    hoursLabel: "Program",
    hoursValue: "Luni – Vineri, 09:00 – 17:30",
    addressLabel: "Sediu",
    addressValue: "Arad, România",
    form: {
      name: "Nume complet",
      email: "Email",
      phone: "Telefon",
      company: "Companie",
      service: "Serviciu de interes",
      servicePlaceholder: "Alege un serviciu",
      message: "Mesaj",
      submit: "Trimite mesajul",
      sending: "Se trimite...",
      success: "Mulțumim! Mesajul tău a fost trimis. Revenim în cel mai scurt timp.",
      error: "A apărut o eroare. Te rugăm să încerci din nou sau să ne scrii direct pe email.",
      required: "Câmp obligatoriu",
    },
  },
  footer: {
    about:
      "WeLoad — transport și logistică internațională. Soluții complete rutiere, maritime, aeriene, feroviare și multimodale.",
    servicesTitle: "Servicii",
    companyTitle: "Companie",
    contactTitle: "Contact",
    rights: "Toate drepturile rezervate.",
    madeWith: "Transport și logistică internațională",
  },
};

const en: Dictionary = {
  brandTagline: "International transport & logistics",
  nav: {
    home: "Home",
    services: "Services",
    about: "About us",
    contact: "Contact",
    getQuote: "Get a quote",
    menu: "Menu",
    close: "Close",
    menuTagline: "International transport & logistics",
  },
  cookie: {
    text: "We use cookies to enhance site navigation, analyze traffic and support our marketing efforts.",
    policy: "Cookie Policy",
    preferences: "Preferences",
    deny: "Deny",
    accept: "Accept all",
  },
  home: {
    heroEyebrow: "Transport & logistics",
    heroTitle: "Your cargo, delivered anywhere at the best cost",
    heroSubtitle:
      "Whether it's full truckloads or groupage, domestic or global, we provide a complete range of solutions to move your goods safely and on time.",
    heroCtaPrimary: "Get a quote",
    heroCtaSecondary: "View services",
    stats: [
      { value: "30 min", label: "Quote response time" },
      { value: "Global", label: "Geographic coverage" },
      { value: "24/7", label: "Transport assistance" },
      { value: "CMR", label: "Insurance included" },
    ],
    liveLabel: "Active shipment",
    liveStatus: "In transit",
    etaLabel: "Estimated delivery",
    progressLabel: "Route progress",
    trustLabel: "Moving cargo across Europe and beyond",
    markets: [
      "Germany",
      "France",
      "Italy",
      "Spain",
      "Netherlands",
      "Belgium",
      "Poland",
      "Austria",
      "UK",
      "Switzerland",
      "Turkey",
      "Serbia",
      "Moldova",
      "Ukraine",
    ],
    servicesEyebrow: "What we do",
    servicesTitle: "Complete transport solutions for any type of cargo",
    servicesSubtitle:
      "Road, sea, air, rail or multimodal — together we choose the right solution for every shipment.",
    storyEyebrow: "How it works",
    storyHeading: "From request to delivery, all in one flow",
    story: [
      {
        tag: "Step 01",
        title: "Tell us what you need to ship",
        desc: "Send your cargo and route details. You get a tailored quote in under 30 minutes — no hassle.",
      },
      {
        tag: "Step 02",
        title: "We pick the optimal route together",
        desc: "Road, sea, air, rail or multimodal — we propose the solution with the best balance of cost, time and reliability.",
      },
      {
        tag: "Step 03",
        title: "Track your cargo in real time",
        desc: "GPS tracking and status updates throughout the journey, with a dedicated coordinator available 24/7.",
      },
      {
        tag: "Step 04",
        title: "We deliver on time, safely",
        desc: "Your cargo arrives on schedule, with standard CMR insurance included on every trip.",
      },
    ],
    whyEyebrow: "Why WeLoad",
    whyTitle: "A logistics partner you can rely on",
    whySubtitle:
      "We combine technology, experience and a strong partner network to deliver flawless service.",
    why: [
      {
        title: "Fast response",
        desc: "A tailored quote in under 30 minutes for most requests.",
      },
      {
        title: "Full visibility",
        desc: "GPS tracking and status updates throughout the entire journey.",
      },
      {
        title: "Insured cargo",
        desc: "Standard CMR insurance and supplemental all-risk cover on request.",
      },
      {
        title: "Wide coverage",
        desc: "The entire EU, plus UK, Switzerland, Turkey, Serbia, Moldova and Ukraine.",
      },
      {
        title: "Logistics consulting",
        desc: "We help you choose the transport mode that's optimal for cost and timing.",
      },
      {
        title: "Dedicated team",
        desc: "A dedicated coordinator for every client, from pickup to delivery.",
      },
    ],
    ctaTitle: "Got cargo to move?",
    ctaSubtitle: "Tell us what you need and we'll prepare a tailored quote, fast.",
    ctaButton: "Contact us",
    learnMore: "Learn more",
  },
  servicesPage: {
    eyebrow: "Our services",
    title: "Transport solutions for every need",
    subtitle:
      "From road transport to complex multimodal solutions, we cover the entire logistics chain.",
    modesEyebrow: "Our modes",
    modesHeading: "Five transport modes, one single partner",
    modeTag: "Transport mode",
  },
  service: {
    whatWeOffer: "What we offer",
    faqTitle: "Frequently asked questions",
    backToServices: "All services",
    ctaTitle: "Let's talk about your shipment",
    ctaButton: "Get a quote",
    otherServices: "Other services",
  },
  about: {
    eyebrow: "About us",
    title: "Moving the world's cargo, with care for every detail",
    lead: "WeLoad is a dedicated logistics partner built around a simple idea: transport should be predictable, transparent and hassle-free.",
    body: [
      "We started from a frustration shared by companies shipping their goods around the world: quotes that arrive late, a lack of visibility and too many middlemen. So we built a team that responds quickly, communicates openly and takes ownership from pickup to delivery.",
      "Today we coordinate road, sea, air and rail shipments across Europe and beyond, combining them into multimodal solutions when every day and every euro counts. Technology helps us optimize routes, but people make the difference.",
    ],
    missionTitle: "Our mission",
    mission:
      "To give companies of any size access to reliable transport, with fair pricing and a human touch, with no compromise on quality.",
    visionTitle: "Our vision",
    vision:
      "A logistics chain where every shipment is visible, predictable and sustainable — from the first quote request to the last mile.",
    valuesTitle: "Our values",
    values: [
      { title: "Transparency", desc: "Clear pricing and open communication, with no surprises." },
      { title: "Responsiveness", desc: "We respond fast and honor the deadlines we commit to." },
      { title: "Care", desc: "We treat every shipment as if it were our own." },
      { title: "Sustainability", desc: "We optimize routes to reduce environmental impact." },
    ],
    statsTitle: "WeLoad in numbers",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your shipment",
    subtitle:
      "Fill in the form and we'll get back to you with a tailored quote. For urgent requests, call us directly.",
    infoTitle: "Contact details",
    emailLabel: "Email",
    phoneLabel: "Phone",
    hoursLabel: "Hours",
    hoursValue: "Monday – Friday, 09:00 – 17:30",
    addressLabel: "Office",
    addressValue: "Arad, Romania",
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      service: "Service of interest",
      servicePlaceholder: "Choose a service",
      message: "Message",
      submit: "Send message",
      sending: "Sending...",
      success: "Thank you! Your message has been sent. We'll get back to you shortly.",
      error: "Something went wrong. Please try again or email us directly.",
      required: "Required field",
    },
  },
  footer: {
    about:
      "WeLoad — international transport & logistics. Complete road, sea, air, rail and multimodal solutions.",
    servicesTitle: "Services",
    companyTitle: "Company",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    madeWith: "International transport & logistics",
  },
};

const dictionaries: Record<Locale, Dictionary> = { ro, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
