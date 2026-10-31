import { useState } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import { products } from '../../data/products'
import { formatCurrency } from '../../utils/format'

const tones = {
  sky: 'from-sky-100 to-sky-50 text-sky-600',
  violet: 'from-violet-100 to-violet-50 text-violet-600',
  amber: 'from-amber-100 to-amber-50 text-amber-600',
}

function ProductCard() {
  const [favorites, setFavorites] = useState([])

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => {
          const isFavorite = favorites.includes(product.id)

          return (
            <Card
              key={product.id}
              as="article"
              className="group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className={`relative grid aspect-4/3 place-items-center bg-linear-to-br ${tones[product.tone]}`}
              >
                <Icon
                  name={product.icon}
                  className="size-14 transition duration-300 group-hover:scale-105"
                  strokeWidth="1.5"
                />

                {product.badge ? (
                  <Badge
                    variant={product.badge.variant}
                    className="absolute top-3 left-3"
                  >
                    {product.badge.label}
                  </Badge>
                ) : null}

                <button
                  type="button"
                  onClick={() => toggleFavorite(product.id)}
                  aria-pressed={isFavorite}
                  aria-label={
                    isFavorite
                      ? `Remover ${product.name} dos favoritos`
                      : `Favoritar ${product.name}`
                  }
                  className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-surface/90 text-slate-500 shadow-sm transition hover:text-danger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <Icon
                    name="heart"
                    className={`size-4 ${isFavorite ? 'fill-current text-danger' : ''}`}
                  />
                </button>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold tracking-wider text-muted uppercase">
                  {product.category}
                </p>
                <h3 className="mt-1 text-base font-bold tracking-tight">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-sm">
                  <Icon
                    name="star"
                    className="size-4 fill-current text-warning"
                  />
                  <span className="font-semibold text-foreground">
                    {product.rating.toFixed(1).replace('.', ',')}
                  </span>
                  <span className="text-muted">({product.reviews})</span>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-lg font-bold tracking-tight">
                    {formatCurrency(product.price)}
                  </span>
                  {product.oldPrice ? (
                    <span className="text-sm text-muted line-through">
                      {formatCurrency(product.oldPrice)}
                    </span>
                  ) : null}
                </div>

                <div className="mt-auto pt-4">
                  <Button
                    fullWidth
                    variant={product.inStock ? 'primary' : 'secondary'}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? (
                      <>
                        <Icon name="plus" className="size-4" />
                        Adicionar
                      </>
                    ) : (
                      'Esgotado'
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <p className="mt-4 text-sm text-slate-600" aria-live="polite">
        {favorites.length === 0
          ? 'Nenhum produto favoritado ainda.'
          : `${favorites.length} ${favorites.length === 1 ? 'produto' : 'produtos'} nos favoritos.`}
      </p>
    </div>
  )
}

export default ProductCard
