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
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Bencana</a></li>
                                <li class="breadcrumb-item active">Disaster Add</li>
                            </ol>
                        </div>
                        <h4 class="page-title">Disaster / Entri</h4>
                    </div>
                </div>
            </div>
            <!-- end page title -->
            <form @submit.prevent="add">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card-box">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">GENERAL</h5>
                            <input type="hidden" v-model="form.id">

                            <div class="form-group mb-3">
                                <label for="bencana-name">Name<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="form.name" required>
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Category<span class="text-danger">*</span></label>
                                <select class="form-control" v-model="form.category_id">
                                    <option v-for="option in categorya" :key="option.id" v-bind:value="option.id">
                                        {{ option.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="bencana-province">Province<span class="text-danger">*</span></label>
                                <select class="form-control" v-model="form.province_id">
                                    <option v-for="option in provincea" :key="option.id" v-bind:value="option.id">
                                        {{ option.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="bencana-city">City<span class="text-danger">*</span></label>
                                <select class="form-control" v-model="form.city_id">
                                    <option v-for="option in citya" :key="option.id" v-bind:value="option.id">
                                        {{ option.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="bencana-Subdistrict">Subdistrict<span class="text-danger">*</span></label>
                                <select class="form-control" v-model="form.sub_district_id">
                                    <option v-for="option in subdistricta" :key="option.id" v-bind:value="option.id">
                                        {{ option.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Story<span class="text-danger">*</span></label>
                                <ckeditor :editor="editor" v-model="form.story"></ckeditor>
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Description<span class="text-danger">*</span></label>
                                <textarea class="form-control" cols="30" rows="5" v-model="form.description" required></textarea>
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Address<span class="text-danger">*</span></label>
                                <textarea class="form-control" cols="30" rows="5" v-model="form.address"></textarea>
                            </div>
                        </div> <!-- end card-box -->
                    </div> <!-- end col -->
                    <div class="col-lg-6">
                        <div class="card-box">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">IMAGE</h5>
                            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
                        </div>
                        <div class="card-box">
                            <div class="form-group mb-3">
                                <label for="product-name">Noted<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="form.notes">
                            </div>
                            <div class="form-group mb-3">
                                <input type="hidden" class="form-control" v-model="form.status">
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Injured<span class="text-danger">*</span></label>
                                <input type="number" class="form-control" v-model="form.injured">
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Died<span class="text-danger">*</span></label>
                                <input type="number" class="form-control" v-model="form.died">
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Mobile No<span class="text-danger">*</span></label>
                                <input type="number" class="form-control" v-model="form.mobile_no">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="text-center mb-3">
                                    <button type="submit" class="btn w-sm btn-success waves-effect waves-light">Save</button>
                                </div>
                            </div> <!-- end col -->
                        </div>
                    </div>
                </div>
            </form>
            <!-- end row -->

            <!-- end row -->
        </div> <!-- container -->
    </div> <!-- content -->
</div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import vue2Dropzone from 'vue2-dropzone'
import axios from 'axios'
export default {
    data() {
        return {
            editor: ClassicEditor,
            myValue: '',
            categorya: [],
            provincea: [],
            citya: [],
            subdistricta: [],
            form: {
                id: '',
                name: '',
                category_id: '',
                description: '',
                story: '',
                lat: -6.292849,
                lng: 106.793207,
                province_id: '',
                city_id: '',
                sub_district_id: '',
                address: '',
                notes: '',
                image: '',
                mobile_no: '',
                status: true,
                injured: '',
                died: '',
                last_desc: 'test',
                time: "2020/10/10 00:00:00"
            },
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 200,
                addRemoveLinks: true,
                dictDefaultMessage: "UPLOAD IMAGE"
            },
        }
    },
    mounted() {
        this.category()
        this.province()
        this.city()
        this.subdistrict()
    },
    methods: {
        async category() {
            const response = await axios.get('https://api-galangbantuan.matamantra.com/disaster/category')
            this.categorya = response.data.data
        },
        async province() {
            const response = await axios.get('https://api-galangbantuan.matamantra.com/province')
            this.provincea = response.data.data
        },
        async city() {
            const response = await axios.get('https://api-galangbantuan.matamantra.com/city')
            this.citya = response.data.data
        },
        async subdistrict() {
            const response = await axios.get('https://api-galangbantuan.matamantra.com/subdistrict')
            this.subdistricta = response.data.data
        },
        // add() {
        //     axios.post('https://api-galangbantuan.matamantra.com/disaster/action/add', this.form).then(res => {
        //         this.form.name = ''
        //     })
        // },
    },
    components: {
        vueDropzone: vue2Dropzone
    },
}
</script>

<style>
@import 'vue2-dropzone/dist/vue2Dropzone.min.css';
</style>
