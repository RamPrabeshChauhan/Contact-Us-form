import React from "react";

function Contact()
{
    return(
        <div className="container">
            <h1>Contact Us</h1>
            
            <form action="">
                <div className="person-name">
                    <div className="form-group gap">
                        <label htmlFor="firstName">First Name<br /></label>
                        <input type="text" name="firstName" id="firstName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name<br /></label>
                        <input type="text" name="lastName" id="lastName" />
                    </div>
                </div>
                
                <div className="person-contact">
                    <div className="form-group gap">
                        <label htmlFor="phone">Phone<br /></label>
                        <input type="tel" name="phone" id="phone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email<br /></label>
                        <input type="text" name="email" id="email" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message<br /></label>
                    <textarea type="text" name="message" id="message"  />
                </div>

                <button type="submit" id="submit-button">Submit</button>
                
            </form>
        </div>
    );
}

export default Contact;