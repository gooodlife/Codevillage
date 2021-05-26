import React, { Component } from 'react';
import copyright from '../icons/copyright.svg';

export default class footer extends Component {
    render() {
        return (
            <div className='footerContainer'>
                <div>
                <img height ={20} src={copyright} alt="copyright"/>
                </div>
                <div>
                <h6>
                        If you have any issues or feedback, contact us by email:<br/>
                        salam@CodeVillageschool.ng
                    </h6>
                </div>
            </div>
        )
    }
}
