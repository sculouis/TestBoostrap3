import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-select/dist/css/bootstrap-select.min.css'
import 'bootstrap'
import 'bootstrap-select'
//bootstrap 3 datetimepicker沒寫npm所以手動載入
import './style/bootstrap-datetimepicker.css'
import 'moment'
import './common/bootstrap-datetimepicker.min.js'
// for Esun
import './style/icon-style.css'
import './style/form.css'
import './style/main.css'
import './style/index.css'
import './style/myStyle.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VuejsDialog from 'vuejs-dialog';

// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import store from './common/store'
import App from './components/App.vue';
import FormBase from './pages/FormBase.vue'
import TableAction from './pages/TableAction.vue'

// Tell Vue to install the plugin.
const routes = [
  { path: '/formbase', component: FormBase },
  { path: '/table', component: TableAction }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VuejsDialog, {
    okText: '確定',
    cancelText: '取消'
  });
Vue.use(VueRouter);  
new Vue({
    store,
    router,
    el:'#app',
    render:h=>h(App)
})

// $(function(){
//     var hello = () => 'Hello' 
//     console.log(hello())
// })
