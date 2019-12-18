import React, { Component } from 'react';
import img01 from '../../../images/Blackt.JPG';
import './proinfo.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom';



export default class Proinfo05 extends Component {
    render() {
        return (
            <div>
            <div className='infocard container'>
                    <div className='tht01 '>
                    <h2> Orthodox Black Tea </h2><br/>
                    <img src={img01} className="img-fluid " alt=""/><br/><br/>
                    <h5>Price: <strike>₹ 250/-</strike> ₹ 240/- (100 gm)</h5>
                        <Link to="buyprod/11"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>

                    <p>ORTHODOX BLACK TEA :High quality tea leaves of Assam is one of the healthiest drinks with highest amount of antioxidants. Black tea is more oxidized it is generally stronger in flavour. It is made from Camellia synesis leaves black tea has more health benefit.</p>
                    <div class="row">
                        <div class="col-sm">
                        <ul>
                        <li> Reduces the risk of heart attack and stroke.</li>
                        <li> Have cancer reducing properties. </li>
                        <li> Helps to reduce tooth decay.</li>
                        <li> Helps in skin care.</li>
                        </ul>
                        {/* <p style={{paddingTop:'28px', paddingLeft:"80px"}}>CTC BLACK TEA: LM ASSAM TEA has  CTC black tea of Assam selected gardens. ASSAM tea has lot of antioxidants, so it helps reduce stress and helps fill it relax. CTC black tea  make with milk and sugar It has special flavor and  test you enjoy the day with  every cup of tea and refresh in every sip Its Create Happy Things.</p> */}
                        </div>
                        {/* <div class="col-sm badi">
                        <img src={img01} className="img-fluid" alt=""/>
                        </div> */}
                    </div>    
                    </div>
            </div>    
            </div>
        )
    }
}
