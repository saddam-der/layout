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
            <form @submit.prevent="edit">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card-box">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">GENERAL</h5>
                            <input type="hidden">
                            <div class="form-group mb-3">
                                <label for="bencana-name">Name<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="name" required>
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Category<span class="text-danger">*</span></label>
                                <v-select label="name" :options="categorya"  :reduce="categorya => categorya.id" v-model="category_id">
                                </v-select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="bencana-province">Province<span class="text-danger">*</span></label>
                                <v-select label="name" :options="provincea" v-model="province_id" :reduce="provincea => provincea.id">
                                </v-select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="bencana-city">City<span class="text-danger">*</span></label>
                                <v-select label="name" :options="citya" v-model="city_id" :reduce="citya => citya.id">
                                </v-select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="bencana-Subdistrict">Subdistrict<span class="text-danger">*</span></label>
                                <v-select label="name" :options="subdistricta" v-model="sub_district_id" :reduce="subdistricta => subdistricta.id">
                                </v-select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Story<span class="text-danger">*</span></label>
                                <ckeditor :editor="editor" v-model="story"></ckeditor>
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Description<span class="text-danger">*</span></label>
                                <textarea class="form-control" v-model="description" cols="30" rows="5" required></textarea>
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Address<span class="text-danger">*</span></label>
                                <textarea class="form-control" v-model="address" cols="30" rows="5"> </textarea>
                            </div>
                        </div> <!-- end card-box -->
                    </div> <!-- end col -->
                    <div class="col-lg-6">
                        <div class="card-box">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">IMAGE</h5>
                            <input type="file" @change="uploadImage1" name="image" id="image"  accept="image/*" >
                        </div>
                        <div class="card-box">
                            <div class="form-group mb-3">
                                <label for="product-name">Noted<span class="text-danger">*</span></label>
                                <input type="text" v-model="notes" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <input type="hidden" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Injured<span class="text-danger">*</span></label>
                                <input type="number" v-model="injured" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Died<span class="text-danger">*</span></label>
                                <input type="number" v-model="died" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Mobile No<span class="text-danger">*</span></label>
                                <input type="number" v-model="mobile_no" class="form-control">
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
import { mapActions } from 'vuex';
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
            time: '',
            verified: 'APPROVED',
            user_id: 1,

            timetime: ''

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
        setInterval(this.getNow, 5);
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
            const response = await axios.get('https://api-galangbantuan.matamantra.com/disaster/' + this.id)
            this.data = response.data.data
            this.name = this.data.name
            this.category_id = this.data.category_id
            this.description = this.data.description
            this.story = this.data.story
            this.lat = this.data.lat
            this.lng = this.data.lng
            this.province_id = this.data.province_id
            this.city_id = this.data.city_id
            this.sub_district_id = this.data.sub_district_id
            this.address = this.data.address
            this.notes = this.data.notes
            this.image = this.data.image
            this.mobile_no = this.data.mobile_no
            this.status = this.data.status
            this.injured = this.data.injured
            this.died = this.data.died
            this.last_desc = this.data.last_desc
            this.time = this.data.time
            this.verified = this.data.verified
            this.user_id = this.data.user_id
        },
        
        // ...mapActions(["updateData"]),
        edit() {
            let formdata = {
                id: this.id,
                name: this.name,
                category_id: this.category_id,
                description: this.description,
                story: this.story,
                lat: -6.292849,
                lng: 106.793207,
                province_id: this.province_id,
                city_id: this.city_id,
                sub_district_id: this.sub_district_id,
                address: this.address,
                notes: this.notes,
                image: this.image,
                mobile_no: this.mobile_no,
                status: this.status,
                injured: this.injured,
                died: this.died,
                last_desc: 'test',
                time: this.timetime,
                // verified: 'APPROVED',
                // user_id: 1,
            }
            this.updateData(formdata);
            this.$swal('Success', 'You successfully update this data', 'success')
            this.$router.push({ name: "disasterList" });
            // axios.put('https://api-galangbantuan.matamantra.com/disaster/'+ this.id +'/action/update', formdata).then(res => {
            //     this.$swal('Success', 'You successfully update this data', 'success')
            // })
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
                this.image = resp.data.data.uploaded_file
            })
        },
        getNow: function() {
            const today = new Date();
            const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date +' '+ time;
            this.timetime = dateTime;
        }
        
    },
    components: {
        vueDropzone: vue2Dropzone
    },
}
</script>

<style>
@import 'vue2-dropzone/dist/vue2Dropzone.min.css';
</style>
