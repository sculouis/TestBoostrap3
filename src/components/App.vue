<template>
    <!-- <nav-bar></nav-bar> -->
    <div>
        <Box title="基本控件">
            <div class="row">
                <div class="col-md-3 content-box">
                    <!-- <div class="w100 title">選擇欄位</div> -->
                    <selecter v-model="val"></selecter>
                </div>
                <div class="col-md-3 content-box">
                    <div class="w100 title">日期欄位</div>
                    <DatePicker v-model="myDate"></DatePicker>
                </div>
                <div class="col-md-3 content-box">
                    <div class="w100 title">數字欄位</div>
                    <TextNumber v-model="numValue"></TextNumber>
                </div>
                <div class="col-md-3 content-box">
                    <div class="w100 title">檢查框欄位</div>
                    <CheckBox v-model="check" title="檢查欄位"></CheckBox>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 content-box">
                    <div class="title w100">選項按鈕</div>
                    <RadioButton v-model="picker"></RadioButton>
                </div>
            </div>
        </Box>
        <Box title="明細table控件">
            <div class="row">
                <TableBox></TableBox>
            </div>
        </Box>
    </div>
</template>

<script>
    import Box from './Box.vue'
    import NavBar from './NavBar.vue'
    import Selecter from './Selecter.vue'
    import TextNumber from './TextNumber.vue'
    import DatePicker from './DatePicker.vue'
    import CheckBox from './CheckBox.vue'
    import RadioButton from './RadioButton.vue'
    import TableBox from './TableBox.vue'
    export default {
        components: {
            Box,
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
                val: "1",
                numValue: 123456.12,
                myDate:"2019/07/18",
                check:false,
                picker:false
            };
        }
    };
</script>

<style>

</style>
