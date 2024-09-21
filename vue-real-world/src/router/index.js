import { createRouter, createWebHistory } from 'vue-router'
import EventsView from '../views/EventsView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetailView from "@/views/EventDetailView.vue";
import Todo from '@/views/Todo.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'events',
      component: EventsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/event/:id',
      name: 'event',
      component: EventDetailView
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    }
  ]
})

export default router
