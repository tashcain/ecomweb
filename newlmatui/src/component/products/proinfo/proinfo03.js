import React, { Component } from "react";
import img01 from "../../../images/ptinfo.jpg";
import "./proinfo.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default class Proinfo03 extends Component {
  render() {
    return (
      <div>
        <div className="infocard container">
          <div className="tht01 ">
            <h2> Premium Tea </h2>
            <br />
            <img src={img01} className="img-fluid choti" alt="" />
            <br /> <br />
            <h5 className="choti">
              Price: <strike>₹ 180/-</strike> ₹ 150/- (500 gm)
            </h5>
            <Link to="buyprod/03">
              <Button
                type="primary"
                className="choti"
                onClick={this.clickHandler}
              >
                Buy Now
              </Button>
            </Link>
            <div class="row">
              <div class="col-sm">
                <p style={{ paddingTop: "28px", paddingLeft: "80px" }}>
                  CTC BLACK TEA: LM ASSAM TEA has CTC black tea of Assam
                  selected gardens. ASSAM tea has lot of antioxidants, so it
                  helps reduce stress and helps fill it relax. CTC black tea
                  make with milk and sugar It has special flavor and test you
                  enjoy the day with every cup of tea and refresh in every sip
                  Its Create Happy Things.
                </p>
              </div>
              <div class="col-sm badi">
                <img src={img01} className="img-fluid" alt="" />
                <br />
                <br />
                <h5>
                  Price: <strike>₹ 180/-</strike> ₹ 150/- (500gm)
                </h5>
                <Link to="buyprod/03">
                  <Button type="primary" onClick={this.clickHandler}>
                    Buy Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
