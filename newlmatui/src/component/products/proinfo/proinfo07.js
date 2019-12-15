import React, { Component } from 'react';
import img01 from '../../../images/masalatea.jpg';
import './proinfo.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom';



export default class Proinfo07 extends Component {
    render() {
        return (
            <div>
            <div className='infocard container'>
                    <div className='tht01 '>
                    <h2> Masala Tea </h2><br/>
                    <img src={img01} className="img-fluid " alt=""/><br/><br/>
                    <h5>Price:  ₹ 150/- (250 gm)</h5>
                        <Link to="buyprod/01"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>

                    <p> Masala tea : Ours special masala chai recipe makes awesome test wich made with milk
                         and sugar .A perfect cup of masala tea makes you refresh and fill relax.</p>   
                    </div>
            </div>    
            </div>
        )
    }
}

