import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";



ReactDOM.render(
    <App />,
    document.getElementById("root")
);


// this code will show the User's data inside console. 
var form = document.getElementById("form")

form.addEventListener("submit", event => {
    event.preventDefault()
    var firstname = document.getElementById("firstName").value
    var lastname = document.getElementById("lastName").value
    console.log("User Name : " + firstname + "" + lastname);

    var userPhone = document.getElementById("phone").value
    var userEmail = document.getElementById("email").value
    var userMessage = document.getElementById("message").value
    console.log("User Phone : " + userPhone);
    console.log("User Email : " + userEmail);
    console.log("User Meassage : " + userMessage);

});