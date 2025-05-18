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

