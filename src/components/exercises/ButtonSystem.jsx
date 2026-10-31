import { useState } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Icon from '../ui/Icon'

const variantOptions = [
  { label: 'Primary', variant: 'primary' },
  { label: 'Secondary', variant: 'secondary' },
  { label: 'Ghost', variant: 'ghost' },
  { label: 'Danger', variant: 'danger' },
  { label: 'Outline', variant: 'outline-primary' },
]

const sizeOptions = [
  { label: 'Pequeno', size: 'sm' },
  { label: 'Médio', size: 'md' },
  { label: 'Grande', size: 'lg' },
]

function ButtonGroup({ title, description, children }) {
  return (
    <div className="py-6 first:pt-0 last:pb-0">
      <h3 className="text-xs font-semibold tracking-wider text-muted uppercase">
        {title}
      </h3>
      {description ? (
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      ) : null}
      <div className="mt-4 flex flex-wrap items-center gap-3">{children}</div>
    </div>
  )
}

function ButtonSystem() {
  const [clicks, setClicks] = useState(0)

  return (
    <Card className="divide-y divide-border p-5 sm:p-6">
      <ButtonGroup
        title="Variantes"
        description="Mesmo componente, aparência definida pela prop variant."
      >
        {variantOptions.map((option) => (
          <Button key={option.variant} variant={option.variant}>
            {option.label}
          </Button>
        ))}
      </ButtonGroup>

      <ButtonGroup
        title="Tamanhos"
        description="A prop size altera padding e tamanho do texto."
      >
        {sizeOptions.map((option) => (
          <Button key={option.size} size={option.size}>
            {option.label}
          </Button>
        ))}
      </ButtonGroup>

      <ButtonGroup
        title="Estados"
        description="O atributo disabled nativo desativa foco e clique."
      >
        <Button variant="primary" disabled>
          Primary desabilitado
        </Button>
        <Button variant="secondary" disabled>
          Secondary desabilitado
        </Button>
        <Button variant="danger" disabled>
          Danger desabilitado
        </Button>
      </ButtonGroup>

      <ButtonGroup
        title="Interação"
        description="O botão executa uma ação real e atualiza o estado do componente."
      >
        <Button onClick={() => setClicks((total) => total + 1)}>
          <Icon name="plus" className="size-4" />
          Adicionar clique
        </Button>
        <Button
          variant="ghost"
          onClick={() => setClicks(0)}
          disabled={clicks === 0}
        >
          Zerar
        </Button>
        <p
          className="text-sm font-medium text-slate-600"
          aria-live="polite"
        >
          Cliques: <span className="font-bold text-foreground">{clicks}</span>
        </p>
      </ButtonGroup>
    </Card>
  )
}

export default ButtonSystem
