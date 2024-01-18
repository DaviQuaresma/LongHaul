function showCustomAlert() {
    var customAlert = document.getElementById('custom-alert');
    var messageElement = document.getElementById('alert-message');

    // Personalize a mensagem do alerta aqui
    var message = 'Esta é uma mensagem personalizada!';

    messageElement.innerHTML = message;
    customAlert.style.display = 'block';
}

function closeCustomAlert() {
    var customAlert = document.getElementById('custom-alert');
    customAlert.style.display = 'none';
}
