import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import NotFound from '../views/NotFound.vue'
import ProductAdd from '../views/ProductAdd.vue'
import ProductEdit from '../views/ProductEdit.vue'
import ProductDetail from '../views/ProductDetail.vue'
import TypeAdd from '../views/TypeAdd.vue'
import TypeDelete from '../views/TypeDelete.vue'

const routes = [
  {
    path: '/',
    name: 'defaultlayout',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
        children: [

        ],
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: Home,
        props: true
      },
      {
        path: "/admin/by-name/:name?",
        name: "adminByName",
        component: Home,
        props: true
      },
      {
        path: "/by-type/:typeid?",
        name: "byType",
        component: Home,
        props: true
      },
      {
        path: "/admin/by-type/:typeid?",
        name: "adminByType",
        component: Home,
        props: true
      },
      {
        path: "/admin/products/edit/:id",
        name: "product.edit",
        component: ProductEdit,
        props: true // Truyền các biến trong $route.params vào làm props
      },
      {
        path: "/admin/products/create",
        name: "productadd",
        component: ProductAdd,
        props: true // Truyền các biến trong $route.params vào làm props
      },
      {
        path: "/products/detail/:id",
        name: "productDetail",
        component: ProductDetail,
        props: true
      },
      {
        path: "/admin/products/detail/:id",
        name: "adminProductDetail",
        component: ProductDetail,
        props: true
      },   
      {
        path: "/admin/types/create",
        name: "typeadd",
        component: TypeAdd,
        props: true // Truyền các biến trong $route.params vào làm props
      },
      {
        path: "/admin/types/delete",
        name: "typedelete",
        component: TypeDelete,
        props: true // Truyền các biến trong $route.params vào làm props
      },
      {
        path: '/admin',
        name: 'adminhome',
        component: Home
      },

    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;