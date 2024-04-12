import numbro from 'numbro'
import { toSvg } from 'jdenticon'
import { prominent } from 'color.js'

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

export const formatValue = (value: number, precision?: number, average = false) => {
	const truncatedAmount = roundToPrecision({
		value,
		precision: precision ?? 2,
		method: 'floor',
	})

	const roundFormat = {
		trimMantissa: true,
		thousandSeparated: true,
		average,
	}

	return String(numbro(truncatedAmount).format(roundFormat))
}

export const generateIcon = (address: string, size = 100) => {
	const icon = Buffer.from(toSvg(address, size)).toString('base64')

	return `data:image/svg+xml;base64,${icon}`
}

export const getProminentColor = (img: string) => {
	return prominent(img, { format: 'hex', amount: 2 }).then((data) => {
		if (data[0] == '#000000') {
			return data[1]
		}

		return data[0]
	})
}

export const daysAgoFromDate = (airdropDate: string): string => {
	const parts = airdropDate.split('.')

	const jsDateStr = `${parts[1]}/${parts[0]}/${parts[2]}`

	const dateObj = new Date(jsDateStr)

	const daysDifference = Math.floor((Date.now() - dateObj.getTime()) / (1000 * 60 * 60 * 24))

	return `${daysDifference} days ago`
}
