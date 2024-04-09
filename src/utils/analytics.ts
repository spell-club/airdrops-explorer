type WindowWithDataLayer = Window & {
  gtag: Function
}

declare const window: WindowWithDataLayer

export const captureGtag = (name: string, options = {}) => {
  return window.gtag('event', name, options)
}
