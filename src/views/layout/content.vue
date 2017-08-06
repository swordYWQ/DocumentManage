<template>
  <div class="content">
    <div class="content-header">
      <div class="document-title">项目介绍</div>
  
      <div class="type-list">
        <div class="type-item" :class="{active:type==0}" @click="type=0">预览</div>
        <div class="type-item" :class="{active:type==1}" @click="type=1">编辑</div>
      </div>
  
      <button :class="{'hidden':type!==1}" class="save-btn">保存</button>
    </div>
    <div class="document-content">
      <div class="edit-content" v-if="type==1">
        <textarea class="edit-area" v-model="markString"></textarea>
      </div>
      <div class="preview-content" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
import _ from 'lodash'
export default {
  name: 'content',
  data: function () {
    return {
      type: 0, // 预览模式 编辑模式
      isPreview: false, // 是否开启预览模式
      markString: '# hello' // markDown文本
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.markString, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.markString = e.target.value
    }, 300)
  }
}
</script>
<style lang="scss" scoped>
.content {
  width: calc(100% - 201px);
  height: 100%;
  margin-left: 200px;
  .content-header {
    width: 100%;
    line-height: 30px;
    text-align: center;
    .document-title {
      font-weight: bold;
      text-align: left;
      font-size: 15px;
      padding: 3px 30px;
      float: left;
    }
    .type-list {
      margin: 10px auto;
      font-size: 0;
      display: inline-block;
      .type-item {
        width: 80px;
        display: inline-block;
        background-color: #eee;
        font-size: 14px;
        cursor: pointer;
        &.active {
          background-color: skyblue;
          color: #FFF;
        }
      }
    }
    .save-btn {
      float: right;
      margin-top: 10px;
      margin-right: 30px;
      padding: 5px 10px;
      background-color: #7FFF00;
      color: #FFF;
      font-weight: bold;
      border: 0;
      cursor: pointer;
      &:active {
        background-color: #7FCC00;
      }
      &.hidden {
        visibility: hidden;
      }
    }
  }
  .document-content {
    height: calc(100% - 35px);
    display: flex;
    justify-content: center;
    align-items: center;
    .edit-content {
      height: 100%;
      flex: 1;
      .edit-area {
        width: 100%;
        height: 100%;
        font-size: 18px;
        line-height: 30px;
        vertical-align: top;
        box-sizing: border-box;
        padding: 20px;
        border: 0;
      }
    }
    .preview-content {
      height: 100%;
      padding: 20px;
      flex: 1;
      overflow: auto; // border-width: 0 0 0 1px;
      // border-style: solid;
      // border-color: #aaa;
      // box-sizing: border-box;
    }
  }
}
</style>
