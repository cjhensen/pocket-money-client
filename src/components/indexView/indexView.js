import React from 'react';
import {Col} from 'react-bootstrap';
import Slider from 'react-slick';

import './indexView.css';

import logo from '../../images/logo.png';
import ss_overview from '../../images/screen-overview.png';
import ss_add from '../../images/screen-add.png';
import ss_categories from '../../images/screen-categories.png';
import ss_edit from '../../images/screen-edit.png';
import ss_income from '../../images/screen-income.png';


export default function IndexView(props) {
  const sliderSettings = {
    centerMode: true,
    slidesToShow: 3,
     responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  };
  return (
      <div id="view-index" className="view-wrap">

        <div className="top-half">

          <div className="index-wrap">

            <header>
              <div className="logo">         
                <img alt="logo" src={logo} />   
              </div>
            </header>

            <section>
              <Col xs={12} sm={5} smOffset={1}>
                <p className="app-description">Pocket Money helps you to track you spending by creating a budget and staying on track. Log your transactions and easily see how much you've spent.</p>
              </Col>
              <Col xs={12} sm={5}>
                <div className="screenshot ss-overview">
                  <img src={ss_overview} alt="Overview" />
                </div>
              </Col>
            </section>

            <div className="auth-buttons">
              <button
                type="button"
                onClick={(e) => props.showSignUp(e)}>Sign Up</button>
              <button
                type="button"
                onClick={(e) => props.showLogIn(e)}>Log In</button>
            </div>

          </div>
        </div>

        <div className="bottom-half">
          <div className="index-wrap">
            <Col xs={12}>

              <Slider className="slider center" {...sliderSettings}>
                <div className="slider-img">
                  <img src={ss_add} alt="Add" />
                </div>
                <div className="slider-img">
                  <img src={ss_categories} alt="Categories (Mobile)" />
                </div>
                <div className="slider-img">
                  <img src={ss_edit} alt="Edit" />
                </div>
                <div className="slider-img">
                  <img src={ss_income} alt="Income" />
                </div>
              </Slider>
              
            </Col>
          </div>
        </div>

        <div className="info-cards">
          <div className="index-wrap">
            <Col xs={12} sm={4}>
              <div className="card">
                <div className="card-title">
                  <div className="nav-icon overview"></div>
                  Simple Metrics
                </div>
                <div className="card-description">
                  <p>Easily view how much you've spent, how much you have left, and your estimated savings.</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="card">
                <div className="card-title">
                  <div className="nav-icon transactions"></div>
                  Transaction Logging
                </div>
                <div className="card-description">
                  <p>Add transactions to track your spending across your budget.</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="card">
                <div className="card-title">
                  <div className="nav-icon categories"></div>
                  Budget Categories
                </div>
                <div className="card-description">
                  <p>Organize your spending by setting categories, and easily view how much you have left to spend.</p>
                </div>
              </div>
            </Col>
          </div>
        </div>

        <footer>
          <Col xs={12}>
            Crafted by <a href="https://github.com/cjhensen" alt="Christian Hensen - GitHub">Christian Hensen</a>
          </Col>
        </footer>
        
      </div>
  );
}