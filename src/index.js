import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-select/dist/css/bootstrap-select.min.css'
import 'bootstrap'
import 'bootstrap-select'
//bootstrap 3 datetimepicker沒寫npm所以手動載入
import './style/bootstrap-datetimepicker.css'
import 'moment'
import './common/bootstrap-datetimepicker.min.js'
import './style/icon-style.css'
import './style/form.css'
import './style/main.css'
import './style/index.css'
import './style/myStyle.css'
import Vue from 'vue'
import VuejsDialog from 'vuejs-dialog';
import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'; // only needed in custom components

// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import store from './common/store'
import App from './components/App.vue';
// Tell Vue to install the plugin.

Vue.use(VuejsDialog, {
    okText: '確定',
    cancelText: '取消'
  });

new Vue({
    store,
    el:'#app',
    render:h=>h(App)
})

$(function(){
    var hello = () => 'Hello' 
    console.log(hello())
})
