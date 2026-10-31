const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const numberFormatter = new Intl.NumberFormat('pt-BR')

export function formatCurrency(value) {
  return currencyFormatter.format(value)
}

export function formatNumber(value) {
  return numberFormatter.format(value)
}
