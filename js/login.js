document.addEventListener("DOMContentLoaded", function () {
    const loginPopup = document.getElementById("loginPopup");
    const signupPopup = document.getElementById("signupPopup");
    const loginTrigger = document.getElementById("loginTrigger");
    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");
    const closePopups = document.querySelectorAll(".close-popup");

    // Show login popup when login icon is clicked
    if (loginTrigger) {
        loginTrigger.addEventListener("click", () => {
            if (loginPopup) {
                loginPopup.classList.add("active");
            }
        });
    }

    // Switch to signup popup
    if (showSignup) {
        showSignup.addEventListener("click", (e) => {
            e.preventDefault();
            if (loginPopup && signupPopup) {
                loginPopup.classList.remove("active");
                signupPopup.classList.add("active");
            }
        });
    }

    // Switch to login popup
    if (showLogin) {
        showLogin.addEventListener("click", (e) => {
            e.preventDefault();
            if (loginPopup && signupPopup) {
                signupPopup.classList.remove("active");
                loginPopup.classList.add("active");
            }
        });
    }

    // Close popups
    closePopups.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (loginPopup && signupPopup) {
                loginPopup.classList.remove("active");
                signupPopup.classList.remove("active");
            }
        });
    });

    // Close popups when clicking outside
    document.addEventListener("click", (e) => {
        if (loginPopup && !loginPopup.contains(e.target) && !loginTrigger.contains(e.target) && loginPopup.classList.contains("active")) {
            loginPopup.classList.remove("active");
        } else if (signupPopup && !signupPopup.contains(e.target) && !loginTrigger.contains(e.target) && signupPopup.classList.contains("active")) {
            signupPopup.classList.remove("active");
        }
    });
});