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


document.addEventListener("DOMContentLoaded", function () {
  const ticker = document.getElementById("newsTicker");

  if (ticker) {
    fetch("news-data.json")
      .then(res => res.json())
      .then(news => {
        const latestNews = news.slice(0, 6); // ✅ Only first 6

        latestNews.forEach(item => {
          const a = document.createElement("a");
          a.href = item.url;
          a.className = "news-item visible"; // ✅ This is key

          const img = document.createElement("img");
          img.src = item.image;
          img.alt = item.title;

          const span = document.createElement("span");
          span.textContent = item.title;

          a.appendChild(img);
          a.appendChild(span);

          ticker.appendChild(a);
        });
      })
      .catch(err => console.error("Failed to load news-data.json", err));
  }
});

function enlargeImage(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
}


function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: 20, lng: 0 },
    mapTypeId: "hybrid",
    gestureHandling: "greedy" // Enables scroll zoom without Ctrl
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

    marker.addListener("click", () => {
      window.open(loc.url, "_blank");
    });
  });
}
// Initialize EmailJS with your User ID
emailjs.init("ml8qh53sEJhLKHbDO");

// ---------------- MODAL JOB APPLICATION FORM ----------------
const modal      = document.getElementById("applicationModal");
const closeBtn   = modal.querySelector(".modal-close");
const form       = document.getElementById("applicationForm");
const titleEl    = document.getElementById("modalJobTitle");
const titleInput = document.getElementById("jobTitleInput");

// 1. Open modal on Apply button click
document.querySelectorAll(".apply-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const job = btn.dataset.job;
    if (!job) return console.warn("Apply button missing data-job");
    titleEl.textContent = job;
    titleInput.value = job;
    modal.classList.add("open");
  });
});

// 2. Close modal
closeBtn.addEventListener("click", () => modal.classList.remove("open"));
window.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("open");
});

// 3. Send modal form via EmailJS (template_ztdooje)
form.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_r7829om",   // modal-specific service
    "template_ztdooje",  // modal-specific template
    this
  )
  .then(() => {
    alert("Your application has been sent—thank you!");
    form.reset();
    modal.classList.remove("open");
  })
  .catch(err => {
    console.error("EmailJS send error:", err);
    alert("Oops, something went wrong. Please try again later.");
  });
});

// ---------------- GENERAL CV FORM ----------------
const cvForm = document.getElementById("cvForm");
if (cvForm) {
  cvForm.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_w79r1qy",    // CV submission service
      "template_s2l8fmp",   // CV submission template
      this
    )
    .then(() => {
      alert("Your CV has been sent—thank you!");
      cvForm.reset();
    })
    .catch(err => {
      console.error("EmailJS CV send error:", err);
      alert("Oops, something went wrong. Please try again later.");
    });
  });
}
