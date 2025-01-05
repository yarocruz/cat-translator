const catDiv = document.getElementById('randomImage')
const catContainer = document.getElementById('resultContainer');

fetch('./cat-gif')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        catDiv.innerHTML = `<img src="${data[0].url}" alt="cat" />`;
    });

// get value from input
const input = document.getElementById('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log(input.value);
    translateToMeows(input.value);
})

// get meouw sound
const meowAudio = document.getElementById('meow-audio');

const playMeow = () => {
    meowAudio.currentTime = 0;
    meowAudio.play();
}

// Function to "translate" text to meows and add audio
const translateToMeows = (text) => {
    const words = text.split(' ');
    catContainer.innerHTML = '';

    words.forEach((word) => {
        const meowSpan = document.createElement('span');
        meowSpan.textContent = 'meow ';
        meowSpan.style.cursor = 'pointer';

        catContainer.appendChild(meowSpan);
    });

    // loop through the words and for each play the meow sound
    for (let i = 0; i < words.length; i++) {
        setTimeout(() => {
            playMeow();
        }, i * 500);
    }

};





