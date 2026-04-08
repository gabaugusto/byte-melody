# Byte Melody - Desafios de Desenvolvimento

Nesta atividade, sua equipe deverá desenvolver um aplicativo simples e funcional que use sons e interatividade para ajudar uma pessoa em uma situação do dia a dia.

## Objetivo

Implementar melhorias e novas funcionalidades ao aplicativo **Byte Melody**, transformando-o em uma experiência de usuário mais imersiva e intuitiva.

O objetivo é criar uma experiência agradável, útil e bem organizada, utilizando componentes para montar a interface do app.

Escolha (se quiser) um dos cenários abaixo:

### 1. Sono do Bebê

Um casal está com dificuldades para fazer o bebê dormir e precisa de ajuda. O app deve oferecer sons suaves, como ruído branco, chuva ou vento, para criar um ambiente mais tranquilo.

### 2. Foco nos Estudos

Uma estudante universitária quer se concentrar melhor em um ambiente barulhento. O app deve oferecer sons que ajudem no foco, como cafeteria, floresta ou biblioteca.

### 3. Yoga e Meditação

Uma professora de yoga deseja usar sons relaxantes em suas aulas, como água corrente, pássaros ou vento suave, para criar um clima mais calmo.

## Tarefas Obrigatórias

### 1. **Background Dinâmico Baseado na Música Tocada**
**Descrição:** O background da página deve alterar sua cor/tema de acordo com a música que está sendo tocada.

**Requisitos:**
- Cada som deve ter uma cor ou imagem de fundo associada
- A transição entre cores deve ser suave (usando CSS transitions)
- O background deve voltar ao estado padrão quando nenhuma música está tocando
- Implementar um objeto de dados para mapear sons a cores/temas

**Dica:** Adicione uma propriedade `color` ou `theme` ao objeto de dados dos sons em `data/sounds.js`

---

### 2. **Painel "A Sessão Está Tocando" Fixo**
**Descrição:** O componente `ActiveSoundPanel` deve permanecer fixo na página durante a navegação entre Home e About.

**Requisitos:**
- O painel deve ser movido para um nível superior (App.jsx)
- Deve estar sempre visível quando um som está tocando
- Deve utilizar posicionamento `position: fixed` no CSS
- Não deve cobrir o conteúdo principal das páginas
- O painel deve ser acessível do About e da Home sem perder o áudio

**Dica:** Use `position: fixed; bottom: 0; left: 0; right: 0;` com z-index apropriado

---

## Tarefas Opcionais

### 3. **Animação ao Reproduzir/Pausar**
- Adicionar ícones animados (play/pause) que giram ou pulsam quando uma música está tocando
- Implementar animation CSS ou transições suaves
- Fazer o card do som ativo destacar-se dos outros

### 4. **Histórico de Músicas Tocadas**
- Criar uma lista que armazena as últimas 5 músicas reproduzidas
- Exibir esta lista em um novo componente
- Permitir clicar no histórico para reproduzir a música novamente
- Usar localStorage para persistir o histórico entre sessões

### 7. **Modo Escuro**
- Adicionar toggle para modo escuro/claro
- Aplicar temas CSS dinâmicos
- Salvar preferência do usuário no localStorage

### 8. **Categories com Descrições**
- Adicionar descrição para cada categoria de som
- Mostrar a descrição quando a categoria for selecionada
- Exibir número de sons disponíveis em cada categoria

### 10. **Recomendações Inteligentes** 💡
- Criar uma seção para sugerir sons baseado no último reproduzido
- Mostrar sons populares/mais tocados
- Criar seção "Você pode gostar" na Home

---

## Checklist de Implementação

Não altere tudo de uma vez! Implemente uma tarefa, teste, e depois passe para a próxima. Use este checklist para garantir que cada funcionalidade esteja completa e funcionando corretamente.

### Funcionalidade
- [ ] Tarefa 1: Background dinâmico funciona corretamente
- [ ] Tarefa 2: Painel fixo persiste durante navegação
- [ ] Código comentado e bem organizado
- [ ] Sem erros no console do navegador
- [ ] Responsive (funciona em mobile e desktop)
- [ ] Nomes de variáveis e funções em português ou inglês claro
- [ ] Transições suaves sem travamentos (transitions CSS)
- [ ] Audio continua tocando durante navegação (Tarefa 2)
- [ ] Sem vazamento de memória (listeners removidos corretamente) (Avançado)

--- 

## Como Começar

1. Clone/baixe o projeto
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `npm run dev`
4. Abra o navegador em `http://localhost:5173`
5. Coloque os sons e imagens necessários na pasta `public/sounds` e `public/images`
6. Implemente as melhorias uma por uma
7. Teste continuamente no navegador
8. Faça commit de suas mudanças regularmente

---

## Submissão

- Envie o link do repositório (GitHub) ou arquivo compactado com o projeto
- Inclua um arquivo `README.md` explicando as melhorias implementadas
- Forneça prints/capturas de tela das novas funcionalidades

**Bom desenvolvimento! **
