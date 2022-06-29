const email = document.getElementById('email');
const keyLength = document.getElementById('keyLength');
// const keyStatus = document.getElementById('keyStatus');
// const publicKey = document.getElementById('publicKey');
const downloadButtonTwo = document.getElementById('downloadButtonTwo');
const downloadButtonThree = document.getElementById('downloadButtonThree');
let generateKeyButton = document.getElementById('generateKeyButton');

generateKeyButton.addEventListener('click', async function(e) {
    e.preventDefault();
    generateKeyButton.innerText = 'Generating...';

    try {
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
            // keyStatus.innerText = 'Keys generated successfully. Your private key is:';
            // publicKey.value = 'Generated Keys Successfully';
            window.FlashMessage.success('Generated Keys Successfully', {classes: {
                container: 'flash-container',
                flash: 'flash-message',
                visible: 'is-visible',
                progress: 'flash-progress',
                progress_hidden: 'is-hidden'
            }});
            downloadButtonTwo.href = baseUrl + response.privateKey;
            downloadButtonTwo.style.display = 'block';
            downloadButtonThree.href= baseUrl + response.publicKey;
            downloadButtonThree.style.display = 'block';
        } else {
            generateKeyButton.innerText = 'Generate Key';
            // keyStatus.innerText = 'Key generation failed.'
            window.FlashMessage.error('Key generation failed.');
        }
    } catch (error) {
        generateKeyButton.innerText = 'Generate Key';
        // keyStatus.innerText = 'Key generation failed.';
        window.FlashMessage.error('Key generation failed.');
        console.log(error);
    }

    
});
