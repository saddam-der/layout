<template>
<div class="content-page">
    <div class="content">

        <!-- Start Content-->
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Product</a></li>
                                <li class="breadcrumb-item active">List Product</li>
                            </ol>
                        </div>
                        <h4 class="page-title">List Product</h4>
                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="overflow-auto">

                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Minimum</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Condition</th>
                                                <th scope="col">Method</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(product) in data" :key="product.id">
                                                <th scope="row">{{ product.id }}</th>
                                                <td>{{ product.name }}</td>
                                                <td><img :src="product.image" width="150px" alt=""></td>
                                                <td>{{ product.description }}</td>
                                                <td>{{ product.amount }}</td>
                                                <td>{{ product.quantity }}</td>
                                                <td>{{ product.minimum }}</td>
                                                <td>{{ product.category_id }}</td>
                                                <td>{{ product.condition }}</td>
                                                <td>{{ product.method }}</td>
                                                <td>{{ product.status_id }}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                            </div>
                            <!-- container -->

                        </div>
                        <!-- content -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

import {
    mapActions,
    mapMutations,
    mapState
} from 'vuex'

export default {
    data() {
        return {
            // options: [{
            //         value: null,
            //         text: 'Provinsi'
            //     },
            //     {
            //         value: 'Jakarta',
            //         text: 'Jakrta'
            //     },
            //     {
            //         value: 'Jawa Barat',
            //         text: 'Jawa Barat'
            //     }
            // ],
            // selectedkota1: "",
            data: [],
            perPage: 3,
            currentPage: 1,

        }
    },
    computed: {
        ...mapState(['nama', 'data']),

        rows() {
            return this.data.length
        },

        newTodo: {
            get() {
                return this.$store.state.newTodo;
            },
            set(value) {
                this.$store.commit('setNewTodo', value);
            }
        },
        selected: {
            get() {
                return this.$store.state.vocational1;
            },
            set(value3) {
                this.$store.commit('setNewTodo3', value3);
            }
        },
        inputGambar: {
            get() {
                return this.$store.state.gambar;
            },
            set(value4) {
                this.$store.commit('setNewTodo4', value4);
            }
        }
    },

    async mounted() {
        this.load()
    },
    methods: {
        // ...mapMutations(['addTodo'])
        ...mapActions(['addTodo']),
        ...mapMutations(['deleteTodo']),

        sendInfo(kota1) {
            this.selectedkota1 = kota1;
        },

        async load() {
            const response = await axios.get('https://api-galangbantuan.matamantra.com/product')
            this.data = response.data.data
        },

    }
}
</script>

<style>

</style>
