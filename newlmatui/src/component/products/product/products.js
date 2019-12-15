import React, { Component } from 'react';
import Img01 from '../../../images/BlueTea1.jpg';
import Img02 from '../../../images/TulsiGreenTea1.jpg';
import Img03 from '../../../images/wholeleafGreentea.jpg';
import Img04 from '../../../images/PremiumTea.jpg';
import Img05 from '../../../images/oolongtea.jpg';
import Img06 from '../../../images/masalatea.jpg';
import Img07 from '../../../images/gtlg.JPG';
import Img08 from '../../../images/lemongt.JPG';
import Img09 from '../../../images/roset.JPG';
import Img10 from '../../../images/whitet.JPG';
import Img11 from '../../../images/Blackt.JPG';
import { Card, Button } from 'antd';
import './products.css';
import {Link} from 'react-router-dom';

const { Meta } = Card;

export default class Products extends Component {
    constructor(){
        super();
    
        this.onHover = this.onHover.bind(this);
    }

    // componentDidMount(){
    //     var x =  document.getElementsByClassName("cardsize").css.height;
    //   if(x !== 272){
    //       console.log("here wyyw")
    //   }
    // }

        onHover(e){
           
            var x =  document.getElementsByClassName("cardsize");
              console.log(x);
              console.log(e.id);
        }

    render() {
        return (
            <div>
                <div className="precont">
                <div className="container">
            <div className="row">
                <div className="col-sm justify-content-center  ">
                <Card className="first-card"
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize img-fluid" onMouseOver={this.onHover} alt="example" src={Img02} />}
                        >
                            
                            <Link to="/prod/01"><u><Meta title="Tulsi Green Tea"  /></u></Link> 
                           <br/> <Link to="/buyprod/01"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link> 
                        </Card>
                </div>
                <div class="col-sm">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize img-fluid" onMouseOver={this.onHover} alt="example" src={Img01} />}
                        >
                        <Link to="/prod/02"><u><Meta title="Blue Tea"/></u></Link> 
                         <br/><Link to="/buyprod/02"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>
                        </Card>
                </div>
                <div class="col-sm">
                <Card 
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize img-fluid" onMouseOver={this.onHover} alt="example" src={Img04} />}
                        >
                        <Link to="/prod/03"><u><Meta title="Premium Tea"  /></u></Link> 
                        <br/><Link to="/buyprod/03"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>
                        </Card>
                </div>
                <div class="col-sm ">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize img-fluid" onMouseOver={this.onHover} alt="example" src={Img03} />}
                        >
                        <Link to="/prod/04"><u><Meta title="Green Tea"  /></u></Link> 
                         <br/><Link to="buyprod/04"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>
                        </Card>
                </div>
                <div class="col-sm ">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize img-fluid" onMouseOver={this.onHover} alt="example" src={Img05} />}
                        >
                        <Link to="/prod/06"><u><Meta title="Oolong Tea"  /></u></Link> 
                         <br/><Link to="buyprod/05"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>
                        </Card>
                </div>
                <div class="col-sm ">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize img-fluid" onMouseOver={this.onHover} alt="example" src={Img06} />}
                        >
                        <Link to="/prod/07"><u><Meta title="Masala Tea"/></u></Link> 
                         <br/><Link to="buyprod/06"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>
                        </Card>
                </div>
                <div class="col-sm ">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize img-fluid" onMouseOver={this.onHover} alt="example" src={Img09} />}
                        >
                        <Link to="/prod/08"><u><Meta title="Rose Tea"/></u></Link> 
                         <br/><Link to="buyprod/07"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>
                        </Card>
                </div>
                <div class="col-sm ">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize img-fluid" onMouseOver={this.onHover} alt="example" src={Img08} />}
                        >
                        <Link to="/prod/09"><u><Meta title="Stevia Green Tea"/></u></Link> 
                         <br/><Link to="buyprod/08"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>
                        </Card>
                </div>
                <div class="col-sm ">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize img-fluid" onMouseOver={this.onHover} alt="example" src={Img07} />}
                        >
                        <Link to="/prod/10"><u><Meta title="LemonGrass Tea"/></u></Link> 
                         <br/><Link to="buyprod/09"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>
                        </Card>
                </div>
                <div class="col-sm ">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize img-fluid" onMouseOver={this.onHover} alt="example" src={Img10} />}
                        >
                        <Link to="/prod/11"><u><Meta title="White Tea"/></u></Link> 
                         <br/><Link to="buyprod/10"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>
                        </Card>
                </div>
                <div class="col-sm ">
                <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img className="cardsize img-fluid" onMouseOver={this.onHover} alt="example" src={Img11} />}
                        >
                        <Link to="/prod/05"><u><Meta title="OrthodoxBlack Tea"/></u></Link> 
                         <br/><Link to="buyprod/11"><Button type="primary" onClick={this.clickHandler}>Buy Now</Button></Link>
                        </Card>
                </div>
            </div>
            </div> 
                </div>
           
                    
            </div>
        )
    }
}
