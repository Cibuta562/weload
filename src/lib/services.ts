import type { Localized } from "./i18n";

export type IconKey = "road" | "sea" | "air" | "rail" | "multimodal";

export interface ServiceFeature {
  title: Localized;
  desc: Localized;
}

export interface ServiceFaq {
  q: Localized;
  a: Localized;
}

export interface Service {
  slug: string;
  icon: IconKey;
  title: Localized;
  short: Localized;
  tagline: Localized;
  intro: Localized;
  highlights: Localized<string[]>;
  features: ServiceFeature[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "road",
    icon: "road",
    title: { ro: "Transport rutier", en: "Road transport" },
    short: {
      ro: "Național și internațional, FTL & LTL.",
      en: "Domestic and international, FTL & LTL.",
    },
    tagline: {
      ro: "Transport rutier de marfă — național și internațional",
      en: "Road freight transport — domestic and international",
    },
    intro: {
      ro: "Cu o flotă modernă și diversificată, asigurăm transportul mărfurilor tale în siguranță și la timp, în toată România și în Europa. De la camioane complete (FTL) la grupaj (LTL), găsim soluția potrivită pentru fiecare expediere.",
      en: "With a modern, diversified fleet, we move your goods safely and on time across Romania and Europe. From full truckloads (FTL) to groupage (LTL), we find the right solution for every shipment.",
    },
    highlights: {
      ro: [
        "Acoperire în toată Uniunea Europeană, plus UK, Elveția, Turcia, Serbia, Moldova",
        "Tracking GPS pe toate vehiculele, 24/7",
        "Asigurare CMR standard pentru fiecare cursă",
        "Răspuns la cererea de ofertă în mai puțin de 30 de minute",
      ],
      en: [
        "Coverage across the entire EU, plus UK, Switzerland, Turkey, Serbia, Moldova",
        "GPS tracking on every vehicle, 24/7",
        "Standard CMR insurance on every trip",
        "Quote response in under 30 minutes",
      ],
    },
    features: [
      {
        title: { ro: "FTL — camion complet", en: "FTL — full truckload" },
        desc: {
          ro: "Capacitate dedicată exclusiv mărfii tale, pentru livrări rapide și directe, fără transbordări.",
          en: "Capacity dedicated exclusively to your cargo, for fast, direct deliveries with no transshipment.",
        },
      },
      {
        title: { ro: "LTL — grupaj", en: "LTL — groupage" },
        desc: {
          ro: "Plătești doar spațiul ocupat. Plecări garantate și consolidare eficientă a expedierilor mici.",
          en: "Pay only for the space you use. Guaranteed departures and efficient consolidation of smaller shipments.",
        },
      },
      {
        title: { ro: "Transport FRIGO", en: "Refrigerated transport" },
        desc: {
          ro: "Temperatură controlată pentru produse perisabile, farmaceutice și alte mărfuri sensibile.",
          en: "Temperature-controlled transport for perishables, pharmaceuticals and other sensitive goods.",
        },
      },
      {
        title: { ro: "ADR & agabaritic", en: "ADR & oversized" },
        desc: {
          ro: "Mărfuri periculoase conform reglementărilor ADR și transporturi de gabarit depășit, cu autorizații complete.",
          en: "Hazardous goods compliant with ADR regulations and oversized cargo, with full permits handled for you.",
        },
      },
    ],
    faqs: [
      {
        q: { ro: "În cât timp ajunge marfa în Germania?", en: "How long does delivery to Germany take?" },
        a: {
          ro: "În general 2–3 zile din România. Pentru Franța 3–4 zile, iar pentru Spania 4–5 zile.",
          en: "Typically 2–3 days from Romania. France takes 3–4 days and Spain 4–5 days.",
        },
      },
      {
        q: { ro: "Marfa este asigurată?", en: "Is the cargo insured?" },
        a: {
          ro: "Da, fiecare cursă beneficiază de asigurare CMR standard. La cerere oferim și asigurare all-risk suplimentară.",
          en: "Yes, every trip includes standard CMR insurance. Supplemental all-risk cover is available on request.",
        },
      },
    ],
  },
  {
    slug: "sea",
    icon: "sea",
    title: { ro: "Transport maritim", en: "Sea transport" },
    short: {
      ro: "FCL & LCL, containerizat și convențional.",
      en: "FCL & LCL, containerized and conventional.",
    },
    tagline: {
      ro: "Transport maritim — soluții globale, containerizate și convenționale",
      en: "Sea freight — global containerized and conventional solutions",
    },
    intro: {
      ro: "Conectăm România la principalele porturi ale lumii. Indiferent dacă ai nevoie de un container complet (FCL) sau de grupaj maritim (LCL), gestionăm întregul lanț — de la booking și documente vamale, până la livrarea finală.",
      en: "We connect Romania to the world's major ports. Whether you need a full container (FCL) or sea groupage (LCL), we manage the entire chain — from booking and customs paperwork to final delivery.",
    },
    highlights: {
      ro: [
        "Relații cu armatorii și tarife competitive pe rutele majore",
        "FCL, LCL și marfă convențională / break-bulk",
        "Vămuire la import și export gestionată complet",
        "Asigurare cargo și urmărirea containerelor",
      ],
      en: [
        "Carrier relationships and competitive rates on major lanes",
        "FCL, LCL and conventional / break-bulk cargo",
        "Full import and export customs clearance",
        "Cargo insurance and container tracking",
      ],
    },
    features: [
      {
        title: { ro: "FCL — container complet", en: "FCL — full container" },
        desc: {
          ro: "Containere de 20', 40' și 40' High Cube, dedicate exclusiv mărfii tale.",
          en: "20', 40' and 40' High Cube containers dedicated entirely to your cargo.",
        },
      },
      {
        title: { ro: "LCL — grupaj maritim", en: "LCL — sea groupage" },
        desc: {
          ro: "Soluția ideală pentru volume mai mici — consolidăm marfa și optimizăm costurile.",
          en: "The ideal solution for smaller volumes — we consolidate cargo and optimize costs.",
        },
      },
      {
        title: { ro: "Vămuire & documente", en: "Customs & documentation" },
        desc: {
          ro: "Bill of lading, certificate de origine și formalități vamale, pregătite de echipa noastră.",
          en: "Bills of lading, certificates of origin and customs formalities, prepared by our team.",
        },
      },
      {
        title: { ro: "Door-to-door", en: "Door-to-door" },
        desc: {
          ro: "Combinăm transportul maritim cu cel rutier pentru livrare completă, din poartă în poartă.",
          en: "We combine sea and road transport for complete door-to-door delivery.",
        },
      },
    ],
    faqs: [
      {
        q: { ro: "Care este diferența dintre FCL și LCL?", en: "What is the difference between FCL and LCL?" },
        a: {
          ro: "La FCL închiriezi un container întreg, la LCL plătești doar spațiul ocupat, marfa fiind consolidată cu a altor clienți.",
          en: "With FCL you book an entire container; with LCL you pay only for the space used, sharing the container with other shippers.",
        },
      },
      {
        q: { ro: "Gestionați și vămuirea?", en: "Do you handle customs clearance?" },
        a: {
          ro: "Da, ne ocupăm de toate formalitățile vamale la import și export.",
          en: "Yes, we take care of all import and export customs formalities.",
        },
      },
    ],
  },
  {
    slug: "air",
    icon: "air",
    title: { ro: "Transport aerian", en: "Air transport" },
    short: {
      ro: "Express și standard, urgent oriunde.",
      en: "Express and standard, urgent anywhere.",
    },
    tagline: {
      ro: "Transport aerian — rapiditate maximă pentru expedieri urgente",
      en: "Air freight — maximum speed for urgent shipments",
    },
    intro: {
      ro: "Când timpul este critic, transportul aerian este cea mai rapidă soluție. Oferim servicii express și standard către orice destinație, cu acces la o rețea globală de companii aeriene cargo și curse charter.",
      en: "When time is critical, air freight is the fastest solution. We offer express and standard services to any destination, with access to a global network of cargo airlines and charter flights.",
    },
    highlights: {
      ro: [
        "Servicii express door-to-door în 24–72 de ore",
        "Acces la rețeaua globală de companii aeriene cargo",
        "Soluții charter pentru mărfuri urgente sau de gabarit mare",
        "Manipulare specializată pentru mărfuri sensibile și valoroase",
      ],
      en: [
        "Express door-to-door services in 24–72 hours",
        "Access to a global network of cargo airlines",
        "Charter solutions for urgent or oversized cargo",
        "Specialized handling for sensitive and high-value goods",
      ],
    },
    features: [
      {
        title: { ro: "Aerian express", en: "Express air" },
        desc: {
          ro: "Cea mai rapidă opțiune, pentru expedieri cu deadline strict și livrare prioritară.",
          en: "The fastest option, for shipments with tight deadlines and priority delivery.",
        },
      },
      {
        title: { ro: "Aerian standard", en: "Standard air" },
        desc: {
          ro: "Echilibru optim între viteză și cost pentru transporturile internaționale regulate.",
          en: "The optimal balance between speed and cost for regular international shipments.",
        },
      },
      {
        title: { ro: "Charter", en: "Charter" },
        desc: {
          ro: "Aeronave dedicate pentru volume mari, marfă agabaritică sau livrări critice.",
          en: "Dedicated aircraft for large volumes, oversized cargo or critical deliveries.",
        },
      },
      {
        title: { ro: "Mărfuri speciale", en: "Special cargo" },
        desc: {
          ro: "Produse farmaceutice, perisabile sau de valoare ridicată, manipulate conform standardelor.",
          en: "Pharmaceuticals, perishables and high-value goods, handled to the highest standards.",
        },
      },
    ],
    faqs: [
      {
        q: { ro: "Cât de repede poate ajunge marfa?", en: "How fast can the cargo arrive?" },
        a: {
          ro: "Pentru expedierile express, livrarea door-to-door se poate face în 24–72 de ore, în funcție de destinație.",
          en: "For express shipments, door-to-door delivery can be completed in 24–72 hours, depending on the destination.",
        },
      },
      {
        q: { ro: "Transportați mărfuri periculoase pe calea aerului?", en: "Do you ship dangerous goods by air?" },
        a: {
          ro: "Da, în conformitate cu reglementările IATA DGR, cu documentația și ambalarea corespunzătoare.",
          en: "Yes, in compliance with IATA DGR regulations, with the proper documentation and packaging.",
        },
      },
    ],
  },
  {
    slug: "rail",
    icon: "rail",
    title: { ro: "Transport feroviar", en: "Rail transport" },
    short: {
      ro: "Volume mari, distanțe lungi, sustenabil.",
      en: "High volumes, long distances, sustainable.",
    },
    tagline: {
      ro: "Transport feroviar — eficient pentru volume mari și distanțe lungi",
      en: "Rail transport — efficient for high volumes over long distances",
    },
    intro: {
      ro: "Transportul feroviar este soluția ideală pentru volume mari pe distanțe lungi, cu costuri previzibile și un impact redus asupra mediului. Operăm rute interne și internaționale, inclusiv coridoarele feroviare către Asia.",
      en: "Rail is the ideal solution for high volumes over long distances, with predictable costs and a reduced environmental footprint. We operate domestic and international routes, including the rail corridors to Asia.",
    },
    highlights: {
      ro: [
        "Costuri competitive și previzibile pentru volume mari",
        "Soluție sustenabilă, cu emisii de CO₂ reduse",
        "Vagoane convenționale și transport containerizat pe calea ferată",
        "Conexiuni intermodale cu transportul rutier și maritim",
      ],
      en: [
        "Competitive, predictable costs for large volumes",
        "A sustainable solution with reduced CO₂ emissions",
        "Conventional wagons and containerized rail transport",
        "Intermodal connections with road and sea transport",
      ],
    },
    features: [
      {
        title: { ro: "Vagoane complete", en: "Full wagons" },
        desc: {
          ro: "Capacitate dedicată pentru mărfuri în vrac, materiale de construcții și producție industrială.",
          en: "Dedicated capacity for bulk cargo, construction materials and industrial output.",
        },
      },
      {
        title: { ro: "Containerizat pe CF", en: "Containerized rail" },
        desc: {
          ro: "Transport de containere pe calea ferată, integrat în lanțul logistic global.",
          en: "Container transport by rail, integrated into the global logistics chain.",
        },
      },
      {
        title: { ro: "Coridoare Asia–Europa", en: "Asia–Europe corridors" },
        desc: {
          ro: "Alternativă mai rapidă decât maritimul și mai ieftină decât aerianul pe rutele către China.",
          en: "A faster alternative to sea and a cheaper one than air on routes to China.",
        },
      },
      {
        title: { ro: "Last-mile rutier", en: "Road last-mile" },
        desc: {
          ro: "Conectăm terminalul feroviar de destinația finală prin transport rutier.",
          en: "We connect the rail terminal to the final destination by road transport.",
        },
      },
    ],
    faqs: [
      {
        q: { ro: "Când merită transportul feroviar?", en: "When is rail transport worthwhile?" },
        a: {
          ro: "Pentru volume mari pe distanțe lungi, unde costul pe tonă și sustenabilitatea sunt prioritare.",
          en: "For large volumes over long distances, where cost per ton and sustainability are priorities.",
        },
      },
      {
        q: { ro: "Cât durează ruta feroviară spre China?", en: "How long is the rail route to China?" },
        a: {
          ro: "În general 16–22 de zile, semnificativ mai rapid decât transportul maritim.",
          en: "Generally 16–22 days, significantly faster than ocean freight.",
        },
      },
    ],
  },
  {
    slug: "multimodal",
    icon: "multimodal",
    title: { ro: "Transport multimodal", en: "Multimodal transport" },
    short: {
      ro: "Rutier, maritim, aerian și feroviar, combinate.",
      en: "Road, sea, air and rail, combined.",
    },
    tagline: {
      ro: "Transport multimodal — soluții combinate, optimizate la cap și coadă",
      en: "Multimodal transport — combined solutions, optimized end to end",
    },
    intro: {
      ro: "Combinăm cele mai potrivite moduri de transport — rutier, maritim, aerian și feroviar — într-o singură soluție integrată. Optimizăm fiecare etapă pentru cel mai bun raport între cost, timp și fiabilitate, cu un singur punct de contact.",
      en: "We combine the most suitable transport modes — road, sea, air and rail — into a single integrated solution. We optimize every leg for the best balance of cost, time and reliability, with one point of contact.",
    },
    highlights: {
      ro: [
        "Un singur partener pentru întregul lanț logistic",
        "Rute optimizate pentru cost, timp și sustenabilitate",
        "Documentație unică și vizibilitate completă pe parcurs",
        "Flexibilitate maximă pentru lanțuri de aprovizionare complexe",
      ],
      en: [
        "A single partner for the entire logistics chain",
        "Routes optimized for cost, time and sustainability",
        "Unified documentation and full end-to-end visibility",
        "Maximum flexibility for complex supply chains",
      ],
    },
    features: [
      {
        title: { ro: "Rute integrate", en: "Integrated routing" },
        desc: {
          ro: "Proiectăm traseul ideal combinând modurile de transport pentru eficiență maximă.",
          en: "We design the ideal route by combining transport modes for maximum efficiency.",
        },
      },
      {
        title: { ro: "Un singur contact", en: "Single point of contact" },
        desc: {
          ro: "Un coordonator dedicat gestionează întregul transport, indiferent de câte etape are.",
          en: "A dedicated coordinator manages the entire shipment, no matter how many legs it has.",
        },
      },
      {
        title: { ro: "Vizibilitate end-to-end", en: "End-to-end visibility" },
        desc: {
          ro: "Urmărești marfa pe tot parcursul, cu actualizări la fiecare punct de transfer.",
          en: "Track your cargo throughout the journey, with updates at every transfer point.",
        },
      },
      {
        title: { ro: "Optimizare costuri", en: "Cost optimization" },
        desc: {
          ro: "Analizăm fiecare etapă pentru a reduce costurile fără a compromite termenele.",
          en: "We analyze every leg to reduce costs without compromising deadlines.",
        },
      },
    ],
    faqs: [
      {
        q: { ro: "Ce înseamnă transport multimodal?", en: "What does multimodal transport mean?" },
        a: {
          ro: "Folosirea a două sau mai multe moduri de transport (ex. maritim + rutier) într-un singur contract integrat.",
          en: "Using two or more transport modes (e.g. sea + road) under a single integrated contract.",
        },
      },
      {
        q: { ro: "Cine răspunde de marfă pe tot parcursul?", en: "Who is responsible for the cargo throughout?" },
        a: {
          ro: "Noi coordonăm întregul lanț și rămânem punctul tău unic de contact, de la preluare la livrare.",
          en: "We coordinate the entire chain and remain your single point of contact, from pickup to delivery.",
        },
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
