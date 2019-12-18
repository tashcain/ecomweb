import React, { Component } from 'react';
import img01 from '../../../images/lemongt.JPG';
import './proinfo.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom';



export default class Proinfo09 extends Component {
    render() {
        return (
            <div>
            <div className='infocard container'>
                    <div className='tht01 '>
                    <h2> Stevia Green Tea </h2><br/>
                    <img src={img01} className="img-fluid " alt=""/><br/><br/>
                    <h5>Price: <strike>₹ 250/-</strike> ₹ 220/- (100 gm)</h5>
                        <Link to="buyprod/08"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>

                    <p>Stevia flavor : Stevia is very helpful to reduce calories an intensely sweet in test it
                    has been used sweeten beverages and making tea so stevia and Green tea both are boost
                    metabolism and helps burn fat.
                    </p>
                    <div class="row">
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
