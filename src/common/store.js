import Vue from 'vue'
import Vuex from 'vuex'
import  tableAction from './modules/tableAction'
import  remodal from './modules/remodal'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        table: tableAction,
        pop: remodal
    }
})
