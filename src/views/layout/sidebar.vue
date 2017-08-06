<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <div class="sidebar-header-item">
        <i class="iconfont icon-document"></i>文档</div>
      <div class="sidebar-header-item">
        <i class="iconfont icon-search"></i>搜索</div>
      <div class="sidebar-header-item pull-right">
        <i class="iconfont icon-add"></i>
      </div>
    </div>
    <ul class="main-sidebar">
      <li class="sidebar-li" v-for="(item,index) in 3" :key="index">
        <a href="javascript:void(0)" class="sidebar-content" @click="toggleMenu(index)">
          <i class="iconfont icon-xiangmu"></i>
          <span>业务支撑平台</span>
        </a>
        <ul class="sub-sidebar" v-show="activeItem==index">
          <li class="sidebar-li">
            <a href="javascript:void(0)" class="sidebar-content">
              <i class="iconfont icon-document"></i>
              <span>项目介绍</span>
            </a>
          </li>
          <li class="sidebar-li">
            <a href="javascript:void(0)" class="sidebar-content">
              <i class="iconfont icon-document"></i>
              <span>api接口</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  data: function () {
    return {
      activeItem: 0
    }
  },
  methods: {
    toggleMenu: function (index) {
      if (this.activeItem === index) {
        this.activeItem = -1
      } else {
        this.activeItem = index
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.sidebar {
  width: 200px;
  height: 100%;
  float: left;
  background-color: #FAFAFA;
  border-top: 1px solid #DDDDDD;
  border-right: 1px solid #DDDDDD;
  .sidebar-header {
    height: 40px;
    line-height: 40px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    .sidebar-header-item {
      // width:60px;
      padding: 0 0 0 5px;
      color: #999;
      cursor: pointer;
      display: inline-block;
      &:hover {
        color: #333;
      }
      &.pull-right {
        float: right;
        padding: 0 10px;
      }
    }
  }
  .main-sidebar {
    list-style: none;
    text-align: left;
    padding: 0;
    margin: 0;
    line-height: 30px;
    .sidebar-li {
      list-style: none;
      .sidebar-content {
        color: #333;
        text-decoration: none;
        display: block;
        padding: 0 10px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
