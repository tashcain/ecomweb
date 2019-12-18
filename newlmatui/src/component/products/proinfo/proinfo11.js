import React, { Component } from 'react';
import img01 from '../../../images/whitet.JPG';
import './proinfo.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom';



export default class Proinfo11 extends Component {
    render() {
        return (
            <div>
            <div className='infocard container'>
                    <div className='tht01 '>
                    <h2> White Tea </h2><br/>
                    <img src={img01} className="img-fluid " alt=""/><br/><br/>
                    <h5>Price: <strike>₹ 900/-</strike> ₹ 890/- (50 gm)</h5>
                        <Link to="buyprod/05"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>

                        <p>WHITE TEA  is hand harvested.  Made only from the unopened buds and young leaves of the tea plant Camellia sinensis. It’s brew is light and delicate with a slightly sweet flavor highly regarded for its health benefits.</p>                    <div class="row">
                        <div class="col-sm">
                        <ul>
                        <li> Reduces the risk of heart attack and stroke.</li>
                        <li> Have cancer reducing properties. </li>
                        <li> Helps to reduce tooth decay.</li>
                        <li> Helps in skin care.</li>
                        </ul>
                        </div>                        
                    </div>    
                    </div>
            </div>    
            </div>
        )
    }
}
