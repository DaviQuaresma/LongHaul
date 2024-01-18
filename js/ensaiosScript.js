let startX;
let startY;
let endX;
let endY;

document
  .querySelector(".image-container")
  .addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });

document
  .querySelector(".image-container")
  .addEventListener("touchend", function (e) {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;

    handleSwipe();
  });

// Função para dar touch scroll na tela responsiva
function handleSwipe() {
  const deltaX = endX - startX;
  const deltaY = endY - startY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // Deslizar na horizontal
    if (deltaX > 0) {
      scrollImages(-1);
    } else {
      scrollImages(1);
    }
  }
}

// Função para rolar as imagens com a seta
function scrollImages(direction) {
  const container = document.querySelector(".image-container");
  const scrollAmount = 400; // Ajuste conforme necessário
  container.scrollLeft += scrollAmount * direction;
}

// Função para abrir o modal
function openModal(imageSrc) {
  const modalImage = document.getElementById("modalImage");
  modalImage.style.width = "auto";
  modalImage.style.marginLeft = "6.5%";
  modalImage.style.maxWidth = "90%"; // Você pode ajustar isso conforme necessário
  modalImage.style.maxHeight = "90vh"; // Você pode ajustar isso conforme necessário
  modalImage.style.transform = "translateX(10%)";

  // Cria uma nova imagem para verificar as dimensões
  const tempImage = new Image();
  tempImage.src = imageSrc;

  tempImage.onload = function () {
    const aspectRatio = tempImage.width / tempImage.height;

    // Obtém a largura da janela
    var windowWidth = window.innerWidth;

    // Verifica se a largura da janela é menor ou igual a 440px e Verifica se a imagem é horizontal
    if (windowWidth <= 425 && windowWidth >= 376 && aspectRatio > 1) {
      // Ajusta o estilo do modalImage para telas de celular com imagens horizontais
      modalImage.style.width = "auto";
      modalImage.style.maxWidth = "380px";
      modalImage.style.maxHeight = "380px";
      // modalImage.style.marginLeft = "10%";
      // modalImage.style.left = "10%";
      modalImage.style.transform = "translateX(-6%)";
    } else if (windowWidth <= 375 && windowWidth >= 321 && aspectRatio > 1) {
      // Ajusta o estilo do modalImage para telas maiores com imagens horizontais
      modalImage.style.width = "auto";
      modalImage.style.maxWidth = "360px";
      modalImage.style.maxHeight = "360px";
      modalImage.style.marginLeft = "6%";
      modalImage.style.left = "6%";
      modalImage.style.transform = "translateX(-5%)";
    } else if (windowWidth <= 320 && aspectRatio > 1) {
      // Ajusta o estilo do modalImage para telas maiores com imagens horizontais
      modalImage.style.width = "auto";
      modalImage.style.maxWidth = "310px";
      modalImage.style.maxHeight = "310px";
      modalImage.style.marginLeft = "5%";
      modalImage.style.left = "5%";
      modalImage.style.transform = "translateX(-5%)";
    } else if (windowWidth > 440 && aspectRatio > 1) {
      // Ajusta o estilo do modalImage para telas maiores com imagens horizontais
      modalImage.style.width = "850px"; // Ajuste conforme necessário
      modalImage.style.maxWidth = "850px";
      modalImage.style.maxHeight = "850px";
      modalImage.style.marginLeft = "-35%";
      modalImage.style.left = "-35%";
      modalImage.style.transform = "translateX(0)";
    }

    modalImage.src = imageSrc;

    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    modal.show();
  };
}


//Nova função para validar proporções
// function openModal(imageSrc) {
//     const modalImage = document.getElementById('modalImage');
//     modalImage.style.width = 'auto';
//     modalImage.style.maxWidth = '83%';
//     modalImage.style.maxHeight = '83vh';
//     modalImage.style.marginLeft = '14%';
//     modalImage.style.marginRight = 'auto';

//     // Cria uma nova imagem para verificar as dimensões
//     const tempImage = new Image();
//     tempImage.src = imageSrc;

//     tempImage.onload = function () {
//         const aspectRatio = tempImage.width / tempImage.height;

//         // Verifica se a imagem é horizontal
//         if (aspectRatio > 1) {
//             modalImage.style.width = 'auto';
//             modalImage.style.maxWidth = '750px';
//             modalImage.style.maxHeight = '750px';
//             modalImage.style.marginLeft = '0%';
//             modalImage.style.left = '15%';
//             modalImage.style.transform = 'translateX(-15%)';

//             // Ajusta a posição do botão para imagens horizontais
//             const closeButton = document.querySelector('.btn-close');
//             closeButton.style.top = '1em';
//             closeButton.style.right = '17em';
//         } else {
//             // Ajusta a posição do botão para imagens verticais
//             const closeButton = document.querySelector('.btn-close');
//             closeButton.style.top = '0.5em';
//             closeButton.style.right = '30em';
//         }

//         modalImage.src = imageSrc;

//         const modal = new bootstrap.Modal(document.getElementById('imageModal'));
//         modal.show();
//     };
// }
