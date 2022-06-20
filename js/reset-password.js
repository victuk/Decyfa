// Reset
const newPassword = document.getElementById('newPassword');
const resetPasswordButton = document.getElementById('resetPasswordButton');

resetPasswordButton.addEventListener('click', function(e) {
    e.preventDefault();

    fetch(baseUrl + 'reset-password', {
        method: 'POST',
        headers: {
            newPassword: newPassword.value,
            key: location.search.slice(5)
        }
    }).then(res => res.json()).then(response => {
        if(response.status) {
            window.FlashMessage.success('Password reset Successfully');
        } else {
            window.FlashMessage.success('An error occured.');
        }
    }).catch(e => {
        console.log(e);
    });
});
