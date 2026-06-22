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
    title: { ro: "Transport rutier", en: "Road transport", hu: "Közúti szállítás" },
    short: {
      ro: "Național și internațional, FTL & LTL.",
      en: "Domestic and international, FTL & LTL.",
      hu: "Belföldi és nemzetközi, FTL és LTL.",
    },
    tagline: {
      ro: "Partenerul tău de încredere în transportul rutier",
      en: "Your trusted partner in road freight",
      hu: "Megbízható partnered a közúti fuvarozásban",
    },
    intro: {
      ro: "WeLoad oferă servicii complete de transport marfă, adaptate cerințelor fiecărui client. Cu o flotă modernă și diversificată, asigurăm transport rutier sigur și eficient, atât național, cât și internațional, cu acoperire în întreaga Europă. Garantăm soluții flexibile, livrare la timp și cele mai înalte standarde de siguranță.",
      en: "WeLoad provides complete freight services tailored to each client's needs. With a modern, diversified fleet, we deliver safe and efficient road transport, both domestic and international, with coverage across Europe. We guarantee flexible solutions, on-time delivery and the highest safety standards.",
      hu: "A WeLoad teljes körű árufuvarozási szolgáltatásokat kínál, minden ügyfél igényeihez igazítva. Modern és sokszínű flottánkkal biztonságos és hatékony közúti szállítást biztosítunk belföldön és nemzetközi szinten egyaránt, Európa-szerte lefedettséggel. Rugalmas megoldásokat, időben történő kézbesítést és a legmagasabb biztonsági szabványokat garantáljuk.",
    },
    highlights: {
      ro: [
        "Transport intern și internațional cu acoperire în întreaga Europă",
        "Asistență transport 24/7 și răspuns rapid la solicitări",
        "Marfă asigurată CMR pe toată durata transportului",
        "Ofertă de preț completă în mai puțin de 30 de minute",
      ],
      en: [
        "Domestic and international transport with coverage across Europe",
        "24/7 transport assistance and rapid response to requests",
        "CMR-insured cargo throughout the entire journey",
        "A complete quote in under 30 minutes",
      ],
      hu: [
        "Belföldi és nemzetközi szállítás, Európa-szerte lefedettséggel",
        "24/7 szállítási támogatás és gyors reagálás a kérésekre",
        "CMR-biztosított áru a teljes út során",
        "Teljes árajánlat 30 percen belül",
      ],
    },
    features: [
      {
        title: { ro: "FTL camion complet", en: "FTL full truckload", hu: "FTL komplett kamion" },
        desc: {
          ro: "Capacitate dedicată exclusiv mărfii tale, pentru livrări rapide și directe, fără transbordări.",
          en: "Capacity dedicated exclusively to your cargo, for fast, direct deliveries with no transshipment.",
          hu: "Kizárólag az Ön árujának szentelt kapacitás, gyors, közvetlen kézbesítéshez, átrakodás nélkül.",
        },
      },
      {
        title: { ro: "LTL grupaj", en: "LTL groupage", hu: "LTL gyűjtőfuvar" },
        desc: {
          ro: "Transport de grupaj în toată Europa, cu plecări garantate și consolidare eficientă a expedierilor mici.",
          en: "Groupage transport across Europe, with guaranteed departures and efficient consolidation of smaller shipments.",
          hu: "Gyűjtőfuvar Európa-szerte, garantált indulásokkal és a kisebb küldemények hatékony konszolidálásával.",
        },
      },
      {
        title: { ro: "Transport FRIGO", en: "Refrigerated transport", hu: "Hűtött szállítás" },
        desc: {
          ro: "Temperatură controlată pentru a garanta prospețimea și calitatea mărfurilor perisabile, farmaceutice și sensibile.",
          en: "Temperature control to preserve the freshness and quality of perishable, pharmaceutical and sensitive goods.",
          hu: "Hőmérséklet-szabályozás a romlandó, gyógyszeripari és érzékeny áruk frissességének és minőségének megőrzéséért.",
        },
      },
      {
        title: { ro: "Transport ADR", en: "ADR transport", hu: "ADR szállítás" },
        desc: {
          ro: "Mărfuri periculoase transportate de o echipă instruită și certificată, conform tuturor normelor de siguranță ADR.",
          en: "Hazardous goods carried by a trained and certified team, compliant with all ADR safety regulations.",
          hu: "Veszélyes árukat képzett és tanúsított csapat szállít, az összes ADR biztonsági előírásnak megfelelően.",
        },
      },
      {
        title: { ro: "Transport agabaritic", en: "Oversized transport", hu: "Túlméretes szállítás" },
        desc: {
          ro: "Manipulăm cu profesionalism sarcinile de dimensiuni și greutate mari, cu autorizațiile necesare obținute pentru tine.",
          en: "We handle large and heavy loads professionally, securing the required permits for you.",
          hu: "A nagy méretű és súlyú rakományokat szakszerűen kezeljük, a szükséges engedélyeket Ön helyett intézzük.",
        },
      },
      {
        title: { ro: "Distribuție națională", en: "National distribution", hu: "Belföldi disztribúció" },
        desc: {
          ro: "Soluții complete de distribuție pe întreg teritoriul țării, gestionând fiecare etapă a procesului.",
          en: "Complete distribution solutions across the entire country, managing every stage of the process.",
          hu: "Teljes körű disztribúciós megoldások az egész országban, a folyamat minden szakaszának kezelésével.",
        },
      },
    ],
    faqs: [
      {
        q: { ro: "Ce înseamnă transport FTL și LTL?", en: "What do FTL and LTL mean?", hu: "Mit jelent az FTL és az LTL?" },
        a: {
          ro: "La FTL marfa ocupă întregul camion, dedicat exclusiv ție. La LTL plătești doar spațiul ocupat, marfa fiind transportată în regim de grupaj.",
          en: "With FTL the cargo takes up the entire truck, dedicated exclusively to you. With LTL you pay only for the space used, with the cargo shipped as groupage.",
          hu: "Az FTL esetén az áru az egész kamiont elfoglalja, kizárólag Önnek dedikálva. Az LTL esetén csak az elfoglalt helyért fizet, az árut gyűjtőfuvarban szállítjuk.",
        },
      },
      {
        q: { ro: "Marfa mea este asigurată pe durata transportului?", en: "Is my cargo insured during transport?", hu: "Biztosított az áru a szállítás alatt?" },
        a: {
          ro: "Da, toate transporturile organizate de WeLoad sunt acoperite de asigurare CMR. La cerere oferim și asigurare all-risk suplimentară.",
          en: "Yes, every shipment organized by WeLoad is covered by CMR insurance. Supplemental all-risk cover is available on request.",
          hu: "Igen, a WeLoad által szervezett összes szállítás CMR-biztosítással van fedezve. Kérésre kiegészítő all-risk fedezetet is kínálunk.",
        },
      },
      {
        q: { ro: "Cum pot urmări statusul transportului?", en: "How can I track my shipment status?", hu: "Hogyan követhetem a szállítás állapotát?" },
        a: {
          ro: "Toate camioanele sunt dotate cu sisteme GPS, oferindu-ți trasabilitate completă pe tot parcursul cursei.",
          en: "All trucks are equipped with GPS systems, giving you full traceability throughout the trip.",
          hu: "Minden kamion GPS-rendszerrel van felszerelve, így teljes nyomon követhetőséget biztosítunk a fuvar teljes ideje alatt.",
        },
      },
    ],
  },
  {
    slug: "sea",
    icon: "sea",
    title: { ro: "Transport maritim", en: "Sea transport", hu: "Tengeri szállítás" },
    short: {
      ro: "FCL & LCL, containerizat și convențional.",
      en: "FCL & LCL, containerized and conventional.",
      hu: "FCL és LCL, konténeres és hagyományos.",
    },
    tagline: {
      ro: "Soluții globale de transport maritim, containerizate și convenționale",
      en: "Global sea freight solutions, containerized and conventional",
      hu: "Globális tengeri fuvarozási megoldások, konténeres és hagyományos",
    },
    intro: {
      ro: "De la containere standard la cele cu temperatură controlată și de la livrări port-to-port la door-to-door, oferim soluții personalizate pentru proiectele tale de transport maritim. Conectăm România la principalele porturi ale lumii și gestionăm întregul lanț: booking, documente vamale și livrare finală.",
      en: "From standard containers to temperature-controlled units, and from port-to-port to door-to-door deliveries, we offer tailored solutions for your sea freight projects. We connect Romania to the world's major ports and manage the entire chain: booking, customs documents and final delivery.",
      hu: "A szabványos konténerektől a hőmérséklet-szabályozott egységekig, valamint a port-to-port szállításoktól a háztól házig történő kézbesítésig személyre szabott megoldásokat kínálunk tengeri fuvarozási projektjeihez. Romániát összekötjük a világ legnagyobb kikötőivel, és a teljes láncot kezeljük: foglalás, vámiratok és végső kézbesítés.",
    },
    highlights: {
      ro: [
        "FCL, LCL și marfă convențională / non-containerizată",
        "Proceduri vamale gestionate complet la import și export",
        "Livrare port-to-port și door-to-door",
        "Asigurare cargo și urmărirea containerelor",
      ],
      en: [
        "FCL, LCL and conventional / non-containerized cargo",
        "Full import and export customs procedures handled for you",
        "Port-to-port and door-to-door delivery",
        "Cargo insurance and container tracking",
      ],
      hu: [
        "FCL, LCL és hagyományos / nem konténeres áru",
        "Teljes körű import- és exportvámeljárás ügyintézése",
        "Port-to-port és háztól házig kézbesítés",
        "Áru-biztosítás és konténerkövetés",
      ],
    },
    features: [
      {
        title: { ro: "FCL container complet", en: "FCL full container", hu: "FCL teljes konténer" },
        desc: {
          ro: "Închiriere exclusivă a containerului pentru volume mari, cu opțiuni de 20', 40' și 40' High Cube dedicate mărfii tale.",
          en: "Exclusive container rental for larger volumes, with 20', 40' and 40' High Cube options dedicated to your cargo.",
          hu: "Kizárólagos konténerbérlés nagyobb mennyiségekhez, 20'-os, 40'-es és 40'-es High Cube opciókkal, az Ön árujának dedikálva.",
        },
      },
      {
        title: { ro: "LCL grupaj maritim", en: "LCL sea groupage", hu: "LCL tengeri gyűjtőfuvar" },
        desc: {
          ro: "Serviciu de consolidare pentru expedieri mai mici, ideal când nu ai nevoie de un container complet.",
          en: "Consolidation service for smaller shipments, ideal when you don't need a full container.",
          hu: "Konszolidációs szolgáltatás kisebb küldeményekhez, ideális, ha nincs szüksége teljes konténerre.",
        },
      },
      {
        title: { ro: "Transport frigorific", en: "Refrigerated transport", hu: "Hűtött szállítás" },
        desc: {
          ro: "Containere reefer cu temperatură controlată pentru mărfuri perisabile și sensibile.",
          en: "Reefer containers with temperature control for perishable and sensitive goods.",
          hu: "Reefer konténerek hőmérséklet-szabályozással romlandó és érzékeny áruk számára.",
        },
      },
      {
        title: { ro: "Vămuire & documente", en: "Customs & documentation", hu: "Vámkezelés és dokumentáció" },
        desc: {
          ro: "Bill of lading, certificate de origine și formalități vamale la import și export, pregătite de echipa noastră.",
          en: "Bills of lading, certificates of origin and import/export customs formalities, prepared by our team.",
          hu: "Hajóraklevelek, származási bizonyítványok és import/export vámformalitások, csapatunk által elkészítve.",
        },
      },
    ],
    faqs: [
      {
        q: { ro: "Care este diferența dintre FCL și LCL?", en: "What is the difference between FCL and LCL?", hu: "Mi a különbség az FCL és az LCL között?" },
        a: {
          ro: "La FCL închiriezi un container întreg, dedicat exclusiv ție. La LCL plătești doar spațiul ocupat, marfa fiind consolidată cu a altor clienți.",
          en: "With FCL you book an entire container dedicated exclusively to you. With LCL you pay only for the space used, sharing the container with other shippers.",
          hu: "Az FCL esetén egy teljes konténert bérel, kizárólag Önnek dedikálva. Az LCL esetén csak az elfoglalt helyért fizet, a konténert más feladókkal megosztva.",
        },
      },
      {
        q: { ro: "Cât durează transportul maritim?", en: "How long does sea transport take?", hu: "Mennyi ideig tart a tengeri szállítás?" },
        a: {
          ro: "Depinde de rută; de exemplu, între China și Europa transportul durează în general 22–50 de zile. Îți comunicăm timpul de tranzit estimat la fiecare ofertă.",
          en: "It depends on the route; for example, between China and Europe it generally takes 22–50 days. We share the estimated transit time with every quote.",
          hu: "Az útvonaltól függ; például Kína és Európa között általában 22–50 nap. A becsült tranzitidőt minden ajánlatnál közöljük.",
        },
      },
      {
        q: { ro: "Gestionați și vămuirea?", en: "Do you handle customs clearance?", hu: "Intézik a vámkezelést is?" },
        a: {
          ro: "Da, ne ocupăm de toate formalitățile vamale la import și export.",
          en: "Yes, we take care of all import and export customs formalities.",
          hu: "Igen, minden import- és exportvámformalitást elintézünk.",
        },
      },
    ],
  },
  {
    slug: "air",
    icon: "air",
    title: { ro: "Transport aerian", en: "Air transport", hu: "Légi szállítás" },
    short: {
      ro: "Express și standard, urgent oriunde.",
      en: "Express and standard, urgent anywhere.",
      hu: "Expressz és normál, sürgősen bárhová.",
    },
    tagline: {
      ro: "Rapiditate maximă pentru expedieri urgente, oriunde în lume",
      en: "Maximum speed for urgent shipments, anywhere in the world",
      hu: "Maximális sebesség sürgős küldeményekhez, bárhol a világon",
    },
    intro: {
      ro: "Când viteza și eficiența sunt esențiale, transportul aerian asigură că bunurile tale ajung la destinație la timp și în siguranță. Oferim soluții pentru mărfuri perisabile, produse de valoare ridicată și expedieri urgente, cu acces la o rețea globală de companii aeriene cargo.",
      en: "When speed and efficiency are essential, air freight ensures your goods reach their destination on time and safely. We offer solutions for perishables, high-value products and urgent shipments, with access to a global network of cargo airlines.",
      hu: "Amikor a sebesség és a hatékonyság elengedhetetlen, a légi fuvarozás biztosítja, hogy áruja időben és biztonságosan érkezzen meg a célállomásra. Megoldásokat kínálunk romlandó áruk, nagy értékű termékek és sürgős küldemények számára, hozzáférve a teherszállító légitársaságok globális hálózatához.",
    },
    highlights: {
      ro: [
        "Acoperire globală prin parteneriate cu companii aeriene majore",
        "Servicii express pentru livrări urgente în 24–72 de ore",
        "Sistem avansat de urmărire pentru transparență completă",
        "Manipulare specializată și conformitate cu normele IATA",
      ],
      en: [
        "Global coverage through partnerships with major airlines",
        "Express services for urgent deliveries in 24–72 hours",
        "Advanced tracking system for full transparency",
        "Specialized handling and compliance with IATA regulations",
      ],
      hu: [
        "Globális lefedettség a nagy légitársaságokkal kötött partnerségeken keresztül",
        "Expressz szolgáltatások sürgős kézbesítéshez 24–72 órán belül",
        "Fejlett követőrendszer a teljes átláthatóságért",
        "Speciális kezelés és az IATA-előírásoknak való megfelelés",
      ],
    },
    features: [
      {
        title: { ro: "Aerian express", en: "Express air", hu: "Expressz légi" },
        desc: {
          ro: "Cea mai rapidă opțiune, pentru expedieri cu deadline strict și livrare prioritară.",
          en: "The fastest option, for shipments with tight deadlines and priority delivery.",
          hu: "A leggyorsabb lehetőség szoros határidős küldeményekhez és kiemelt kézbesítéshez.",
        },
      },
      {
        title: { ro: "Aerian standard", en: "Standard air", hu: "Normál légi" },
        desc: {
          ro: "Echilibru optim între viteză și cost pentru transporturile internaționale regulate.",
          en: "The optimal balance between speed and cost for regular international shipments.",
          hu: "Optimális egyensúly a sebesség és a költség között a rendszeres nemzetközi küldeményekhez.",
        },
      },
      {
        title: { ro: "Charter & servicii urgente", en: "Charter & urgent services", hu: "Charter és sürgősségi szolgáltatások" },
        desc: {
          ro: "Soluții AOG, curierat express și Next Flight Out pentru situațiile critice, cu aeronave dedicate la nevoie.",
          en: "AOG solutions, express courier and Next Flight Out for critical situations, with dedicated aircraft when needed.",
          hu: "AOG-megoldások, expressz futárszolgálat és Next Flight Out kritikus helyzetekhez, szükség esetén dedikált légi járművekkel.",
        },
      },
      {
        title: { ro: "Mărfuri speciale", en: "Special cargo", hu: "Speciális áruk" },
        desc: {
          ro: "Produse farmaceutice, perisabile, eșantioane și piese critice, manipulate conform standardelor și normelor IATA.",
          en: "Pharmaceuticals, perishables, samples and critical parts, handled to the highest standards and IATA regulations.",
          hu: "Gyógyszerek, romlandó áruk, minták és kritikus alkatrészek, a legmagasabb szabványok és az IATA-előírások szerint kezelve.",
        },
      },
    ],
    faqs: [
      {
        q: { ro: "Când se justifică transportul aerian?", en: "When is air transport worthwhile?", hu: "Mikor éri meg a légi szállítás?" },
        a: {
          ro: "Pentru livrări urgente (24–72h), produse perisabile, mărfuri de valoare ridicată, eșantioane și piese critice.",
          en: "For urgent deliveries (24–72h), perishables, high-value goods, samples and critical parts.",
          hu: "Sürgős kézbesítésekhez (24–72 óra), romlandó áruhoz, nagy értékű árukhoz, mintákhoz és kritikus alkatrészekhez.",
        },
      },
      {
        q: { ro: "Cât durează transportul intercontinental?", en: "How long does intercontinental transport take?", hu: "Mennyi ideig tart az interkontinentális szállítás?" },
        a: {
          ro: "Orientativ, din Europa spre SUA 1–2 zile, spre Asia 1–3 zile, iar spre Australia 2–4 zile.",
          en: "As a guide, from Europe to the USA 1–2 days, to Asia 1–3 days, and to Australia 2–4 days.",
          hu: "Tájékoztató jelleggel Európából az USA-ba 1–2 nap, Ázsiába 1–3 nap, Ausztráliába pedig 2–4 nap.",
        },
      },
      {
        q: { ro: "Ce mărfuri sunt interzise la transportul aerian?", en: "Which goods are prohibited in air transport?", hu: "Mely áruk tiltottak a légi szállításban?" },
        a: {
          ro: "Explozivi, gaze comprimate, lichide inflamabile, materiale radioactive și magneți puternici, fără avizare specială.",
          en: "Explosives, compressed gases, flammable liquids, radioactive materials and strong magnets, without special authorization.",
          hu: "Robbanóanyagok, sűrített gázok, gyúlékony folyadékok, radioaktív anyagok és erős mágnesek, külön engedély nélkül.",
        },
      },
    ],
  },
  {
    slug: "rail",
    icon: "rail",
    title: { ro: "Transport feroviar", en: "Rail transport", hu: "Vasúti szállítás" },
    short: {
      ro: "Volume mari, distanțe lungi, sustenabil.",
      en: "High volumes, long distances, sustainable.",
      hu: "Nagy mennyiségek, hosszú távok, fenntartható.",
    },
    tagline: {
      ro: "Soluții personalizate pentru volume mari și distanțe lungi",
      en: "Tailored solutions for high volumes over long distances",
      hu: "Személyre szabott megoldások nagy mennyiségekhez és hosszú távokra",
    },
    intro: {
      ro: "Industria feroviară a atins noi niveluri de eficiență și economie. Ne adaptăm nevoilor tale specifice și îți oferim cele mai bune opțiuni pentru transportul de marfă pe calea ferată, cu costuri previzibile și impact redus asupra mediului. Operăm rute interne și internaționale, inclusiv coridoarele către Asia.",
      en: "The rail industry has reached new levels of efficiency and economy. We adapt to your specific needs and offer the best options for rail freight, with predictable costs and a reduced environmental impact. We operate domestic and international routes, including the corridors to Asia.",
      hu: "A vasúti ágazat a hatékonyság és a gazdaságosság új szintjeit érte el. Alkalmazkodunk az Ön egyedi igényeihez, és a legjobb lehetőségeket kínáljuk a vasúti árufuvarozáshoz, kiszámítható költségekkel és csökkentett környezeti hatással. Belföldi és nemzetközi útvonalakat üzemeltetünk, beleértve az Ázsiába vezető folyosókat is.",
    },
    highlights: {
      ro: [
        "Experiență vastă și peste 1.500 de clienți mulțumiți",
        "Transport feroviar internațional cu conexiuni extinse în Europa",
        "Livrări programate și urmărire în timp real",
        "Marfă asigurată pe toată durata transportului",
      ],
      en: [
        "Extensive experience and over 1,500 satisfied clients",
        "International rail transport with broad connections across Europe",
        "Scheduled deliveries and real-time tracking",
        "Cargo insured throughout the entire journey",
      ],
      hu: [
        "Kiterjedt tapasztalat és több mint 1500 elégedett ügyfél",
        "Nemzetközi vasúti szállítás széles körű európai kapcsolatokkal",
        "Ütemezett kézbesítések és valós idejű követés",
        "Az áru a teljes út során biztosított",
      ],
    },
    features: [
      {
        title: { ro: "Soluții complete de tracțiune", en: "Complete traction solutions", hu: "Teljes körű vontatási megoldások" },
        desc: {
          ro: "Tracțiune integrată cu timpi rapizi și conexiuni extinse în Europa Centrală, de Sud-Est și de Nord-Vest.",
          en: "Integrated traction with fast transit times and broad connections across Central, South-East and North-West Europe.",
          hu: "Integrált vontatás gyors menetidőkkel és kiterjedt kapcsolatokkal Közép-, Délkelet- és Északnyugat-Európában.",
        },
      },
      {
        title: { ro: "Vagoane complete", en: "Full wagons", hu: "Komplett vagonok" },
        desc: {
          ro: "Capacitate dedicată pentru mărfuri în vrac, materiale de construcții și producție industrială.",
          en: "Dedicated capacity for bulk cargo, construction materials and industrial output.",
          hu: "Dedikált kapacitás ömlesztett áruhoz, építőanyagokhoz és ipari termékekhez.",
        },
      },
      {
        title: { ro: "Containerizat pe CF", en: "Containerized rail", hu: "Konténeres vasúti" },
        desc: {
          ro: "Transport de containere pe calea ferată, integrat în lanțul logistic global.",
          en: "Container transport by rail, integrated into the global logistics chain.",
          hu: "Konténerszállítás vasúton, a globális logisztikai láncba integrálva.",
        },
      },
      {
        title: { ro: "Coridoare către Asia", en: "Corridors to Asia", hu: "Folyosók Ázsiába" },
        desc: {
          ro: "Alternativă mai rapidă decât maritimul și mai ieftină decât aerianul pe rutele către China.",
          en: "A faster alternative to sea and a cheaper one than air on routes to China.",
          hu: "A tengerinél gyorsabb és a léginél olcsóbb alternatíva a Kínába vezető útvonalakon.",
        },
      },
    ],
    faqs: [
      {
        q: { ro: "Când merită transportul feroviar?", en: "When is rail transport worthwhile?", hu: "Mikor éri meg a vasúti szállítás?" },
        a: {
          ro: "Pentru volume mari pe distanțe lungi, unde costul pe tonă, eficiența energetică și sustenabilitatea sunt prioritare.",
          en: "For high volumes over long distances, where cost per ton, energy efficiency and sustainability are priorities.",
          hu: "Nagy mennyiségekhez hosszú távokon, ahol a tonnánkénti költség, az energiahatékonyság és a fenntarthatóság a fő szempont.",
        },
      },
      {
        q: { ro: "Care sunt avantajele transportului feroviar?", en: "What are the advantages of rail transport?", hu: "Milyen előnyei vannak a vasúti szállításnak?" },
        a: {
          ro: "Impact redus asupra mediului, eficiență energetică superioară, siguranță ridicată și cost economic pe distanțe lungi.",
          en: "A reduced environmental impact, superior energy efficiency, high safety and economical cost over long distances.",
          hu: "Csökkentett környezeti hatás, kiváló energiahatékonyság, magas biztonság és gazdaságos költség hosszú távokon.",
        },
      },
      {
        q: { ro: "Pot urmări marfa în timp real?", en: "Can I track my cargo in real time?", hu: "Követhetem az árut valós időben?" },
        a: {
          ro: "Da, oferim urmărire în timp real și livrări programate pe tot parcursul transportului.",
          en: "Yes, we provide real-time tracking and scheduled deliveries throughout the journey.",
          hu: "Igen, valós idejű követést és ütemezett kézbesítéseket biztosítunk a teljes út során.",
        },
      },
    ],
  },
  {
    slug: "multimodal",
    icon: "multimodal",
    title: { ro: "Transport multimodal", en: "Multimodal transport", hu: "Multimodális szállítás" },
    short: {
      ro: "Rutier, maritim, aerian și feroviar, combinate.",
      en: "Road, sea, air and rail, combined.",
      hu: "Közúti, tengeri, légi és vasúti, kombinálva.",
    },
    tagline: {
      ro: "Soluții combinate pentru a-ți optimiza lanțul de aprovizionare",
      en: "Combined solutions to optimize your supply chain",
      hu: "Kombinált megoldások az ellátási lánc optimalizálásához",
    },
    intro: {
      ro: "Combinăm două sau mai multe moduri de transport (rutier, maritim, aerian și feroviar) într-o singură soluție integrată, pentru a-ți optimiza lanțul de aprovizionare și a reduce costurile. Cu îndrumare de specialitate, gestionăm totul pe baza unui singur contract și a unui singur punct de contact.",
      en: "We combine two or more transport modes (road, sea, air and rail) into a single integrated solution to optimize your supply chain and reduce costs. With expert guidance, we manage everything under a single contract and a single point of contact.",
      hu: "Két vagy több szállítási módot (közúti, tengeri, légi és vasúti) egyetlen integrált megoldássá kombinálunk az ellátási lánc optimalizálása és a költségek csökkentése érdekében. Szakértői iránymutatással mindent egyetlen szerződés és egyetlen kapcsolattartási pont keretében kezelünk.",
    },
    highlights: {
      ro: [
        "Un singur partener și un singur contract pentru întregul lanț",
        "Consolidare, despachetare și servicii vamale",
        "Urmărire și monitorizare în timp real",
        "Rute optimizate pentru cost, timp și impact ecologic",
      ],
      en: [
        "A single partner and a single contract for the entire chain",
        "Consolidation, deconsolidation and customs services",
        "Real-time tracking and monitoring",
        "Routes optimized for cost, time and environmental impact",
      ],
      hu: [
        "Egyetlen partner és egyetlen szerződés a teljes lánchoz",
        "Konszolidáció, kicsomagolás és vámszolgáltatások",
        "Valós idejű követés és felügyelet",
        "Költség, idő és környezeti hatás szerint optimalizált útvonalak",
      ],
    },
    features: [
      {
        title: { ro: "Rute integrate", en: "Integrated routing", hu: "Integrált útvonaltervezés" },
        desc: {
          ro: "Proiectăm traseul ideal combinând modurile de transport pentru cea mai bună eficiență.",
          en: "We design the ideal route by combining transport modes for the best efficiency.",
          hu: "Megtervezzük az ideális útvonalat a szállítási módok kombinálásával a legjobb hatékonyság érdekében.",
        },
      },
      {
        title: { ro: "Un singur contact", en: "Single point of contact", hu: "Egyetlen kapcsolattartó" },
        desc: {
          ro: "Un coordonator dedicat gestionează întregul transport, indiferent de câte etape are, pe baza unui singur contract.",
          en: "A dedicated coordinator manages the entire shipment, no matter how many legs it has, under a single contract.",
          hu: "Egy dedikált koordinátor kezeli a teljes szállítást, függetlenül a szakaszok számától, egyetlen szerződés keretében.",
        },
      },
      {
        title: { ro: "Vizibilitate end-to-end", en: "End-to-end visibility", hu: "Végponttól végpontig átláthatóság" },
        desc: {
          ro: "Urmărire și monitorizare în timp real, cu actualizări la fiecare punct de transfer.",
          en: "Real-time tracking and monitoring, with updates at every transfer point.",
          hu: "Valós idejű követés és felügyelet, frissítésekkel minden átrakodási ponton.",
        },
      },
      {
        title: { ro: "Costuri reduse", en: "Lower costs", hu: "Alacsonyabb költségek" },
        desc: {
          ro: "Soluție mai ieftină pe distanțe lungi și mai ecologică decât folosirea unui singur mod de transport.",
          en: "A cheaper solution over long distances and a greener one than using a single transport mode.",
          hu: "Olcsóbb megoldás hosszú távokon és környezetbarátabb, mint egyetlen szállítási mód használata.",
        },
      },
    ],
    faqs: [
      {
        q: { ro: "Ce înseamnă transport multimodal?", en: "What does multimodal transport mean?", hu: "Mit jelent a multimodális szállítás?" },
        a: {
          ro: "Un sistem care combină două sau mai multe moduri de transport diferite (de exemplu maritim plus rutier) pentru a muta marfa între puncte, pe baza unui singur contract integrat.",
          en: "A system that combines two or more different transport modes (for example sea plus road) to move cargo between points, under a single integrated contract.",
          hu: "Egy rendszer, amely két vagy több különböző szállítási módot kombinál (például tengeri és közúti) az áru pontok közötti mozgatásához, egyetlen integrált szerződés keretében.",
        },
      },
      {
        q: { ro: "Care sunt avantajele față de un singur mod de transport?", en: "What are the advantages over a single transport mode?", hu: "Milyen előnyei vannak az egyetlen szállítási móddal szemben?" },
        a: {
          ro: "Este mai rapid și mai eficient, mai ieftin pe distanțe lungi, mai flexibil, mai ecologic și implică formalități minime.",
          en: "It is faster and more efficient, cheaper over long distances, more flexible, greener and involves minimal paperwork.",
          hu: "Gyorsabb és hatékonyabb, olcsóbb hosszú távokon, rugalmasabb, környezetbarátabb, és minimális adminisztrációval jár.",
        },
      },
      {
        q: { ro: "Cine răspunde de marfă pe tot parcursul?", en: "Who is responsible for the cargo throughout?", hu: "Ki felel az áruért a teljes út során?" },
        a: {
          ro: "Noi coordonăm întregul lanț și rămânem punctul tău unic de contact, de la preluare la livrare.",
          en: "We coordinate the entire chain and remain your single point of contact, from pickup to delivery.",
          hu: "Mi koordináljuk a teljes láncot, és egyetlen kapcsolattartó pontja maradunk a felvételtől a kézbesítésig.",
        },
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
