import React, { useState } from 'react'
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import './OrderDetailForm.css'
// import styled from 'styled-components';



const OrderDetailForm = () => {
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <div>
            <section>
                <form className="form-container">
                    <div className="form-group">
                        <label>Select Cable TV Type</label>
                        <Select
                        placeholder="Please select cable tv type"
                        indicator={<KeyboardArrowDown />}
                        sx={{
                            width: 412,
                            height: 58,
                            [`& .${selectClasses.indicator}`]: {
                            // transition: '0.3s',
                            [`&.${selectClasses.expanded}`]: {
                            },
                            },
                        }}
                        >
                            <option value="" disabled selected hidden>Please select cable tv type</option>
                        </Select><br />
                        <label>Input Decoder Number</label>
                        <input type="text" placeholder="Enter your Decoder Number" /><br />
                        <label>Select Bouquet Type</label>
                        <Select value={selectedOption}
                        onChange={event => setSelectedOption(event.target.value)}
                        indicator={<KeyboardArrowDown />}
                        sx={{
                                width: 412,
                                height: 58,
                                [`& .${selectClasses.indicator}`]: {
                                // transition: '0.3s',
                                [`&.${selectClasses.expanded}`]: {
                                },
                                },
                            }}
                        >
                                <Option value=""></Option>
                                <Option value="DSTV Padi (N2,150)">
                                <ListItemDecorator>
                                    DSTV Padi (N2,150 )
                                </ListItemDecorator>
                                </Option>
                                <ListDivider role="none" inset="startContent" />
                                <Option value="DSTV Yanga (N2,950)">
                                <ListItemDecorator>
                                    DSTV Yanga (N2,950)
                                </ListItemDecorator>
                                </Option>
                                <ListDivider role="none" inset="startContent" />
                                <Option value="DSTV Confam (N5,300)">
                                <ListItemDecorator>
                                    DSTV Confam (N5,300)
                                </ListItemDecorator>
                                </Option>
                                <ListDivider role="none" inset="startContent" />
                                <Option value="DSTV Compact (N9,000)">
                                <ListItemDecorator>
                                    DSTV Compact (N9,000)
                                </ListItemDecorator>
                                </Option>
                                <ListDivider role="none" inset="startContent" />
                                <Option value="DSTV Compact Plus (N14,250)">
                                <ListItemDecorator>
                                    DSTV Compact Plus (N14,250)
                                </ListItemDecorator>
                                </Option>
                                <ListDivider role="none" inset="startContent" />
                                <Option value="DSTV Premium (N21,000)">
                                <ListItemDecorator>
                                    DSTV Premium (N21,000)
                                </ListItemDecorator>
                                </Option>
                        </Select><br />
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
