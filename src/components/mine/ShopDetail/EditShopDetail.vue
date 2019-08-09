<template>
    <!--编辑商品明细页面-->
    <div class="main-content">
        <!--label-position 可选值：left top right-->
        <div class="add-title">
            <mu-form ref="form" :model="form" class="mu-demo-form" label-position="top">
                <mu-form-item prop="switch" label="设置默认明细">
                    <mu-switch v-model="form.switch"></mu-switch>
                </mu-form-item>

                <mu-form-item prop="shopName" label="货物或应税劳务、服务名称" :rules="usernameRules">
                    <mu-text-field v-model="form.shopName"></mu-text-field>
                </mu-form-item>

                <div class="form-submit">
                    <mu-button class="form-btn" @click="clear">重置</mu-button>
                    <mu-button class="form-btn" color="primary" @click="submit">提交</mu-button>
                </div>
            </mu-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddShopDetail",
        data(){
            return{
                form: {
                    shopName: '办公用品',
                    switch: false,
                },
                usernameRules: [
                    { validate: (val) => !!val, message: '必须填写店铺名称'},
                    { validate: (val) => val.length >= 3, message: '店铺名称长度大于3'}
                ],
            }
        },
        methods:{
            submit () {
                this.$refs.form.validate().then((result) => {
                    console.log('form valid: ', result)
                });
            },
            clear () {
                this.$refs.form.clear();
                this.form = {
                    switch: false,
                    name: '',
                };
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../../assets/css/addShop.styl";


</style>
