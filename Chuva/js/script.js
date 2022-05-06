let startDiscussion = document.getElementById("sharing-session")
let showAndHideComments = document.getElementById("hidden-comments");
let form = document.getElementById("form-message");
let confirmShipping = document.getElementById("confirm-shipping");

let hideText = document.getElementById("hideText");
let showText = document.getElementById("showText");


/* Função para mostrar conteúdo do resumo */
function showContent() {
  if (hideText.style.display === "none") {
    hideText.style.display = "inline";
    showText.style.display = "none";
  } else {
    hideText.style.display = "none";
    showText.style.display = "inline";
  }
} /* sharing-session */

/* Interação do formulário */

function createTopic() {
  startDiscussion.style.display = "none";
  form.style.display = "block";
  confirmShipping.style.display = "none";
}

/* Voltar campo compartilhamento */
const initialPosition = () => {
    startDiscussion.style.display = "block";
    form.style.display = "none";
    confirmShipping.style.display = "none";
  }

/* Inviar pergunta */
function sendPost() {
  form.style.display = "none";
  confirmShipping.style.display = "block";
  setInterval(initialPosition, 10000);
}

/* Mostrar comentario */

function showComments() {
  if (showAndHideComments.style.display === "none") {
    showAndHideComments.style.display = "block";
  } else {
    showAndHideComments.style.display = "none"
  }
}