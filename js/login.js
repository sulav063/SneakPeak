document.addEventListener("DOMContentLoaded", function () {
    const loginPopup = document.getElementById("loginPopup");
    const signupPopup = document.getElementById("signupPopup");
    const loginIcon = document.querySelector(".login-icon");
    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");
    const closePopups = document.querySelectorAll(".close-popup");

    // Debug logs to check element availability
    console.log("loginPopup:", loginPopup);
    console.log("loginIcon:", loginIcon);

    // Show login popup when login icon is clicked
    if (loginIcon) {
        loginIcon.addEventListener("click", () => {
            console.log("Login icon clicked");
            if (loginPopup) {
                loginPopup.classList.add("active");
            } else {
                console.error("loginPopup not found");
            }
        });
    } else {
        console.error("loginIcon not found");
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
        if (loginPopup && !loginPopup.contains(e.target) && !loginIcon.contains(e.target) && loginPopup.classList.contains("active")) {
            loginPopup.classList.remove("active");
        } else if (signupPopup && !signupPopup.contains(e.target) && !loginIcon.contains(e.target) && signupPopup.classList.contains("active")) {
            signupPopup.classList.remove("active");
        }
    });
});