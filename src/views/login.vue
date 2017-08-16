<template>
  <div class="login-page">
    <div class="login-mark" @click="$emit('close')"></div>
    <div class="login-form">
      <div class="login-header">登录</div>
      <div class="login-body">
        <div class="input-item">
          <span>用户名:</span>
          <input type="text" v-model="username">
        </div>
        <div class="input-item">
          <span>密码:</span>
          <input type="password" v-model="password">
        </div>
      </div>
      <div class="login-footer">
        <button class="login-btn" @click="loginSystem">登录</button>
        <button class="login-btn" @click="$emit('close')">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
import services from '../services'
export default {
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginSystem: function () {
      if (this.username && this.password) {
        let params = {
          username: this.username,
          password: this.password
        }
        services.loginSystem(params).then((response) => {
          if (response.data.code === 200) {
            alert('登陆成功!')
            this.$store.commit('login', response.data.result.username)
            this.$emit('close')
          } else {
            alert(response.data.msg)
          }
        })
      } else {
        alert('请输入用户名和密码!')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .login-mark {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .login-form {
    width: 300px;
    line-height: 40px;
    background: #FFF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: '微软雅黑';
    padding: 20px 30px 20px 10px;
    .login-header {
      font-size: 16px;
    }
    .login-body {
      .input-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        margin: 0 auto 20px auto;
        span {
          flex: 1;
        }
        input {
          flex: 3;
          line-height: 30px;
          padding:0 5px;
          font-size:15px;
        }
      }
    }
    .login-footer {
      .login-btn {
        color: #FFF;
        background-color: #08D088;
        border: 0;
        padding: 10px 20px;
        &:active {
          background-color: #07B477;
        }
      }
    }
  }
}
</style>
