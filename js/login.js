// login.js

document.addEventListener("DOMContentLoaded", () => {
    const loginPopup = document.getElementById("loginPopup");
    const signupPopup = document.getElementById("signupPopup");

    const loginIcon = document.querySelector(".login-icon");

    const showSignupBtn = document.getElementById("showSignup");
    const showLoginBtn = document.getElementById("showLogin");

    const closeLoginBtn = document.getElementById("closeLogin");
    const closeSignupBtn = document.getElementById("closeSignup");

    // Show login popup
    loginIcon.addEventListener("click", () => {
        loginPopup.style.display = "flex";
        loginPopup.classList.add("active");
        signupPopup.style.display = "none";
        signupPopup.classList.remove("active");
    });

    // Show signup popup from login popup
    showSignupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        loginPopup.style.display = "none";
        loginPopup.classList.remove("active");

        signupPopup.style.display = "flex";
        signupPopup.classList.add("active");
    });

    // Show login popup from signup popup
    showLoginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        signupPopup.style.display = "none";
        signupPopup.classList.remove("active");

        loginPopup.style.display = "flex";
        loginPopup.classList.add("active");
    });

    // Close login popup
    closeLoginBtn.addEventListener("click", () => {
        loginPopup.style.display = "none";
        loginPopup.classList.remove("active");
    });

    // Close signup popup
    closeSignupBtn.addEventListener("click", () => {
        signupPopup.style.display = "none";
        signupPopup.classList.remove("active");
    });

    // Close modal when clicking outside the popup content
    [loginPopup, signupPopup].forEach((popup) => {
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
                popup.classList.remove("active");
            }
        });
    });
});

// Get the login popup and close button
const loginPopup = document.getElementById('loginPopup');
const closeButtons = document.querySelectorAll('.close-popup');

// Add event listener for all close buttons (in login and signup popups)
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class to hide popup
        loginPopup.classList.remove('active');
        signupPopup.classList?.remove('active'); // in case you have signup popup
    });
});
