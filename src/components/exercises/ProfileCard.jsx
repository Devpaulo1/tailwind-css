import { useState } from 'react'
import Avatar from '../ui/Avatar'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import { profile } from '../../data/people'
import { formatNumber } from '../../utils/format'

function ProfileCard() {
  const [following, setFollowing] = useState(false)
  const [followers, setFollowers] = useState(1284)

  function toggleFollow() {
    setFollowing((current) => !current)
    setFollowers((total) => (following ? total - 1 : total + 1))
  }

  const stats = profile.stats.map((stat) =>
    stat.label === 'Seguidores'
      ? { ...stat, value: formatNumber(followers) }
      : stat,
  )

  return (
    <Card className="mx-auto w-full max-w-sm overflow-hidden">
      <div
        className="h-24 bg-linear-to-r from-primary via-primary to-accent"
        aria-hidden="true"
      />

      <div className="px-6 pb-6">
        <div className="-mt-10 flex items-end justify-between gap-3">
          <Avatar
            initials={profile.initials}
            alt={profile.name}
            size="xl"
            ring
          />
          <Badge variant="primary">{profile.area}</Badge>
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight">
          {profile.name}
        </h3>
        <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted">
          {profile.role}
          <span aria-hidden="true">·</span>
          {profile.location}
        </p>

        <p className="mt-4 text-sm leading-6 text-slate-600">{profile.bio}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {profile.skills.map((skill) => (
            <li key={skill}>
              <Badge variant="neutral">{skill}</Badge>
            </li>
          ))}
        </ul>

        <dl className="mt-5 grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-slate-50/60 py-3 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse px-2">
              <dt className="mt-0.5 text-xs text-muted">{stat.label}</dt>
              <dd className="text-sm font-bold text-foreground">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex gap-2">
          <Button
            variant={following ? 'secondary' : 'primary'}
            fullWidth
            onClick={toggleFollow}
            aria-pressed={following}
          >
            <Icon
              name={following ? 'check' : 'userPlus'}
              className="size-4"
            />
            {following ? 'Seguindo' : 'Seguir'}
          </Button>
          <Button variant="ghost" aria-label="Enviar mensagem">
            <Icon name="mail" className="size-4" />
            Mensagem
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default ProfileCard
