<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <div class="sidebar-header-item">
        <i class="iconfont icon-document"></i>文档</div>
      <div class="sidebar-header-item">
        <i class="iconfont icon-search"></i>搜索</div>
      <div class="sidebar-header-item pull-right" @mouseover="isShowAddList=true" @mouseout="isShowAddList=false">
        <i class="iconfont icon-add"></i>
        <div class="add-list" v-show="isShowAddList">
          <div class="add-list-item">新增项目</div>
          <div class="add-list-item">新增文档</div>
        </div>
      </div>
    </div>
    <ul class="main-sidebar">
      <li class="sidebar-li" v-for="(first,firstIndex) in docList" :key="firstIndex">
        <a href="javascript:void(0)" class="sidebar-content" @click="toggleMenu(firstIndex)">
          <i class="iconfont icon-xiangmu"></i>
          <span>{{first.doc_name}}</span>
        </a>
        <ul class="sub-sidebar" v-show="activeItem==firstIndex">
          <li class="sidebar-li" v-for="(second,secondIndex) in first.children" :key="secondIndex" @click="selectDoc(second)">
            <a href="javascript:void(0)" class="sidebar-content">
              <i class="iconfont icon-document"></i>
              <span>{{second.doc_name}}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import services from '../../services'
export default {
  name: 'sidebar',
  data: function () {
    return {
      isShowAddList: false,
      activeItem: 0
    }
  },
  computed: {
    docList: function () {
      return this.$store.state.docList
    }
  },
  mounted: function () {
    this.getDocList()
  },
  methods: {
    getDocList: function () {
      services.getDocList({}).then((response) => {
        if (response.data.code === 200) {
          this.$store.commit('initDocList', response.data.result)
        } else {
          alert('获取文档列表失败')
        }
      })
    },
    toggleMenu: function (index) {
      if (this.activeItem === index) {
        this.activeItem = -1
      } else {
        this.activeItem = index
      }
    },
    selectDoc: function (item) {
      this.$store.commit('selectDoc', item)
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
      position: relative;
      &:hover {
        color: #333;
      }
      &.pull-right {
        float: right;
        padding: 0 10px;
      }
      .add-list {
        position: absolute;
        left: 0px;
        top: 40px;
        width: 100px;
        background-color: #eee;
        border: 1px solid #ddd;
        text-align: center;
        white-space: nowrap;
        .add-list-item {
          &:hover {
            background-color: skyblue;
          }
        }
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
