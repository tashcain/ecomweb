import React, { Component } from 'react';
import './excss/bootstrap.min.css';
import './excss/font-awesome.min.css';
import './excss/animate.css';
import './excss/animate.min.css';
import './excss/style.css';
import Img01 from '../../images/carimg1.JPG';

export default class Gall extends Component {
    render() {
        return (
            <div>
            <div className="gallery">
        <div className="text-center">
          <h2>Gallery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quod voluptate consequuntur ad quasi,<br /> dolores obcaecati ex aliquid, dolor provident </p>
        </div>
        <div className="container">
          <div className="col-md-4">
            <figure className="effect-marley">
              <img src={Img01} alt="" className="img-responsive" />
              <figcaption>
                <h4>sweet marley</h4>
                <p>Marley tried to convince her but she was not interested.</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-md-4">
            <figure className="effect-marley">
              <img src={Img01} alt="" className="img-responsive" />
              <figcaption>
                <h4>sweet marley</h4>
                <p>Marley tried to convince her but she was not interested.</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-md-4">
            <figure className="effect-marley">
              <img src={Img01} alt="" className="img-responsive" />
              <figcaption>
                <h4>sweet marley</h4>
                <p>Marley tried to convince her but she was not interested.</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="container">
          <div className="col-md-4">
            <figure className="effect-marley">
              <img src={Img01} alt="" className="img-responsive" />
              <figcaption>
                <h4>sweet marley</h4>
                <p>Marley tried to convince her but she was not interested.</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-md-4">
            <figure className="effect-marley">
              <img src={Img01} alt="" className="img-responsive" />
              <figcaption>
                <h4>sweet marley</h4>
                <p>Marley tried to convince her but she was not interested.</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-md-4">
            <figure className="effect-marley">
              <img src={Img01} alt="" className="img-responsive" />
              <figcaption>
                <h4>sweet marley</h4>
                <p>Marley tried to convince her but she was not interested.</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
            </div>
        )
    }
}
