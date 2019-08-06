<template>
    <!--tab首页-->
    <div class="main-content home">
        <div class="main">
            <img class="main-img" src="../assets/image/b1.jpg" alt="">
            <img class="main-img" src="../assets/image/b2.jpg" alt="">
        </div>
        <div>
            <mu-button class="home-btn" to="/title_list" :round="true" color="#42a5f5">
                <mu-icon value="add"></mu-icon>添加抬头
            </mu-button>
            <mu-button class="home-btn" to="/title_list" :round="true" color="#64b5f6">
                <mu-icon value="bubble_chart"></mu-icon>抬头管理
            </mu-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style scoped lang="stylus">
    .home
        height 100%
        width 100%
        .main
            margin-top 26.8%
            width 100%
            padding 10% 0
            .main-img
                vertical-align middle
                width 40%
                height auto
                margin 0 5%
    .home-btn
        width 36%
        margin 6%
</style>
