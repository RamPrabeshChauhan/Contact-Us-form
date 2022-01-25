import React, { useState } from "react";

function Contact()
{
    // Method 4 to print user input data in console.
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
    })
    
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
        // const [userFirstName, setUserFirstName] = useState("");
        // const [userLastName, setUserLastName] = useState("");
        // const [userPh, setUserPh] = useState("");
        // const [userEmail, setUserEmail] = useState("");
        // const [userMessage, setUserMessage] = useState("");

        // console.log("First Name : " + userFirstName);
        // console.log("Last Name : " + userLastName);
        // console.log("Phone : " + userPh);
        // console.log("Gmail : " + userEmail);
        // console.log("Message : " + userMessage);

        // Method 4 printer.....
        console.log("First Name : " + values.firstName);
        console.log("Last Name : " + values.lastName);
        console.log("Phone : " + values.phone);
        console.log("Gmail : " + values.email);
        console.log("Message : " + values.message);

        
        event.preventDefault();

    }
    return(
        <div className="container">
            <h1>Contact Us</h1>
            
            <form action="" id="form" onSubmit={handleSubmit} >
                <div className="person-name">
                    <div className="form-group gap">
                        <label htmlFor="firstName">First Name<br /></label>
                        {/* Methode 3  */}
                        {/* <input type="text" name="firstName" id="firstName" value={values.firstName} onChange={(event) => setUserFirstName(event.target.value)}/> */}
                        
                        {/* Methode 4 */}
                        <input type="text" name="firstName" id="firstName" value={values.firstName} onChange={(event) => setValues({...values, firstName: event.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name<br /></label>
                        {/* Methode 3  */}
                        {/* <input type="text" name="lastName" id="lastName" value={values.lastName} onChange={(event) => setUserLastName(event.target.value)}/> */}
                        
                        {/* Methode 4 */}
                        <input type="text" name="lastName" id="lastName" value={values.lastName} onChange={(event) => setValues({...values, lastName: event.target.value})}/>
                    </div>
                </div>
                
                <div className="person-contact">
                    <div className="form-group gap">
                        <label htmlFor="phone">Phone<br /></label>
                        {/* Methode 3  */}
                        {/* <input type="tel" name="phone" id="phone" value={values.phone} onChange={(event) => setUserPh(event.target.value)}/> */}
                        
                        {/* Methode 4 */}
                        <input type="tel" name="phone" id="phone" value={values.phone} onChange={(event) => setValues({...values, phone: event.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email<br /></label>
                        {/* Methode 3  */}
                        {/* <input type="text" name="email" id="email" value={values.email} onChange={(event) => setUserEmail(event.target.value)}/> */}
                        
                        {/* Methode 4 */}
                        <input type="text" name="email" id="email" value={values.email} onChange={(event) => setValues({...values, email: event.target.value})}/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message<br /></label>
                    {/* Methode 3  */}
                    {/* <textarea type="text" name="message" id="message" value={values.message}  onChange={(event) => setUserMessage(event.target.value)}/> */}
                    
                    {/* Methode 4 */}
                    <textarea type="text" name="message" id="message" value={values.message}  onChange={(event) => setValues({...values, message: event.target.value})}/>
                </div>

                <button type="submit" id="submit-button" >Submit</button>
                
            </form>
        </div>
    );
}

export default Contact;