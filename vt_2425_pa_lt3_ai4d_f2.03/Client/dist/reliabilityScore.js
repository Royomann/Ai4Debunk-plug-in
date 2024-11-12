"use strict";
var _a;
function reliabilityScore() {
    const score = Math.random().toFixed(2);
    const result = document.getElementById("reliability");
    result.textContent = `Reliability score: ${score}`;
}
(_a = document.getElementById("scrapeButton")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', reliabilityScore);
