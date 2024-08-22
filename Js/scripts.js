document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const feedbackForm = document.getElementById('feedbackForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Login form submitted!');
        });
    }

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Feedback form submitted!');
        });
    }
});
