import React, { useState } from 'react'
import './OrderDetailForm.css'
import indicator from '../../assets/Vector.svg'
import Dstv_logo from '../../assets/image 12.svg'
import Gotv_logo from '../../assets/image 13.svg'
import Startimes_logo from '../../assets/image 14.svg'
import Showmax_logo from '../../assets/image 15.svg'
import Country_flag from '../../assets/image 6 (1).svg'
import Search_icon from '../../assets/Search.svg'

const OrderDetailForm = () => {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [optionsVisible, setOptionsVisible] = useState(false);
    const [optionsVisible2, setOptionsVisible2] = useState(false)

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    };

    const toggleOptions2 = () => {
        setOptionsVisible2(!optionsVisible2);
    }

    const handleOptionClick = (option) => {
        setValue(option);
        setOptionsVisible(false);
    };

    const handleOptionClick2 = (option) => {
        setValue2(option);
        setOptionsVisible2(false)
    }
    return (
        <div>
            <form className='form-container'>
            <div class="dropdown">
                <label>Select Cable TV Type</label>
                <input 
                type="text"
                value={value}
                onClick={toggleOptions}
                placeholder="Please select cable tv type"
                className="dropdown-input" />
                <img src={indicator} class="indicator" onClick={() => handleOptionClick(option)} />
                {optionsVisible && (
                        <ul className="dropdown-options">
                        <li className="dropdown-option" onClick={() => handleOptionClick(option)}>
                            <p>Dstv</p>
                            <img src={Dstv_logo} />
                        </li>
                        <li className="dropdown-option" onClick={() => handleOptionClick(option)}>
                            <p>Gotv</p>
                            <img src={Gotv_logo} />
                        </li>
                        <li className="dropdown-option" onClick={() => handleOptionClick(option)}>
                            <p>Startimes</p>
                            <img src={Startimes_logo} />
                        </li>
                        <li className="dropdown-option" onClick={() => handleOptionClick(option)}>
                            <p>Showmax</p>
                            <img src={Showmax_logo} />
                        </li>
                    </ul>
                )}
            </div>
            <div class="form-group-1">
                <label>Input Decoder Number </label>
                <input type="text" placeholder="Enter your Decoder Number" />
            </div>
            <div className="dropdown-2">
                <label>Select Bouquet Type</label>
                <input 
                type="text"
                value2={value2}
                onClick={toggleOptions2}
                className="dropdown-input-2"    
                    />
                <img src={indicator} class="indicator-2" onClick={() => handleOptionClick2(option)} />
                {optionsVisible2 && (
                    <ul className="dropdown-options-2">
                        <li className="dropdown-option-2" onClick={() => handleOptionClick2(option)}>
                            <p>DSTV Padi (N2,150)</p>
                        </li>
                        <li className="dropdown-option-2" onClick={() => handleOptionClick2(option)}>
                            <p>DSTV Yanga (N2,950)</p>
                        </li>
                        <li className="dropdown-option-2" onClick={() => handleOptionClick2(option)}>
                            <p>DSTV Confam (N5,300)</p>
                        </li>
                        <li className="dropdown-option-2" onClick={() => handleOptionClick2(option)}>
                            <p>DSTV Compact (N9,000)</p>
                        </li>
                        <li className="dropdown-option-2" onClick={() => handleOptionClick2(option)}>
                            <p>DSTV Compact Plus (N14,250)</p>
                        </li>
                        <li className="dropdown-option-2" onClick={() => handleOptionClick(option)}>
                            <p>DSTV Premium (N21,000)</p>
                        </li>
                    </ul>
                )}
            </div>
            <div class="form-group-2">
                <label>Amount </label>
                <input type="text" placeholder="Enter amount" />
            </div>
            <div class="form-group-3">
                <label>Email </label>
                <input type="text" placeholder="Enter your valid email address" />
            </div>
            <div class="form-group-4">
                <label>Select Country </label>
                <input type="text" placeholder="Sierra Leone (SL)" />
                <div className="form-group-4-img">
                    <img src={Country_flag} className="img-1" />
                    <img src={Search_icon} />
                </div>
            </div>
            <div className="form-btn">
                <input type="button" value="Continue" />
            </div>
            </form>
        </div>
    )
}

export default OrderDetailForm
