<template>
    <!--添加抬头页面-->
    <div class="main-content">
        <!--label-position 可选值：left top right-->
        <div class="add-title">
            <mu-form ref="form" :model="form" class="mu-demo-form" label-position="left">

                <mu-form-item prop="shopName" label="店铺名称" :rules="usernameRules">
                    <mu-text-field v-model="form.shopName"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="name" label="公司名称">
                    <mu-text-field v-model="form.name"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="taxNum" label="公司税号">
                    <mu-text-field v-model="form.taxNum"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="address" label="公司地址">
                    <mu-text-field v-model="form.address"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="tel" label="公司电话">
                    <mu-text-field v-model="form.tel"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="detail" label="开票明细">
                    <mu-text-field v-model="form.detail"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="auth_code" label="登录授权码">
                    <mu-text-field v-model="form.auth_code"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="invite_num" label="邀请码">
                    <mu-text-field v-model="form.invite_num"></mu-text-field>
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
        name: "AddShop",
        data(){
            return{
                form: {
                    shopName: '',
                    name: '',
                    taxNum: '',
                    address: '',
                    tel: '',
                    detail: '',
                    auth_code: '',
                    invite_num: '',
                },
                usernameRules: [
                    { validate: (val) => !!val, message: '必须填写店铺名称'},
                    { validate: (val) => val.length >= 3, message: '店铺名称长度大于3'}
                ],
                passwordRules: [
                    { validate: (val) => !!val, message: '必须填写密码'},
                    { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
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
                    radio: '',
                    number: '',
                    address: '',
                    phone: '',
                    bank: '',
                    bank_num: '',
                    namePerson: '',
                    IDCard: '',
                    telephone: '',
                };
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../../assets/css/addShop.styl";

</style>
