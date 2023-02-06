import React from 'react'
import { useState } from 'react'
import './DropdownBouquet.css'
import Arrow_down from '../../assets/Vector.svg'

const DropdownBouquet = ({selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false)
    const options = [
        "DSTV Padi (N2,150)",
        "DSTV Yanga (N2,950)",
        "DSTV Confam (N5,300)",
        "DSTV Compact (N9,000)",
        "DSTV Compact Plus (N14,250)",
        " DSTV Premium (N21,000)"
    ];
    return (
        <div className="dropdown">
            <label>Select Bouquet Type</label>
            <div className="dropdown-input" onClick={(e) => 
                setIsActive(!isActive)}>
                {selected}
                <img src={Arrow_down} /></div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div onClick={(e) => {
                            setSelected(option)
                            setIsActive(false)
                        }} 
                        className="dropdown-item">
                        {option}
                    </div>
                    ))}
            </div>
            )}
        </div>
    )
}

export default DropdownBouquet
