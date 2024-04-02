import numbro from 'numbro'
import { toSvg } from 'jdenticon'

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

export const generateIcon = (address: string, size = 100) => {
  const icon = Buffer.from(toSvg(address, size)).toString('base64')

  return `data:image/svg+xml;base64,${icon}`
}
