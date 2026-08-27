(() => {
  const body = document.body;
  const root = body.dataset.root || "";
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");
  const current = body.dataset.page || "home";
  const affiliateAssets = [
    ["affiliate-capture-01.PNG", 1524, 877],
    ["affiliate-capture-02.PNG", 1520, 795],
    ["affiliate-capture-03.PNG", 1493, 842],
    ["affiliate-capture-04.PNG", 1499, 786],
    ["affiliate-capture-05.PNG", 1516, 814],
    ["affiliate-capture-06.PNG", 1515, 846],
    ["affiliate-capture-07.PNG", 1520, 308],
    ["affiliate-capture-08.PNG", 1522, 843],
    ["affiliate-capture-09.PNG", 1520, 354],
    ["affiliate-capture-10.PNG", 1522, 858],
    ["affiliate-capture-11.PNG", 1516, 486],
    ["affiliate-capture-12.PNG", 1522, 234],
    ["affiliate-capture-13.PNG", 1522, 878],
    ["affiliate-capture-14.PNG", 1402, 876],
    ["affiliate-capture-15.PNG", 1405, 858],
    ["affiliate-capture-16.PNG", 1399, 865],
    ["affiliate-capture-17.PNG", 1402, 817],
    ["affiliate-capture-18.PNG", 1397, 650],
    ["affiliate-capture-19.PNG", 1397, 660],
    ["affiliate-capture-20.PNG", 1400, 357],
    ["affiliate-capture-21.PNG", 1396, 738],
    ["affiliate-capture-22.PNG", 1401, 209],
    ["affiliate-capture-23.PNG", 1459, 861],
    ["affiliate-capture-24.PNG", 1458, 183],
    ["affiliate-capture-25.PNG", 1456, 867],
    ["affiliate-capture-26.PNG", 1460, 823],
    ["affiliate-capture-27.PNG", 1458, 866],
    ["affiliate-capture-28.PNG", 1458, 717],
    ["affiliate-capture-29.PNG", 1916, 797],
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
        <p>Feel free to download my <a href="${root}assets/yiwei-he-resume.pdf" target="_blank" rel="noreferrer">resume</a> or check out my <a href="https://www.linkedin.com/in/yiwei-he-484b6322b" target="_blank" rel="noreferrer">LinkedIn</a> profile. Don&apos;t hesitate to connect with me. If you have any questions, reach out to me via pigeon post… okay, fine, <a href="mailto:hehegg321@gmail.com">email</a> works too.</p>
        <p class="copyright">© 2024 by Yiwei He Design Portfolio.</p>
      </footer>`;
  }

  const affiliateGallery = document.querySelector("[data-affiliate-gallery]");
  if (affiliateGallery) {
    const affiliatePanel = ([name, width, height], index) => `
      <figure class="asset-slot case-asset" data-src="assets/${name}" data-width="${width}" data-height="${height}" data-label="Affiliate case study panel ${String(index + 1).padStart(2, "0")}"></figure>`;
    const openingPanels = affiliateAssets.slice(0, 12).map(affiliatePanel).join("");
    const personaPanels = affiliateAssets.slice(12, 16).map((asset, index) => affiliatePanel(asset, index + 12)).join("");
    const remainingPanels = affiliateAssets.slice(16).map((asset, index) => affiliatePanel(asset, index + 16)).join("");

    affiliateGallery.innerHTML = `
      ${openingPanels}
      <details class="affiliate-personas">
        <summary aria-label="Show or hide all four user persona cards">
          <span class="affiliate-personas__expand">[Expand]</span>
          <span class="affiliate-personas__hide">[Hide]</span>
        </summary>
        <div class="affiliate-personas__gallery">${personaPanels}</div>
      </details>
      ${remainingPanels}`;
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
