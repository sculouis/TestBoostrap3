<template>
    <Box title="基本控件">
        <div class="row">
            <div class="col-md-3 content-box">
                <div class="w100 title">選擇欄位</div>
                <selecter v-model="val"></selecter>
                <div class="error-text" v-show="submitted && !$v.val.required && $v.val.greaterThan"><span class="icon-error icon-error-size"></span>未完成填寫</div>
            </div>
            <div class="col-md-3 content-box">
                <div class="w100 title">日期欄位</div>
                <DatePicker v-model="myDate"></DatePicker>
                <div class="error-text" v-show="submitted && !$v.myDate.required"><span class="icon-error icon-error-size"></span>未完成填寫</div>
            </div>
            <div class="col-md-3 content-box">
                <div class="w100 title">數字欄位</div>
                <TextNumber v-model="numValue"></TextNumber>
                <div class="error-text" v-show="submitted && !$v.numValue.required"><span class="icon-error icon-error-size"></span>未完成填寫</div>
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
        <div class="row">
            <button class="btn-primary" @click="submit()">Submit</button>
        </div>
        <pre style="margin-top: 25px">{{$v}}</pre>
    </Box>
</template>

<script>
    import Box from '../components/Box.vue'
    import Selecter from '../components/Selecter.vue'
    import TextNumber from '../components/TextNumber.vue'
    import DatePicker from '../components/DatePicker.vue'
    import CheckBox from '../components/CheckBox.vue'
    import RadioButton from '../components/RadioButton.vue'
    import { required, minLength, between,requiredIf } from 'vuelidate/lib/validators'

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
                val: "",
                numValue: "",
                myDate:"",
                check:false,
                picker:false,
                submitted:false
            };
        },
        validations:{
                val:{
                        required,
                        greaterThan(value){
                            if (value !== ""){
                                return Number(value) > -1
                            }else {
                                return true
                            }
                        }
            },
                numValue:{
                        required,
            },
            myDate:{
                        required,
            }
        },
        mounted(){
            console.log(this.$v.$reset())
        },
        methods:{
            submit(){
                this.submitted = true
                console.log(`輸入檢查不合法：${this.$v.$invalid}`)
            }
        }
        }
</script>

<style>
</style>
