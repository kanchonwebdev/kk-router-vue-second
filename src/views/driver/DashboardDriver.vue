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
                <div class="profile-block"><b>Age</b>: 28 Years</div>
                <div class="profile-block"><b>Driving Experience</b>: 4+ Years</div>
                <div class="profile-block"><b>Average Speed</b>: 120 kmph </div>
                <div class="profile-block"><b>Address</b>: Dhaka, Bangladesh</div>
                <div class="profile-block"><b>Route</b>: Route One - Route Two/Route Two - Route One </div>
                

                <div class="profile-content">
                    <div class="profile-content-block" title="It Will Be Depend On How Quickly You Response Client's Request">
                        <h3>Response Rate</h3>
                        <span>100%</span>
                    </div>

                    <div class="profile-content-block" title="It Will Be Depend On Your Successfull Routing">
                        <h3>Success Rate</h3>
                        <span>100%</span>
                    </div>

                    <div class="profile-content-block" title="It Will Be Depend On Timely Join with in The Client's Area">
                        <h3>Punctuality</h3>
                        <span>100%</span>
                    </div>
                </div>

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
        name: 'DashboardDriver',

        components: {
            Header,
            Footer
        }
    }
</script>