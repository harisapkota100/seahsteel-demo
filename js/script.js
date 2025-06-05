function searchSite(event) {
  event.preventDefault();
  const keyword = document.getElementById('searchInput').value.toLowerCase();

  const pages = [
    { title: 'About', url: 'about.html', keywords: ['about', 'history', 'company'] },
    { title: 'Products', url: 'products.html', keywords: ['pipe', 'steel', 'ssaw', 'lsaw'] },
    { title: 'Projects', url: 'projects.html', keywords: ['project', 'clients', 'portfolio'] },
    { title: 'Quality', url: 'quality.html', keywords: ['quality', 'certification', 'inspection'] },
    { title: 'CEO Message', url: 'ceo.html', function searchSite(event) {
  event.preventDefault();
  const keyword = document.getElementById('searchInput').value.toLowerCase();

  const pages = [
    { title: 'About', url: 'about.html', keywords: ['about', 'history', 'company'] },
    { title: 'Products', url: 'products.html', keywords: ['pipe', 'steel', 'ssaw', 'lsaw'] },
    { title: 'Projects', url: 'projects.html', keywords: ['project', 'clients', 'portfolio'] },
    { title: 'Quality', url: 'quality.html', keywords: ['quality', 'certification', 'inspection'] },
    { title: 'CEO Message', url: 'ceo.html', keywords: ['ceo', 'leadership', 'vision'] },
    { title: 'News', url: 'news.html', keywords: ['news', 'events', 'updates'] },
    { title: 'Contact', url: 'contact.html', keywords: ['contact', 'location', 'email'] },
    { title: 'Request Quote', url: 'quote.html', keywords: ['quote', 'request', 'price'] }
  ];

  const match = pages.find(p => p.keywords.some(k => keyword.includes(k)));

  if (match) {
    window.location.href = match.url;
  } else {
    alert('No matching content found.');
  }
}

// 🌍 Global SeAH Map
function initGlobalMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: 20, lng: 0 },
    mapTypeId: "hybrid",
    gestureHandling: "greedy"
  });

  const locations = [
    { lat: 37.5495, lng: 126.9100, name: "SeAH HQ - Korea", url: "https://www.seah.co.kr/" },
    { lat: 35.9912, lng: 129.3758, name: "SeAH Pohang Plant", url: "https://www.seah.co.kr/" },
    { lat: 35.2190, lng: 128.6811, name: "ESAB SeAH", url: "https://eng.esab.co.kr/" },
    { lat: 33.6846, lng: -117.8531, name: "SeAH America", url: "https://seah.global/" },
    { lat: 29.7858, lng: -95.6076, name: "SeAH Global Houston", url: "https://seah.global/" },
    { lat: 54.5865, lng: -1.2264, name: "SeAH Wind UK", url: "https://seahwind.co.uk/" },
    { lat: 10.9639, lng: 106.8220, name: "SeAH Vina", url: "https://seahvina.en.ec21.com/" },
    { lat: 25.8007, lng: 55.9762, name: "SeAH UAE", url: "https://seahuae.com/" },
    { lat: 45.0833, lng: 11.6000, name: "Inox Tech Italy", url: "https://www.inoxtech.com/" },
    { lat: 35.6528, lng: 139.8395, name: "SeAH Japan", url: "https://seah.global/" },
    { lat: 31.3041, lng: 120.5853, name: "Suzhou SeAH", url: "https://seah.global/" },
    { lat: 23.0268, lng: 113.1315, name: "Foshan SeAH", url: "https://seah.global/" },
    { lat: 37.4000, lng: 121.2000, name: "Yantai ESAB SeAH", url: "https://seah.global/" },
    { lat: 13.3611, lng: 101.0000, name: "SeAH Thailand", url: "https://seah.global/" },
    { lat: 28.5565, lng: 77.4113, name: "SeAH India Noida", url: "https://seah.global/" },
    { lat: 12.9670, lng: 79.9500, name: "SeAH India Chennai", url: "https://seah.global/" },
    { lat: -6.3000, lng: 107.1500, name: "SeAH Indonesia", url: "https://seah.global/" },
    { lat: 20.7000, lng: -100.4000, name: "SeAH Mexico", url: "https://seah.global/" }
  ];

  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map,
      title: loc.name,
      label: {
        text: loc.name,
        color: "#ff8800",
        fontWeight: "bold",
        fontSize: "12px"
      }
    });
    marker.addListener("click", () => window.open(loc.url, "_blank"));
  });
}

// 🇦🇪 UAE Only Map
function initUaeMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 25.276987, lng: 55.296249 },
    mapTypeId: "roadmap"
  });

  const locations = [
    {
      lat: 25.005014, lng: 55.062885,
      name: "Sales Office - Jebel Ali, Dubai",
      url: "https://seahuae.com/"
    },
    {
      lat: 25.791559, lng: 55.946028,
      name: "Head Office - Ras Al Khaimah",
      url: "https://seahuae.com/"
    }
  ];

  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map,
      title: loc.name,
      label: {
        text: loc.name,
        color: "#C8102E",
        fontWeight: "bold",
        fontSize: "12px"
      }
    });
    marker.addListener("click", () => window.open(loc.url, "_blank"));
  });
}
// Handle opening the application modal when "Apply Now" is clicked
document.addEventListener("DOMContentLoaded", function () {
  const applyButtons = document.querySelectorAll(".apply-btn");
  const modal = document.getElementById("applicationModal");
  const modalJobTitle = document.getElementById("modalJobTitle");
  const jobTitleInput = document.getElementById("jobTitleInput");
  const closeBtn = document.querySelector(".modal-close");

  applyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const jobTitle = button.getAttribute("data-job");
      modal.classList.add("open");
      modalJobTitle.textContent = jobTitle;
      jobTitleInput.value = jobTitle;
    });
  });

  // Close modal on "×" click
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  // Close modal on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });
});
// Enable image lightbox on click
function enlargeImage(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgElement.src;
  lightbox.style.display = 'flex';

  // Reset zoom and transform
  zoomLevel = 1;
  offsetX = 0;
  offsetY = 0;
  lightboxImg.style.transform = `scale(${zoomLevel}) translate(0px, 0px)`;
}

// Initialize zoom and pan variables
let zoomLevel = 1;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let startX, startY;

// Zoom on mouse wheel
document.getElementById('lightbox-img').addEventListener('wheel', function (e) {
  e.preventDefault();
  const scaleStep = 0.1;

  if (e.deltaY < 0) {
    zoomLevel += scaleStep; // zoom in
  } else {
    zoomLevel = Math.max(1, zoomLevel - scaleStep); // zoom out
    if (zoomLevel === 1) {
      offsetX = 0;
      offsetY = 0;
    }
  }

  updateTransform();
});

// Mouse drag to pan
const lightboxImg = document.getElementById('lightbox-img');

lightboxImg.addEventListener('mousedown', function (e) {
  if (zoomLevel <= 1) return;
  isDragging = true;
  startX = e.clientX - offsetX;
  startY = e.clientY - offsetY;
  lightboxImg.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', function () {
  isDragging = false;
  lightboxImg.style.cursor = 'zoom-in';
});

window.addEventListener('mousemove', function (e) {
  if (!isDragging) return;
  offsetX = e.clientX - startX;
  offsetY = e.clientY - startY;
  updateTransform();
});

function updateTransform() {
  lightboxImg.style.transform = `scale(${zoomLevel}) translate(${offsetX}px, ${offsetY}px)`;
}
const machineDetails = {
  'jco-edgemilling': {
    title: 'Edge Milling (JCO Line)',
    body: `
      <ul>
        <li>Bevel edge preparation using rotating heads</li>
        <li>Root face: 3–5 mm; Angles: 27°/32°</li>
        <li><strong>Key Equipment:</strong><br>
        - Double head<br>- 6–12.8m, 1,200–5,300mm, Max 60mm<br>- SEOKWANG (Korea)</li>
      </ul>`
  },
  'jco-jcopress': {
    title: 'JCO Press',
    body: `
      <ul>
        <li>CNC-controlled J-C-O step forming</li>
        <li>Air-bent hydraulic press system</li>
        <li><strong>Key Equipment:</strong><br>
        - 65,000KN capacity<br>- OD 18"–64", Max thickness 60mm<br>- YSD (China)</li>
      </ul>`
  },
  'jco-tackwelding': {
    title: 'Tack Welding',
    body: `
      <ul>
        <li>GMAW welding using CO₂/Argon with 5-roll guide</li>
        <li><strong>Key Equipment:</strong><br>- 25 Ton<br>- DC Max 45V / AC Max 500A<br>- SEOKWANG (Korea)</li>
      </ul>`
  },
  'jco-insidewelding': {
    title: 'Inside Welding',
    body: `
      <ul>
        <li>SAW with DC & AC wires and laser seam tracking</li>
        <li><strong>Key Equipment:</strong><br>- 1650A DC ×2, 1250A AC ×2<br>- ESAB (Korea)</li>
      </ul>`
  },
  'jco-outsidewelding': {
    title: 'Outside Welding',
    body: `
      <ul>
        <li>External SAW, same system as inside weld</li>
        <li><strong>Key Equipment:</strong><br>- Matches inside welding specs<br>- ESAB (Korea)</li>
      </ul>`
  },
  'jco-xray': {
    title: 'X-ray (Intermediate/Final)',
    body: `
      <ul>
        <li>Real-time X-ray for L and G seams</li>
        <li><strong>Key Equipment:</strong><br>- 325Kvp, 45A<br>- Digital system</li>
      </ul>`
  },
  'jco-Expander': {
    title: 'Calibration / Cold Expanding',
    body: `
      <ul>
        <li>Diameter calibration and cold expansion</li>
        <li><strong>Key Equipment:</strong><br>- OD: 18"–56", Max thickness 60mm<br>- Fontijine Grotness</li>
      </ul>`
  },
  'jco-hydro': {
    title: 'Hydro Testing',
    body: `
      <ul>
        <li>High-pressure water seal test</li>
        <li><strong>Key Equipment:</strong><br>- Max 60 MPa<br>- OD: Max 64"<br>- TSD (China)</li>
      </ul>`
  },
  'jco-UT': {
    title: 'Auto UT',
    body: `
      <ul>
        <li>Pulse-echo ultrasonic weld testing</li>
        <li><strong>Key Equipment:</strong><br>- Speed: 50–60 m/min<br>- GEIT</li>
      </ul>`
  },
  'jco-furnace': {
    title: 'Heat Treatment',
    body: `
      <ul>
        <li>Stress relief gas furnace</li>
        <li><strong>Key Equipment:</strong><br>- Max Temp: 970°C<br>- DONGSUNG (Korea)</li>
      </ul>`
  },
  'jco-inspection': {
    title: 'Final Inspection',
    body: `
      <ul>
        <li>Dimensional, roundness, and QA marking</li>
        <li><strong>Key Equipment:</strong><br>- Visual and digital measuring tools</li>
      </ul>`
  },
  'rb-gascutting': {
    title: 'Plate Gas Cutting',
    body: `
      <ul>
        <li>O₂ + LPG cutting with beveling</li>
        <li><strong>Key Equipment:</strong><br>- 15 Ton, Max 50mm<br>- SeShine (Korea)</li>
      </ul>`
  },
  'rb-rollbending': {
    title: '3 Roll Bending',
    body: `
      <ul>
        <li>Forming pipe using top and bottom rolls</li>
        <li><strong>Key Equipment:</strong><br>- OD: 40"–120", Max 50mm<br>- SEOKWANG (Korea)</li>
      </ul>`
  },
  'rb-tackwelding': {
    title: 'Tack Welding (Roll Bender)',
    body: `
      <ul>
        <li>Manual GMAW process</li>
        <li><strong>Key Equipment:</strong><br>- Handheld GMAW<br>- Seam holding only</li>
      </ul>`
  },
  'rb-123longitudionalwelding': {
    title: '12M Longitudinal Welding (Inside)',
    body: `
      <ul>
        <li>SAW welding with laser tracking</li>
        <li><strong>Key Equipment:</strong><br>- DC 1600A / AC 1500A<br>- ESAB (Korea)</li>
      </ul>`
  },
  'rb-12mlongitudionalweldingo': {
    title: '12M Longitudinal Welding (Outside)',
    body: `
      <ul>
        <li>Same as inside longitudinal weld</li>
        <li><strong>Key Equipment:</strong><br>- Matches inside weld<br>- ESAB (Korea)</li>
      </ul>`
  },
  'rb-fittingup': {
    title: 'Fitting Up',
    body: `
      <ul>
        <li>Alignment for girth welds</li>
        <li><strong>Key Equipment:</strong><br>- 30 Ton turning roll<br>- Adjustable width</li>
      </ul>`
  },
  'rb-girthwelding': {
    title: '12M Girth Welding (Inside)',
    body: `
      <ul>
        <li>SAW welding on girth seam (inside)</li>
        <li><strong>Key Equipment:</strong><br>- Same as SAW<br>- ESAB</li>
      </ul>`
  },
  'rb-girthweldingo': {
    title: '12M Girth Welding (Outside)',
    body: `
      <ul>
        <li>SAW welding on girth seam (outside)</li>
        <li><strong>Key Equipment:</strong><br>- Same as inside<br>- ESAB</li>
      </ul>`
  },
  'rb-120inhydro': {
    title: '120" Hydro Testing',
    body: `
      <ul>
        <li>Water pressure test using rubber sealing</li>
        <li><strong>Key Equipment:</strong><br>- Max 250 bar<br>- OD: Max 120"<br>- SEOKWANG (Korea)</li>
      </ul>`
  },
  'rb-xray': {
    title: 'X-ray Test',
    body: `
      <ul>
        <li>Final seam check with digital system</li>
        <li><strong>Key Equipment:</strong><br>- 325Kvp, real-time<br>- GEIT</li>
      </ul>`
  },
  'rb-furnacerb': {
    title: 'Heat Treatment',
    body: `
      <ul>
        <li>Stress relief gas furnace for RB line</li>
        <li><strong>Key Equipment:</strong><br>- Max Temp: 970°C<br>- DONGSUNG (Korea)</li>
      </ul>`
  },
  'rb-inspectionrb': {
    title: 'Final Inspection (Roll Bender)',
    body: `
      <ul>
        <li>QA check of size, roundness, and weld quality</li>
        <li><strong>Key Equipment:</strong><br>- Dimensional tools<br>- Visual QA systems</li>
      </ul>`
  }
};

function openMachineModal(id) {
  const data = machineDetails[id];
  if (data) {
    const modal = document.getElementById("machineModal");
    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-body").innerHTML = data.body;
    modal.classList.add("open");

    // Optional: close modal when clicking outside content
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeMachineModal();
      }
    });
  }
}

function closeMachineModal() {
  document.getElementById("machineModal").classList.remove("open");
}['ceo', 'leadership', 'vision'] },
    { title: 'News', url: 'news.html', keywords: ['news', 'events', 'updates'] },
    { title: 'Contact', url: 'contact.html', keywords: ['contact', 'location', 'email'] },
    { title: 'Request Quote', url: 'quote.html', keywords: ['quote', 'request', 'price'] }
  ];

  const match = pages.find(p => p.keywords.some(k => keyword.includes(k)));

  if (match) {
    window.location.href = match.url;
  } else {
    alert('No matching content found.');
  }
}

// 🌍 Global SeAH Map
function initGlobalMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: 20, lng: 0 },
    mapTypeId: "hybrid",
    gestureHandling: "greedy"
  });

  const locations = [
    { lat: 37.5495, lng: 126.9100, name: "SeAH HQ - Korea", url: "https://www.seah.co.kr/" },
    { lat: 35.9912, lng: 129.3758, name: "SeAH Pohang Plant", url: "https://www.seah.co.kr/" },
    { lat: 35.2190, lng: 128.6811, name: "ESAB SeAH", url: "https://eng.esab.co.kr/" },
    { lat: 33.6846, lng: -117.8531, name: "SeAH America", url: "https://seah.global/" },
    { lat: 29.7858, lng: -95.6076, name: "SeAH Global Houston", url: "https://seah.global/" },
    { lat: 54.5865, lng: -1.2264, name: "SeAH Wind UK", url: "https://seahwind.co.uk/" },
    { lat: 10.9639, lng: 106.8220, name: "SeAH Vina", url: "https://seahvina.en.ec21.com/" },
    { lat: 25.8007, lng: 55.9762, name: "SeAH UAE", url: "https://seahuae.com/" },
    { lat: 45.0833, lng: 11.6000, name: "Inox Tech Italy", url: "https://www.inoxtech.com/" },
    { lat: 35.6528, lng: 139.8395, name: "SeAH Japan", url: "https://seah.global/" },
    { lat: 31.3041, lng: 120.5853, name: "Suzhou SeAH", url: "https://seah.global/" },
    { lat: 23.0268, lng: 113.1315, name: "Foshan SeAH", url: "https://seah.global/" },
    { lat: 37.4000, lng: 121.2000, name: "Yantai ESAB SeAH", url: "https://seah.global/" },
    { lat: 13.3611, lng: 101.0000, name: "SeAH Thailand", url: "https://seah.global/" },
    { lat: 28.5565, lng: 77.4113, name: "SeAH India Noida", url: "https://seah.global/" },
    { lat: 12.9670, lng: 79.9500, name: "SeAH India Chennai", url: "https://seah.global/" },
    { lat: -6.3000, lng: 107.1500, name: "SeAH Indonesia", url: "https://seah.global/" },
    { lat: 20.7000, lng: -100.4000, name: "SeAH Mexico", url: "https://seah.global/" }
  ];

  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map,
      title: loc.name,
      label: {
        text: loc.name,
        color: "#ff8800",
        fontWeight: "bold",
        fontSize: "12px"
      }
    });
    marker.addListener("click", () => window.open(loc.url, "_blank"));
  });
}

// 🇦🇪 UAE Only Map
function initUaeMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 25.276987, lng: 55.296249 },
    mapTypeId: "roadmap"
  });

  const locations = [
    {
      lat: 25.005014, lng: 55.062885,
      name: "Sales Office - Jebel Ali, Dubai",
      url: "https://seahuae.com/"
    },
    {
      lat: 25.791559, lng: 55.946028,
      name: "Head Office - Ras Al Khaimah",
      url: "https://seahuae.com/"
    }
  ];

  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map,
      title: loc.name,
      label: {
        text: loc.name,
        color: "#C8102E",
        fontWeight: "bold",
        fontSize: "12px"
      }
    });
    marker.addListener("click", () => window.open(loc.url, "_blank"));
  });
}

// Handle opening the application modal when "Apply Now" is clicked
document.addEventListener("DOMContentLoaded", function () {
  const applyButtons = document.querySelectorAll(".apply-btn");
  const modal = document.getElementById("applicationModal");
  const modalJobTitle = document.getElementById("modalJobTitle");
  const jobTitleInput = document.getElementById("jobTitleInput");
  const closeBtn = document.querySelector(".modal-close");

  applyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const jobTitle = button.getAttribute("data-job");
      modal.classList.add("open");
      modalJobTitle.textContent = jobTitle;
      jobTitleInput.value = jobTitle;
    });
  });

  // Close modal on "×" click
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  // Close modal on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });
});

// Enable image lightbox on click
function enlargeImage(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgElement.src;
  lightbox.style.display = 'flex';

  // Reset zoom and transform
  zoomLevel = 1;
  offsetX = 0;
  offsetY = 0;
  lightboxImg.style.transform = `scale(${zoomLevel}) translate(0px, 0px)`;
}

// Initialize zoom and pan variables
let zoomLevel = 1;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let startX, startY;

// Zoom on mouse wheel
document.getElementById('lightbox-img').addEventListener('wheel', function (e) {
  e.preventDefault();
  const scaleStep = 0.1;

  if (e.deltaY < 0) {
    zoomLevel += scaleStep; // zoom in
  } else {
    zoomLevel = Math.max(1, zoomLevel - scaleStep); // zoom out
    if (zoomLevel === 1) {
      offsetX = 0;
      offsetY = 0;
    }
  }

  updateTransform();
});

// Mouse drag to pan
const lightboxImg = document.getElementById('lightbox-img');

lightboxImg.addEventListener('mousedown', function (e) {
  if (zoomLevel <= 1) return;
  isDragging = true;
  startX = e.clientX - offsetX;
  startY = e.clientY - offsetY;
  lightboxImg.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', function () {
  isDragging = false;
  lightboxImg.style.cursor = 'zoom-in';
});

window.addEventListener('mousemove', function (e) {
  if (!isDragging) return;
  offsetX = e.clientX - startX;
  offsetY = e.clientY - startY;
  updateTransform();
});

function updateTransform() {
  lightboxImg.style.transform = `scale(${zoomLevel}) translate(${offsetX}px, ${offsetY}px)`;
}

// =======================
// Machine Modal Functions
// =======================
const machineDetails = {
  'jco-edgemilling': {
    title: 'Edge Milling (JCO Line)',
    body: `
      <ul>
        <li>Bevel edge preparation using rotating heads</li>
        <li>Root face: 3–5 mm; Angles: 27°/32°</li>
        <li><strong>Key Equipment:</strong><br>
        - Double head<br>- 6–12.8m, 1,200–5,300mm, Max 60mm<br>- SEOKWANG (Korea)</li>
      </ul>`
  },
  'jco-jcopress': {
    title: 'JCO Press',
    body: `
      <ul>
        <li>CNC-controlled J-C-O step forming</li>
        <li>Air-bent hydraulic press system</li>
        <li><strong>Key Equipment:</strong><br>
        - 65,000KN capacity<br>- OD 18"–64", Max thickness 60mm<br>- YSD (China)</li>
      </ul>`
  },
  'jco-tackwelding': {
    title: 'Tack Welding',
    body: `
      <ul>
        <li>GMAW welding using CO₂/Argon with 5-roll guide</li>
        <li><strong>Key Equipment:</strong><br>- 25 Ton<br>- DC Max 45V / AC Max 500A<br>- SEOKWANG (Korea)</li>
      </ul>`
  },
  'jco-insidewelding': {
    title: 'Inside Welding',
    body: `
      <ul>
        <li>SAW with DC & AC wires and laser seam tracking</li>
        <li><strong>Key Equipment:</strong><br>- 1650A DC ×2, 1250A AC ×2<br>- ESAB (Korea)</li>
      </ul>`
  },
  'jco-outsidewelding': {
    title: 'Outside Welding',
    body: `
      <ul>
        <li>External SAW, same system as inside weld</li>
        <li><strong>Key Equipment:</strong><br>- Matches inside welding specs<br>- ESAB (Korea)</li>
      </ul>`
  },
  'jco-xray': {
    title: 'X-ray (Intermediate/Final)',
    body: `
      <ul>
        <li>Real-time X-ray for L and G seams</li>
        <li><strong>Key Equipment:</strong><br>- 325Kvp, 45A<br>- Digital system</li>
      </ul>`
  },
  'jco-Expander': {
    title: 'Calibration / Cold Expanding',
    body: `
      <ul>
        <li>Diameter calibration and cold expansion</li>
        <li><strong>Key Equipment:</strong><br>- OD: 18"–56", Max thickness 60mm<br>- Fontijine Grotness</li>
      </ul>`
  },
  'jco-hydro': {
    title: 'Hydro Testing',
    body: `
      <ul>
        <li>High-pressure water seal test</li>
        <li><strong>Key Equipment:</strong><br>- Max 60 MPa<br>- OD: Max 64"<br>- TSD (China)</li>
      </ul>`
  },
  'jco-UT': {
    title: 'Auto UT',
    body: `
      <ul>
        <li>Pulse-echo ultrasonic weld testing</li>
        <li><strong>Key Equipment:</strong><br>- Speed: 50–60 m/min<br>- GEIT</li>
      </ul>`
  },
  'jco-furnace': {
    title: 'Heat Treatment',
    body: `
      <ul>
        <li>Stress relief gas furnace</li>
        <li><strong>Key Equipment:</strong><br>- Max Temp: 970°C<br>- DONGSUNG (Korea)</li>
      </ul>`
  },
  'jco-inspection': {
    title: 'Final Inspection',
    body: `
      <ul>
        <li>Dimensional, roundness, and QA marking</li>
        <li><strong>Key Equipment:</strong><br>- Visual and digital measuring tools</li>
      </ul>`
  },
  'rb-gascutting': {
    title: 'Plate Gas Cutting',
    body: `
      <ul>
        <li>O₂ + LPG cutting with beveling</li>
        <li><strong>Key Equipment:</strong><br>- 15 Ton, Max 50mm<br>- SeShine (Korea)</li>
      </ul>`
  },
  'rb-rollbending': {
    title: '3 Roll Bending',
    body: `
      <ul>
        <li>Forming pipe using top and bottom rolls</li>
        <li><strong>Key Equipment:</strong><br>- OD: 40"–120", Max 50mm<br>- SEOKWANG (Korea)</li>
      </ul>`
  },
  'rb-tackwelding': {
    title: 'Tack Welding (Roll Bender)',
    body: `
      <ul>
        <li>Manual GMAW process</li>
        <li><strong>Key Equipment:</strong><br>- Handheld GMAW<br>- Seam holding only</li>
      </ul>`
  },
  'rb-123longitudionalwelding': {
    title: '12M Longitudinal Welding (Inside)',
    body: `
      <ul>
        <li>SAW welding with laser tracking</li>
        <li><strong>Key Equipment:</strong><br>- DC 1600A / AC 1500A<br>- ESAB (Korea)</li>
      </ul>`
  },
  'rb-12mlongitudionalweldingo': {
    title: '12M Longitudinal Welding (Outside)',
    body: `
      <ul>
        <li>Same as inside longitudinal weld</li>
        <li><strong>Key Equipment:</strong><br>- Matches inside weld<br>- ESAB (Korea)</li>
      </ul>`
  },
  'rb-fittingup': {
    title: 'Fitting Up',
    body: `
      <ul>
        <li>Alignment for girth welds</li>
        <li><strong>Key Equipment:</strong><br>- 30 Ton turning roll<br>- Adjustable width</li>
      </ul>`
  },
  'rb-girthwelding': {
    title: '12M Girth Welding (Inside)',
    body: `
      <ul>
        <li>SAW welding on girth seam (inside)</li>
        <li><strong>Key Equipment:</strong><br>- Same as SAW<br>- ESAB</li>
      </ul>`
  },
  'rb-girthweldingo': {
    title: '12M Girth Welding (Outside)',
    body: `
      <ul>
        <li>SAW welding on girth seam (outside)</li>
        <li><strong>Key Equipment:</strong><br>- Same as inside<br>- ESAB</li>
      </ul>`
  },
  'rb-120inhydro': {
    title: '120" Hydro Testing',
    body: `
      <ul>
        <li>Water pressure test using rubber sealing</li>
        <li><strong>Key Equipment:</strong><br>- Max 250 bar<br>- OD: Max 120"<br>- SEOKWANG (Korea)</li>
      </ul>`
  },
  'rb-xray': {
    title: 'X-ray Test',
    body: `
      <ul>
        <li>Final seam check with digital system</li>
        <li><strong>Key Equipment:</strong><br>- 325Kvp, real-time<br>- GEIT</li>	
      </ul>`
  },
  'rb-furnacerb': {
    title: 'Heat Treatment',
    body: `
      <ul>
        <li>Stress relief gas furnace for RB line</li>
        <li><strong>Key Equipment:</strong><br>- Max Temp: 970°C<br>- DONGSUNG (Korea)</li>
      </ul>`
  },
  'rb-inspectionrb': {
    title: 'Final Inspection (Roll Bender)',
    body: `
      <ul>
        <li>QA check of size, roundness, and weld quality</li>
        <li><strong>Key Equipment:</strong><br>- Dimensional tools<br>- Visual QA systems</li>
      </ul>`
  }
};

// Function to open machine modal
function openMachineModal(id) {
  const data = machineDetails[id];
  if (data) {
    const modal = document.getElementById("machineModal");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");

    modalTitle.innerHTML = data.title;
    modalBody.innerHTML = data.body;

    modal.style.display = "block";
  }
}

// Function to close machine modal
function closeMachineModal() {
  const modal = document.getElementById("machineModal");
  modal.style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  const modal = document.getElementById("machineModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Make machine modal functions available globally for inline HTML onclick
window.openMachineModal = openMachineModal;
window.closeMachineModal = closeMachineModal;

function closeMachineModal() {
  const modal = document.getElementById("machineModal");
  modal.classList.remove("open");
}

// Language switcher using Google Translate
function setLanguage(lang) {
  var translateCookie = '/en/' + lang;
  document.cookie = 'googtrans=' + translateCookie + ';path=/';
  document.cookie = 'googtrans=' + translateCookie + ';domain=' + window.location.hostname + ';path=/';
  window.location.reload();
}
window.setLanguage = setLanguage;

