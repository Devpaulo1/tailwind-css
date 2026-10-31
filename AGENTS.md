# AGENTS.md — tailwind-css

> Instruções permanentes para o OpenCode trabalhar neste projeto.
> Leia este documento antes de criar, editar ou refatorar arquivos.

## 1. Visão geral do projeto

**Nome:** `tailwind-css`  
**Tipo:** projeto acadêmico de estudo e demonstração de interfaces web.  
**Stack principal:** React, JavaScript e Tailwind CSS.  
**Objetivo:** concluir os exercícios da aula sobre Tailwind CSS e React, documentar os experimentos feitos no Tailwind Play e desenvolver uma galeria de componentes/interfaces em React.

O projeto deve demonstrar que o aluno compreende as classes do Tailwind, JSX, componentização, props, reutilização de componentes, responsividade e decisões de implementação. A IA pode apoiar o desenvolvimento, mas não deve substituir a compreensão do código.

### Escopo dos exercícios visuais

As imagens de referência fornecidas representam os seguintes exercícios:

1. Button System
2. Badge + Avatar
3. Profile Card
4. Product Card
5. Login Form
6. KPI Card
7. Pricing Card
8. Alert / Notification
9. Responsive Navbar
10. Mini Dashboard

Use as imagens como referência de direção visual e composição. Não trate medidas, textos ou cores como regras imutáveis quando o material do Notion ou do Figma apresentar requisitos mais específicos.

## 2. Requisitos da atividade e entregáveis

A atividade possui duas partes que devem estar representadas no repositório.

### Parte A — Tailwind Play

- Desenvolver os exercícios propostos no material da aula usando o Tailwind Play.
- Registrar os códigos e explicações em `TAILWIND_PLAY.md`.
- Organizar o documento por exercício, com título, objetivo e código correspondente.
- Quando útil, explicar brevemente as utilities ou decisões usadas.
- Não inventar exercícios nem requisitos: consultar o material da aula e o Notion disponibilizado pelo professor.
- Adicionar e versionar `TAILWIND_PLAY.md` no repositório GitHub.

### Parte B — React + Tailwind

- Desenvolver os componentes e interfaces propostos no material.
- Utilizar JSX e componentização.
- Demonstrar uso de props e reutilização de componentes.
- Aplicar responsividade com abordagem mobile-first.
- Estilizar com Tailwind CSS.
- Manter o código organizado e fácil de explicar.

### Entrega final

O repositório público no GitHub deve conter, no mínimo:

- `TAILWIND_PLAY.md` com os exercícios da Parte A;
- código-fonte dos exercícios React + Tailwind;
- `README.md` com apresentação do projeto, tecnologias, instruções de instalação/execução e organização geral;
- código organizado;
- histórico de commits que registre a evolução do trabalho.

O link do repositório público será enviado no Blackboard. Consulte o Notion da atividade para os requisitos completos e utilize o Figma e as imagens fornecidas como referências visuais.

**Importante:** não invente o link do Notion, telas, requisitos ou conteúdo que não tenha sido fornecido. Se faltar uma referência necessária, pergunte ao usuário ou sinalize exatamente o que está faltando.

## 3. Stack tecnológica

| Tecnologia | Responsabilidade |
|---|---|
| React | Construção da interface por componentes |
| JavaScript | Lógica da aplicação |
| Tailwind CSS | Estilização utility-first |
| Vite | Desenvolvimento e build, caso já esteja configurado no projeto |
| Git e GitHub | Versionamento e publicação do repositório |

### Convenções de stack

- Utilize JavaScript e JSX. Não migre para TypeScript sem solicitação.
- Respeite os padrões e versões já existentes no `package.json`.
- Não atualize dependências em tarefas que não exigem isso.
- Não instale bibliotecas adicionais sem necessidade.
- Antes de alterar a configuração do Tailwind, verifique a versão instalada.
- Para Tailwind CSS v4 com Vite, a configuração usual utiliza `tailwindcss` e `@tailwindcss/vite`, com `@import "tailwindcss";` no CSS principal. Confirme a configuração real antes de modificá-la.

## 4. Arquitetura e organização

Adote uma arquitetura simples, orientada a componentes. A estrutura abaixo é uma sugestão; primeiro inspecione o repositório e preserve a organização que já funciona. Não mova arquivos apenas para reproduzir este exemplo.

```text
tailwind-css/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Avatar.jsx
│   │   │   └── Card.jsx
│   │   └── exercises/
│   │       ├── ButtonSystem.jsx
│   │       ├── BadgeAvatar.jsx
│   │       ├── ProfileCard.jsx
│   │       ├── ProductCard.jsx
│   │       ├── LoginForm.jsx
│   │       ├── KpiCard.jsx
│   │       ├── PricingCard.jsx
│   │       ├── AlertNotification.jsx
│   │       ├── ResponsiveNavbar.jsx
│   │       └── MiniDashboard.jsx
│   ├── data/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── TAILWIND_PLAY.md
├── README.md
├── AGENTS.md
├── index.html
├── package.json
└── vite.config.js
```

### Responsabilidades

- `App.jsx`: compor a página e organizar a apresentação dos exercícios.
- `components/ui/`: manter elementos básicos reutilizáveis quando houver repetição real.
- `components/exercises/`: implementar os exercícios compostos.
- `data/`: armazenar dados estáticos quando isso deixar os componentes mais claros.
- `index.css`: importar Tailwind e declarar tokens globais.
- `assets/`: armazenar imagens e recursos locais.
- `TAILWIND_PLAY.md`: documentar os exercícios feitos no Tailwind Play.
- `README.md`: explicar o projeto e como executá-lo.
- `AGENTS.md`: orientar o OpenCode sobre regras, arquitetura e padrões do projeto.

### Regras de componentização

- Extraia componentes quando forem reutilizados ou tiverem responsabilidade própria.
- Prefira composição com `children` e props claras.
- Evite componentes gigantes que concentrem toda a aplicação.
- Evite criar componentes para cada `div` sem benefício real.
- Não crie abstrações genéricas antes de existir uma necessidade concreta.
- Use nomes de componentes em PascalCase e variáveis/funções em camelCase.
- Mantenha os dados separados da apresentação quando isso melhorar a legibilidade.

## 5. Diretrizes de design

### Direção visual das referências

As imagens enviadas pelo usuário devem orientar a linguagem visual:

- Fundo geral cinza muito claro.
- Cards brancos com cantos arredondados e sombra suave.
- Tipografia escura, hierarquia clara e textos auxiliares discretos.
- Azul como cor primária para ações e destaques.
- Acentos semânticos em verde, amarelo/âmbar, vermelho e roxo.
- Espaçamento generoso, alinhamento consistente e bastante respiro.
- Aparência leve, organizada e contemporânea.
- Componentes demonstrativos apresentados em uma grade responsiva.

Não force todos os exercícios a terem o mesmo layout interno: mantenha a identidade visual comum, mas respeite a função de cada componente.

### Design tokens iniciais

Use estes valores como ponto de partida, ajustando-os quando o Figma ou o material do professor especificar valores diferentes.

| Token | Valor inicial | Aplicação |
|---|---|---|
| `background` | `#EDEEF0` | Fundo geral da página |
| `surface` | `#FFFFFF` | Cards e superfícies |
| `foreground` | `#111827` | Texto principal |
| `muted` | `#64748B` | Texto secundário |
| `primary` | `#2563EB` | Ações e destaques |
| `primary-hover` | `#1D4ED8` | Hover de ações primárias |
| `success` | `#16A34A` | Estado positivo |
| `warning` | `#F59E0B` | Avisos |
| `danger` | `#DC2626` | Erros e ações destrutivas |
| `accent` | `#7C3AED` | Destaques secundários |
| `border` | `#E2E8F0` | Bordas sutis |

### Escala de espaçamento e forma

- Base de espaçamento: escala padrão do Tailwind (`1` unidade = `0.25rem`).
- Cards principais: padding aproximado de `p-5` a `p-6`.
- Distância entre cards: `gap-4` a `gap-6`.
- Cantos de cards: `rounded-2xl`.
- Botões e campos: `rounded-lg` ou `rounded-xl`.
- Bordas: `border border-slate-200`.
- Sombras: discretas, como `shadow-sm`; use sombras mais fortes somente quando a hierarquia pedir.

### Tipografia

- Priorize fonte sans-serif.
- Títulos: peso `semibold` ou `bold`.
- Texto auxiliar: menor e com cor secundária.
- Evite excesso de tamanhos, pesos e cores diferentes.
- Preserve contraste suficiente entre texto e fundo.

### Tokens no CSS

Quando o projeto utilizar Tailwind CSS v4, centralize tokens semânticos no CSS principal, respeitando a configuração existente. Exemplo de referência:

```css
@import "tailwindcss";

@theme {
  --color-background: #EDEEF0;
  --color-surface: #FFFFFF;
  --color-foreground: #111827;
  --color-muted: #64748B;
  --color-primary: #2563EB;
  --color-success: #16A34A;
  --color-warning: #F59E0B;
  --color-danger: #DC2626;
  --color-accent: #7C3AED;
  --color-border: #E2E8F0;
}
```

Use os tokens semânticos nas interfaces quando apropriado, em vez de espalhar valores hexadecimais diferentes pelos componentes.

## 6. Padrões de Tailwind CSS

### Utility-first

- Prefira utilities diretamente no `className`.
- Use as classes para layout, espaçamento, tipografia, cores, bordas e estados.
- Não crie CSS personalizado quando utilities existentes resolverem o problema.
- Use `@apply` com moderação; prefira componentes React para padrões reutilizáveis.

### Responsividade — mobile-first

- O estilo sem prefixo deve ser a base para telas pequenas.
- Use `sm:`, `md:`, `lg:`, `xl:` e `2xl:` somente quando necessário.
- Verifique se não há rolagem horizontal indevida.
- Ajuste grids para uma coluna em telas estreitas e mais colunas em telas maiores.

Exemplo:

```jsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
  {/* exercícios */}
</div>
```

### Estados e interação

- Considere `hover:`, `focus-visible:`, `active:`, `disabled:`, `group-hover:` e outras variantes quando fizer sentido.
- Toda ação interativa deve ter comportamento funcional, não apenas aparência.
- Inclua foco visível para navegação por teclado.
- Botões desabilitados devem usar o atributo `disabled` quando aplicável.

### Classes dinâmicas

Não monte nomes de classes Tailwind por fragmentos, pois o compilador pode não detectá-los:

```jsx
// Evitar
<div className={`bg-${color}-500`} />
```

Prefira mapas com classes completas:

```jsx
const variants = {
  blue: "bg-blue-500",
  red: "bg-red-500",
  green: "bg-green-500",
};
```

## 7. Acessibilidade e qualidade

- Use HTML semântico (`header`, `main`, `nav`, `section`, `article`, `form` etc.).
- Associe `label` aos campos de formulário.
- Use `button` para ações e links para navegação.
- Forneça `alt` adequado para imagens informativas; use `alt=""` para imagens decorativas.
- Não dependa apenas da cor para comunicar sucesso, alerta ou erro.
- Garanta foco visível e interação por teclado.
- Evite elementos clicáveis sem semântica ou comportamento acessível.
- Verifique contraste e legibilidade.

## 8. Documentação e aprendizagem

O objetivo é que o aluno consiga explicar o que foi desenvolvido.

Ao implementar ou alterar exercícios:

- Explique de forma curta as decisões relevantes quando o usuário pedir.
- Prefira soluções simples e didáticas.
- Não esconda lógica básica em abstrações desnecessárias.
- Não invente explicações sobre classes ou APIs.
- Consulte a documentação oficial do Tailwind CSS e do React quando houver dúvida.
- Use Notion e Figma como fontes de requisitos e referência visual quando os links ou conteúdos forem disponibilizados.

Referências oficiais:

- Tailwind CSS: https://tailwindcss.com/docs
- Instalação Tailwind + Vite: https://tailwindcss.com/docs/installation/using-vite
- Responsive Design: https://tailwindcss.com/docs/responsive-design
- Theme Variables: https://tailwindcss.com/docs/theme
- Dark Mode: https://tailwindcss.com/docs/dark-mode
- React: https://react.dev/learn
- Vite: https://vite.dev/guide/

## 9. Git, commits e GitHub

- Preserve o histórico de commits existente.
- Faça commits pequenos e relacionados a uma alteração lógica.
- Use mensagens claras, preferencialmente no padrão Conventional Commits, por exemplo:
  - `feat: add button system exercise`
  - `feat: create responsive profile card`
  - `docs: document Tailwind Play exercises`
  - `fix: improve login form validation`
  - `style: refine exercise gallery spacing`
- Não agrupe alterações independentes em um único commit sem necessidade.
- Não faça push, publicação ou alteração de repositório remoto sem autorização explícita do usuário.
- Antes de qualquer commit, confira o diff e não inclua arquivos secretos, `.env`, credenciais ou arquivos gerados desnecessários.

## 10. Fluxo de trabalho obrigatório para o OpenCode

Antes de começar uma tarefa:

1. Leia este `AGENTS.md`.
2. Inspecione a estrutura real do projeto e os arquivos relevantes.
3. Confira `package.json` e a versão/configuração do Tailwind.
4. Identifique qual exercício ou requisito está sendo trabalhado.
5. Consulte as referências fornecidas pelo usuário quando disponíveis.
6. Faça a menor alteração coerente com o pedido.

Depois de implementar:

1. Revise os arquivos alterados.
2. Execute os comandos de validação disponíveis no projeto, como lint e build, se estiverem configurados.
3. Corrija erros introduzidos pela alteração.
4. Informe quais arquivos foram criados ou modificados e quais validações foram executadas.
5. Se não foi possível executar uma validação, diga isso claramente; nunca afirme que passou sem ter executado.

### Restrições

- Não reescreva o projeto inteiro para implementar uma pequena melhoria.
- Não remova funcionalidades existentes sem solicitação.
- Não invente requisitos que não estejam nas referências ou no pedido.
- Não instale dependências, altere versões ou mude a stack sem justificar e pedir autorização quando houver impacto relevante.
- Não substitua JavaScript por TypeScript.
- Não publique o projeto nem envie a atividade ao Blackboard em nome do usuário.
- Se houver conflito entre este documento e uma instrução mais recente e explícita do usuário, siga a instrução mais recente, desde que não comprometa os requisitos obrigatórios da atividade.
