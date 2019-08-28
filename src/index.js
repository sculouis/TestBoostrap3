import 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
// import 'bootstrap-select/dist/css/bootstrap-select.min.css'
import 'bootstrap-select/sass/bootstrap-select.scss'
import 'bootstrap-sass/assets/javascripts/bootstrap'
import 'bootstrap-select'
//bootstrap 3 datetimepicker沒打包到npm所以hardcard載入
import './style/bootstrap-datetimepicker.css'
import 'moment'
import './common/bootstrap-datetimepicker.min.js'

//remodal
import 'remodal/dist/remodal-default-theme.css'
import 'remodal/dist/remodal.css'
import 'remodal/dist/remodal.min.js'


// ESUN customize css
import './style/icon-style.css'
import './style/form.css'
import './style/main.css'
import './style/index.css'
import './style/myStyle.css'
// Vue Components
import Vue from 'vue'
import VueRouter from 'vue-router'
import VuejsDialog from 'vuejs-dialog';

// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import store from './common/store'
import App from './pages/App.vue';
import FormBase from './pages/FormBase.vue'
import TableAction from './pages/TableAction.vue'
import Vuelidate from 'vuelidate'



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

//使用驗證
Vue.use(Vuelidate);


//確認視窗
Vue.use(VuejsDialog, {
    okText: '確定',
    cancelText: '取消'
  });
  //使用Router
Vue.use(VueRouter);  
new Vue({
    store,
    router,
    el:'#app',
    render:h=>h(App)
});


// $(function(){
//     var hello = () => 'Hello' 
//     console.log(hello())
// })
