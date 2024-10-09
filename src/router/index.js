import { createMemoryHistory, createRouter,createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
const routes = [
  {
   path:'/',
   name:'home',
   component:()=>{
    return import('../views/Home.vue')
   }
  }, 
  {
    path:'/about',
    name:'about',
    component:()=>{
      return import('../views/About.vue');
    }
   }, 
   {
    path:'/contact',
    name:'contact',
    component:()=>{
      return import('../views/Contact.vue')
    },
    alias: '/get-in-touch' 
   },
   {
    path: '/home',
    redirect: '/' 
  },
  {
    path:'/search',
    name:'search',
    component:()=>{
      return import('../views/Search.vue')
    }
  },
  {
    path:'/:pathMatch(.*)*',
    name:'notfound',
    component:()=>{
      return import('../views/NotFound.vue')
    }
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:()=>{
      return import('../views/DashBoard.vue')
    }
  },
  {
    path:'/login',
    name:'login',
    component:()=>{
      return import('../views/Login.vue')
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
    children:[
      {
        path: 'users',
        name: 'users',
        component: () => import('../views/Users.vue'),
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('../views/Settings.vue'),
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('../views/Products.vue'),
      },
    ]
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('../views/ListPost.vue'),
  },
  {
    path: '/posts/:id',
    name: 'postDetail',
    component: () => import('../views/PostDetail.vue'),
  },
  {
    path: '/post-not-found',
    name: 'postNotFound',
    component: () => import('../views/PostNotFound.vue'),
  },
  {
    path:'/setting2',
    name:"setting2",
    component:()=>{
      return import('../views/Setting.vue')
    }
  },
  {
    path: '/products',
    name: 'listProduct',
    component: () => import('../views/ListProduct.vue'),
  },
  {
    path: '/products/:id',
    name: 'productDetail',
    component: () => import('../views/ProductDetail.vue'),
  },
  {
    path:'/b10',
    name:'B10',
    component:()=>import('../views/B10.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to,from,next)=>{
  const isLogin=true;
  if(to.path==='/dashboard' && isLogin){
      next("/login")
  }else{
      next();
  }
})
router.afterEach((to) => {
  localStorage.setItem('lastVisitedURL', to.fullPath)
})
scrollBehavior:((to,from,savedPosition)=>{
  if(savedPosition){
    return savedPosition;
  }
  if (to.name === 'postDetail') {
    return { top: window.innerHeight / 2, behavior: 'smooth' };
  }
  if (to.name === 'postNotFound') {
    return { top: 0, behavior: 'smooth' };
  }
  return { top: 0 };
})