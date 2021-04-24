document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        {   
            'name': 'esquizoide1',
            'url': 'images/1.jpg'
        }, 
        {   
            'name': 'esquizoide1',
            'url': 'images/1.jpg'
        },
        {   
            'name': 'esquizoide2',
            'url': 'images/2.jpg'
        }, 
        {   
            'name': 'esquizoide2',
            'url': 'images/2.jpg'
        },
        {   
            'name': 'esquizoide3',
            'url': 'images/3.jpg'
        }, 
        {   
            'name': 'esquizoide3',
            'url': 'images/3.jpg'
        }, 
        {   
            'name': 'esquizoide4',
            'url': 'images/4.jpg'
        }, 
        {   
            'name': 'esquizoide4',
            'url': 'images/4.jpg'
        },
        {   
            'name': 'esquizoide5',
            'url': 'images/5.jpg'
        }, 
        {   
            'name': 'esquizoide5',
            'url': 'images/5.jpg'
        }, 
        {   
            'name': 'esquizoide6',
            'url': 'images/6.jpg'
        }, 
        {   
            'name': 'esquizoide6',
            'url': 'images/6.jpg'
        }, 
        {   
            'name': 'esquizoide7',
            'url': 'images/7.jpg'
        }, 
        {   
            'name': 'esquizoide7',
            'url': 'images/7.jpg'
        }, 
        {   
            'name': 'esquizoide8',
            'url': 'images/8.jpg'
        }, 
        {   
            'name': 'esquizoide8',
            'url': 'images/8.jpg'
        }, 
        {   
            'name': 'esquizoide9',
            'url': 'images/9.jpg'
        }, 
        {   
            'name': 'esquizoide9',
            'url': 'images/9.jpg'
        }, 
        {   
            'name': 'esquizoide10',
            'url': 'images/10.jpg'
        },
        {   
            'name': 'esquizoide10',
            'url': 'images/10.jpg'
        }
    ];

    const grid = document.querySelector('.grid');
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    cards.sort(() => 0.5 - Math.random());

    function createBoard() {
        for (var i = 0; i < cards.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/card.png');
            console.log(card.id);
            card.setAttribute('data-id', i);
            card.classList.add('card');
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id'); 
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].url);

        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'images/achou.png');
            cards[optionOneId].classList.add('avoid-clicks');
            cards[optionTwoId].setAttribute('src', 'images/achou.png');
            cards[optionTwoId].classList.add('avoid-clicks');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/card.png');
            cards[optionTwoId].setAttribute('src', 'images/card.png');
        }
        cardsChosen = [];
        cardsChosenId = [];

        console.log(cardsWon);
        console.log(cardsWon.length === cards.length);
        if(cardsWon.length === cards.length/2) {
          Swal.fire({
                title: "Parábens",
                text: "Você concluiu o desafio com sucesso, mande o código a seguir por e-mail para receber a recompensa",
                preConfirm: () => Swal.fire('Código: CIRILO_CARECA')
            });
        }

    }

    createBoard();

});