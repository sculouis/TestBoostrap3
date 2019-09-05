<template>
  <input class="input" :class="{h30:small}" v-model="val" :placeholder="placeHolder">
</template>
<script>
export default {
    props:['value','smallSize','placeHolder'],
    data() {
        return {
            val: "",
            small:false
        };
    },
    mounted() {
        this.val = this.value;
        this.small = this.smallSize;
    },
};
</script>