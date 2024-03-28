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
