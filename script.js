// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Select the form
    const joinForm = document.getElementById('joinForm');

    // Check if the form exists (so it doesn't crash on pages without the form)
    if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop page refresh

            // Get values
            const name = document.getElementById('name').value;
            const plan = document.getElementById('plan').value;

            // Simple validation feedback
            if(name.length < 2) {
                alert("Please enter a valid name.");
                return;
            }

            // Success Message
            alert(`Welcome to the club, ${name}! You have selected the ${plan.toUpperCase()} plan. We will email you shortly.`);
            
            // Clear form
            joinForm.reset();
        });
    }

    // Console greeting
    console.log("IronForge System Loaded: Ready to lift.");
});