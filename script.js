//Definindo os elementos do DOM que serão manipulados.
const container = document.querySelector('main');
const labelGrupos = document.getElementById('labelGrupos');
const labelGrupoA = document.getElementById('labelGrupoA');
const labelGrupoB = document.getElementById('labelGrupoB');
const labelGrupoC = document.getElementById('labelGrupoC');
const labelGrupoD = document.getElementById('labelGrupoD');
const labelGrupoE = document.getElementById('labelGrupoE');

let statusQtdeDias = 0;
let dataStop;
let quantidadeDeDias = 89;

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

//Função que realiza procedimentos para criação e exibição da escala.
const exibirEscala = function (qtdeDias, dataStatus = '01/01/2023') {
  const dataInicial = new Date(dataStatus);
  const escala = ['7', '7', '15', '15', '23', '23', 'F', 'F', 'F', 'F'];
  const diaSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

  const dt = new Date(dataInicial);
  const hoje = new Date();

  while (statusQtdeDias <= qtdeDias) {
    let evento = new Date(dt);
    const fimDeSemana =
      evento.getDay() === 0 || evento.getDay() === 6
        ? 'grid-item-weekend'
        : 'grid-item';

    let html = `
    <div class="grid-container">
      <div class="${fimDeSemana}" id="${
      hoje.toLocaleDateString('pt-BR') === evento.toLocaleDateString('pt-BR')
        ? 'hoje'
        : ''
    }">${evento.toLocaleDateString('pt-BR')}<div class='dayweek'>${
      diaSemana[evento.getDay()]
    }</div></div>
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

    //Reinicializando contador dos grupos.
    grupo.reiniciar(grupo.a);
    grupo.reiniciar(grupo.b);
    grupo.reiniciar(grupo.c);
    grupo.reiniciar(grupo.d);
    grupo.reiniciar(grupo.e);

    //Adiciona as datas da escala antes do fim do elemento main.
    container.insertAdjacentHTML('beforeend', html);
    dt.setDate(dt.getDate() + 1);
    statusQtdeDias += 1;
  }

  //Definindo a data que completa um ciclo de atualização da função exibirEscala().
  dataStop = dt;
  statusQtdeDias = 0;
};

//Altera temporariamente a visualização do grupos entre letra/número. Nos eventos touchstart/end e mousedown/up.
labelGrupos.addEventListener('touchstart', () => {
  labelGrupoA.innerText = '5';
  labelGrupoB.innerText = '4';
  labelGrupoC.innerText = '1';
  labelGrupoD.innerText = '3';
  labelGrupoE.innerText = '2';
});
labelGrupos.addEventListener('touchend', () => {
  labelGrupoA.innerText = 'A';
  labelGrupoB.innerText = 'B';
  labelGrupoC.innerText = 'C';
  labelGrupoD.innerText = 'D';
  labelGrupoE.innerText = 'E';
});

labelGrupos.addEventListener('mousedown', () => {
  labelGrupoA.innerText = '5';
  labelGrupoB.innerText = '4';
  labelGrupoC.innerText = '1';
  labelGrupoD.innerText = '3';
  labelGrupoE.innerText = '2';
});
labelGrupos.addEventListener('mouseup', () => {
  labelGrupoA.innerText = 'A';
  labelGrupoB.innerText = 'B';
  labelGrupoC.innerText = 'C';
  labelGrupoD.innerText = 'D';
  labelGrupoE.innerText = 'E';
});

//Executa a função exibirEscala após o término do carregamento do documento.
document.addEventListener(
  'DOMContentLoaded',
  exibirEscala(quantidadeDeDias, '01/01/2023')
);

//Verificando se estamos no fim do documento para poder exibir mais datas.
window.addEventListener('scroll', () => {
  if (
    window.scrollY + window.innerHeight >=
    window.document.documentElement.scrollHeight - 100
  ) {
    exibirEscala(quantidadeDeDias, dataStop);
  }
});

//Scrolling para o dia atual.
const scrollingDiaAtual = function () {
  window.scroll({
    top:
      document.querySelector('#hoje').offsetTop - window.innerHeight / 2 + 60,
    left: 0,
    behavior: 'smooth',
  });
};

//Scrooling para o dia atual após carregamento do documento.
window.addEventListener('load', scrollingDiaAtual);

//Registrando o serviveWorker.js

/* if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then((res) => console.log('service worker registered'))
      .catch((err) => console.log('service worker not registered', err));
  });
} */
