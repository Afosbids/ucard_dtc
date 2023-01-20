import React from 'react'
import './OrderDetailForm.css'


const OrderDetailForm = () => {
    return (
        <div>
            <section>
                <form className="form-container">
                    <div className="form-group">
                        <label>Select Cable TV Type</label>
                        <select>
                            <option value="" disabled selected hidden>Please select cable tv type</option>
                        </select><br />
                        <label>Input Decoder Number</label>
                        <input type="text" placeholder="Enter your Decoder Number" /><br />
                        <label>Select Bouquet Type</label>
                        <select>
                            <option value=""></option>
                        </select><br />
                        <label>Amount</label>
                        <input type="text" placeholder="Enter amount" /><br />
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email address" /><br />
                        <label>Select Country</label>
                        <input type="search" placeholder='Sierra Leone (SL)' /><br />
                        <button className='btn'>Continue</button>
                    </div>    
                </form>
            </section>
            
        </div>
    )
}

export default OrderDetailForm
