let theme;
let themeChangeCallbacks = [];

const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");

function isDarkMode() {
	return themeQuery.matches;
}


function createTheme() {
	if (isDarkMode()) {
		return {
			name: "dark",
			bg: color(35),
			fg: color(235)
		};
	} else {
		return {
			name: "light",
			bg: color(235),
			fg: color(35)
		};
	}
}

function updateTheme() {
	theme = createTheme();
	for (const callback of themeChangeCallbacks) {
		callback(theme);
	}
	return theme;
}

function onThemeChange(callback) {
	if (typeof callback === "function") {
		themeChangeCallbacks.push(callback);
	}
}

themeQuery.addEventListener("change", () => {
	updateTheme();
});
