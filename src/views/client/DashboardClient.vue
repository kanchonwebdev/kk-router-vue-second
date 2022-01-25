<template>
    <div>
        <Header/>

        <div class="profile">
            <div class="profile-left">
                <div class="profile-img">
                    <img src="images/6.jpg" width="100%" height="100%" alt="">
                </div>
            </div>

            <div class="profile-right">
                <h1 class="name-header">Kanchon Kumar Shill</h1>
                <div class="profile-block"><b>Age : </b> 28 Years</div>
                <div class="profile-block"><b>Occupation : </b> Web Developer</div>
                <div class="profile-block"><b>Travel Lover : </b> YES </div>
                <div class="profile-block"><b>Driving : </b> NO </div>
                <div class="profile-block"><b>Address : </b> Dhaka, Bangladesh</div>
                
                <br>
                <div class="primary-btn">Update Profile</div>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';

    export default {
        name: 'DashboardClient',

        components: {
            Header,
            Footer
        }
    }
</script>
