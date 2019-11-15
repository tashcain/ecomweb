import React, { Component } from 'react';
import img01 from '../../../images/ptinfo.jpg';
import './proinfo.css';


export default class Proinfo03 extends Component {
    render() {
        return (
            <div>
            <div className='infocard container'>
                    <div className='tht01 '>
                    <h2> Premium Tea </h2>
                    <img src={img01} className="img-fluid choti" alt=""/>
                    <p>ORTHODOX BLACK TEA :High quality tea leaves of Assam is one of the healthiest drinks with highest amount of antioxidants. Black tea is more oxidized it is generally stronger in flavour. It is made from Camellia synesis leaves black tea has more health benefit.</p>
                    <div class="row">
                        <div class="col-sm">
                        <ul>
                        <li> Reduces the risk of heart attack and stroke.</li>
                        <li> Have cancer reducing properties. </li>
                        <li> Helps to reduce tooth decay.</li>
                        <li> Helps in skin care.</li>
                        </ul>
                        <p>CTC BLACK TEA: LM ASSAM TEA has  CTC black tea of Assam selected gardens. ASSAM tea has lot of antioxidants, so it helps reduce stress and helps fill it relax. CTC black tea  make with milk and sugar It has special flavor and  test you enjoy the day with  every cup of tea and refresh in every sip Its Create Happy Things.</p>
                        </div>
                        <div class="col-sm badi">
                        <img src={img01} className="img-fluid" alt=""/>
                        </div>
                    </div>    
                    </div>
            </div>    
            </div>
        )
    }
}
