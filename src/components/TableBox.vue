<template>
    <table class="table table-hover table-bordered tbody-hover-outline">
    <thead>
        <tr>
            <th class="th-title w5">no</th>
            <th class="th-title w15">textNumber</th>
            <th class="th-title w15">selecter</th>
            <th class="th-title w15">datePicker</th>
            <th class="th-title w15">checkbox</th>
            <th class="th-title w15">
                radioButton
            </th>
            <th class="th-title w15">
                <div class="btn-01-add"><a class="p-all0" v-on:click="setAllOpenStatus()"><div v-bind:class="[isAllOpen?'list-close-icon':'list-open-icon']"></div></a></div>
                <div class="p-left5 btn-01-add"><a v-on:click="addNewObject()"><div class="icon-plus bt-icon-size-1"></div></a></div>
            </th>
        </tr>
    </thead>
    <tbody v-for="(data,index) in noDelData" v-bind:key="index">
        <tr>
            <td v-text="index + 1" rowspan="200"></td>
            <td><text-number v-model="data.val"></text-number></td>
            <td><selecter v-model="data.select"></selecter></td>
            <td><date-picker v-model="data.date"></date-picker></td>
            <td><check-box v-model="data.checked" v-bind:title="data.title"></check-box></td>
            <td>
                <radio-button v-model="data.picker"></radio-button>
            </td>
            <td>
                <div class="btn-01-add ExpandDetail"><a v-on:click="data.isDetailOpen = !data.isDetailOpen"><div class="glyphicon" v-bind:class="[data.isDetailOpen?'glyphicon-chevron-up':'glyphicon-chevron-down']" ></div></a></div>
                <div class="icon-cross icon-remove-size" v-on:click="alertConfirm(data.no)"></div>
            </td>
        </tr>
            <tr v-show="data.isDetailOpen">
                <th class="th-title-1 w15">textNumber1</th>
                <th class="th-title-1 w15">selecter1</th>
                <th class="th-title-1 w15">datePicker1</th>
                <th class="th-title-1 w15">checkbox1</th>
                <th class="th-title-1 w15" colspan="2">
                    radioButton1
                </th>
            </tr>
            <tr v-show="data.isDetailOpen">
                <td><text-number v-model="data.val1"></text-number></td>
                <td><selecter v-model="data.select1"></selecter></td>
                <td><date-picker v-model="data.date1"></date-picker></td>
                <td><check-box v-model="data.checked1" v-bind:title="data.title"></check-box></td>
                <td colspan="2">
                    <radio-button v-model="data.picker1"></radio-button>
                </td>
            </tr>
            <tr v-show="data.isDetailOpen">
                <th class="th-title-1">編號</th>
                <th class="th-title-1">子項目</th>
                <th class="th-title-1" colspan="2">子項目</th>
                <th class="th-title-1" colspan="2">
                    子項目
                    <div class="btn-01-add float-right"><a v-on:click="data.isSubOpen = !data.isSubOpen"><span v-text="data.isSubOpen?'收合':'展開'"></span></a></div>
                </th>
            </tr>
            <tr class="InnerDetailShowBar" v-show="data.isDetailOpen && !data.isSubOpen">
                <td colspan="7" class="text-center">
                    <b class="undone-text">請展開檢視更多項目...</b>
                </td>
            </tr>
            <tr v-for="(subdata,index) in data.subDatas" v-show="data.isDetailOpen && data.isSubOpen" v-bind:key="index">
                <td v-text="index + 1"></td>
                <td v-text="subdata.data1"></td>
                <td colspan="2" v-text="subdata.data2"></td>
                <td colspan="2" v-text="subdata.data3"></td>
            </tr>
    </tbody>
</table>
</template>
<script>
import NavBar from './NavBar.vue'
import Selecter from './Selecter.vue'
import TextNumber from './TextNumber.vue'
import DatePicker from './DatePicker.vue'
import CheckBox from './CheckBox.vue'
import RadioButton from './RadioButton.vue'
var model = {
    data1: {
        val: 1234.123,
        value: "主檔",
        select: "2",
        date: "2019-05-15",
        picker: true
    },
    datas: [
        {
            no: 1,
            title:"標題1",
            val: 1234567890123.123,
            value: "測試TextBox",
            select: "1",
            date: "2019-05-15",
            picker: true,
            checked: true,
            val1: 1234567890123.123,
            value1: "測試TextBox",
            select1: "1",
            date1: "2019-05-15",
            picker1: true,
            subDatas:[{data1:"測試1",data2:"測試2",data3:"測試3"},{data1:"測試1",data2:"測試2",data3:"測試3"}],
            checked1: true,
            isdelete: 0,
            isDetailOpen: true,
            isSubOpen:false,
        },
        {
            no: 2,
            title: "標題2",
            val: 1234567890123.123,
            value: "測試TextBox",
            select: "2",
            date: "2019-05-16",
            picker: false,
            checked: false,
            val1: 1234567890123.123,
            value1: "測試TextBox",
            select1: "1",
            date1: "2019-05-15",
            picker1: true,
            checked1: true,
            subDatas: [{ data1: "測試1", data2: "測試2", data3: "測試3" }, { data1: "測試1", data2: "測試2", data3: "測試3" }],
            isdelete: 0,
            isDetailOpen: true,
            isSubOpen:false,
    },
    ]
}

export default {
    components: {
        Selecter,
        TextNumber,
        NavBar,
        DatePicker,
        CheckBox,
        RadioButton
    },
    data(){
        return {model, isAllOpen: true }
    },
    computed:{
        noDelData(){
            return this.model.datas.filter((item) => item.isdelete === 0)
        }
    },
    methods:{
        setIsDetailOpen(objBool) {
            this.model.datas.forEach((item)=> item.isDetailOpen = objBool)
        },
        setAllOpenStatus() {
                this.isAllOpen = !this.isAllOpen
                this.setIsDetailOpen(this.isAllOpen)   //設定明細跟隨isAllOpen的狀態
            },
    }
    
}
</script>

