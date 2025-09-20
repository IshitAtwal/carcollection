import React from 'react'

const Contact = () => {
  return (
    <div>
      

      {/* <!-- Breadcrumb Section --> */}
<section class="breadcrumb-section" style={{ backgroundImage: "url('assets/images/background/inner-banner-bg-4.png')" }}>

    <div class="container">
        <div class="banner-content">
            <h1>Contact Us</h1>
        </div>
    </div>
</section>
{/* <!-- Breadcrumb Section End --> */}

{/* <!-- Contact Details Section --> */}
<section class="contact-details-section pt_120 pb_90">
    <div class="container">
        <div class="section-title centred mb_60">
            <span class="sub-title">Contact Detials</span>
            <h2 class="title">Contact Informations</h2>
        </div>
        <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div class="contact-info-item centred">
                    <div class="contact-info-icon">
                        <i class="icon-49"></i>
                    </div>
                    <h4 class="contact-info-title">Our Location</h4>
                    <div class="contact-info-text">
                        <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div class="contact-info-item centred">
                    <div class="contact-info-icon">
                        <i class="icon-50"></i>
                    </div>
                    <h4 class="contact-info-title">Email Address</h4>
                    <div class="contact-info-text">
                        <a href="#">contact@example.com</a>
                        <a href="#">support@example.com</a>
                    </div>                        
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div class="contact-info-item centred">
                    <div class="contact-info-icon">
                        <i class="icon-51"></i>
                    </div>
                    <h4 class="contact-info-title">Phone Number</h4>
                    <div class="contact-info-text">
                        <p>Emergency Cases</p>
                        <a href="#">+(208) 555-0112 (24/7)</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Contact Details Section End --> */}

{/* <!-- Google Map Section --> */}
<section class="google-map-section">
    <div class="container">
       <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.065606883327!2d-73.87134661653042!3d40.708731123731674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e72880ceaf3%3A0x5f9bdf282a54d261!2sThe%20Shops%20at%20Atlas%20Park!5e0!3m2!1sen!2sbd!4v1716089063707!5m2!1sen!2sbd"
  style={{ border: 0, width: '100%', height: '450px' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    </div>
</section>
{/* <!-- Google Map Section End --> */}

{/* <!-- Contact Section --> */}
<section class="contact-section pt_120 pb_120">
    <div class="container">
        <div class="section-title centred mb_60">
            <span class="sub-title">Get in Touch</span>
            <h2 class="title">Send a Message</h2>
        </div>
        <form action="#" method="post" class="default-form">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="text" name="name" placeholder="Your Name" required/>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="email" name="email" placeholder="Your email" required/>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea name="message" placeholder="Type message"></textarea>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                    <div class="check-box">
                        <input class="check" type="checkbox" id="checkbox33"/>
                        <label for="checkbox33">Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>                                            
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group centred">
                    <button type="submit" class="btn-style-five">Post Comment</button>
                </div>
            </div>
        </form>
    </div>
</section>
{/* <!-- Contact Section End --> */}

    </div>
  )
}

export default Contact
