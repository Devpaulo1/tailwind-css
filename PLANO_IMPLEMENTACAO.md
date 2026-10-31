# Plano de Implementação — Galeria Tailwind CSS + React

> **Status:** implementado. Este documento registra o planejamento; o resultado
> final está descrito no `README.md` e nos commits do repositório.
>
> Documento de trabalho. Não é entregável obrigatório da atividade; pode ser removido ao final.
> Baseado em `AGENTS.md`, no estado real do repositório e nas referências visuais descritas (seção 5 do AGENTS.md).

---

## 1. Diagnóstico do repositório (estado real)

| Item | Situação |
|---|---|
| Vite 8 + React 19 | Configurado e funcionando (`src/main.jsx`) |
| `tailwindcss@4.3.3` + `@tailwindcss/vite` | Instalados no `package.json` |
| Plugin Tailwind no `vite.config.js` | **Ausente** — bloqueia todo o uso de utilities |
| `@import "tailwindcss"` no `src/index.css` | **Ausente** — bloqueia todo o uso de utilities |
| `src/App.jsx` | Ainda é o template padrão do Vite (contador, logos) |
| `src/App.css` + `src/index.css` | CSS do template (tema roxo, dark mode automático) |
| `src/components/` | Não existe |
| `src/data/` | Não existe |
| `TAILWIND_PLAY.md` | Não existe |
| `README.md` | Ainda é o README do template Vite |
| Histórico Git | 2 commits; `product-grid.md` e `profile-card.md` foram deletados, mas o conteúdo está em `git show HEAD:<arquivo>` |
| Árvore de trabalho | Vários arquivos ainda não commitados (scaffold do Vite) |

**Conclusão:** o projeto está no ponto zero funcional. Antes de qualquer componente, é obrigatório conectar o Tailwind (Fase 0).

---

## 2. Objetivo e escopo

Entregar uma galeria de 10 exercícios em React + Tailwind, mobile-first, com:

- componentização real e uso de props;
- design system mínimo (`components/ui/`);
- dados estáticos separados da apresentação (`src/data/`);
- documentação da Parte A (`TAILWIND_PLAY.md`);
- `README.md` com apresentação, stack e instruções.

**Fora de escopo:** TypeScript, novas dependências (biblioteca de ícones, animação, roteador), dark mode, testes automatizados. Ícones serão SVGs inline.

---

## 3. Decisões de arquitetura

```text
src/
├── components/
│   ├── ui/            # Button, Badge, Avatar, Card, Icon
│   ├── layout/        # Container, SectionHeading, GalleryHeader
│   └── exercises/     # 10 exercícios
├── data/              # produtos, planos, kpis, alertas, navegação...
├── App.jsx            # composição da galeria
└── index.css          # @import tailwindcss + @theme (tokens)
```

Regras aplicadas:

- `ui/` só recebe componente quando há **repetição real** (Button e Badge aparecem em vários exercícios; Card idem).
- Nenhuma classe dinâmica por fragmento (`bg-${color}-500`). Variantes sempre como mapa de strings completas.
- Estado local com `useState` apenas onde a interação é o ponto didático (navbar mobile, senha visível, toggle de preço, dismiss de alerta, favoritar produto).
- Um único arquivo por exercício, tamanho controlado. Sem abstrações prematuras.

---

## 4. Fase 0 — Conectar o Tailwind (bloqueante)

**Arquivos:** `vite.config.js`, `src/index.css`

1. Registrar o plugin:

```js
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

2. Substituir todo o conteúdo de `src/index.css` por:

```css
@import "tailwindcss";
```

3. Remover `src/App.css` e o `import './App.css'` de `App.jsx`.
4. Limpar `src/App.jsx` (template) e deixar um placeholder mínimo.
5. `index.html`: `lang="pt-BR"` e título do projeto.
6. Validar com `npm run dev` — um `bg-red-500` deve renderizar.

> Fazer isso sozinho, em um commit próprio, antes de qualquer componente.

---

## 5. Fase 1 — Design tokens e base visual

**Arquivo:** `src/index.css`

```css
@import "tailwindcss";

@theme {
  --color-background: #EDEEF0;
  --color-surface: #FFFFFF;
  --color-foreground: #111827;
  --color-muted: #64748B;
  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;
  --color-success: #16A34A;
  --color-warning: #F59E0B;
  --color-danger: #DC2626;
  --color-accent: #7C3AED;
  --color-border: #E2E8F0;
}

@layer base {
  body {
    @apply bg-background text-foreground antialiased;
  }
}
```

Notas:

- Tailwind v4 gera utilities a partir dos tokens: `bg-surface`, `text-muted`, `border-border`, `bg-primary-hover`.
- **Sem dark mode** — as referências são claras e o tema automático do template deve sair.
- Fonte: manter `system-ui` / stack sans do Tailwind. Não instalar fontes externas.
- Tokens de forma não viram variável: aplicar direto (`rounded-2xl`, `shadow-sm`, `p-5`/`p-6`, `gap-4`/`gap-6`).

**Critério de aceite:** página com fundo `#EDEEF0`, texto escuro, sem CSS customizado do template.

---

## 6. Fase 2 — Primitivos de UI (`src/components/ui/`)

| Componente | Props | Variantes |
|---|---|---|
| `Button.jsx` | `variant`, `size`, `fullWidth`, `disabled`, `type`, `onClick`, `children` | primary, secondary, ghost, danger / sm, md, lg |
| `Badge.jsx` | `variant`, `dot`, `children` | neutral, primary, success, warning, danger, accent |
| `Avatar.jsx` | `src`, `alt`, `initials`, `size`, `status`, `ring` | sm, md, lg, xl / status online, away, offline |
| `Card.jsx` | `as`, `className`, `children` | padding padrão `p-5 sm:p-6` |
| `Icon.jsx` | `name`, `className` | mapa de paths SVG inline (check, x, chevron, menu, alert, user, star, etc.) |

Detalhes obrigatórios:

- `Button` tem `focus-visible:ring-2 ring-offset-2`, `active:` e `disabled:opacity-50 disabled:cursor-not-allowed` com `disabled` nativo.
- `Badge` comunica estado também por texto/ponto, nunca só cor.
- `Avatar` com fallback: se não houver `src`, mostra iniciais; `alt=""` quando decorativo.
- `Icon` com `aria-hidden="true"` e `focusable="false"`.

**Critério de aceite:** os 10 exercícios usam `Button`, `Badge` e `Card` sempre que o padrão se repete — demonstrando reutilização e props.

---

## 7. Fase 3 — Exercícios (`src/components/exercises/`)

Cada arquivo exporta um componente sem props obrigatórias, com dados vindo de `src/data/` quando fizer sentido. Layout mobile-first, sem rolagem horizontal.

### 1. `ButtonSystem.jsx`
- Grade com todas as variantes × tamanhos + estados (normal, disabled, loading simulado).
- Demonstra `hover`, `focus-visible`, `active`, `disabled`.
- Um botão com contador de cliques para provar que a ação é funcional.

### 2. `BadgeAvatar.jsx`
- Linha de badges (6 variantes) e avatares em 4 tamanhos com status.
- Avatar com iniciais (fallback) e com imagem.
- `AvatarGroup`: avatares sobrepostos (`-space-x-3`, `ring-2 ring-surface`).
- Exemplo de composição: card de usuário com avatar + badge + nome.

### 3. `ProfileCard.jsx`
- Capa em gradiente, avatar sobreposto, nome, cargo, badge de área, bio curta.
- Estatísticas (seguidores/projetos) e dois botões (primário + secundário).
- Interação: botão "Seguir" alterna texto/estilo com `useState`.

### 4. `ProductCard.jsx`
- Imagem/placeholder com proporção fixa (`aspect-[4/3]`, `object-cover`).
- Badge de desconto, título, avaliação (estrelas + nota textual), preço atual e riscado.
- Botão "Adicionar" + botão de favorito (`aria-pressed`) com estado.
- Variante "esgotado" com `disabled`.

### 5. `LoginForm.jsx`
- `<form>` semântico, `label` associado, `type="email"`/`password`, `autoComplete`.
- Mostrar/ocultar senha, "lembrar-me" (checkbox), link "esqueci a senha".
- Validação no submit: erros por campo com `aria-invalid`, `aria-describedby` e `role="alert"`.
- Estado `loading` no botão + estado de sucesso.

### 6. `KpiCard.jsx`
- Label, valor, variação percentual (positiva/negativa) com seta **e** texto ("+12,4% vs. mês anterior").
- Mini gráfico em barras com `div`s altos por classe estática (sem valor arbitrário dinâmico).
- 3 cards em grade (`grid-cols-1 sm:grid-cols-3`).

### 7. `PricingCard.jsx`
- 3 planos em grid; plano do meio destacado (`border-primary`, badge "Mais popular", `lg:scale-[1.02]`).
- Toggle mensal/anual com `useState`, preço recalculado e nota de economia.
- Lista de recursos com ícone de check e item indisponível com ícone de x + texto riscado.
- CTA por plano.

### 8. `AlertNotification.jsx`
- 4 variantes (info, success, warning, danger) com ícone, título, descrição e action opcional.
- Botão de fechar funcional (`useState`), com `aria-label="Fechar notificação"`.
- Container com `role="alert"` para danger e `role="status"` para os demais.
- Botão "Restaurar alertas" para demonstração após fechar.

### 9. `ResponsiveNavbar.jsx`
- `header` + `nav` sticky, logo, links, CTA.
- Mobile: botão hambúrguer com `aria-expanded`, `aria-controls`, ícone alternando; menu vertical.
- `md:` mostra os links em linha e esconde o botão.
- Fecha ao clicar em um link.

### 10. `MiniDashboard.jsx`
- Layout de 2 colunas no desktop (sidebar + conteúdo), empilhado no mobile.
- Topo com título, seletor de período e botão de ação.
- 3 KPI cards reaproveitando `KpiCard` + gráfico de barras + lista/tabela de atividade recente com badges de status.
- Sidebar vira barra horizontal rolável (ou lista colapsada) em telas pequenas; evitar overflow horizontal.

---

## 8. Fase 4 — Dados e composição da galeria

**`src/data/`:** `products.js`, `plans.js`, `kpis.js`, `alerts.js`, `navigation.js`, `activity.js`, `profile.js`.

**`src/components/layout/`:**

- `Container.jsx` — `mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8`.
- `SectionHeading.jsx` — número do exercício, título, descrição curta e âncora (`id`).
- `ExerciseShell.jsx` (opcional) — moldura comum de cada exercício: card branco, título, legenda do que está sendo demonstrado.

**`App.jsx`:**

- `header` com título "Tailwind CSS + React", subtítulo e navegação por âncoras para os 10 exercícios.
- `main` com uma `section` por exercício.
- Grade mobile-first: `grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3`, com exercícios largos (navbar, dashboard, alertas, login) ocupando a linha inteira (`sm:col-span-2 xl:col-span-3`).
- `footer` com stack e link do repositório.

**Critério de aceite:** página navegável por teclado, sem overflow em 320px, 768px, 1024px e 1440px.

---

## 9. Fase 5 — `TAILWIND_PLAY.md` (Parte A)

Recuperar e reorganizar o material já existente no Git:

- `git show HEAD:product-grid.md` → exercício "Product Grid Responsivo" (grid, breakpoints, hover, `group`, `disabled`).
- `git show HEAD:profile-card.md` → exercício "Profile Card".

Estrutura do arquivo:

```markdown
# Tailwind Play — Exercícios

## 1. Product Grid Responsivo
**Objetivo:** ...
**Conceitos:** grid, breakpoints, group-hover, estados
```html
<!-- código -->
```
**Decisões:** ...
```

Regras:

- Um bloco por exercício, com objetivo, código completo e explicação curta das utilities.
- Corrigir erros encontrados no material salvo: `bg-salte-100` e `text-salte-400` → `slate`.
- Não inventar exercícios que não estejam no material da aula/Notion. Se algum exercício do Figma não tiver versão em Tailwind Play, registrar como pendência.

---

## 10. Fase 6 — `README.md`

Substituir o README do template por:

1. Nome e objetivo do projeto (atividade de Tailwind CSS + React).
2. Stack e versões (React 19, Vite 8, Tailwind 4).
3. Como rodar: `npm install`, `npm run dev`, `npm run build`, `npm run lint`.
4. Estrutura de pastas explicada.
5. Lista dos 10 exercícios com o conceito demonstrado em cada um.
6. Link para `TAILWIND_PLAY.md` (Parte A).
7. Decisões de design (tokens, mobile-first, acessibilidade).
8. Créditos/referências (docs oficiais).

---

## 11. Acessibilidade e qualidade — checklist

- [ ] HTML semântico (`header`, `nav`, `main`, `section`, `article`, `form`, `label`).
- [ ] Todo input com `label` e `id` associados.
- [ ] `button` para ação, `a` para navegação.
- [ ] Foco visível em todos os elementos interativos.
- [ ] `aria-expanded` / `aria-controls` na navbar mobile.
- [ ] `aria-pressed` no favorito, `aria-invalid` + `aria-describedby` no formulário.
- [ ] Estado nunca comunicado apenas por cor.
- [ ] Contraste mínimo AA nos textos secundários.
- [ ] Nenhuma imagem sem `alt` adequado.

---

## 12. Validação

| Comando | Quando | Esperado |
|---|---|---|
| `npm run dev` | após cada fase | sem erro no console do Vite |
| `npm run lint` | antes de cada commit | 0 erros do oxlint |
| `npm run build` | antes de cada commit | build concluído |
| Inspeção manual | ao final | 320 / 768 / 1024 / 1440 px, teclado e zoom 200% |

Não afirmar que uma validação passou sem executá-la.

---

## 13. Sequência de commits sugerida

1. `chore: wire tailwind css into vite`
2. `feat: add design tokens and base layout`
3. `feat: add ui primitives (button, badge, avatar, card, icon)`
4. `feat: add button system and badge/avatar exercises`
5. `feat: add profile and product card exercises`
6. `feat: add login form exercise`
7. `feat: add kpi and pricing card exercises`
8. `feat: add alert notification exercise`
9. `feat: add responsive navbar exercise`
10. `feat: add mini dashboard exercise`
11. `feat: compose exercise gallery page`
12. `docs: document tailwind play exercises`
13. `docs: rewrite readme for the project`

Sem `push` sem autorização explícita.

---

## 14. Riscos e pendências

| Item | Impacto | Ação |
|---|---|---|
| Tailwind não conectado | Alto | Fase 0 antes de tudo |
| Referências visuais (PNG) não legíveis pelo agente | Médio | Seguir tokens do AGENTS.md; pedir descrição se houver detalhe específico |
| Links do Notion/Figma não fornecidos | Médio | Não inventar requisitos; sinalizar ao usuário |
| Snippets antigos com classes inválidas (`salte`) | Baixo | Corrigir ao migrar para `TAILWIND_PLAY.md` |
| Template Vite ainda commitado | Baixo | Remover `App.css` e limpar `App.jsx` na Fase 0 |

**Pendências de informação:** link do Notion da atividade, link do Figma e confirmação do conteúdo exato dos 10 exercícios.

---

## 15. Definição de pronto

- [ ] `npm run dev` abre a galeria com Tailwind aplicado.
- [ ] 10 exercícios implementados e visíveis, cada um com seu conceito evidente.
- [ ] Componentes reutilizados com props (mínimo: `Button`, `Badge`, `Card`).
- [ ] Interações funcionais: navbar mobile, senha, toggle de preço, dismiss de alerta, favorito.
- [ ] Responsivo de 320px a 1440px sem overflow horizontal.
- [ ] `TAILWIND_PLAY.md` versionado com os exercícios da Parte A.
- [ ] `README.md` reescrito.
- [ ] `npm run lint` e `npm run build` executados com sucesso.
- [ ] Commits pequenos e descritivos.
