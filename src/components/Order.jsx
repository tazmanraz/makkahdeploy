import React, { useState } from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import partners from "../partners";


function Location(props) {
    return (
        <div className="row">
            {/* <div className="col-lg-3 feature-box">
                <a href={props.ritual} target="_blank">
                    <img src="images/logos/ritual.jpg" alt="ritual" className="order-icons" />
                </a>

            </div> */}
            <div className="col-lg-4 feature-box">
                <a href={props.uber} target="_blank">
                    <img src="images/logos/uber.svg" alt="ubereats" className="order-icons" />
                </a>

            </div>
            <div className="col-lg-4 feature-box">
                <a href={props.skip} target="_blank">
                    <img src="images/logos/skip.svg" alt="skip" className="order-icons" />
                </a>

            </div>
            <div className="col-lg-4 feature-box">
                <a href={props.doordash} target="_blank">
                    <img src="images/logos/doordash.svg" alt="doordash" className="order-icons" />
                </a>

            </div>
        </div>

    );
}


function Order() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Donlands', value: '1' },
        { name: 'Victoria Park', value: '2' },
    ];


    return (
        <div>

        <div>
            <h2>All takeout orders over $30 receive 10% off (cash only)</h2>
            <h2>Call {partners[radioValue - 1].tel} or come in store at our {partners[radioValue - 1].name} location</h2>
            </div>

            <br></br>
            <>

                <ButtonGroup toggle>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            size="lg"
                            key={idx}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >

                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </>
            <Location
                ritual={partners[radioValue - 1].ritual}
                uber={partners[radioValue - 1].uber}
                skip={partners[radioValue - 1].skip}
                doordash={partners[radioValue-1].doordash}
            />
        </div>
    );
}

export default Order;