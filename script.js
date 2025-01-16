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
let quantidadeDeDias = 364; //89
let grupoStorageSelecionado;

const grupo = {
  a: {
    inicio: 0,
    grupo: 'A',
  },
  b: {
    inicio: 4,
    grupo: 'B',
  },
  c: {
    inicio: 2,
    grupo: 'C',
  },
  d: {
    inicio: 8,
    grupo: 'D',
  },
  e: {
    inicio: 6,
    grupo: 'E',
  },
  reiniciar(x) {
    x.inicio < 9 ? (x.inicio += 1) : (x.inicio = 0);
  },
};

//Ano 2025 a partir do dia 01/01/2025
const grupo12 = {
  a: {
    inicio: 1,
    grupo: 'A',
  },
  b: {
    inicio: 5,
    grupo: 'B',
  },
  c: {
    inicio: 3,
    grupo: 'C',
  },
  d: {
    inicio: 9,
    grupo: 'D',
  },
  e: {
    inicio: 7,
    grupo: 'E',
  },
  reiniciar(x) {
    x.inicio < 9 ? (x.inicio += 1) : (x.inicio = 0);
  },
};

// //Ano 2025 a partir do dia 01/01/2025
// const grupo12 = {
//   a: {
//     inicio: 5,
//     grupo: 'A',
//   },
//   b: {
//     inicio: 9,
//     grupo: 'B',
//   },
//   c: {
//     inicio: 7,
//     grupo: 'C',
//   },
//   d: {
//     inicio: 3,
//     grupo: 'D',
//   },
//   e: {
//     inicio: 1,
//     grupo: 'E',
//   },
//   reiniciar(x) {
//     x.inicio < 9 ? (x.inicio += 1) : (x.inicio = 0);
//   },
// };

// const grupo12 = {
//   a: {
//     inicio: 8,
//     grupo: 'A',
//   },
//   b: {
//     inicio: 2,
//     grupo: 'B',
//   },
//   c: {
//     inicio: 0,
//     grupo: 'C',
//   },
//   d: {
//     inicio: 6,
//     grupo: 'D',
//   },
//   e: {
//     inicio: 4,
//     grupo: 'E',
//   },
//   reiniciar(x) {
//     x.inicio < 9 ? (x.inicio += 1) : (x.inicio = 0);
//   },
// };

//Função que realiza procedimentos para criação e exibição da escala.

const hoje = new Date();

const exibirEscala = function (
  qtdeDias,
  dataStatus = '01/01/2025',
  grupoSelecionado = localStorage.getItem('grupoStorageSelecionado')
) {
  const dataInicial = new Date(dataStatus);
  const escala = ['7', '7', '15', '15', '23', '23', 'F', 'F', 'F', 'F'];
  const escala12 = ['7', '7', '19', '19', 'F', 'F', 'F', 'F', 'F', 'F'];
  const diaSemana = [
    'domingo',
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
  ];

  const dt = new Date(dataInicial);
  // const hoje = new Date();
  // console.log('hoje: ', hoje);
  const dataTransicao = new Date('05/19/2023');

  let html = '';

  while (statusQtdeDias <= qtdeDias) {
    let evento = new Date(dt);
    // console.log(dataTransicao);

    const fimDeSemana =
      evento.getDay() === 0 || evento.getDay() === 6
        ? 'grid-item-weekend'
        : 'grid-item';

    if (dataTransicao <= evento) {
      html = `
      <div>${
        evento.toLocaleDateString('pt-BR') === '19/05/2023' ? '<hr>' : ''
      }</div>
      <div class="grid-container">
        <div class="${fimDeSemana}" id="${
        hoje.toLocaleDateString('pt-BR') === evento.toLocaleDateString('pt-BR')
          ? 'hoje'
          : ''
      }">${evento.toLocaleDateString('pt-BR')}<div class='dayweek'>${
        diaSemana[evento.getDay()]
      }</div></div>
        <div data-dia="${evento.toLocaleDateString('pt-BR')}" data-grupo="${
        grupo.a.grupo
      }" class="${fimDeSemana}${
        grupo.a.grupo === grupoSelecionado ? ' grid-grupo' : ''
      } ${escala12[grupo12.a.inicio] === 'F' ? 'folga' : ''}">${
        escala12[grupo12.a.inicio]
      }</div>
        <div data-dia="${evento.toLocaleDateString('pt-BR')}" data-grupo="${
        grupo.b.grupo
      }" class="${fimDeSemana}${
        grupo.b.grupo === grupoSelecionado ? ' grid-grupo' : ''
      }  ${escala12[grupo12.b.inicio] === 'F' ? 'folga' : ''}">${
        escala12[grupo12.b.inicio]
      }</div>
        <div data-dia="${evento.toLocaleDateString('pt-BR')}" data-grupo="${
        grupo.c.grupo
      }" class="${fimDeSemana}${
        grupo.c.grupo === grupoSelecionado ? ' grid-grupo' : ''
      }  ${escala12[grupo12.c.inicio] === 'F' ? 'folga' : ''}">${
        escala12[grupo12.c.inicio]
      }</div>
        <div data-dia="${evento.toLocaleDateString('pt-BR')}" data-grupo="${
        grupo.d.grupo
      }" class="${fimDeSemana}${
        grupo.d.grupo === grupoSelecionado ? ' grid-grupo' : ''
      }  ${escala12[grupo12.d.inicio] === 'F' ? 'folga' : ''}">${
        escala12[grupo12.d.inicio]
      }</div>
        <div data-dia="${evento.toLocaleDateString('pt-BR')}" data-grupo="${
        grupo.e.grupo
      }" class="${fimDeSemana}${
        grupo.e.grupo === grupoSelecionado ? ' grid-grupo' : ''
      }  ${escala12[grupo12.e.inicio] === 'F' ? 'folga' : ''}">${
        escala12[grupo12.e.inicio]
      }</div>
      </div>
      `;

      //Reinicializando contador dos grupos.
      grupo12.reiniciar(grupo12.a);
      grupo12.reiniciar(grupo12.b);
      grupo12.reiniciar(grupo12.c);
      grupo12.reiniciar(grupo12.d);
      grupo12.reiniciar(grupo12.e);
    } else {
      html = `
      <div class="grid-container">
        <div class="${fimDeSemana}" id="${
        hoje.toLocaleDateString('pt-BR') === evento.toLocaleDateString('pt-BR')
          ? 'hoje'
          : ''
      }">${evento.toLocaleDateString('pt-BR')}<div class='dayweek'>${
        diaSemana[evento.getDay()]
      }</div></div>
        <div data-dia="${evento.toLocaleDateString('pt-BR')}" data-grupo="${
        grupo.a.grupo
      }" class="${fimDeSemana}${
        grupo.a.grupo === grupoSelecionado ? ' grid-grupo' : ''
      }  ${escala[grupo.a.inicio] === 'F' ? 'folga' : ''}">${
        escala[grupo.a.inicio]
      }</div>
        <div data-dia="${evento.toLocaleDateString('pt-BR')}" data-grupo="${
        grupo.b.grupo
      }" class="${fimDeSemana}${
        grupo.b.grupo === grupoSelecionado ? ' grid-grupo' : ''
      }  ${escala[grupo.b.inicio] === 'F' ? 'folga' : ''}">${
        escala[grupo.b.inicio]
      }</div>
        <div data-dia="${evento.toLocaleDateString('pt-BR')}" data-grupo="${
        grupo.c.grupo
      }" class="${fimDeSemana}${
        grupo.c.grupo === grupoSelecionado ? ' grid-grupo' : ''
      }  ${escala[grupo.c.inicio] === 'F' ? 'folga' : ''}">${
        escala[grupo.c.inicio]
      }</div>
        <div data-dia="${evento.toLocaleDateString('pt-BR')}" data-grupo="${
        grupo.d.grupo
      }" class="${fimDeSemana}${
        grupo.d.grupo === grupoSelecionado ? ' grid-grupo' : ''
      }  ${escala[grupo.d.inicio] === 'F' ? 'folga' : ''}">${
        escala[grupo.d.inicio]
      }</div>
        <div data-dia="${evento.toLocaleDateString('pt-BR')}" data-grupo="${
        grupo.e.grupo
      }" class="${fimDeSemana}${
        grupo.e.grupo === grupoSelecionado ? ' grid-grupo' : ''
      }  ${escala[grupo.e.inicio] === 'F' ? 'folga' : ''}">${
        escala[grupo.e.inicio]
      }</div>
      </div>
      `;

      //Reinicializando contador dos grupos.
      grupo.reiniciar(grupo.a);
      grupo.reiniciar(grupo.b);
      grupo.reiniciar(grupo.c);
      grupo.reiniciar(grupo.d);
      grupo.reiniciar(grupo.e);
    }

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

//Seleciona a coluna destacando o grupo selecionado
labelGrupoA.addEventListener('click', () => {
  if (localStorage.getItem('grupoStorageSelecionado') === 'A') {
    localStorage.setItem('grupoStorageSelecionado', null);
    exibirEscala(quantidadeDeDias, '01/01/2025', null);
  } else {
    localStorage.setItem('grupoStorageSelecionado', 'A');
    exibirEscala(quantidadeDeDias, '01/01/2025', 'A');
  }
  location.reload(true);
  // scrollingDiaAtual();
});

labelGrupoB.addEventListener('click', () => {
  if (localStorage.getItem('grupoStorageSelecionado') === 'B') {
    localStorage.setItem('grupoStorageSelecionado', null);
    exibirEscala(quantidadeDeDias, '01/01/2025', null);
  } else {
    localStorage.setItem('grupoStorageSelecionado', 'B');
    exibirEscala(quantidadeDeDias, '01/01/2025', 'B');
  }
  location.reload(true);
  // scrollingDiaAtual();
});

labelGrupoC.addEventListener('click', () => {
  if (localStorage.getItem('grupoStorageSelecionado') === 'C') {
    localStorage.setItem('grupoStorageSelecionado', null);
    exibirEscala(quantidadeDeDias, '01/01/2025', null);
  } else {
    localStorage.setItem('grupoStorageSelecionado', 'C');
    exibirEscala(quantidadeDeDias, '01/01/2025', 'C');
  }
  location.reload(true);
  // scrollingDiaAtual();
});

labelGrupoD.addEventListener('click', () => {
  if (localStorage.getItem('grupoStorageSelecionado') === 'D') {
    localStorage.setItem('grupoStorageSelecionado', null);
    exibirEscala(quantidadeDeDias, '01/01/2025', null);
  } else {
    localStorage.setItem('grupoStorageSelecionado', 'D');
    exibirEscala(quantidadeDeDias, '01/01/2025', 'D');
  }
  location.reload(true);
  // scrollingDiaAtual();
});

labelGrupoE.addEventListener('click', () => {
  if (localStorage.getItem('grupoStorageSelecionado') === 'E') {
    localStorage.setItem('grupoStorageSelecionado', null);
    exibirEscala(quantidadeDeDias, '01/01/2025', null);
  } else {
    localStorage.setItem('grupoStorageSelecionado', 'E');
    exibirEscala(quantidadeDeDias, '01/01/2025', 'E');
  }
  location.reload(true);
  // scrollingDiaAtual();
});

//Executa a função exibirEscala após o término do carregamento do documento.
document.addEventListener(
  'DOMContentLoaded',
  exibirEscala(quantidadeDeDias, '01/01/2025')
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

//Scrolling para o dia atual após carregamento do documento.
window.addEventListener('load', scrollingDiaAtual);

//Scrolling para o dia atual após documento voltar a ficar visível.
document.addEventListener('visibilitychange', () => {
  // console.log(hoje === new Date());
  if (document.visibilityState === 'visible') {
    const diaAtualCheck = new Date();
    if (
      hoje.toLocaleDateString('pt-BR') !==
      diaAtualCheck.toLocaleDateString('pt-BR')
    ) {
      location.reload(true);
    } else {
      scrollingDiaAtual();
    }
  }
});

//Registrando o serviveWorker.js

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then((res) => console.log('service worker registered'))
      .catch((err) => console.log('service worker not registered', err));
  });
}

/* //Atualiza a página quando há nova versão do serviceWorker.js
let refreshing = false;
navigator.serviceWorker.addEventListener('controllerchange', () => {
  if (!refreshing) {
    window.location.reload();
    refreshing = true;
  }
}); */
