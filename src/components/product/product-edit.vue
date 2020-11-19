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

            <form @submit.prevent="edit">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card-box">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>
                                <div class="form-group mb-3">
                                    <label for="product-name">Product Name <span class="text-danger">*</span></label>
                                    <input type="text" id="product-name" v-model="name" class="form-control" placeholder="e.g : Apple iMac">
                                </div>

                                <div class="form-group mb-3">
                                    <label for="product-description">Product Description <span class="text-danger">*</span></label>
                                    <ckeditor :editor="editor" v-model="description"></ckeditor>
                                </div>

                                <div class="form-group mb-3">
                                    <label for="product-category">Categories <span class="text-danger">*</span></label>
                                    <v-select label="name" :options="listCategory" :reduce="listCategory => listCategory.id" v-model="category"></v-select>
                                </div>

                                <div class="form-group mb-3">
                                    <label for="product-qty">Quantity <span class="text-danger">*</span></label>
                                    <input type="number" class="form-control" id="product-qty" v-model="qty" placeholder="Enter Quantity">
                                </div>

                                <div class="form-group mb-3">
                                    <label for="product-minimum">Minimum <span class="text-danger">*</span></label>
                                    <input type="number" class="form-control" id="product-minimum" v-model="minimum" placeholder="Enter Minimum">
                                </div>

                                <div class="form-group mb-3">
                                    <label for="product-price">Amount <span class="text-danger">*</span></label>
                                    <input type="number" class="form-control" id="product-price" v-model="amount" placeholder="Enter amount">
                                </div>

                                <div class="form-group mb-3">
                                    <label for="product-condition">Condition <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="product-condition" v-model="condition" placeholder="Enter Condition">
                                </div>
                        </div><!-- end card-box -->
                    </div> <!-- end col -->

                    <div class="col-lg-6">
                        <div class="card-box">
                            <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">Product Images</h5>
                            <div class="form-group mb-3">
                                    <label for="product-image">Image <span class="text-danger">*</span></label>
                                    <br>
                                    <b-form-file placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." @change="uploadImage1" name="image1" id="image1" accept="image/*" ></b-form-file>
                                    <b-form-file placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." @change="uploadImage2" name="image2" id="image2" accept="image/*" ></b-form-file>
                                    <b-form-file placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." @change="uploadImage3" name="image3" id="image3" accept="image/*" ></b-form-file>
                                    <b-form-file placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." @change="uploadImage4" name="image4" id="image4" accept="image/*" ></b-form-file>
                                </div>

                            <!-- Preview -->
                            <div class="dropzone-previews mt-3" id="file-previews"></div>

                                <div class="form-group mb-3">
                                    <label for="product-method">Method <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="product-method" v-model="method" placeholder="Enter Method">
                                </div>
                        </div> <!-- end card box-->
                        <div class="row">
                                    <div class="col-12">
                                        <div class="text-center mb-3">
                                            <button type="reset" class="btn w-sm btn-danger waves-effect waves-light">Reset</button>
                                            <button type="submit" class="btn w-sm btn-success waves-effect waves-light">Save</button>
                                        </div>
                                    </div> <!-- end col -->
                                </div><!-- end row -->
                    </div> <!-- end col-->
                </div>
                <!-- end row -->
            </form>

        </div> <!-- container -->

    </div> <!-- content -->
</div>
</template>

<script>
import axios from 'axios'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import vue2Dropzone from 'vue2-dropzone'
import { mapActions } from "vuex";

export default {
    data() {
        return {
            name: "",
            image1: "",
            image2: "",
            image3: "",
            image4: "",
            description: "",
            amount: "",
            qty: "",
            minimum: "",
            category: "",
            condition: "",
            method: "",
            user_id: "",
            

            editor: ClassicEditor,

            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 8192,
                maxFiles: 4,
                addRemoveLinks: true,
                headers: {
                    "My-Awesome-Header": "header value"
                }
            },
            data: []
        }
    },

    computed: {
        listCategory() {
            return this.$store.state.category
        }
    },

    async mounted() {
        this.$store.dispatch('loadCategoryProduct');
        this.load();
    },
    created() {
        this.id = this.$route.params.id;
    },
    methods: {
        async load() {
            await axios.get('https://api-galangbantuan.matamantra.com/product/' + this.id).then((response) => {
                this.data = response.data.data;
                    // console.log(this.data)
                    this.name= this.data[0].name,
                    this.description= this.data[0].description,
                    this.amount= this.data[0].amount,
                    this.qty= this.data[0].qty,
                    this.minimum= this.data[0].minimum,
                    this.category= this.data[0].category,
                    this.condition= this.data[0].condition,
                    this.method= this.data[0].method,
                    this.user_id= this.data[0].user_id
            })
        },
        ...mapActions(["editProduct"]),
        edit() {
            let formdata = {
                id: this.id,
                name: this.name,
                image: '{\"img1\":\"' + this.image1 + '\",\"img2\":\"' + this.image2 + '\",\"img3\":\"' + this.image3 + '\",\"img4\":\"' + this.image4 + '\"}',
                description: this.description,
                amount: this.amount,
                qty: this.qty,
                minimum: this.minimum,
                category_id: this.category,
                condition: this.condition,
                method: this.method,
                user_id: this.user_id
            }
            this.editProduct(formdata);
            this.$swal('Success', 'You successfully update this data', 'success')

        },
        uploadImage1 (e) {
            let file = e.target.files[0]
            const bodyForm = new FormData()
            bodyForm.append('file', file)
            
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2FnZSI6ImFwcF9hY2Nlc3MiLCJpYXQiOjE1NzM0ODIwODksInN1YiI6MX0.WE3Pm7PYHsQgvYJ4R_laZXp21n_uYG8p3Kplev3qYMKi0vBO_rvl-ZleA6htApoVDmBEAIU-oq_a0_sztXVUqw'
            }

            axios.post('https://api.matamantra.com/story/file/upload', bodyForm,  { headers: headers, }).then(resp => {
                this.image1 = resp.data.data.uploaded_file
            })
        },
        uploadImage2 (e) {
            let file = e.target.files[0]
            const bodyForm = new FormData()
            bodyForm.append('file', file)
            
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2FnZSI6ImFwcF9hY2Nlc3MiLCJpYXQiOjE1NzM0ODIwODksInN1YiI6MX0.WE3Pm7PYHsQgvYJ4R_laZXp21n_uYG8p3Kplev3qYMKi0vBO_rvl-ZleA6htApoVDmBEAIU-oq_a0_sztXVUqw'
            }

            axios.post('https://api.matamantra.com/story/file/upload', bodyForm,  { headers: headers, }).then(resp => {
                this.image2 = resp.data.data.uploaded_file
            })
        },
        uploadImage3 (e) {
            let file = e.target.files[0]
            const bodyForm = new FormData()
            bodyForm.append('file', file)
            
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2FnZSI6ImFwcF9hY2Nlc3MiLCJpYXQiOjE1NzM0ODIwODksInN1YiI6MX0.WE3Pm7PYHsQgvYJ4R_laZXp21n_uYG8p3Kplev3qYMKi0vBO_rvl-ZleA6htApoVDmBEAIU-oq_a0_sztXVUqw'
            }

            axios.post('https://api.matamantra.com/story/file/upload', bodyForm,  { headers: headers, }).then(resp => {
                this.image3 = resp.data.data.uploaded_file
            })
        },
        uploadImage4 (e) {
            let file = e.target.files[0]
            const bodyForm = new FormData()
            bodyForm.append('file', file)
            
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2FnZSI6ImFwcF9hY2Nlc3MiLCJpYXQiOjE1NzM0ODIwODksInN1YiI6MX0.WE3Pm7PYHsQgvYJ4R_laZXp21n_uYG8p3Kplev3qYMKi0vBO_rvl-ZleA6htApoVDmBEAIU-oq_a0_sztXVUqw'
            }

            axios.post('https://api.matamantra.com/story/file/upload', bodyForm,  { headers: headers, }).then(resp => {
                this.image4 = resp.data.data.uploaded_file
            })
        },
    },
    components: {
        vueDropzone: vue2Dropzone,
    }
}
</script>

<style>
@import '../../assets/libs/select2/css/select2.min.css';
@import '../../assets/libs/summernote/summernote-bs4.min.css';
@import '../../assets/libs/dropzone/min/dropzone.min.css';
@import 'vue2-dropzone/dist/vue2Dropzone.min.css';
</style>