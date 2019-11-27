import React, { Component } from 'react';
import './footer.css';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';

export default class Footer extends Component {
    render() {
        return (
            <div>
            <div class="container footer">
        <div class="row">
        <div class="col-sm news">
            <h4>LMAssamTea <br/> Begin a Healthy Life</h4>
            
            </div>
            <div class="col-sm about">
            <h4>About Us</h4>
            <p>LMAssamTea have the best quality product of India’s famous tea garden for tea lovers. We have various type of productions in this business. <Link to="/aboutus">More...</Link></p>
            </div>
            <div class="col-sm follow">
            <h4>Follow Us</h4>
            <p>Let us be social <br/>
            <Link to="https://www.facebook.com/LMassamtea"><Icon className="fb svv" type="facebook" theme="filled" /></Link>
            <Icon classname="svv" type="instagram" theme="filled" />
            <Link to="https://twitter.com/LMassamtea?s=08"><Icon className="svv" type="twitter-circle" theme="filled" /></Link>
            </p>
            
            </div>
        </div>
        </div>
        <div className="pinkfry">LMassamtea © 2019 Created by Pinkfry</div>            

            </div>
        )
    }
}
