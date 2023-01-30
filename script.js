const container = document.querySelector('main');

const exibirEscala = function () {
  const dataInicial = new Date('01/01/2023');
  const dataFinal = new Date('12/31/2025');
  let dataArray = [];
  let dt = new Date(dataInicial);

  while (dt <= dataFinal) {
    let event = new Date(dt);
    let html = `
    <div class="grid-container">
      <div class="grid-item">${event.toLocaleDateString('pt-BR')}</div>
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
    </div>`;
    // dataArray.push(event.toLocaleDateString('pt-BR'));
    container.insertAdjacentHTML('beforeend', html);
    dt.setDate(dt.getDate() + 1);
  }

  console.log(dataArray);
};

document.addEventListener('DOMContentLoaded', exibirEscala);

//Registrando o serviveWorker.js

/* if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then((res) => console.log('service worker registered'))
      .catch((err) => console.log('service worker not registered', err));
  });
} */
