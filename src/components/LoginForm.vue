<template>
  <el-form
    ref="loginForm"
    :rules="rules"
    :model="loginUser"
    label-width="120px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="loginUser.email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="handleLogin('loginForm')" type="primary" class="submit-btn">
        提交
      </el-button>
    </el-form-item>
    <div class="tiparea">
      <p>忘记密码?<a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script>
import {loginUser, rules} from "../utils/loginValidators";

export default {
  name: 'LoginRegist',
  components: {},
  setup() {
    return {loginUser, rules}
  },
  methods: {
    // 触发登录方法
    handleLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.loginForm {
  margin: 30px 70px 470px 70px;
  background-color: #fff;
  padding: 80px 80px 40px 40px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}

.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}

.tiparea p a {
  color: #409eff;
}
</style>