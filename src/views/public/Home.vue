<template>
  <div>
    <Header/>

    <div class="booking booking-bg">
        <div class="booking-container">
            <div class="booking-field">
                <div class="booking-text">
                    <h1>Welcome To KK Routing System</h1>
                    <br>

                    <h4>We will provide our best Service.We hope you will enjoy our service. <br><br> Are you new member?</h4>
                    <br>
                    <br>

                    <router-link to="/login" class="btn btn-transparent">Login</router-link>
                    <router-link to="/register" class="btn btn-color">Register</router-link>
                </div>
            </div>
        </div>
    </div>

    <div class="service">

        <h1 style="font-weight: 1400">Why Choose Us?</h1>

        <div class="service-display">
            <div class="service-block">
                <img src="images/1.jpg" width="100px" height="100px"
                    style="border-radius: 50%;border: 1px solid orangered;padding: 10px" alt="">
                <h3>Reliable Service</h3>
                <p>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry
                </p>
            </div>

            <div class="service-block">
                <img src="images/2.jpg" width="100px" height="100px"
                    style="border-radius: 50%;border: 1px solid orangered;padding: 10px" alt="">
                <h3>Lowest Prices</h3>
                <p>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry
                </p>
            </div>

            <div class="service-block">
                <img src="images/3.jpg" width="100px" height="100px"
                    style="border-radius: 50%;border: 1px solid orangered;padding: 10px" alt="">
                <h3>24/7 Support</h3>
                <p>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry
                </p>
            </div>

            <div class="service-block">
                <img src="images/4.jpg" width="100px" height="100px"
                    style="border-radius: 50%;border: 1px solid orangered;padding: 10px" alt="">
                <h3>Best Cars</h3>
                <p>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry
                </p>
            </div>
        </div>
    </div>

    <h1 style="text-align:center">Choose Your Cab</h1>

    <form action="" method="post" class="cab-booking-block">
        <select name="route_start" id="" class="field-class booking-block">
            <option value="no">Select Route Starting Point</option>
            <option value="1">Route One</option>
            <option value="2">Route Two</option>
            <option value="3">Route Three</option>
            <option value="4">Route Four</option>
            <option value="5">Route Five</option>
        </select>

        <select name="route_start" id="" class="field-class booking-block">
            <option value="no">Select Route Ending Point</option>
            <option value="1">Route One</option>
            <option value="2">Route Two</option>
            <option value="3">Route Three</option>
            <option value="4">Route Four</option>
            <option value="5">Route Five</option>
        </select>

        <input type="submit" value="Check Available Car" class="field-btn booking-block">
    </form>

    <div class="cab">
        <div class="cab-container">
            <div class="cab-display">
                <div class="cab-block">
                    <div class="cab-img">
                        <img src="images/5.jpg" width="100%" height="150px" style="padding: 10px" alt="">
                    </div>
                    <hr>

                    <div class="cab-text">
                        <h3>Cci-Fiat 500</h3>
                        <div class="cab-text-display">
                            <div class="cab-text-left">
                                <p>Mileage: <b>140 000 km</b></p>
                                <p>Volume capacity: <b>2.3L</b></p>
                                <p>Air Conditioning: <b>Yes</b></p>
                            </div>

                            <div class="cab-text-right">
                                <p><span class="fa fa-user"></span>&nbsp; 9</p>
                                <p><span class="fa fa-shopping-bag"></span>&nbsp; 3</p>
                                <p><span class="fa fa-window-maximize"></span>&nbsp; 4</p>
                            </div>
                        </div>
                        <a href="#" class="cab-btn">Book Now</a>
                    </div>
                </div>

                <div class="cab-block">
                    <div class="cab-img">
                        <img src="images/6.jpg" width="100%" height="150px" style="padding: 10px" alt="">
                    </div>
                    <hr>

                    <div class="cab-text">
                        <h3>Cci-Fiat 500</h3>
                        <div class="cab-text-display">
                            <div class="cab-text-left">
                                <p>Mileage: <b>140 000 km</b></p>
                                <p>Volume capacity: <b>2.3L</b></p>
                                <p>Air Conditioning: <b>Yes</b></p>
                            </div>

                            <div class="cab-text-right">
                                <p><span class="fa fa-user"></span>&nbsp; 9</p>
                                <p><span class="fa fa-shopping-bag"></span>&nbsp; 3</p>
                                <p><span class="fa fa-window-maximize"></span>&nbsp; 4</p>
                            </div>
                        </div>
                        <a href="#" class="cab-btn">Book Now</a>
                    </div>
                </div>

                <div class="cab-block">
                    <div class="cab-img">
                        <img src="images/7.jpg" width="100%" height="150px" style="padding: 10px" alt="">
                    </div>
                    <hr>

                    <div class="cab-text">
                        <h3>Cci-Fiat 500</h3>
                        <div class="cab-text-display">
                            <div class="cab-text-left">
                                <p>Mileage: <b>140 000 km</b></p>
                                <p>Volume capacity: <b>2.3L</b></p>
                                <p>Air Conditioning: <b>Yes</b></p>
                            </div>

                            <div class="cab-text-right">
                                <p><span class="fa fa-user"></span>&nbsp; 9</p>
                                <p><span class="fa fa-shopping-bag"></span>&nbsp; 3</p>
                                <p><span class="fa fa-window-maximize"></span>&nbsp; 4</p>
                            </div>
                        </div>
                        <a href="#" class="cab-btn">Book Now</a>
                    </div>
                </div>

                <div class="cab-block">
                    <div class="cab-img">
                        <img src="images/8.jpg" width="100%" height="150px" style="padding: 10px" alt="">
                    </div>
                    <hr>

                    <div class="cab-text">
                        <h3>Cci-Fiat 500</h3>
                        <div class="cab-text-display">
                            <div class="cab-text-left">
                                <p>Mileage: <b>140 000 km</b></p>
                                <p>Volume capacity: <b>2.3L</b></p>
                                <p>Air Conditioning: <b>Yes</b></p>
                            </div>

                            <div class="cab-text-right">
                                <p><span class="fa fa-user"></span>&nbsp; 9</p>
                                <p><span class="fa fa-shopping-bag"></span>&nbsp; 3</p>
                                <p><span class="fa fa-window-maximize"></span>&nbsp; 4</p>
                            </div>
                        </div>
                        <a href="#" class="cab-btn">Book Now</a>
                    </div>
                </div>

                <div class="cab-block">
                    <div class="cab-img">
                        <img src="images/5.jpg" width="100%" height="150px" style="padding: 10px" alt="">
                    </div>
                    <hr>

                    <div class="cab-text">
                        <h3>Cci-Fiat 500</h3>
                        <div class="cab-text-display">
                            <div class="cab-text-left">
                                <p>Mileage: <b>140 000 km</b></p>
                                <p>Volume capacity: <b>2.3L</b></p>
                                <p>Air Conditioning: <b>Yes</b></p>
                            </div>

                            <div class="cab-text-right">
                                <p><span class="fa fa-user"></span>&nbsp; 9</p>
                                <p><span class="fa fa-shopping-bag"></span>&nbsp; 3</p>
                                <p><span class="fa fa-window-maximize"></span>&nbsp; 4</p>
                            </div>
                        </div>
                        <a href="#" class="cab-btn">Book Now</a>
                    </div>
                </div>

                <div class="cab-block">
                    <div class="cab-img">
                        <img src="images/6.jpg" width="100%" height="150px" style="padding: 10px" alt="">
                    </div>
                    <hr>

                    <div class="cab-text">
                        <h3>Cci-Fiat 500</h3>
                        <div class="cab-text-display">
                            <div class="cab-text-left">
                                <p>Mileage: <b>140 000 km</b></p>
                                <p>Volume capacity: <b>2.3L</b></p>
                                <p>Air Conditioning: <b>Yes</b></p>
                            </div>

                            <div class="cab-text-right">
                                <p><span class="fa fa-user"></span>&nbsp; 9</p>
                                <p><span class="fa fa-shopping-bag"></span>&nbsp; 3</p>
                                <p><span class="fa fa-window-maximize"></span>&nbsp; 4</p>
                            </div>
                        </div>
                        <a href="#" class="cab-btn">Book Now</a>
                    </div>
                </div>

                <div class="cab-block">
                    <div class="cab-img">
                        <img src="images/7.jpg" width="100%" height="150px" style="padding: 10px" alt="">
                    </div>
                    <hr>

                    <div class="cab-text">
                        <h3>Cci-Fiat 500</h3>
                        <div class="cab-text-display">
                            <div class="cab-text-left">
                                <p>Mileage: <b>140 000 km</b></p>
                                <p>Volume capacity: <b>2.3L</b></p>
                                <p>Air Conditioning: <b>Yes</b></p>
                            </div>

                            <div class="cab-text-right">
                                <p><span class="fa fa-user"></span>&nbsp; 9</p>
                                <p><span class="fa fa-shopping-bag"></span>&nbsp; 3</p>
                                <p><span class="fa fa-window-maximize"></span>&nbsp; 4</p>
                            </div>
                        </div>
                        <a href="#" class="cab-btn">Book Now</a>
                    </div>
                </div>

                <div class="cab-block">
                    <div class="cab-img">
                        <img src="images/8.jpg" width="100%" height="150px" style="padding: 10px" alt="">
                    </div>
                    <hr>

                    <div class="cab-text">
                        <h3>Cci-Fiat 500</h3>
                        <div class="cab-text-display">
                            <div class="cab-text-left">
                                <p>Mileage: <b>140 000 km</b></p>
                                <p>Volume capacity: <b>2.3L</b></p>
                                <p>Air Conditioning: <b>Yes</b></p>
                            </div>

                            <div class="cab-text-right">
                                <p><span class="fa fa-user"></span>&nbsp; 9</p>
                                <p><span class="fa fa-shopping-bag"></span>&nbsp; 3</p>
                                <p><span class="fa fa-window-maximize"></span>&nbsp; 4</p>
                            </div>
                        </div>
                        <a href="#" class="cab-btn">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="quote">
        <h1 style="text-align: center">What our people are saying</h1>

        <div class="quote-display">
            <div class="quote-left">
                <img src="images/9.jpg" width="150px" height="150px"
                    style="border: 4px solid #e2ded7;border-radius: 50%" alt="">
            </div>

            <div class="quote-right">
                <span class="fa fa-quote-left" style="font-size: 35px;color: #FF9101;"></span>&nbsp;&nbsp;
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore fugit quisquam nemo tempore, ea
                        reprehenderit eveniet distinctio illo maxime sunt, atque adipisci eligendi praesentium deleniti
                        autem nostrum officia voluptatem eius.
                    </p>

                    <h3 style="color: #FF9101;margin: unset">John Smith Founder</h3>
                    <b>& CEO, Company Name</b>
                </div>
            </div>
        </div>
    </div>

    <div class="destination">
        <h1 style="text-align:center;">Top Destination Under Our Route</h1>

        <div class="destination-container">
            <div class="destination-block">
                <img src="images/10.jpg" height="100%" width="100%" alt="">
                <div class="destination-overlay">
                    Lorem ipsum dummy
                </div>
            </div>

            <div class="destination-block">
                <img src="images/10.jpg" height="100%" width="100%" alt="">
                <div class="destination-overlay">
                    Lorem ipsum dummy
                </div>
            </div>

            <div class="destination-block">
                <img src="images/10.jpg" height="100%" width="100%" alt="">
                <div class="destination-overlay">
                    Lorem ipsum dummy
                </div>
            </div>

            <div class="destination-block">
                <img src="images/10.jpg" height="100%" width="100%" alt="">
                <div class="destination-overlay">
                    Lorem ipsum dummy
                </div>
            </div>

            <div class="destination-block">
                <img src="images/10.jpg" height="100%" width="100%" alt="">
                <div class="destination-overlay">
                    Lorem ipsum dummy
                </div>
            </div>

            <div class="destination-block">
                <img src="images/10.jpg" height="100%" width="100%" alt="">
                <div class="destination-overlay">
                    Lorem ipsum dummy
                </div>
            </div>

            <div class="destination-block">
                <img src="images/10.jpg" height="100%" width="100%" alt="">
                <div class="destination-overlay">
                    Lorem ipsum dummy
                </div>
            </div>

            <div class="destination-block">
                <img src="images/10.jpg" height="100%" width="100%" alt="">
                <div class="destination-overlay">
                    Lorem ipsum dummy
                </div>
            </div>

            <div class="destination-block">
                <img src="images/10.jpg" height="100%" width="100%" alt="">
                <div class="destination-overlay">
                    Lorem ipsum dummy
                </div>
            </div>

            <div class="destination-block">
                <img src="images/10.jpg" height="100%" width="100%" alt="">
                <div class="destination-overlay">
                    Lorem ipsum dummy
                </div>
            </div>
        </div>
    </div>

    <div class="contact">
        <div class="contact-container">
            <div class="contact-left">
                <div class="contact-img">
                    <img src="images/9.jpg" style="border-radius: 50%;border: 2px solid #245354" width="150px"
                    height="150px" alt="">
                </div>

                <div class="contact-text">
                    <h1 style="margin: unset">Need help? Call us on</h1>
                    <p><span class="fa fa-phone-square" style="font-size: 25px"></span> +0 000 00000 00 from 24/7</p>
                    <p><span class="fa fa-envelope-o" style="font-size: 20px"></span> info@companyname.com</p>
                </div>
            </div>

            <div class="contact-right">
                <h1 style="margin:unset;padding-bottom: 20px">Find the best solution for you</h1>
                <a href="#" class="quote-btn">Request Quote</a>
            </div>
        </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';

    export default {
        name: 'Home',

        components: {
            Header,
            Footer
        }
    }
</script>

