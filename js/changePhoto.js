function trocarImagem() {
  var imagem = document.getElementById("imagem");
  if (window.innerWidth <= 425) {
    imagem.innerHTML =
      '<img class="img-responsive" src="/images/SobreImg/SobreBG.png" alt="">';
  } else {
    imagem.innerHTML =
      '<img class="img-full" src="/images/SobreImg/VictorFace.png" alt="">';
  }
}

// Chame a função inicialmente
trocarImagem();

// Adicione um ouvinte de evento de redimensionamento
window.addEventListener("resize", function () {
  trocarImagem();
});
