<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1 class="mt-4">Editar Producto</h1>
                <hr />

                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <u class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{ error }}
                        </li>
                    </u>
                </div>

                <form>
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

                        <button class="btn btn-primary mt-4">Guardar</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'EditProduct',
    data() {
        return {
            product: {},
            errors: [],
        };
    },
    created() {
        this.getProductById();
    },
    methods: {
        
        async getProductById() {
            let url = `http://127.0.0.1:8000/api/get_product/${this.$route.params.id}`;
            await axios.get(url).then(response =>{
                console.log(response);
                this.product = response.data;
            });
        }
    },
    mounted: function(){
        console.log('Componente Editar');
    }
};
</script>
