<template>
  <div class="content">
    <div class="content-header">
      <div class="document-title">{{nowproject?nowproject.doc_name:''}}{{nowproject&&nowdoc?'-':''}}{{ nowdoc?nowdoc.doc_name:''}}</div>
  
      <div class="type-list" v-if="username">
        <div class="type-item" :class="{active:type==0}" @click="type=0">预览</div>
        <div class="type-item" :class="{active:type==1}" @click="type=1">编辑</div>
      </div>
  
      <button v-if="username&&type!==0" class="save-btn" @click="saveDoc">保存</button>
    </div>
    <div class="document-content">
      <div class="edit-content" v-if="type==1">
        <textarea class="edit-area" v-model="markString" spellcheck="false"></textarea>
      </div>
      <div class="preview-content" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
import _ from 'lodash'
import { mapGetters } from 'vuex'
import services from '../../services'
export default {
  name: 'content',
  data: function () {
    return {
      // isLogin: false, // 是否登录
      type: 0, // 预览模式 编辑模式
      markString: '' // markDown文本
    }
  },
  computed: {
    ...mapGetters(['nowDocMarks', 'nowdoc', 'nowproject']),
    username: function () {
      return this.$store.state.username
    },
    compiledMarkdown: function () {
      return marked(this.markString, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.markString = e.target.value
    }, 300),
    saveDoc: function () {
      let nowdoc = this.$store.state.nowdoc
      if (nowdoc) {
        let params = {
          id: nowdoc.id,
          mark_key: this.markString
        }
        services.editDoc(params).then(response => {
          if (response.data.code === 200) {
            alert('操作成功')
          } else {
            alert(response.data.message)
          }
        })
      } else {
        alert('请选择一个文档!')
      }
    }
  },
  watch: {
    username: function (v, ov) {
      if (v !== ov) {
        this.type = 0
      }
    },
    nowDocMarks: function (v, ov) {
      if (v !== ov) {
        this.markString = v
      }
    }
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
    position: relative;
    .document-title {
      font-weight: bold;
      text-align: left;
      font-size: 15px;
      padding: 3px 30px; // float: left;
      display: inline-block;
    }
    .type-list {
      margin: 10px auto;
      font-size: 0; // display: inline-block;
      position: absolute;
      right: 100px;
      top: 0;
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
      // float: right;
      margin-top: 10px;
      margin-right: 30px;
      padding: 5px 10px;
      background-color: #7FCC00;
      color: #FFF;
      font-weight: bold;
      border: 0;
      cursor: pointer;
      outline: none;
      position: absolute;
      right: 0;
      top: 0;
      &:active {
        background-color: #7FCC64;
      }
      &.hidden {
        visibility: hidden;
      }
    }
  }
  .document-content {
    height: calc(100% - 55px);
    display: flex;
    justify-content: center;
    align-items: center;
    .edit-content {
      height: 100%;
      flex: 1;
      border-right: 1px solid #eee;
      .edit-area {
        width: 100%;
        height: 100%;
        font-size: 15px;
        line-height: 30px;
        vertical-align: top;
        box-sizing: border-box;
        padding: 20px;
        border: 0;
        font-family: '微软雅黑';
        outline: none;
        resize: none;
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
