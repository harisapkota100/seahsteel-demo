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

  fetch("news-data.json")
    .then(res => res.json())
    .then(news => {
      news.forEach(item => {
        const a = document.createElement("a");
        a.href = item.url;
        a.className = "news-item";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;

        const span = document.createElement("span");
        span.textContent = item.title;

        a.appendChild(img);
        a.appendChild(span);
        ticker.appendChild(a);
      });
    });
});
// Load full news list into news.html
document.addEventListener("DOMContentLoaded", function () {
  const newsContainer = document.getElementById("dynamicNews");

  if (newsContainer) {
    fetch("news-data.json")
      .then(res => res.json())
      .then(news => {
        news.forEach(item => {
          const div = document.createElement("div");
          div.className = "news-item";
          div.id = item.id;

          div.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          `;

          newsContainer.appendChild(div);
        });
      });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const videoElement = document.getElementById("multiVideo");

  if (videoElement) {
    const videoParts = [];
    for (let i = 0; i < 40; i++) {
      const num = String(i).padStart(3, '0'); // "000" to "039"
      videoParts.push(`video/company_profile_5sec_${num}.mp4`);
    }

    let currentPart = 0;

    function playNext() {
      if (currentPart < videoParts.length) {
        videoElement.src = videoParts[currentPart];
        videoElement.load();
        videoElement.play();
        currentPart++;
      } else {
        // Optional: loop from beginning
        currentPart = 0;
        playNext();
      }
    }

    videoElement.addEventListener("ended", playNext);
    playNext();
  }
});

