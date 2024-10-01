import { inject } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


import EventsView from '../views/EventsView.vue'
import AboutView from '../views/AboutView.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventDetail from '@/views/event/Detail.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import Todo from '@/views/Todo.vue'
import FormView from '@/views/FormView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'events',
      component: EventsView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutView
    },
    {
      path: '/about',
      redirect: {name: 'about'}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: "/dynamic-form",
      name: 'dynamic-form',
      component: FormView
    },
    // if we wan't to redirect from event to events 
    {
      path: '/events/:id',
      name: 'event-layout',
      component: EventLayout,
      props: true,
      children: [
        {
          path: "",
          name: 'event-detail',
          component: EventDetail
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister,
          meta: {requireAuth: true}
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit,
        },
      ]
    },
    {
      // using  path: '/event/:id', will not include the child routes
      // so for that we need to use /event/:afterEvent(.*) to catch 
      // all the nested routes and we also need to use the to parameter
      // to make sure we are sending all the necessary parameters
      path: '/event/:afterEvent(.*)',
      redirect: to => {
        return  {path: '/events/' + to.params.afterEvent }
      }
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    },
    {
      // catchAll is alias function in order to catch all
      // the routes that are not defined in the router 
      // file. Previously it was '*' now it's like this 
      path: "/:catchAll(.*)",
      component: NotFound
    },
    {
      path:'/network-error',
      name: 'NetworkError',
      component: NetworkError
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {top: 0}
    }
  }
})


router.beforeEach((to, from) => {
  const gStore = inject('gStore')
  const notAuth = true

  if(to.meta.requireAuth && notAuth){
      gStore.flashMessage = "You need to be authorized"
      setTimeout(() => {
        gStore.flashMessage = ''
      }, 3000)
      
      // if the user tries to navigate directly from url
      // we need to check the from.href to see 
      // if it is filled
      // if so

      if(from.href) {
        return false
      }else{
        return {path: '/'}
      }
  }
})

export default router
