<template>
        <div class="area-btn-right-1">
            <a  class="btn-left" :class="bgColor" @click="$emit('click',$event)" :id="id">
                <div class="bt-icon-size" :class="iconName"></div>
                <slot></slot>
            </a>
        </div>
</template>                   
<script>
export default {
    props:{id:String,iconName:String,bgColor:String}
}
</script>

