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
// Machine Modal Data & Functions
// =======================
// (… remainder of your existing machineDetails object and functions …)
