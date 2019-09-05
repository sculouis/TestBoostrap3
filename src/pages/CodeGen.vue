<template>
<SectionEdit title="文件資訊">
    <Box title="請購單查詢明細區">
        <div class="row">        
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">供應商</b>
                    <b class="required-icon">*</b>
                </div>                    
                <DisableText v-model="supplier" placeHolder="請點選右方【選擇】鈕選擇供應商"></DisableText>
            </div>         
            <div class="col-sm-1 content-box">
                <div class="w100 title">
                    <b class="float-left">選擇</b>
                </div>                    
                <Popup bgColor="btn-02-blue"  iconName="icon-search"  remodalId="choice1" title="彈出視窗" buttonName="按鈕"></Popup>
            </div>         
            <div class="col-sm-8 content-box">
                <div class="w100 title">
                    <b class="float-left">發票地點</b>
                    <b class="required-icon">*</b>
                </div>                    
                <Selecter v-model="invoice"></Selecter>
            </div> 
        </div>
        <div class="row">        
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">請購單號</b>
                </div>                    
                <Selecter v-model="purvhaseId"></Selecter>
            </div>         
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">報價經辦</b>
                </div>                    
                <Selecter v-model="quoteEmpId"></Selecter>
            </div>         
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">請購單品名描述</b>
                </div>                    
                <TextString v-model="description" placeHolder="請填寫品名描述"></TextString>
            </div>         
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">按鈕群</b>
                    <b class="required-icon">*</b>
                </div>                    
                    <ButtonAction bgColor="btn-02-gray"  iconName="glyphicon glyphicon-remove">清除</ButtonAction>
                    <ButtonAction bgColor="btn-02-blue"  iconName="icon-search">查詢</ButtonAction>
            </div> 
        </div>
    </Box>
    <Box title="查詢結果">
        <div class="row">        
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">選項按鈕</b>
                    <b class="required-icon">*</b>
                </div>                    
                <RadioButton v-model="supplier1"></RadioButton>
            </div>         
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">檢查按鈕</b>
                    <b class="required-icon">*</b>
                </div>                    
                <CheckBox v-model="choice1" title="檢查按鈕"></CheckBox>
            </div>         
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">發票地點</b>
                    <b class="required-icon">*</b>
                </div>                    
                <Selecter v-model="invoice1"></Selecter>
            </div>         
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">數字欄位</b>
                </div>                    
                <TextNumber v-model="number"></TextNumber>
            </div> 
        </div>
    </Box>
    <Box title="採購單主檔">
        <div class="row">        
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">選項按鈕</b>
                    <b class="required-icon">*</b>
                </div>                    
                <RadioButton v-model="supplier1"></RadioButton>
            </div>         
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">檢查按鈕</b>
                    <b class="required-icon">*</b>
                </div>                    
                <CheckBox v-model="choice1" title="檢查按鈕"></CheckBox>
            </div>         
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">發票地點</b>
                    <b class="required-icon">*</b>
                </div>                    
                <Selecter v-model="invoice1"></Selecter>
            </div>         
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">日期欄位</b>
                </div>                    
                <DatePicker v-model="date1"></DatePicker>
            </div> 
        </div>
    </Box>
</SectionEdit>
</template>

<script>
    import SectionEdit from '../components/SectionEdit.vue'
    import Box from '../components/Box.vue'
    import Selecter from '../components/Selecter.vue'
    import TextNumber from '../components/TextNumber.vue'
    import TextString from '../components/TextString.vue'
    import DatePicker from '../components/DatePicker.vue'
    import CheckBox from '../components/CheckBox.vue'
    import RadioButton from '../components/RadioButton.vue'
    import ButtonAction from '../components/ButtonAction.vue'
    import DisableText from '../components/DisableText.vue'
    import Popup from '../components/Popup.vue'
    import { required } from 'vuelidate/lib/validators'

export default {
            components: {
            SectionEdit,
            Box,
            Selecter,
            TextNumber,
            TextString,
            DatePicker,
            CheckBox,
            RadioButton,
            ButtonAction,
            DisableText,
            Popup
        },
        data() {
            return {                            
                        supplier:"",                            
                        choice1:"",                            
                        invoice:"",                            
                        purvhaseId:"",                            
                        quoteEmpId:"",                            
                        description:"",                            
                        supplier1:"",                            
                        choice1:"",                            
                        invoice1:"",                            
                        number:"",                            
                        supplier1:"",                            
                        choice1:"",                            
                        invoice1:"",                            
                        date1:"",            }
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
            }
        }
        }
</script>
