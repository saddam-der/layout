<template>
<div class="content-page">
    <div class="content">

        <!-- Start Content-->
        <div class="container-fluid">

            <div class="overflow-auto">

                <p class="mt-3">Current Page: {{ currentPage }}</p>

                <b-table id="my-table" :items="daftarProduct" :per-page="perPage" :current-page="currentPage">
                    <template #cell(show_details)="row">
                        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                            {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
                        </b-button>
                    </template>
                </b-table>

                <b-pagination pills style="float:right" v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
            </div>

        </div> <!-- container -->

    </div> <!-- content -->

</div>
</template>

<script>
import '../../../../dist/libs/bootstrap-table/bootstrap-table.min.js'
import '../../../../dist/js/pages/bootstrap-tables.init.js'
import {
    mapGetters,
    mapActions
} from "vuex"
import {
    v1
} from "uuid";

export default {
    data() {
        return {
            perPage: 3,
            currentPage: 1,
        }
    },
    methods: {

    },
    computed: {
        ...mapGetters([
            'daftarProduct',
        ]),
        rows() {
            return this.daftarProduct.length
        },
    }
};
</script>

<style>

</style>
