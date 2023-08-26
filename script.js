const USERNAME = "admin";
const PASSWORD = "admin";


document.getElementById("sign").addEventListener("click", (e) =>{
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if(username === "admin" && password === "admin"){
        document.getElementById("message").innerHTML = "Login Successful";
    }
    if(username !== "admin" && password === "admin"){
        document.getElementById("message").innerHTML = "Username is incorrect";
    }
    if(username === "admin" && password !== "admin"){
        document.getElementById("message").innerHTML = "Password is incorrect";
    }
})