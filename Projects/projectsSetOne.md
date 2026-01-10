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