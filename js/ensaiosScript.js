let startX;
let startY;
let endX;
let endY;

document.querySelector('.image-container').addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.querySelector('.image-container').addEventListener('touchend', function (e) {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;

    handleSwipe();
});

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
