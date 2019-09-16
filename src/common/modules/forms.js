const mutations = {
        openRemodal(state, id) {
            var sel = "[data-remodal-id=" + id + "]"
            var obj = $(sel).remodal();
            obj.open();
        },
        checked(){
        if (this.val === true) {
            this.$emit("input", true)
        } else if (this.val === false) {
            this.$emit("input", false)
        }
    },
        datePicker(){
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
        },
        selectPicker(){
            $("#" + this.myid).val(this.val)
            $("#" + this.myid).selectpicker('refresh')
        }
    }

    export default{
    namespaced: true,
    mutations
}