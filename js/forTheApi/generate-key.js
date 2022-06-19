const email = document.getElementById('email');
const keyLength = document.getElementById('keyLength');
const keyStatus = document.getElementById('keyStatus');
const publicKey = document.getElementById('publicKey');
const downloadButtonTwo = document.getElementById('downloadButtonTwo');
let generateKeyButton = document.getElementById('generateKeyButton');

generateKeyButton.addEventListener('click', async function(e) {
    e.preventDefault();
    generateKeyButton.innerText = 'Generating...';
    let res = await fetch(baseUrl + 'generate-key', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
        },
        body: JSON.stringify({
            keyLength: keyLength.value,
            PKReceiversEmail: email.value
        })
    });

    let response = await res.json();
    console.log(response);
    if(response.publicKey) {
        generateKeyButton.innerText = 'Generate Key';
        keyStatus.innerText = 'Keys generated successfully. Your public key is:';
        publicKey.value = 'Generated Keys Successfully';
        downloadButtonTwo.href = baseUrl + response.publicKey;
        downloadButtonTwo.style.display = 'block';
    } else {
        generateKeyButton.innerText = 'Generate Key';
        keyStatus = 'Key generation failed.'
    }
});
