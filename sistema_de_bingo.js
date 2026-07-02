const readlineSync = require("readline-sync");

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
      console.log("1 - Sortear número");
    } else if (opcao === 2) {
      console.log("2 - Ver números");
    } else if (opcao === 3) {
      console.log("3 - Ver números sorteados");
    } else if (opcao === 4) {
      console.log("4 - Pesquisar número ");
    } else if (opcao === 5) {
      console.log("5 - Registro do sistema");
    } else if (opcao === 6) {
      console.log("6 - Reiniciar bingo");
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
