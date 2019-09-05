<template>
<SectionEdit title="文件資訊">
    <Box title="請購單查詢明細區">
        <div class="row">        
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">供應商</b>
                    <b class="required-icon">*</b>
                </div>
                    <DisableText v-model="supplier"></DisableText>
            </div>         
            <div class="col-sm-1 content-box">
                <div class="w100 title">
                    <b class="float-left">選擇</b>
                </div>
                    <Popup bgColor="btn-02-blue"  iconName="icon-search"  remodalId="choice" title="彈出視窗" buttonName="按鈕"></Popup>
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
                    <TextNumber v-model="description"></TextNumber>
            </div>         
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">按鈕群</b>
                </div>
                    <Popup bgColor="btn-02-blue"  iconName="icon-search"  remodalId="choice2" title="彈出視窗" buttonName="按鈕"></Popup>
            </div> 
        </div>
    </Box>
    <Box title="查詢結果">
        <div class="row">        
            <div class="col-sm-3 content-box">
                <div class="w100 title">
                    <b class="float-left">供應商</b>
                    <b class="required-icon">*</b>
                </div>
                    <DisableText v-model="supplier1"></DisableText>
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
                </div>
                    <Selecter v-model="invoice1"></Selecter>
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
                        choice:"",                            
                        invoice:"",                            
                        purvhaseId:"",                            
                        quoteEmpId:"",                            
                        description:"",                            
                        choice2:"",                            
                        supplier1:"",                            
                        choice1:"",                            
                        invoice1:"",            }
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


