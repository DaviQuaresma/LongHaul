//Function para rolamento das fotos com a seta

function scrollImages(direction) {
          const container = document.querySelector('.image-container');
          const scrollAmount = 400; // Ajuste conforme necessário
          container.scrollLeft += scrollAmount * direction;
}
  
//Function para clicar e expandir fotos

function openModal(imageSrc) {
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modal.show();
}

function closeModal() {
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.hide();
}
