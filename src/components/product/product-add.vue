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

            <div class="row">
                <div class="col-lg-6">
                    <div class="card-box">
                        <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                        <form action="">
                            <div class="form-group mb-3">
                                <label for="product-name">Product Name <span class="text-danger">*</span></label>
                                <input type="text" id="product-name" v-model="productName" class="form-control" placeholder="e.g : Apple iMac">
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-description">Product Description <span class="text-danger">*</span></label>
                                <ckeditor :editor="editor" v-model="productDescription"></ckeditor>
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-category">Categories <span class="text-danger">*</span></label>
                                <select class="form-control select2" v-model="productCategory">
                                    <option v-for="option in listCategory" :key="option.id" v-bind:value="option.id">
                                        {{ option.name }}
                                    </option>
                                </select>
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-qty">Quantity <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" id="product-qty" v-model="productQty" placeholder="Enter Quantity">
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-minimum">Minimum <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" id="product-minimum" v-model="productMinimum" placeholder="Enter Minimum">
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-price">Amount <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" id="product-price" v-model="productAmount" placeholder="Enter amount">
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-condition">Condition <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="product-condition" v-model="productCondition" placeholder="Enter Condition">
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-method">Method <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="product-method" v-model="productMethod" placeholder="Enter Method">
                            </div>

                            <div class="form-group mb-3">
                                <label for="product-image">Image <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="product-image" v-model="productImage" placeholder="Enter Method">
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <div class="text-center mb-3">
                                        <button type="reset" class="btn w-sm btn-danger waves-effect waves-light">Reset</button>
                                        <button type="button" @click="addProduct" class="btn w-sm btn-success waves-effect waves-light">Save</button>
                                    </div>
                                </div> <!-- end col -->
                            </div>
                            <!-- end row -->
                        </form>
                    </div> <!-- end card-box -->
                </div> <!-- end col -->

                <div class="col-lg-6">

                    <div class="card-box">
                        <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">Product Images</h5>

                        <form action="/" method="post" class="dropzone" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
                        </form>

                        <!-- Preview -->
                        <div class="dropzone-previews mt-3" id="file-previews"></div>

                    </div> <!-- end col-->

                </div> <!-- end col-->
            </div>
            <!-- end row -->

            <!-- file preview template -->
            <div class="d-none" id="uploadPreviewTemplate">
                <div class="card mt-1 mb-0 shadow-none border">
                    <div class="p-2">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
                            </div>
                            <div class="col pl-0">
                                <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                                <p class="mb-0" data-dz-size></p>
                            </div>
                            <div class="col-auto">
                                <!-- Button -->
                                <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
                                    <i class="dripicons-cross"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> <!-- container -->

    </div> <!-- content -->
</div>
</template>

<script>
import axios from 'axios'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import vue2Dropzone from 'vue2-dropzone'
// require('../../../../dist/libs/summernote/summernote-bs4.min.js')
// require('../../../../dist/libs/select2/js/select2.min.js');
// require('../../../../dist/libs/dropzone/min/dropzone.min.js');
// require('../../../../dist/js/pages/form-fileuploads.init.js');
// require('../../../../dist/js/pages/add-product.init.js');
export default {
    data() {
        return {
            productName: "",
            productImage: "",
            productDescription: "",
            productAmount: "",
            productQty: "",
            productMinimum: "",
            productCategory: "",
            productCondition: "",
            productMethod: "",

            listCategory: [],

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
    async mounted() {
        this.subCategory()
    },
    methods: {
        async subCategory() {
            const response = await axios.get('https://7de53b6c7594.ngrok.io/product/category')
            this.listCategory = response.data.data
        },
        addProduct() {
            this.$swal('Success', 'You successfully added this data', 'success');
            axios.post('https://7de53b6c7594.ngrok.io/product/action/add', {
                name: this.productName,
                image: '{\"img1\":\"' + this.productImage + '\"}',
                description: this.productDescription,
                amount: this.productAmount,
                qty: this.productQty,
                minimum: this.productMinimum,
                category: this.productCategory,
                condition: this.productCondition,
                method: this.productMethod,
            }).then(res => {
                this.productID = "",
                    this.productName = "",
                    this.productImage = "",
                    this.productDescription = "",
                    this.productAmount = "",
                    this.productQty = "",
                    this.productMinimum = "",
                    this.productCategory = "",
                    this.productCondition = "",
                    this.productMethod = ""
            }).catch(err => {
                // handle error
                console.log(err);
            })
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
