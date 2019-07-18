<template>
<div>
    <nav-bar></nav-bar>
    <h3>基本控件</h3>
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="row">
                <div class="col-md-4 col-sm-4">
                    <div class="form-group">
                        <label>選擇欄位</label>
                        <selecter v-model="val"></selecter>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="form-group">
                        <label>日期欄位</label>
                        <date-picker v-model="myDate"></date-picker>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="form-group">
                        <label>數字欄位</label>
                        <text-number v-model="numValue"></text-number>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h3>表格控件</h3>
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>first name</th>
                                <th>lastname</th>
                                <th>fullname</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Louis</td>
                                <td>Chen</td>
                                <td>Louis Chen</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Louis</td>
                                <td>Chen</td>
                                <td>Louis Chen</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
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
    export default {
        components: {
            Selecter,
            TextNumber,
            NavBar,
            DatePicker
        },
        data() {
            return {
                val: "",
                numValue: 123456.12,
                myDate:"2019/07/18"
            };
        },
        mounted() {},
        updated() {
            console.log(`parent val:${this.val}`)
            console.log(`parent num:${this.numValue}`)
            console.log(`parent num:${this.myDate}`)
        }
    };
</script>

<style>

</style>
