<template>
<div class="content-page">
    <div class="content">
        <div class="container-fluid">
            <vue-good-table :columns="columns" :rows="data" :search-options="{ enabled: true }" :pagination-options="{ enabled: true, mode: 'records', perPage: 100, position: 'top', }">
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'image'">
                        <img :src="props.row.image" width="100px">
                    </span>
                    <span v-else-if="props.column.field == 'notes'">
                        {{ props.row.notes.kebutuhan }}
                        {{ props.row.notes[0].kebutuhan }}
                        {{ props.row.notes[0].jumlah }}
                    </span>
                    <span v-else-if="props.column.field == 'action'">
                        <button @click="getEdit(props.row)" data-toggle="modal" data-target="#exampleModal" class="btn btn-warning"><i class="mdi mdi-pencil"></i></button>
                        <button @click="deleteDisplay" class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
                    </span>
                </template>
            </vue-good-table>

            <form @submit.prevent="update">
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Update Disaster</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <label for="bencana-name">Name<span class="text-danger">*</span></label>
                                            <input type="text" v-model="formEdit.nameEdit" class="form-control" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="product-name">Category<span class="text-danger">*</span></label>
                                            <select class="form-control" v-model="formEdit.category_idEdit">
                                                <option v-for="option in categorya" :key="option.id" v-bind:value="option.id">
                                                    {{ option.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="product-name">Province<span class="text-danger">*</span></label>
                                            <select class="form-control" v-model="formEdit.province_idEdit">
                                                <option v-for="option in provincea" :key="option.id" v-bind:value="option.id">
                                                    {{ option.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="product-name">City<span class="text-danger">*</span></label>
                                            <select class="form-control" v-model="formEdit.city_idEdit">
                                                <option v-for="option in citya" :key="option.id" v-bind:value="option.id">
                                                    {{ option.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="product-name">Subdistrict<span class="text-danger">*</span></label>
                                            <select class="form-control" v-model="formEdit.sub_district_idEdit">
                                                <option v-for="option in subdistricta" :key="option.id" v-bind:value="option.id">
                                                    {{ option.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="bencana-name">Story<span class="text-danger">*</span></label>
                                            <ckeditor :editor="editor" v-model="formEdit.storyEdit"></ckeditor>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="bencana-name">Description<span class="text-danger">*</span></label>
                                            <textarea v-model="formEdit.descriptionEdit" class="form-control" cols="30" rows="3" required></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <label for="bencana-name">Address<span class="text-danger">*</span></label>
                                            <textarea v-model="formEdit.addressEdit" class="form-control" cols="30" rows="3" required></textarea>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="bencana-name">Image<span class="text-danger">*</span></label>
                                            <img :src="formEdit.imageEdit" alt="" width="300px">
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="bencana-name">Noted<span class="text-danger">*</span></label>
                                            <input type="text" v-model="formEdit.notesEdit" class="form-control" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="bencana-name">Injured<span class="text-danger">*</span></label>
                                            <input type="text" v-model="formEdit.injuredEdit" class="form-control" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="bencana-name">Died<span class="text-danger">*</span></label>
                                            <input type="text" v-model="formEdit.diedEdit" class="form-control" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="bencana-name">Mobile No<span class="text-danger">*</span></label>
                                            <input type="text" v-model="formEdit.mobile_noEdit" class="form-control" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

export default {
    data() {
        return {
            editor: ClassicEditor,
            formEdit: {
                idEdit: '',
                nameEdit: '',
                category_idEdit: '',
                descriptionEdit: '',
                storyEdit: '',
                province_idEdit: '',
                city_idEdit: '',
                sub_district_idEdit: '',
                addressEdit: '',
                notesEdit: '',
                imageEdit: '',
                mobile_noEdit: '',
                injuredEdit: '',
                diedEdit: '',
            },
            data: [],
            categorya: [],
            provincea: [],
            citya: [],
            subdistricta: [],
            columns: [{
                    label: 'ID',
                    field: 'id',
                    type: 'number',
                },
                {
                    label: 'Name',
                    field: 'name',
                },

                {
                    label: 'Category',
                    field: 'category',
                },
                {
                    label: 'Description',
                    field: 'description',

                },
                {
                    label: 'Story',
                    field: 'story',
                    hidden: true,
                },

                {
                    label: 'Province',
                    field: 'province',
                },
                {
                    label: 'City',
                    field: 'city',
                    hidden: true,
                },
                {
                    label: 'Sub_district',
                    field: 'sub_district',
                    hidden: true,
                },
                {
                    label: 'Address',
                    field: 'address',
                    hidden: true,
                },
                {
                    label: 'Notes',
                    field: 'notes',
                    // hidden: true,
                },
                {
                    label: 'Image',
                    field: 'image',
                },
                {
                    label: 'Mobile No',
                    field: 'mobile_no',
                },
                {
                    label: 'Status',
                    field: 'status',
                    hidden: true,
                },
                {
                    label: 'Injured',
                    field: 'injured',
                    hidden: true,
                },
                {
                    label: 'Died',
                    field: 'died',
                    hidden: true,
                },
                {
                    label: 'Last Desc',
                    field: 'last_desc',
                    hidden: true,
                },
                {
                    label: 'Time',
                    field: 'time',
                    width: '200px'
                },
                {
                    label: 'Verified',
                    field: 'verified',
                    hidden: true,
                },
                {
                    label: 'Action',
                    field: 'action',
                    width: '120px'
                },
            ],
        }
    },

    mounted() {
        this.load()
        this.category()
        this.province()
        this.city()
        this.subdistrict()
    },

    methods: {
        deleteDisplay() {
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
        },
        async load() {
            await axios.get('https://api-galangbantuan.matamantra.com/disaster').then((response) => {
                for (var i = 0; i < response.data.data.length; i += 1) {
                    response.data.data[i].notes = JSON.parse(response.data.data[i].notes)
                    this.data.push(response.data.data[i])
                    // this.data = response.data.data
                }
            })
        },
        // async load() {
        //     const response = await axios.get('https://api-galangbantuan.matamantra.com/disaster')
        //     this.data = response.data.data
        // },
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

        // del(row) {
        //     axios.delete('https://api-galangbantuan.matamantra.com/disaster/' + row.id + '/action/delete').then(res => {
        //         this.load()
        //         let index = this.data.indexOf(row.name)
        //         this.data.splice(index, 1)
        //     })
        // },
        getEdit: function (row) {
            this.formEdit.idEdit = row.id;
            this.formEdit.nameEdit = row.name;
            this.formEdit.category_idEdit = row.category;
            this.formEdit.storyEdit = row.story;
            this.formEdit.descriptionEdit = row.description;
            this.formEdit.addressEdit = row.address;
            this.formEdit.imageEdit = row.image;
            this.formEdit.notesEdit = row.notes[0].kebutuhan + ', ' + row.notes[0].jumlah;
            this.formEdit.injuredEdit = row.injured;
            this.formEdit.diedEdit = row.died;
            this.formEdit.mobile_noEdit = row.mobile_no;
        },
        // update() {
        //     axios.put('https://api-galangbantuan.matamantra.com/disaster/' + this.formEdit.idEdit + '/action/update', {
        //             name: this.formEdit.nameEdit,
        //             category_id: this.formEdit.category_idEdit,
        //             description: this.formEdit.descriptionEdit,
        //             story: this.formEdit.storyEdit,
        //             province_id: this.formEdit.province_idEdit,
        //             city_id: this.formEdit.city_idEdit,
        //             sub_district_id: this.formEdit.sub_district_idEdit,
        //             address: this.formEdit.addressEdit,
        //             notes: this.formEdit.notesEdit,
        //             mobile_no: this.formEdit.mobile_noEdit,
        //             injured: this.formEdit.injuredEdit,
        //             died: this.formEdit.diedEdit,
        //         })
        //         .then(res => {
        //             // handle success
        //             this.load()
        //         })
        // },
    },
}
</script>

<style>

</style>
