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
    consentLabel: string; // text before the policy link
    consentPolicy: string; // the linked text
    consentRequired: string; // validation message
  };
  privacy: LegalDoc;
  cookies: LegalDoc;
}

// NOTE: placeholders in [SQUARE BRACKETS] must be filled with the company's real
// legal details before going live. This is a template, not legal advice — have it
// reviewed by a lawyer / DPO.
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
    updated: "[ZZ.LL.AAAA]",
    intro:
      "Această politică explică ce date cu caracter personal colectăm prin acest site, în ce scop, pe ce temei legal și ce drepturi ai conform Regulamentului (UE) 2016/679 (GDPR).",
    sections: [
      {
        h: "1. Operatorul de date",
        body: [
          "Operatorul datelor tale este [DENUMIRE FIRMĂ], cu sediul în [ADRESĂ COMPLETĂ], înregistrată la Registrul Comerțului cu nr. [J__/____/____], CUI [CUI].",
          "Pentru orice solicitare privind datele tale ne poți scrie la: [EMAIL DPO/CONTACT].",
        ],
      },
      {
        h: "2. Ce date colectăm",
        body: [
          "Prin formularul de contact: nume, adresă de email, număr de telefon (opțional), companie (opțional), serviciul de interes și conținutul mesajului.",
          "Date tehnice minime generate automat de infrastructura de găzduire (ex. adresa IP în jurnalele serverului), folosite strict pentru securitate și funcționarea site-ului.",
        ],
      },
      {
        h: "3. Scopuri și temei legal",
        body: [
          "Răspunsul la solicitarea ta și pregătirea unei oferte — temei: pași precontractuali la cererea ta (art. 6(1)(b) GDPR) și/sau consimțământul tău (art. 6(1)(a) GDPR).",
          "Securitatea și mentenanța site-ului — temei: interesul nostru legitim (art. 6(1)(f) GDPR).",
        ],
      },
      {
        h: "4. Cui divulgăm datele",
        body: [
          "Furnizorul de CRM [DENUMIRE FURNIZOR CRM], unde înregistrăm și gestionăm solicitarea, în calitate de persoană împuternicită.",
          "Furnizorul de email/SMTP prin care primim notificarea solicitării.",
          "Furnizorul de găzduire a site-ului (Vercel Inc.).",
          "Cu acești furnizori avem/încheiem acorduri de prelucrare a datelor (DPA). Nu vindem datele tale.",
        ],
      },
      {
        h: "5. Transferuri în afara UE/SEE",
        body: [
          "Unii furnizori pot prelucra date în afara SEE. În aceste cazuri ne asigurăm că există garanții adecvate (ex. Clauze Contractuale Standard ale Comisiei Europene).",
        ],
      },
      {
        h: "6. Cât timp păstrăm datele",
        body: [
          "Păstrăm datele din formular pe durata necesară soluționării solicitării și a relației comerciale, dar nu mai mult de [PERIOADĂ — ex. 24 de luni] de la ultimul contact, cu excepția cazului în care legea impune o perioadă mai lungă.",
        ],
      },
      {
        h: "7. Drepturile tale",
        body: [
          "Ai dreptul de acces, rectificare, ștergere, restricționare, portabilitate, opoziție și de a-ți retrage consimțământul în orice moment.",
          "Îți poți exercita drepturile scriindu-ne la [EMAIL DPO/CONTACT].",
          "Ai dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), www.dataprotection.ro.",
        ],
      },
      {
        h: "8. Securitate",
        body: [
          "Folosim conexiuni criptate (HTTPS) și măsuri tehnice și organizatorice rezonabile pentru a proteja datele împotriva accesului neautorizat.",
        ],
      },
      {
        h: "9. Cookie-uri",
        body: [
          "Detalii despre stocarea locală și cookie-urile folosite găsești în Politica de cookie-uri.",
        ],
      },
      {
        h: "10. Modificări",
        body: [
          "Putem actualiza această politică. Versiunea curentă este cea publicată pe această pagină, cu data ultimei actualizări de mai sus.",
        ],
      },
    ],
  },
  cookies: {
    title: "Politica de cookie-uri",
    updated: "[ZZ.LL.AAAA]",
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
    updated: "[DD.MM.YYYY]",
    intro:
      "This policy explains what personal data we collect through this website, for what purpose, on what legal basis, and what rights you have under Regulation (EU) 2016/679 (GDPR).",
    sections: [
      {
        h: "1. Data controller",
        body: [
          "The controller of your data is [COMPANY NAME], with its registered office at [FULL ADDRESS], registered with the Trade Register under no. [J__/____/____], VAT/Tax ID [VAT ID].",
          "For any request regarding your data, write to: [DPO/CONTACT EMAIL].",
        ],
      },
      {
        h: "2. What we collect",
        body: [
          "Through the contact form: name, email address, phone number (optional), company (optional), service of interest and the content of your message.",
          "Minimal technical data generated automatically by the hosting infrastructure (e.g. IP address in server logs), used strictly for security and operation of the site.",
        ],
      },
      {
        h: "3. Purposes and legal basis",
        body: [
          "Responding to your request and preparing a quote — basis: pre-contractual steps at your request (Art. 6(1)(b) GDPR) and/or your consent (Art. 6(1)(a) GDPR).",
          "Security and maintenance of the site — basis: our legitimate interest (Art. 6(1)(f) GDPR).",
        ],
      },
      {
        h: "4. Who we share data with",
        body: [
          "The CRM provider [CRM PROVIDER NAME], where we record and manage your request, acting as a processor.",
          "The email/SMTP provider through which we receive the request notification.",
          "The website hosting provider (Vercel Inc.).",
          "We have/sign data processing agreements (DPAs) with these providers. We do not sell your data.",
        ],
      },
      {
        h: "5. Transfers outside the EU/EEA",
        body: [
          "Some providers may process data outside the EEA. In such cases we ensure appropriate safeguards are in place (e.g. the European Commission's Standard Contractual Clauses).",
        ],
      },
      {
        h: "6. How long we keep data",
        body: [
          "We keep form data for as long as needed to handle your request and our business relationship, but no longer than [PERIOD — e.g. 24 months] from the last contact, unless the law requires a longer period.",
        ],
      },
      {
        h: "7. Your rights",
        body: [
          "You have the right of access, rectification, erasure, restriction, portability, objection, and to withdraw consent at any time.",
          "You can exercise your rights by writing to [DPO/CONTACT EMAIL].",
          "You have the right to lodge a complaint with the Romanian Data Protection Authority (ANSPDCP), www.dataprotection.ro.",
        ],
      },
      {
        h: "8. Security",
        body: [
          "We use encrypted connections (HTTPS) and reasonable technical and organizational measures to protect data against unauthorized access.",
        ],
      },
      {
        h: "9. Cookies",
        body: ["Details about local storage and cookies are in our Cookie Policy."],
      },
      {
        h: "10. Changes",
        body: [
          "We may update this policy. The current version is the one published on this page, with the last-updated date above.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    updated: "[DD.MM.YYYY]",
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
    updated: "[ÉÉÉÉ.HH.NN]",
    intro:
      "Ez a szabályzat ismerteti, milyen személyes adatokat gyűjtünk a weboldalon keresztül, milyen célból, milyen jogalapon, és milyen jogaid vannak az (EU) 2016/679 rendelet (GDPR) szerint.",
    sections: [
      {
        h: "1. Adatkezelő",
        body: [
          "Adataid kezelője a(z) [CÉGNÉV], székhelye: [TELJES CÍM], cégjegyzékszám: [J__/____/____], adószám: [ADÓSZÁM].",
          "Adataiddal kapcsolatos bármilyen kérés esetén írj a következő címre: [DPO/KAPCSOLAT E-MAIL].",
        ],
      },
      {
        h: "2. Milyen adatokat gyűjtünk",
        body: [
          "A kapcsolatfelvételi űrlapon keresztül: név, e-mail cím, telefonszám (opcionális), cég (opcionális), az érdeklődési szolgáltatás és az üzenet tartalma.",
          "A tárhely-infrastruktúra által automatikusan generált minimális technikai adatok (pl. IP-cím a szervernaplókban), kizárólag biztonsági és működési célból.",
        ],
      },
      {
        h: "3. Célok és jogalap",
        body: [
          "A kérésed megválaszolása és ajánlat készítése — jogalap: kérésedre tett szerződéskötést megelőző lépések (GDPR 6. cikk (1) b)) és/vagy a hozzájárulásod (GDPR 6. cikk (1) a)).",
          "A weboldal biztonsága és karbantartása — jogalap: jogos érdekünk (GDPR 6. cikk (1) f)).",
        ],
      },
      {
        h: "4. Kivel osztjuk meg az adatokat",
        body: [
          "A [CRM SZOLGÁLTATÓ NEVE] CRM-szolgáltatóval, ahol a kérést rögzítjük és kezeljük, adatfeldolgozóként.",
          "Az e-mail/SMTP szolgáltatóval, amelyen keresztül megkapjuk az értesítést.",
          "A weboldal tárhelyszolgáltatójával (Vercel Inc.).",
          "E szolgáltatókkal adatfeldolgozási megállapodást (DPA) kötünk. Adataidat nem értékesítjük.",
        ],
      },
      {
        h: "5. Adattovábbítás az EU/EGT-n kívülre",
        body: [
          "Egyes szolgáltatók az EGT-n kívül is kezelhetnek adatokat. Ilyenkor megfelelő garanciákról gondoskodunk (pl. az Európai Bizottság általános szerződési feltételei).",
        ],
      },
      {
        h: "6. Meddig őrizzük az adatokat",
        body: [
          "Az űrlapadatokat a kérés és az üzleti kapcsolat kezeléséhez szükséges ideig őrizzük, de legfeljebb [IDŐSZAK — pl. 24 hónap] az utolsó kapcsolatfelvételtől, kivéve, ha a jogszabály hosszabb időt ír elő.",
        ],
      },
      {
        h: "7. A te jogaid",
        body: [
          "Jogod van a hozzáféréshez, helyesbítéshez, törléshez, korlátozáshoz, hordozhatósághoz, tiltakozáshoz, és a hozzájárulás bármikori visszavonásához.",
          "Jogaidat a [DPO/KAPCSOLAT E-MAIL] címen gyakorolhatod.",
          "Jogod van panaszt tenni a román adatvédelmi hatóságnál (ANSPDCP), www.dataprotection.ro.",
        ],
      },
      {
        h: "8. Biztonság",
        body: [
          "Titkosított kapcsolatot (HTTPS) és észszerű technikai és szervezési intézkedéseket alkalmazunk az adatok védelmére a jogosulatlan hozzáférés ellen.",
        ],
      },
      {
        h: "9. Sütik",
        body: ["A helyi tárolásról és a sütikről a Süti szabályzatban olvashatsz."],
      },
      {
        h: "10. Változások",
        body: [
          "A szabályzatot frissíthetjük. Az érvényes verzió az ezen az oldalon közzétett, a fenti frissítési dátummal.",
        ],
      },
    ],
  },
  cookies: {
    title: "Süti szabályzat",
    updated: "[ÉÉÉÉ.HH.NN]",
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
