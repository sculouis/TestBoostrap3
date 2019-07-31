<template>
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
</template>

<script>
    import Box from '../components/Box.vue'
    import Selecter from '../components/Selecter.vue'
    import TextNumber from '../components/TextNumber.vue'
    import DatePicker from '../components/DatePicker.vue'
    import CheckBox from '../components/CheckBox.vue'
    import RadioButton from '../components/RadioButton.vue'

export default {
            components: {
            Box,
            Selecter,
            TextNumber,
            DatePicker,
            CheckBox,
            RadioButton
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
}
</script>

<style>
</style>
