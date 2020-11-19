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
            <vue-good-table :columns="columns" :rows="data" :sort-options="{ enabled: true, }" :pagination-options="{ enabled: true, mode: 'records', perPage: 100, position: 'top', }">
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
                    hidden: true,
                },
                {
                    label: 'Image',
                    field: 'image',
                },
                {
                    label: 'Mobile No',
                    field: 'mobile_no',
                    type: 'number',
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
                    type: 'number',
                },
                {
                    label: 'Died',
                    field: 'died',
                    hidden: true,
                    type: 'number',
                },
                {
                    label: 'Last Desc',
                    field: 'last_desc',
                    hidden: true,
                },
                {
                    label: 'Time',
                    field: 'time',
                    width: '200px',
                    
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
                    this.deleteData({id: row.id})
                    
                    this.$swal('Deleted', 'You successfully deleted this file', 'success')
                    
                } else {
                    this.$swal('Cancelled', 'Your file is still intact', 'info')
                }
            })
        },

        // del(row) {
        //     axios.delete('https://c2fc1e3ef947.ngrok.io/disaster/' + row.id + '/action/delete').then(res => {
        //         this.load()
        //         let index = this.data.indexOf(row.name)
        //         this.data.splice(index, 1)
        //     })
        // },
        
    },
}
</script>

<style>

</style>
