// Function to handle sign up
function signUp() {
    const email = document.getElementById('inputEmail').value;
    const username = document.getElementById('inputUsername').value;
    const password = document.getElementById('inputPassword').value;
    const confirmPassword = document.getElementById('inputPasswordConfirm').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Load existing user data from data.json
    fetch('./data.json')
        .then(response => response.json())
        .then(users => {
            // Check if username already exists
            const existingUser = users.find(user => user.username === username);
            if (existingUser) {
                alert('Username already exists');
                return;
            }

            // Create a new user object
            const newUser = {
                id: users.length,
                username: username,
                password: password,
                email: email,
                imageUrl: './Images/generic.png',
                bio: 'empty bio'
            };

            // Add the new user to the users array
            users.push(newUser);

            // Update the data.json file with the new user data
            const updatedUsersJSON = JSON.stringify(users, null, 2);
            // Note: This won't work if you're using the file protocol (file://) due to security restrictions.

            // Perform the actual file write/update (this won't work in a browser environment)
            // fs.writeFileSync('./data.json', updatedUsersJSON);

            // For learning purposes, you can log the updated JSON
            console.log(updatedUsersJSON);

            // Redirect to the login page or perform any other action
            alert('Sign up successful!');
            window.location.href = 'index.html';
        })
        .catch(error => console.error('Error:', error));
}
