/**
 * Adds dynamic <style> to the head
 * @param String cssCode
 */

export function attachDynamicCSS(cssCode) {
  const styleEl = document.createElement("style");

  styleEl.innerHTML = cssCode;
  document.getElementsByTagName("head")[0].appendChild(styleEl);
}
