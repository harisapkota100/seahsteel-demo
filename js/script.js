// =======================
// Site Search Function
// =======================
function searchSite(event) {
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

// =======================
// Global SeAH Map
// =======================
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

// =======================
// "Apply Now" Modal & EmailJS
// =======================
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("WtPAnXH9WZHENU4Ij");
  const applyButtons   = document.querySelectorAll(".apply-btn");
  const modal          = document.getElementById("applicationModal");
  const modalJobTitle  = document.getElementById("modalJobTitle");
  const jobTitleInput  = document.getElementById("jobTitleInput");
  const closeBtn       = document.querySelector(".modal-close");
  const applicationForm = document.getElementById("applicationForm");

  // Sanity check
  if (!applyButtons.length || !modal || !modalJobTitle || !jobTitleInput || !closeBtn || !applicationForm) {
    console.warn("script.js: Missing required modal elements.");
    return;
  }

  // 1) Open modal on “Apply Now” click
  applyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const jobTitle = button.getAttribute("data-job") || "";
      modal.classList.add("open");
      modalJobTitle.textContent = jobTitle;
      jobTitleInput.value = jobTitle;

      // Clear any previous feedback and reset form
      const feedbackEl = document.getElementById("formFeedback");
      if (feedbackEl) {
        feedbackEl.textContent = "";
        feedbackEl.classList.remove("error");
        feedbackEl.style.display = "none";
      }
      applicationForm.reset();
      jobTitleInput.value = jobTitle; // re-set hidden field after reset
    });
  });

  // 2) Close modal on “×” click
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  // 3) Close modal on outside click (backdrop)
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });

  // 4) Handle form submission via EmailJS
  applicationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const feedbackEl = document.getElementById("formFeedback");
    if (feedbackEl) {
      feedbackEl.textContent = "Sending your application…";
      feedbackEl.classList.remove("error");
      feedbackEl.style.display = "block";
    }

    // Replace with your actual IDs
    const serviceID  = "service_r7829om";
    const templateID = "template_ztdooje";

    emailjs.sendForm(serviceID, templateID, applicationForm)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        if (feedbackEl) {
          feedbackEl.textContent =
            "Your application has been submitted successfully. We will be in touch soon!";
          feedbackEl.classList.remove("error");
          feedbackEl.style.display = "block";
        }
        setTimeout(() => modal.classList.remove("open"), 2500);
      })
      .catch((error) => {
        console.log("FAILED…", error);
        if (feedbackEl) {
          feedbackEl.textContent =
            "Oops! Something went wrong. Please try again later.";
          feedbackEl.classList.add("error");
          feedbackEl.style.display = "block";
        }
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // ─── Initialize EmailJS with your Public Key ───
  emailjs.init("WtPAnXH9WZHENU4Ij");

  // Select the CV‐submission form
  const cvForm = document.getElementById("cvForm");
  if (!cvForm) {
    console.warn("script.js: Missing CV submission form (#cvForm).");
    return;
  }

  // Create and insert a <p> element for showing feedback messages
  const cvFeedbackEl = document.createElement("p");
  cvFeedbackEl.id = "cvFormFeedback";
  cvFeedbackEl.style.display = "none";
  cvFeedbackEl.style.marginBottom = "1rem";
  cvFeedbackEl.style.color = "red";
  cvForm.parentNode.insertBefore(cvFeedbackEl, cvForm.nextSibling);

  // Handle the CV form submission
  cvForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show “Sending your CV…” immediately
    cvFeedbackEl.textContent = "Sending your CV…";
    cvFeedbackEl.classList.remove("error");
    cvFeedbackEl.style.display = "block";

    // CV‐specific EmailJS Service & Template IDs
    const cvServiceID = "service_w79r1qy";
    const cvTemplateID = "template_s2l8fmp";

    // This will send all form fields, including <input name="resume_link">
    emailjs
      .sendForm(cvServiceID, cvTemplateID, cvForm)
      .then((response) => {
        console.log("CV SEND SUCCESS!", response.status, response.text);

        // Show success message
        cvFeedbackEl.textContent =
          "Thank you! Your CV has been submitted successfully.";
        cvFeedbackEl.classList.remove("error");
        cvFeedbackEl.style.display = "block";

        // Reset the form
        cvForm.reset();
      })
      .catch((error) => {
        console.log("CV SEND FAILED…", error);

        // Show error message
        cvFeedbackEl.textContent =
          "Oops! Something went wrong sending your CV. Please try again later.";
        cvFeedbackEl.classList.add("error");
        cvFeedbackEl.style.display = "block";
      });
  });
});
// =======================
// Image Lightbox (Zoom & Pan)
// =======================
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

// Zoom on mouse wheel (allow 0.5× → 5×)
document.getElementById('lightbox-img').addEventListener('wheel', function (e) {
  e.preventDefault();
  const step = 0.1;
  if (e.deltaY < 0) {
    zoomLevel = Math.min(5, zoomLevel + step);    // zoom in
  } else {
    zoomLevel = Math.max(0.5, zoomLevel - step);  // zoom out below 1×
    if (zoomLevel === 1) {
      offsetX = 0; offsetY = 0;                   // recenter at 1×
    }
  }
  updateTransform();
});
// Double-click to reset to 1× and centered
const lightboxImgEl = document.getElementById('lightbox-img');
lightboxImgEl.addEventListener('dblclick', () => {
  zoomLevel = 1;
  offsetX = 0;
  offsetY = 0;
  updateTransform();
});

// Mouse-drag to pan when zoomed
lightboxImgEl.addEventListener('mousedown', function (e) {
  if (zoomLevel <= 1) return;
  isDragging = true;
  startX      = e.clientX - offsetX;
  startY      = e.clientY - offsetY;
  lightboxImgEl.style.cursor = 'grabbing';
});
window.addEventListener('mouseup', function () {
  isDragging = false;
  lightboxImgEl.style.cursor = 'zoom-in';
});
window.addEventListener('mousemove', function (e) {
  if (!isDragging) return;
  offsetX = e.clientX - startX;
  offsetY = e.clientY - startY;
  updateTransform();
});
function updateTransform() {
  lightboxImgEl.style.transform = 
    `scale(${zoomLevel}) translate(${offsetX}px, ${offsetY}px)`;
}


// =======================
// Machine Modal Data & Functions
// =======================
// (… remainder of your existing machineDetails object and functions …)
// =======================
// Gallery Next/Prev & Keyboard Nav
// =======================
(function() {
  const imgs         = Array.from(document.querySelectorAll('.gallery-item img'));
  if (!imgs.length) return;

  let currentIndex   = 0;
  const lb           = document.getElementById('lightbox');
  const lbImg        = document.getElementById('lightbox-img');
  const btnPrev      = lb.querySelector('.lb-prev');
  const btnNext      = lb.querySelector('.lb-next');
  const btnClose     = lb.querySelector('.lb-close');
  const backdrop     = lb.querySelector('.lb-backdrop');

  // Open lightbox & record index
  imgs.forEach((img, i) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      currentIndex = i;
      lbImg.src    = img.src;
      lb.style.display = 'flex';
    });
  });

  // Show with wrap-around
  function show(idx) {
    currentIndex = (idx + imgs.length) % imgs.length;
    lbImg.src     = imgs[currentIndex].src;
  }

  // Button handlers
  btnPrev .addEventListener('click', () => show(currentIndex - 1));
  btnNext .addEventListener('click', () => show(currentIndex + 1));

  // Close handlers (now using style.display to actually hide)
  btnClose.addEventListener('click', () => lb.style.display = 'none');
  backdrop.addEventListener('click',  () => lb.style.display = 'none');

  // Keyboard nav
  document.addEventListener('keydown', e => {
    if (lb.style.display !== 'flex') return;
    if (e.key === 'ArrowLeft')  show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
    if (e.key === 'Escape')     lb.style.display = 'none';
  });
})();

// === Production & Sales Charts (2011–2025) ===
document.addEventListener('DOMContentLoaded', () => {
  // 1) years array
  const years = [];
  for (let y = 2011; y <= 2025; y++) years.push(y.toString());

  // 2) data placeholders — replace these with real figures
  const productionData = [
    31304, 15026, 16864, 13553, 26471, 16625,
    40061, 7880, 47486, 11326, 23195,
    17856, 28067, 27079, 69620
  ];
  const salesData = [
    24484, 10807, 17633, 13364, 26679, 16617,
    39181, 8702, 40989, 15837, 23117,
    17329, 27880, 22024, 68063
  ];

  // 3) common options
  const commonOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  };

  // 4) Production chart
  const ctxProd = document.getElementById('productionChart').getContext('2d');
  new Chart(ctxProd, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [{
        label: 'Quantity Produced',
        data: productionData,
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      }]
    },
    options: commonOptions
  });

  // 5) Sales chart
  const ctxSales = document.getElementById('salesChart').getContext('2d');
  new Chart(ctxSales, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [{
        label: 'Quantity Sold',
        data: salesData,
        backgroundColor: 'rgba(255, 159, 64, 0.6)'
      }]
    },
    options: commonOptions
  });
});
