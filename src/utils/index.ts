import numbro from 'numbro'

type RoundingMethod = 'round' | 'ceil' | 'floor' | 'trunc'

export function roundToPrecision({
  value,
  precision,
  method = 'round',
}: {
  value: number
  precision: number
  method?: RoundingMethod
}) {
  const tenToThePowerPrecision = 10 ** precision
  return Math[method](value * tenToThePowerPrecision) / tenToThePowerPrecision
}

export const formatValue = (value: number, precision?: number) => {
  const truncatedAmount = roundToPrecision({
    value,
    precision: precision ?? 2,
    method: 'floor',
  })

  const roundFormat = {
    trimMantissa: true,
    thousandSeparated: true,
  }

  return String(numbro(truncatedAmount).format(roundFormat))
}
