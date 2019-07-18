<template>
    <div class='input-group date' v-bind:id="myid" data-target-input="nearest" ref="date">
        <input type='text' class="form-control" />
        <span class="input-group-addon">
            <span class="glyphicon glyphicon-calendar"></span>
        </span>
    </div>
</template>
<script>
import {myMixin} from '../common/library'
export default {
    props: ['title', 'value'],
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

