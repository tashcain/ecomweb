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
                <h4>LM Assam Tea <br/> was founded in 2013 by Mrs. Leela Matrika to source tea direct from farmers and craft them into unique blends.</h4>            
                </div>
                <div className="col-sm">
                <img src={Img01} class="img-fluid" alt="img"/>
                </div>

            </div>
            </div>
            </div>
        )
    }
}
