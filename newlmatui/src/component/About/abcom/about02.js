import React, { Component } from 'react';
import './about02.css';
import Img01 from '../../../images/carimg3.JPG';

export default class About02 extends Component {
    render() {
        return (
            <div>
            <div className="container about01">
            <div className="row">
                <div className="col-sm jrny">
                <h2 >Journey so far</h2>
                <h4>LMAssamTea <br/> was founded in 2013 by Tea Sommelier Matrika to source teas direct from farmers and craft them into unique blends.</h4>            
                </div>
                <div className="col-sm">
                <img src={Img01} class="img-fluid " alt="Responsive image"/>
                </div>

            </div>
            </div>
            </div>
        )
    }
}
