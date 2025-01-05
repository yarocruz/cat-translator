const catDiv = document.getElementById('randomImage')

fetch('./cat-gif')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        catDiv.innerHTML = `<img src="${data[0].url}" alt="cat" />`;
    });





