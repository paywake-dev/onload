console.log("\u00A9 " + YEAR.toString() + " Paywake Corporation")
if (window.location.pathname === "/hidebanner") {
  window.location.replace(REDIRECT_HIDEBANNER);
}
else {
  window.location.replace(REDIRECT);
}
