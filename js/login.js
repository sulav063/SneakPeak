document.addEventListener("DOMContentLoaded", () => {
    const loginPopup = document.getElementById("loginPopup");
    const signupPopup = document.getElementById("signupPopup");

    const loginIcon = document.querySelector(".login-icon");

    const showSignupBtn = document.getElementById("showSignup");
    const showLoginBtn = document.getElementById("showLogin");

    const closeButtons = document.querySelectorAll(".close-popup");

    // Show login popup
    loginIcon?.addEventListener("click", () => {
        showPopup(loginPopup);
        hidePopup(signupPopup);
    });

    // Switch to signup popup
    showSignupBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        hidePopup(loginPopup);
        showPopup(signupPopup);
    });

    // Switch back to login popup
    showLoginBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        hidePopup(signupPopup);
        showPopup(loginPopup);
    });

    // Close buttons in either popup
    closeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            hidePopup(loginPopup);
            hidePopup(signupPopup);
        });
    });

    // Close popups when clicking outside content
    [loginPopup, signupPopup].forEach((popup) => {
        popup?.addEventListener("click", (e) => {
            if (e.target === popup) {
                hidePopup(popup);
            }
        });
    });

    // Utility: show popup
    function showPopup(popup) {
        if (!popup) return;
        popup.style.display = "flex";
        popup.classList.add("active");
    }

    // Utility: hide popup
    function hidePopup(popup) {
        if (!popup) return;
        popup.style.display = "none";
        popup.classList.remove("active");
    }
});
