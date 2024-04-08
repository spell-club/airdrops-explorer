export const captureGtag = (name: string, options = {}) => {
  return (window as any).gtag('event', name, options)
}
