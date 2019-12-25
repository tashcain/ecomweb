import React, { Component } from 'react';
import Car from './carousel/carousel';
import Firstland from '../firstland/firstland';

import './homeland.css'


export default class Homeland extends Component {
    render() {
        return (
            <div>
                <div className="container firstland">
                    <div className="row" >
                        <Firstland/>
                    </div>
                </div>
                <div className="lbg">
                <div className="container carr ">
                <div className="row">
                        <div className="col-sm">
                        <Car/>
                        </div>
                        <div className="col-sm">
                        <div className='containerfluid conte'>
                            <h1>Assam Tea</h1>
                            <h2>Best in the world</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis tempora repellendus optio incidunt cupiditate voluptas tempore nam beatae rem, magni vel nesciunt. Asperiores quasi ducimus ullam placeat, a in cumque doloribus dolores laborum sint? Maxime pariatur adipisci sequi iusto excepturi corrupti ipsam eos officia laudantium. Asperiores quas explicabo placeat nesciunt.</p>
                        </div>
                        </div>
                </div>
            </div>   
            <div className="container landcard">
                <div className="row">
                <div class="container cardcom">
            <div class="row">
                <div class="col-sm card">
                    <div className="card01">
                        <span>1</span>
                        <p>We take pride in our sourcing. We buy harvest from farmers, not commodities from brockers</p>
                    </div>
                </div>
                <div class="col-sm card">
                <div className="card02">
                        <span>2</span>
                        <p>Our teas are crafted in small batches - We never compromise on freshness.</p>
                    </div>
                </div>
                <div class="col-sm card">
                <div className="card03">
                        <span>3</span>
                        <p>We never choose flavour over health - 100% natural ingredients always.</p>
                    </div>
                </div>
                <div class="col-sm card">
                <div className="card03">
                        <span>4</span>
                        <p>When you call us, you’re talking to another tea lover, not a recorded message.</p>
                    </div>
                </div>
            </div>
            </div>
                </div>  
            </div>
 
                    </div>   
                   </div> 

            
        )
    }
}
