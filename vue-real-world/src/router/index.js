import { createRouter, createWebHistory } from 'vue-router'
import EventsView from '../views/EventsView.vue'
import AboutView from '../views/AboutView.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventDetail from '@/views/event/Detail.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import Todo from '@/views/Todo.vue'

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
      path: '/event/:id',
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
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit,
        },
      ]
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    }
  ]
})

export default router
