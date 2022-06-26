// Encrypt a text
const plainText = document.getElementById("plaintext");
const publicKey = document.getElementById("publicKey");
const cyphertext = document.getElementById("encrypted-text");
const encryptTextButton = document.getElementById("encryptTextButton");

// Hide encrypted text into image
const f5keys = document.getElementsByClassName("f5keys");
const email = document.getElementById("email");
const cyphertextToHide = document.getElementById("ciphertext-to-hide");
const image = document.getElementById("image");
const hideAndSendButton = document.getElementById("hideImageAndSend");
// const showStatus = document.getElementById("showStatus");

encryptTextButton.addEventListener('click', async function(e) {
    e.preventDefault();

    console.log(localStorage.getItem('token'));

    const formdata = new FormData();

    formdata.append('file', publicKey.files[0]);

    try {
      const res = await fetch(baseUrl + 'encrypt-text', {
        method: 'POST',
        headers: {
            token: localStorage.getItem('token'),
            text: plainText.value
        },
        body: formdata
    });

    const response = await res.json();
    console.log(response);
    if(response.ciphertext) {
        cyphertext.innerText = response.ciphertext;
      window.FlashMessage.success('Successful');
    }
    } catch (error) {
      window.FlashMessage.success('An error has occured.');

      console.log(error);
    }
    
    
});

hideAndSendButton.addEventListener("click", async function (e) {
  e.preventDefault();
  hideAndSendButton.innerText = "Sending...";
  let keysArr = [];
  for (let i = 0; i < f5keys.length; i++) {
    keysArr.push(f5keys[i].value);
  }

  const neededKey = keysArr.join(",");

  let formdata = new FormData();

  formdata.append("file", image.files[0]);

  try {
    const res = await fetch(baseUrl + "hide-text-in-image", {
      method: "POST",
      headers: {
        token: localStorage.getItem("token"),
        f5key: neededKey,
        textToHide: cyphertextToHide.value,
        email: email.value,
      },
      body: formdata,
    });
  
    const response = await res.json();
  
    if (response.status) {
      hideAndSendButton.innerText = "Hide cyphertext in image and send";
      // showStatus.innerText = "Successful";
      window.FlashMessage.success('Successful');
    }
  } catch (error) {
    hideAndSendButton.innerText = "Hide cyphertext in image and send";
    // showStatus.innerText = "An error has occured";
    window.FlashMessage.warning('An error has occured');
    console.log(error);

  }

  
});

