<template>
  <div>
    <Header/>

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

    <Footer/>
  </div>
</template>

<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';

    export default {
        name: 'Review',

        components: {
            Header,
            Footer
        }
    }
</script>

