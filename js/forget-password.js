// Forgot
const email = document.getElementById('email');
const forgetPasswordButton = document.getElementById('forgetPasswordButton');



forgetPasswordButton.addEventListener('click', function(e) {
    e.preventDefault();

    fetch(baseUrl + 'forgot-password', {
        method: 'POST',
        headers: {
            email: email.value
        }
    }).then(res => res.json()).then(response => {
        if(response.status) {
            window.FlashMessage.success('Password reset Mail sent successfully');
        } else {
            window.FlashMessage.info('An error occured.');
        }
    }).catch(e => {
        window.FlashMessage.success('Email Not Found');
        console.log(e);
    });
});
