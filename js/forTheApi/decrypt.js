// Seperate text from image
const f5keys = document.getElementsByClassName('stegkey');
const imageFile = document.getElementById('image');
const showCiphertext = document.getElementById('showCiphertext');
const theCyphertext = document.getElementById('theCyphertext');
const seperateImageButton = document.getElementById('seperateImage');

// Decrypt the ciphertext
const ciphertext = document.getElementById('ciphertext');
const privateKey = document.getElementById('privatekey');
const decryptedText = document.getElementById('decrypted-text');
const decryptButton = document.getElementById('decryptButton');

seperateImageButton.addEventListener('click', async function(e) {
    e.preventDefault();
    let keysArr = [];
    for(let i = 0; i < f5keys.length; i++) {
        keysArr.push(f5keys[i].value);
    }
    
    const neededKey = keysArr.join(',');

    let formdata = new FormData();

    formdata.append('file', imageFile.files[0]);

    try {
        const res = await fetch(baseUrl + "seperate-image", {
            method: 'POST',
            headers: {
                token: localStorage.getItem('token'),
                f5key: neededKey
            },
            body: formdata
        });
    
        const response = await res.json();
        console.log(response);
        if(response.ciphertext) {
            theCyphertext.innerText = response.ciphertext;
            window.FlashMessage.success('Successful');
        } 
    } catch (error) {
        window.FlashMessage.warning('An error occured.');
        console.log(error);
    }
});


decryptButton.addEventListener('click', async function() {

    const formdata = new FormData();

    formdata.append('file', privateKey.files[0]);
    
    fetch(baseUrl + "decrypt-text", {
        method: "POST",
        headers: {
            token: localStorage.getItem('token'),
            ciphertext: ciphertext.value
        },
        body: formdata
    }).then(res => res.json())
    .then(response => {
        if(response.plaintext) {
            decryptedText.value = response.plaintext;
            window.FlashMessage.success('Successful');
        } else {
            decryptedText.value = "An error occured";
            window.FlashMessage.warning('An error occured.');
            console.log(response);
        }
    }).catch(error => {
        window.FlashMessage.warning('An error occured.');
        console.log(error);
    });
});

