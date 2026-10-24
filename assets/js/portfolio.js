// Portfólio da HM. Para adicionar um trabalho, copie um bloco de "projects".
// cover: imagem de capa (ex.: "/assets/img/portfolio/legend.jpg"); vazio = capa com as iniciais.
// result: um número ou frase de resultado real (vazio = não aparece).
// link: endereço para ver o trabalho (vazio = sem botão).
window.HM_PORTFOLIO = {
  whatsapp: "5562984134046",
  projects: [
    {
      name: "Legend",
      segment: "Bolsas personalizadas",
      tags: ["Marketing", "Sistemas", "Crescimento"],
      text: "Marketing, sistemas e estratégia de crescimento para a marca, incluindo o cartão digital do CEO.",
      result: "",
      cover: "", hue: 38,
      link: "https://thiago.uselegend.com"
    },
    {
      name: "Barbearia C7",
      segment: "Barbearia",
      tags: ["Marketing", "Sistemas", "Crescimento"],
      text: "Marketing, sistemas e estratégia de crescimento para a barbearia.",
      result: "",
      cover: "", hue: 0,
      link: ""
    },
    {
      name: "Espetinho dos Amigos",
      segment: "Espetaria",
      tags: ["Delivery"],
      text: "Sistema de delivery próprio, com cardápio digital e pedidos online direto com a casa.",
      result: "",
      cover: "", hue: 18,
      link: ""
    },
    {
      name: "Rafs",
      segment: "Delivery",
      tags: ["Delivery"],
      text: "Sistema de delivery próprio, com cardápio digital e pedidos online direto com a casa.",
      result: "",
      cover: "", hue: 330,
      link: ""
    }
  ]
};

(function () {
  const P = window.HM_PORTFOLIO;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const initials = n => n.split(/\s+/).filter(w => w.length > 2 || /^[A-Z0-9]+$/.test(w)).slice(0, 2).map(w => w[0]).join("").toUpperCase() || n.slice(0, 2).toUpperCase();
  const arrow = '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const back = '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>';
  const wa = msg => `https://wa.me/${P.whatsapp}?text=${encodeURIComponent(msg)}`;
  const tags = ["Todos", ...new Set(P.projects.flatMap(p => p.tags))];

  const cover = p => p.cover
    ? `<img src="${esc(p.cover)}" alt="Trabalho para ${esc(p.name)}" loading="lazy">`
    : `<div class="mono" style="--h:${p.hue}"><span>${esc(initials(p.name))}</span></div>`;

  const card = p => `
    <article class="proj" data-tags="${esc(p.tags.join("|"))}">
      <div class="cover">${cover(p)}</div>
      <div class="proj-body">
        <span class="seg">${esc(p.segment)}</span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.text)}</p>
        ${p.result ? `<p class="result">${esc(p.result)}</p>` : ""}
        <div class="chips">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
        ${p.link ? `<a class="see" href="${esc(p.link)}" target="_blank" rel="noopener">Ver o trabalho ${arrow}</a>` : ""}
      </div>
    </article>`;

  document.getElementById("app").innerHTML = `
    <header class="pf-head">
      <a class="back" href="/">${back}Links</a>
      <img class="logo-sm" src="/assets/img/logo-hm.png" alt="HM Digital" width="1000" height="586">
    </header>
    <div class="pf-title">
      <span class="eyebrow">Portfólio</span>
      <h1>Trabalhos que a HM <em>colocou para rodar.</em></h1>
      <p>Marketing, sistemas e delivery feitos sob medida para cada negócio.</p>
    </div>
    <div class="filters" role="group" aria-label="Filtrar por serviço">
      ${tags.map((t, i) => `<button type="button" aria-pressed="${i === 0}" data-f="${esc(t)}">${esc(t)}</button>`).join("")}
    </div>
    <div class="grid">${P.projects.map(card).join("")}</div>
    <a class="link primary" href="${wa("Olá, HM! Vi o portfólio e quero um projeto assim para minha empresa.")}" target="_blank" rel="noopener">
      <span class="ic"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.2A8.5 8.5 0 1 1 20 11.5z"/></svg></span>
      <span class="tx"><strong>Quero um projeto assim</strong><small>Fale com a HM no WhatsApp</small></span>
      ${arrow.replace('class="i"', 'class="i arrow"')}
    </a>
    <footer>
      <span>Feito para ser lembrado.</span>
      <small>© ${new Date().getFullYear()} HM Digital</small>
    </footer>`;

  const buttons = document.querySelectorAll("[data-f]");
  buttons.forEach(b => b.addEventListener("click", () => {
    const f = b.dataset.f;
    buttons.forEach(x => x.setAttribute("aria-pressed", x === b));
    document.querySelectorAll(".proj").forEach(el => {
      el.hidden = f !== "Todos" && !el.dataset.tags.split("|").includes(f);
    });
  }));
})();
