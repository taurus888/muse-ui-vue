<template>
    <div>
        <footer>
            <mu-container>
                <mu-bottom-nav @change="changeNav">
                    <mu-bottom-nav-item to="/home" title="首页" icon="home"></mu-bottom-nav-item>
                    <mu-bottom-nav-item to="/find" title="发现" icon="widgets"></mu-bottom-nav-item>
                    <mu-bottom-nav-item to="/mine" title="我的" icon="person"></mu-bottom-nav-item>
                </mu-bottom-nav>
            </mu-container>
        </footer>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "Footer",
        data(){
            return{

            }
        },
        methods: {
            changeNav(val){
                // if(val == 0){
                //     this.NavBar = '主页';
                //     this.isShowNavBar = true;
                // }else if(val == 1){
                //     this.NavBar = '发现';
                //     this.isShowNavBar = true;
                // }else{
                //     this.isShowNavBar = false;
                // }
            },
            more(){
                console.log('header头部， 点击更多')
            }
        },
    }
</script>

<style scoped lang="stylus">
    footer
        width 100%
        position fixed
        bottom 0
        z-index 2
</style>
