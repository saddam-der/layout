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
                                <li class="breadcrumb-item active">Add Product</li>
                            </ol>
                        </div>
                        <h4 class="page-title">Add / Edit Product</h4>
                    </div>
                </div>
            </div>
            <!-- end page title -->

            <form @submit="addProductI">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card-box">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>
                            <div class="form-group mb-3">
                                <label for="product-name">Product Name <span class="text-danger">*</span></label>
                                <input type="text" id="product-name" v-model="form.productName" class="form-control" placeholder="e.g : Pakaian">
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-description">Product Description <span class="text-danger">*</span></label>
                                <ckeditor :editor="editor" v-model="form.productDescription"></ckeditor>
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-category">Categories <span class="text-danger">*</span></label>
                                <select class="form-control select2" v-model="form.productCategory">
                                    <option v-for="category in listCategory" :key="category.id" v-bind:value="category.id">
                                        {{ category.name }}
                                    </option>
                                </select>
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-qty">Quantity <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" id="product-qty" v-model="form.productQty" placeholder="Enter Quantity">
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-minimum">Minimum <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" id="product-minimum" v-model="form.productMinimum" placeholder="Enter Minimum">
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-price">Amount <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" id="product-price" v-model="form.productAmount" placeholder="Enter amount">
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-condition">Condition <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="product-condition" v-model="form.productCondition" placeholder="Enter Condition">
                            </div>
                        </div> <!-- end card-box -->
                    </div> <!-- end col -->

                    <div class="col-lg-6">
                        <div class="card-box">
                            <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">Product Images</h5>
                            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>

                            <!-- Preview -->
                            <div class="dropzone-previews mt-3" id="file-previews"></div>

                            <div class="form-group mb-3">
                                <label for="product-method">Method <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="product-method" v-model="form.productMethod" placeholder="Enter Method">
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-image">Image <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="product-image" v-model="form.productImage" placeholder="Enter Method">
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <div class="text-center mb-3">
                                        <button type="reset" class="btn w-sm btn-danger waves-effect waves-light">Reset</button>
                                        <button type="button" @click="addProduct" class="btn w-sm btn-success waves-effect waves-light">Save</button>
                                    </div>
                                </div> <!-- end col -->
                            </div><!-- end row -->
                        </div> <!-- end card box-->
                    </div> <!-- end col-->
                </div><!-- end row -->
            </form>

        </div> <!-- container -->

    </div> <!-- content -->
</div>
</template>

<script>
import axios from 'axios'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import vue2Dropzone from 'vue2-dropzone'
import {
    mapActions
} from 'vuex'

export default {
    data() {
        return {
            form: {
            productName: "",
            productImage: "",
            productDescription: "",
            productAmount: "",
            productQty: "",
            productMinimum: "",
            productCategory: "",
            productCondition: "",
            productMethod: "",
            },

            // listCategory: [],

            editor: ClassicEditor,

            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 8192,
                headers: {
                    "My-Awesome-Header": "header value"
                }
            }
        }
    },
    computed: {
        listCategory() {
            return this.$store.state.category
        },
    },

    async mounted() {
        this.$store.dispatch('loadCategoryProduct');
    },

    methods: {
        ...mapActions(["addProduct"]),
        addProductI(e) {
            e.preventDefault();
            this.addProduct(this.form);
            this.$swal('Success', 'You successfully added this data', 'success');
            this.$router.push({ name: 'productList' });
        }
    },
    components: {
        vueDropzone: vue2Dropzone,
    }
}
</script>

<style>
@import 'vue2-dropzone/dist/vue2Dropzone.min.css';
</style>
