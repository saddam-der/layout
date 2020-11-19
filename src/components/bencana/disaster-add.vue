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
            <form @submit="onSubmit">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card-box">
                            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">GENERAL</h5>
                            <GmapMap
                                            :center="cordinates"
                                            :zoom="zooms"
                                            style="width: 100%; height: 500px; margin-bottom: 10px;"
                                            @click="mark"
                                        >
                                            <GmapMarker
                                                :position="{
                                                    lat: Number(lats),
                                                    lng: Number(longs)
                                                }"
                                                
                                            />
                                        </GmapMap>
                            <div class="form-group mb-3">
                                <label for="bencana-name">Name<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="form.name" required>
                            </div>
                            <div class="form-group mb-3">
                                <label for="product-name">Category<span class="text-danger">*</span></label>
                                <v-select label="name" :options="category" v-model="form.category_id" :key="category.id" :reduce="category => category.id">
                                </v-select>
                                
                            </div>
                            <div class="form-group mb-3">
                                <label for="bencana-province">Province<span class="text-danger">*</span></label>
                                <v-select label="name" :options="provincea" v-model="form.province_id" :key="provincea.id" :reduce="provincea => provincea.id">
                                </v-select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="bencana-city">City<span class="text-danger">*</span></label>
                                <v-select label="name" :options="citya" v-model="form.city_id" :key="citya.id" :reduce="citya => citya.id">
                                </v-select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="bencana-Subdistrict">Subdistrict<span class="text-danger">*</span></label>
                                <v-select label="name" :options="subdistricta" v-model="form.sub_district_id" :key="subdistricta.id" :reduce="subdistricta => subdistricta.id">
                                </v-select>                                
                            </div>
                            <div class="form-group mb-3">
                                <label for="bencana-District">District<span class="text-danger">*</span></label>
                                <v-select label="name" :options="subdistricta" v-model="form.sub_district_id" :key="subdistricta.id" :reduce="subdistricta => subdistricta.id">
                                </v-select>                                
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
                            <input type="file" @change="uploadImage" name="image" id="image"  accept="image/*" >
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
import {
    mapActions
} from "vuex";
import axios from 'axios'
export default {
    data() {
        return {
            myDate : new Date().toISOString().slice(0,10),
            editor: ClassicEditor,
            myValue: '',
            provincea: [],
            imagePath: '',
            citya: [],
            subdistricta: [],
            form: {
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
                time: '2020/10/10 00:00:00',
                verified: 'APPROVED',
                user_id: 1,
            },
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 200,
                addRemoveLinks: true,
                dictDefaultMessage: "UPLOAD IMAGE"
            },
            cordinates: {
                lat: -0.555614,
                lng: 119.560281
            },
            zooms: 0,
            lats: 0,
            longs: 0
            
        }
    },

    computed: {
        category() {
            return this.$store.state.category;
        }
    },

    async mounted() {
        this.$store.dispatch('loadCategory');
        this.province()
        this.city()
        this.subdistrict()
    },
    methods: {
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
        ...mapActions(["addData"]),
        onSubmit(e) {
            e.preventDefault();
            
            this.addData(this.form);
            this.$swal("Success", "You successfully Add this data", "success");
                this.form.name = '';
                this.form.category_id = '';
                this.form.description = '';
                this.form.story = '';
                this.form.lat = -6.292849;
                this.form.lng = 106.793207;
                this.form.province_id = '';
                this.form.city_id = '';
                this.form.sub_district_id = '';
                this.form.address = '';
                this.form.notes = '';
                this.form.image = '';
                this.form.mobile_no = '';
                this.form.status = true;
                this.form.injured = '';
                this.form.died = '';
                this.form.last_desc = 'test';
                this.form.time = '';
                this.form.verified = 'APPROVED';
                this.form.user_id = 1;
        },

        uploadImage (e) {
            let file = e.target.files[0]
            const bodyForm = new FormData()
            bodyForm.append('file', file)
            
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2FnZSI6ImFwcF9hY2Nlc3MiLCJpYXQiOjE1NzM0ODIwODksInN1YiI6MX0.WE3Pm7PYHsQgvYJ4R_laZXp21n_uYG8p3Kplev3qYMKi0vBO_rvl-ZleA6htApoVDmBEAIU-oq_a0_sztXVUqw'
            }

            axios.post('https://api.matamantra.com/story/file/upload', bodyForm,  { headers: headers, }).then(resp => {
                this.form.image = resp.data.data.uploaded_file
            })
        },
        getNow: function() {
            const today = new Date();
            const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date +' '+ time;
            this.form.time = dateTime;
        },
        mark(event) {
            this.lats = event.latLng.lat()
            this.longs = event.latLng.lng()
        },
    },
    components: {
        vueDropzone: vue2Dropzone
    },
    created() {
        setInterval(this.getNow, 5);
    },
}
</script>

<style>
@import 'vue2-dropzone/dist/vue2Dropzone.min.css';
</style>
