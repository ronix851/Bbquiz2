// List of words to choose from
const words = [  
    { original: "APPLE", hint: "A popular fruit" },
      { original: "WHALE", hint: "Giant swimming" },
    { original: "TIKTOK", hint: "Best dance show media"},
     { original: "CHRISTMAS", hint: "People celebration" },
    { original: "BANANA", hint: "Yellow fruit" },
    { original: "MARITES", hint: "Your neighborhood / Kapitbahay mong tsismosa" },
    { original: "CHERRY", hint: "Small, red fruit" },
      { original: "HOTDOG", hint: "♨️🐕" },   
    { original: "BEAUTIFUL", hint: "Admired" },
    { original: "GRAPE", hint: "Fruit used to make wine" },
    { original: "PILLOW", hint: "You used to sleep with" },
    { original: "KIWI", hint: "Small, green fruit" },
    { original: "ORANGE", hint: "Citrus fruit" },
      { original: "RAINBOW", hint: "Has different colors" },
    { original: "STRAWBERRY", hint: "Red, sweet fruit" },
    { original: "CHAIR", hint: "You used to sit with" },
    { original: "POLITICIANS", hint: "sometimes called 'the croc 🐊 of government  history'" },
    { original: "EARTH", hint: "Planet" },
    { original: "MOTORCYCLE", hint: "Two-wheel" },
    { original: "PENCIL", hint: "A student tool" },
     { original: "SCANDAL", hint: "Secret" },
    { original: "SLIPPERS", hint: "footwear" },
    { original: "AIRPLANE", hint: "Big bird" },  
    { original: "ELEPHANT", hint: "huge animal" }, 
     { original: "PAPAYA", hint: "Fruit in Leron leron sinta" },  
    { original: "DELICIOUS", hint: "Food" },
    { original: "CALENDAR", hint: "Holds all seasons" }, 
    { original: "PINEAPPLE", hint: "Fruit" }, 
    { original: "FIREWORKS", hint: "🧨🎇🎆" },
    { original: "CALCULATOR", hint: "Holds all numbers" }, 
    { original: "EAGLE", hint: "Bird" },
    { original: "MOBILE", hint: "Type of phone" },
    { original: "SHOES", hint: "footwear" },
    { original: "FACEBOOK", hint: "People addicted nowadays" },
    { original: "INDIGO", hint: "Color" },
    { original: "EGGPLANT", hint: "A plant" },
    { original: "CIRCLE", hint: "A round" },
    { original: "EVACUATION", hint: "Seeking refugee" },
    { original: "SWIMMER", hint: "A person that dives" },
    { original: "TRANSPORT", hint: "Act of transferring" },
    { original: "AMBITIOUS", hint: "Too much dreaming" },
    { original: "BRAVERY", hint: "Act of courage" },
    { original: "MONEY", hint: "Valuable thing" },
    { original: "REINDEER", hint: "Santa's pet" }, 
    { original: "BASKETBALL", hint: "game" },
    { original: "IMPOSSIBLE", hint: "Not true" }, 
    { original: "CHAMPION", hint: "🥇" },
    { original: "BITTER", hint: "Not sweet" },
    { original: "ENCYCLOPEDIA", hint: "A book" }, 
    { original: "PESO", hint: "Currency" },
    { original: "IMPOSSIBLE", hint: "Not true" },
    { original: "PINATUBO", hint: "A Philippine volcano" }, 
    { original: "SUBTRUCT", hint: "Deduct" }, 
    { original: "SALUTE", hint: "Honor" },
    { original: "HORROR", hint: "Scary" },
    { original: "HAPPY", hint: "Merry" },
    { original: "CONNECT", hint: " Two wire" },
    { original: "SHARE", hint: "Give" },
    { original: "SHUFFLE", hint: "Random" },
    { original: "MAGICIAN", hint: "🪄" },
    { original: "HELMET", hint: "Head cover" },
    { original: "LEADER", hint: "Head" },
    { original: "WORTH", hint: "Value" },
    { original: "DIFFERENT", hint: "Unlike" },
    { original: "COMPARE", hint: "Match" },
    { original: "MATCH", hint: "🔥" },
    { original: "WHISTLE", hint: "🌬" },
    { original: "WALLET", hint: "In my pocket" },
    { original: "CRAYONS", hint: "Colors" },
    { original: "BELIEVE", hint: "To trust" },
    { original: "SUCCES", hint: "An achievement" },
    { original: "ENVELOPE", hint: "✉️" },
    { original: "RONALD", hint: "Name of the editor of this game" }, 
    { original: "MAGNIFY", hint: "🔍" },
    { original: "ENHANCE", hint: "To develop" },
    { original: "FINISH", hint: "Ending" },      
];

another.onclick = function(){
    tama.style.display = "none";
}
// Function to scramble a word
function scrambleWord(word) {
    const array = word.split("");
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
}
// Scramble the words in the array
words.forEach(wordObj => {
    wordObj.scrambled = scrambleWord(wordObj.original);
});

// Variables


let timeNow = document.getElementById("timenow");
let today = document.getElementById("day");
let userScore = document.getElementById("user-score");
let main = document.getElementById("main1");
let currentWordIndex = 0;
let currentWord = "";
let timeLeft = 30; 
let timer;
let scoreCount = 0;
const scoreCountElement = document.querySelector("user-score strong");
const wordElement = document.querySelector(".word");
const hintElement = document.querySelector(".hint span");
const timeLeftElement = document.querySelector(".hint strong");
const inputField = document.querySelector("input");
const shuffleButton = document.querySelector(".btn-secondary");
const submitButton = document.querySelector(".btn-dark");
const restartBtn = document.getElementById("btns2");
const closeBtn = document.getElementById("close2");



const now = new Date();
const daysOfWeek = [
  'Domingo', 'Lunes', 'Martes', 'Myerkules', 'Huwebes', 'Byernes', 'Sabado'
];
const dayOfWeek = daysOfWeek[now.getDay()];
const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });

const myList = document.getElementById("day");
 const listItems = myList.querySelectorAll("daysOfWeek");
  const itemColors = ["red", "green", "yellow", "brown", "light-blue", "red", "blue"]; 
listItems.forEach((item, index) => { item.style.color = itemColors[index]; });


   function updateTime() {
   now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
    timeNow.innerHTML = time;
}                        

// Function to start a new round
function newRound() {
    if (currentWordIndex >= words.length) {
        // If all words are used, reset the game
        currentWordIndex = 0;
        
        clearInterval(timer);
        main1.style.display = "none";       
        modal.style.display = "block";
        function totalScore(){
        score2.innerHTML = "Total Score: " + scoreCount;
       
        }
   }
   
    currentWord = words[currentWordIndex];
    wordElement.textContent = currentWord.scrambled;
    hintElement.textContent = currentWord.hint;
    timeLeft = 30;
    inputField.value = "";
    inputField.removeAttribute("disabled");
    submitButton.removeAttribute("disabled");
    clearInterval(timer);
    timer = setInterval(updateTimeLeft, 1000);
    currentWordIndex++;
    userScore.innerHTML = "Score: " + scoreCount;
    score2.innerHTML = "Total Score:  " + scoreCount + " !                 " + "..Out of " + words.length + " Words.";
    today.innerHTML = " " + dayOfWeek + " !";
    timeNow.innerHTML = time;
}

// Function to update the time left
function updateTimeLeft() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        inputField.setAttribute("disabled", "disabled");
        submitButton.setAttribute("disabled", "disabled");
        wala.style.display = "block";
        newRound();
        timeLeft = 30;
          function updateTime() {
    timeNow.innerHTML = time;
}        
    } else {
        timeLeft--;
        timeLeftElement.textContent = `${timeLeft} sec`;
        
    }
}

// Event listeners
shuffleButton.addEventListener("click", newRound);

guess1.addEventListener("keypress", function(){  
    if(event.key === 13 || "Enter") {
     event.preventDefault();
     document.getElementById("submit").click();         
   }
   guess1.addEventListener("click", function() {
    tama.style.display = "none";
    mali.style.display = "none";
    wala.style.display = "none";
    });  
});

restartBtn.onclick = function(){
    modal.style.display = "none";
    main1.style.display = "block";
    newRound();
   
};

closeBtn.addEventListener("click", function(){
    window.open('https://www.facebook.com/profile.php?id=61550731225849&mibextid=ZbWKwL');
    });
  
     
      
 submitButton.addEventListener("click", function () {
    const userGuess = inputField.value.toUpperCase();
    if (userGuess === currentWord.original) {
        
        clearInterval(timer);
        inputField.setAttribute("disabled", "disabled");
        submitButton.setAttribute("disabled", "disabled");
        tama.style.display = "block";
        scoreCount++;
        
        newRound();
         function updateTime() {
         now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
    timeNow.innerHTML = time;
}
        }
        
      else if(userGuess.length == 0){
          wala.style.display = "block";
          tama.style.display = "none";     
          mali.style.display = "none";
        
    } else {    
        wala.style.display = "none";
        tama.style.display = "none";     
        mali.style.display = "block";
        
    }
});

// Initialize the game with the first word
newRound();
  function updateTime() {
  now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
    timeNow.innerHTML = time;
}
