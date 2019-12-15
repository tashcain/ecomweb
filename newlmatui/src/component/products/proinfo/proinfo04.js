import React, { Component } from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import './proinfo.css';
import img01 from '../../../images/wholeleafGreentea.jpg';



export default class Proinfo04 extends Component {
    render() {
        return (
            <div>
            <div className='infocard container'>
                    <div className='tht01 '>
                    <h2> Green Tea </h2>
                    <img src={img01} className="img-fluid" alt=""/><br/><br/>
                    <h5>Price: <strike>₹ 210/-</strike> ₹ 200/- (100 gm)</h5>
                        <Link to="buyprod/01"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>

                    <p>High quality green tea leaves of Assamis one of the healthiest drinks with highest amount of antioxidants and less amount of caffeine and Green Tea Contains Bioactive Compounds That Improve Health. </p>
                    <div class="row">
                        <div class="col-sm">
                        <ul>
                        <li> Have cancer reducing properties. </li>
                        <li> Helps in weight loos.</li>
                        <li> Helps to reduce tooth decay.</li>	
                        <li> Reduce depression.</li>
                        <li> Helps in skin care.</li>
                        <li> Improve functions of brain cell.</li>
                        <li> Have anti-viral and anti-bacterial properties.</li>
                        <li> Helps in preventing viral infections such as flue.</li>
                        <li> Prevents diabetics. Reduces the risk of heart attack and stroke.</li>


                        </ul>
                        </div>
                        
                    </div>    
                    </div>
            </div>   
            </div>
        )
    }
}
