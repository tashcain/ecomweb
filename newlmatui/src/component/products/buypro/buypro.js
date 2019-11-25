import React, { Component } from 'react';
import {Icon} from 'antd';
import axios from 'axios';
import './buypro.css';

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
        message: null
    }
    this.setvalue= this.setvalue.bind(this);
    this.saveData= this.saveData.bind(this);
  }

   setvalue(e){
       console.log(e.target.value);
    this.setState({
        [e.target.id]:e.target.value
    })
}

saveData(){
    axios.post('https://assamtea.herokuapp.com/send',{
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

    componentDidMount(){
        let id = this.props.match.params.id;
        console.log(id);
        if(id === '01'){
            this.setState({
                tea: "Tulsi Green Tea"
            })
        }
        else if( id === '02'){
            this.setState({
                tea: "Blue Tea"
            })
        }
        else if( id === '03'){
            this.setState({
                tea: "Black Tea"
            })
        } 
        else if( id === '04'){
            this.setState({
                tea: "Green Tea"
            })
        } 
        else if( id === '00'){
            this.setState({
                tea: null
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
                            <p><Icon type="contacts" theme='filled' /> 999 999 9999</p>
                            <p> <Icon type="mail" theme="filled" />  email@email.com</p>
                        </div>
                        <div className="email">
                        <form>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" onChange={this.setvalue} className="form-control" id="name" placeholder="Name"/>
                        </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email"onChange={this.setvalue} className="form-control" id="email" placeholder="name@example.com"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone_Number</label>
                                <input type="tel" onChange={this.setvalue} className="form-control" id="phn" placeholder="Phone_Number"/>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">Tea Name</label>
                                <input type="text" onChange={this.setvalue} className="form-control" id="teatype" defaultValue={this.state.tea}  placeholder={this.state.tea}/>
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput">quantity</label>
                                <input type="text" onChange={this.setvalue} className="form-control" id="quantity" placeholder="quantity"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea onChange={this.setvalue} className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <button  onClick={this.saveData} class="btn btn-primary mb-2">Send</button>

                           </form>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
