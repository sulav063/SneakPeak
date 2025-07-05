document.addEventListener("DOMContentLoaded", function () {
    const shopToggle = document.getElementById("shopToggle");
    const shopMenu = document.getElementById("shopMenu");

    let isDropdownOpen = false;

    shopToggle.addEventListener("click", function (e) {
        e.preventDefault();       // prevent default link behavior, if any
        e.stopPropagation();      // stop the click from bubbling
        isDropdownOpen = !isDropdownOpen;

        if (isDropdownOpen) {
            shopMenu.classList.add("open");
        } else {
            shopMenu.classList.remove("open");
        }
    });

    document.addEventListener("click", function (e) {
        if (
            isDropdownOpen &&
            !shopMenu.contains(e.target) &&
            !shopToggle.contains(e.target)
        ) {
            shopMenu.classList.remove("open");
            isDropdownOpen = false;
        }
    });
});
