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
        <!--商铺列表-->
        <div class="firm-list">
            <div class="demo-list-wrap">
                <mu-container>
                    <mu-expansion-panel v-for="item in shopList">
                        <div slot="header" class="shop-list-info">
                            <h4>{{item.name}}</h4>
                            <div><span>登录简码: </span>{{item.shopNumber}}</div>
                            <div><span>商铺名称: </span>{{item.password}}</div>
                        </div>
                        <mu-menu slot="action">
                            <mu-button flat :ripple="false">操作</mu-button>
                            <mu-list slot="content">
                                <mu-list-item button @click="checkInfo(item.id)">
                                    <mu-list-item-title>查看</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button @click="editHandle(item.id)">
                                    <mu-list-item-title>编辑</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button @click="deleteItem(item.id)">
                                    <mu-list-item-title>删除</mu-list-item-title>
                                </mu-list-item>
                            </mu-list>
                        </mu-menu>
                        <mu-button slot="action" :ripple="false" flat>预售码绑定</mu-button>
                        <mu-button slot="action" :ripple="false" flat color="primary">明细管理</mu-button>
                    </mu-expansion-panel>
                </mu-container>
            </div>
        </div>

        <!--回到顶部-->
        <nut-backtop :distance="200"></nut-backtop>
    </div>
</template>

<script>
    export default {
        name: "ShopList",
        data(){
            return{
                shopList:[
                    {
                        id: 522145566322215,
                        name: '哈哈镜',
                        shopNumber: '8MDKEID',
                        password: '111666'
                    },
                    {
                        id: 522145566323336,
                        name: '每日优鲜',
                        shopNumber: '8MDKEID',
                        password: '111666'
                    },
                    {
                        id: 522145566324421,
                        name: '盒马生鲜',
                        shopNumber: '8MDKEID',
                        password: '111666'
                    },
                    {
                        id: 522145566320021,
                        name: '安吉拉',
                        shopNumber: '8MDKEID',
                        password: '111666'
                    },


                ],
            }
        },
        mounted(){

        },
        methods:{

            addTitle(){
                this.$router.push('/shop_list/add_shop');
            },
            /**
             * 编辑商铺
             */
            editHandle(id){
                this.$router.push({path: `/shop_edit/${id}`})
            },
            /**
             * 跳转到商铺详情页，所传参数为item.id
             * @param id
             */
            checkInfo(id){
                this.$router.push({path: `/shop_detail/${id}`})
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
                    } else {
                        // this.$toast.message('点击了取消');
                    }
                });
            },
        }
    }
</script>

<style scoped lang="stylus">
    .firm-list
        margin 0 auto
        color #333!important
    header
        width 100%
        padding 0 10px 10px
        border-bottom 1px solid #f4f4f4
        display flex
        .searchInput
            width 90%

    .shop-list-info
        padding-bottom 10px
        span
            color #9e9e9e
        h4
            line-height 48px
    .demo-list-wrap
        width 100%
        background-color #ffffff
        overflow hidden
</style>


