function handleGoogleLogin() {
    // Redirect to Google's OAuth 2.0 endpoint
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?...';
}

function handleLinkedInLogin() {
    // Redirect to LinkedIn's OAuth 2.0 endpoint
    window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?...';
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        window.location.href = "index.html"; // Redirect to index.html
    } else {
        alert("Please enter both username and password.");
    }
});