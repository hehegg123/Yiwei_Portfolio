(() => {
  const body = document.body;
  const root = body.dataset.root || "";
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");
  const current = body.dataset.page || "home";
  const affiliateAssets = [
    ["affiliate-capture-01.png", 980, 737],
    ["affiliate-capture-02.png", 980, 662],
    ["affiliate-capture-03.png", 979, 703],
    ["affiliate-capture-04.png", 979, 636],
    ["affiliate-capture-05.png", 979, 682],
    ["affiliate-capture-06.png", 980, 639],
    ["affiliate-capture-07.png", 980, 256],
    ["affiliate-capture-08.png", 980, 641],
    ["affiliate-capture-09.png", 980, 282],
    ["affiliate-capture-10.png", 980, 721],
    ["affiliate-capture-11.png", 855, 398],
    ["affiliate-capture-12.png", 980, 196],
    ["affiliate-capture-13.png", 980, 737],
    ["affiliate-capture-14.png", 980, 461],
    ["affiliate-capture-15.png", 980, 455],
    ["affiliate-capture-16.png", 980, 246],
    ["affiliate-capture-17.png", 980, 669],
    ["affiliate-capture-18.png", 980, 190],
    ["affiliate-capture-19.png", 980, 124],
    ["affiliate-capture-20.png", 980, 582],
    ["affiliate-capture-21.png", 980, 577],
    ["affiliate-capture-22.png", 980, 844],
    ["affiliate-capture-23.png", 980, 616],
    ["affiliate-capture-24.png", 908, 540],
  ];

  if (header) {
    header.innerHTML = `
      <header class="site-header">
        <a class="brand" href="${root}#about">YiWei He.</a>
        <nav class="site-nav" aria-label="Primary navigation">
          <a href="${root}#about" ${current === "home" ? 'aria-current="page"' : ""}>About</a>
          <a href="${root}#projects">Project</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>`;
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer" id="contact">
        <h2>Thanks for stopping by!</h2>
        <p>Feel free to download my <a href="${root}assets/yiwei-he-resume.pdf">resume</a> or check out my <a href="https://www.linkedin.com/" rel="noreferrer">LinkedIn</a> profile. Don&apos;t hesitate to connect with me. If you have any questions, reach out to me via pigeon post… okay, fine, <a href="mailto:hehegg321@gmail.com">email</a> works too.</p>
        <p class="copyright">© 2024 by Yiwei He Design Portfolio.</p>
      </footer>`;
  }

  const affiliateGallery = document.querySelector("[data-affiliate-gallery]");
  if (affiliateGallery) {
    affiliateGallery.innerHTML = affiliateAssets.map(([name, width, height], index) => `
      <figure class="asset-slot case-asset" data-src="assets/${name}" data-width="${width}" data-height="${height}" data-label="Affiliate case study panel ${String(index + 1).padStart(2, "0")}"></figure>
    `).join("");
  }

  document.querySelectorAll(".asset-slot[data-src]").forEach((slot) => {
    const width = Number(slot.dataset.width);
    const height = Number(slot.dataset.height);
    if (width && height) slot.style.aspectRatio = `${width} / ${height}`;
    const img = new Image();
    img.alt = slot.dataset.label || "Project visual";
    img.onload = () => {
      slot.classList.add("is-loaded");
      slot.append(img);
    };
    img.src = `${root}${slot.dataset.src}`;
  });
})();
