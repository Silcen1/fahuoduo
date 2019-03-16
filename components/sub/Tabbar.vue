<template>
  <div class="Tabbar">
    <mt-tabbar class="bottom">
        <mt-tab-item id="tab1">
            <img slot="icon" src="../../assets/logo.png" @click="go_index">
            tab1
        </mt-tab-item>
        <mt-tab-item id="tab2">
            <img slot="icon" src="../../assets/logo.png">
            tab2
        </mt-tab-item>
        <mt-tab-item id="tab3">
            <img slot="icon" src="../../assets/logo.png" @click="go_publish">
            tab3
        </mt-tab-item>
        <mt-tab-item id="tab4">
            <img slot="icon" src="../../assets/logo.png" @click="go_my"> 
            tab4
        </mt-tab-item>
    </mt-tabbar>    
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        go_index:function(){
            this.$router.push('/');
        },
        go_my:function(){
            this.$router.push('../My');
        },
        go_publish:function(){
            this.$router.push('../Publish');
        }
    }
}

</script>
<style scoped>
.bottom{
    position: fixed;
    bottom: 0px;
}
</style>