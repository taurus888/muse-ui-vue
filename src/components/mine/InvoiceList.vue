<template>
    <!--开票记录-->
    <div class="main-content">
        <div class="invoiceWraper" v-for="item in invoiceList">
            <div class="flex-box flex-top">
                <div>开票金额</div>
                <div>￥{{item.amount}}</div>
            </div>
            <div class="flex-box">
                <div>发票号码</div>
                <div>{{item.number}}</div>
            </div>
            <div class="flex-box">
                <div>发票抬头</div>
                <div>{{item.title}}</div>
            </div>
            <div class="flex-box">
                <div>发票明细</div>
                <div>{{item.detail}}</div>
            </div>
            <div class="flex-box">
                <div>开票时间</div>
                <div>{{item.createTime}}</div>
            </div>
            <div class="flex-box">
                <mu-button flat large @click="deleteItem(item.id)" :ripple="false">删除</mu-button>
                <mu-button flat large :ripple="false" color="#2196f3">操作</mu-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InvoiceList",
        data(){
            return{
                invoiceList:[
                    {
                        id: 22155665,
                        amount: '2015',
                        title: '北京金字塔教育培训有限公司',
                        createTime: '2019-7-15',
                        detail: '办公用品',
                        number: '2019071254586225'
                    },
                    {
                        id: 22155020,
                        amount: '1005',
                        title: '北京一加一有限公司',
                        createTime: '2019-7-15',
                        detail: '视频',
                        number: '2019071254586225'
                    },
                    {
                        id: 22155112,
                        amount: '8855',
                        title: '北京奥特莱斯有限公司',
                        createTime: '2019-7-15',
                        detail: '服饰',
                        number: '2019071254586225'
                    }
                ]
            }
        },
        methods:{
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
    .invoiceWraper
        background-color #ffffff
        padding 0 14px
        color #999999
        margin-bottom 20px
        .flex-box
            width 100%
            display flex
            line-height 42px
            div
                flex-grow 1
            button
                flex-grow 1
                border-top 1px solid #f1f1f1
                box-sizing border-box
            button:last-child
                border-left 1px solid #f1f1f1
            div:last-child
                text-align right
        .flex-top
            border-bottom 1px solid #f1f1f1
            padding 4px 0
            font-size 16px
            div:last-child
                color #333333
                font-size 20px
</style>
