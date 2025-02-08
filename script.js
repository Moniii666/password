function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allowedChars = '';
    let password = '';

    if (uppercase) allowedChars += uppercaseChars;
    if (lowercase) allowedChars += lowercaseChars;
    if (numbers) allowedChars += numberChars;
    if (symbols) allowedChars += symbolChars;
    if (allowedChars === '') return '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

function generate() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    document.getElementById('password').value = generatePassword(length, uppercase, lowercase, numbers, symbols);
    document.getElementById('lengthValue').innerText = length;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Пароль скопирован!');
}

document.getElementById('length').addEventListener('input', function() {
    document.getElementById('lengthValue').innerText = this.value;
});
