$("#changeThemeBtn").addEventListener("click", (e) => {
	if (localStorage.getItem("theme") === null || localStorage.getItem("theme") === "default-theme") {
		localStorage.setItem("theme", "dark-theme");
	} else {
		localStorage.setItem("theme", "default-theme");
	}
	updateThemeSelector();
	refreshTheme();
});

updateThemeSelector();
