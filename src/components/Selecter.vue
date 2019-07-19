<style>
</style>

<template>
<select v-bind:id="myid" v-model="val" data-hide-disabled="true" data-size="10" tabindex="-98" class="selectpicker show-tick select-h30" data-live-search="true" title="請選擇">
        <option selected value="-1">取消選擇</option>
        <option value="1">選項一</option>
        <option value="2">選項二</option>
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