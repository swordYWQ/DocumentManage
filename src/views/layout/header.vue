<template>
  <header class="header">
    <div class="system-title">文档管理系统</div>
    <div class="user-group" @mouseover="isShowUserList=true" @mouseout="isShowUserList=false">
      <a href="javascript:void(0)" class="user-info">
        <!-- <i class="iconfont icon-weibiaoti1"></i> -->
        郁伟强
        <i class="iconfont icon-jiantouxia"></i>
      </a>
      <div class="user-list" v-show="isShowUserList">
        <div class="user-list-item">修改密码</div>
        <div class="user-list-item">退出</div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'header',
  data: function () {
    return {
      isShowUserList: false
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
      top: 41px;
      left: -10px;
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

