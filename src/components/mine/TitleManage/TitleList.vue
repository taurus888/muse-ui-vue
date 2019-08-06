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
            <div class="demo-list-wrap">
                <mu-list toggle-nested v-for="item in firmList" @change="change">
                    <mu-list-item button :ripple="false" nested :open="item.isOpen" :value="item.id">
                        <mu-list-item-action>
                            <mu-avatar color="#bbdefb">{{item.type==0?'个':'公'}}</mu-avatar>
                        </mu-list-item-action>
                        <mu-list-item-title>{{item.name}} {{item.isDefault==1?"(默认)":""}}</mu-list-item-title>
                        <mu-list-item-action>
                            <mu-icon class="toggle-icon" size="24" :value="item.isOpen?'keyboard_arrow_up':'keyboard_arrow_down'"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item button :ripple="false" slot="nested">
                            <mu-list-item-title><mu-button :ripple="false" flat @click="deleteItem(item.id)">删除</mu-button></mu-list-item-title>
                            <mu-list-item-title><mu-button :ripple="false" flat>编辑</mu-button></mu-list-item-title>
                            <mu-list-item-title><mu-button :ripple="false" flat @click="checkInfo(item.id)" color="primary">查看</mu-button></mu-list-item-title>
                        </mu-list-item>
                    </mu-list-item>
                </mu-list>
            </div>
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
                        type: 0,//0个人 1公司
                        isOpen: false,
                        isDefault: 1,//是否是默认抬头
                    },
                    {
                        id: 522145566323336,
                        name: '北京哈哈镜餐饮有限公司',
                        type: 1,//0个人 1公司
                        isOpen: false,
                        isDefault: 0,
                    },
                    {
                        id: 522145566324421,
                        name: '北京联合美邦教育有限公司',
                        type: 1,//0个人 1公司
                        isOpen: false,
                        isDefault: 0,
                    },
                    {
                        id: 522145566320021,
                        name: '安吉拉',
                        type: 0,//0个人
                        isOpen: false,
                        isDefault: 0,
                    },


                ],
                open: false,
                panel: ''
            }
        },
        mounted(){

        },
        methods:{
            //切换列表中展开折叠上下箭头
            change(val) {
                for(let i in this.firmList){
                    if(this.firmList[i].id == val){
                        this.firmList[i].isOpen = !this.firmList[i].isOpen
                    }
                }
            },
            addTitle(){
                this.$router.push('/home/title_list/add_title');
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
            /**
             * 跳转到抬头详情页，所传参数为item.id
             * @param id
             */
            checkInfo(id){
                this.$router.push({path: `/title_detail/${id}`})
            }
        }
    }
</script>

<style scoped lang="stylus">
    .firm-list
        margin 0 auto
        color #333!important
    .list-icon
        width 40px
        height 40px
    header
        width 100%
        padding 0 10px 10px
        border-bottom 1px solid #f4f4f4
        display flex
        .searchInput
            width 90%


</style>
<style>
    .demo-list-wrap {
        width: 100%;
        background-color: #ffffff;
        overflow: hidden;
    }
</style>
