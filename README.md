# Galeria Tailwind CSS + React

Projeto acadêmico da disciplina de desenvolvimento web: uma galeria com **10
exercícios de interface** construídos em **React + JavaScript + Tailwind CSS**.

O objetivo é demonstrar, na prática, o uso das utilities do Tailwind, a
componentização com JSX, a passagem de props, a reutilização de componentes e a
responsividade com abordagem **mobile-first**.

---

## O que está no projeto

| # | Exercício | Principais conceitos |
|---|---|---|
| 01 | Button System | props de variante/tamanho, `hover`, `focus-visible`, `disabled` |
| 02 | Badge + Avatar | badges semânticos, avatar com iniciais, status, grupo sobreposto |
| 03 | Profile Card | composição, hierarquia tipográfica, estado de "seguir" |
| 04 | Product Card | `aspect-ratio`, grade responsiva, favorito com `aria-pressed` |
| 05 | Login Form | formulário controlado, validação, erros acessíveis, loading |
| 06 | KPI Card | indicadores, variação, mini gráfico sem biblioteca |
| 07 | Pricing Card | destaque de plano, alternância mensal/anual |
| 08 | Alert / Notification | variantes semânticas, `role="alert"`, fechamento |
| 09 | Responsive Navbar | menu mobile com `aria-expanded`, breakpoint `md` |
| 10 | Mini Dashboard | layout com sidebar, gráfico, atividade recente |

A documentação da **Parte A** (exercícios de Tailwind Play) está em
[`TAILWIND_PLAY.md`](./TAILWIND_PLAY.md).

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | interface por componentes |
| JavaScript (JSX) | — | lógica da aplicação |
| Tailwind CSS | 4 | estilização utility-first |
| Vite | 8 | servidor de desenvolvimento e build |
| Oxlint | — | análise estática |

Sem bibliotecas adicionais de ícones ou de UI: os ícones são SVGs inline em
`src/components/ui/Icon.jsx`.

---

## Como rodar

Pré-requisito: Node.js 20 ou superior.

```bash
# instalar dependências
npm install

# servidor de desenvolvimento
npm run dev

# build de produção
npm run build

# pré-visualizar o build
npm run preview

# análise estática
npm run lint
```

O Vite informa a URL local no terminal (normalmente `http://localhost:5173`).

---

## Estrutura de pastas

```text
tailwind-css/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── exercises/     # os 10 exercícios
│   │   ├── layout/        # Container, SectionHeading, ExerciseSection
│   │   └── ui/            # Button, Badge, Avatar, Card, Icon, KpiTile
│   ├── data/              # dados estáticos (produtos, planos, KPI, alertas...)
│   ├── utils/             # formatação de moeda e número
│   ├── App.jsx            # composição da galeria
│   ├── index.css          # import do Tailwind + tokens de tema
│   └── main.jsx
├── TAILWIND_PLAY.md
├── README.md
├── index.html
└── vite.config.js
```

---

## Decisões de implementação

### Tailwind CSS v4 com Vite

A configuração usa o plugin oficial `@tailwindcss/vite` e uma única linha no CSS
principal:

```css
@import "tailwindcss";
```

Não existe `tailwind.config.js`: no Tailwind v4 os tokens são declarados no CSS
com `@theme`.

### Design tokens

Os tokens semânticos ficam em `src/index.css` e geram utilities como
`bg-surface`, `text-muted` e `border-border`:

```css
@theme {
  --color-background: #edeef0;
  --color-surface: #ffffff;
  --color-foreground: #111827;
  --color-muted: #475569;
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-success: #16a34a;
  --color-warning: #f59e0b;
  --color-danger: #dc2626;
  --color-accent: #7c3aed;
  --color-border: #e2e8f0;
}
```

O valor de `--color-muted` foi escurecido em relação ao ponto de partida para
atingir contraste mínimo AA sobre o fundo `#EDEEF0`.

### Componentização

- `components/ui/` guarda apenas o que é reutilizado de fato: `Button`, `Badge`,
  `Avatar`, `Card`, `Icon` e `KpiTile`.
- `components/exercises/` tem um arquivo por exercício, sem lógica escondida.
- `components/layout/` cuida apenas da moldura da galeria.
- Dados estáticos ficam em `src/data/`, separados da apresentação.

### Classes dinâmicas

Nenhuma classe é montada por concatenação de fragmentos (`bg-${cor}-500`). As
variantes são mapas de strings completas, para que o compilador do Tailwind
consiga encontrá-las:

```js
const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'border border-border bg-surface text-foreground',
}
```

### Responsividade

O estilo sem prefixo é sempre a base para telas pequenas. A galeria vai de uma
coluna para duas e três conforme o espaço:

```jsx
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
```

Verificado de 320px a 1440px sem rolagem horizontal.

### Acessibilidade

- HTML semântico (`header`, `nav`, `main`, `section`, `article`, `form`, `label`).
- `label` associado a cada campo, com `aria-invalid` e `aria-describedby` nos erros.
- Navbar mobile com `aria-expanded` e `aria-controls`.
- Favorito com `aria-pressed`; links ativos com `aria-current`.
- Foco visível em todos os elementos interativos.
- Estados nunca comunicados apenas por cor (sempre acompanhados de texto ou ícone).

---

## Validação executada

```bash
npm run build   # build concluído
npm run lint    # sem avisos do oxlint
```

Auditoria Lighthouse na página inicial: **100** em acessibilidade, boas práticas
e SEO.

---

## Observações

- Os exercícios de referência visual foram reproduzidos com uma linguagem
  consistente (fundo claro, cards brancos, azul primário e acentos semânticos).
- O projeto não usa dados reais nem back-end; as interações acontecem em memória.
- `TAILWIND_PLAY.md` registra os exercícios de Tailwind Play. Os enunciados que
  dependem do material do Notion/Figma devem ser conferidos antes da entrega.
