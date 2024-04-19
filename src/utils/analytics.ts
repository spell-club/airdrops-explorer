type WindowWithDataLayer = Window & {
	dataLayer: Array<Record<string, any>>
}

declare const window: WindowWithDataLayer

export const captureDataLayer = (name: string, options = {}) => {
	if (window.dataLayer) {
		window.dataLayer.push({ ...options, event: name })
	}
}

export const onSearch = (value: string) => {
	captureDataLayer('wallet_search', {
		value,
	})
}
