import React from 'react'
import { Link } from 'react-router-dom'

const Userheader = () => {
  return (
    <div>
      
      <header>   
    <div class="header-top-one">
        <div class="container">
            <div class="header-top-outer">
                <div class="header-top-info">
                    <i class="far fa-clock"></i>
                    <p>Open Hours: Mon - Fri 8.00 am - 6.00 pm     USERHEADER</p>
                </div>
                <div class="header-top-social-icon">
                    <ul>
                        <li><strong>On Social:</strong></li>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   
    <div class="main_header">
        <div class="container"> 
            <div class="main_header_inner">
                <div class="main_header_logo">
                    <figure>
                         <a ><img src="rnk.png" alt="Companny Logo"  /></a>
                    
                    

                       

                    </figure>
                </div>
                <div class="main_header_menu menu_area">
                   
                    <div class="mobile-nav-toggler">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </div>
                    <nav class="main-menu">
                        <div class="collapse navbar-collapse show" id="navbarSupportedContent">
                            <ul class="navigation">
                                <li class="dropdown active"><Link to={'/'}>HOME</Link>
                                  
                                </li>
                                <li class="dropdown"><Link to={'/showcar'}>SHOWCARS</Link>
                                </li>
                                 {/* <li class="dropdown"><Link to={''}>showcar</Link>
                                </li> */}
                                <li class="dropdown"><Link to={'/aboutus'}>Aboutus</Link>
                                    
                                </li>
                                <li class="dropdown"><Link to={'/news'}>News</Link>
                                    {/* <ul>
                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                        <li><a href="blog-standard.html">Blog Standard</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul> */}
                                </li>
                                <li><Link to={'/contact'}>Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="header_right_content">
                    <button class="search-toggler"><i class="fas fa-search"></i></button>
                    <div class="language-switcher">
                        <div id="polyglotLanguageSwitcher">
                            <form action="#">
                                <select id="polyglot-language-options">
                                    <option id="en" value="en" selected></option>
                                    <option id="fr" value="fr"></option>
                                    <option id="de" value="de"></option>
                                    <option id="it" value="it"></option>
                                    <option id="es" value="es"></option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div class="link-btn"><Link to={'/login'} class="btn-style-one">Account</Link></div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Main Header -->

    <!-- Sticky Header--> */}
    <div class="sticky_header">
        <div class="container">
            <div class="main_header_inner">
                <div class="main_header_logo">
                    <figure>
                        <a href="index.html"><img src="assets/images/logo.png" alt="Companny Logo"/></a>
                    </figure>
                </div>
                <div class="main_header_menu menu_area">
                    <nav class="main-menu">
                        {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                    </nav>
                </div>
                <div class="header_right_content">
                    <button class="search-toggler"><i class="fas fa-search"></i></button>
                    <div class="link-btn"><a href="#" class="btn-style-one">Account</a></div>
                </div>
            </div>            
        </div> 
    </div>
    {/* <!-- End Sticky Header-->

    <!-- Mobile Menu  --> */}
    <div class="mobile-menu">
        <div class="menu-backdrop"></div>
        <div class="close-btn">X</div>        
        <nav class="menu-box">
            <div class="nav-logo"><a href="index.html"><img src="assets/images/mobile-logo.png" alt="" title=""/></a></div>
            <div class="menu-outer"></div>
            <div class="contact-info">
                <h4>Contact Info</h4>
                <ul>
                    <li>Chicago 12, Melborne City, USA</li>
                    <li><a href="tel:+91 6239657151">+91 6239657151</a></li>
                    <li><a href="mrmnv0009@gmail.com">imrmnv0009@gmail.com</a></li>
                </ul>
            </div>
            <ul class="social-links centred">
                <li><a href="index.html"><span class="fab fa-twitter"></span></a></li>
                <li><a href="index.html"><span class="fab fa-facebook-square"></span></a></li>
                <li><a href="index.html"><span class="fab fa-pinterest-p"></span></a></li>
                <li><a href="index.html"><span class="fab fa-instagram"></span></a></li>
                <li><a href="index.html"><span class="fab fa-youtube"></span></a></li>
            </ul>
        </nav>
    </div>
    {/* <!-- End Mobile Menu --> */}




    

</header>


<section class="slider style_one">
    <div class="owl-carousel owl-nav-none owl_dots_none theme_carousel owl-theme"
       data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 7000, "smartSpeed": 1800, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "1" } , "1000":{ "items" : "1" }}}'>
       <div class="slide-item-content">
          <div class="slide-item content_left">
             <div class="image-layer" style={{ backgroundImage: "url('/assets/images/sliders/slider-1.jpg')" }}>
             </div>
             <div class="container">
                <div class="row">
                   <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="slider_content">
                         <h6 class="animate_up d-inline-block">Car Rental</h6>
                         <h1 class="animate_left">Find Affordable Dream <br/>Cars for Rental</h1>
                         <p class="description animate_right"> Fulfill your automotive fantasies without breaking the  k. Check <br/> our affordable car rentals for an opulent yet economical ride.</p>
                         <div class="button_all animate_down">
                            <a href="#" target="_blank" rel="nofollow" class="btn-style-two animated">Get in Touch</a>
                         </div>
                      </div>
                   </div>
                   <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="slider-image animate_left">
                            <img src="assets/images/sliders/car.png" alt=""/>
                        </div>
                    </div>
                </div>
             </div>
          </div>
       </div>
       <div class="slide-item-content">
          <div class="slide-item content_left">
             <div class="image-layer" style={{ backgroundImage: "url('/assets/images/sliders/slider-1.jpg')" }}>
             </div>
             <div class="container">
                <div class="row">
                   <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="slider_content">
                         <h6 class="animate_up d-inline-block">Car Rental</h6>
                         <h1 class="animate_left">Find Affordable Dream <br/>Cars for Rental</h1>
                         <p class="description animate_right"> Fulfill your automotive fantasies without breaking the bank. Check <br/> our affordable car rentals for an opulent yet economical ride.</p>
                         <div class="button_all animate_down">
                            <a href="#" target="_blank" rel="nofollow" class="btn-style-two animated">Get in Touch</a>
                         </div>
                      </div>
                   </div>
                   <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="slider-image animate_left">
                            <img src="assets/images/sliders/car.png" alt=""/>
                        </div>
                    </div>
                </div>
             </div>
          </div>
       </div>
       <div class="slide-item-content">
          <div class="slide-item content_left">
             <div class="image-layer"style={{ backgroundImage: "url('/assets/images/sliders/slider-1.jpg')" }}>
             </div>
             <div class="container">
                <div class="row">
                   <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="slider_content">
                         <h6 class="animate_up d-inline-block">Car Rental</h6>
                         <h1 class="animate_left">Find Affordable Dream <br/>Cars for Rental</h1>
                         <p class="description animate_right"> Fulfill your automotive fantasies without breaking the bank. Check <br/> our affordable car rentals for an opulent yet economical ride.</p>
                         <div class="button_all animate_down">
                            <a href="#" target="_blank" rel="nofollow" class="btn-style-two animated">Get in Touch</a>
                         </div>
                      </div>
                   </div>
                   <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="slider-image animate_left">
                            <img src="assets/images/sliders/car.png" alt=""/>
                        </div>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </div>
</section>
    </div>
  )
}

export default Userheader
