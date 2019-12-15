import React, { Component } from 'react';
import {Button} from 'antd';
import  {Link} from 'react-router-dom';
import './proinfo.css';
import img01 from '../../../images/tgtinfo.jpg';

export default class Proinfo01 extends Component {
    render() {
        return (
            <div>
            <div className='infocard container'>
                    <div className='tht01 '>
                    <h2> Tulsi Green Tea </h2><br/>
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
                        <img src={img01} className="img-fluid" alt=""/><br/><br/>
                        <h5>Price: <strike>₹ 310/-</strike> ₹ 280/- (100 gm)</h5>
                        <Link to="buyprod/01"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>

                        </div>
                        </div>
                        <p>Green tea boost metabolism and helps burn fat. Both Tulsi and Green tea are rich in antioxidants.</p>

                    </div>
                </div>
            </div>
        )
    }
}
