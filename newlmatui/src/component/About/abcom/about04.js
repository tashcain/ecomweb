import React, { Component } from 'react';
import  './about04.css';
import img01 from '../../../images/girl.jpg';

export default class About04 extends Component {
    render() {
        return (
            <div>
            <div class="container ownr">
            <div class="row">
                <div class="col-sm ownrcon">
                <h2>The Owner Says</h2>
                <p>LMAssamTea have the best quality product of India’s famous tea garden for tea lovers. We have various type of production in tea are Green tea, Black tea, Blue tea in all flavor as well as  CTC breakfast tea. We are thankful to our customer who trust  us and encourage us to do more work and appreciate for our products and trust in our Brand.Our goal is to ensure the customer’s satisfaction; we rely on it to help develop the vision and set the roadmap for the future of our business.</p>
                            
                </div>
                <div class="col-sm ownrimg">
                <img src={img01}  alt="girl"/>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
