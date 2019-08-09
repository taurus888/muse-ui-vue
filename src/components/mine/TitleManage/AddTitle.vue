<template>
    <!--添加抬头页面-->
    <div class="main-content">
        <nut-noticebar
                text="温馨提示：在三证合一期间，企业税号大量变更。请您自行核实开票信息，避免废票。"
        ></nut-noticebar>
        <!--label-position 可选值：left top right-->
        <div class="add-title">
            <mu-form ref="form" :model="form" class="mu-demo-form" label-position="left" label-width="110">
                <mu-form-item prop="switch" label="设置默认抬头">
                    <mu-switch v-model="form.switch"></mu-switch>
                </mu-form-item>
                <mu-form-item prop="radio" label="抬头类型">
                    <mu-radio v-model="form.radio" value="0" label="单位"></mu-radio>
                    <mu-radio v-model="form.radio" value="1" label="个人"></mu-radio>
                </mu-form-item>
                <div v-if="form.radio==0">
                    <mu-form-item prop="name" class="main-param" label="抬头名称" :rules="usernameRules">
                        <mu-text-field v-model="form.name" placeholder="请输入抬头名称"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="number" label="纳税人识别号">
                        <mu-text-field v-model="form.number" placeholder="请输入纳税人识别号"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="address" label="单位地址">
                        <mu-text-field v-model="form.address" placeholder="请输入单位地址"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="phone" label="电话号码">
                        <mu-text-field v-model="form.phone" placeholder="请输入电话号码"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="bank" label="开户银行">
                        <mu-text-field v-model="form.bank" placeholder="请输入开户银行"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="bank_num" label="银行账户">
                        <mu-text-field v-model="form.bank_num" placeholder="请输入银行账户"></mu-text-field>
                    </mu-form-item>
                </div>
                <div v-if="form.radio==1">
                    <mu-form-item prop="namePerson" class="main-param" label="抬头名称" :rules="usernameRules">
                        <mu-text-field v-model="form.namePerson"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="IDCard" label="身份证号码">
                        <mu-text-field v-model="form.IDCard"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="telephone" label="电话号码">
                        <mu-text-field v-model="form.telephone"></mu-text-field>
                    </mu-form-item>
                </div>
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
        name: "AddTitle",
        data(){
            return{
                form: {
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
                },
                usernameRules: [
                    { validate: (val) => !!val, message: '必须填写用户名'},
                    { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
                ],
                passwordRules: [
                    { validate: (val) => !!val, message: '必须填写密码'},
                    { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
                ],
                argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],

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
    .add-title
        width 100%
        padding 10px 16px

    .mu-demo-form
        width: 100%

    .form-submit
        text-align: center
        .form-btn
            margin 0 8px
</style>
