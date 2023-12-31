import { createRouter, createWebHistory } from 'vue-router';

import ContactList from '../components/ContactList.vue';

import AppContact from "../components/AddContact.vue";
//import AppContact from "../components/AddContact.vue";

import EditProduct from '../components/EditProduct.vue';


const routes = [
    {
        name: "ProductList",
        path: "/productlist",
        component: ContactList
    },
    {
        name: "AppContact",
        path: "/addcontact",
        component: AppContact
    },
    {
        name: "EditProduct",
        path: "/product/edit/:id?",
        component: EditProduct
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;