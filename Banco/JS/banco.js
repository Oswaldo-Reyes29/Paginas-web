// Menú lateral
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Submenús
document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', function() {
        let submenu = this.nextElementSibling;
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        let icon = this.querySelector("span");
        icon.textContent = icon.textContent === "+" ? "−" : "+";
    });
});