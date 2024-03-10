// function signUp() {
//     const email = document.getElementById('inputEmail').value;
//     const username = document.getElementById('inputUsername').value;
//     const password = document.getElementById('inputPassword').value;
//     const confirmPassword = document.getElementById('inputPasswordConfirm').value;

//     if (password !== confirmPassword) {
//         alert('Passwords do not match');
//         return;
//     }

//     fetch('./data.json')
//         .then(response => response.json())
//         .then(users => {
//             const existingUser = users.find(user => user.username === username);
//             if (existingUser) {
//                 alert('Username already exists');
//                 return;
//             }

//             const newUser = {
//                 id: users.length,
//                 username: username,
//                 password: password,
//                 email: email,
//                 imageUrl: './Images/generic.png',
//                 bio: 'empty bio'
//             };

//             users.push(newUser);

//             const updatedUsersJSON = JSON.stringify(users, null, 2);

//             const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(updatedUsersJSON)}`;

//             const blob = new Blob([dataUri], { type: 'application/json' });

//             const link = document.createElement('a');
//             link.href = URL.createObjectURL(blob);
//             link.download = 'data.json';
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);

//             console.log(updatedUsersJSON);

//             alert('Sign up successful!');
//             window.location.href = 'index.html';
//         })
//         .catch(error => console.error('Error:', error));
// }


function signUp() {

    const email = document.getElementById('inputEmail').value;
    const username = document.getElementById('inputUsername').value;
    const password = document.getElementById('inputPassword').value;
    const confirmPassword = document.getElementById('inputPasswordConfirm').value;
    
    
    if (password.trim() === '' || email.trim() === '' || username.trim() === '') {
        alert('a field is left empty');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }


    alert("Sign Up successful (not really)");
    window.location.href = './index.html';
}