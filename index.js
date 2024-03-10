fetch('data.json')
    .then(response => response.json())
    .then(users => {
        function logIn() {
            const username = document.getElementById('inputUsername').value;
            const password = document.getElementById('inputPassword').value;

            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                window.location.href = 'profile.html';
            }
            else {
                alert('Invalid username or password');
            }
        }

        const loginButton = document.querySelector('button[onclick="logIn()"]');
        loginButton.addEventListener('click', logIn);
    })
    .catch(error => console.error('Error:', error));