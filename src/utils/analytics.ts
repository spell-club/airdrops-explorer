type WindowWithDataLayer = Window & {
	dataLayer: Array<Record<string, any>>
}

declare const window: WindowWithDataLayer

export const captureDataLayer = (name: string, options = {}) => {
	window.dataLayer.push({
		...options,
		event: name,
	})
}
