import React, { Component } from 'react';
import img01 from '../../../images/roset.JPG';
import './proinfo.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom';



export default class Proinfo08 extends Component {
    render() {
        return (
            <div>
            <div className='infocard container'>
                    <div className='tht01 '>
                    <h2> Rose Tea </h2><br/>
                    <img src={img01} className="img-fluid " alt=""/><br/><br/>
                    <h5>Price: <strike>₹ 300/-</strike> ₹ 280/- (100 gm)</h5>
                        <Link to="buyprod/07"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>

                    <p>Rose flavor: It may help prevent urinary tract infections due to its detox and diuretic
                     properties green tea has lot of antioxidant which help weight lose as well as skin care</p>
             
                    </div>
            </div>    
            </div>
        )
    }
}
