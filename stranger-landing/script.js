const toggleButton = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

toggleButton.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", newTheme);
  toggleButton.textContent = newTheme === "light" ? "🌑 Mundo Invertido" : "🌕 Mundo Real";
});
