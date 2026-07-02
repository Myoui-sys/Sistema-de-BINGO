// ============================================
// SISTEMA DE BINGO - PROJETO FINAL UC2 - TRANSFORME-SE TURMA 130
// Equipe: 
// Integrante 1 - Messias Kaynã
// Integrante 2 -
// Integrante 3 -
// Integrante 4 -
// Integrante 5 - Dacyrrôse Melo
// ============================================

const readline = require('readline-sync');

// --- CONSTANTES ---
// Regra: números do bingo vão de 1 a 75
const NUMERO_MINIMO = 1;
const NUMERO_MAXIMO = 75;

// --- OBJETO PRINCIPAL DO SISTEMA ---
// Todo o estado do bingo fica guardado aqui dentro.
// IMPORTANTE: não mudem os nomes dessas chaves, todo mundo vai usar elas.
let bingo = {
  numerosDisponiveis: [], // vetor com os números que ainda podem ser sorteados
  numerosSorteados: [],   // vetor com os números já sorteados (histórico)
  ultimoNumero: null      // guarda o último número sorteado (ou null se nenhum ainda)
};


// ============================================
// INTEGRANTE 1 - Estrutura inicial + Menu
// ============================================

function iniciarSistema() {
  // Responsabilidade: preparar o sistema para começar a rodar.
  // Sugestão: chamar aqui a função que popula o vetor numerosDisponiveis
  // (essa parte é do Integrante 2, então só chame a função dele/dela aqui).
}

function menu() {
  // Responsabilidade: mostrar o menu de opções e chamar a função certa
  // de acordo com a escolha do usuário.
  //
  // Opções obrigatórias:
  // 1. Sortear número         -> sortearNumero()
  // 2. Mostrar em ordem crescente -> mostrarOrdenados()
  // 3. Reiniciar o bingo      -> reiniciarBingo()
  // 4. Encerrar o programa
  //
  // Opções extras (opcional):
  // 5. Mostrar histórico      -> mostrarHistorico()
  // 6. Pesquisar número       -> pesquisarNumero()
  // 7. Registro do sistema    -> mostrarRegistroSistema()
  //
  // Dica: usar um while para repetir o menu até a opção "Encerrar" ser escolhida.
}


// ============================================
// INTEGRANTE 2 - Inicialização dos vetores + Reinício
// ============================================

function popularNumerosDisponiveis() {
  // Responsabilidade: preencher bingo.numerosDisponiveis com os números
  // de NUMERO_MINIMO até NUMERO_MAXIMO (1 a 75).
  // Dica: usar um for.
}

function reiniciarBingo() {
  // Responsabilidade: zerar o sistema para um novo jogo.
  // - esvaziar numerosSorteados
  // - repopular numerosDisponiveis (pode chamar popularNumerosDisponiveis())
  // - resetar ultimoNumero para null
}


// ============================================
// INTEGRANTE 3 - Sorteio dos números
// ============================================

function sortearNumero() {
  // Responsabilidade: sortear um número aleatório dentre os disponíveis.
  //
  // Passos sugeridos:
  // 1. Verificar se ainda existem números disponíveis (se não, avisar o usuário)
  // 2. Sortear um índice aleatório do vetor numerosDisponiveis
  // 3. Remover esse número do vetor numerosDisponiveis (método splice)
  // 4. Adicionar esse número ao vetor numerosSorteados (método push)
  // 5. Atualizar bingo.ultimoNumero
  // 6. Exibir o número sorteado na tela
}


// ============================================
// INTEGRANTE 4 - Histórico, pesquisa e ordenação
// ============================================

function mostrarHistorico() {
  // Responsabilidade: exibir todos os números já sorteados,
  // na ordem em que foram sorteados (usar numerosSorteados).
}

function mostrarOrdenados() {
  // Responsabilidade: exibir os números sorteados em ordem crescente.
  // Dica: usar o método sort() em uma cópia do vetor (não alterar o original).
}

function pesquisarNumero() {
  // Responsabilidade: perguntar um número ao usuário e informar se ele
  // já foi sorteado ou não.
  // Dica: aqui é o lugar de aplicar PESQUISA SEQUENCIAL (percorrer o vetor
  // com for comparando posição por posição), já que é um dos conteúdos
  // que o professor vai observar.
}


// ============================================
// INTEGRANTE 5 - Registro do sistema + Testes
// ============================================

function mostrarRegistroSistema() {
  // Responsabilidade: exibir um resumo do estado atual do bingo:
  // - quantidade de números disponíveis (numerosDisponiveis.length)
  // - quantidade de números sorteados (numerosSorteados.length)
  // - último número sorteado (bingo.ultimoNumero)

}


// ============================================
// EXECUÇÃO DO PROGRAMA
// ============================================

iniciarSistema();
menu();
