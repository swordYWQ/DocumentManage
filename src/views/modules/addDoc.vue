<template>
  <Modal headerName="新增文档" v-if="isShowAdd" :allowMarkClose="true" @close="isShowAdd=false">
    <div slot="modal-body">
      <div class="input-item">
        <span>{{type==0?'项目名称:':'文档名称:'}}</span>
        <input type="text" v-model="addForm.doc_name">
      </div>
      <div class="input-item">
        <span>描述:</span>
        <input type="text" v-model="addForm.desc">
      </div>
    </div>
    <div slot="modal-footer">
      <button class="login-btn">确定</button>
      <button class="login-btn" @click="$emit('close')">取消</button>
    </div>
  </Modal>
</template>
<script>
// import services from '../../services'
// import Modal from '../../components/modal.vue'
export default {
  data: function () {
    return {
      addForm: {
        doc_name: '',
        desc: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

