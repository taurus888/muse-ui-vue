<template>
    <!--商品明细详情-->
    <div class="main-content">
        <div style="padding:0 14px">
            <div style="text-align: right;margin-bottom: 16px">
                <mu-button round color="primary">编 辑</mu-button>
            </div>
            <div>
                <div class="flex-wrap">
                    <!--&#12288; 代表一个中文占位符-->
                    <div class="flex-item">货物或应税劳务、服务名称：</div>
                    <div>办公用品</div>
                </div>
                <div class="flex-wrap">
                    <div class="flex-item">是否为默认明细：</div>
                    <div>是</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopDetail",
        data () {
            return {
                active1: 0,
                isOpen: false,
            };
        },
        methods:{
            isExpand(){
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>

<style scoped lang="stylus">
    .flex-wrap
        display flex
        line-height 32px
        div
            flex-grow 1
        div:first-child
            width 80%
        div:last-child
            width 20%
            text-align right
</style>

