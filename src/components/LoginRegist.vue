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
      <el-button @click="handleLogin('test')" type="primary" class="submit-btn">
        提交
      </el-button>
    </el-form-item>
    <div class="tiparea">
      <p>忘记密码?<a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'LoginRegist',
  components: {},
  setup() {
    const loginUser = ref({
      email: '',
      password: ''
    })
    // 表单的校验规则
    const rules = ref({
      // 邮箱的校验规则
      email: [{
        type: 'email',
        message: 'Email error...',
        require: true,
        trigger: 'blur'
      }],
      // 密码的校验规则
      password: [{
        require: true,
        message: 'Please enter your password!',
        trigger: 'blur'
      }, {
        min: 6,
        max: 30,
        message: "password's length has to be 6 to 30 characters..."
      }]
    })
    // 触发登录方法
    const handleLogin = (formName) => {
      console.log(formName);
    }
    return {loginUser, rules, handleLogin}
  },
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