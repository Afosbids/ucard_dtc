import React from 'react'
import './ContactForm.css'
import WarningIcon from '../../assets/contactuswarningicon.svg'

const ContactForm = () => {
    return (
        <div className='contact-form-container'>
            <form>
                <label htmlFor="Email">Email</label>
                <input type="email" id='
            email' name='email' placeholder='please enter your valid email' />

                <label htmlFor="subject">Select Subject</label>
                <select name="subject" id="subject">
                    <option value="" disabled selected>Please select a subject</option>
                    <option value="first selection">first selection</option>
                    <option value="second selection">second selection</option>
                    <option value="third selection">third selection</option>
                </select>

                <label htmlFor="description">Enter Description</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>

                <div className="contact-form-warning">
                    <img src={WarningIcon} alt="" />
                    <p>Please make sure you include your valid smartcard/ IUC number  </p>
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm