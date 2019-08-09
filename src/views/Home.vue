<template>
    <!--tab首页-->
    <div class="main-content home">

        <div class="main">
            <div class="banner">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><img class="bannerImg" :src="slide" alt=""></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>

            </div>
            <nut-noticebar
                    text="最新公告：在三证合一期间，企业税号大量变更。请您自行核实开票信息，避免废票。"
            ></nut-noticebar>
            <div style="text-align: center;margin-top: 14px">
                <mu-container class="demo-container">
                    <mu-row gutter>
                        <mu-col span="4">
                            <div class="grid-cell">
                                <img class="index-center-img" src="../assets/image/index/11.jpg" alt="">
                            </div>
                        </mu-col>
                        <mu-col span="4">
                            <div class="grid-cell">
                                <img class="index-center-img" src="../assets/image/index/13.jpg" alt="">
                            </div>
                        </mu-col>
                        <mu-col span="4">
                            <div class="grid-cell">
                                <img class="index-center-img" src="../assets/image/index/12.jpg" alt="">
                            </div>
                        </mu-col>
                    </mu-row>
                </mu-container>
            </div>
            <h3 style="margin: 0;padding-left: 14px;padding-top: 6px"><mu-icon right value="send" size="16"></mu-icon> 最新资讯</h3>
            <div class="index-news">
                <div class="newsList" v-for="item in newsList">
                    <div class="flex-item-newsList">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="flex-item-newsList text">
                        <!--<h4>{{item.title}}</h4>-->
                        <p>{{item.text}}</p>
                        <p style="color: #666666;position: absolute;bottom: 10px;">{{item.date}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay: true,
                    loop: true,
                },
                swiperSlides: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565168097720&di=90da177f842d4d5d1067d7d20f3448c8&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a2265543e7340000019ae95db540.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565168123838&di=8c63f9f64498cd7acb14e94df8562891&imgtype=0&src=http%3A%2F%2Fsinastorage.com%2Fstorage.caitou.sina.com.cn%2Fproducts%2F201707%2F2d3fcf99e7453b725b851becea755b18.jpeg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565168150737&di=2a576e589d0ddd8e8bc7864c8d412cf1&imgtype=0&src=http%3A%2F%2Fwww.hnstrip.com%2Fuploads%2Fallimg%2F160305%2F1-160305142S34O.jpg',
                    ],
                newsList:[
                    {
                        image: require('../assets/image/index/index_11.jpg'),
                        title: 'Flutter',
                        text: '我的发票——「慧财税」官方社群，财税人员的成长基地！',
                        date: '2019-08-07'
                    },
                    {
                        image: require('../assets/image/index/index_14.jpg'),
                        title: 'REACT-Muse',
                        text: '交了5年社保，也不能享受社保待遇，交的钱可以取出来么？',
                        date: '2019-08-07'
                    },
                    {
                        image: require('../assets/image/index/index_17.jpg'),
                        title: 'TypeScript',
                        text: '恭喜！税务总局将取消发票丢失登报声明，报税盘锁死网上将可解锁！',
                        date: '2019-08-07'
                    }
                ]
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {

        },
        methods:{

        }
    }
</script>

<style scoped lang="stylus">
    .home
        height 100%
        width 100%
        margin-top 56px
        .main
            width 100%
            .main-img
                width 90px
                height 70px

    .banner
        width 100%
        height 170px
        overflow hidden
    .bannerImg
        width 100%
        height 160px
    .main-menu
        text-align center
        width 100%
        display flex
        padding 30px
        color #ffffff
        .flex-item-index
            position relative
            padding 30px 0 20px
            flex-grow 1
            background-color #e8eaf6
            box-shadow 0 0 8px #e3f2fd
            border-radius 6px
            .title
                position absolute
                top -40px
                width 80px
                height 80px
                border-radius 40px
                left 50%
                margin-left -40px
                background-color #bbdefb
                box-shadow 0 4px 10px #78909c
                text-align center
                line-height 80px
            .scan
                background-color #F6C026
        div:last-child
            margin-left 50px
    .index-news
        margin 6px 0 100px
        .newsList
            background-color #ffffff
            box-shadow 0 4px 8px #cfd8dc
            width 94%
            height 120px
            border-radius 6px
            margin 0 auto
            margin-bottom 14px
            display flex
            .flex-item-newsList
                flex-grow 1
                padding 10px
                img
                   width 140px
                   height 100px
            .text
                text-align left
                position relative
    .index-center-img
        width 100%
        height 140px
        box-shadow 0 4px 8px #b0bec5
        border-radius 6px

</style>
