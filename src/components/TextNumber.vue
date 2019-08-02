<template>
  <input class="input h30" v-model="numVal">
</template>
<script>
export default {
    props: {value:Number},
    data() {
        return {
            val: "",
            pattern: ""
        };
    },
    mounted() {
        this.val = this.value;
    },
    computed: {
        numVal: {
            get: function () {
                var unformatValue = this.val.toString().replace(/[^0-9\.\-]+/g, "");
                if (unformatValue.length - 1 === unformatValue.indexOf(".")) {
                    return this.val;
                } else {
                    let l10nEN = new Intl.NumberFormat("en-US");
                    let result = (Number(unformatValue)).toLocaleString('en-US',{maximumFractionDigits:10});
                    if (result === "NaN") {
                        return this.val;
                    } else {
                        return (Number(unformatValue)).toLocaleString('en-US',{maximumFractionDigits:10});
                    }
                }
            },
            set: function (newVal) {
                var unformatValue = newVal.toString().replace(/[^0-9\.\-]+/g, "");
                this.$emit("input", Number(unformatValue));
                this.val = Number(unformatValue);
            }
        }
    }
};
</script>