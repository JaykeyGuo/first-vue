<template>
  <input
    class="vp-input-box"
    type="text"
    @input="handleInput"
    @blur="handleBlur"
    :value="defaultValue"
  />
</template>

<script>
import Emitter from '../../mixins/emitter';

export default {
  name: 'vpInput',
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      defaultValue: this.value,
    };
  },
  watch: {
    value(val) {
      this.defaultValue = val;
    },
  },
  methods: {
    /**
     * change 事件
     * @param event
     */
    handleInput(event) {
      // 当前model 赋值
      this.defaultValue = event.target.value;
      // vue 原生的方法 return 出去
      this.$emit('input', event.target.value);
      // 将当前的值发送到 vpFormItem 进行校验
      this.dispatch('vpFormItem', 'on-form-change', event.target.value);
    },
    /**
     * blur 事件
     * @param event
     */
    handleBlur(event) {
      // vue 原生的方法 return 出去
      this.$emit('blur', event.target.value);
      // 将当前的值发送到 vpFormItem 进行校验
      this.dispatch('vpFormItem', 'on-form-blur', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.vp-input-box {
  width: 296px;
  height: 26px;
  font-size: 14px;
  line-height: 26px;
  padding: 3px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  box-shadow: none;
  &:focus {
    border: 1px solid #0D89FC;
    box-shadow: 0px 0px 0px 2px rgba(13, 137, 252, 0.2);
    // box-shadow: -2px -2px 0 rgba(13, 137, 252, 0.2),
    //             -2px 3px 0 rgba(13, 137, 252, 0.2),
    //             2px 3px 0 rgba(13, 137, 252, 0.2),
    //             2px -2px 0 rgba(13, 137, 252, 0.2);
  }
}
</style>

<style lang="scss">
// .vp-form-item-error::after {
//   position: absolute;
//   right: -20px;
//   top: 0;
//   content: 'x';
//   color: #f00;
// }
.vp-form-item-error {
  // position: relative;
  .vp-input-box {
    border: #f00 1px solid;
  }
  .icon-check-fail {
    color: #f00;
  }
}
.vp-form-item-success {
  .vp-input-box {
    border: #29C30E 1px solid;
  }
  .icon-check-success {
    color: #29C30E;
  }
}
</style>
