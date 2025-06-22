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
  const locations = [ { lat: 37.5495, lng: 126.9100, name: "SeAH HQ - Korea", url: "https://www.seah.co.kr/" },
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
    { lat: 20.7000, lng: -100.4000, name: "SeAH Mexico", url: "https://seah.global/" }];
  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map,
      title: loc.name
    });
    marker.addListener("click", () => window.open(loc.url, "_blank"));
  });
}

function initUaeMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 25.276987, lng: 55.296249 },
    mapTypeId: "roadmap"
  });
  const locations = [ {
      lat: 25.005014, lng: 55.062885,
      name: "Sales Office - Jebel Ali, Dubai",
      url: "https://seahuae.com/"
    },
    {
      lat: 25.791559, lng: 55.946028,
      name: "Head Office - Ras Al Khaimah",
      url: "https://seahuae.com/"
    } ];
  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map,
      title: loc.name
    });
    marker.addListener("click", () => window.open(loc.url, "_blank"));
  });
}

// =======================
// Lightbox Zoom & Pan
// =======================
let zoomLevel = 1, offsetX = 0, offsetY = 0, isDragging = false, startX = 0, startY = 0;

function updateTransform() {
  const lbImg = document.getElementById('lightbox-img');
  if (lbImg) {
    lbImg.style.transform = `scale(${zoomLevel}) translate(${offsetX}px, ${offsetY}px)`;
  }
}

function enlargeImage(imgElement) {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  if (!lb || !lbImg) return;
  lbImg.src = imgElement.src;
  lb.style.display = 'flex';
  zoomLevel = 1;
  offsetX = 0;
  offsetY = 0;
  updateTransform();
}

// =======================
// DOMContentLoaded
// =======================
document.addEventListener('DOMContentLoaded', function() {
  // 1) Site Search
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', searchSite);
  }

  // 2) EmailJS & "Apply Now" Modal
  if (window.emailjs) {
    emailjs.init("prLT2qfRoQvPINPYg");
    const applyButtons = document.querySelectorAll(".apply-btn");
    const modal = document.getElementById("applicationModal");
    const modalJobTitle = document.getElementById("modalJobTitle");
    const jobTitleInput = document.getElementById("jobTitleInput");
    const closeBtn = document.querySelector(".modal-close");
    const applicationForm = document.getElementById("applicationForm");
    if (applyButtons.length && modal && modalJobTitle && jobTitleInput && closeBtn && applicationForm) {
      applyButtons.forEach(button => {
        button.addEventListener('click', () => {
          const jobTitle = button.getAttribute('data-job') || '';
          modal.classList.add('open');
          modalJobTitle.textContent = jobTitle;
          jobTitleInput.value = jobTitle;
          applicationForm.reset();
        });
      });
      closeBtn.addEventListener('click', () => modal.classList.remove('open'));
      window.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
      applicationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        emailjs.sendForm('service_eirv15c', 'template_fpmi9bs', applicationForm)
          .then(response => {
            alert('Application submitted!');
            setTimeout(() => modal.classList.remove('open'), 2000);
          })
          .catch(() => alert('Failed to send, please try later.'));
      });
    }
  }

  // 3) CV Submission Form
  const cvForm = document.getElementById('cvForm');
  if (cvForm && window.emailjs) {
    const cvFeedbackEl = document.createElement('p');
    cvFeedbackEl.id = 'cvFormFeedback';
    cvFeedbackEl.style.display = 'none';
    cvForm.parentNode.insertBefore(cvFeedbackEl, cvForm.nextSibling);
    cvForm.addEventListener('submit', function(e) {
      e.preventDefault();
      cvFeedbackEl.textContent = 'Sending your CV…';
      cvFeedbackEl.style.display = 'block';
      emailjs.sendForm('service_9bkx5k3', 'template_2oni1wg', cvForm)
        .then(() => {
          cvFeedbackEl.textContent = 'Thank you! Your CV has been submitted.';
          cvForm.reset();
        })
        .catch(() => cvFeedbackEl.textContent = 'Error sending CV. Please try again.');
    });
  }

  // 4) Lightbox Event Listeners
  const lbImgEl = document.getElementById('lightbox-img');
  if (lbImgEl) {
    lbImgEl.addEventListener('wheel', function(e) {
      e.preventDefault();
      const step = 0.1;
      if (e.deltaY < 0) {
        zoomLevel = Math.min(5, zoomLevel + step);
      } else {
        zoomLevel = Math.max(0.5, zoomLevel - step);
        if (zoomLevel === 1) { offsetX = 0; offsetY = 0; }
      }
      updateTransform();
    });
    lbImgEl.addEventListener('dblclick', function() {
      zoomLevel = 1; offsetX = 0; offsetY = 0;
      updateTransform();
    });
    lbImgEl.addEventListener('mousedown', function(e) {
      if (zoomLevel <= 1) return;
      isDragging = true;
      startX = e.clientX - offsetX;
      startY = e.clientY - offsetY;
      lbImgEl.style.cursor = 'grabbing';
    });
    window.addEventListener('mouseup', function() {
      isDragging = false;
      lbImgEl.style.cursor = 'zoom-in';
    });
    window.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      offsetX = e.clientX - startX;
      offsetY = e.clientY - startY;
      updateTransform();
    });
  }

  // 5) Gallery Next/Prev & Keyboard Nav
  const galleryImgs = Array.from(document.querySelectorAll('.gallery-item img'));
  if (galleryImgs.length) {
    let currentIndex = 0;
    const lb = document.getElementById('lightbox');
    const lbImgNav = document.getElementById('lightbox-img');
    const btnPrev = lb.querySelector('.lb-prev');
    const btnNext = lb.querySelector('.lb-next');
    const btnClose = lb.querySelector('.lb-close');
    const backdrop = lb.querySelector('.lb-backdrop');
    galleryImgs.forEach((img, i) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        currentIndex = i;
        lbImgNav.src = img.src;
        lb.style.display = 'flex';
      });
    });
    function show(idx) {
      currentIndex = (idx + galleryImgs.length) % galleryImgs.length;
      lbImgNav.src = galleryImgs[currentIndex].src;
    }
    btnPrev && btnPrev.addEventListener('click', () => show(currentIndex - 1));
    btnNext && btnNext.addEventListener('click', () => show(currentIndex + 1));
    btnClose && btnClose.addEventListener('click', () => lb.style.display = 'none');
    backdrop && backdrop.addEventListener('click', () => lb.style.display = 'none');
    document.addEventListener('keydown', e => {
      if (lb.style.display !== 'flex') return;
      if (e.key === 'ArrowLeft') show(currentIndex - 1);
      if (e.key === 'ArrowRight') show(currentIndex + 1);
      if (e.key === 'Escape') lb.style.display = 'none';
    });
  }

  // 6) Production & Sales Charts (2011–2025)
  const prodCanvas = document.getElementById('productionChart');
  const salesCanvas = document.getElementById('salesChart');
  if (prodCanvas && salesCanvas && window.Chart) {
    const years = Array.from({ length: 2025 - 2011 + 1 }, (_, i) => (2011 + i).toString());
    const productionData = [31304,15026,16864,13553,26471,16625,40061,7880,47486,11326,23195,17856,28067,27079,69620];
    const salesData = [24484,10807,17633,13364,26679,16617,39181,8702,40989,15837,23117,17329,27880,22024,68063];
    const commonOptions = { responsive: true, scales: { y: { beginAtZero: true } } };

    new Chart(prodCanvas.getContext('2d'), {
      type: 'bar',
      data: { labels: years, datasets: [{ label: 'Quantity Produced', data: productionData, backgroundColor: 'rgba(54, 162, 235, 0.6)' }] },
      options: {
        ...commonOptions,
        plugins: {
          title: { display: true, text: 'Total Quantity Produced (2011–2025)', position: 'bottom', padding: { top: 10 } },
          legend: { display: false }
        }
      }
    });

    new Chart(salesCanvas.getContext('2d'), {
      type: 'bar',
      data: { labels: years, datasets: [{ label: 'Quantity Sold', data: salesData, backgroundColor: 'rgba(255, 159, 64, 0.6)' }] },
      options: {
        ...commonOptions,
        plugins: {
          title: { display: true, text: 'Total Quantity Sold (2011–2025)', position: 'bottom', padding: { top: 10 } },
          legend: { display: false }
        }
      }
    });
  }
});
