document.addEventListener('DOMContentLoaded', function () {
    const cardsData = [
        {
            title: 'Caesar',
            imgSrc: 'https://via.placeholder.com/150?text=Caesar',
            bgColor: 'bg-primary',
            buttonText: 'Start',
            id: 1
        },
        {
            title: 'Cleopatra',
            imgSrc: 'https://via.placeholder.com/150?text=Cleopatra',
            bgColor: 'bg-success',
            buttonText: 'Discover',
            id: 2
        },
        {
            title: 'Lincoln',
            imgSrc: 'https://via.placeholder.com/150?text=Lincoln',
            bgColor: 'bg-warning',
            buttonText: 'Start',
            id: 3
        },
        {
            title: 'Aristotle',
            imgSrc: 'https://via.placeholder.com/150?text=Aristotle',
            bgColor: 'bg-danger',
            buttonText: 'Go',
            id: 4
        },
        {
            title: 'Nelson',
            imgSrc: 'https://via.placeholder.com/150?text=Nelson',
            bgColor: 'bg-info',
            buttonText: 'Explore',
            id: 5
        }
    ];

    const cardsContainer = document.getElementById('cardsContainer');
    
    // Create card elements
    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'col-md-3 text-center mb-4';
        cardElement.innerHTML = `
            <div class="card ${card.bgColor} text-light border-light h-100">
                <img src="${card.imgSrc}" class="card-img-top rounded-circle p-3 mx-auto d-block" alt="${card.title}">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <button type="button" class="btn btn-light" data-id="${card.id}">${card.buttonText}</button>
                </div>
            </div>
        `;
        cardsContainer.appendChild(cardElement);
    });

    // Event listener for button clicks
    document.getElementById('cardsContainer').addEventListener('click', async function (e) {
        if (e.target.tagName === 'BUTTON') {
            const characterId = e.target.getAttribute('data-id');
            await fetchCharacterData(characterId);
        }
    });

    // Fetch character data and events based on ID
    async function fetchCharacterData(characterId) {
        try {
            const apiUrl = "https://blizzard-5jur.onrender.com"; // Replace with your actual API URL
            
            // Fetch character details
            const respData = await fetch(`${apiUrl}/characters/${characterId}`);
            if (!respData.ok) throw new Error("Failed to fetch character data");
            const characterData = await respData.json();

            // Fetch related events
            const respEvents = await fetch(`${apiUrl}/events?character_id=${characterId}`);
            if (!respEvents.ok) throw new Error("Failed to fetch events data");
            const eventsData = await respEvents.json();

            // Display character and events details
            displayCharacterDetails(characterData, eventsData);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Display fetched character details and events
    function displayCharacterDetails(character, events) {
        // Ensure the characterDetails element exists
        const characterDetails = document.getElementById('characterDetails');
        if (!characterDetails) {
            console.error("Element with ID 'characterDetails' not found");
            return;
        }

        // Clear previous details
        characterDetails.innerHTML = '';

        // Display character info
        const characterInfo = document.createElement('div');
        characterInfo.className = 'card mb-4';
        characterInfo.innerHTML = `
            <div class="card-header">${character.character_name}</div>
            <img src="${character.image_url}" class="card-img-top" alt="${character.character_name}">
            <div class="card-body">
                <p>Born in: ${character.birth_year}</p>
            </div>
        `;
        characterDetails.appendChild(characterInfo);

        // Display events and their images
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = 'card mb-4';
            eventElement.innerHTML = `
                <img src="${event.bg_image_url}" class="card-img-top" alt="${event.event_description}">
                <div class="card-body">
                    <h5 class="card-title">${event.event_description}</h5>
                    <img src="${event.char_image_url}" class="img-fluid" alt="Character event image">
                </div>
            `;
            characterDetails.appendChild(eventElement);
        });
    }
});
