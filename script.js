document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".nav ul li");

    menuItems.forEach(item => {
        const submenu = item.querySelector("ul");
        if (submenu) {
            item.addEventListener("click", function(e) {
                e.stopPropagation();
                submenu.classList.toggle("show");
            });
        }
    });
});
