// ============================================
// SISTEMA DE BINGO - PROJETO FINAL UC2
// Equipe: 3
// ============================================

const readlineSync = require("readline-sync");

const NUMERO_MINIMO = 1;
const NUMERO_MAXIMO = 75;

let bingo = {
  numerosDisponiveis: [], 
  numerosSorteados: [],   
  ultimoNumero: null      
};

// ================================================
// 1 - Messias: Estrutura inicial + Menu
// ================================================

function iniciarSistema() {
  console.log("Bem-vindo ao BINGO da EQUIPE 3 da Turma 130!");
  const nome = readlineSync.question("Qual é o seu nome? ");
  console.log("Olá " + nome + ", vamos iniciar o bingo!");
  console.log("Numeros disponiveis: " + popularNumerosDisponiveis());
}

console.log("");

function menuBingo() {
  let continuar = true;
  while (continuar) {
    console.log("Menu Bingo");
    console.log("1 - Sortear número");
    console.log("2 - Ver números");
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

// ==========================================================
// 2 - Dacy: Popular números disponíveis + Reiniciar o bingo
// ==========================================================

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



iniciarSistema();
menuBingo();