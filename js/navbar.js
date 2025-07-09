document.addEventListener("DOMContentLoaded", function () {
    const shopToggle = document.getElementById("shopToggle");
    const shopMenu = document.getElementById("shopMenu");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navbarMenu");
    const navActions = document.querySelector(".nav-actions");
    const moveToTop = document.getElementById("moveToTop");

    let isDropdownOpen = false;
    let isNavOpen = false;

    // Toggle dropdown (Shop)
    if (shopToggle && shopMenu) {
        shopToggle.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            isDropdownOpen = !isDropdownOpen;
            shopMenu.style.display = isDropdownOpen ? "block" : "none";
            shopToggle.setAttribute("aria-expanded", isDropdownOpen);
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (e) {
            if (
                isDropdownOpen &&
                !shopMenu.contains(e.target) &&
                !shopToggle.contains(e.target)
            ) {
                shopMenu.style.display = "none";
                shopToggle.setAttribute("aria-expanded", false);
                isDropdownOpen = false;
            }
        });
    }

    // Toggle mobile nav menu and nav actions
    if (menuToggle && navLinks && navActions) {
        menuToggle.addEventListener("click", () => {
            isNavOpen = !isNavOpen;
            navLinks.classList.toggle("show", isNavOpen);
            // Toggle nav-actions visibility within nav-links
            navActions.style.display = isNavOpen ? "flex" : "none";
            menuToggle.classList.toggle("show", isNavOpen);
            menuToggle.innerHTML = isNavOpen ? "×" : "☰";
            menuToggle.setAttribute("aria-expanded", isNavOpen);
            document.body.style.overflow = isNavOpen ? "hidden" : "";
        });

        // Close nav menu and nav actions when clicking outside
        document.addEventListener("click", function (e) {
            if (
                isNavOpen &&
                !navLinks.contains(e.target) &&
                !menuToggle.contains(e.target)
            ) {
                navLinks.classList.remove("show");
                navActions.style.display = "none";
                menuToggle.classList.remove("show");
                menuToggle.innerHTML = "☰";
                menuToggle.setAttribute("aria-expanded", false);
                document.body.style.overflow = "";
                isNavOpen = false;
            }
        });

        // Auto-close nav menu and nav actions on window resize
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768 && isNavOpen) {
                navLinks.classList.remove("show");
                navActions.style.display = "none";
                menuToggle.classList.remove("show");
                menuToggle.innerHTML = "☰";
                menuToggle.setAttribute("aria-expanded", false);
                document.body.style.overflow = "";
                isNavOpen = false;
            }
        });

        // Close nav menu and nav actions when a nav link is clicked (on mobile)
        navLinks.addEventListener("click", function (e) {
            if (e.target.tagName === "A" && isNavOpen) {
                navLinks.classList.remove("show");
                navActions.style.display = "none";
                menuToggle.classList.remove("show");
                menuToggle.innerHTML = "☰";
                menuToggle.setAttribute("aria-expanded", false);
                document.body.style.overflow = "";
                isNavOpen = false;
            }
        });
    }

    // Move to Top button functionality
    if (moveToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                moveToTop.classList.add("show");
            } else {
                moveToTop.classList.remove("show");
            }
        });

        moveToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Add contact-active class when scrolling to #contact
    const contactSection = document.getElementById("contact");
    const body = document.body;

    if (contactSection) {
        window.addEventListener("scroll", function () {
            const rect = contactSection.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                body.classList.add("contact-active");
            } else {
                body.classList.remove("contact-active");
            }
        });
    }
});