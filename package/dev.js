(() => {

  //TOGGLE THIS ON LAUNCH
  const IS_REDIRECTING = true

  const REDIRECT = "https://launch.paywake.net"
  const QR_REDIRECT = "https://launch.paywake.net/?source=qr"
  const LOCAL_STORAGE_TAG = "__paywake-dev"
  const SUBDOMAIN = window.location.host.split(".")[0].toLowerCase()

  const SOURCE = (new URLSearchParams(window.location.search)).get("source")
  if (SOURCE === "qr") {
    localStorage.setItem(LOCAL_STORAGE_TAG, false)
    if (IS_REDIRECTING) {
      window.location.replace(QR_REDIRECT)
    }
  }
  else if ((SOURCE !== "dev") && (SUBDOMAIN !== "dev")) {
    localStorage.setItem(LOCAL_STORAGE_TAG, false)
    if (IS_REDIRECTING) {
      window.location.replace(REDIRECT)
    }
  }
})()
