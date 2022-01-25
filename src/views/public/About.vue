<template>
  <div>
    <Header/>

    <div class="booking booking-bg">
        <div class="booking-container">
            <div class="booking-field">
                <div class="booking-text">
                    <h1 style="text-align: center">Welcome To KK Routing System</h1>
                    <br>

                    <h4 style="text-align: center;line-height: 35px;word-spacing: 3px">We will provide our best Service.We hope you will enjoy our service. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis qui ipsa obcaecati, et aut consequuntur quam. A placeat ad aut facilis nemo nostrum, dolore harum unde ut odio in qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur, ad, provident facere velit repellendus saepe et maxime quod commodi perferendis corporis? Natus quidem iusto architecto voluptatibus eaque impedit incidunt?</h4>
                    <br>
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

    <Footer/>
  </div>
</template>

<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';

    export default {
        name: 'About',

        components: {
            Header,
            Footer
        }
    }
</script>

