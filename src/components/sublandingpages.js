import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Sublandingpage = () => {
   const[show,setshow]=useState([])
  const[params]=useSearchParams()
     const id=params.get("id")

useEffect(()=>{
    submit()
},[])

    const submit=async()=>{
        try{

            const result=await fetch(`http://localhost:8000/${id}`,{
            method:"get",
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        const res=await result.json();
        if(res.statuscode==1){
            setshow(res.data)
            
        }else{
            console.log("data not fetch")
        }

        }
        catch(err){
            console.log(err)
        }
    }




  return (
    <div>
        {/* <!-- Slider --> */}
<section className="slider style_one">
      <div className="slide-item-content">
        <div className="slide-item content_left">
          <div
            className="image-layer"
            style={{ backgroundImage: "url(assets/images/sliders/slider-1.jpg)" }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="slider_content">
                  <h6 className="animate_up d-inline-block">Car Rental</h6>
                  <h1 className="animate_left">
                    Find Affordable Dream <br /> Cars for Rental
                  </h1>
                  <p className="description animate_right">
                    Fulfill your automotive fantasies without breaking the bank. Check <br />
                    our affordable car rentals for an opulent yet economical ride.
                  </p>
                  <div className="button_all animate_down">
                    <a
                      href="#"
                      target="_blank"
                      rel="nofollow"
                      className="btn-style-two animated"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="slider-image animate_left">
                  <img src="assets/images/sliders/car.png" alt="" />
                </div>
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


      <section className="popular-car-section pt_120 pb_90 grey-bg">
        <div className="container">
          <div className="section-title centred mb_60">
            <span className="sub-title">Popular Cars</span>
            <h2 className="title">Most Popular Cars</h2>
          </div>
          <div className="row">

{show.map((data)=>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="single-popular-car-block">
                <div className="single-popular-car-image">
                  <img src={`uploads/${data.file}`} alt="" />
                  <div className="single-popular-car-rent-per-day"><span>$49</span>/ Day</div>
                </div>
                <div className="single-popular-car-content">
                  <div className="single-popular-car-rating"><i className="icon-9"></i>4.8</div>
                  <h5 className="single-popular-car-title">{data.brand}</h5>
                  <p className="single-popular-car-text">{data.description}</p>
                  <div className="border-divider"></div>
                  <ul className="single-popular-car-info">
                    <li><i className="icon-6"></i>Doors: {data.doors} Doors</li>
                     <li><i className="icon-8"></i>Passengers: {data.passenger}</li>
                  </ul>
                  <div className="single-popular-car-book-btn"><a href="#" className="btn-style-three">Rent now</a></div>
                </div>
              </div>
            </div>

           

        )}
 
 
 
          </div>
        </div>
      </section>
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

export default Sublandingpage
