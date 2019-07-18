<style>
</style>

<template>
    <select v-model="val" class="selectpicker form-control" data-live-search="true" title="請選擇" data-style="btn-info">
        <option value="1">Mustard</option>
        <option value="2">Ketchup</option>
        <option value="3">測試三</option>
    </select>
</template>

<script>
    import {myMixin} from '../common/library'
    export default {
        mixins: [myMixin],
        props:['value'],
        data() {
            return {
                val: "",
                myid:""
            };
        },
        mounted() {
            //console.log($(this.$refs.select).val())
            this.val = this.value
            // $("#" + this.myid).val(this.value)
            // $("#" + this.myid).selectpicker('refresh')
        },
        updated() {
            this.$emit('input', this.val);  //回寫對應到dataModel
            // $("#" + this.myid).val(this.val)
            // $("#" + this.myid).selectpicker('refresh')
        },

    };
</script>