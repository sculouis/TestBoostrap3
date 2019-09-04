<template>
  <input class="input" :class="{h30:small}" v-model="val">
</template>
<script>
export default {
    props:['value','smallSize'],
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