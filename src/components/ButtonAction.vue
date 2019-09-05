<template>
        <div class="area-btn-right-1">
            <a  class="btn-left" :class="bgColor" v-on:click="openRemodal(remodalId)" :id="remodalId">
                <div class="bt-icon-size" :class="iconName"></div>
                <slot></slot>
            </a>
        </div>
</template>                   
<script>
import { mapMutations } from 'vuex'
export default {
    props:{remodalId:String,iconName:String,bgColor:String},
    methods:{...mapMutations(['openRemodal'])
    },
}
</script>

