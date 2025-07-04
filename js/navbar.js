document.addEventListener("DOMContentLoaded", function () {
    const shopToggle = document.getElementById("shopToggle");
    const shopMenu = document.getElementById("shopMenu");

    let isDropdownOpen = false;

    shopToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        isDropdownOpen = !isDropdownOpen;
        shopMenu.style.display = isDropdownOpen ? "block" : "none";
    });

    document.addEventListener("click", function (e) {
        if (!shopMenu.contains(e.target) && !shopToggle.contains(e.target)) {
            shopMenu.style.display = "none";
            isDropdownOpen = false;
        }
    });
});

// Toggle dropdown menu on click (for mobile/touch devices)
document.getElementById('shopToggle').addEventListener('click', function(e) {
    e.preventDefault();
    const menu = document.getElementById('shopMenu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});
