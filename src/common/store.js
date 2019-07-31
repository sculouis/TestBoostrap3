import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const tableAction = {
    state: {
        "model":[]
      },
        //取得屬性
        getters: {
            dataLength(state){
                return state.model.length + 1
            }
            },
        //註冊要update值的方法類似event,用commit呼叫
        mutations: {
            //取得初始資料
            initData(state,data) {
                state.model = data
            },
            delObject(state,no) {
                let delObj = state.model.find(element => element.no === no)
                delObj.isdelete = 1
            },
            addObject(state, obj) {
                state.model.push(obj)
            },
            setIsDetailOpen(state,objBool) {
                state.model.forEach(element => element.isDetailOpen = objBool);
            }
        },
        //非同步取得資源放在這，例如呼叫Server WebAPI，用dispatch呼叫
        actions: {
    
        }
}

export default new Vuex.Store({
    modules:{
        tableAction
    }
})
