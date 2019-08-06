<template>
    <!--抬头详细 公司抬头详细和个人抬头略有不同-->
    <div class="main-content">
        <div style="padding:0 14px">
            <div class="expand-arrow">
                <mu-icon size="34" @click="isExpand" :value="isOpen?'expand_less':'expand_more'"></mu-icon>
            </div>
            <div class="flex-box">
                <div class="item">
                    <div>店铺名称</div>
                    <div>哈哈镜</div>
                </div>
                <div class="item">
                    <div>商铺简码</div>
                    <div>8MDKEID</div>
                </div>
                <div v-show="isOpen">
                    <div class="item">
                        <div>公司名称</div>
                        <div>北京哈哈镜餐饮有限公司</div>
                    </div>
                    <div class="item">
                        <div>公司税号</div>
                        <div>8622845312560021</div>
                    </div>
                    <div class="item">
                        <div>公司地址</div>
                        <div>招商银行北三环支行12号</div>
                    </div>
                    <div class="item">
                        <div>公司电话</div>
                        <div>68373081</div>
                    </div>
                </div>

            </div>
            <div class="wx-code-info">
                <img class="wx-code" src="../../../assets/image/wxma.jpg" alt="二维码">
                <div>扫描二维码，获取商家信息</div>
                <div>查询详情ID:  {{$route.params.id}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TitleDetail",
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
    @import "../../../assets/css/titleDetail.styl";

</style>

