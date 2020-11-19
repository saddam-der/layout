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
                </ol>
              </div>
              <h4 class="page-title">Register / User</h4>
            </div>
          </div>
        </div>
        <!-- end page title -->


        <form @submit="add">
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box ">
                <h2 class="text-uppercase bg-light p-2 mt-0 mb-0 text-center">REGISTER</h2>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card-box ">              
                <div class="form-group mb-3">
                  <label for="product-name">Username<span class="text-danger">*</span></label>
                  <input v-model="form.username" type="text" id="product-name" class="form-control"
                    placeholder="Username" required>
                </div>
                <div class="form-group mb-3">
                  <label for="product-name">Email<span class="text-danger">*</span></label>
                  <input v-model="form.email" type="email" id="product-name" class="form-control"
                    placeholder="you@example.com" required>
                </div>
                <div class="form-group mb-3">
                  <label for="product-name">Password<span class="text-danger">*</span></label>
                  <input v-model="form.password" type="password" id="product-name" class="form-control"
                    placeholder="Password" required>
                </div>
                <div class="form-group mb-3">
                  <label for="product-name">No KTP<span class="text-danger">*</span></label>
                  <input v-model="form.no_ktp" type="text" id="product-name" class="form-control" placeholder="No KTP"
                    required>
                </div>
                <div class="form-group mb-3">
                  <label for="product-name">Mobile Number<span class="text-danger">*</span></label>
                  <input v-model="form.mobile_no" type="text" id="product-name" class="form-control"
                    placeholder="Mobile Number" required>
                </div>
                <div class="form-group mb-3">
                  <label for="product-name">Address<span class="text-danger">*</span></label>
                  <textarea class="form-control" id="" cols="20" rows="5" v-model="form.address" required></textarea>
                  <!-- <ckeditor :editor="editor"  v-model="form.address" class="form-control select2" cols="30"  rows="10" required ></ckeditor> -->
                  <!-- <textarea name="" id="" ></textarea> -->
                </div>
                <div class="form-group mb-3">
                  <label for="product-category">Gender<span class="text-danger">*</span></label>
                  <b-form-select class="form-control" v-model="form.gender" :options="options2" require></b-form-select>
                </div>
                <div class="form-group mb-3">
                  <label for="product-name">Birth of Date<span class="text-danger">*</span></label>
                  <!-- <datetime v-model = "date" > </datetime >  -->
                  <input v-model="form.birth_date" type="date" id="product-name" class="form-control"
                    placeholder="Birth of Date" step="1" required>
                </div>
                <div class="form-group mb-3">
                  <label for="product-name">Birth of Place<span class="text-danger">*</span></label>
                  <input v-model="form.birth_place" type="text" id="product-name" class="form-control"
                    placeholder="Birth of Place" required>
                </div>

              </div> <!-- end card-box -->
            </div> <!-- end col -->
            <div class="col-lg-6">
              <div class="card-box ">

                <div class="form-group mb-3">

                  <label for="product-name">Image_profile<span class="text-danger">*</span></label><br>

                  <b-form-file placeholder="Choose a file or drop it here..." class="form-control"
                    drop-placeholder="Drop file here..." @change="uploadImage_profile" name="image1" id="image1"
                    accept="image/*" ></b-form-file>

                  <!-- <input type="file" > -->

                </div>

                <div class="form-group mb-3">

                  <label for="product-name">Image_cover<span class="text-danger">*</span></label><br>

                  <b-form-file placeholder="Choose a file or drop it here..." class="form-control"
                    drop-placeholder="Drop file here..." @change="uploadImage_cover" name="image2" id="image2"
                    accept="image/*"></b-form-file>

                  <!-- <input type="file"  > -->

                </div>

              </div> <!-- end card-box -->

                  <div class="text-center mb-2">
                     <button type="reset" class="btn w-sm btn-danger waves-effect waves-light" >Reset</button>
                     <button type="submit" class="btn w-sm btn-success waves-effect waves-light" id="btn-save">Submit</button>
                  </div>

            </div> <!-- end col -->
          </div><!-- end row -->           

          <!-- file preview template -->
        </form>

      </div> <!-- container -->

    </div> <!-- content -->
  </div>
</template>

<script>
  import axios from 'axios'
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import {
    Datetime
  } from 'vue-datetime';
  import {
    mapActions
  } from 'vuex';
  export default {
    data() {
      return {
        options1: [{
            value: '1',
            text: 'Admin'
          },
          {
            value: '2',
            text: 'Relawan'
          },
          {
            value: '3',
            text: 'Lembaga'
          },
          {
            value: '4',
            text: 'Vendor'
          },
        ],
        options2: [{
            value: '',
            text: 'chosee'
          },
          {
            value: 'L',
            text: 'Laki-laki '
          },
          {
            value: 'P',
            text: 'Perempuan'
          },
        ],

        form: {
          // role_id:0,
          username: '',
          email: '',
          image_profile: '',
          image_cover: '',
          mobile_no: '',
          password: '',
          no_ktp: '',
          address: '',
          gender: '',
          birth_date: '',
          birth_place: ''
        },
        editor: ClassicEditor,
        datetime: Datetime
      }
    },

    methods: {
      ...mapActions(['register']),

      add(e) {
        e.preventDefault();
        this.register(this.form)

        this.$swal('Success', 'You successfully update this data', 'success'),
          // this.form.role_id= 0,
          this.form.username = '',
          this.form.email = '',
          this.form.image_profile = '',
          this.form.image_cover = '',
          this.form.mobile_no = '',
          this.form.password = '',
          this.form.no_ktp = '',
          this.form.address = '',
          this.form.gender = '0',
          this.form.birth_date = '',
          this.form.birth_place = ''

      },
      uploadImage_profile(e) {
        let file = e.target.files[0]
        const bodyForm = new FormData()
        bodyForm.append('file', file)

        const headers = {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2FnZSI6ImFwcF9hY2Nlc3MiLCJpYXQiOjE1NzM0ODIwODksInN1YiI6MX0.WE3Pm7PYHsQgvYJ4R_laZXp21n_uYG8p3Kplev3qYMKi0vBO_rvl-ZleA6htApoVDmBEAIU-oq_a0_sztXVUqw'
        }

        axios.post('https://api.matamantra.com/story/file/upload', bodyForm, {
          headers: headers,
        }).then(resp => {
          this.form.image_profile = resp.data.data.uploaded_file
        })
      },
      uploadImage_cover(f) {
        let file = f.target.files[0]
        const bodyForm = new FormData()
        bodyForm.append('file', file)

        const headers = {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2FnZSI6ImFwcF9hY2Nlc3MiLCJpYXQiOjE1NzM0ODIwODksInN1YiI6MX0.WE3Pm7PYHsQgvYJ4R_laZXp21n_uYG8p3Kplev3qYMKi0vBO_rvl-ZleA6htApoVDmBEAIU-oq_a0_sztXVUqw'
        }

        axios.post('https://api.matamantra.com/story/file/upload', bodyForm, {
          headers: headers,
        }).then(resp => {
          this.form.image_cover = resp.data.data.uploaded_file
        })
      }
    }

  }

</script>

<style>

</style>