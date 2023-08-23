import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const Cart = () => import('../views/cart/Cart')

Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    name: 'Home',
    path: '/home',
    component: Home
  },
  {
    name: 'Profile',
    path: '/profile/:name',
    component: Profile
  },
  {
    name: 'Category',
    path: '/category',
    component: Category
  },
  {
    name: 'Cart',
    path: '/cart',
    component: Cart
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router