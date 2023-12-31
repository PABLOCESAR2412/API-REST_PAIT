<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1 class="mt-4">Agregar Producto</h1>
                <hr />

                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <u class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{ error }}
                        </li>
                    </u>
                </div>

                <form @submit.prevent="saveProduct" novalidate>
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label mt-4">Nombre:</label>
                            <input type="text" class="form-control" placeholder="Ingrese el nombre del producto"
                                v-model="product.name">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Descripcion:</label>
                            <input type="text" class="form-control" placeholder="Ingrese la descripcion del producto"
                                v-model="product.description">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Precio:</label>
                            <input type="text" class="form-control" placeholder="Ingrese el precio del producto"
                                v-model="product.price">
                        </div>

                        <button class="btn btn-primary mt-4">Agregar</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'AddContact',
    data() {
        return {
            product: {},
            name: '',
            description: '',
            price: '',
            errors: [],
        };
    },
    methods: {
        async saveProduct() {
            this.errors = [];

            // Validación
            if (!this.product.name) {
                this.errors.push("Porfavor ingrese nombre del producto");
            }
            if (!this.product.description) {
                this.errors.push("Porfavor ingrese la descripcion del producto");
            }
            if (!this.product.price) {
                this.errors.push("Porfavor ingrese el precio del producto");
            }

            // Si no hay errores, enviar el producto a la API
            if (!this.errors.length) {
                let formData = new FormData();
                formData.append('name', this.product.name);
                formData.append('description', this.product.description);
                formData.append('price', this.product.price);

                let url = "http://127.0.0.1:8000/api/save_product"
                await axios.post(url, formData).then((response) => {
                    console.log(response);
                    if (response.status == 200) {
                        this.product.name = '';
                        this.product.description = '';
                        this.product.price = '';
                        alert(response.data.this.message);
                    } else {
                        console.log('error');
                    }
                }).catch(error => {
                    this.errors.push(error.message);
                });
            }
        },
    },
};
</script>
