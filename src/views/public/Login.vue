<template>
  <div>
    <div class="destination">
        <h1 style="text-align:center;">Login Form</h1>

        <form class="destination-container">
            <input type="email" name="" placeholder="Email" id="" class="booking-field-bg">
            <input type="password" name="" placeholder="Password" class="booking-field-bg" id="">
            <div class="booking-field-bg-btn">Login</div>
        </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Login',

        data: function(){
            return{
                clientReg: false,
                driverReg: false,
                role: ''
            }
        },

        methods: {
            
        },

    }
</script>

