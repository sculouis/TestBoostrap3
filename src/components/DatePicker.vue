<template>
    <div class='w100 input-group date01 custom-input datetimepicker1' v-bind:id="myid" ref="date">
        <input type='text' class="input h30" placeholder="yyyy-mm-dd" v-model="val" />
        <span class="input-group-addon d-input addon-table">
            <span class="glyphicon glyphicon-calendar"></span>
        </span>
    </div>

</template>
<script>
import {myMixin} from '../common/library'
export default {
    props: {title:String, value:String},
    mixins: [myMixin],
    data() {
        return {
            val: "",
            myid: ""
        };
    },
    mounted() {
        this.val = this.value
        //為了帶入datepicker的db.change事件必需如此做
        //this 感覺是date-picker這個scope，所以要新增一個scope
        const self = this   
        $(this.$refs.date).datetimepicker({
            format: 'YYYY/MM/DD',
          });    
        $("#" + this.myid).on("dp.change", function (e) {
            //vm.$emit('input', e.currentTarget.firstChild.value);
            self.val = e.currentTarget.firstChild.value
            self.$emit('input', self.val);   //回對datamodel
        })
    }
    
}
</script>

