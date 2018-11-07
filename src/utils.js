export function devicePixelRatio() {
  const dpr = window.devicePixelRatio
  return dpr ? Math.round(dpr) : 2
}

/* eslint-disable */
export function watcher(target, parent, callback) {
  const config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
  }
  const targetWatcher = new MutationObserver(callback)
  const parentWatcher = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      for (let t of mutation.removedNodes) {
        if (t === target) callback()
      }
    }
  })

  targetWatcher.observe(target, config)
  parentWatcher.observe(parent, { childList: true })

  const clean = () => {
    parentWatcher.disconnect()
    targetWatcher.disconnect()
  }
  return {
    targetWatcher,
    parentWatcher,
    clean,
  }
}