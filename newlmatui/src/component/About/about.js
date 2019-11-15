import React, { Component } from 'react';
import About01 from './abcom/about01';
import About02 from './abcom/about02';
import About03 from './abcom/about03';
import About04 from './abcom/about04';


import './about.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="aboutcls">
                    <div className="abtcls">
                        <About01/>
                        <About02/>
                        <About03/>
                        <About04/>
                    </div>
                </div>
            </div>
        )
    }
}
