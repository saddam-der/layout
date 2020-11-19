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

                  <!-- <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
    
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">eCommerce</a></li>
    
                                    <li class="breadcrumb-item active">Product Edit</li> -->

                </ol>

              </div>

              <h4 class="page-title">Account Edit</h4>

            </div>

          </div>

        </div>

        <!-- end page title -->



        <form @submit.prevent="edit">

          <div class="row">

            <div class="col-lg-12">

              <div class="card-box ">

                <h2 class="text-uppercase bg-light p-2 mt-0 mb-0 text-center"> Edit Account</h2>

              </div>
            </div>


            <div class="col-lg-6">

              <div class="card-box ">

                <!-- <div class="form-group mb-3">

                                        <label for="product-category">Role_id<span class="text-danger">*</span></label>

                                        <b-form-select v-model="role_id" :options="options1" require></b-form-select>  

                                    </div> -->

                <div class="form-group mb-3">

                  <label for="product-name">Username<span class="text-danger">*</span></label>

                  <input type="text" id="product-name" class="form-control" placeholder="Username" v-model="username"
                    required>

                </div>

                <div class="form-group mb-3">

                  <label for="product-name">Email<span class="text-danger">*</span></label>

                  <input type="email" id="product-name" class="form-control" v-model="email"
                    placeholder="example@mail.com" required>

                </div>

                <div class="form-group mb-3">

                  <label for="product-name">Password<span class="text-danger">*</span></label>

                  <input type="password" id="product-name" class="form-control" v-model="password"
                    placeholder="Password" required>

                </div>

                <div class="form-group mb-3">

                  <label for="product-name">No KTP<span class="text-danger">*</span></label>

                  <input type="text" id="product-name" class="form-control" v-model="no_ktp" placeholder="No KTP"
                    required>

                </div>

                <div class="form-group mb-3">

                  <label for="product-name">Mobile Number<span class="text-danger">*</span></label>

                  <input type="text" id="product-name" class="form-control" v-model="mobile_no"
                    placeholder="Mobile Number" required>

                </div>

                <div class="form-group mb-3">

                  <label for="product-name">Address<span class="text-danger">*</span></label>

                  <textarea class="form-control" id="" cols="20" rows="5" v-model="address" required></textarea>

                </div>

                <div class="form-group mb-3">

                  <label for="product-category">Gender<span class="text-danger">*</span></label>

                  <b-form-select class="form-control" v-model="gender" :options="options" require></b-form-select>

                </div>

                <div class="form-group mb-3">

                  <label for="product-name">Birth of Date<span class="text-danger">*</span></label>

                  <!-- <datetime v-model = "date" > </datetime >  -->

                  <input v-model="birth_date" type="date" id="product-name" class="form-control"
                    placeholder="Birth of Date" step="1" required>

                </div>

                <div class="form-group mb-3">

                  <label for="product-name">Birth of Place<span class="text-danger">*</span></label>

                  <input v-model="birth_place" type="text" id="product-name" class="form-control"
                    placeholder="Birth of Place" required>

                </div>





              </div>

              <!-- end card-box -->

            </div>

            <!-- end col -->
            <div class="col-lg-6">

              <div class="card-box ">

                <div class="form-group mb-3">

                  <label for="product-name">Image_profile<span class="text-danger">*</span></label><br>

                  <b-form-file placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."
                    @change="uploadImage_profile" name="image1" id="image1" accept="image/*"></b-form-file>


                </div>

                <div class="form-group mb-3">

                  <label for="product-name">Image_cover<span class="text-danger">*</span></label><br>

                  <b-form-file placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."
                    @change="uploadImage_cover" name="image2" id="image2" accept="image/*"></b-form-file>

                </div>

              </div><!-- end card-box -->

              <div class="text-center mb-2">

                <button type="reset" class="btn w-sm btn-danger waves-effect waves-light mr-1" id="reset">Reset</button>

                <button type="submit" class="btn w-sm btn-success waves-effect waves-light" id="btn-save">Edit</button>

              </div>

            </div> <!-- end col -->

          </div>

          <!-- end row -->



          <div class="row">

            <div class="col-12">

              <div class="text-center mb-2">



              </div>

            </div>

            <!-- end col -->

          </div>

          <!-- end row -->



          <!-- file preview template -->

        </form>

      </div>

      <!-- container -->

    </div>

    <!-- content -->

  </div>
</template>

<script>
  import axios from 'axios'
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import {
    Datetime
  } from 'vue-datetime';
  import {
    mapActions,
    mapMutations,
    mapState
  } from 'vuex'
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
        options: [{
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
        birth_place: '',

        editor: ClassicEditor,
        datetime: Datetime,
        data: []
      }
    },

    created() {
      this.id = this.$route.params.id;
    },
    async mounted() {
      this.load()
    },
    methods: {
      async load() {
        await axios.get('https://api-galangbantuan.matamantra.com/user/' + this.id).then((response) => {
          this.data = response.data.data

          this.id = this.data.id,
          // this.role_id = this.data.role_id,
            this.username = this.data.username,
            this.email = this.data.email,
            this.image_profile = this.data.image_profile,
            this.image_cover = this.data.image_cover,
            this.password = this.data.password,
            this.no_ktp = this.data.no_ktp,
            this.mobile_no = this.data.mobile_no,
            this.gender = this.data.gender,
            this.address = this.data.address,
            this.birth_date = this.data.birth_date,
            this.birth_place = this.data.birth_place
        })
      },
      ...mapActions(['editUser']),
      edit(e) {
        e.preventDefault();
        let formdata = {
          id :this.id,
          username: this.username,
          email: this.email,
          image_profile: this.image_profile,
          image_cover: this.image_cover,
          password: this.password,
          no_ktp: this.no_ktp,
          mobile_no: this.mobile_no,
          gender: this.gender,
          address: this.address,
          birth_date: this.birth_date,
          birth_place: this.birth_place
        }
        this.editUser(formdata);
           this.$swal('Success', 'You successfully update this data', 'success'),            
            this.$router.push({ name: "account" });

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
          this.image_profile = resp.data.data.uploaded_file
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
          this.image_cover = resp.data.data.uploaded_file
        })
      }

    }

  }

</script>

<style>

</style>