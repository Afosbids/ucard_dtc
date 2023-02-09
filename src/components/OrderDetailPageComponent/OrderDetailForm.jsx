import React, { useState } from 'react'
import './OrderDetailForm.css'
import indicator from '../../assets/Vector.svg'
import Dstv_logo from '../../assets/image 12.svg'
import Gotv_logo from '../../assets/image 13.svg'
import Startimes_logo from '../../assets/image 14.svg'
import Showmax_logo from '../../assets/image 15.svg'
import Country_flag from '../../assets/image 6 (1).svg'
import Search_icon from '../../assets/Search.svg'
import { Link } from 'react-router-dom'


const OrderDetailForm = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('')

    const toggleDropdown = () => {
        setOpen(!open);
    };

    const toggleDropdown2 = () => {
        setOpen2(!open2);
    };

    const handleOptionSelect = option => {
        setSelectedOption(option);
        setOpen(false);
    };

    const handleOptionSelect2 = option => {
        setSelectedOption2(option);
        setOpen2(false);
    }
    return (
        <div>
            <form className="form-group">
                <div className="select-group-1">
                    <label htmlFor="cable_tv_type">Select Cable TV Type</label>
                    <span>
                        <input
                            type="text"
                            value={selectedOption}
                            onClick={toggleDropdown}
                            placeholder="Please select cable tv type"
                        />
                        <img src={indicator} />
                    </span>
                    {open && (
                        <ul className="dropdown-options">
                            <li className="dropdown-option" onClick={() => handleOptionSelect("DSTV")}>
                                <p>Dstv</p>
                                <img src={Dstv_logo} />
                            </li>
                            <li className="dropdown-option" onClick={() => handleOptionSelect("GOTV")}>
                                <p>Gotv</p>
                                <img src={Gotv_logo} />
                            </li>
                            <li className="dropdown-option" onClick={() => handleOptionSelect("STARTIMES")}>
                                <p>Startimes</p>
                                <img src={Startimes_logo} />
                            </li>
                            <li className="dropdown-option" onClick={() => handleOptionSelect("SHOWMAX")}>
                                <p>Showmax</p>
                                <img src={Showmax_logo} />
                            </li>
                        </ul>
                    )}
                </div>
                <div className="decoder_input">
                    <label htmlFor="decoder_number">Input Decoder Number </label>
                    <input type="text" />
                </div>
                <div className="select-group-2">
                    <label htmlFor="buoquet_type">Select Bouquet Type</label>
                    <span>
                        <input
                            type="text"
                            value={selectedOption2}
                            onClick={toggleDropdown2}
                            placeholder='Enter your Decoder Number'
                        />
                        <img src={indicator} />
                    </span>
                    {open2 && (
                        <ul className="dropdown-options-2">
                            <li className="dropdown-option-2" onClick={() => handleOptionSelect2("DSTV Padi (N2,150)")}>
                                <p>DSTV Padi (N2,150)</p>
                            </li>
                            <li className="dropdown-option-2" onClick={() => handleOptionSelect2("DSTV Yanga (N2,950)")}>
                                <p>DSTV Yanga (N2,950)</p>
                            </li>
                            <li className="dropdown-option-2" onClick={() => handleOptionSelect2("DSTV Confam (N5,300)")}>
                                <p>DSTV Confam (N5,300)</p>
                            </li>
                            <li className="dropdown-option-2" onClick={() => handleOptionSelect2("DSTV Compact (N9,000)")}>
                                <p>DSTV Compact (N9,000)</p>
                            </li>
                            <li className="dropdown-option-2" onClick={() => handleOptionSelect2("DSTV Compact Plus (N14,250)")}>
                                <p>DSTV Compact Plus (N14,250)</p>
                            </li>
                            <li className="dropdown-option-2" onClick={() => handleOptionSelect2("DSTV Premium (N21,000)")}>
                                <p>DSTV Premium (N21,000)</p>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="amount_input">
                    <label htmlFor="amount">Amount </label>
                    <input type="text" placeholder='Enter amount' />
                </div>
                <div className="email_input">
                    <label htmlFor="email">Email </label>
                    <input type="text" placeholder='Enter your valid email address' />
                </div>
                <div className="country_input">
                    <label htmlFor="country">Country </label>
                    <div className="country_select">
                        <img className="country-logo" src={Country_flag} />
                        <span>Sierra Leone (SL)</span>
                        <input type="text" />
                        <img class="search-icon" src={Search_icon} />
                    </div>
                </div>

                    <div className="form-btn">
                <Link to="/order-summary-page">
                        <input type="button" value="Continue" />
                </Link>
                    </div>
            </form>
        </div>
    )
}

export default OrderDetailForm






