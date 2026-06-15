(function () {
  async function hydrateList(config) {
    const target = document.querySelector(config.target);
    if (!target) return;

    try {
      const url = new URL(config.page, window.location.origin).href + "?t=" + Date.now();
      const res = await fetch(url, { cache: "no-cache", mode: "same-origin", credentials: "same-origin" });
      if (!res.ok) throw new Error("fetch failed");

      const doc = new DOMParser().parseFromString(await res.text(), "text/html");
      const items = config.lists
        .flatMap((id) => Array.from(doc.querySelectorAll(id + " li")))
        .map((node) => ({ year: parseInt(node.dataset.year || "0", 10), node }))
        .sort((a, b) => b.year - a.year)
        .slice(0, 3);

      if (!items.length) return;
      target.innerHTML = "";
      items.forEach((item) => target.appendChild(item.node.cloneNode(true)));
    } catch (err) {
      target.innerHTML = '<li><a href="' + config.page + '">' + config.fallback + ' -></a></li>';
    }
  }

  window.addEventListener("load", function () {
    (window.recentWorkLists || []).forEach(hydrateList);
  });
})();
