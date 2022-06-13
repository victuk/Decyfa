const email = document.getElementById('email');
const keyLength = document.getElementById('keyLength');
const generateKeyButton = document.getElementById('generateKeyButton');

generateKeyButton.addEventListener('click', async function(e) {
    e.preventDefault();
    let res = await fetch(baseUrl + 'generate-key', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            keyLength: keyLength.ariaValueMax,
            PKReceiversEmail: keyLength.value
        })
    });

    let response = await res.json();
    console.log(response);
});
