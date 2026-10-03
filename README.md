#  Mercadão Brothers - E-commerce Frontend

> Projeto acadêmico focado no desenvolvimento de uma interface frontend para um e-commerce (supermercado), construído inteiramente com HTML, CSS e JavaScript puro.

##  Sobre o Projeto
Este projeto foi desenvolvido com o objetivo de colocar em prática os fundamentos da programação web. A ideia foi criar a simulação de uma loja virtual funcional desde a criação de conta do utilizador até à adição de produtos no carrinho, focando em manipulação do DOM, gestão de estado com Web Storage e boas práticas de estruturação de CSS.

##  Funcionalidades Implementadas

*   **Autenticação Simulada:**
    *   Página de Registo com validação rigorosa de formulários (tamanho de senha, senhas iguais, campos obrigatórios).
    *   Página de Login com persistência de dados utilizando `localStorage` (com encriptação em Base64) e `sessionStorage` para controlo de sessão.
*   **Catálogo Dinâmico:**
    *   Renderização de 30 produtos através de JavaScript.
    *   Sistema de filtros laterais em formato *accordion* (por categoria e subcategoria).
*   **Carrinho de Compras:**
    *   Adição de itens com ajuste de quantidades.
    *   Cálculo dinâmico do valor total.
    *   Remoção de itens e estado visual de "carrinho vazio".
*   **Interface (UI/UX):**
    *   Design totalmente responsivo (Desktop, Tablet e Mobile).
    *   Microinterações e animações suaves (`cubic-bezier`).
    *   Feedback visual imediato para erros de preenchimento.

##  Tecnologias Utilizadas

*   **HTML5:** Estrutura semântica e regras de acessibilidade (relacionamento correto entre `labels` e `inputs`).
*   **CSS3:** 
    *   Uso intensivo de **Flexbox** para alinhamentos simétricos.
    *   Variáveis (`:root`) para consistência da palete de cores e sombras.
    *   Escrita baseada no padrão estrutural "Outside-In" para facilitar a manutenção.
*   **JavaScript (ES6+):** 
    *   Módulos (`import/export`) para separação de responsabilidades.
    *   Métodos modernos de arrays (`filter`, `some`, `forEach`).
    *   Programação defensiva para evitar erros de manipulação do DOM.
