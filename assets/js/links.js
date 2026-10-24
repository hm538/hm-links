// Dados da página de links. Para mudar um link ou texto, mude só este bloco.
window.HM_LINKS = {
  whatsapp: "5562984134046",                 // DDI + DDD + número, só dígitos
  instagram: "agencia_hmdigital",
  bio: "Marketing e tecnologia para sua empresa vender mais.",
  city: "",                                  // opcional, aparece no rodapé (ex.: "Goiânia · GO")

  primary: { title: "Fale com a HM no WhatsApp", sub: "Orçamento sem compromisso", msg: "Olá, HM! Vim pelo Instagram e quero um orçamento." },

  // Cada serviço abre o WhatsApp com a mensagem já escrita
  services: [
    { title: "Marketing digital", sub: "Redes sociais, tráfego pago e conteúdo", icon: "megaphone", msg: "Olá, HM! Quero saber sobre marketing digital." },
    { title: "Sistemas sob medida", sub: "Ferramentas feitas para sua rotina", icon: "code", msg: "Olá, HM! Quero saber sobre sistemas sob medida." },
    { title: "CRM e automação", sub: "Vendas e atendimento num só lugar", icon: "flow", msg: "Olá, HM! Quero saber sobre CRM e automação." },
    { title: "Delivery", sub: "Cardápio digital e pedidos online", icon: "bag", msg: "Olá, HM! Quero saber sobre o sistema de delivery." },
    { title: "Sites e cartões digitais", sub: "Presença online que converte", icon: "globe", msg: "Olá, HM! Quero saber sobre sites e cartões digitais." },
    { title: "Identidade visual", sub: "Logo, cores e tipografia", icon: "pen", msg: "Olá, HM! Quero saber sobre identidade visual." }
  ],

  people: [
    { name: "Neto Hoffmann", role: "Tecnologia & Crescimento", photo: "/assets/img/neto.jpg", card: "https://neto.hmdigitalgo.com", instagram: "netohoffmann.30" },
    { name: "Mariana Guimarães", role: "Estratégia & Marketing", photo: "/assets/img/mariana.jpg", card: "https://mariana.hmdigitalgo.com", instagram: "guiimaraes_mari" }
  ]
};

(function () {
  const L = window.HM_LINKS;
  const icons = {
    whatsapp: '<path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.2A8.5 8.5 0 1 1 20 11.5z"/><path d="M8.5 9.5c.3 2.4 2.3 4.6 5 5.2l1.2-1.2 2 .9"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
    code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
    flow: '<rect x="3" y="3" width="7" height="6" rx="1.5"/><rect x="14" y="15" width="7" height="6" rx="1.5"/><path d="M6.5 9v3a3 3 0 0 0 3 3h4.5"/>',
    bag: '<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="m14 7 3 3"/>',
    grid: '<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/>',
    card: '<rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="11" r="2"/><path d="M6 16a3 3 0 0 1 6 0M15 10h3M15 13h3"/>'
  };
  const icon = (n, cls = "i") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${icons[n]}</svg>`;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const wa = msg => `https://wa.me/${L.whatsapp}?text=${encodeURIComponent(msg)}`;
  const ig = h => `https://instagram.com/${h}`;
  const ext = 'target="_blank" rel="noopener"';

  const link = (href, ic, title, sub, cls = "") => `
    <a class="link ${cls}" href="${esc(href)}" ${href.startsWith("/") ? "" : ext}>
      <span class="ic">${icon(ic)}</span>
      <span class="tx"><strong>${esc(title)}</strong><small>${esc(sub)}</small></span>
      ${icon("arrow", "i arrow")}
    </a>`;

  document.getElementById("app").innerHTML = `
    <header class="head">
      <div class="logo-wrap"><img class="logo" src="/assets/img/logo-hm.png" alt="HM Digital" width="1000" height="586"></div>
      <h1>HM Digital</h1>
      <p class="handle">@${esc(L.instagram)}</p>
      <p class="bio">${esc(L.bio)}</p>
      <div class="socials">
        <a href="${wa(L.primary.msg)}" ${ext} aria-label="WhatsApp">${icon("whatsapp")}</a>
        <a href="${ig(L.instagram)}" ${ext} aria-label="Instagram">${icon("instagram")}</a>
        <button type="button" data-share aria-label="Compartilhar">${icon("share")}</button>
      </div>
    </header>

    <div class="list">
      ${link(wa(L.primary.msg), "whatsapp", L.primary.title, L.primary.sub, "primary")}
      ${link("/portfolio", "grid", "Veja nosso portfólio", "Legend, Barbearia C7, delivery e mais")}
    </div>

    <section>
      <h2>O que a HM faz</h2>
      <div class="list">
        ${L.services.map(s => link(wa(s.msg), s.icon, s.title, s.sub)).join("")}
      </div>
    </section>

    <section>
      <h2>Fale direto com os sócios</h2>
      <div class="people">
        ${L.people.map(p => `
          <div class="person">
            <a class="person-main" href="${esc(p.card)}" ${ext}>
              <img src="${esc(p.photo)}" alt="Foto de ${esc(p.name)}" width="600" height="600">
              <span class="tx"><strong>${esc(p.name)}</strong><small>${esc(p.role)}</small></span>
              <span class="pill">${icon("card")}Cartão</span>
            </a>
            <a class="person-ig" href="${ig(p.instagram)}" ${ext}>${icon("instagram")}@${esc(p.instagram)}</a>
          </div>`).join("")}
      </div>
    </section>

    <footer>
      <img class="logo-sm" src="/assets/img/logo-hm.png" alt="" width="1000" height="586">
      <span>Feito para ser lembrado.</span>
      <small>© ${new Date().getFullYear()} HM Digital${L.city ? " · " + esc(L.city) : ""}</small>
    </footer>`;

  const toast = document.getElementById("toast");
  document.querySelectorAll("[data-share]").forEach(b => b.addEventListener("click", async () => {
    const data = { title: "HM Digital", url: location.href };
    if (navigator.share) { try { await navigator.share(data); return } catch (e) { if (e.name === "AbortError") return } }
    try { await navigator.clipboard.writeText(location.href); toast.textContent = "Link copiado" }
    catch { toast.textContent = location.href }
    toast.classList.add("on");
    setTimeout(() => toast.classList.remove("on"), 2200);
  }));
})();
