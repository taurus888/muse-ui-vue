<template>
    <!--tab发现页面-->
    <div class="main-content find">
        <mu-container style="margin: 10px 0" v-for="(item,index) in findList">
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
                    <mu-button flat :ripple="false" @click="addLike(index)">
                        <mu-icon value="favorite" :color="item.isLike?'#f48fb1':'#b0bec5'"></mu-icon>
                    </mu-button>
                    <mu-button flat :ripple="false">
                        <mu-icon value="share"></mu-icon>
                    </mu-button>
                    <mu-button flat :ripple="false">
                        <mu-icon value="thumb_up" color="#b0bec5"></mu-icon>
                    </mu-button>
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
                        text: '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。',
                        isLike: true,
                    },
                    {
                        nickName: '李现',
                        dateTime: '2019-2-26',
                        title: '花开四季',
                        subTitle: '李之恋',
                        headImg: require('../assets/image/flower.jpg'),
                        text: '散落在指尖的阳光，调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。',
                        isLike: false
                    },
                    {
                        nickName: '杨紫',
                        dateTime: '2019-10-18',
                        title: '花开四季',
                        subTitle: '李之恋',
                        headImg: require('../assets/image/mine.jpg'),
                        text: '调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。',
                        isLike: true
                    }
                ]
            }
        },
        methods:{
            addLike(index){
                this.findList[index].isLike = !this.findList[index].isLike
            }
        }
    }
</script>

<style scoped lang="stylus">
    .find
        margin 70px 0 120px 0
</style>
