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
                  <li class="breadcrumb-item active">List Product</li>
                </ol>
              </div>
              <h4 class="page-title">List Product</h4>
            </div>
          </div>
        </div>
        <!-- end page title -->

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="overflow-auto">
                    <vue-good-table
                      :columns="columns"
                      :rows="data"
                      :search-options="{ enabled: true }"
                      :pagination-options="{
                        enabled: true,
                        perPage: 3,
                        perPageDropdown: [3, 5, 10, 20],
                        mode: 'records',
                        dropdownAllowAll: false,
                        nextLabel: 'next',
                        prevLabel: 'prev',
                        rowsPerPageLabel: 'Rows per page',
                        ofLabel: 'of',
                        pageLabel: 'page', // for 'pages' mode
                        allLabel: 'All',
                      }"
                    >
                      <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field == 'image'">
                          <img
                            :src="props.row.image.img1"
                            alt=""
                            width="140px"
                          />
                          <img
                            :src="props.row.image.img2"
                            alt=""
                            width="140px"
                          />
                          <img
                            :src="props.row.image.img3"
                            alt=""
                            width="140px"
                          />
                          <img
                            :src="props.row.image.img4"
                            alt=""
                            width="140px"
                          />
                        </span>
                        <span v-else-if="props.column.field == 'action'">
                          <router-link
                            :to="{
                              name: 'productEdit',
                              params: { id: props.row.id },
                            }"
                            ><button class="btn btn-warning">
                              <i class="mdi mdi-pencil"></i></button
                          ></router-link>
                          <button
                            class="btn btn-danger"
                            @click="hapusProduct(props.row)"
                          >
                            <i class="mdi mdi-delete"></i>
                          </button>
                        </span>
                      </template>
                    </vue-good-table>
                  </div>
                </div>
                <!-- container -->
              </div>
              <!-- content -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import vue2Dropzone from "vue2-dropzone";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      columns: [
        {
          label: "Id",
          field: "id",
          type: 'number',
        },
        {
          label: "Name",
          field: "name",
          width: "160px",
        },
        {
          label: "Image",
          field: "image",
          width: "320px",
        },
        {
          label: "Description",
          field: "description",
        },
        {
          label: "Amount",
          field: "amount",
        },
        {
          label: "Quantity",
          field: "qty",
        },
        {
          label: "Minimum",
          field: "minimum",
        },
        {
          label: "Category",
          field: "category",
        },
        {
          label: "Condition",
          field: "condition",
        },
        {
          label: "Method",
          field: "method",
        },
        {
          label: "Action",
          field: "action",
          width: "120px",
        },
      ],

      // data: [],
      // listCategory: [],
      category: "",
      sortCategory: false,
    };
  },
  computed: {
    data() {
      return this.$store.state.product;
    },
  },

  async mounted() {
    this.$store.dispatch("loadProduct");
  },

  methods: {
    ...mapActions(["deleteProduct"]),
    hapusProduct(row) {
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.deleteProduct({
            id: row.id,
          });
          this.$swal(
            "Deleted",
            "You successfully deleted this file",
            "success"
          );
          let index = this.data.indexOf(row.name)
          this.data.splice(index, 1)
        } else {
          this.$swal("Cancelled", "Your file is still intact", "info");
        }
      });
    },
    getProduct(row) {
      this.formEditId = row.id;
      this.formEditName = row.name;
      this.formEditImage = row.image.img1;
      this.formEditDescription = row.description;
      this.formEditAmount = row.amount;
      this.formEditQty = row.qty;
      this.formEditMinimum = row.minimum;
      this.formEditCategory = row.category_id;
      this.formEditCondition = row.condition;
      this.formEditMethod = row.method;
    },
    editProduct() {
      this.$swal("Success", "You successfully update this data", "success");
      // axios.put('api-galangbantuan.matamantra.com/product/' + this.formEditId + '/action/update', {
      //     name: this.formEditName,
      //     image: '{\"img1\":\"' + this.formEditImage + '\"}',
      //     description: this.formEditDescription,
      //     amount: this.formEditAmount,
      //     qty: this.formEditQty,
      //     minimum: this.formEditMinimum,
      //     category_id: this.formEditCategory,
      //     condition: this.formEditCondition,
      //     method: this.formEditMethod,
      // }).then(res => {
      //     this.load()
      //     this.editName = "",
      //         this.editImage = ""
      //         this.editDescription = "",
      //         this.editAmount = "",
      //         this.editQty = "",
      //         this.editMinimum = "",
      //         this.editCategory = "",
      //         this.editCondition = "",
      //         this.editMethod = ""
      // }).catch(err => {
      //     // handle error
      //     console.log(err);
      // })
    },
  },
  components: {
    vueDropzone: vue2Dropzone,
  },
};
</script>

<style></style>