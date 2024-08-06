document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signup-form').addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();
            if (response.ok) {
                alert('Signup successful');
                // Handle successful signup (e.g., redirect to login page)
                window.location.href = 'login.html'; // Example redirect
            } else {
                alert(result.error || 'Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    });
});
