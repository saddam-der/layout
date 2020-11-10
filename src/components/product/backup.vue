<template>
<div class="content-page">
    <div class="content">
        <div class="container-fluid">

            <b-row>
                <b-col md="8" offset-md="2">
                    <b-form @submit.prevent="tambahPesanan">
                        <b-input-group class="mt-3 mb-3">
                            <b-form-input v-model="inputMakanan" placeholder="Masukkan Makan..." required></b-form-input>
                        </b-input-group>
                        <b-input-group class="mb-3">
                            <b-form-input v-model="inputMinuman" placeholder="Masukkan Minuman..." required></b-form-input>
                        </b-input-group>
                        <b-input-group class="mb-3">
                            <b-form-select id="input-3" v-model="opsi" :options="opsis" required></b-form-select>
                            <b-input-group-append>
                                <b-button type="reset" variant="danger">Reset</b-button>
                                <b-button variant="info" type="submit">Tambah Pesanan</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="8" offset-md="2">
                    <div v-for="(pesan, nomor) in daftarPesan" :key="pesan.id" align="left">
                        <b-row class="mb-2">
                            <b-col md="6">
                                {{ nomor+1 }}
                                {{ pesan.makanan }},
                                {{ pesan.minuman }} :
                                {{ pesan.opsipesan }}
                                <img v-bind:src="'../../../assets/img/'+  pesan.gambar" width="250px">
                            </b-col>
                            <b-col md="6" align="right">
                                <b-button data-toggle="modal" data-target="#exampleModal" user="'pesan'" @click="sendInfo(pesan)" variant="warning">Edit</b-button>
                                <b-button variant="danger" @click="deletePesan(pesan.id)">Hapus</b-button>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form @submit.prevent="editPesanan(selectedPesan.id)">
                            <div class="modal-body">

                                <input type="hidden" v-bind:value="selectedPesan.id">
                                <b-form-group label="Makan" label-for="makan-input" invalid-feedback="makan is required">
                                    <b-form-input v-bind:value="selectedPesan.makanan" required></b-form-input>
                                </b-form-group>
                                <b-form-group label="Minum" label-for="minum-input" invalid-feedback="Minum is required">
                                    <b-form-input v-bind:value="selectedPesan.minuman" required></b-form-input>
                                </b-form-group>
                                <b-form-group label="Minum" label-for="minum-input" invalid-feedback="Minum is required">
                                    <b-form-input v-bind:value="selectedPesan.opsipesan" required></b-form-input>
                                </b-form-group>
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
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex"
import {
    v1
} from "uuid";

export default {

    data() {
        return {
            inputMakanan: "",
            inputMinuman: "",
            opsi: null,
            opsis: [{
                text: 'Makan disini atau Dibungkus',
                value: null
            }, 'Dibungkus', 'Makan disini'],
            selectedPesan: "",
        }
    },
    methods: {
        ...mapActions(["addPesan", "deletePesan", "editPesan"]),
        tambahPesanan() {
            this.addPesan({
                id: v1(),
                makanan: this.inputMakanan,
                minuman: this.inputMinuman,
                opsipesan: this.opsi,
            });
            this.inputMakanan = ""
            this.inputMinuman = ""
            this.opsi = null
        },
        editPesanan() {
            this.editPesan({
                makanan: this.selectedPesan.makanan,
                minuman: this.selectedPesan.minuman,
                opsipesan: this.selectedPesan.opsipesan,
            });
        },
        sendInfo(pesan) {
            this.selectedPesan = pesan;
        }
    },
    computed: {
        ...mapGetters([
            'daftarPesan',
        ]),
    }
};
</script>

<style>
</style>
