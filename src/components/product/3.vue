<template>
<div class="content-page">
    <div class="content">

        <!-- Start Content-->
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <h4 class="page-title">Users</h4>
                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="overflow-auto">

                <p class="mt-3">Current Page: {{ currentPage }}</p>

                <b-table id="my-table" :items="data" :per-page="perPage" :current-page="currentPage"> </b-table>

                <b-pagination pills style="float:right" v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
            </div>

        </div>
        <!-- container -->

    </div>
    <!-- content -->
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
            options: [{
                    value: null,
                    text: 'Provinsi'
                },
                {
                    value: 'Jakarta',
                    text: 'Jakrta'
                },
                {
                    value: 'Jawa Barat',
                    text: 'Jawa Barat'
                }
            ],
            selectedkota1: "",
            data: [],
            perPage: 5,
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
            const response = await axios.get('https://api-galangbantuan.matamantra.com/disaster/category')
            this.data = response.data.data
        },

    }
}
</script>

<style>

</style>
