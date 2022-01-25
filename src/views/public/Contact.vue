<template>
  <div>
    <Header/>

    <div class="destination">
        <h1 style="text-align:center;">Contact Us</h1>

        <form class="destination-container">
            <input type="email" name="" placeholder="Enter Your Email.." id="" class="booking-field-bg">
            
            <select name="" id="" class="booking-field-bg">
                <option value="none">-- Select Subject --</option>
            </select>

            <textarea name="" id="" cols="30" rows="10" class="booking-field-bg"></textarea>

            <div class="booking-field-bg-btn">Submit</div>
        </form>
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
        name: 'Car',

        components: {
            Header,
            Footer
        }
    }
</script>

