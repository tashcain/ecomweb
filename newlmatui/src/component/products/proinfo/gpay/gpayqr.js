import React, { Component } from 'react';
import img01 from '../../../../images/qrcode.jpg';
import '../proinfo.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom';



export default class Gpay extends Component {
    render() {
        return (
            <div>
            <div className='infocard container'>
                    <div className='tht01 '>
                    <h2> Scan QR Code to Pay </h2><br/>
                    <img src={img01} className="img-fluid " alt=""/><br/><br/>
                    </div>    
                    </div>
            </div>    
        )
    }
}
