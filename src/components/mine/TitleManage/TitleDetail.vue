<template>
    <!--抬头详细 公司抬头详细和个人抬头略有不同-->
    <div class="main-content">
        <div class="expand-arrow">
            <mu-icon size="34" @click="isExpand" :value="isOpen?'expand_less':'expand_more'"></mu-icon>
        </div>
        <div style="padding:0 14px">
            <div class="flex-box">
                <div class="item">
                    <!--&#12288; 代表一个中文占位符-->
                    <div>名&#12288;&#12288;称</div>
                    <div>北京哈哈镜餐饮有限公司</div>
                </div>
                <div class="item">
                    <div>税&#12288;&#12288;号</div>
                    <div>911101017467012653</div>
                </div>
                <div v-show="isOpen">
                    <div class="item">
                        <div>单位地址</div>
                        <div>北京市朝阳区和平东街东土城路12号院3号楼1202</div>
                    </div>
                    <div class="item">
                        <div>电话号码</div>
                        <div>68373081</div>
                    </div>
                    <div class="item">
                        <div>开户银行</div>
                        <div>招商银行北三环支行</div>
                    </div>
                    <div class="item">
                        <div>银行账户</div>
                        <div>8622845312560021</div>
                    </div>
                </div>
            </div>
            <div class="wx-code-info">
                <mu-paper class="demo-paper" :z-depth="2">
                    <div v-show="false" class="personal"><span>姓名</span>&#12288;安吉拉</div>
                    <img class="wx-code" src="../../../assets/image/wxma.jpg" alt="二维码">
                    <div>扫描二维码，获取开票信息</div>
                    <!--<div>查询详情ID:  {{$route.params.id}}</div>-->
                </mu-paper>

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

