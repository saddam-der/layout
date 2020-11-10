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

                                    <vue-good-table :columns="columns" :rows="data" :search-options="{enabled: true}" :pagination-options="{enabled: true, perPage: 3, perPageDropdown: [3, 5, 10, 20], mode: 'records'}">
                                        <template slot="table-row" slot-scope="props">
                                            <span v-if="props.column.field == 'image'">
                                                <img :src="props.row.image.img1" alt="" width="140px">
                                                <img :src="props.row.image.img2" alt="" width="140px">
                                                <img :src="props.row.image.img3" alt="" width="140px">
                                                <img :src="props.row.image.img4" alt="" width="140px">
                                            </span>
                                            <span v-else-if="props.column.field == 'action'">
                                                <button class="btn btn-warning" data-toggle="modal" data-target="#modalEdit"><i class="mdi mdi-pencil" @click="getProduct(props.row)"></i></button>
                                                <button class="btn btn-danger" @click="deleteProduct(props.row)"><i class="mdi mdi-delete"></i></button>
                                            </span>
                                        </template>
                                    </vue-good-table>

                                    <!-- Modal -->
                                    <div class="modal fade" id="modalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <form @submit.prevent="editProduct">
                                                        <div class="form-row">
                                                            <div class="col-md-6">
                                                                <input type="hidden" class="form-control" id="idProduct" v-model="formEditId" required>
                                                                <div class="col-md-12 mb-3">
                                                                    <label for="editName">Name</label>
                                                                    <input type="text" class="form-control" id="editName" v-model="formEditName" required>
                                                                </div>
                                                                <div class="col-md-12 mb-3">
                                                                    <label for="editDescription">Description</label>
                                                                    <ckeditor :editor="editor" v-model="formEditDescription"></ckeditor>
                                                                </div>
                                                                <div class="col-md-12 mb-3">
                                                                    <label for="editCategory">Category</label>
                                                                    <select class="custom-select" id="editCategory" v-model="formEditCategory" required>
                                                                        <option v-for="option in listCategory" :key="option.id" v-bind:value="option.id">
                                                                            {{ option.name }}
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-12 mb-3">
                                                                    <label for="editQuantity">Quantity</label>
                                                                    <input type="number" class="form-control" id="editQuantity" v-model="formEditQty" required>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="col-md-12 mb-3">
                                                                    <label for="editMinimum">Minimum</label>
                                                                    <input type="number" class="form-control" id="editMinimum" v-model="formEditMinimum" required>
                                                                </div>
                                                                <div class="col-md-12 mb-3">
                                                                    <label for="editAmount">Amount</label>
                                                                    <input type="number" class="form-control" id="editAmount" v-model="formEditAmount" required>
                                                                </div>
                                                                <div class="col-md-12 mb-3">
                                                                    <label for="editImage">Image</label>
                                                                    <input type="text" class="form-control" id="editImage" v-model="formEditImage" required>
                                                                    <img :src="formEditImage" alt="" width="60px">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="submit" class="btn btn-primary">Save changes</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
import axios from 'axios'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    data() {
        return {
            columns: [{
                    label: 'Id',
                    field: 'id',
                },
                {
                    label: 'Name',
                    field: 'name',
                    width: '160px',
                },
                {
                    label: 'Image',
                    field: 'image',
                    width: '320px',
                },
                {
                    label: 'Description',
                    field: 'description',
                },
                {
                    label: 'Amount',
                    field: 'amount',
                },
                {
                    label: 'Quantity',
                    field: 'qty',
                },
                {
                    label: 'Minimum',
                    field: 'minimum',
                },
                {
                    label: 'Category',
                    field: 'category',
                },
                {
                    label: 'Condition',
                    field: 'condition',
                },
                {
                    label: 'Method',
                    field: 'method',
                },
                {
                    label: 'Action',
                    field: 'action',
                    width: '120px',
                }
            ],

            data: [],
            listCategory: [],
            category: "",
            sortCategory: false,
            inputID: "",

            formEditId: "",
            formEditName: "",
            formEditImage: "",
            formEditDescription: "",
            formEditAmount: "",
            formEditQty: "",
            formEditMinimum: "",
            formEditCategory: "",
            formEditCondition: "",
            formEditMethod: "",

            editor: ClassicEditor,
        }
    },
    computed: {},

    async mounted() {
        this.load(),
            this.subCategory()
    },
    methods: {
        async load() {
            await axios.get('https://api-galangbantuan.matamantra.com/product').then((response) => {
                for (var i = 0; i < response.data.data.length; i += 1) {
                    response.data.data[i].image = JSON.parse(response.data.data[i].image)
                    this.data.push(response.data.data[i])
                }
            })
        },
        async subCategory() {
            const response = await axios.get('https://api-galangbantuan.matamantra.com/product/category')
            this.listCategory = response.data.data
        },
        deleteProduct(row) {
            this.$swal({
                title: 'Are you sure?',
                text: 'You can\'t revert your action',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes Delete it!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if (result.value) {
                    this.$swal('Deleted', 'You successfully deleted this file', 'success')
                } else {
                    this.$swal('Cancelled', 'Your file is still intact', 'info')
                }
            })
            // axios.delete('https://7de53b6c7594.ngrok.io/product/' + row.id + '/action/delete').then(res => {
            //     this.load()
            //     let index = this.data.indexOf(row.name)
            //     this.data.splice(index, 1)
            // })
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
            $('#modalEdit').hide();
            $('.modal-backdrop').remove();
            this.$swal('Success', 'You successfully update this data', 'success');
            // axios.put('https://7de53b6c7594.ngrok.io/product/' + this.formEditId + '/action/update', {
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
        sortByCategory() {
            this.sortCategory = this.sortCategory == true
        },
        sortByID() {
            this.sortCategory = this.sortCategory == false
        }
    }
}
</script>

<style>

</style>
