import React, { Component } from 'react';
import './proinfo.css';
import img01 from '../../../images/tgtinfo.jpg';

export default class Proinfo01 extends Component {
    render() {
        return (
            <div>
            <div className='infocard container'>
                    <div className='tht01 '>
                    <h2>Benefits of Tulsi Green Tea </h2>
                    <div class="row">
                        <div class="col-sm">
                        <ul>
                        <li>Reduces Stress </li>
	                    <li>Improves Metabolism</li>
	                    <li>Dissolves Kidney Stones.</li>
                        <li>Promotes great heart health.</li>
	                    <li>Prevents cold.</li>
	                    <li>Reduces fever. </li>
	                    <li>Relieves headaches.</li>
	                    <li>Improves hair and skin. </li>
                        </ul>
                        <p >Drinking Tulsi Green Tea regularly can help maintain beautiful and healthy skin. It also helps in the reducing itchiness of the scalp and reduces hair fall. </p>
                        </div>
                        <div class="col-sm">
                        <img src={img01} className="img-fluid" alt=""/>
                        </div>
                        </div>
                        <p>Green tea boost metabolism and helps burn fat. Both Tulsi and Green tea are rich in antioxidants.</p>

                    </div>
                </div>
            </div>
        )
    }
}
