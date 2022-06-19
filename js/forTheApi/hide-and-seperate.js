// Hide image inputs
const imageOne = document.getElementById('imageOne');
const imageTwo = document.getElementById('imageTwo');
const f5keys = document.getElementsByClassName('f5keys');
const email = document.getElementById('email');
const hiddenImageResult = document.getElementById('hiddenImageResult');
const downloadButton = document.getElementById('downloadButton');
const hideImage = document.getElementById('hide');

// Reveal hidden image inputs
const imageThree = document.getElementById('imageThree');
const f5keysReveal = document.getElementsByClassName('f5keysReveal');
const hiddenImageResultTwo = document.getElementById('hiddenImageResultTwo');
const downloadButtonTwo = document.getElementById('downloadButtonTwo');
const revealImage = document.getElementById('reveal');


hideImage.addEventListener('click', async function(e) {
    e.preventDefault();

    let keysArr = [];
    for (let i = 0; i < f5keys.length; i++) {
        keysArr.push(f5keys[i].value);
    }
    
    const neededKey = keysArr.join(",");

    let formdata = new FormData();

    hideImage.innerText = "Loading...";

    formdata.append('file', imageOne.files[0]);
    formdata.append('fileTwo', imageTwo.files[0]);

    try {
        const res = await fetch(baseUrl + 'hide-image-in-image', {
            method: 'POST',
            headers: {
                f5key: neededKey,
                email: email.value,
                token: localStorage.getItem('token')
            },
            body: formdata
        });
    
        const response = await res.json();
        if(response.imageLink) {
            hideImage.innerText = "Hide Image in Image";
            hiddenImageResult.src = baseUrl + response.imageLink;
            downloadButton.href = baseUrl + response.imageLink;
            downloadButton.download = response.imageLink.slice(7);
            hiddenImageResult.alt = 'Hidden Image';
            hiddenImageResult.style.width = '100%';
            hiddenImageResult.style.height = '100%';
            downloadButton.style.display = 'block';
        } else {
            hideImage.innerText = "Hide Image in Image";
            alert("An error occured.");
            console.log(response);
        }
    } catch (error) {
        alert("An error has occured.");
        console.log(error);
    }

    
});

revealImage.addEventListener('click', async function(e) {
    e.preventDefault();

    let keysArr = [];
    for (let i = 0; i < f5keysReveal.length; i++) {
        keysArr.push(f5keysReveal[i].value);
    }
    
    const neededKey = keysArr.join(",");

    revealImage.innerText = "Loading...";

    let formDataImg = new FormData();

    formDataImg.append('file', imageThree.files[0]);

    const res = await fetch(baseUrl + 'reveal-hidden-image', {
        method: 'POST',
        headers: {
            f5key: neededKey,
            token: localStorage.getItem('token')
        },
        body: formDataImg
    });

    const response = await res.json();

    if(response.imageLink) {
    revealImage.innerText = "Reveal Hidden Image";
        hiddenImageResultTwo.src = baseUrl + response.imageLink;
        downloadButtonTwo.href = baseUrl + response.imageLink;
        downloadButtonTwo.download = response.imageLink.slice(7);
        hiddenImageResultTwo.alt = 'Hidden Image';
        hiddenImageResultTwo.style.width = '100%';
        hiddenImageResultTwo.style.height = '100%';
        downloadButtonTwo.style.display = 'block';
    } else {
        revealImage.innerText = "Reveal Hidden Image";
        alert('An error occured.');
        console.log(response);
    }
});