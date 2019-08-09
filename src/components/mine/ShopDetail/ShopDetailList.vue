<template>
    <!--商品明细列表页-->
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
        <!--商铺列表-->
        <div class="firm-list">
            <ul class="demo-list-wrap">
                <li class="list-item " v-for="(item,index) in shopList " :data-type="activeSwiper == index ? 1 : 0">
                    <div class="list-box"
                         @touchstart.capture="touchStart"
                         :data-index="index"
                         @touchend.capture="touchEnd"
                         @click="skip(item.id)">
                        <div class="list-content">
                            <p class="title">{{item.name}} {{item.isDefault==1?'（默认）': ''}}</p>
                        </div>
                    </div>
                    <div class="delete" :data-index="index">
                        <div @click="editItem(item.id)">设为默认</div>
                        <div @click="deleteItem(item.id,index)">删除</div>
                    </div>
                </li>
            </ul>
            <!--<div class="demo-list-wrap">-->
                <!--<mu-container>-->
                    <!--<mu-expansion-panel v-for="item in shopList">-->
                        <!--<div slot="header" class="shop-list-info">-->
                            <!--<h4>{{item.name}} {{item.isDefault==1?'（默认）': ''}}</h4>-->
                        <!--</div>-->
                        <!--<mu-button slot="action" @click="deleteItem(item.id)" :ripple="false" flat>删除</mu-button>-->
                        <!--<mu-button slot="action" @click="checkInfo(item.id)" :ripple="false" flat>查看</mu-button>-->
                        <!--<mu-button slot="action" @click="editHandle(item.id)" :ripple="false" flat color="primary">-->
                            <!--{{item.isDefault==1?'编辑':'设为默认'}}-->
                        <!--</mu-button>-->
                    <!--</mu-expansion-panel>-->
                <!--</mu-container>-->
            <!--</div>-->
        </div>

        <!--回到顶部-->
        <nut-backtop :distance="200"></nut-backtop>
    </div>
</template>

<script>
    export default {
        name: "ShopDetailList",
        data(){
            return{
                shopList:[
                    {
                        id: 522145566322215,
                        name: '餐饮',
                        isDefault: 1,
                    },
                    {
                        id: 522145566323336,
                        name: '服装',
                        isDefault: 0,
                    },
                    {
                        id: 522145566324421,
                        name: '办公用品',
                        isDefault: 0,
                    },
                    {
                        id: 522145566320021,
                        name: '礼品',
                        isDefault: 0,
                    },


                ],
                //左滑块
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
                this.$router.push('/shop_list/shop_detail_add');
            },
            /**
             * 编辑商铺
             */
            editHandle(id){
                for(let i=0;i<this.shopList.length;i++){
                    if(this.shopList[i].id == id){
                        if(this.shopList[i].isDefault == 0){
                            this.$confirm(`确定要修改${this.shopList[i].name}为默认？`, '提示信息');
                        }else{
                            this.$router.push({path: `/shop_list/shop_detail_edit/${id}`});
                        }
                    }
                }
                ;

            },
            /**
             * 删除提示：
             * 点击确定，发送删除请求，重新请求list，关闭弹框
             * 点击取消，关闭confirm弹框
             */
            deleteItem(id){
                this.$confirm(`确定要删除？${id}`, '删除提示').then(({ result }) => {
                    if (result) {
                        // this.$toast.message('点击了确定');
                        this.shopList.splice(index,1);
                    } else {
                        // this.$toast.message('点击了取消');
                    }
                    this.activeSwiper = -1;
                });
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
                    this.$router.push(`/shop_list/shop_detail/${id}`)
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


