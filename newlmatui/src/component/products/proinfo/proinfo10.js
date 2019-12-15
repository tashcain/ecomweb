import React, { Component } from 'react';
import img01 from '../../../images/gtlg.JPG';
import './proinfo.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom';



export default class Proinfo10 extends Component {
    render() {
        return (
            <div>
            <div className='infocard container'>
                    <div className='tht01 '>
                    <h2>Lemon Grass Tea </h2><br/>
                    <img src={img01} className="img-fluid " alt=""/><br/><br/>
                    <h5>Price: <strike>₹ 280/-</strike> ₹ 240/- (100 gm)</h5>
                        <Link to="buyprod/01"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>

                    <p>lemongrass flavor: Lemongrass contains several antioxidants, which can help
                    scavenge free radicals in your body that may cause disease. These antioxidants
                    may help prevent dysfunction of cells inside your coronary arteries. Green tea
                    with lemongrass is make wonderful test for tea lovers.</p>
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
