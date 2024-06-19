import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProject from "@/views/AddProject.vue";
import EditProject from "@/views/EditProject.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create.project',
    component: AddProject
  },
  {
    path: '/projects/:id/edit',
    name: 'edit.project',
    component: EditProject,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
