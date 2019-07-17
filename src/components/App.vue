<template>
<div>
<nav-bar></nav-bar>
  <h2>基本控件</h2>
  <div class="panel panel-default">
      <div class="panel-body">
          <div class="row">
              <div class="col-md-4 col-sm-4">
                  <div class="form-group">
                      <label>選擇欄位</label>
                      <selecter v-model="val1"></selecter>
                  </div>
              </div>
              <div class="col-md-4 col-sm-4">
                  <div class="form-group">
                      <label>選擇欄位</label>
                      <selecter v-model="val2"></selecter>
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
</div>
</template>

<script>
    import NavBar from './NavBar.vue'
    import Selecter from './Selecter.vue'
    import TextNumber from './TextNumber.vue'
    export default {
        components: {
            Selecter,
            TextNumber,
            NavBar
        },
        data() {
            return {
                val1: "",
                val2: "",
                numValue: 123456.12
            };
        },
        mounted() {},
        updated() {
            console.log(`parent val1:${this.val1}`)
            console.log(`parent val2:${this.val2}`)
        }
    };
</script>

<style>

</style>
