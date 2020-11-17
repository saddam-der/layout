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
                  <li class="breadcrumb-item">
                    <a href="javascript: void(0);">UBold</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="javascript: void(0);">Product</a>
                  </li>
                  <li class="breadcrumb-item active">Add Product</li>
                </ol>
              </div>
              <h4 class="page-title">Add / Edit Product</h4>
            </div>
          </div>
        </div>
        <!-- end page title -->

        <form action="">
          <div class="row">
            <div class="col-lg-6">
              <div class="card-box">
                <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>
                <div class="form-group mb-3">
                  <label for="product-name"
                    >Product Name <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    id="product-name"
                    v-model="productName"
                    class="form-control"
                    placeholder="e.g : Apple iMac"
                  />
                </div>

                <div class="form-group mb-3">
                  <label for="product-description"
                    >Product Description
                    <span class="text-danger">*</span></label
                  >
                  <ckeditor
                    :editor="editor"
                    v-model="productDescription"
                  ></ckeditor>
                </div>

                <div class="form-group mb-3">
                  <label for="product-category"
                    >Categories <span class="text-danger">*</span></label
                  >
                  <v-select
                    label="name"
                    :options="listCategory"
                    v-model="productCategory.name"
                  ></v-select>
                </div>

                <div class="form-group mb-3">
                  <label for="product-qty"
                    >Quantity <span class="text-danger">*</span></label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="product-qty"
                    v-model="productQty"
                    placeholder="Enter Quantity"
                  />
                </div>

                <div class="form-group mb-3">
                  <label for="product-minimum"
                    >Minimum <span class="text-danger">*</span></label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="product-minimum"
                    v-model="productMinimum"
                    placeholder="Enter Minimum"
                  />
                </div>

                <div class="form-group mb-3">
                  <label for="product-price"
                    >Amount <span class="text-danger">*</span></label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="product-price"
                    v-model="productAmount"
                    placeholder="Enter amount"
                  />
                </div>

                <div class="form-group mb-3">
                  <label for="product-condition"
                    >Condition <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="product-condition"
                    v-model="productCondition"
                    placeholder="Enter Condition"
                  />
                </div>
              </div>
              <!-- end card-box -->
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="card-box">
                <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">
                  Product Images
                </h5>
                <vue-dropzone
                  ref="myVueDropzone"
                  id="dropzone"
                  :options="dropzoneOptions"
                ></vue-dropzone>

                <!-- Preview -->
                <div class="dropzone-previews mt-3" id="file-previews"></div>

                <div class="form-group mb-3">
                  <label for="product-method"
                    >Method <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="product-method"
                    v-model="productMethod"
                    placeholder="Enter Method"
                  />
                </div>

                <div class="form-group mb-3">
                  <label for="product-image"
                    >Image <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="product-image"
                    v-model="productImage"
                    placeholder="Enter Method"
                  />
                  <img :src="productImage" alt="" width="140px" />
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="text-center mb-3">
                      <button
                        type="reset"
                        class="btn w-sm btn-danger waves-effect waves-light"
                      >
                        Reset
                      </button>
                      <button
                        type="button"
                        class="btn w-sm btn-success waves-effect waves-light"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->
              </div>
              <!-- end card box-->
            </div>
            <!-- end col-->
          </div>
          <!-- end row -->
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
import vue2Dropzone from "vue2-dropzone";

export default {
  data() {
    return {
      id: 0,
      productName: "",
      productImage: "",
      productDescription: "",
      productAmount: "",
      productQty: "",
      productMinimum: "",
      productCategory: "",
      productCondition: "",
      productMethod: "",
      data: [],

      editor: ClassicEditor,

      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 8192,
        maxFiles: 4,
        addRemoveLinks: true,
        headers: {
          "My-Awesome-Header": "header value",
        },
      },
    };
  },

  computed: {
    listCategory() {
      return this.$store.state.category;
    },
  },

  async mounted() {
    this.$store.dispatch("loadCategory");
    this.load();
  },
  created() {
    this.id = this.$route.params.id;
  },
  methods: {
    async load() {
      await axios
        .get("https://c2fc1e3ef947.ngrok.io/product/" + this.id)
        .then((response) => {
          this.data = response.data.data;
          (this.productName = this.data.name),
            (this.productImage = this.data.image),
            (this.productDescription = this.data.description),
            (this.productAmount = this.data.amount),
            (this.productQty = this.data.qty),
            (this.productMinimum = this.data.minimum),
            (this.productCategory = this.data.category),
            (this.productCondition = this.data.condition),
            (this.productMethod = this.data.method);
        });
    },
    edit() {
      let formdata = {
        productName: this.productName,
        productImage: this.productImage,
        productDescription: this.productDescription,
        productAmount: this.productAmount,
        productQty: this.productQty,
        productMinimum: this.productMinimum,
        productCategory: this.productCategory,
        productCondition: this.productCondition,
        productMethod: this.productMethod,
      };

      axios
        .put(
          "https://c2fc1e3ef947.ngrok.io/product/" + this.id + "/action/update",
          formdata
        )
        .then((res) => {
          this.$swal("Success", "You successfully update this data", "success"),
            this.$router.push({ name: "account" });
        });
    },
  },
  components: {
    vueDropzone: vue2Dropzone,
  },
};
</script>

<style>
@import "../../assets/libs/select2/css/select2.min.css";
@import "../../assets/libs/summernote/summernote-bs4.min.css";
@import "../../assets/libs/dropzone/min/dropzone.min.css";
@import "vue2-dropzone/dist/vue2Dropzone.min.css";
</style>
