<template>
  <div class="login-box">
    <el-form :model="userInfo" :rules="rules" ref="userInfo" label-width="70px" label-position="left">
      <el-form-item label="用户名" prop="userName">
        <el-input type = "text" v-model="userInfo.userName"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type = "password" v-model="userInfo.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userInfo')">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      userInfo: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }, {
            min: 2,
            max: 10,
            message: '长度在 2 到 20 个字符'
          },
          {
            pattern: /^[a-zA-Z]([-_a-zA-Z0-9]{2,10})$/,
            message: '以字母开头，长度在2-20之间， 只能包含字符、数字和下划线'
          }
          // {
          //   pattern: /^[\u4E00-\u9FA5]+$/,
          //   message: '用户名只能为中文'
          // }
          // { pattern:/^[a-zA-Z]w{1,4}$/, message: '以字母开头，长度在2-5之间， 只能包含字符、数字和下划线'}
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }, {
            min: 3,
            max: 30,
            message: '长度在 3 到 30 个字符'
          }, {
            pattern: /^(\w){3,20}$/,
            message: '只能输入3-20个字母、数字、下划线'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(userInfo) {
      this.$refs[userInfo].validate((valid) => {
        if (valid) {
          // alert('submit!')
          this.$store.dispatch('Login', this.userInfo).then(res => {
            this.$router.push({
              path: '/'
            })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-box{
  display: -webkit-flex;
  display: flex;
  height:300px;
  width:40%;
  margin:0 auto;
  background: #c0C4E0;
  justify-content: center;
  align-items:center;
  .el-button--primary{
    background:#409eff;
    border-color: #409eff;
  }
}
</style>

