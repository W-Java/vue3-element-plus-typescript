<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="400px">Aside</el-aside>
        <el-main>
          <login-regist/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LoginRegist from "../components/LoginRegist";
export default {
  name: "index",
  components: {LoginRegist}
}
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 700px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 700px;
}

</style>