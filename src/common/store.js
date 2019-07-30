import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
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

export default new Vuex.Store({
  state: {
    model
  },
    //取得屬性
    getters: {
        dataLength(state){
            return state.model.datas.length + 1
        }
        },
    //註冊要update值的方法類似event,用commit呼叫
    mutations: {
        delObject(state,no) {
            let delObj = state.model.datas.find(element => element.no === no)
            delObj.isdelete = 1
        },
        addObject(state, obj) {
            state.model.datas.push(obj)
        },
        setIsDetailOpen(state,objBool) {
            state.model.datas.forEach(element => element.isDetailOpen = objBool);
        }
    },
    //非同步取得資源放在這，例如呼叫Server WebAPI，用dispatch呼叫
    actions: {

    }

})
