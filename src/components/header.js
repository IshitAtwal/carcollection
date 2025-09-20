import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      
      <header>   
    <div class="header-top-one">
        <div class="container">
            <div class="header-top-outer">
                <div class="header-top-info">
                    <i class="far fa-clock"></i>
                    <p>Open Hours: Mon - Fri 8.00 am - 6.00 pm</p>
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
                                <li class="dropdown active"><Link to={'/addcar'}>ADD-CAR</Link>
                                  
                                </li>
                                <li class="dropdown"><Link to={'/addsubcars'}>Addsubcars</Link>
                                </li>
                                 <li class="dropdown"><Link to={'/showcar'}>showcar</Link>
                                </li>
                                <li class="dropdown"><a href="index.html">Pages</a>
                                    <ul>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="team.html">Our Team</a></li>
                                        <li><a href="faq.html">Faq</a></li>
                                        <li class="dropdown"><a href="index.html">Testimonials</a>
                                            <ul>
                                                <li><a href="testimonials.html">Testimonials</a></li>
                                                <li><a href="testimonials-2.html">Testimonials 2</a></li>
                                                <li><a href="testimonials-3.html">Testimonials 3</a></li>
                                            </ul>
                                        </li>                                        
                                        <li><a href="services-area.html">Service Areas</a></li>
                                        <li><a href="area-details.html">Area Details</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>                                        
                                        <li><a href="pricing.html">Pricing</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="error.html">404</a></li>
                                    </ul>
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
    </div>
  )
}

export default Header
