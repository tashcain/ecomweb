import React, { Component } from 'react';
import '../../About/abcom/about02.css';
import Img01 from '../../../images/carimg3.JPG';

export default class Extra extends Component {
    render() {
        return (
            <div>
            <div className="container about01 bgsd">
            <div className="row">
                <div className="col-sm jrny">
                <h2>"If you are cold tea will warm you;<br/> If you are too heated it will cool you;<br/> If you are depressed it will cheer you;<br/> If you are excited it will calm you"</h2>    
                <h4><span className="quut">-William  Glatstone</span></h4>            
                </div>
                <div className="col-sm jrnuimg">
                <img src={Img01} class="img-fluid " alt="img"/>
                </div>

            </div>
            </div>
            </div>
        )
    }
}
