export function devicePixelRatio() {
  const dpr = window.devicePixelRatio
  return dpr ? Math.round(dpr) : 2
}
