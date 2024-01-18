const form = document.querySelector('.content_form');
const email = document.querySelector('.email-field');
const error = document.querySelector('.error');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

window.addEventListener('load', () => {
    const isValid = email.value.length === 0 ||
        emailRegex.test(email.value);

    if (isValid) {
        email.className = 'email-field';
        error.textContent = '';
    }
})

email.addEventListener('input', () => {
    const isValid = email.value.length === 0 ||
        emailRegex.test(email.value);

    if (isValid) {
        email.className = 'email-field valid';
        error.textContent = "";
    } else {
        email.className = 'email-field invalid';
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValid = emailRegex.test(email.value);

    if (!isValid) {
        email.className = 'email-field invalid';
        error.textContent = 'Oops! Check your email address.';
    } else {
        email.className = 'email-field valid';
        error.textContent = '';
    }
})
        