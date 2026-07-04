// ============================================
// SISTEMA DE BINGO - PROJETO FINAL UC2
// Equipe: 3
// Integrante 1 - Messias Kaynâ
// Integrante 2 - Wemelly 
// Integrante 3 - Eduarda Ferreira
// Integrante 4 - Lucas Leite
// Integrante 5 - Dacyrrôse Melo
// ============================================

const readlineSync = require("readline-sync");

// ============================================
// INTEGRANTE 1 - Estrutura inicial + Menu
// ============================================

function iniciarSistema() {
  console.log("Bem-vindo ao BINGO da EQUIPE 3 da Turma 130!");
  const nome = readlineSync.question("Qual é o seu nome? ");
  console.log("Olá " + nome + ", vamos iniciar o bingo!");

}

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

iniciarSistema();
menuBingo();