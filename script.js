document.getElementById("Validation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const userName =  document.getElementById("fullName").value;
    const email =  document.getElementById("email").value;
    const password =  document.getElementById("password").value;

    if (userName === "Ali" && password === "12345" && email === "ali.a@gmail.com") {
        console.log("Login successful");
        document.getElementById("login-result").innerText = "Enter successfully";
        
        document.getElementById("login-box").style.display = "none";
        document.getElementById("student-box").style.display = "block";
    } else {
        console.log("Invalid username or password");
        document.getElementById("login-result").innerText = "Wrong username or password."
    } 
})

document.getElementById("studentForm").addEventListener("submit", function(event){
    event.preventDefault();
    const age = Number(document.getElementById("age").value);
    const score = Number(document.getElementById("score").value);
    const number = Number(document.getElementById("number").value);

    if (age >= 18) {
        if (score >= 90) {
            console.log("Grade A");
            document.getElementById("ratescore").innerText = "Perfect";
        } else if (score >= 80) {
            console.log("Grade B");
            document.getElementById("ratescore").innerText = "Good";
        } else {
            console.log("Needs hardwork!");
            document.getElementById("ratescore").innerText = "Need work";
        }
    } else {
        console.log("You are a minor.")
    }

    let scoreguessing = number % 2 === 0 ? "Even number" : "odd number";
    console.log(scoreguessing);
});