// On page load or when changing themes, best to add inline `head` to avoid FOUC

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

//Whenever then user explicitly chooses light mode
localStorage.theme = "light";

//Whenever then user explicitly chooses light mode
localStorage.theme = "dark";

//Whenever then user explicitly chooses light mode
localStorage.theme = "theme";
