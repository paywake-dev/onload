(() => {

  //TOGGLE THIS ON LAUNCH
  const IS_REDIRECTING = false

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
  else {
    localStorage.setItem(LOCAL_STORAGE_TAG, true)
    console.log("%cDEV", "color: red", "mode enabled")
    if (!(new URLSearchParams(window.location.search)).get("hidebanner")) {
      let banner = document.createElement("div")
      banner.className = "__dev-banner"
      let text = document.createElement("p")
      text.innerHTML = "You're using an unstable version of Paywake. <a href='https://paywake.net' style='color: white; text-decoration-color: white;'>Back to Safety</a>"
      let close = document.createElement("img")
      close.src = "https://onload.paywake.net/package/dev.png"
      close.onclick = () => {
        banner.remove()
        window.location.replace(location.href.toString() + "&hidebanner=true")
      }
      banner.appendChild(text)
      banner.appendChild(close)
      $(window).on("load", () => {
        $("head").append("<link rel='stylesheet' type='text/css' href='https://onload.paywake.net/package/dev.css'>");
        document.body.appendChild(banner)
      })
    }
    else {
      console.log("%cHIDE-BANNER", "color: lime", "mode enabled")
    }
  }
})()
