<template>
  <div id="Register">
    <div class="destination">
        <h1 style="text-align:center;">Register Form</h1>

        <form class="destination-container">
            <select name="" id="" class="booking-field-bg" @change="checkReg" v-model="driverData.role">
                <option value="none" selected>-- Choose Right Option --</option>
                <option value="client">Register as A Client</option>
                <option value="driver">Register as A Driver</option>
            </select>
            
            <div style="width: 100%" v-if="driverReg">
                <input type="email" name="" placeholder="Email" id="" v-model="driverData.email" class="booking-field-bg">
                
                <input type="text" name="" placeholder="National ID" v-model="driverData.nId" id="" class="booking-field-bg">
                
                <input type="text" name="" placeholder="Driving Licence ID" v-model="driverData.driverId" id="" class="booking-field-bg">
                            
                <select name="" id="" class="booking-field-bg" v-model="driverData.dRouteStart">
                    <option value="none">-- Choose Starting Routing --</option><option value="1">Route One</option>
                    <option value="2">Route Two</option>
                    <option value="3">Route Three</option>
                    <option value="4">Route Four</option>
                    <option value="5">Route Five</option>
                </select>
                        
                <select name="" id="" class="booking-field-bg" v-model="driverData.dRouteEnd">
                    <option value="none">-- Choose Ending Routing --</option>
                    <option value="1">Route One</option>
                    <option value="2">Route Two</option>
                    <option value="3">Route Three</option>
                    <option value="4">Route Four</option>
                    <option value="5">Route Five</option>
                </select>
                
                <input type="text" name="" placeholder="Driving Experience" id="" v-model="driverData.dExperience" class="booking-field-bg">
                
                <input type="text" name="" placeholder="Average Speed" v-model="driverData.avgSpeed" id="" class="booking-field-bg">  
                    
                <div class="booking-field-bg-btn" @click="driverDataReg">Register Now</div>
            </div>

            <div style="width: 100%" v-if="clientReg"> 
                <input type="email" name="" placeholder="Email" id="" v-model="clientData.email" class="booking-field-bg">

                <select name="" v-model="clientData.occupation" id="" class="booking-field-bg">
                    <option value="none">-- Choose Your Occupation --</option>
                    <option value="student">Student</option>
                    <option value="govt-employee">Govt Employee</option>
                    <option value="employee">Employee</option>
                </select>

                <div style="width: 100%;padding: 20px 0px">
                    <input type="checkbox" name="" v-model="clientData.driving" id="driving"> <label for="driving">Are you know Driving?</label>
                </div>
                
                <section style="width: 100%;padding: 20px 0px">
                    <input type="checkbox" name="" v-model="clientData.travel" id="travel"> <label for="travel">Do you like Traveling?</label>
                </section>
                    
                <div class="booking-field-bg-btn" @click="clientDataReg">Register Now</div>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Register',

        data: function(){
            return{
                clientReg: false,
                driverReg: false,
                errMsg: '',
                sucMsg: '',
                driverData: {
                    email: '',
                    nId: '',
                    driverId: '',
                    dRouteStart: 'none',
                    dRouteEnd: 'none',
                    dExperience: '',
                    avgSpeed: '',
                    role: 'none'
                },
                clientData: {
                    email: '',
                    occupation: 'none',
                    driving: 'false',
                    travel: 'false',
                }
                
            }
        },

        methods: {
            checkReg: function(){
                if (this.driverData.role == 'driver') {
                    this.driverReg = true,
                    this.clientReg = false
                }

                if (this.driverData.role == "client") {
                    this.clientReg = true,
                    this.driverReg = false
                }

                if (this.driverData.role == "none") {
                    this.clientReg = false,
                    this.driverReg = false
                }

                
            },

            driverDataReg: function(){
                axios.post('http://localhost:8080/query.php?crud=create', this.driverData)
                    .then(function (response) {
                        if (response.data.error) {
                            console.log(this.errorMessage = response.data.message);
                        }else {
                            console.log(this.members = response.data.members);
                        }
                    });
                },

            clientDataReg: function(){
                console.log(this.clientData);
            }
        },

        mounted () {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                    .then(response => (console.log(response)
                ))
        }

    }
</script>

