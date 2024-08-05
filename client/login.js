document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('http://localhost:3000/users/login', { 
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login successful!');
            
            localStorage.setItem('token', data.token);
            window.location.href = 'index.html'; 
        } else {
            alert(`Login failed: ${data.error}`);
        }
    } catch (err) {
        alert('An error occurred while trying to log in.');
    } finally {
      
        form.reset();
    }
});

