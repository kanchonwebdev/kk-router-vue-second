import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/public/Home.vue";
import About from "../views/public/About.vue";
import Car from "../views/public/Car.vue";
import Review from "../views/public/Review.vue";
import Contact from "../views/public/Contact.vue";
import Register from "../views/public/Register.vue";
import Login from "../views/public/Login.vue";
import BookingHistoryClient from "../views/client/BookingHistoryClient.vue";
import CurrentRouteClient from "../views/client/CurrentRouteClient.vue";
import DashboardClient from "../views/client/DashboardClient.vue";
import DashboardDriver from "../views/driver/DashboardDriver.vue";
import DriverBooking from "../views/driver/DriverBooking.vue";
import DriverBookingNew from "../views/driver/DriverBookingNew.vue";
import RouteReqeust from "../views/driver/RouteRequest.vue";
import AdminDashboard from "../views/dashboard/AdminDaahboard.vue";
import DriverAccountRequestNew from "../views/dashboard/DriverAccountRequestNew.vue";
import DriverAccountDetailsNew from "../views/dashboard/DriverAccountDetailsNew.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/car",
    name: "Car",
    component: Car,
  },
  {
    path: "/review",
    name: "Review",
    component: Review,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/bookinghistoryclient",
    name: "BookingHistoryClient",
    component: BookingHistoryClient,
  },
  {
    path: "/currentrouteclient",
    name: "CurrentRouteClient",
    component: CurrentRouteClient,
  },
  {
    path: "/dahsboardclient",
    name: "DashboardClient",
    component: DashboardClient,
  },
  {
    path: "/dahsboarddriver",
    name: "DashboardDriver",
    component: DashboardDriver,
  },
  {
    path: "/driverbooking",
    name: "DriverBooking",
    component: DriverBooking,
  },
  {
    path: "/driverbookingnew",
    name: "DriverBookingNew",
    component: DriverBookingNew,
  },
  {
    path: "/routerequest",
    name: "RouteReqest",
    component: RouteReqeust,
  },
  {
    path: "/admindashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
  },
  {
    path: "/driveraccountrequestnew",
    name: "DriverAccountRequestNew",
    component: DriverAccountRequestNew,
  },
  {
    path: "/driveraccountdetailsnew",
    name: "DriverAccountDetailsNew",
    component: DriverAccountDetailsNew,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;