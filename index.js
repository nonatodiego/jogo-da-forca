const wordEl = document.getElementById('word')
const wrongLetterEl = document.getElementById('wrong-letter')
const playAgainBtn = document.getElementById('play-again')
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

const correctLetter = ['b','u','r','r','o']
const wrongLetter = []

// mostra 
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

displayWord()
console.log(selectedWord)