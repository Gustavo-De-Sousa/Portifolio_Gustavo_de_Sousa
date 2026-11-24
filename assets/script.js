const CONFIG = {
  name: "Gustavo",
  githubUser: "Gustavo-De-Sousa",
  whatsapp: "55110894373",
  email: "gdesousasilva81@gmail.com",
};

// Adicione seus repositórios duplicando um objeto neste array.
const projects = [
  {
    title: "Sistema para Pizzaria",
    description:
      "Demonstração de pedidos online com cardápio, carrinho, painel administrativo, produtos e promoções.",
    image: "assets/img/pizzaria.png",
    symbol: "🍕",
    tech: ["Python", "Flask", "SQLite", "JavaScript"],
    github: "https://github.com/Gustavo-De-Sousa/pizzaria_flask",
    demo: "https://pizzaria-flask.onrender.com/",
  },
  {
    title: "Meu próximo projeto",
    description:
      "Conte em poucas linhas o que este projeto faz e qual problema ele resolve.",
    symbol: "{ }",
    image: "assets/img/tu.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Gustavo-De-Sousa/REPOSITORIO",
    demo: "",
  },
  {
    title: "Meu próximo projeto",
    description:
      "Conte em poucas linhas o que este projeto faz e qual problema ele resolve.",
    symbol: "{ }",
    image: "assets/img/tu.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Gustavo-De-Sousa/REPOSITORIO",
    demo: "",
  },
  {
    title: "Meu próximo projeto",
    description:
      "Conte em poucas linhas o que este projeto faz e qual problema ele resolve.",
    symbol: "{ }",
    image: "assets/img/tu.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Gustavo-De-Sousa/REPOSITORIO",
    demo: "",
  },
];

const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "'" })[
        c
      ],
  );

const url = (s) => {
  try {
    let u = new URL(s);
    return ["http:", "https:"].includes(u.protocol) ? u.href : "#";
  } catch {
    return "#";
  }
};

document.querySelector("#projects").innerHTML = projects
  .map(
    (p, i) =>
      `<article class="card"><div class="visual">${
        p.image
          ? `<img src="${esc(p.image)}" alt="${esc(p.title)}">`
          : esc(p.symbol)
      }</div><div class="cardbody"><div class="cardtop"><h3>${esc(p.title)}</h3><div class="cardlinks">${p.github ? `<a href="${url(p.github.replace("SEU_USUARIO", CONFIG.githubUser))}" target="_blank" rel="noreferrer">CÓDIGO ↗</a>` : ""}${p.demo ? `<a href="${url(p.demo)}" target="_blank" rel="noreferrer">DEMO ↗</a>` : ""}</div></div><p>${esc(p.description)}</p><div class="tags">${p.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div></div></article>`,
  )
  .join("");

document.querySelector("#count").textContent =
  String(projects.length).padStart(2, "0") + " PROJETOS";
document.querySelector("#year").textContent = new Date().getFullYear();

document
  .querySelectorAll('a[href*="Gustavo-De-Sousa"]')
  .forEach(
    (a) => (a.href = a.href.replaceAll("Gustavo-De-Sousa", CONFIG.githubUser)),
  );

const msg = encodeURIComponent(
  `Olá! ${CONFIG.name}, Vi seu portfólio e gostaria de conversar sobre um projeto e solicitar um orçamento.`,
);
document.querySelector("#whatsapp").href =
  `https://wa.me/${CONFIG.whatsapp}?text=${msg}`;
document.querySelector("#email").href =
  `mailto:${CONFIG.email}?subject=${encodeURIComponent("Pedido de orçamento")}&body=${msg}`;

const btn = document.querySelector("#menuBtn"),
  nav = document.querySelector("#nav");
btn.addEventListener("click", () => nav.classList.toggle("open"));
nav
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );
