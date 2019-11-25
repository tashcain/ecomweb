import React, { Component } from 'react';
import './footer.css';
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam voluptatibus. Id tempora dolores quas nemo ratione voluptates! Amet, asperiores.</p>                
            </div>
            <div class="col-sm follow">
            <h4>Follow Us</h4>
            <p>Let us be social <br/><Icon type="facebook" theme="filled" />
            <Icon type="instagram" theme="filled" />
            <Icon type="twitter-circle" theme="filled" /></p>
            
            </div>            
        </div>
        </div>
            </div>
        )
    }
}
