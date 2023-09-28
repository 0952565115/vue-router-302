import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoffeeShopDetail_1 from '../components/CoffeeShopDetail-1.vue';
import CoffeeShopDetail_2 from '../components/CoffeeShopDetail-2.vue';
import CoffeeShopDetail_3 from '../components/CoffeeShopDetail-3.vue';
import CoffeeShopDetail_4 from '../components/CoffeeShopDetail-4.vue';
import CoffeeShopDetail_5 from '../components/CoffeeShopDetail-5.vue';
import CoffeeShopDetail_6 from '../components/CoffeeShopDetail-6.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // เส้นทางสำหรับแสดงรายละเอียดของร้านกาแฟ
    {
      path: '/CoffeeShopDetail/1',
      name: 'CoffeeShopDetail_1',
      component: CoffeeShopDetail_1,
      props: true,
    },
    {
      path: '/CoffeeShopDetail/2',
      name: 'CoffeeShopDetail_2',
      component: CoffeeShopDetail_2,
      props: true,
    },
    {
      path: '/CoffeeShopDetail/3',
      name: 'CoffeeShopDetail_3',
      component: CoffeeShopDetail_3,
      props: true,
    },
    {
      path: '/CoffeeShopDetail/4',
      name: 'CoffeeShopDetail_4',
      component: CoffeeShopDetail_4,
      props: true,
    },
    {
      path: '/CoffeeShopDetail/5',
      name: 'CoffeeShopDetail_5',
      component: CoffeeShopDetail_5,
      props: true,
    },
    {
      path: '/CoffeeShopDetail/6',
      name: 'CoffeeShopDetail_6',
      component: CoffeeShopDetail_6,
      props: true,
    }
  ]
})

export default router
