<template>
  <transition name="modal">
    <div class="modal modal-wrapper">
      <div class="modal-mask" @click="clickMark">
      </div>
      <div class="modal-container" :style="{width: width+'px'||'auto' }">
        <div class="modal-header">
          <div class="modal-title">{{headerName}}</div>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="modal-footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    headerName: {
      default: ''
    },
    width: {
      default: 300
    },
    allowMarkClose: {
      default: false
    }
  },
  methods: {
    clickMark: function () {
      if (this.allowMarkClose) {
        this.$emit('close')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.modal.modal-wrapper {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity .3s ease;
  font-size: 14px;
  line-height: 30px;
  vertical-align: middle;
  .modal-mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal-container {
    margin: 0px auto;
    padding: 10px 10px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .modal-header {
      padding: 5px 10px;
    }
    .modal-body {
      margin: 0;
      position: relative;
    }
    .modal-footer {
      text-align: center;
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
