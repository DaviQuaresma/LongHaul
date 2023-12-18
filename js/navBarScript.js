class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");
  const logoImage = document.querySelector(".logo");

  // Verificar se a URL da página contém um padrão específico
  const isGreenLogoPage = window.location.href.includes(
    "/pagina-com-logo-verde"
  );

  // Definir os caminhos padrão e verde para a logo
  const defaultLogoPath = "/images/HomeImg/LogoBranca.webp";
  const greenLogoPath = "/images/IndexImg/LogoVerde.webp";

  // Definir a imagem inicial com base na página
  logoImage.src = isGreenLogoPage ? greenLogoPath : defaultLogoPath;

  mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("clicked");
    navList.classList.toggle("black-menu-active");

    if (mobileMenu.classList.contains("clicked")) {
      // Se o menu estiver aberto, altere a imagem para a logo verde
      logoImage.src = greenLogoPath;
    } else {
      // Se o menu estiver fechado, restaure a imagem com base na página
      logoImage.src = isGreenLogoPage ? greenLogoPath : defaultLogoPath;
    }
  });
});
