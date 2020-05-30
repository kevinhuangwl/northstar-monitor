<template>
    <div class="common">
        <div class="form-area">
            <div class="title">北极星交易平台</div>
            <div class="sub-title">监控端</div>
            <div class="divider"></div>
            <el-form ref="form" :model="form" label-width="200px">
                <div class="input-frame">
                    <el-form-item label="账户：" >
                        <el-input v-model="form.userName" clearable></el-input>
                    </el-form-item>
                </div>
                <div class="input-frame">
                    <el-form-item label="密码：">
                        <el-input v-model="form.password" type="password" ></el-input>
                    </el-form-item>
                </div>
            </el-form>
            <el-button type="info" @click="confirm">登陆</el-button>
        </div>
    </div>
</template>

<script>
    import '../assets/index.css'
    export default {
        name: "login-view",
        data() {
            return {
                form: {
                    userName: '',
                    password: '',
                }
            }
        },
        methods:{
            confirm(){
                let pass = this.form.userName == 'admin' && this.form.password == '123456'
                if(pass){
                    this.$emit('login')
                    return
                }
                this.$message.error({
                    message:'用户或密码错误',
                    customClass: 'message-custom'
                });
            }
        }
    }
</script>

<style scoped>

    .input-frame, .el-button {
        border: 2px solid black;
        margin-bottom: 0.5em;
        border-radius: 0.1em;
    }
    .title, .sub-title{
        font-size: 1.8rem;
        color: white;
    }
    .form-area {
        margin: 0px auto;
        padding-top: 300px;
        width: 60%;
    }
    .divider{
        height: 2em;
    }

    .el-form-item{
        margin-bottom: 0px;
    }
    .el-button, .input-frame /deep/ .el-form-item__label, .input-frame /deep/ .el-form-item__content, .input-frame /deep/ .el-form-item__content /deep/ .el-input__inner{
        font-size: 1rem;
        line-height: 2em;
        height: 2em;
        border: none;
        background-color: #545c64;
        color: #d5d5d5;
    }

    .el-button {
        width: 100%;
        padding: 0px;
        background-color: #6e6e6e;
    }
    /*.el-button:focus,.el-button:hover{*/
        /*background-color: #6e6e6e;*/
        /*color: #d5d5d5;*/
    /*}*/
</style>
