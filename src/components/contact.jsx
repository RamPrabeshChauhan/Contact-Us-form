import React, { useState } from "react";

function Contact()
{
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userPh, setUserPh] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    
    const handleSubmit = (event) => {
        
        // Method 2 to print user input data in console.
        // const first = event.target.firstName.value;
        // const last = event.target.lastName.value;
        // const phone = event.target.phone.value;
        // const email = event.target.email.value;
        // const message = event.target.message.value;

        // console.log("First Name : " + first);
        // console.log("Last Name : " + last);
        // console.log("Phone : " + phone);
        // console.log("Gmail : " + email);
        // console.log("Message : " + message);

        

        // Method 3 to print user input data in console
        console.log("First Name : " + userFirstName);
        console.log("Last Name : " + userLastName);
        console.log("Phone : " + userPh);
        console.log("Gmail : " + userEmail);
        console.log("Message : " + userMessage);


        event.preventDefault();
    }
    return(
        <div className="container">
            <h1>Contact Us</h1>
            
            <form action="" id="form" onSubmit={handleSubmit} >
                <div className="person-name">
                    <div className="form-group gap">
                        <label htmlFor="firstName">First Name<br /></label>
                        <input type="text" name="firstName" id="firstName" onChange={(event) => setUserFirstName(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name<br /></label>
                        <input type="text" name="lastName" id="lastName" onChange={(event) => setUserLastName(event.target.value)}/>
                    </div>
                </div>
                
                <div className="person-contact">
                    <div className="form-group gap">
                        <label htmlFor="phone">Phone<br /></label>
                        <input type="tel" name="phone" id="phone" onChange={(event) => setUserPh(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email<br /></label>
                        <input type="text" name="email" id="email" onChange={(event) => setUserEmail(event.target.value)}/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message<br /></label>
                    <textarea type="text" name="message" id="message"  onChange={(event) => setUserMessage(event.target.value)}/>
                </div>

                <button type="submit" id="submit-button" >Submit</button>
                
            </form>
        </div>
    );
}

export default Contact;