
let navbar = () => {
  return `
   <div id="orbitz">
   <a href="index.html">
   <img src="https://clipground.com/images/orbitz-logo-5.png" alt="">
   </a>
   
   </div>
    <div id="dropmenu">
        <button id="dropbtn">More travel </button>
        <div id="myDropdown" class="dropdown-content">
        <a href="stays.html"> 
        <div id="dis_flex">
        <i class="fa-solid fa-hotel"></i>
            <h3 id="green">Stays</h3>
            </div>
            </a>
        <br>
        <a href="flight.html">
        <div id="dis_flex">
        <i class="fa-solid fa-plane"></i>
            <h3 id="green">Flights</h3>
            </div>
            </a>
        <br>
        <a href="package.html">
        <div id="dis_flex">
        <i class="fa-solid fa-cart-flatbed-suitcase"></i>
            <h3> Packages</h3>
            </div>
        </a>
        <br>
        <a href="#">
        <div id="dis_flex">    
        <i class="fa-solid fa-car"></i>
            <h3>Cars</h3>
            </div>
            </a>
        <br>
        <a href="#">
        <div id="dis_flex">
        <i class="fa-solid fa-sailboat"></i> 
            <h3>Cruises</h3>
            </div>
            </a>
            <br>
            <a href="#">
            <div id="dis_flex">
            <i class="fa-solid fa-box"></i> 
                <h3>Things to do</h3>
                </div>
                </a>
            <br>
            <div id="dis_flex">
            <a href="#">Deals</a>
            </a>
            </div>
            <br>
            <div id="dis_flex">
            <a href="#">Groups & meetings</a>
            </div>
            <br>
            <div id="dis_flex">
            <a href="#">Travel Blog</a>
            </div>
        </div>
    </div>
<div id="secondary_div">
    
        <a href="https://www.orbitz.com/es/?langid=2058">Español</a>
  
   
        <a href="#">List your property</a>
   
  
        <a href="support.html">Support</a>
    
    
        <a href="trip.html">Trips</a>
    
    
        <a href="signup.html" >
          Sign In
        </a>
    
    
    </div>
    `;
};
let footer_main = () => {
  return `
   
  
    <div id="footer-logo">
        <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="">
    </div>
    <div id="footer">
        <h3>Company</h3>
        <p> <a href="https://www.orbitz.com/lp/b/about">About</a></p>
        <p> <a href="career.html">Jobs</a> </p>
        <p> <a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">List your property</a></p>
        <p> <a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">Partnerships</a></p>
        <p> <a href="./press.html">Newsroom</a></p>
        <p>  <a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">Investors Relations</a></p>
        <p> <a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">Site Map</a></p>
        <p> <a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">Orbitz Reward</a></p>
        <p> <a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">Advertising</a></p>
    </div>
    <div id="footer">
    <h3>Explore</h3>
        <p><a href="https://www.orbitz.com/Destinations-In-United-States-Of-America.d201.Hotel-Destinations">Hotel in United States</a></p>
        <p><a href="https://www.orbitz.com/lp/lgbtq-gay-travel-hotels">Vacation Rentals in United States</a></p>
        <p><a href="https://www.orbitz.com/lp/lgbtq-gay-travel-hotels">Car Rantals in United States</a></p>
        <p><a href="https://www.orbitz.com/lp/lgbtq-gay-travel-hotels">Domestic Flights</a></p>
        <p><a href="https://www.orbitz.com/United-States-Of-America.d201.Destination-Travel-Guides">Vacation Packages in United States</a></p>
        <p><a href="https://www.orbitz.com/United-States-Of-America.d201.Destination-Travel-Guides">Orbitz Reviews</a></p>
        <p><a href="https://www.orbitz.com/United-States-Of-America.d201.Destination-Travel-Guides">Orbitz Coupons</a></p>
        <p><a href="https://www.orbitz.com/United-States-Of-America.d201.Destination-Travel-Guides">LGBTQ Travel</a></p>
        <p><a href="https://www.orbitz.com/United-States-Of-America.d201.Destination-Travel-Guides">Unique Accommodations</a></p>
        <p><a href="https://www.orbitz.com/United-States-Of-America.d201.Destination-Travel-Guides">Travel Blog</a></p>
    </div>
    <div id="footer">
        <h3>Policies</h3>
        <p><a href="https://www.orbitz.com/lp/lg-privacy">Privacy Policy</a></p>
        <p><a href="https://www.orbitz.com/lp/lg-terms">Terms of Use</a></p>
        <p><a href="https://www.orbitz.com/lp/lg-terms">List your property</a></p>
        <p><a href="https://www.orbitz.com/lp/lg-terms">Partnerships</a></p>
        <p><a href="https://www.orbitz.com/dnsmpi">Newsroom</a></p>
        <p><a href="https://www.orbitz.com/dnsmpi">Investors</a></p>
        <p><a href="https://www.orbitz.com/dnsmpi">Site Map</a></p>
        <p><a href="https://www.orbitz.com/dnsmpi">Orbitz Reward</a></p>
        <p><a href="https://www.orbitz.com/dnsmpi">Advertising</a></p>
        </div>
        <div id="footer">
        <h3>Help</h3>
        <p><a href="https://www.orbitz.com/service/">Support</a></p>
        <p><a href="https://www.orbitz.com/service/#/articles/560/34/16267">Cancel your hotel or vacation rental booking</a></p>
        <p><a href="https://www.orbitz.com/service/#/articles/569/34/16477">Cancel your flight</a></p>
        <p><a href="https://www.orbitz.com/service/#/myTrips/16138">Refund timelines,policies & processes</a></p>
        <p><a href="https://www.orbitz.com/service/#/article/19518">Use an Orbitz Coupon</a></p>
        
        </div>
        `;
};
let end = () => {
  return `
    
  <p>© 2022 Orbitz, LLC, An Expedia Group Company.All rights reserved.</p>
  <p>Orbitz.com, and the Orbitz logo are trademarks or registered trademarks of Orbitz, LLC. CST# 2083930-50.</p>
  `;
};
export { navbar, footer_main, end }; //Default export;

