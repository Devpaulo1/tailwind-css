import Avatar from '../ui/Avatar'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import { team } from '../../data/people'

const badgeVariants = [
  { variant: 'neutral', label: 'Neutro' },
  { variant: 'primary', label: 'Primário' },
  { variant: 'success', label: 'Sucesso' },
  { variant: 'warning', label: 'Aviso' },
  { variant: 'danger', label: 'Erro' },
  { variant: 'accent', label: 'Destaque' },
]

function Block({ title, description, children }) {
  return (
    <div className="py-6 first:pt-0 last:pb-0">
      <h3 className="text-xs font-semibold tracking-wider text-muted uppercase">
        {title}
      </h3>
      {description ? (
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      ) : null}
      <div className="mt-4">{children}</div>
    </div>
  )
}

function BadgeAvatar() {
  return (
    <Card className="divide-y divide-border p-5 sm:p-6">
      <Block
        title="Badges"
        description="Cada variante combina fundo suave, texto forte e anel."
      >
        <div className="flex flex-wrap gap-2">
          {badgeVariants.map((item) => (
            <Badge key={item.variant} variant={item.variant}>
              {item.label}
            </Badge>
          ))}
          <Badge variant="success" dot>
            Online
          </Badge>
        </div>
      </Block>

      <Block
        title="Avatares"
        description="Quatro tamanhos, status opcional e anel para sobreposição."
      >
        <div className="flex flex-wrap items-end gap-5">
          <Avatar initials="AR" alt="Ana Ribeiro" size="sm" status="online" />
          <Avatar initials="LC" alt="Lucas Costa" size="md" status="away" />
          <Avatar initials="MF" alt="Marina Freitas" size="lg" status="offline" />
          <Avatar initials="TS" alt="Thiago Souza" size="xl" status="online" />
        </div>
      </Block>

      <Block
        title="Equipe"
        description="Avatares sobrepostos usam -space-x e um anel na cor da superfície."
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex -space-x-3">
            {team.slice(0, 4).map((person) => (
              <Avatar
                key={person.id}
                initials={person.initials}
                alt={person.name}
                size="md"
                status={person.status}
                ring
              />
            ))}
            <span className="grid size-10 place-items-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 ring-4 ring-surface">
              +2
            </span>
          </div>
          <p className="text-sm text-slate-500">
            <span className="font-semibold text-foreground">4 de 6</span>{' '}
            membros ativos no projeto
          </p>
        </div>
      </Block>

      <Block
        title="Composição"
        description="Avatar, nome e badge comunicam estado sem depender só da cor."
      >
        <div className="flex items-center gap-3 rounded-xl border border-border bg-slate-50/60 p-4">
          <Avatar initials="JC" alt="Júlia Campos" size="lg" status="online" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">
              Júlia Campos
            </p>
            <p className="truncate text-xs text-muted">Product Manager</p>
          </div>
          <Badge variant="success" dot className="ml-auto shrink-0">
            Disponível
          </Badge>
        </div>
      </Block>
    </Card>
  )
}

export default BadgeAvatar
