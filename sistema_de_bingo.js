// ============================================
// SISTEMA DE BINGO - PROJETO FINAL UC2
// Equipe: 3
// ============================================

const readlineSync = require("readline-sync");

const NUMERO_MINIMO = 1;
const NUMERO_MAXIMO = 75;

let bingo = {
  numerosDisponiveis: [], // vetor com os números que ainda podem ser sorteados
  numerosSorteados: [],  // vetor com os números que já foram sorteados
  ultimoNumero: null     // último número sorteado  
};

function iniciarSistema() { // Função para iniciar o sistema
  console.log("Bem-vindo ao BINGO da EQUIPE 3 da Turma 130!");
  const nome = readlineSync.question("Qual é o seu nome? ");
  console.log("Olá " + nome + ", vamos iniciar o bingo!");
}

function menuBingo() { // Função para exibir o menu do bingo
  let continuar = true; // variável de controle para o loop do menu
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
      continuar = false; // encerra o loop do menu
      console.log("Encerrando sistema...");
    } else {
      console.log("Selecione uma das opções acima!");
    }
  }
}

function popularNumerosDisponiveis() { // Função para popular o vetor de números disponíveis
  for (let i = NUMERO_MINIMO; i <= NUMERO_MAXIMO; i++) { // adiciona os números de 1 a 75 ao vetor de números disponíveis
    bingo.numerosDisponiveis.push(i); // adiciona o número ao vetor
  }
}

function reiniciarBingo() {
  bingo.numerosDisponiveis.splice(0, bingo.numerosDisponiveis.length); // limpa o vetor de números disponíveis
  bingo.numerosSorteados.splice(0, bingo.numerosSorteados.length); // limpa o vetor de números sorteados
  popularNumerosDisponiveis(); // repopula o vetor de números disponíveis
  bingo.ultimoNumero = null; // reseta o último número sorteado
  console.log("Bingo reiniciado com sucesso!");
}

function sortearNumero() { // Função para sortear um número
  if (bingo.numerosDisponiveis.length === 0) { // verifica se ainda há números disponíveis para sortear
    console.log("Todos os números já foram sorteados");
    return; // encerra a função se não houver mais números disponíveis
  }

  let sorteioNumero = Math.floor(Math.random() * bingo.numerosDisponiveis.length); // sorteia um índice aleatório do vetor de números disponíveis
  let numeroSorteado = bingo.numerosDisponiveis.splice(sorteioNumero, 1)[0]; // remove o número sorteado do vetor de números disponíveis e armazena em uma variável

  bingo.numerosSorteados.push(numeroSorteado); // adiciona o número sorteado ao vetor de números sorteados
  bingo.ultimoNumero = numeroSorteado; // atualiza o último número sorteado

  console.log("Número sorteado: " + numeroSorteado); 
}

function mostrarHistorico() { // Função para mostrar o histórico de números sorteados
  console.log(bingo.numerosSorteados);
}

function mostrarOrdenados() {
  let copiaNumerosSorteados = bingo.numerosSorteados.slice(); // cria uma cópia do vetor de números sorteados
  copiaNumerosSorteados.sort((a, b) => a - b);
  console.log(copiaNumerosSorteados); // exibe o vetor de números sorteados em ordem crescente
}

function pesquisarNumero() {
  const entradaNumero = readlineSync.questionInt("Informe o numero: "); 

  if (entradaNumero < NUMERO_MINIMO || entradaNumero > NUMERO_MAXIMO) { // verifica se o número informado está dentro do intervalo permitido
    console.log("Número inválido! Informe um número entre " + NUMERO_MINIMO + " e " + NUMERO_MAXIMO);
    return; // encerra a função se o número for inválido
  }
  
  let encontrado = false; // variável de controle para verificar se o número foi encontrado
  for (let numeroEncontrado of bingo.numerosSorteados) { // percorre o vetor de números sorteados
    if (numeroEncontrado === entradaNumero) { // verifica se o número informado pelo usuário está no vetor de números sorteados
      encontrado = true; // atualiza a variável de controle para verdadeiro se o número for encontrado
    }
  }

  if (encontrado) { // verifica se o número foi encontrado
  console.log("Esse número já foi sorteado!");
  } else {
  console.log("Esse número ainda não foi sorteado.");
}

}

function mostrarRegistroSistema() { // Função para mostrar o registro do sistema
  console.log(
    "Quantidade de numeros disponiveis: " + bingo.numerosDisponiveis.length,
  ); // exibe a quantidade de números disponíveis para sortear
  console.log(
    "Quantidade de numeros sorteados: " + bingo.numerosSorteados.length,
  ); // exibe a quantidade de números sorteados
  console.log("Ultimo numero sorteado: " + bingo.ultimoNumero); // exibe o último número sorteado
}


iniciarSistema(); // chama a função para iniciar o sistema
popularNumerosDisponiveis(); // chama a função para popular o vetor de números disponíveis
menuBingo(); // chama a função para exibir o menu do bingo