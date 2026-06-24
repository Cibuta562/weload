import type { Locale } from "./i18n";

export interface LegalSection {
  h: string;
  body: string[];
}

export interface LegalDoc {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export interface LegalContent {
  ui: {
    footerPrivacy: string;
    footerCookies: string;
    lastUpdated: string;
    consentLabel: string;
    consentPolicy: string;
    consentRequired: string;
  };
  privacy: LegalDoc;
  cookies: LegalDoc;
}

// Operator legal details (WeLoad is a brand operated by Crystal Logistics Services).
const OP_EMAIL = "acc@crystal-logistics-services.com";

const ro: LegalContent = {
  ui: {
    footerPrivacy: "Politica de confidențialitate",
    footerCookies: "Politica de cookie-uri",
    lastUpdated: "Ultima actualizare",
    consentLabel:
      "Sunt de acord cu prelucrarea datelor mele pentru a fi contactat în legătură cu solicitarea mea, conform",
    consentPolicy: "Politicii de confidențialitate",
    consentRequired: "Trebuie să accepți prelucrarea datelor pentru a trimite mesajul.",
  },
  privacy: {
    title: "Politica de confidențialitate",
    updated: "24.06.2026",
    intro:
      "Crystal Logistics Services acordă o importanță deosebită confidențialității datelor cu caracter personal. Această politică descrie modul în care colectăm, folosim, transferăm și protejăm datele tale atunci când interacționezi cu noi, inclusiv prin acest site (weload.eu), în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și legislația națională aplicabilă.",
    sections: [
      {
        h: "1. Operatorii de date",
        body: [
          "Datele tale sunt prelucrate de Crystal Logistics Services S.R.L., cu sediul în Strada Dr. Iacob Felix nr. 49, Etaj S, Camera 9, București, Sector 1, România, înregistrată la Registrul Comerțului cu nr. J40/4964/2021, CUI 43944517.",
          "și de Crystal Logistics Services GmbH, cu sediul în Bahnhofstrasse nr. 21, Zug, Elveția, înregistrată cu nr. CHE-217.611.963.",
          `WeLoad este o marcă operată de Crystal Logistics Services. Date de contact: +40 757 333 184, ${OP_EMAIL}.`,
        ],
      },
      {
        h: "2. Responsabilul cu protecția datelor (DPO)",
        body: [
          `Am desemnat un Responsabil cu Protecția Datelor (DPO) care supraveghează conformitatea cu GDPR. Îl poți contacta la ${OP_EMAIL}, cu mențiunea „În atenția Responsabilului cu Protecția Datelor", sau la adresa sediului din București.`,
        ],
      },
      {
        h: "3. Ce date colectăm",
        body: [
          "Prin formularul de contact de pe acest site: nume, adresă de email, telefon (opțional), companie (opțional), serviciul de interes și conținutul mesajului.",
          "Date tehnice generate automat: adresa IP, tipul de browser și paginile vizitate (jurnalele serverului), folosite pentru securitate și funcționarea site-ului.",
          "În cadrul relației comerciale putem prelucra și: date ale clienților și partenerilor (date de contact, detalii de tranzacții, facturare, informații vamale), date ale persoanelor implicate în expedieri (nume, adrese, detalii de expediere) și date ale furnizorilor.",
        ],
      },
      {
        h: "4. Scopuri și temei legal",
        body: [
          "Prestarea serviciilor de transport și logistică — executarea contractului (art. 6(1)(b) GDPR).",
          "Răspunsul la solicitări și pregătirea ofertelor — pași precontractuali (art. 6(1)(b)) și/sau consimțământul tău (art. 6(1)(a)).",
          "Îndeplinirea obligațiilor legale — documente vamale, contabile și fiscale (art. 6(1)(c)).",
          "Gestionarea relației cu clienții și partenerii, securitatea și îmbunătățirea serviciilor — interesul nostru legitim (art. 6(1)(f)).",
          "Comunicări comerciale / marketing — interes legitim sau consimțământ.",
        ],
      },
      {
        h: "5. Destinatarii datelor",
        body: [
          "Putem divulga date către parteneri și subcontractori, autorități, furnizori de servicii (inclusiv furnizorul de CRM, furnizorul de email și furnizorul de găzduire a site-ului) și asigurători, pe baza unor acorduri de confidențialitate și de prelucrare a datelor. Nu vindem datele tale.",
        ],
      },
      {
        h: "6. Transferuri internaționale",
        body: [
          "Unele date pot fi transferate în afara Spațiului Economic European (în special către Elveția), pe baza deciziilor de adecvare ale Comisiei Europene sau a Clauzelor Contractuale Standard (SCC).",
        ],
      },
      {
        h: "7. Cât timp păstrăm datele",
        body: [
          "Pe durata executării contractului; 10 ani pentru documentele financiar-contabile; până la retragerea consimțământului pentru marketing; până la împlinirea termenelor legale de prescripție pentru apărarea intereselor legitime.",
        ],
      },
      {
        h: "8. Drepturile tale",
        body: [
          "Ai dreptul de informare și acces, rectificare, ștergere (dreptul de a fi uitat), restricționare a prelucrării, portabilitate, opoziție, de a nu fi supus unor decizii automate și de a-ți retrage consimțământul în orice moment.",
          `Îți poți exercita drepturile scriindu-ne la ${OP_EMAIL}.`,
          "Ai dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), www.dataprotection.ro.",
        ],
      },
      {
        h: "9. Securitatea datelor",
        body: [
          "Aplicăm măsuri tehnice și organizatorice: criptare, controale de acces, instruirea personalului, audituri de securitate și gestionarea incidentelor.",
        ],
      },
      {
        h: "10. Cookie-uri",
        body: [
          "Folosim cookie-uri pentru funcționarea site-ului și îmbunătățirea experienței. Detalii în Politica de cookie-uri.",
        ],
      },
      {
        h: "11. Modificări",
        body: [
          "Putem actualiza periodic această politică. Versiunea curentă este cea publicată pe această pagină, cu data ultimei actualizări de mai sus.",
        ],
      },
      {
        h: "12. Contact",
        body: [
          `Email: ${OP_EMAIL} · Tel: +40 757 333 184 · Sediu: Strada Dr. Iacob Felix nr. 49, Etaj S, Camera 9, București, Sector 1, România.`,
        ],
      },
    ],
  },
  cookies: {
    title: "Politica de cookie-uri",
    updated: "24.06.2026",
    intro:
      "Această politică explică cum folosim cookie-urile și tehnologiile de stocare locală pe acest site.",
    sections: [
      {
        h: "1. Ce sunt cookie-urile",
        body: [
          "Cookie-urile și stocarea locală sunt fișiere mici salvate în browserul tău, folosite pentru a reține preferințe sau pentru a face site-ul să funcționeze corect.",
        ],
      },
      {
        h: "2. Ce folosim noi",
        body: [
          "Strict necesare: salvăm local alegerea ta privind cookie-urile (pentru a nu-ți afișa banner-ul la fiecare vizită). Aceste date nu necesită consimțământ și nu sunt folosite pentru urmărire.",
          "În prezent NU folosim cookie-uri de analiză, publicitate sau de urmărire de la terți. Dacă vom introduce astfel de cookie-uri, ele vor fi activate doar după consimțământul tău.",
        ],
      },
      {
        h: "3. Cum le controlezi",
        body: [
          "Poți accepta sau refuza din banner-ul afișat la prima vizită. Poți, de asemenea, șterge stocarea locală și cookie-urile din setările browserului tău.",
        ],
      },
      {
        h: "4. Modificări",
        body: [
          "Putem actualiza această politică pe măsură ce adăugăm sau eliminăm tehnologii. Verifică data ultimei actualizări de mai sus.",
        ],
      },
    ],
  },
};

const en: LegalContent = {
  ui: {
    footerPrivacy: "Privacy Policy",
    footerCookies: "Cookie Policy",
    lastUpdated: "Last updated",
    consentLabel:
      "I agree to the processing of my data so I can be contacted about my request, in line with the",
    consentPolicy: "Privacy Policy",
    consentRequired: "You must accept the data processing to send the message.",
  },
  privacy: {
    title: "Privacy Policy",
    updated: "24.06.2026",
    intro:
      "Crystal Logistics Services places great importance on the confidentiality of personal data. This policy describes how we collect, use, transfer and protect your data when you interact with us, including through this website (weload.eu), in accordance with Regulation (EU) 2016/679 (GDPR) and applicable national law.",
    sections: [
      {
        h: "1. Data controllers",
        body: [
          "Your data is processed by Crystal Logistics Services S.R.L., with its registered office at Strada Dr. Iacob Felix no. 49, Floor S, Room 9, Bucharest, Sector 1, Romania, registered with the Trade Register under no. J40/4964/2021, Tax ID 43944517.",
          "and by Crystal Logistics Services GmbH, with its registered office at Bahnhofstrasse no. 21, Zug, Switzerland, registered under no. CHE-217.611.963.",
          `WeLoad is a brand operated by Crystal Logistics Services. Contact: +40 757 333 184, ${OP_EMAIL}.`,
        ],
      },
      {
        h: "2. Data Protection Officer (DPO)",
        body: [
          `We have appointed a Data Protection Officer (DPO) who oversees GDPR compliance. You can reach the DPO at ${OP_EMAIL}, marked "For the attention of the Data Protection Officer", or at the Bucharest office address.`,
        ],
      },
      {
        h: "3. What we collect",
        body: [
          "Through the contact form on this site: name, email address, phone (optional), company (optional), service of interest and the content of your message.",
          "Automatically generated technical data: IP address, browser type and pages visited (server logs), used for security and operation of the site.",
          "Within our business relationship we may also process: client and partner data (contact details, transaction details, billing, customs information), data of individuals involved in shipments (names, addresses, shipment details) and supplier data.",
        ],
      },
      {
        h: "4. Purposes and legal basis",
        body: [
          "Providing transport and logistics services — performance of a contract (Art. 6(1)(b) GDPR).",
          "Responding to requests and preparing quotes — pre-contractual steps (Art. 6(1)(b)) and/or your consent (Art. 6(1)(a)).",
          "Compliance with legal obligations — customs, accounting and tax documents (Art. 6(1)(c)).",
          "Managing the relationship with clients and partners, security and service improvement — our legitimate interest (Art. 6(1)(f)).",
          "Commercial communications / marketing — legitimate interest or consent.",
        ],
      },
      {
        h: "5. Data recipients",
        body: [
          "We may disclose data to partners and subcontractors, authorities, service providers (including the CRM provider, the email provider and the website hosting provider) and insurers, based on confidentiality and data processing agreements. We do not sell your data.",
        ],
      },
      {
        h: "6. International transfers",
        body: [
          "Some data may be transferred outside the European Economic Area (in particular to Switzerland), based on European Commission adequacy decisions or Standard Contractual Clauses (SCC).",
        ],
      },
      {
        h: "7. How long we keep data",
        body: [
          "For the duration of contract performance; 10 years for financial/accounting documents; until withdrawal of marketing consent; until the statutory limitation periods for defending legitimate interests expire.",
        ],
      },
      {
        h: "8. Your rights",
        body: [
          "You have the right to information and access, rectification, erasure (the \"right to be forgotten\"), restriction of processing, portability, objection, not to be subject to automated decisions, and to withdraw consent at any time.",
          `You can exercise your rights by writing to ${OP_EMAIL}.`,
          "You have the right to lodge a complaint with the Romanian Data Protection Authority (ANSPDCP), www.dataprotection.ro.",
        ],
      },
      {
        h: "9. Data security",
        body: [
          "We apply technical and organizational measures: encryption, access controls, staff training, security audits and incident management.",
        ],
      },
      {
        h: "10. Cookies",
        body: ["We use cookies to operate the site and improve your experience. Details in our Cookie Policy."],
      },
      {
        h: "11. Changes",
        body: [
          "We may update this policy periodically. The current version is the one published on this page, with the last-updated date above.",
        ],
      },
      {
        h: "12. Contact",
        body: [
          `Email: ${OP_EMAIL} · Phone: +40 757 333 184 · Office: Strada Dr. Iacob Felix no. 49, Floor S, Room 9, Bucharest, Sector 1, Romania.`,
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    updated: "24.06.2026",
    intro:
      "This policy explains how we use cookies and local-storage technologies on this website.",
    sections: [
      {
        h: "1. What cookies are",
        body: [
          "Cookies and local storage are small files saved in your browser, used to remember preferences or to make the site work correctly.",
        ],
      },
      {
        h: "2. What we use",
        body: [
          "Strictly necessary: we save your cookie choice locally (so the banner isn't shown on every visit). This does not require consent and is not used for tracking.",
          "We currently do NOT use analytics, advertising or third-party tracking cookies. If we introduce any, they will only be enabled after your consent.",
        ],
      },
      {
        h: "3. How to control them",
        body: [
          "You can accept or deny via the banner shown on your first visit. You can also clear local storage and cookies from your browser settings.",
        ],
      },
      {
        h: "4. Changes",
        body: [
          "We may update this policy as we add or remove technologies. Check the last-updated date above.",
        ],
      },
    ],
  },
};

const hu: LegalContent = {
  ui: {
    footerPrivacy: "Adatvédelmi szabályzat",
    footerCookies: "Süti szabályzat",
    lastUpdated: "Utolsó frissítés",
    consentLabel:
      "Hozzájárulok adataim kezeléséhez, hogy kérésemmel kapcsolatban felvehessék velem a kapcsolatot, az",
    consentPolicy: "Adatvédelmi szabályzatnak megfelelően",
    consentRequired: "Az üzenet elküldéséhez el kell fogadnod az adatkezelést.",
  },
  privacy: {
    title: "Adatvédelmi szabályzat",
    updated: "2026.06.24",
    intro:
      "A Crystal Logistics Services kiemelt fontosságot tulajdonít a személyes adatok bizalmas kezelésének. Ez a szabályzat ismerteti, hogyan gyűjtjük, használjuk, továbbítjuk és védjük adataidat, amikor kapcsolatba lépsz velünk, beleértve ezt a weboldalt (weload.eu) is, az (EU) 2016/679 rendelettel (GDPR) és a vonatkozó nemzeti jogszabályokkal összhangban.",
    sections: [
      {
        h: "1. Adatkezelők",
        body: [
          "Adataidat a Crystal Logistics Services S.R.L. kezeli, székhelye: Strada Dr. Iacob Felix nr. 49, Etaj S, Camera 9, Bukarest, 1. kerület, Románia, cégjegyzékszám: J40/4964/2021, adószám: 43944517.",
          "valamint a Crystal Logistics Services GmbH, székhelye: Bahnhofstrasse nr. 21, Zug, Svájc, nyilvántartási szám: CHE-217.611.963.",
          `A WeLoad a Crystal Logistics Services által üzemeltetett márka. Elérhetőség: +40 757 333 184, ${OP_EMAIL}.`,
        ],
      },
      {
        h: "2. Adatvédelmi tisztviselő (DPO)",
        body: [
          `Adatvédelmi tisztviselőt (DPO) jelöltünk ki, aki felügyeli a GDPR-nak való megfelelést. Elérhető a(z) ${OP_EMAIL} címen „Az adatvédelmi tisztviselő részére" megjelöléssel, vagy a bukaresti székhely címén.`,
        ],
      },
      {
        h: "3. Milyen adatokat gyűjtünk",
        body: [
          "A weboldal kapcsolatfelvételi űrlapján keresztül: név, e-mail cím, telefon (opcionális), cég (opcionális), az érdeklődési szolgáltatás és az üzenet tartalma.",
          "Automatikusan generált technikai adatok: IP-cím, böngészőtípus és meglátogatott oldalak (szervernaplók), biztonsági és működési célból.",
          "Az üzleti kapcsolat keretében kezelhetünk továbbá: ügyfél- és partneradatokat (elérhetőségek, tranzakciós adatok, számlázás, vámadatok), a szállításban érintett személyek adatait (név, cím, szállítási adatok) és beszállítói adatokat.",
        ],
      },
      {
        h: "4. Célok és jogalap",
        body: [
          "Szállítási és logisztikai szolgáltatások nyújtása — szerződés teljesítése (GDPR 6. cikk (1) b)).",
          "Kérések megválaszolása és ajánlatok készítése — szerződéskötést megelőző lépések (6. cikk (1) b)) és/vagy hozzájárulás (6. cikk (1) a)).",
          "Jogi kötelezettségek teljesítése — vám-, számviteli és adóügyi dokumentumok (6. cikk (1) c)).",
          "Ügyfél- és partnerkapcsolatok kezelése, biztonság és szolgáltatásfejlesztés — jogos érdekünk (6. cikk (1) f)).",
          "Kereskedelmi kommunikáció / marketing — jogos érdek vagy hozzájárulás.",
        ],
      },
      {
        h: "5. Adatok címzettjei",
        body: [
          "Adatokat továbbíthatunk partnereknek és alvállalkozóknak, hatóságoknak, szolgáltatóknak (beleértve a CRM-szolgáltatót, az e-mail-szolgáltatót és a weboldal tárhelyszolgáltatóját) és biztosítóknak, titoktartási és adatfeldolgozási megállapodások alapján. Adataidat nem értékesítjük.",
        ],
      },
      {
        h: "6. Nemzetközi adattovábbítás",
        body: [
          "Egyes adatok az Európai Gazdasági Térségen kívülre (különösen Svájcba) is továbbíthatók, az Európai Bizottság megfelelőségi határozatai vagy általános szerződési feltételek (SCC) alapján.",
        ],
      },
      {
        h: "7. Meddig őrizzük az adatokat",
        body: [
          "A szerződés teljesítésének időtartamáig; 10 évig a pénzügyi-számviteli dokumentumok esetében; a marketing-hozzájárulás visszavonásáig; a jogos érdekek védelmét szolgáló törvényes elévülési határidők lejártáig.",
        ],
      },
      {
        h: "8. A te jogaid",
        body: [
          "Jogod van a tájékoztatáshoz és hozzáféréshez, helyesbítéshez, törléshez (elfeledtetéshez), az adatkezelés korlátozásához, hordozhatósághoz, tiltakozáshoz, ahhoz, hogy ne legyél automatizált döntés alanya, és a hozzájárulás bármikori visszavonásához.",
          `Jogaidat a(z) ${OP_EMAIL} címen gyakorolhatod.`,
          "Jogod van panaszt tenni a román adatvédelmi hatóságnál (ANSPDCP), www.dataprotection.ro.",
        ],
      },
      {
        h: "9. Adatbiztonság",
        body: [
          "Technikai és szervezési intézkedéseket alkalmazunk: titkosítás, hozzáférés-vezérlés, munkatársak képzése, biztonsági auditok és incidenskezelés.",
        ],
      },
      {
        h: "10. Sütik",
        body: ["Sütiket használunk a weboldal működtetéséhez és az élmény javításához. Részletek a Süti szabályzatban."],
      },
      {
        h: "11. Változások",
        body: [
          "A szabályzatot időről időre frissíthetjük. Az érvényes verzió az ezen az oldalon közzétett, a fenti frissítési dátummal.",
        ],
      },
      {
        h: "12. Kapcsolat",
        body: [
          `E-mail: ${OP_EMAIL} · Tel: +40 757 333 184 · Székhely: Strada Dr. Iacob Felix nr. 49, Etaj S, Camera 9, Bukarest, 1. kerület, Románia.`,
        ],
      },
    ],
  },
  cookies: {
    title: "Süti szabályzat",
    updated: "2026.06.24",
    intro:
      "Ez a szabályzat ismerteti, hogyan használunk sütiket és helyi tárolási technológiákat a weboldalon.",
    sections: [
      {
        h: "1. Mik a sütik",
        body: [
          "A sütik és a helyi tárolás kis fájlok a böngésződben, amelyek beállításokat jegyeznek meg, vagy a weboldal megfelelő működését biztosítják.",
        ],
      },
      {
        h: "2. Mit használunk",
        body: [
          "Feltétlenül szükséges: a süti-választásodat helyben tároljuk (hogy ne jelenjen meg minden látogatáskor a sáv). Ez nem igényel hozzájárulást, és nem szolgál nyomon követésre.",
          "Jelenleg NEM használunk elemző, hirdetési vagy harmadik féltől származó nyomkövető sütiket. Ha bevezetünk ilyet, csak a hozzájárulásod után aktiváljuk.",
        ],
      },
      {
        h: "3. Hogyan szabályozhatod",
        body: [
          "Az első látogatáskor megjelenő sávban elfogadhatod vagy elutasíthatod. A helyi tárolást és a sütiket a böngésződ beállításaiból is törölheted.",
        ],
      },
      {
        h: "4. Változások",
        body: [
          "A szabályzatot frissíthetjük, ahogy technológiákat adunk hozzá vagy távolítunk el. Ellenőrizd a fenti frissítési dátumot.",
        ],
      },
    ],
  },
};

const content: Record<Locale, LegalContent> = { ro, en, hu };

export function getLegal(locale: Locale): LegalContent {
  return content[locale] ?? content.ro;
}
