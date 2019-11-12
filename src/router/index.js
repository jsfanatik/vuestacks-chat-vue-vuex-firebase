import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Chat from '@/components/Chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/chat',
    name: 'Chat',
    component: Chat,
    //accept props
    props: true,
    beforeEnter: (to,from,next) =>{
      if(to.params.name)
      {
        next()
      }
      else{
        next({name:'Welcome'})
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
//
// Vue.use(VueRouter)
//
// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   }
// ]
//
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
//
// export default router
