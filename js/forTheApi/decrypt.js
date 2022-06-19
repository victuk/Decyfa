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
    }
});


decryptButton.addEventListener('click', async function() {

    // console.log(JSON.stringify(privateKey.value));

    // let stringToSend = JSON.stringify({
    //     ciphertext: ciphertext.value,
    //     decryptionKey: privateKey.value
    // });

    // let stringToSend = JSON.stringify({
    //     ciphertext: 'YXy4aLtRjlN2ltwgdGOr1eHZjiDT8b-Ww3bOJ6HU4rEUP5yoxEwLgll67dZhLUKAYSPTYqqmHxEHiD06Wml_F7hPmKhbmmkKjP48Ei8uo-fo0turfIcGw31P_o6ME_31ZmNQt4RiwVWXBKcpL8vSGm_mjOGU4zGqid9ET6BaBms=',
    //     decryptionKey: '-----BEGIN RSA PRIVATE KEY-----\nMIICYAIBAAKBgQCK1gFilD3cDbb88AJ5pmzrdhVl3hNmZXGLNmwvzna8MeMinBN7\ns5vX8r68zF9a5+/aNrznBb1Az72elJ2Hz0j0BOSIKHeL56PRmwQPin9xa4DEzrRK\ne2122/ZpmjB5MHsIrStPtFY1Yp+EJYlPd4ubhEdslQTYJysOLQK+3OXPWQIDAQAB\nAoGAdTEgCi5H6TBKfke6TyWEW11ZwpsqlQycQ36048XLxB/4Moa8i3aY3jgxePyq\noPmXJQN/gSL/FW5GCU45E18bHVUSwXY39LB++b7OVS859ysfdLj/iE+3RkYRTCU4\nWKG4qJdz/1tQF6M2Au2qN3bSHyTcqG4viIC6NTuFEDna64ECRQCN4VuzyW/GRVuY\nnLiHQ1uuqBpgqsHEWfuw6gI/RQt1GoK8abyWm52Ieq7AAsGyAXbCSqRdxIQAYK5S\n8Helc39ca6mijQI9APqByMX/+kDi6c2LyX1KT4hIDSUSW9WVb43C4A9vz01UiZW/\nsoIXbVmlH4gIXppODmRC3vLV33xxvKtS/QJEMT8z8WfOIGgarxJXCrxaqnk3Dq62\nq00AjBvtw8BXhcI59uRMzYoeWC0dUxCh4wOXEUGPY+y+VNM6LxfAr/EzGAVW0FEC\nPQCkHhMjZSjXCdKTT1maM+0XI904xGZV76k9/sY8VsxBpXjeGtEgWajSalPWE2Wn\nQiw7k3PtNCFOrlUlCSECRAyPjmAuLLGFHIyhMDGJ88isi70juSxLx7a1LEynvbe9\ngApZ7T0YpFOQqh0V7ErrWjl4VH41MjIJxNeBdApIe0WgMHjm\n-----END RSA PRIVATE KEY-----\n'
    // });


    // console.log(stringToSend)

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
        } else {
            decryptedText.value = "An error occured";
            console.log(response);
        }
    });

    // const response = await resTwo.json();

    // console.log(response);
});

