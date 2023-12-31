<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acción</th>
                </tr>
            </thead>

            <tbody v-for="product in products" :key="product.id">
                <tr class="table-secondary">
                    <th scope="row">{{ product.id }}</th>
                    <td scope="row">{{ product.name }}</td>
                    <td scope="row">{{ product.description }}</td>
                    <td scope="row">{{ product.price }}</td>
                    <td scope="row"><router-link :to="{name: 'EditProduct', params:{id: product.id}}" class="btn btn-warning btn-sm">Editar</router-link></td>
                    <td scope="row"><button class="btn btn-danger btn-sm" @click.prevent="deleteProduct(product.id)">Eliminar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import axios from 'axios';

export default
    {
        name: 'ContactList',
        data() {
            return {
                products:Array,
            }
        }, 
        created() {
            this.getProducts();
        },
        methods: {
            async getProducts(){
                let url = 'http://127.0.0.1:8000/api/products';
                await axios.get(url).then(response => {
                    this.products = response.data.products;
                    console.log(this.products);
                }).catch(error => {
                    console.log(error);
                });
            },
            async deleteProduct(id){
                let url = `http://127.0.0.1:8000/api/delete_product/${id}`;
                await axios.delete(url).then(response => {
                    if (response.data.code == 200){
                        alert(response.data.message);
                        this.getProducts();
                    }
                }).catch(error => {
                    console.log(error);
                });
            }
        },
        mounted() {
            console.log('Lista Productos Componente');
            this.getProducts();
        }
    }

</script>
