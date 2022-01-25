<template>
    <div>
        <div class="main">
            <div class="main-container">
                <div class="main-left">
                    <span class="fa fa-phone"></span> +00 123 456 789
                </div>

                <div class="main-right">
                    <a href="#">Help</a>
                    <a href="#">Referral Program</a>
                    <a href="#">Loyacity</a>
                    <select name="#" id="">
                        <option value="#">BDT</option>
                        <option value="#">USD</option>
                        <option value="#">CAD</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="logo">
            <div class="logo-left">
                <h1>LOGO HERE</h1>
            </div>

            <div class="logo-right">
                <div class="nav">
                    <div class="nav-top">
                        <h3 style="text-align: right">Personal Balance 3000 BDT</h3>
                        <a href="/login" class="login-btn">Login</a> <a href="/register" class="register-btn">Register</a>
                        Welcome Mr. KK <a href="#" class="login-btn">Logout</a>
                    </div>

                    <div class="nav-bottom" id="nav">
                        <router-link to="/">Home</router-link>
                        <router-link to="/about">About</router-link>
                        <router-link to="/car">Car</router-link>
                        <router-link to="/review">Review</router-link>
                        <router-link to="/contact">Contact</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>