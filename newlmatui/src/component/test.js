import React, { Component } from 'react';
import './test.css';
import './Home/homeland.css';
import Car from './Home/carousel/carousel';
import Firstland from './firstland/firstland';
// import Gall from './tests/Gall';
import Extra from './Home/extra/extra';

export default class Test extends Component {
    render() {
        return (
            <div>
            <div className="container firstland">
                  <Firstland/>
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
                            <p>Assam tea is mainly black tea, the taste of which is sweared upon by tea lovers worldwide. Assam tea which is mainly sold as breakfast tea is known for its body, briskness, malty flavour and strong bright colour.

Assam is at the sea level and the Brahmaputra flows right through it. Assam is an area of high precipitation receiving a high amount of rain every monsoon coupled with high temperatures in the daytime, which creates a greenhouse like conditions of extreme humidity and heat. This tropical climate contributes to its unique malty taste, the feature for which Assam tea is famous for.</p>
                        </div>
                        </div>
                </div>
            </div>
            <div className="container extra">
                <Extra/>
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
