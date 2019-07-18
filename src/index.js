import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-select/dist/css/bootstrap-select.min.css'
import 'bootstrap'
import 'bootstrap-select'
//bootstrap 3 datetimepicker沒寫npm所以手動載入
import './style/bootstrap-datetimepicker.css'
import 'moment'
import './common/bootstrap-datetimepicker.min.js'

import Vue from 'vue'
import App from './components/App.vue';

new Vue({
    el:'#app',
    render:h=>h(App)
})

$(function(){
    var hello = () => 'Hello' 
    console.log(hello())
    // $('#datetimepicker1').datetimepicker({
    //     format:'YYYY/MM/DD'
    // });
})
