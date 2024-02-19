document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded

    // Set a timeout to open a new page after 5 seconds (adjust the time as needed)
    setTimeout(function() {
        // Replace the absolute path with the full file:// URL
        window.location.href = '..2nd/index.html';
    }, 5000); // 5000 milliseconds = 5 seconds
});
