function isIE() {
  return !isNaN(Number(document.documentMode));
}
function isEdge() {
  return navigator.userAgent.indexOf("Edge") > -1;
}
function isFirefox() {
  return window.navigator.userAgent.match(/firefox/i);
}
