const wordEl = document.getElementById('word')
const wrongLettersEl = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-button')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')


const figureParts = document.querySelectorAll('.figure-part')

const words = 
[
    "alpaca",
    "formiga",
    "burro",
    // "texugo",
    // "barracuda",
    // "morcego",
    // "urso",
    // "castor",
    // "abelha",
    // "javali",
    // "borboleta",
    // "camelo",
    // "capivara",
    // "gato",
    // "lagarta",
    // "gado",
    // "frango",
    // "chinchilla",
    // "cobra",
    // "barata",
    // "bacalhau",    
    // "llama",
    // "lagosta",
    // "gafanhoto",
    // "macaco",
    // "alce",   
    // "ovelhas",
    // "caracol",
    // "cobra",
    // "pardal",
    // "aranha",
    // "lula",
    // "esquilo",
    // "cegonha",
    // "cisne",
    // "tigre",
    // "sapo",
    // "truta",
    // "tartaruga",
    // "abutre",
    // "morsa",
    // "vespa",
    // "baleia",
    // "lobo",
    // "galinhola",
    // "minhoca",    
    // "zebra",
]

let selectedWord = words[Math.floor(Math.random() * words.length)]

const correctLetter = []
const wrongLetter = []

// mostra as letras no display
function displayWord() {
    wordEl.innerHTML = `
        ${selectedWord
            .split('')
            .map(
                letter => `
                    <span class="letter">
                        ${correctLetter.includes(letter) ? letter : ''}
                    </span>
                `
            )
            .join('')}
    ` 

    const innerWord = wordEl.innerText.replace(/\n/g,'')

    if(innerWord === selectedWord) {
        finalMessage.innerText = 'Parabéns, você ganhou ✨';
        popup.style.display = 'flex'
    }
}

// atualizando o array de letras erradas
function updateWrongLettersEl(){
    // mostra as letras erradas
    wrongLettersEl.innerHTML = `
        ${wrongLetter.length > 0 ? '<p>errou</p>' : ''}
        ${wrongLetter.map(letter => `<span>${letter}</span>`)}
    `;

    // mostra o bonequinho na forca
    figureParts.forEach((part,index) => {
        const errors = wrongLetter.length

        if(index < errors) {
            part.style.display = 'block'
        } else {
            part.style.display = 'none'
        }
    })

    // Verifica se perdeu
    if(wrongLetter.length === figureParts.length) {
        finalMessage.innerText = 'Você perdeu! 🦹‍♂️'
        popup.style.display = 'flex'
    }
    
}

// mostrar notification
function showNotification() {
    notification.classList.add('show')

    setTimeout(() => {
    notification.classList.remove('show')        
    }, 5000);
}


//  saber a letra digitada
window.addEventListener('keydown', e => {
    // console.log(e.keyCode)
    if(e.keyCode >= 65 && e.keyCode <= 90) {
        // console.log(123)
        const letter = e.key

        if(selectedWord.includes(letter)){
            if(!correctLetter.includes(letter)){
                correctLetter.push(letter)

                displayWord()
            } else {
                showNotification()
            }
        } else {
            if(!wrongLetter.includes(letter)) {
                wrongLetter.push(letter)

                updateWrongLettersEl()
            } else {
                showNotification()
            }
        }
    }
})

// Recomeça o jogo
playAgainBtn.addEventListener('click', () => {
    correctLetter.splice(0);
    wrongLetter.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)]

    displayWord()

    updateWrongLettersEl()

    popup.style.display = 'none'
})

displayWord()
// console.log(selectedWord)