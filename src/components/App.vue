<template>
    <!-- <nav-bar></nav-bar> -->
    <div>
        <div class="section-box-area">
            <div class="box-area-title sub-id-flag"><b class="sub-title-flag">基本控件</b></div>
            <div class="box">
                <div class="row">
                    <div class="col-md-3 content-box">
                        <!-- <div class="w100 title">選擇欄位</div> -->
                        <selecter v-model="val"></selecter>
                    </div>
                    <div class="col-md-3 content-box">
                        <div class="w100 title">日期欄位</div>
                        <date-picker v-model="myDate"></date-picker>
                    </div>
                    <div class="col-md-3 content-box">
                        <div class="w100 title">數字欄位</div>
                        <text-number v-model="numValue"></text-number>
                    </div>
                    <div class="col-md-3 content-box">
                        <div class="w100 title">檢查框欄位</div>
                        <check-box v-model="check" title="檢查欄位"></check-box>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 content-box">
                        <div class="title w100">選項按鈕</div>
                        <radio-button v-model="picker"></radio-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-box-area">
            <div class="box-area-title sub-id-flag"><b class="sub-title-flag">明細Table控件</b></div>
            <div class="box">
                <div class="row">
                    <table-box></table-box>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue'
    import Selecter from './Selecter.vue'
    import TextNumber from './TextNumber.vue'
    import DatePicker from './DatePicker.vue'
    import CheckBox from './CheckBox.vue'
    import RadioButton from './RadioButton.vue'
    import TableBox from './TableBox.vue'
    export default {
        components: {
            Selecter,
            TextNumber,
            NavBar,
            DatePicker,
            CheckBox,
            RadioButton,
            TableBox
        },
        data() {
            return {
                val: "",
                numValue: 123456.12,
                myDate:"2019/07/18",
                check:false,
                picker:false
            };
        },
        mounted() {},
        updated() {
            console.log(`parent val:${this.val}`)
            console.log(`parent num:${this.numValue}`)
            console.log(`parent num:${this.myDate}`)
            console.log(`parent num:${this.check}`)
        }
    };
</script>

<style>

</style>
