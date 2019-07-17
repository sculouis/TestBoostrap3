import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-select/dist/css/bootstrap-select.min.css'
import 'bootstrap'
import 'bootstrap-select'
import Vue from 'vue'
import App from './components/App.vue';

new Vue({
    el:'#app',
    render:h=>h(App)
})

$(function(){
    var hello = () => 'Hello' 
    console.log(hello())
})