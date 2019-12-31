import React, { Component } from 'react';
import {Icon} from 'antd';
import axios from 'axios';
import './buypro.css';
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

export default class Buypro extends Component {

    constructor(){
        super();
                
     this.state={
        tea: null,
        name: null,
        email:null,
        phn:null,
        teatype:null,
        quantity: null,
        message: null,
        teaimg: null,
        price: null,
        totalprice: null,
        actii: null
    }
    this.setvalue= this.setvalue.bind(this);
    this.saveData= this.saveData.bind(this);
  }

   setvalue(e){
       console.log(e.target.value);
    this.setState({
        [e.target.id]:e.target.value,
    })
}

saveData(){
    axios.post('http://www.lmassamtea.com/send',{
       name:this.state.name,
       email: this.state.email,
       phn: this.state.phn,
       teatype:this.state.tea,
       quantity: this.state.quantity,
       message:this.state.message

    })
    .then(res => {
    console.log(res.data);
        //   if(res.data.message === undefined){
    //     alert("order placed successfully");
    //   }
    //   else{
    //     alert(res.data.message);
    //   }
    })
    .catch(err => {
        console.log(err);
    })
    }

    componentDidUpdate() {
        window.scrollTo(0,0);
      }

    componentDidMount(){
        let id = this.props.match.params.id;
        if(id === '01'){
            this.setState({
                tea: "Tulsi Green Tea",
                teaimg: Img02,
                price: 280
            })
        }
        else if( id === '02'){
            this.setState({
                tea: "Blue Tea",
                teaimg: Img01,
                price: 580

            })
        }
        else if( id === '03'){
            this.setState({
                tea: "Premium Tea",
                teaimg: Img04,
                price: 150
            })
        } 
        else if( id === '04'){
            this.setState({
                tea: "Green Tea",
                teaimg:Img03,
                price: 200
            })
        }
        else if( id === '05'){
            this.setState({
                tea: "Oolong Tea",
                teaimg: Img05,
                price: 280
            })
        } 
        else if( id === '06'){
            this.setState({
                tea: "Masala Tea",
                teaimg: Img06,
                price: 150
            })
        }
        else if( id === '07'){
            this.setState({
                tea: "Rose Tea",
                teaimg: Img09,
                price: 280
            })
        }
        else if( id === '08'){
            this.setState({
                tea: "Stevia Green Tea",
                teaimg: Img08,
                price: 220
            })
        }
        else if( id === '09'){
            this.setState({
                tea: "Green Tea With Lemon Grass",
                teaimg: Img07,
                price: 240
            })
        }
        else if( id === '10'){
            this.setState({
                tea: "White Tea",
                teaimg: Img10,
                price: 890
            })
        }
        else if( id === '11'){
            this.setState({
                tea: "Orthodox Black Tea",
                teaimg: Img11,
                price: 240
            })
        } 
        else if( id === '00'){
            this.setState({
                tea: null
            })
        }
        else if( id === '101'){
            this.setState({
                actii: "disabled"
            })
        }   
    }
    render() {
        return (
            <div>
                <div className="tgt container">
                    <div className="emailcard">
                        <div className="cont">
                            <h1>LMAssamTea</h1>
                            <h2>Contact Us</h2>
                            <p><Icon type="contacts" theme='filled' /> +91 8527371707</p>
                            <p> <Icon type="mail" theme="filled" />  lmasaamtea@gmail.com</p><br/>
                            <div>
                            <img className="cardsize diis img-fluid" onMouseOver={this.onHover} alt="example" src={this.state.teaimg} />
                            </div>
                        </div>
                        <div className="email">
                        <form>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" onChange={this.setvalue}   className="form-control" id="name" placeholder="Name"/>
                        </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email"onChange={this.setvalue}  className="form-control" id="email" placeholder="name@example.com"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone_Number</label>
                                <input type="tel" onChange={this.setvalue} className="form-control" id="phn" placeholder="Phone_Number"/>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">Tea Name</label>
                                <input type="text" onChange={this.setvalue} disabled={this.state.actii} className="form-control" id="teatype" defaultValue={this.state.tea}  placeholder={this.state.tea}/>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">quantity</label>
                                <input type="text" onChange={this.setvalue} disabled={this.state.actii} className="form-control" id="quantity" placeholder="quantity"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea onChange={this.setvalue}  className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <div><h2>Total Price: ₹ {this.state.price * this.state.quantity}/-</h2></div>
                            <button  onClick={this.saveData} class="btn btn-primary mb-2">Order</button>
     
                                </form>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
