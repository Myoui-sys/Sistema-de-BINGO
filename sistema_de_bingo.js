// ============================================
// SISTEMA DE BINGO - PROJETO FINAL UC2
// Equipe: 3
// ============================================

const readlineSync = require("readline-sync");

const NUMERO_MINIMO = 1;
const NUMERO_MAXIMO = 75;

let bingo = {
  numerosDisponiveis: [], // vetor com os números que ainda podem ser sorteados
  numerosSorteados: [],   
  ultimoNumero: null       
};

function iniciarSistema() {
  console.log("Bem-vindo ao BINGO da EQUIPE 3 da Turma 130!");
  const nome = readlineSync.question("Qual é o seu nome? ");
  console.log("Olá " + nome + ", vamos iniciar o bingo!");
  console.log("Numeros disponiveis: " + popularNumerosDisponiveis());
}

function menuBingo() {
  let continuar = true;
  while (continuar) {
    console.log("Menu Bingo");
    console.log("1 - Sortear número");
    console.log("2 - Ver números sorteados em ordem crescente");
    console.log("3 - Ver números sorteados");
    console.log("4 - Pesquisar número ");
    console.log("5 - Registro do sistema");
    console.log("6 - Reiniciar bingo");
    console.log("7 - Encerrar programa");

    const opcao = readlineSync.questionInt("Selecione uma opção: ");

    if (opcao === 1) {
      sortearNumero();
    } else if (opcao === 2) {
      mostrarOrdenados();
    } else if (opcao === 3) {
      mostrarHistorico();
    } else if (opcao === 4) {
      pesquisarNumero();
    } else if (opcao === 5) {
      mostrarRegistroSistema();
    } else if (opcao === 6) {
      reiniciarBingo();
    } else if (opcao === 7) {
      continuar = false;
      console.log("Encerrando sistema...");
    } else {
      console.log("Selecione uma das opções acima!");
    }
  }
}

function popularNumerosDisponiveis() {
  for (let i = NUMERO_MINIMO; i <= NUMERO_MAXIMO; i++) {
    bingo.numerosDisponiveis.push(i);
  }
  return bingo.numerosDisponiveis;
}

function reiniciarBingo() {
  bingo.numerosDisponiveis.splice(0, bingo.numerosDisponiveis.length);
  bingo.numerosSorteados.splice(0, bingo.numerosSorteados.length);
  popularNumerosDisponiveis();
  bingo.ultimoNumero = null;
}

function sortearNumero() {
  if (bingo.numerosDisponiveis.length === 0) {
    console.log("Todos os números já foram sorteados");
    return;
  }

  let sorteioNumero = Math.floor(Math.random() * bingo.numerosDisponiveis.length);
  let numeroSorteado = bingo.numerosDisponiveis.splice(sorteioNumero, 1)[0];

  bingo.numerosSorteados.push(numeroSorteado);
  bingo.ultimoNumero = numeroSorteado;

  console.log("Número sorteado: " + numeroSorteado);
}

function mostrarHistorico() {
  console.log(bingo.numerosSorteados);
}

function mostrarOrdenados() {
  console.log(bingo.numerosSorteados.sort((a, b) => a - b));
}

function pesquisarNumero() {
  const entradaNumero = readlineSync.questionInt("Informe o numero: ");

  for (let numeroEncontrado of bingo.numerosSorteados) {
    if (encontrarNumero === entradaNumero) {
      console.log("Número já sorteado");
    } else {
      console.log("Número ainda disponível para sorteio")
    }
  }
}

function mostrarRegistroSistema() {
  console.log(
    "Quantidade de numeros disponiveis: " + bingo.numerosDisponiveis.length,
  );
  console.log(
    "Quantidade de numeros sorteados: " + bingo.numerosSorteados.length,
  );
  console.log("Ultimo numero sorteado: " + bingo.ultimoNumero);
}


iniciarSistema();
menuBingo();