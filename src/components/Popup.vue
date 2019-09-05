<template>
    <div>
        <ButtonAction :bgColor="bgColor"  :iconName="iconName"  :remodalId="remodalId">{{buttonName}}</ButtonAction>
        <Remodal :remodalId="remodalId" :title="title"></Remodal> 
    </div>
</template>
<script>
    import ButtonAction from '../components/ButtonAction.vue'
    import Remodal from '../components/Remodal.vue'
export default {
    components:{ButtonAction,Remodal},
    props:{bgColor:String,iconName:String,remodalId:String,buttonName:String,title:String}
}
</script>

