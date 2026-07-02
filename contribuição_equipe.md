# Como Contribuir — Sistema de BINGO

Este guia explica o passo a passo para os integrantes da equipe contribuírem com o projeto pelo GitHub.

## Pré-requisitos

- Ter o Git instalado na máquina.
- Ter acesso de colaborador ao repositório (peça para um administrador te adicionar em **Settings > Collaborators**, caso ainda não tenha acesso).
- Ter o Node.js e o pacote `readline-sync` instalados (ver `README.md`).

---

## Passo a passo

### 1. Clonar o repositório (apenas na primeira vez)

```
git clone https://github.com/usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2. Atualizar a branch `main` local

Antes de começar qualquer alteração, sempre atualize sua branch `main`:

```
git checkout main
git pull origin main
```

Isso evita trabalhar em cima de código desatualizado e reduz conflitos na hora do merge.

### 3. Criar uma nova branch

Nunca altere o código diretamente na `main`. Crie uma branch específica para cada tarefa:

```
git checkout -b nome-da-sua-branch
```

**Sugestão de nomenclatura:**
- `feature/nome-da-funcionalidade` — para novas funcionalidades
- `fix/nome-do-problema` — para correções de bugs
- `nome-tarefa` — para ajustes pontuais

Exemplos: `feature/menu-bingo`, `fix/erro-cartela-duplicada`

### 4. Fazer as alterações

Edite os arquivos necessários (ex: `sistema_de_bingo.js`) no seu editor de preferência.

### 5. Adicionar e commitar as mudanças

```
git add .
git commit -m "Descrição clara da alteração"
```

**Boas práticas para mensagens de commit:**
- Use frases curtas e diretas, no imperativo.
- ✅ `"Adiciona validação de cartela duplicada"`
- ❌ `"ajustes"` ou `"mudanças diversas"`

### 6. Enviar a branch para o GitHub

```
git push origin nome-da-sua-branch
```

### 7. Abrir o Pull Request (PR)

1. Acesse o repositório no GitHub.
2. Clique em **Pull requests > New pull request**.
3. Selecione:
   - **base:** `main`
   - **compare:** `nome-da-sua-branch`
4. Escreva uma descrição breve do que foi feito.
5. Marque os integrantes do grupo como **reviewers**.

### 8. Revisão e aprovação

- Aguarde pelo menos um integrante revisar e aprovar o PR.
- Se houver comentários ou solicitações de mudança, ajuste o código, faça novo commit e push na mesma branch — o PR é atualizado automaticamente.

### 9. Merge

Após aprovação, quem abriu o PR (ou quem tiver permissão) clica em **Merge pull request** no GitHub.

### 10. Sincronizar novamente

Depois do merge, todos os integrantes devem atualizar sua `main` local antes de criar novas branches:

```
git checkout main
git pull origin main
```

---

## Checklist rápido

- [ ] Atualizei minha `main` antes de começar
- [ ] Criei uma branch com nome descritivo
- [ ] Fiz commits claros e organizados
- [ ] Enviei a branch para o GitHub
- [ ] Abri o PR e marquei revisores
- [ ] Aguardei aprovação antes do merge
- [ ] Atualizei a `main` local após o merge

---

## Dúvidas?

Em caso de dúvidas sobre o fluxo, converse com o time antes de fazer alterações diretamente na `main`.
