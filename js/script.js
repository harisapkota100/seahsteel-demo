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
