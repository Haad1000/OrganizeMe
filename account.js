// function signUp() {

//     var email = document.getElementById("inputEmail").value;
//     var username = document.getElementById("inputUsername").value;
//     var password = document.getElementById("inputPassword").value;
//     var confirmpass = document.getElementById("inputPasswordConfirm").value;
    
//     if (password !== confirmpass) {
//         alert("Passwords do not match");
//         return;
//     }

//     fetch("testacc.json")
//         .then(response => response.json())
//         .then(data => {

//             var newAccount = {
//                 "id" : Date.now(),
//                 "username" : username,
//                 "email" : email,
//                 "password" : password
//             };

//             data.accounts.push(newAccount);

//             saveToFile(data, "testacc.json");
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

function logIn() {
    var inputUsername = document.getElementById("inputUsername").value;
    var inputPassword = document.getElementById("inputPassword").value;

    fetch("./testacclog.json")
        .then(response => response.json())
        .then(data => checkAccount(data));
    
    checkAccount(data) {
        
        for (let i = 0; i < data.accounts.length; i++) {
            if (data.accounts[i].username == inputUsername && data.accounts[i].password == inputPassword) {
                
            }
        }
    }
}