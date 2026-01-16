# Projects related to DOM

## Project Link
[click here]()


# Solution code

## Project One
```javascript
console.log("Amos")
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

## project 2 Solution

```javascript

const form = document.querySelector('form');
// const height = parseInt(document.querySelector("#height").value) // this gives empty value because of js automatically run

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results').value;

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give the valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give the valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);

    // Show the result
    results.innerHTML = `<span> ${bmi}</span`;
  }

  if (results < 18.6) {
    console.log(`Under wieght`);
  } else if (results > 18.6 && results < 24.9) {
    console.log(`Normal range`);
  } else {
    console.log(`Overweight`);
  }
});


```

## Project 3 solution 

```javascript

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleString);
  clock.innerHTML = date.toLocaleTimeString;
}, 1000);


```

## project 4 Solution 

```javascript

let randNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResults');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGames = true;

if (playGames) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid Number');
  } else if (guess < 1) {
    alert('Please enter greater than 0');
  } else if (guess > 100) {
    alert('Please enter less than hundred');
  } else {
    prevGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuesses++;
  remaining.innerHTML = `${10 - numGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGames = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', (e) => {
    e.preventDefault();
    randNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGames = true;
  });
}


```

## Project 5 solution 

```javascript

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="color"> 
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>

  </div>
  `;
});


```

## Project 6 Solution 

```javascript

// generate a rondom color

const randonColor = function () {
  const hex = '01234567890ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalColors;
const startChangingColor = function () {
  if (!intervalColors) {
    setInterval(changeBgColor, 1000);
  }
  changeBgColor = function () {
    intervalColors = document.body.style.backgroundColor = randonColor();
  };
};

const stopChangingColor = function () {
  clearInterval(intervalColors);
  intervalColors = null; // this is for cleaner code
};
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);


```