<template>
    <div>
        <NavBar></NavBar>
        <BreadCrumb>
        </BreadCrumb>
        <div class="container" role="main">
            <router-view></router-view>
        </div> <!-- /container -->
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
import BreadCrumb from './BreadCrumb.vue'
export default {
    components:{NavBar,BreadCrumb}
};
</script>

<style>

</style>
