document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    // … (full array as before) …
  ];

  const gridEl   = document.getElementById("project-grid");
  const modal    = document.getElementById("project-modal");
  const modalBody= document.getElementById("modal-body");
  const closeBtn = document.querySelector(".modal-close");

  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `<h3>${p.title}</h3>`;
    card.addEventListener("click", () => {
      modalBody.innerHTML = `
        <h2>${p.title}</h2>
        <p><strong>Client:</strong> ${p.client}</p>
        <p><strong>Specification/Size:</strong> ${p.spec}</p>
        <p><strong>Delivery:</strong> ${p.delivery}</p>
      `;
      modal.style.display = "flex";
    });
    gridEl.appendChild(card);
  });

  closeBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    { country: "UAE",        client: "TAKREER",                                 title: "Ruwais Refinery Expansion PKG #3",           spec: `A671 Gr.CC65 (CL22/32) 20"–56"; 58"–120"`, delivery: "May 2011 – Mar 2012" },
    { country: "UAE",        client: "ADGAS",                                  title: "IGD DAS Island Pipeline",                     spec: `EN 10225 S355 (G3~G8+N/M) 20"–30"`,         delivery: "May 2012 – Jun 2012" },
    { country: "UAE",        client: "ENOC",                                   title: "Falcon Bulk Terminal Jet Fuel Pipeline",      spec: `API 5L Gr.B (PSL2) 24"–36"`,                delivery: "May 2012" },
    { country: "Oman",       client: "OXY",                                    title: "Mukhaizana PKG #2 Offshore Pipeline",         spec: `API 5L Gr.B (PSL1) 24"–34"`,                delivery: "Jun 2012 – Dec 2012" },
    { country: "KSA",        client: "SEC",                                    title: "Qurayyah Combined Cycle Gas-fired IPP",      spec: `API 2B / ASTM A672 CC70 30", 40"`,          delivery: "Aug 2012" },
    { country: "Iraq",       client: "SOC",                                    title: "Water Treatment Pipeline",                   spec: `API 5L Gr.B (PSL1) 18"–40"`,                delivery: "Oct 2012" },
    { country: "KSA",        client: "Royal Commission",                       title: "Expansion of Fuel & Feedstock Pipeline",      spec: `API 5L Gr.X60 (PSL2) 24"`,                  delivery: "Jan 2013" },
    { country: "KSA",        client: "ARAMCO (McDermott)",                     title: "Offshore Safaniya Oil Field Phase II",        spec: `API 2B (2H 50) 24"`,                        delivery: "Apr 2013" },
    { country: "Iraq",       client: "BP",                                     title: "Rumaila Oil Field Expansion",                spec: `API 5L Gr.B (PSL2) 36"`,                    delivery: "May 2013" },
    { country: "Kuwait",     client: "KOC",                                    title: "Wara Pressure Maintenance",                  spec: `API 5L Gr.B (PSL1) 22"–42"`,                delivery: "Jun 2013" },
    { country: "UAE",        client: "TAKREER",                                 title: "Carbon Black & Delayed Coker",                spec: `A671 Gr.CC65 (CL22/32) 20"–120" (Sour)`,    delivery: "May 2013 –" },
    { country: "Iraq",       client: "SOC/PETRONAS",                           title: "Garraf Oil Field Final Development",          spec: `A671 Gr.CC65 CL22 / API 5L Gr.B (PSL1) 18"–40"`, delivery: "Jul 2013" },
    { country: "KSA",        client: "SEC",                                    title: "Qurayyah Combined IPP (2nd)",                spec: `ASTM A134 78", 108"`,                      delivery: "Jul 2013" },
    { country: "Nigeria",    client: "TOTAL",                                  title: "OML 58 Gas Pipeline",                        spec: `A671 Gr.CC65 CL22 30", 48"`,               delivery: "Oct 2013" },
    { country: "Iraq",       client: "SOC",                                    title: "Zubair Oil Field",                           spec: `A671 Gr.CC65 CL22 (Sour) 32"`,              delivery: "Oct 2013" },
    { country: "Qatar",      client: "QEWC",                                   title: "Ras Abu Fontas Desalination Plant",          spec: `API 5L Gr.B (PSL1) 22", 32"`,               delivery: "Oct 2013" },
    { country: "UAE",        client: "Dubai Municipal",                        title: "Business Bay #1 & #2 Cooling Plants",         spec: `API 5L Gr.B (PSL1) 28"–64"`,                delivery: "Nov 2013 – Jan 2014" },
    { country: "India",      client: "ONGC",                                   title: "C-Series Offshore",                          spec: `API 2B (2H 50Z, DH36) 20"–66"`,             delivery: "Dec 2013" },
    { country: "UAE",        client: "Dubai Petroleum",                         title: "Jalilah B Offshore Field Development",        spec: `API 2B (2H Gr.50) 20"–46"`,                delivery: "Apr 2014" },
    { country: "UAE",        client: "ADWEA/AADC",                              title: "Construction of New Bulk Connection",        spec: `API 5L Gr.B (PSL2) 24", 32"`,               delivery: "Jun 2014" },
    { country: "Iraq",       client: "Oil Pipeline Company",                    title: "Tank Farm",                                  spec: `API 5L Gr.X60/B (PSL2) (Sour) 28"–36"`,     delivery: "Jun 2014 – Jul 2014" },
    { country: "Qatar",      client: "Government",                              title: "Khalifa Stadium Expansion",                  spec: `EN 10219-1 18"–44"`,                        delivery: "Jan 2015" },
    { country: "UAE",        client: "RTA",                                     title: "Nas Arena Stadium",                          spec: `EN 10210 20"–32"`,                          delivery: "Feb 2015" },
    { country: "UAE",        client: "Dubai Petroleum",                         title: "Rashid C Offshore Platform",                 spec: `API 2B (2H-50) 36"`,                        delivery: "Feb 2015" },
    { country: "Turkmenistan", client: "Government",                           title: "Gas Pipeline",                               spec: `API 5L Gr.B (PSL2) 30"`,                    delivery: "Mar 2015" },
    { country: "KSA",        client: "Chevron Wafra",                           title: "Wafra Field Pipeline",                       spec: `API 5L Gr.B (PSL1) 26"`,                    delivery: "Apr 2015" },
    { country: "UAE",        client: "Port of Fujairah",                       title: "VTTI Terminal",                              spec: `API 5L Gr.B (PSL1) 20"–38"`,                delivery: "May 2015" },
    { country: "UAE",        client: "Port of Fujairah",                       title: "VLCC Jetty",                                 spec: `API 5L Gr.B (PSL2) 24"–40"`,                delivery: "May 2015" },
    { country: "Iraq",       client: "SOC",                                    title: "Rehabilitation of Iraq South Gas",           spec: `API 5L Gr.B (PSL1) 30"–36"`,                delivery: "Jun 2015" },
    { country: "Qatar",      client: "ISF",                                     title: "Development of ISF Camp",                    spec: `API 5L Gr.B (PSL1) 20"–36"`,                delivery: "Jul 2015" },
    { country: "KSA",        client: "Air Products Jazan IGCC",                title: "Jazan IGCC Pipeline",                        spec: `API 5L Gr.B (PSL1) / A671 Gr.CC60 (CL22) 18"–120"`, delivery: "Oct 2016" },
    { country: "U.K.",       client: "Scottish Power",                          title: "East Anglia ONE (Offshore Wind)",            spec: `BS EN 10225/10025 32"–64"`,                 delivery: "May 2017" },
    { country: "UAE",        client: "Investment Corp. of Dubai (ICD)",       title: "ICD Tower Project",                          spec: `BS EN 10210-1 S355J2H 20"–46"`,             delivery: "Jun 2017" },
    { country: "UAE",        client: "EMAAR",                                   title: "Dubai Hills Pipeline",                       spec: `API 5L Gr.B (PSL1) 32"–48"`,                delivery: "Sep 2017" },
    { country: "UAE",        client: "EMAAR",                                   title: "Dubai Creek Harbour Pipeline",               spec: `API 5L Gr.B (PSL1) 18"–56"`,                delivery: "Oct 2017" },
    { country: "KSA",        client: "KAFD",                                    title: "KAFD Infrastructure",                        spec: `EN10210-1 26"`,                            delivery: "Dec 2017" },
    { country: "UAE",        client: "ADNOC Euro Mechanical",                   title: "Euro Mechanical Pipeline",                   spec: `A671 CC65 CL22 30"–48"`,                   delivery: "Jun 2018" },
    { country: "Kazakhstan", client: "InoxTech",                                title: "KPC Gas Pipeline",                           spec: `A671 CC60 CL22 20"–24"`,                   delivery: "Sep 2018" },
    { country: "UAE",        client: "ADNOC",                                   title: "Bu Haseer Field Development",                spec: `API 2B 18"–54"`,                          delivery: "Oct 2018" },
    { country: "KSA",        client: "SEC",                                    title: "SEC Processing Plant",                       spec: `A671 CC65 CL22 18"–36"`,                   delivery: "Nov 2018" },
    { country: "UAE",        client: "ADNOC",                                   title: "BIFP Project Pipeline",                      spec: `A672 C65 CL22 28"–42"`,                   delivery: "Jul 2019" },
    { country: "UAE",        client: "ADNOC Euro Mechanical",                   title: "Euro Mechanical 2nd Batch",                  spec: `A671 CC65 CL22 30"–48"`,                   delivery: "Jun 2018" },
    { country: "UAE",        client: "ADNOC",                                   title: "CFP Pipeline",                               spec: `A671 CC65 (CL-22/32) 32"–64"`,             delivery: "Jan 2019" },
    { country: "U.K.",       client: "MOWEL",                                   title: "Moray Firth Offshore Wind",                  spec: `EN10225/EN10025 22"–65"`,                 delivery: "Jun 2019 – Mar 2020" },
    { country: "U.K.",       client: "Seaway 7",                                title: "Seagreen Offshore Wind",                     spec: `EN10225/EN10025 770 – 1620 mm`,           delivery: "Aug 2020 – May 2021" },
    { country: "UAE",        client: "ADNOC M",                                  title: "ADNOC M Pipeline",                           spec: `A671 CC65 / A672 C65 CL32 26"–48"`,        delivery: "Aug 2021" },
    { country: "UAE",        client: "BOROUGE",                                title: "CCW PP Upgrade B3 Plant",                   spec: `A671 CC65 CL32 / API 5L Gr.B PSL1 20"–108"`, delivery: "Aug 2021" },
    { country: "UAE",        client: "ADNOC MOL",                               title: "MOL 1.2 & 3.5 Piping Bulk A",                spec: `A671 CC65 CL22 / A672 C65 CL22 30"–48"`,   delivery: "Nov 2021" },
    { country: "UAE",        client: "ADNOC",                                   title: "Belbazem Development",                       spec: `API 2B 20"–1,287 mm`,                     delivery: "Dec 2021" },
    { country: "UAE",        client: "FOT",                                     title: "Fujairah Oil Terminal",                      spec: `API 5L Gr.BM (PSL2) 24"–48"`,              delivery: "Feb 2022" },
    { country: "Iraq",       client: "MARUBENI",                               title: "Iraq OCTG Project",                          spec: `API 5L GR.X52 (PSL1) 30"`,                 delivery: "Jul 2022" },
    { country: "KSA",        client: "SWCC",                                   title: "Jubail – Eastern Province Water Transmission", spec: `API 5L X42M (PSL2) 100"`,                  delivery: "Aug 2022" },
    { country: "Türkiye",    client: "Steel Trade Kuzey Marmara",             title: "Kuzey Marmara Offshore Pipeline",            spec: `A671 CC5 CL32 18"–24"`,                   delivery: "Sep 2022" },
    { country: "Bahrain",    client: "Perma Pipe BBUP",                        title: "BBUP Pipeline Project",                      spec: `API 5L Gr.B (PSL1) 24"–40"`,                delivery: "Nov 2022" },
    { country: "Oman",       client: "OQ",                                     title: "Rich & Lean Gas Segregation",                spec: `A671 CC65 CL22 30"–36"`,                   delivery: "Nov 2022" },
    { country: "UAE",        client: "ADNOC",                                   title: "Dalma Development",                          spec: `API 2B 24"–60"`,                          delivery: "Nov 2022" },
    { country: "UAE",        client: "ADNOC",                                   title: "Umm Shaif Field",                            spec: `API 2B 26"–56"`,                          delivery: "Dec 2022" },
    { country: "Egypt",      client: "MRC Global",                             title: "494-AHN-2022 Egypt Project",                  spec: `API 2B 590 – 1 500 mm`,                   delivery: "Jan 2023" },
    { country: "India",      client: "GCPL",                                   title: "Permanent Piles of GCPL",                    spec: `API 2B 1 500 mm`,                         delivery: "Jan 2023" },
    { country: "KSA",        client: "SWCC",                                   title: "Abdullah Ibrahim Al Zamil",                  spec: `API 5L Gr.B (PSL1) 32"–60"`,               delivery: "Apr 2023" },
    { country: "Venezuela",  client: "PETSA",                                  title: "PETSA Processing Plant",                     spec: `API 5L Gr.B (PSL1) / A671 CC65 CL13 & 23 18"–48"`, delivery: "May 2023" },
    { country: "UAE",        client: "ADNOC NMGL",                              title: "NMGL Pipeline",                              spec: `API 2B 20"–60"`,                          delivery: "Aug 2023" },
    { country: "Oman",       client: "PDO",                                    title: "PDO Main Project",                          spec: `ASTM A671 / A672 CC65 CL22 28"–32"`,       delivery: "Sep 2023" },
    { country: "KSA",        client: "ARANER",                                 title: "Araner DCP",                                 spec: `API 5L Gr.B (PSL1) 44"–52"`,               delivery: "Dec 2023" },
    { country: "Iraq",       client: "SOC",                                    title: "West Qurna Development",                     spec: `API 2B 24"–60"`,                          delivery: "Mar 2024" },
    { country: "UAE",        client: "ADNOC",                                   title: "Hail & Ghasha Subsea",                       spec: `API 2B 20"–60"`,                          delivery: "Sep 2024" },
    { country: "UAE",        client: "ADNOC",                                   title: "WEP Pipeline",                               spec: `API 5L Gr.X65MS (PSL2) 48"`,               delivery: "Nov 2024" },
    { country: "UAE",        client: "ADNOC",                                   title: "MOL Expansion",                              spec: `API 5L Gr.X60MS (PSL2) 36"`,               delivery: "Jul 2025" }
  ];

  const gridEl    = document.getElementById("project-grid");
  const modal     = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn  = document.querySelector(".modal-close");

  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `<h3>${p.title}</h3>`;
    card.addEventListener("click", () => {
      modalBody.innerHTML = `
        <h2>${p.title}</h2>
        <p><strong>Country:</strong> ${p.country}</p>
        <p><strong>Client:</strong> ${p.client}</p>
        <p><strong>Specification/Size:</strong> ${p.spec}</p>
        <p><strong>Delivery:</strong> ${p.delivery}</p>
      `;
      modal.style.display = "flex";
    });
    gridEl.appendChild(card);
  });

  closeBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
});
