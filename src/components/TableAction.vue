<template>
    <TableBase v-bind:tableData="noDelData">
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
        <template v-slot:FirstDetail = "{ data,index }">
            <td v-text="index + 1" rowspan="200"></td>
            <td><TextNumber v-model="data.val"></TextNumber></td>
            <td><Selecter v-model="data.select"></Selecter></td>
            <td><DatePicker v-model="data.date"></DatePicker></td>
            <td><CheckBox v-model="data.checked" v-bind:title="data.title"></CheckBox></td>
            <td>
                <RadioButton v-model="data.picker"></RadioButton>
            </td>
        </template>
        <template v-slot:SecondDetailHead>
                <th class="th-title-1 w15">textNumber1</th>
                <th class="th-title-1 w15">selecter1</th>
                <th class="th-title-1 w15">datePicker1</th>
                <th class="th-title-1 w15">checkbox1</th>
                <th class="th-title-1 w15" colspan="2">
                    radioButton1
                </th>
        </template>
        <template v-slot:SecondDetail= "{ data }">
                <td><TextNumber v-model="data.val1"></TextNumber></td>
                <td><Selecter v-model="data.select1"></Selecter></td>
                <td v-text="data.date1"></td>
                <td><CheckBox v-model="data.checked1" v-bind:title="data.title"></CheckBox></td>
                <td colspan="2">
                    <RadioButton v-model="data.picker1"></RadioButton>
                </td>
        </template>
        <template v-slot:ThirdHead="{ data }">
                <th class="th-title-1">編號</th>
                <th class="th-title-1">子項目</th>
                <th class="th-title-1" colspan="2">子項目</th>
        </template>
        <template v-slot:ThirdDetail="{ subdata,index }">
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
    computed:{
        noDelData(){
            return this.$store.state.model.datas.filter(element => element.isdelete === 0)
        }
        }	
}
</script>

