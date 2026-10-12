// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function(event) {
        // Prevent default page reload
        event.preventDefault();

        // Getting input values (For future database integration, abhi ke liye bas UI ke liye hai)
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Show Success Message
        successMessage.style.display = "block";
        
        // Reset the form fields
        form.reset();

        // Hide success message after 4 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 4000);
    });
});