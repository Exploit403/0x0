// auth.js
const PASSWORD = "726f6f74"; // Change this

// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {

    // Hide all site content initially
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    if(header) header.style.display = "none";
    if(main) main.style.display = "none";
    if(footer) footer.style.display = "none";

    // Create login form
    const loginDiv = document.createElement("div");
    loginDiv.id = "login";
    loginDiv.style.height = "100vh";
    loginDiv.style.display = "flex";
    loginDiv.style.justifyContent = "center";
    loginDiv.style.alignItems = "center";

    loginDiv.innerHTML = `
        <div class="login-box" style="
            background:#1e1e1e;
            padding:30px;
            border-radius:10px;
            border:1px solid #333;
            text-align:center;
        ">
            <h2>Lunex Group Portal Login</h2>
            <input type="password" id="password-input" placeholder="Enter Password" style="padding:10px;width:200px;border-radius:5px;border:none;">
            <button id="login-btn" style="margin-top:10px;padding:10px;width:100%;background:#00ff99;border:none;cursor:pointer;">Login</button>
            <div id="error-message" style="color:#ff5555;margin-top:10px;font-size:0.9em;"></div>
        </div>
    `;

    document.body.prepend(loginDiv);

    // Login button logic
    document.getElementById("login-btn").addEventListener("click", () => {
        const input = document.getElementById("password-input").value;
        const error = document.getElementById("error-message");

        if(input === PASSWORD) {
            // Hide login form
            loginDiv.style.display = "none";
            // Show site content
            if(header) header.style.display = "block";
            if(main) main.style.display = "block";
            if(footer) footer.style.display = "block";
        } else {
            error.textContent = "Incorrect password. Please try again.";
            document.getElementById("password-input").value = "";
            document.getElementById("password-input").focus();
        }
    });
});
