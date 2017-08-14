<template>
  <header class="header">
    <div class="system-title">文档管理系统</div>
    <div class="user-group" v-if="username" @mouseover="isShowUserList=true" @mouseout="isShowUserList=false">
      <a href="javascript:void(0)" class="user-info">
        <!-- <i class="iconfont icon-weibiaoti1"></i> -->
        {{username}}
        <i class="iconfont icon-jiantouxia"></i>
      </a>
      <div class="user-list" v-show="isShowUserList">
        <div class="user-list-item">修改密码</div>
        <div class="user-list-item" @click="logout">退出</div>
      </div>
    </div>
    <div class="user-group" v-else>
      <a href="javascript:void(0)" class="user-info" @click="isShowLogin=true">
        <!-- <i class="iconfont icon-weibiaoti1"></i> -->
        登录
      </a>
      <Login v-if="isShowLogin" @close="isShowLogin=false"></Login>
    </div>
  </header>
</template>
<script>
import Login from '../login.vue'
import services from '../../services'
export default {
  name: 'header',
  components: {
    Login
  },
  computed: {
    username: function () {
      return this.$store.state.username
    }
  },
  data: function () {
    return {
      isShowUserList: false, // 是否显示用户列表
      isShowLogin: false  // 是否显示登录页面
    }
  },
  methods: {
    logout: function () {
      if (confirm('确认退出系统?')) {
        services.logout({}).then((data) => {
          this.$store.commit('logout')
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #bbb;
  text-align: center;
  z-index: 1;
  .system-title {
    display: inline-block;
  }
  .user-group {
    margin-right: 30px;
    display: inline-block;
    float: right;
    position: relative;
    .user-info {
      color: #333;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    .user-list {
      position: absolute;
      top: 40px;
      left: 10px;
      width: 80px;
      line-height: 30px;
      background-color: #FFF;
      border: 1px solid #DDD;
      text-align: left;
      .user-list-item {
        padding: 5px;
        cursor: pointer;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }
}
</style>

