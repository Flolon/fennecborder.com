function updateThemeSelector() {
	let themeSelector = $("#changeThemeBtn");
	const svg = document.createElement("svg");
	if (localStorage.getItem("theme") === "default-theme") {
		svg.innerHTML = darkTheme;
	} else {
		svg.innerHTML = lightTheme;
	}
	themeSelector.querySelector("svg").remove();
	themeSelector.append(svg);
}

$("#changeThemeBtn").addEventListener("click", (e) => {
	if (localStorage.getItem("theme") === "default-theme") {
		localStorage.setItem("theme", "dark-theme");
	} else {
		localStorage.setItem("theme", "default-theme");
	}
	updateThemeSelector();
	refreshTheme();
});

updateThemeSelector();
