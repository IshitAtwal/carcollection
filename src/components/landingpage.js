import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Showcar from './showcar'

const Landingpage = () => {
   




  return (
    <div>
 {/* <!-- Slider --> */}
<section className="slider style_one" style={{ position: 'relative', overflow: 'hidden' }}>
  <div className="slide-item-content" style={{ position: 'relative' }}>
    {/* Background Image Layer */}
    <div
      className="image-layer"
      style={{
        backgroundImage: "url(assets/images/sliders/slider-1.jpg)",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }}
    ></div>

    {/* Content Container - positioned above background */}
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <div className="row align-items-center" style={{ minHeight: '600px' }}>
        {/* Text Content Column */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="slider_content" style={{ color: '#fff' }}>
            <h6 className="animate_up d-inline-block" style={{ 
              color: '#fff',
              fontSize: '18px',
              marginBottom: '15px'
            }}>Car Rental</h6>
            <h1 className="animate_left" style={{
              color: '#fff',
              fontSize: '48px',
              lineHeight: '1.2',
              marginBottom: '20px'
            }}>
              Find Affordable Dream <br /> Cars for Rental
            </h1>
            <p className="description animate_right" style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '16px',
              marginBottom: '30px'
            }}>
              Fulfill your automotive fantasies without breaking the bank. Check <br />
              our affordable car rentals for an opulent yet economical ride.
            </p>
            <div className="button_all animate_down">
              <a
                href="#"
                target="_blank"
                rel="nofollow"
                className="btn-style-two animated"
                style={{
                  display: 'inline-block',
                  padding: '12px 30px',
                  backgroundColor: '#ff4a17',
                  color: '#fff',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Car Image Column */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="slider-image animate_left" style={{ position: 'relative' }}>
            <img 
              src="assets/images/sliders/car.png" 
              alt="Rental Car" 
              style={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- Slider End --> */}


    <section className="booking-section">
      <div className="container">
        <div className="filter-wrapper">
          <div className="nav-buttons">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="car-tab" data-bs-toggle="pill" data-bs-target="#car" type="button" role="tab" aria-controls="car" aria-selected="true">
                  Cars
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="truck-tab" data-bs-toggle="pill" data-bs-target="#truck" type="button" role="tab" aria-controls="truck" aria-selected="false">
                  Trucks
                </button>
              </li>
            </ul>
          </div>
          <div className="filter-group">
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="car" role="tabpanel">
                <form>
                  <div className="filter-area">
                    <div className="row">
                      <div className="col-xl-3 col-md-6 col-sm-12 divider">
                        <div className="single-search-box">
                          <div className="icon"><i className="icon-24"></i></div>
                          <div className="searchbox-input">
                            <label>Your Destination</label>
                            <div className="custom-select-dropdown">
                              <div className="select-input">
                                <input type="text" readOnly value="Bangladesh" />
                                <i className="fas fa-angle-down"></i>
                              </div>
                              <div className="custom-select-wrap">
                                <div className="custom-select-search-area">
                                  <i className="fas fa-magnifying-glass"></i>
                                  <input type="text" placeholder="Type Your Destination" />
                                </div>
                                <ul className="option-list">
                                  <li>
                                    <div className="destination">
                                      <h6>Bangladesh</h6>
                                      <p>Dhaka, Cox's Bazar, Sylhet</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        50 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>Nepal</h6>
                                      <p>KATHMANDU, POKHARA</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        30 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>India</h6>
                                      <p>Delhi, Agra, Himachal</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        30 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>Brazil</h6>
                                      <p>Sao Paulo, Salvador, Bonito</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        20 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>Thailand</h6>
                                      <p>Bangkok, Phuket, Trang</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        40 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>Span</h6>
                                      <p>Barcelona, Madrid</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        20 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>Dubai</h6>
                                      <p>Abu Dhabi, Burj Khalifa</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        35 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>United States</h6>
                                      <p>New York, Las Vegas, Colorado</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        45 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-12 divider">
                        <div className="single-search-box">
                          <div className="icon"><i className="icon-25"></i></div>
                          <div className="searchbox-input">
                            <label>When to Start</label>
                            <div className="custom-select-dropdown">
                              <div className="select-input">
                                <input type="text" name="inOut" readOnly value="" />
                                <i className="fas fa-angle-down"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-12 divider">
                        <div className="single-search-box">
                          <div className="icon"><i className="icon-26"></i></div>
                          <div className="searchbox-input">
                            <label>When to Finish</label>
                            <div className="custom-select-dropdown">
                              <div className="select-input">
                                <input type="text" name="inOut" readOnly value="Sep 20" />
                                <i className="fas fa-angle-down"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="single-search-box">
                          <div className="icon"><i className="icon-27"></i></div>
                          <div className="searchbox-input">
                            <label>People</label>
                            <div className="custom-select-dropdown">
                              <div className="select-input">
                                <h6><span id="adult-qty">1</span> Adults, <span id="child-qty">0</span> Child</h6>
                                <i className="fas fa-angle-down"></i>
                              </div>
                              <div className="custom-select-wrap two no-scroll">
                                <ul className="guest-count">
                                  <li className="single-item">
                                    <div className="title">
                                      <h6>Adult</h6>
                                      <span>17 years+</span>
                                    </div>
                                    <div className="quantity-counter">
                                      <a href="#" data-type="adult" className="guest-quantity__minus"><i className="fas fa-minus"></i></a>
                                      <input name="adult_quantity" type="text" className="quantity__input" value="1" />
                                      <a href="#" data-type="adult" className="guest-quantity__plus"><i className="fas fa-plus"></i></a>
                                    </div>
                                  </li>
                                  <li className="single-item">
                                    <div className="title">
                                      <h6>Children</h6>
                                      <span>0-17 years</span>
                                    </div>
                                    <div className="quantity-counter">
                                      <a href="#" data-type="child" className="guest-quantity__minus"><i className="fas fa-minus"></i></a>
                                      <input name="child_quantity" type="text" className="quantity__input" value="0" />
                                      <a href="#" data-type="child" className="guest-quantity__plus"><i className="fas fa-plus"></i></a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit">Search</button>
                </form>
              </div>
              <div className="tab-pane fade" id="truck" role="tabpanel">
                <form>
                  <div className="filter-area">
                    <div className="row">
                      <div className="col-xl-3 col-md-6 col-sm-12 divider">
                        <div className="single-search-box">
                          <div className="icon"><i className="icon-24"></i></div>
                          <div className="searchbox-input">
                            <label>Your Destination</label>
                            <div className="custom-select-dropdown">
                              <div className="select-input">
                                <input type="text" readOnly value="Bangladesh" />
                                <i className="fas fa-angle-down"></i>
                              </div>
                              <div className="custom-select-wrap">
                                <div className="custom-select-search-area">
                                  <i className="fas fa-magnifying-glass"></i>
                                  <input type="text" placeholder="Type Your Destination" />
                                </div>
                                <ul className="option-list">
                                  <li>
                                    <div className="destination">
                                      <h6>Bangladesh</h6>
                                      <p>Dhaka, Cox's Bazar, Sylhet</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        50 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>Nepal</h6>
                                      <p>KATHMANDU, POKHARA</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        30 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>India</h6>
                                      <p>Delhi, Agra, Himachal</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        30 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>Brazil</h6>
                                      <p>Sao Paulo, Salvador, Bonito</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        20 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>Thailand</h6>
                                      <p>Bangkok, Phuket, Trang</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        40 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>Span</h6>
                                      <p>Barcelona, Madrid</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        20 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>Dubai</h6>
                                      <p>Abu Dhabi, Burj Khalifa</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        35 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="destination">
                                      <h6>United States</h6>
                                      <p>New York, Las Vegas, Colorado</p>
                                    </div>
                                    <div className="tour">
                                      <span>
                                        45 <br />
                                        Tour
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-12 divider">
                        <div className="single-search-box">
                          <div className="icon"><i className="icon-25"></i></div>
                          <div className="searchbox-input">
                            <label>When to Start</label>
                            <div className="custom-select-dropdown">
                              <div className="select-input">
                                <input type="text" name="inOut" readOnly value="" />
                                <i className="fas fa-angle-down"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-12 divider">
                        <div className="single-search-box">
                          <div className="icon"><i className="icon-26"></i></div>
                          <div className="searchbox-input">
                            <label>When to Finish</label>
                            <div className="custom-select-dropdown">
                              <div className="select-input">
                                <input type="text" name="inOut" readOnly value="Sep 20" />
                                <i className="fas fa-angle-down"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="single-search-box">
                          <div className="icon"><i className="icon-27"></i></div>
                          <div className="searchbox-input">
                            <label>People</label>
                            <div className="custom-select-dropdown">
                              <div className="select-input">
                                <h6><span id="adult-qty">1</span> Adults, <span id="child-qty">0</span> Child</h6>
                                <i className="fas fa-angle-down"></i>
                              </div>
                              <div className="custom-select-wrap two no-scroll">
                                <ul className="guest-count">
                                  <li className="single-item">
                                    <div className="title">
                                      <h6>Adult</h6>
                                      <span>17 years+</span>
                                    </div>
                                    <div className="quantity-counter">
                                      <a href="#" data-type="adult" className="guest-quantity__minus"><i className="fas fa-minus"></i></a>
                                      <input name="adult_quantity" type="text" className="quantity__input" value="1" />
                                      <a href="#" data-type="adult" className="guest-quantity__plus"><i className="fas fa-plus"></i></a>
                                    </div>
                                  </li>
                                  <li className="single-item">
                                    <div className="title">
                                      <h6>Children</h6>
                                      <span>0-17 years</span>
                                    </div>
                                    <div className="quantity-counter">
                                      <a href="#" data-type="child" className="guest-quantity__minus"><i className="fas fa-minus"></i></a>
                                      <input name="child_quantity" type="text" className="quantity__input" value="0" />
                                      <a href="#" data-type="child" className="guest-quantity__plus"><i className="fas fa-plus"></i></a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <Showcar />

      {/* <!-- Brand Section --> */}
<section class="brand-section pt_120 pb_120">
    <div class="container">
        <div class="section-title-box">
            <div class="section-title">
                <span class="sub-title">Brands</span>
                <h2 class="title">Explore Premium Car Brands</h2>
            </div>
            <div class="show-all-btn">
                <a href="#" class="btn-style-three">Show all Brands</a>
            </div>
        </div>
        <div class="brand-outer-box">
            <div class="single-brand-item animate__backInUp">
                <div class="brand-image">
                    <img src="assets/images/brands/audi.png" alt=""/>
                </div>
                <div class="brand-title">
                    <h6><a href="#">Audi</a></h6>
                </div>
            </div>
            <div class="single-brand-item animate__backInUp">
                <div class="brand-image">
                    <img src="assets/images/brands/bmw.png" alt=""/>
                </div>
                <div class="brand-title">
                    <h6><a href="#">BMW</a></h6>
                </div>
            </div>
            <div class="single-brand-item">
                <div class="brand-image">
                    <img src="assets/images/brands/mercedes-benz.png" alt=""/>
                </div>
                <div class="brand-title">
                    <h6><a href="#">Mercedes Benz</a></h6>
                </div>
            </div>
            <div class="single-brand-item">
                <div class="brand-image">
                    <img src="assets/images/brands/tesla-motors.png" alt=""/>
                </div>
                <div class="brand-title">
                    <h6><a href="#">Tesla Motors</a></h6>
                </div>
            </div>
            <div class="single-brand-item">
                <div class="brand-image">
                    <img src="assets/images/brands/volkswagen.png" alt=""/>
                </div>
                <div class="brand-title">
                    <h6><a href="#">Volkswagen</a></h6>
                </div>
            </div>
            <div class="single-brand-item">
                <div class="brand-image">
                    <img src="assets/images/brands/porsche.png" alt=""/>
                </div>
                <div class="brand-title">
                    <h6><a href="#">Porsche</a></h6>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Brand Section End --> */}
    </div>
  )
}

export default Landingpage
