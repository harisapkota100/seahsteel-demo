# SeAH Steel UAE Demo Website

This repository hosts a static demonstration site for **SeAH Steel UAE LLC**. It includes several HTML pages, CSS stylesheets and JavaScript used for various interactive elements.

## Main Features

- Company information sections such as About, News and CEO Message
- Product and manufacturing pages describing equipment and processes
- Global and UAE maps powered by Google Maps
- Site-wide search box to quickly locate pages
- Careers page with "Apply Now" modal form
- Image galleries with a zoomable lightbox

## Running Locally

The project is a static website, so no build step is required. To view it locally you can serve the files with a simple HTTP server. With Python installed:

```bash
python3 -m http.server
```

This command starts a local server at `http://localhost:8000/`. Open that URL in a browser to explore the site.

## Build & Deployment

There are no additional build tasks. To deploy, copy the repository contents to any static hosting service or web server. Ensure directories such as `images/`, `downloads/` and `js/` keep the same relative paths.
