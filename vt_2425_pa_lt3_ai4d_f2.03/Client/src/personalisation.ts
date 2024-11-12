document.addEventListener("DOMContentLoaded", () => {
	lightAndDarkMode();
	const fontSizeInput = document.getElementById("textSizeInput") as HTMLInputElement;
	if (localStorage.getItem("theme") === "light") {
		document.body.classList.add("light-mode");
		document.body.classList.remove("dark-mode");
	} else {
		document.body.classList.add("dark-mode");
		document.body.classList.remove("light-mode");
	}

	const savedFontSize = localStorage.getItem("fontSize");
	if (savedFontSize) {
		document.body.style.fontSize = `${savedFontSize}px`;
		fontSizeInput.value = savedFontSize;
	} else {
		document.body.style.fontSize = "16";
	}
	fontSizeInput.addEventListener("change", () => {
		const fontSize = fontSizeInput.value;
		document.body.style.fontSize = `${fontSize}px`;
		localStorage.setItem("fontSize", fontSize);
	});
});

const backButton = document.getElementById("backButton");
if (backButton) {
	console.log("Back button found");
	backButton.addEventListener("click", () => {
		window.location.href = "/Client/html/index.html";
	});
}

function lightAndDarkMode() {
	const toggle = document.getElementById("lightModeToggle") as HTMLInputElement;
	toggle.addEventListener("change", () => {
		if (toggle.checked) {
			// Set initial mode based on toggle status
			document.body.classList.add("light-mode");
			document.body.classList.remove("dark-mode");
			localStorage.setItem("theme", "light");
		} else {
			// Add event listener for toggle change
			document.body.classList.remove("light-mode");
			document.body.classList.add("dark-mode");
			localStorage.setItem("theme", "dark");
		}
	});
}
