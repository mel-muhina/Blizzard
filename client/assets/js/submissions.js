document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Fetching data from the backend
        const response = await fetch('/submissions', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });

        if (response.ok) {
            const data = await response.json();
            const stats = data.stats;
            const container = document.getElementById('card-container');

            
            stats.forEach(stat => {
                const card = document.createElement('div');
                card.className = 'col-md-4';
                
                card.innerHTML = `
                    <div class="card mb-4 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">${stat.question_description}</h5>
                            <p class="card-text">Percentage Correct: ${stat.percentage_correct.toFixed(2)}%</p>
                        </div>
                    </div>
                `;

                container.appendChild(card);
            });
        } else {
            console.error('Failed to fetch stats:', response.status);
        }
    } catch (err) {
        console.error('Error fetching stats:', err);
    }
});
