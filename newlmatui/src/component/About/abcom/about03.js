import React, { Component } from 'react';
import './about03.css';

export default class About03 extends Component {
    render() {
        return (
            <div>
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
        )
    }
}
