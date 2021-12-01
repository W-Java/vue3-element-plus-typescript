// 定义loginUser中的基本属性
import {ref} from "vue"

// 对loginUser的类型进行匹配
interface User {
  email: String
  password: String
}
export const loginUser = ref<User>({
  email: '',
  password: ''
})

// 对表单校验规则的类型进行匹配
interface Rules {
  email: {
    type: string;
    message: string;
    require: boolean;
    trigger: string;
  }[];
  password: ({
    require: boolean;
    message: string;
    trigger: string;
    min?: undefined;
    max?: undefined;
  } | {
    min: number;
    max: number;
    message: string;
    require?: undefined;
    trigger?: undefined;
  })[];
}
// 表单的校验规则
export const rules = ref({
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