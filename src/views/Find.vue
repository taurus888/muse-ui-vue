<template>
    <!--tab发现页面-->
    <div class="main-content find">
        <mu-container style="margin: 10px 0" v-for="item in findList">
            <mu-card style="width: 100%; margin: 0 auto;">
                <mu-card-header :title="item.nickName" :sub-title="item.dateTime">
                    <mu-avatar slot="avatar">
                        <img :src="item.headImg">
                    </mu-avatar>
                </mu-card-header>
                <mu-card-media :title="item.title" :sub-title="item.subTitle">
                    <img :src="item.headImg">
                </mu-card-media>
                <mu-card-text>{{item.text}}</mu-card-text>
                <mu-card-actions>
                    <mu-button flat><mu-icon value="favorite_border"></mu-icon></mu-button>
                    <mu-button flat><mu-icon value="share"></mu-icon></mu-button>
                    <mu-button flat><mu-icon value="thumb_up"></mu-icon></mu-button>
                </mu-card-actions>
            </mu-card>
        </mu-container>
    </div>
</template>

<script>
    export default {
        name: "Find",
        data(){
            return{
                findList:[
                    {
                        nickName: '汪小菲',
                        dateTime: '2019-12-6',
                        title: '花开四季',
                        subTitle: '李之恋',
                        headImg: require('../assets/image/headImg.png'),
                        text: '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。'
                    },
                    {
                        nickName: '李现',
                        dateTime: '2019-2-26',
                        title: '花开四季',
                        subTitle: '李之恋',
                        headImg: require('../assets/image/flower.jpg'),
                        text: '散落在指尖的阳光，调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。'
                    },
                    {
                        nickName: '杨紫',
                        dateTime: '2019-10-18',
                        title: '花开四季',
                        subTitle: '李之恋',
                        headImg: require('../assets/image/mine.jpg'),
                        text: '调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    .find
        margin 70px 0 120px 0
</style>
