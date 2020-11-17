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
              <h4 class="page-title">Register / User</h4>
            </div>
          </div>
        </div>
        <!-- end page title -->

        <form @submit="add">
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <h2 class="text-uppercase bg-light p-2 mt-0 mb-3 text-center">
                  REGISTER
                </h2>
                <div class="form-group mb-3">
                  <label for="product-category"
                    >Role_id<span class="text-danger">*</span></label
                  >
                  <b-form-select
                    v-model="form.role_id"
                    :options="options1"
                    require
                  ></b-form-select>
                </div>
                <div class="form-group mb-3">
                  <label for="product-name"
                    >Username<span class="text-danger">*</span></label
                  >
                  <input
                    v-model="form.username"
                    type="text"
                    id="product-name"
                    class="form-control"
                    placeholder="Username"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="product-name"
                    >Email<span class="text-danger">*</span></label
                  >
                  <input
                    v-model="form.email"
                    type="email"
                    id="product-name"
                    class="form-control"
                    placeholder="example@mail.com"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="product-name"
                    >Password<span class="text-danger">*</span></label
                  >
                  <input
                    v-model="form.password"
                    type="password"
                    id="product-name"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="product-name"
                    >No KTP<span class="text-danger">*</span></label
                  >
                  <input
                    v-model="form.no_ktp"
                    type="text"
                    id="product-name"
                    class="form-control"
                    placeholder="No KTP"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="product-name"
                    >Mobile Number<span class="text-danger">*</span></label
                  >
                  <input
                    v-model="form.mobile_no"
                    type="text"
                    id="product-name"
                    class="form-control"
                    placeholder="Mobile Number"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="product-name"
                    >Address<span class="text-danger">*</span></label
                  >
                  <textarea
                    class="form-control"
                    id=""
                    cols="20"
                    rows="5"
                    v-model="form.address"
                    required
                  ></textarea>
                  <!-- <ckeditor :editor="editor"  v-model="form.address" class="form-control select2" cols="30"  rows="10" required ></ckeditor> -->
                  <!-- <textarea name="" id="" ></textarea> -->
                </div>
                <div class="form-group mb-3">
                  <label for="product-category"
                    >Gender<span class="text-danger">*</span></label
                  >
                  <b-form-select
                    v-model="form.gender"
                    :options="options2"
                    require
                  ></b-form-select>
                </div>
                <div class="form-group mb-3">
                  <label for="product-name"
                    >Birth of Date<span class="text-danger">*</span></label
                  >
                  <!-- <datetime v-model = "date" > </datetime >  -->
                  <input
                    v-model="form.birth_date"
                    type="date"
                    id="product-name"
                    class="form-control"
                    placeholder="Birth of Date"
                    step="1"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="product-name"
                    >Birth of Place<span class="text-danger">*</span></label
                  >
                  <input
                    v-model="form.birth_place"
                    type="text"
                    id="product-name"
                    class="form-control"
                    placeholder="Birth of Place"
                    required
                  />
                </div>
              </div>
              <!-- end card-box -->
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->

          <div class="row">
            <div class="col-12">
              <div class="text-center mb-2">
                <button
                  type="submit"
                  class="btn w-sm btn-success waves-effect waves-light"
                  id="btn-save"
                >
                  Submit
                </button>
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
import axios from "axios";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      options1: [
        {
          value: "1",
          text: "Admin",
        },
        {
          value: "2",
          text: "Relawan",
        },
        {
          value: "3",
          text: "Lembaga",
        },
        {
          value: "4",
          text: "Vendor",
        },
      ],
      options2: [
        {
          value: "L",
          text: "Laki-laki ",
        },
        {
          value: "P",
          text: "Perempuan",
        },
      ],

      form: {
        role_id: 0,
        username: "",
        image_profile: "",
        image_cover: "",
        email: "",
        password: "",
        no_ktp: "",
        mobile_no: "",
        gender: "",
        address: "",
        birth_date: "",
        birth_place: "",
      },
      editor: ClassicEditor,
      //   datetime: Datetime,
    };
  },

  methods: {
    ...mapActions(["register"]),
    add(e) {
      e.preventDefault();
      this.register(this.form);
      this.$swal("Success", "You successfully update this data", "success"),
        (this.form.role_id = 0),
        (this.form.username = ""),
        (this.form.email = ""),
        (this.form.password = ""),
        (this.form.no_ktp = ""),
        (this.form.mobile_no = ""),
        (this.form.address = ""),
        (this.form.gender = "0"),
        (this.form.birth_date = ""),
        (this.form.birth_place = "");
    },
  },
};
</script>

<style></style>
