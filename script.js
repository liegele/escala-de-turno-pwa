const container = document.querySelector('main');

const exibirEscala = function () {
  const dataInicial = new Date('01/01/2023');
  const dataFinal = new Date('12/31/2025');
  const escala = ['7', '7', '15', '15', '23', '23', 'F', 'F', 'F', 'F'];
  const diaSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  const grupo = {
    a: {
      inicio: 0,
    },
    b: {
      inicio: 4,
    },
    c: {
      inicio: 2,
    },
    d: {
      inicio: 8,
    },
    e: {
      inicio: 6,
    },
    reiniciar(x) {
      x.inicio < 9 ? (x.inicio += 1) : (x.inicio = 0);
    },
  };

  let dt = new Date(dataInicial);

  while (dt <= dataFinal) {
    let evento = new Date(dt);
    const fimDeSemana =
      evento.getDay() === 0 || evento.getDay() === 6
        ? 'grid-item-weekend'
        : 'grid-item';
    let html = `
    <div class="grid-container">
      <div class="${fimDeSemana}">${evento.toLocaleDateString(
      'pt-BR'
    )}<div class='dayweek'>${diaSemana[evento.getDay()]}</div></div>
      <div class="${fimDeSemana} ${
      escala[grupo.a.inicio] === 'F' ? 'folga' : ''
    }">${escala[grupo.a.inicio]}</div>
      <div class="${fimDeSemana} ${
      escala[grupo.b.inicio] === 'F' ? 'folga' : ''
    }">${escala[grupo.b.inicio]}</div>
      <div class="${fimDeSemana} ${
      escala[grupo.c.inicio] === 'F' ? 'folga' : ''
    }">${escala[grupo.c.inicio]}</div>
      <div class="${fimDeSemana} ${
      escala[grupo.d.inicio] === 'F' ? 'folga' : ''
    }">${escala[grupo.d.inicio]}</div>
      <div class="${fimDeSemana} ${
      escala[grupo.e.inicio] === 'F' ? 'folga' : ''
    }">${escala[grupo.e.inicio]}</div>
    </div>
    `;

    /* grupo.a.inicio < 9 ? (grupo.a.inicio += 1) : (grupo.a.inicio = 0);
    grupo.b.inicio < 9 ? (grupo.b.inicio += 1) : (grupo.b.inicio = 0);
    grupo.c.inicio < 9 ? (grupo.c.inicio += 1) : (grupo.c.inicio = 0);
    grupo.d.inicio < 9 ? (grupo.d.inicio += 1) : (grupo.d.inicio = 0);
    grupo.e.inicio < 9 ? (grupo.e.inicio += 1) : (grupo.e.inicio = 0); */
    grupo.reiniciar(grupo.a);
    grupo.reiniciar(grupo.b);
    grupo.reiniciar(grupo.c);
    grupo.reiniciar(grupo.d);
    grupo.reiniciar(grupo.e);

    container.insertAdjacentHTML('beforeend', html);
    dt.setDate(dt.getDate() + 1);
  }
};

document.addEventListener('DOMContentLoaded', exibirEscala);

//Registrando o serviveWorker.js

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then((res) => console.log('service worker registered'))
      .catch((err) => console.log('service worker not registered', err));
  });
}
