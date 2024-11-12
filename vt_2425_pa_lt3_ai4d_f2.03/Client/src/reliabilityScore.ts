function reliabilityScore() {
    const score = Math.random().toFixed(2);
    const result = document.getElementById("reliability") as HTMLSpanElement;
    result.textContent = `Reliability score: ${score}`;
}

document.getElementById("scrapeButton")?.addEventListener('click', reliabilityScore);
