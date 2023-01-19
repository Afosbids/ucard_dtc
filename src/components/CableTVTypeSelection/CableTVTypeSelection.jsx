import React from 'react'
import './CableTVTypeSelection.css'
import Dstv_logo from '../../assets/image 12.svg'
import Gotv_logo from '../../assets/image 13.svg'
import Startimes_logo from '../../assets/image 14.svg'
import Showmax_logo from '../../assets/image 15.svg'

const CableTVTypeSelection = () => {
    return (
        <div>
            <div className="cable-tv-type-selection">
                <div className="dstv-section">
                    <p>Dstv</p>
                    <img src={Dstv_logo}  />
                </div>
                <div className="gotv-section">
                    <p>Gotv</p>
                    <img src={Gotv_logo} />
                </div>
                <div className="startimes-section">
                    <p>Startimes</p>
                    <img src={Startimes_logo} />
                </div>
                <div className="showmax-section">
                    <p>Showmax</p>
                    <img src={Showmax_logo} />
                </div>
            </div>
        </div>
    )
}

export default CableTVTypeSelection
