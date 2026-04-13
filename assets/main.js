const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#main-menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        const expanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!expanded));
        menu.classList.toggle("is-open");
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}
