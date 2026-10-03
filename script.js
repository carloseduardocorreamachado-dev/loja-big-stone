const numeroWhatsApp = "5521982891993";

const botoesProdutos = document.querySelectorAll(".product-button");

botoesProdutos.forEach((botao) => {
  botao.addEventListener("click", function () {
    const produto = botao.getAttribute("data-product");

    const mensagem = `Olá! Tenho interesse em ${produto} e gostaria de saber mais sobre esse produto e solicitar um orçamento.`;

    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(link, "_blank");
  });
});

const botaoOutrasPedras = document.querySelector(".stone-button");

if (botaoOutrasPedras) {
  botaoOutrasPedras.addEventListener("click", function () {
    const mensagem = "Olá! Desejo ver outras opções de pedras.";

    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(link, "_blank");
  });
}

/* MENU MOBILE */

const menuButton = document.getElementById("menuButton");

const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("active");
});

/* FECHAR MENU AO CLICAR */

const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});

/* ANO AUTOMÁTICO */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
