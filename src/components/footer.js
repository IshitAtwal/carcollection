import React from 'react'

const Footer = () => {
  return (
    <div>
      
      {/* <!-- Main Footer --> */}
<footer class="main_footer" style={{backgroundimage: "url(assets/images/background/footer-bg.jpg);"}}>
    <div class="container">
        <div class="footer-top-outer">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div class="footer_widget footer_about_widget">
                        <figure class="footer_widget_logo">
                            <a href="index.html"><img src="rnk.png" alt=""/></a>
                        </figure>
                        <p>57 heol isaf Station Road, Cardiff, UK</p>
                        <ul class="footer-info-list">
                            <li><a href="#">info@example.com</a></li>
                            <li><a href="#">029 2021 4012</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div class="footer_widget footer_resources_widget">
                        <h4 class="footer_widget_title">Resources</h4>
                        <ul class="resources_page_list">
                            <li><a href="#">About Team</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Open Road</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                    <div class="footer_widget footer_community_widget">
                        <h4 class="footer_widget_title">Community</h4>
                        <ul class="community_page_list">
                            <li><a href="#">Newsletter</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Social Group</a></li>
                            <li><a href="#">Helpdesk</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div class="footer_widget footer_newsletter_widget">
                        <h4 class="footer_widget_title">Subscribe Newsletter</h4>
                        <p>Our estimated global carbon emissions by investing in greenhouse</p>
                        <form action="https://z.commonsupport.com/html/carola/contact.html" method="post" class="subscribe-form">
                            <div class="form-group">
                                <input type="email" name="email" placeholder="Email Address"/>
                                <button type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom-outer">
            <div class="copyright">Copyright &copy; 2025 &nbsp;<a href="index.html">Carola</a> , Inc. All Rights Reserved</div>
            <ul class="social-links">
                <li><strong>Follow Us On:</strong></li>
                <li><a href="#"><i class="fab fa-square-facebook"></i></a></li>
                <li><a href="#"><i class="fab fa-square-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
            </ul>
        </div>
    </div>
</footer>
{/* <!-- Main Footer End --> */}

    </div>
  )
}

export default Footer
