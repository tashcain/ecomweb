import React, { Component } from 'react';
import img01 from '../../../images/oolongtea.jpg';
import './proinfo.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom';


export default class Proinfo06 extends Component {
    render() {
        return (
            <div>
            <div className='infocard container'>
                    <div className='tht01 '>
                    <h2> Oolong Tea </h2><br/>
                    <img src={img01} className="img-fluid " alt=""/><br/><br/>
                    <h5>Price: <strike>₹ 300/-</strike> ₹ 280/- (100 gm)</h5>
                        <Link to="buyprod/01"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>

<p>OLONG TEA:  Benefits for heart, brain, bone and Teeth it may boost our metabolism, decrease our risk of developing type 2 diabetes and protect against certain types of cancer. At the end of the day oolong tea is an incredibly exceptional tea for your lifestyle. Plant Camellia sinensis. its brew is light and delicate with a slightly sweet flavor highly regarded for its health benefits</p>                    <div class="row">
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
