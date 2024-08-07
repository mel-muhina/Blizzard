
document.addEventListener('DOMContentLoaded', function () {
    const cardsData = [
        {
            title: 'Caesar',
            imgSrc: 'https://via.placeholder.com/150?text=Caesar',
            bgColor: 'bg-primary',
            buttonText: 'Start'
        },
        {
            title: 'Cleopatra',
            imgSrc: 'https://via.placeholder.com/150?text=Cleopatra',
            bgColor: 'bg-success',
            buttonText: 'Discover'
        },
        {
            title: 'Abraham Lincoln',
            imgSrc: 'https://via.placeholder.com/150?txt=Lincoln',
            bgColor: 'bg-warning',
            buttonText: 'Start'
        },
        {
            title: 'Aristotle',
            imgSrc:'https://via.placeholder.com/150?text=Aristotle',
            bgColor: 'bg-danger',
            buttonText: 'Go'
        },
        {
            title: 'Nelson',
            imgSrc: 'https://via.placeholder.com/150?text=Nelson',
            bgColor: 'bg-info',
            buttonText: 'Explore'
        },
        {
            title: 'Churchill',
            imgSrc: 'https://via.placeholder.com/150?text=Churchill',
            bgColor: 'bg-dark',
            buttonText: 'Discover'
        }
    ];

    const cardsContainer = document.getElementById('cardsContainer');

    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'col-md-3 text-center mb-4';
        cardElement.innerHTML = `
            <div class="card ${card.bgColor} text-light border-light h-100">
                <img src="${card.imgSrc}" class="card-img-top rounded-circle p-3 mx-auto d-block" alt="${card.title}">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <button type="button" class="btn btn-light">${card.buttonText}</button>
                </div>
            </div>
        `;
        cardsContainer.appendChild(cardElement);
    });
});
