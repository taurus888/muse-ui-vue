<template>
    <!--抬头列表页-->
    <div class="main-content">
        <header>
            <div class="searchInput">
                <nut-searchbar
                        placeText="请输入关键字"
                        :hasIcon="true"
                        :hasTextButton="true"
                        textInfo=" "
                        customClass="search_demo"
                ></nut-searchbar>
            </div>
            <div style="margin-top: 10px" @click="addTitle">
                <img style="width: 26px" src="../../../assets/image/add.png" alt="">
            </div>
        </header>

        <div class="firm-list">
            <ul class="demo-list-wrap">
                <li class="list-item " v-for="(item,index) in firmList " :data-type="activeSwiper == index ? 1 : 0">
                    <div class="list-box"
                         @touchstart.capture="touchStart"
                         :data-index="index"
                         @touchend.capture="touchEnd"
                         @click="skip(item.id)">
                        <mu-avatar color="#bbdefb">
                            <mu-icon :value="item.type==0?'person':'people'"></mu-icon>
                        </mu-avatar>
                        <div class="list-content">
                            <p class="title">{{item.name}}</p>
                        </div>
                    </div>
                    <!--<div class="delete" @click="deleteItem" :data-index="index">删除</div>-->
                    <div class="delete" :data-index="index">
                        <div @click="editItem(item.id)">编辑</div>
                        <div @click="deleteItem(item.id,index)">删除</div>
                    </div>
                </li>
            </ul>
        </div>

        <!--回到顶部-->
        <nut-backtop :distance="200"></nut-backtop>
    </div>
</template>

<script>
    export default {
        name: "TitleList",
        data(){
            return{
                firmList:[
                    {
                        id: 522145566322215,
                        name: '刘谦',
                        imgUrl : require('../../../assets/image/logo.png')  ,
                        type: 0,//0个人 1公司
                        isOpen: false,
                        isDefault: 1,//是否是默认抬头
                    },
                    {
                        id: 522145566323336,
                        name: '北京哈哈镜餐饮有限公司',
                        imgUrl : require('../../../assets/image/logo.png')  ,
                        type: 1,//0个人 1公司
                        isOpen: false,
                        isDefault: 0,
                    },
                    {
                        id: 522145566324421,
                        name: '北京联合美邦教育有限公司',
                        imgUrl : require('../../../assets/image/logo.png') ,
                        type: 1,//0个人 1公司
                        isOpen: false,
                        isDefault: 0,
                    },
                    {
                        id: 522145566320021,
                        name: '安吉拉',
                        imgUrl : require('../../../assets/image/logo.png') ,
                        type: 0,//0个人
                        isOpen: false,
                        isDefault: 0,
                    },


                ],
                open: false,
                panel: '',
                startX : 0,
                endX : 0,
                activeSwiper: -1, //当前活动的滑块
            }
        },
        mounted(){

        },
        methods:{
            addTitle(){
                this.$router.push('/title_list/add_title');
            },
            /**
             * 编辑抬头
             */
            editItem(id){
                this.$router.push(`/title_list/title_edit/${id}`);
            },
            /**
             * 删除提示：
             * 点击确定，发送删除请求，重新请求list，关闭弹框
             * 点击取消，关闭confirm弹框
             */
            deleteItem(id,index){
                this.$confirm(`确定要删除？${id}`, '删除提示').then(({ result }) => {
                    if (result) {
                        // this.$toast.message('点击了确定');
                        this.firmList.splice(index,1);
                    } else {
                        // this.$toast.message('点击了取消');
                    }
                    this.activeSwiper = -1;
                });
            },
            /**
             * 跳转到抬头详情页，所传参数为item.id
             * @param id
             */
            checkInfo(id){
                this.$router.push({path: `/title_detail/${id}`})
            },
            /**
             * 跳转
             * 1、如果当前展开右侧菜单情况，点击则折叠菜单
             * 2、如果右侧菜单折叠状态，点击则跳转至详情页
             */
            skip(id){
                if( this.checkSlide() ){
                    this.activeSwiper = -1;
                }else{
                    this.$router.push(`/title_detail/${id}`)
                }
            },
            //滑动开始
            touchStart(e){
                this.startX = e.touches[0].clientX;
            },
            //滑动结束
            touchEnd(e){
                this.endX = e.changedTouches[0].clientX;
                if(this.startX - this.endX > 30){
                    this.activeSwiper = e.currentTarget.dataset.index;
                }

                if(this.startX - this.endX < -30){
                    this.activeSwiper = -1;
                }

                this.startX = 0;
                this.endX = 0;
            },
            //判断当前是否有滑块处于滑动状态
            checkSlide(){
                return this.activeSwiper > -1;
            },

        }
    }
</script>

<style scoped lang="stylus">
    @import "../../../assets/css/titleList.styl";



</style>


