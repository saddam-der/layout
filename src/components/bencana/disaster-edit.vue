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
                                <li class="breadcrumb-item active">Disaster Edit</li>
                            </ol>
                        </div>
                        <h4 class="page-title">Disaster Edit</h4>
                    </div>
                </div>
            </div>
            <!-- end page title -->
            <form @submit.prevent="">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card-box">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">GENERAL</h5>
                            <input type="hidden">
                            <div class="form-group mb-3">
                                <label for="bencana-name">Name<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-bind:value="data.name" required>
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Category<span class="text-danger">*</span></label>
                                <v-select label="name" :options="categorya">
                                    <template #search="{attributes, events}">
                                        <input class="vs__search" :required="!form.category_id" v-bind="attributes" v-on="events" />
                                    </template>
                                </v-select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="bencana-province">Province<span class="text-danger">*</span></label>
                                <v-select label="name" :options="provincea">
                                    <template #search="{attributes, events}">
                                        <input class="vs__search" :required="!form.province_id" v-bind="attributes" v-on="events" />
                                    </template>
                                </v-select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="bencana-city">City<span class="text-danger">*</span></label>
                                <v-select label="name" :options="citya">
                                    <template #search="{attributes, events}">
                                        <input class="vs__search" :required="!form.city_id" v-bind="attributes" v-on="events" />
                                    </template>
                                </v-select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="bencana-Subdistrict">Subdistrict<span class="text-danger">*</span></label>
                                <v-select label="name" :options="subdistricta">
                                    <template #search="{attributes, events}">
                                        <input class="vs__search" :required="!form.sub_district_id" v-bind="attributes" v-on="events" />
                                    </template>
                                </v-select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Story<span class="text-danger">*</span></label>
                                <ckeditor :editor="editor" v-bind:value="data.story"></ckeditor>
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Description<span class="text-danger">*</span></label>
                                <textarea class="form-control" v-bind:value="data.description" cols="30" rows="5" required></textarea>
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Address<span class="text-danger">*</span></label>
                                <textarea class="form-control" v-bind:value="data.address" cols="30" rows="5"> </textarea>
                            </div>
                        </div> <!-- end card-box -->
                    </div> <!-- end col -->
                    <div class="col-lg-6">
                        <div class="card-box">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">IMAGE</h5>
                            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
                            <img :src="data.image" alt="" width="270px" class="pt-3">
                        </div>
                        <div class="card-box">
                            <div class="form-group mb-3">
                                <label for="product-name">Noted<span class="text-danger">*</span></label>
                                <input type="text" v-bind:value="data.notes" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <input type="hidden" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Injured<span class="text-danger">*</span></label>
                                <input type="number" v-bind:value="data.injured" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Died<span class="text-danger">*</span></label>
                                <input type="number" v-bind:value="data.died" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Mobile No<span class="text-danger">*</span></label>
                                <input type="number" v-bind:value="data.mobile_no" class="form-control">
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
            data: [],
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 200,
                addRemoveLinks: true,
                dictDefaultMessage: "UPLOAD IMAGE"
            },
            form: {
                category_id: '',
                province_id: '',
                city_id: '',
                sub_district_id: '',
            },

        }
    },
    async mounted() {
        this.load()
        this.category()
        this.province()
        this.city()
        this.subdistrict()
    },
    created() {
        this.id = this.$route.params.id;
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
        async load() {
            const response = await axios.get('https://c2fc1e3ef947.ngrok.io/disaster/' + this.id)
            this.data = response.data.data
        },
        // async load() {
        //     await axios.get('https://api-galangbantuan.matamantra.com/disaster/' + this.id).then((response) => {
        //         // this.data = response.data.data
        //         for (var i = 0; i < response.data.data.length; i += 1) {
        //             response.data.data[i].notes = JSON.parse(response.data.data[i].notes)
        //             this.data.push(response.data.data[i])
        //         }
        //     })
        // },
        update() {
            axios.put('https://api-galangbantuan.matamantra.com/disaster/' + this.id + '/action/update', {
                    name: this.formEdit.nameEdit,
                    category_id: this.formEdit.category_idEdit,
                    description: this.formEdit.descriptionEdit,
                    story: this.formEdit.storyEdit,
                    province_id: this.formEdit.province_idEdit,
                    city_id: this.formEdit.city_idEdit,
                    sub_district_id: this.formEdit.sub_district_idEdit,
                    address: this.formEdit.addressEdit,
                    notes: this.formEdit.notesEdit,
                    mobile_no: this.formEdit.mobile_noEdit,
                    injured: this.formEdit.injuredEdit,
                    died: this.formEdit.diedEdit,
                })
                .then(res => {
                    // handle success
                    this.load()
                })
        },
    },
    components: {
        vueDropzone: vue2Dropzone
    },
}
</script>

<style>
@import 'vue2-dropzone/dist/vue2Dropzone.min.css';
</style>
