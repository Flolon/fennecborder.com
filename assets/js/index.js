$("#changeThemeBtn").addEventListener("click", (e) => {
    if (localStorage.getItem("theme") === "default-theme") {
        localStorage.setItem("theme", "dark-theme");
        document.querySelector("#changeThemeBtn svg").innerHtml = lightTheme
    } else {
        localStorage.setItem("theme", "default-theme");
    }
    refreshTheme();
});
