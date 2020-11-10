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
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Tables</a></li>
                                <li class="breadcrumb-item active">Bootstrap</li>
                            </ol>
                        </div>
                        <h4 class="page-title">Table Product</h4>
                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col-lg-12">
                    <div class="card-box">
                        <h4 class="header-title">List Product</h4>
                        <p class="sub-header font-13">
                            Data product
                        </p>

                        <div class="table-responsive">
                            <table class="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody v-for="(product, nomor) in daftarProduct" :key="product.id">
                                    <tr>
                                        <th scope="row">{{ nomor+1 }}</th>
                                        <td> {{ product.name }} </td>
                                        <td> {{ product.image }} </td>
                                        <td> {{ product.description }} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> <!-- end table-responsive-->

                    </div> <!-- end card-box -->
                </div> <!-- end col -->
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
        return {}
    },
    methods: {

    },
    computed: {
        ...mapGetters([
            'daftarProduct',
        ]),
    }
};
</script>

<style>

</style>
