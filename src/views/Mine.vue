<template>
    <!--tab 我的页面-->
    <div class="mine">
        <div>
            <img class="mine-bg" src="../assets/image/mine.jpg" alt="">
            <div class="mine-info">
                <img class="headImg" src="../assets/image/headImg.png" alt="">
                <div style="font-weight: 600">萤火的珠光</div>
            </div>
        </div>
        <div class="func-list">
            <mu-list>
                <mu-list-item button :ripple="false" to="/title_list">
                    <mu-list-item-action>
                        <mu-icon value="drafts"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>抬头管理</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button :ripple="false" to="/invoice_list">
                    <mu-list-item-action>
                        <mu-icon value="send"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>开票记录</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button :ripple="false" to="/shop_list">
                    <mu-list-item-action>
                        <mu-icon value="inbox"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>店铺管理</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button :ripple="false">
                    <mu-list-item-action>
                        <mu-icon value="grade"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>我的收藏</mu-list-item-title>
                </mu-list-item>
            </mu-list>
        </div>

    </div>
</template>

<script>

    export default {
        name: "Mine",
        data(){
            return{
                open: 'send'
            }
        }
    }
</script>

<style scoped lang="stylus">
    .search-input
        background-color #ffffff
        padding 10px
    .mine-bg
        width 100%
        height 180px
    .mine-info
        margin -44px auto
        text-align center
        .headImg
            width 80px
            height 80px
            border-radius 40px
            border 1px solid #ffffff
            box-shadow 0 0 6px #999999
    .func-list
        margin-top 50px
</style>

