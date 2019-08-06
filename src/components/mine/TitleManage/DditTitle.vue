<template>
    <!--编辑抬头页面-->
    <div class="main-content">
        <div class="add-title">
            <mu-form ref="form" :model="form" class="mu-demo-form" label-position="left" label-width="110">
                <div v-if="form.radio==0">
                    <mu-form-item prop="name" label="抬头名称" :rules="usernameRules">
                        <mu-text-field v-model="form.name"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="number" label="纳税人识别号">
                        <mu-text-field v-model="form.number"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="address" label="单位地址">
                        <mu-text-field v-model="form.address"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="phone" label="电话号码">
                        <mu-text-field v-model="form.phone"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="bank" label="开户银行">
                        <mu-text-field v-model="form.bank"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="bank_num" label="银行账户">
                        <mu-text-field v-model="form.bank_num"></mu-text-field>
                    </mu-form-item>
                </div>
                <div v-if="form.radio==1">
                    <mu-form-item prop="namePerson" label="抬头名称" :rules="usernameRules">
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
        mounted(){
            this.form = {
                name: '北京哈哈镜餐饮有限公司',
                radio: '0',
                number: '911101017467012653',
                address: '北京市朝阳区和平东街东土城路12号院3号楼1202',
                phone: '68373081',
                bank: '招商银行北三环支行',
                bank_num: '8622845312560021',
                namePerson: '安吉拉',
                IDCard: '4102231989025456663',
                telephone: '13200000000',
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
