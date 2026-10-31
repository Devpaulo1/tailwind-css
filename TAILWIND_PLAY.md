# Tailwind Play — Exercícios

Documento da **Parte A** da atividade: registro dos exercícios construídos no
[Tailwind Play](https://play.tailwindcss.com/) e das utilities usadas em cada um.

O documento está dividido em dois blocos:

- **Parte 1 — Exercícios produzidos em aula:** códigos que já existiam no
  repositório, recuperados do histórico do Git e revisados.
- **Parte 2 — Estudos dos demais componentes:** trechos de Tailwind Play que
  isolam as utilities usadas na versão React da galeria.

> **Observação:** os exercícios da Parte 1 foram escritos em aula. As únicas
> alterações feitas aqui foram correções de digitação (`salte` → `slate`), que
> impediam as classes de funcionar. Os demais exercícios do material (Notion /
> Figma) devem ser acrescentados a este arquivo quando o enunciado completo for
> confirmado.

---

## Parte 1 — Exercícios produzidos em aula

### 1. Product Grid Responsivo

**Objetivo:** praticar breakpoints, `grid`, `group-hover`, `hover`, `focus`,
`active` e `disabled` em uma grade de planos.

**Conceitos usados:**

| Classe | Efeito |
|---|---|
| `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` | 1 coluna no mobile, 2 no tablet, 3 no desktop |
| `gap-6`, `p-6`, `rounded-3xl` | ritmo de espaçamento e forma consistente |
| `group` + `group-hover:scale-105` | o hover no card afeta a imagem interna |
| `hover:-translate-y-1` | elevação sutil do card |
| `disabled` + classes de opacidade | estado indisponível nativo |
| `transition duration-300` | animação curta e discreta |

```html
<main class="min-h-screen bg-slate-950 p-6 text-white">
  <section class="mx-auto max-w-6xl">
    <header class="mb-8">
      <span class="text-sm font-bold uppercase tracking-widest text-cyan-400">
        Tailwind Play
      </span>
      <h1 class="mt-2 text-3xl font-black sm:text-4xl lg:text-5xl">
        Product Grid Responsivo
      </h1>
      <p class="mt-3 max-w-2xl text-slate-400">
        Pratique breakpoints, Grid, hover, focus, active e disabled.
      </p>
    </header>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
      >
        <div
          class="grid aspect-[16/10] place-items-center bg-cyan-500 text-6xl font-black text-slate-950 transition duration-500 group-hover:scale-105"
        >
          01
        </div>
        <div class="p-6">
          <span class="text-sm font-bold text-cyan-400">Starter</span>
          <h2 class="mt-1 text-2xl font-black">UI Foundations</h2>
          <p class="mt-3 text-slate-400">Layout, spacing, tipografia e cores.</p>
          <button
            class="mt-6 w-full rounded-xl bg-cyan-400 px-4 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
          >
            Escolher
          </button>
        </div>
      </article>

      <article
        class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
      >
        <div
          class="grid aspect-[16/10] place-items-center bg-purple-900 text-6xl font-black text-white transition duration-500 group-hover:scale-105"
        >
          02
        </div>
        <div class="p-6">
          <span class="text-sm font-bold text-purple-300">Intermediate</span>
          <h2 class="mt-1 text-2xl font-black">Responsive UI</h2>
          <p class="mt-3 text-slate-400">Breakpoints e variantes condicionais.</p>
          <button
            class="mt-6 w-full rounded-xl bg-purple-700 px-4 py-3 font-bold text-white transition hover:bg-purple-600 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
          >
            Escolher
          </button>
        </div>
      </article>

      <article
        class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300"
      >
        <div
          class="grid aspect-[16/10] place-items-center bg-gray-800 text-6xl font-black text-gray-500"
        >
          03
        </div>
        <div class="p-6">
          <span class="text-sm font-bold text-gray-400">Locked</span>
          <h2 class="mt-1 text-2xl font-black">Advanced UI</h2>
          <p class="mt-3 text-slate-400">Este plano ainda está indisponível.</p>
          <button
            class="mt-6 w-full cursor-not-allowed rounded-xl bg-gray-800 px-4 py-3 font-bold text-gray-500"
            disabled
          >
            Indisponível
          </button>
        </div>
      </article>
    </div>
  </section>
</main>
```

**Decisões:**

- A imagem de cada card é um bloco de cor com proporção fixa
  (`aspect-[16/10]`), o que evita saltos de layout quando a imagem real chegar.
- O terceiro card não usa `hover:-translate-y-1` porque está indisponível:
  elemento desabilitado não deve parecer interativo.
- O texto secundário foi corrigido para `text-slate-400`; na versão original
  estava `text-salte-400` e a classe não existia.

---

### 2. Profile Card

**Objetivo:** compor um card de perfil com avatar, badge, hierarquia tipográfica
e dois níveis de ação.

**Conceitos usados:** `mx-auto max-w-md`, `rounded-3xl`, `shadow-xl`,
`flex items-center gap-4`, `shrink-0`, `inline-block`, `tracking-wider`,
`flex-1` para o botão principal ocupar o espaço restante.

```html
<main class="min-h-screen bg-slate-100 p-6 text-slate-900">
  <article
    class="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
  >
    <div class="flex items-center gap-4">
      <div
        class="grid size-20 shrink-0 place-items-center rounded-full bg-blue-600 text-2xl font-black text-white"
      >
        PR
      </div>

      <div>
        <span
          class="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wider text-blue-700 uppercase"
        >
          Front-end
        </span>

        <h1 class="mt-2 text-2xl font-black tracking-tight">Paulo</h1>

        <p class="text-sm text-slate-600">
          FullStack Developer · React · Node · PHP · Angular · Laravel
        </p>
      </div>
    </div>

    <p class="mt-6 leading-7 text-slate-600">
      Estudando como pequenas utilities podem ser combinadas para construir uma
      interface completa sem criar uma classe CSS para cada elemento.
    </p>

    <div class="mt-6 flex gap-3">
      <button
        class="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        Seguir
      </button>
      <button
        class="rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        Perfil
      </button>
    </div>
  </article>
</main>
```

**Decisões:**

- O avatar é um círculo com iniciais (`PR`), sem depender de imagem externa.
- `shrink-0` impede que o avatar seja esmagado quando o texto ao lado cresce.
- `flex-1` no botão principal cria hierarquia clara entre a ação primária e a
  secundária.
- O fundo original estava como `bg-salte-100`; corrigido para `bg-slate-100`.

---

## Parte 2 — Estudos dos demais componentes

Os trechos abaixo isolam as utilities de cada componente da galeria React. Eles
não substituem os exercícios da Parte 1: servem como registro de estudo.

### 3. Button System

**Conceitos:** `inline-flex`, `rounded-xl`, `transition`, variantes com
`bg-*`, `border`, `hover:`, `focus-visible:`, `active:`, `disabled:`.

```html
<div class="flex flex-wrap items-center gap-3">
  <button
    class="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none active:translate-y-px"
  >
    Primary
  </button>

  <button
    class="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
  >
    Secondary
  </button>

  <button
    class="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
  >
    Ghost
  </button>

  <button
    class="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none"
  >
    Danger
  </button>

  <button
    class="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white opacity-50 disabled:cursor-not-allowed"
    disabled
  >
    Desabilitado
  </button>
</div>
```

**O que observar:** todas as variantes compartilham a mesma estrutura
(`rounded-xl px-4 py-2.5 text-sm font-semibold`). No React isso vira a constante
`baseClasses` do componente `Button`, e apenas as classes de cor mudam por prop.

---

### 4. Badge + Avatar

**Conceitos:** `rounded-full`, `size-*`, `ring-1 ring-inset`, `relative` +
`absolute`, `-space-x-3` para sobreposição.

```html
<div class="flex items-center gap-4">
  <div class="relative">
    <span
      class="grid size-12 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white"
    >
      AR
    </span>
    <span
      class="absolute -right-0.5 -bottom-0.5 size-3 rounded-full bg-green-600 ring-2 ring-white"
    ></span>
  </div>

  <div class="flex flex-wrap gap-2">
    <span
      class="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200 ring-inset"
    >
      Front-end
    </span>
    <span
      class="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-800 ring-1 ring-green-200 ring-inset"
    >
      Ativo
    </span>
  </div>
</div>

<!-- avatares sobrepostos -->
<div class="mt-6 flex -space-x-3">
  <span class="grid size-10 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white ring-4 ring-white">
    AR
  </span>
  <span class="grid size-10 place-items-center rounded-full bg-violet-600 text-xs font-bold text-white ring-4 ring-white">
    LC
  </span>
  <span class="grid size-10 place-items-center rounded-full bg-slate-200 text-xs font-bold text-slate-600 ring-4 ring-white">
    +2
  </span>
</div>
```

**O que observar:** o texto do badge acompanha o estado ("Ativo"), então a
informação não depende apenas da cor verde.

---

### 5. Login Form

**Conceitos:** `label` associado por `htmlFor`/`id`, `border`, `focus:ring-2`,
`aria-invalid`, mensagem de erro com `role="alert"`.

```html
<form class="mx-auto mt-10 max-w-sm space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
  <div>
    <label for="email" class="block text-sm font-medium text-slate-700">E-mail</label>
    <input
      id="email"
      type="email"
      placeholder="nome@empresa.com"
      class="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
    />
  </div>

  <div>
    <label for="senha" class="block text-sm font-medium text-slate-700">Senha</label>
    <input
      id="senha"
      type="password"
      class="mt-1.5 w-full rounded-xl border border-red-500 px-4 py-2.5 text-sm focus:ring-2 focus:ring-red-500/20 focus:outline-none"
      aria-invalid="true"
      aria-describedby="senha-erro"
    />
    <p id="senha-erro" role="alert" class="mt-1.5 text-xs font-medium text-red-700">
      A senha precisa ter pelo menos 6 caracteres.
    </p>
  </div>

  <button
    type="submit"
    class="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
  >
    Entrar
  </button>
</form>
```

**O que observar:** a borda vermelha sozinha não comunica o erro — o texto com
`role="alert"` e o `aria-describedby` fazem esse papel.

---

### 6. KPI Card

**Conceitos:** `grid`, `text-3xl`, `tracking-tight`, barras com `flex` +
`items-end` e alturas relativas.

```html
<div class="grid gap-4 sm:grid-cols-3">
  <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <p class="text-sm font-medium text-slate-600">Receita mensal</p>

    <div class="mt-2 flex flex-wrap items-end justify-between gap-3">
      <p class="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
        R$ 48.320,00
      </p>

      <div class="flex h-10 w-20 items-end gap-1">
        <div class="h-1/3 flex-1 rounded-t-sm bg-blue-600/20"></div>
        <div class="h-1/2 flex-1 rounded-t-sm bg-blue-600/20"></div>
        <div class="h-2/5 flex-1 rounded-t-sm bg-blue-600/20"></div>
        <div class="h-3/5 flex-1 rounded-t-sm bg-blue-600/20"></div>
        <div class="h-2/3 flex-1 rounded-t-sm bg-blue-600"></div>
      </div>
    </div>

    <div class="mt-3 flex items-center gap-2 text-xs">
      <span class="rounded-full bg-green-50 px-2 py-0.5 font-semibold text-green-800">
        +12,4%
      </span>
      <span class="text-slate-600">vs. mês anterior</span>
    </div>
  </div>
</div>
```

**O que observar:** no React as alturas vêm dos dados (`style={{ height }}`),
porque montar classes como `h-[${valor}%]` não funciona — o compilador do
Tailwind não enxerga valores dinâmicos.

---

### 7. Pricing Card

**Conceitos:** destaque com `ring-2`, badge posicionada com `absolute
left-1/2 -translate-x-1/2`, lista de recursos com `space-y-3`.

```html
<article class="relative flex max-w-sm flex-col rounded-2xl border border-blue-600 bg-white p-6 shadow-sm ring-2 ring-blue-600/20">
  <span
    class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white"
  >
    Mais popular
  </span>

  <h3 class="text-base font-bold text-slate-900">Profissional</h3>
  <p class="mt-1 text-sm text-slate-600">O plano mais escolhido por times de produto.</p>

  <p class="mt-6 flex items-baseline gap-1">
    <span class="text-4xl font-bold tracking-tight text-slate-900">R$ 99,00</span>
    <span class="text-sm text-slate-600">/mês</span>
  </p>

  <ul class="mt-6 space-y-3 text-sm text-slate-700">
    <li class="flex items-start gap-2">
      <span class="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-green-100 text-green-800">✓</span>
      Projetos ilimitados
    </li>
    <li class="flex items-start gap-2">
      <span class="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-green-100 text-green-800">✓</span>
      Relatórios avançados
    </li>
    <li class="flex items-start gap-2 text-slate-500 line-through">
      <span class="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500">×</span>
      Acesso à API
    </li>
  </ul>

  <button class="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
    Assinar Profissional
  </button>
</article>
```

**O que observar:** o preço em `text-4xl` e o selo "Mais popular" criam a
hierarquia; a borda colorida reforça o destaque.

---

### 8. Alert / Notification

**Conceitos:** `border`, `bg-* /5`, ícone colorido, `role="alert"` para erros.

```html
<div class="space-y-3">
  <div class="flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4" role="status">
    <span class="mt-0.5 size-5 shrink-0 text-green-800">✓</span>
    <div class="min-w-0 flex-1">
      <p class="text-sm font-semibold text-slate-900">Pagamento confirmado</p>
      <p class="mt-1 text-sm text-slate-600">Seu plano está ativo até 12 de novembro.</p>
    </div>
  </div>

  <div class="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4" role="alert">
    <span class="mt-0.5 size-5 shrink-0 text-red-700">!</span>
    <div class="min-w-0 flex-1">
      <p class="text-sm font-semibold text-slate-900">Falha ao sincronizar dados</p>
      <p class="mt-1 text-sm text-slate-600">Não foi possível enviar as alterações.</p>
    </div>
  </div>
</div>
```

**O que observar:** fundo suave + borda + ícone + título. O estado é comunicado
por três canais, não só pela cor.

---

### 9. Responsive Navbar

**Conceitos:** `flex items-center justify-between`, `hidden md:flex` para os
links, `md:hidden` para o botão de menu, `aria-expanded` controlando o painel.

```html
<header class="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 sm:px-6">
  <a href="#" class="flex items-center gap-2">
    <span class="grid size-9 place-items-center rounded-xl bg-blue-600 text-sm font-bold text-white">N</span>
    <span class="text-base font-bold tracking-tight text-slate-900">Nimbus</span>
  </a>

  <nav class="hidden md:block" aria-label="Navegação principal">
    <ul class="flex items-center gap-1">
      <li>
        <a href="#" aria-current="page" class="rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
          Início
        </a>
      </li>
      <li>
        <a href="#" class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
          Recursos
        </a>
      </li>
      <li>
        <a href="#" class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
          Preços
        </a>
      </li>
    </ul>
  </nav>

  <div class="hidden items-center gap-2 md:flex">
    <button class="rounded-xl px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-slate-100">
      Entrar
    </button>
    <button class="rounded-xl bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700">
      Criar conta
    </button>
  </div>

  <button
    type="button"
    class="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-600 md:hidden"
    aria-expanded="false"
    aria-controls="menu-mobile"
    aria-label="Abrir menu"
  >
    ☰
  </button>
</header>

<div id="menu-mobile" hidden class="mt-2 rounded-2xl border border-slate-200 bg-white p-2 md:hidden">
  <a href="#" class="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">Recursos</a>
  <a href="#" class="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">Preços</a>
</div>
```

**O que observar:** o breakpoint `md` decide o que aparece. No React o
`aria-expanded` e o atributo `hidden` são controlados por `useState`, e o menu
fecha ao escolher um link.

---

### 10. Mini Dashboard

**Conceitos:** layout com `flex`, sidebar fixa (`w-60 shrink-0`) e conteúdo
flexível (`min-w-0 flex-1`), `grid` para os indicadores.

```html
<div class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
  <div class="flex">
    <aside class="hidden w-60 shrink-0 flex-col border-r border-slate-200 bg-slate-50 p-4 lg:flex">
      <div class="flex items-center gap-2">
        <span class="grid size-8 place-items-center rounded-lg bg-blue-600 text-xs font-bold text-white">N</span>
        <span class="text-sm font-bold tracking-tight text-slate-900">Nimbus</span>
      </div>

      <nav class="mt-6 flex-1 space-y-1" aria-label="Menu do painel">
        <a href="#" aria-current="page" class="flex items-center gap-2.5 rounded-lg bg-blue-50 px-2.5 py-2 text-sm font-semibold text-blue-700">
          Painel
        </a>
        <a href="#" class="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
          Pedidos
        </a>
        <a href="#" class="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
          Clientes
        </a>
      </nav>
    </aside>

    <div class="min-w-0 flex-1">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-4 py-4 sm:px-6">
        <div>
          <p class="text-xs text-slate-600">Segunda-feira, 31 de outubro</p>
          <h1 class="mt-0.5 text-lg font-bold tracking-tight text-slate-900">Visão geral</h1>
        </div>
        <button class="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Novo pedido
        </button>
      </div>

      <div class="grid gap-4 p-4 sm:grid-cols-2 xl:grid-cols-3 sm:p-6">
        <div class="rounded-2xl border border-slate-200 p-5">
          <p class="text-sm font-medium text-slate-600">Receita mensal</p>
          <p class="mt-2 text-2xl font-bold tracking-tight text-slate-900">R$ 48.320,00</p>
        </div>
        <div class="rounded-2xl border border-slate-200 p-5">
          <p class="text-sm font-medium text-slate-600">Usuários ativos</p>
          <p class="mt-2 text-2xl font-bold tracking-tight text-slate-900">2.847</p>
        </div>
        <div class="rounded-2xl border border-slate-200 p-5">
          <p class="text-sm font-medium text-slate-600">Taxa de conversão</p>
          <p class="mt-2 text-2xl font-bold tracking-tight text-slate-900">3,2%</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

**O que observar:** a sidebar só aparece a partir de `lg`; abaixo disso o painel
mostra uma barra de navegação horizontal rolável. `min-w-0` no conteúdo impede
que listas e gráficos empurrem o layout e gerem rolagem horizontal.

---

## Resumo das utilities praticadas

| Categoria | Exemplos |
|---|---|
| Layout | `flex`, `grid`, `gap-*`, `items-*`, `justify-*`, `min-w-0`, `shrink-0` |
| Espaçamento | `p-*`, `px-*`, `py-*`, `mt-*`, `space-y-*`, `-space-x-3` |
| Tipografia | `text-xs` → `text-4xl`, `font-semibold`, `font-bold`, `tracking-tight`, `leading-*`, `uppercase` |
| Cor | `bg-*`, `text-*`, `border-*`, `ring-*`, `from-*`/`to-*` |
| Forma | `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full` |
| Estados | `hover:`, `focus-visible:`, `active:`, `disabled:`, `group-hover:` |
| Responsividade | `sm:`, `md:`, `lg:`, `xl:` |
| Posição | `relative`, `absolute`, `-top-3`, `left-1/2`, `-translate-x-1/2` |
