export function devicePixelRatio() {
  const dpr = window.devicePixelRatio
  return dpr ? Math.round(dpr) : 2
}

export function watcher(target, parent, callback) {
  const config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
  }
  const targetWatcher = new MutationObserver(callback)
  const parentWatcher = new MutationObserver((mutationsList) => {
    mutationsList.forEach(mutation => {
      mutation.removedNodes.forEach(t => {
        if (t === target) callback()
      })
    })
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
