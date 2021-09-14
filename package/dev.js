(() => {

  //TOGGLE THIS ON LAUNCH
  const IS_REDIRECTING = true

  //REDIRECTS
  const REDIRECT = "https://launch.paywake.net"
  const QR_REDIRECT = "https://launch.paywake.net/?source=qr"

  const SOURCE = (new URLSearchParams(window.location.search)).get("source")
  if (SOURCE === "qr") {
    if (IS_REDIRECTING) {
      window.location.replace(QR_REDIRECT)
    }
  }
  else if (SOURCE !== "dev") {
    if (IS_REDIRECTING) {
      window.location.replace(REDIRECT)
    }
  }
  else {
    let banner = document.createElement("div")
    banner.className = "__dev-banner"
    let text = document.createElement("p")
    text.innerHTML = "You are currently in <B>DEV</B> mode."
    let close = document.createElement("img")
    close.src = "https://dev.paywake.net/package/dev.png"
    close.onclick = () => {
      banner.remove()
    }
    banner.appendChild(text)
    banner.appendChild(close)
    $(window).on("load", () => {
      document.body.appendChild(banner)
    })
  }
})()
