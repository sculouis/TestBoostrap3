<template>
    <TableBase v-bind:tableData="model.datas">
        <template slot="FirstHead">
            <th class="th-title w5">no</th>
            <th class="th-title w15">textNumber</th>
            <th class="th-title w15">selecter</th>
            <th class="th-title w15">datePicker</th>
            <th class="th-title w15">checkbox</th>
            <th class="th-title w15">
                radioButton
            </th>
        </template>
        <template slot="FirstDetail" slot-scope="{ data,index }">
            <td v-text="index + 1" rowspan="200"></td>
            <td><TextNumber v-model="data.val"></TextNumber></td>
            <td><Selecter v-model="data.select"></Selecter></td>
            <td><DatePicker v-model="data.date"></DatePicker></td>
            <td><CheckBox v-model="data.checked" v-bind:title="data.title"></CheckBox></td>
            <td>
                <RadioButton v-model="data.picker"></RadioButton>
            </td>
        </template>
        <template slot="SecondDetailHead">
                <th class="th-title-1 w15">textNumber1</th>
                <th class="th-title-1 w15">selecter1</th>
                <th class="th-title-1 w15">datePicker1</th>
                <th class="th-title-1 w15">checkbox1</th>
                <th class="th-title-1 w15" colspan="2">
                    radioButton1
                </th>
        </template>
        <template slot="SecondDetail" slot-scope="{ data }">
                <td><TextNumber v-model="data.val1"></TextNumber></td>
                <td><Selecter v-model="data.select1"></Selecter></td>
                <td v-text="data.date1"></td>
                <td><CheckBox v-model="data.checked1" v-bind:title="data.title"></CheckBox></td>
                <td colspan="2">
                    <RadioButton v-model="data.picker1"></RadioButton>
                </td>
        </template>
        <template slot="ThirdHead" slot-scope="{ data }">
                <th class="th-title-1">編號</th>
                <th class="th-title-1">子項目</th>
                <th class="th-title-1" colspan="2">子項目</th>
        </template>
        <template slot="ThirdDetail" slot-scope="{ subdata,index }">
                <td v-text="index + 1"></td>
                <td v-text="subdata.data1"></td>
                <td colspan="2" v-text="subdata.data2"></td>
                <td colspan="2" v-text="subdata.data3"></td>
        </template>
    </TableBase>
</template>
<script>
import NavBar from './NavBar.vue'
import Selecter from './Selecter.vue'
import TextNumber from './TextNumber.vue'
import DatePicker from './DatePicker.vue'
import CheckBox from './CheckBox.vue'
import RadioButton from './RadioButton.vue'
import TableBase from './Table/TableBase.vue'
import { mapGetters,mapMutations } from 'vuex'
var model = {
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
        RadioButton,
        TableBase
    },
    data(){
        return {model}
    },
}
</script>

