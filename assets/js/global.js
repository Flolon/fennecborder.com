function $(qs) {
	if (qs.startsWith("#")) return document.querySelector(qs);
	return document.querySelectorAll(qs);
}

function refreshTheme() {
    let themeName = localStorage.getItem("theme") || "default-theme";
    document.documentElement.className = themeName;
}

refreshTheme();