<template>
<div class="content-page">
    <div class="content">
        <div class="container-fluid">
            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Disaster</a></li>
                                <li class="breadcrumb-item active">Disaster List</li>
                            </ol>
                        </div>
                        <h4 class="page-title">List Disaster</h4>

                    </div>
                </div>
            </div>
            <!-- end page title -->
            <vue-good-table :columns="columns" :rows="data" :search-options="{ enabled: true }" :pagination-options="{ enabled: true, mode: 'records', perPage: 100, position: 'top', }">
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'image'">
                        <img :src="props.row.image" width="100px">
                    </span>
                    <span v-else-if="props.column.field == 'notes'">
                        {{ props.row.notes[0].kebutuhan }}
                        {{ props.row.notes[0].jumlah }}
                    </span>
                    <span v-else-if="props.column.field == 'action'">
                        <router-link :to="{ name: 'disasterEdit', params: { id: props.row.id } }"><button class="btn btn-warning"><i class="mdi mdi-pencil"></i></button></router-link>
                        <button @click="deleteDisplay(props.row)" class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
                    </span>
                </template>
            </vue-good-table>

            
        </div>
    </div>
</div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { mapActions } from 'vuex';

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
            // data: [],
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

    computed: {
        data() {
            return this.$store.state.data;
        }
    },

    async mounted() {
        this.$store.dispatch('loadData');
        this.category()
        this.province()
        this.city()
        this.subdistrict()
    },

    methods: {
        ...mapActions(['deleteData']),
        deleteDisplay(row) {
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
                    // axios.delete('https://c2fc1e3ef947.ngrok.io/disaster/' + row.id + '/action/delete').then(res => {
                    //     this.load()
                    //     let index = this.data.indexOf(row.name)
                    //     this.data.splice(index, 1)
                    // })
                    this.deleteData({id: row.id})
                    this.$swal('Deleted', 'You successfully deleted this file', 'success')
                } else {
                    this.$swal('Cancelled', 'Your file is still intact', 'info')
                }
            })
        },
        // async load() {
        //     await axios.get('https://c2fc1e3ef947.ngrok.io/disaster?page=1&limit=100').then((response) => {
        //         for (var i = 0; i < response.data.data.length; i++) {
        //             response.data.data[i].notes = JSON.parse(response.data.data[i].notes)
        //             this.data.push(response.data.data[i])
        //             // this.data = response.data.data
        //         }
        //     })
        // },
        // async load() {
        //     const response = await axios.get('https://c2fc1e3ef947.ngrok.io/disaster')
        //     this.data = response.data.data
        // },
        async category() {
            const response = await axios.get('https://c2fc1e3ef947.ngrok.io/disaster/category')
            this.categorya = response.data.data
        },
        async province() {
            const response = await axios.get('https://c2fc1e3ef947.ngrok.io/province')
            this.provincea = response.data.data
        },
        async city() {
            const response = await axios.get('https://c2fc1e3ef947.ngrok.io/city')
            this.citya = response.data.data
        },
        async subdistrict() {
            const response = await axios.get('https://c2fc1e3ef947.ngrok.io/subdistrict')
            this.subdistricta = response.data.data
        },

        del(row) {
            axios.delete('https://c2fc1e3ef947.ngrok.io/disaster/' + row.id + '/action/delete').then(res => {
                this.load()
                let index = this.data.indexOf(row.name)
                this.data.splice(index, 1)
            })
        },
        // getEdit: function (row) {
        //     this.formEdit.idEdit = row.id;
        //     this.formEdit.nameEdit = row.name;
        //     this.formEdit.category_idEdit = row.category;
        //     this.formEdit.storyEdit = row.story;
        //     this.formEdit.descriptionEdit = row.description;
        //     this.formEdit.addressEdit = row.address;
        //     this.formEdit.imageEdit = row.image;
        //     this.formEdit.notesEdit = row.notes[0].kebutuhan + ', ' + row.notes[0].jumlah;
        //     this.formEdit.injuredEdit = row.injured;
        //     this.formEdit.diedEdit = row.died;
        //     this.formEdit.mobile_noEdit = row.mobile_no;
        // },
        // update() {
        //     axios.put('https://c2fc1e3ef947.ngrok.io/disaster/' + this.formEdit.idEdit + '/action/update', {
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
