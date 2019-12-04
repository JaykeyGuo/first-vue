form-item.vue
<template>
  <div class="vp-form-item__wrap">
    <label
      :class="['vp-form-item-label',
              isRequired ? 'vp-form-item-label-required' : '']">
      {{ label }}
    </label>
    <div :class="[
      'vp-form-item-box',
      validateState === 'error'
        ? 'vp-form-item-error'
        : validateState === 'success'
          ? 'vp-form-item-success'
          : ''
      ]">
      <slot></slot>
      <i
        :class="['iconfont',
          validateState === 'error'
            ? 'icon-check-fail'
            : validateState === 'success'
              ? 'icon-check-success'
              : '']"></i>
      <div :class="[validateState === 'error'
                    ? 'vp-form-item-message-error'
                    : 'vp-form-item-message']">
        {{ validateMessage }}
      </div>
      <slot class="inner" name="moreInfo"></slot>
    </div>
  </div>
</template>

<script>
import Schema from 'async-validator';
import Emitter from '../../mixins/emitter';

export default {
  name: 'vpFormItem',
  mixins: [Emitter],
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
      required: true,
    },
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop];
    },
  },
  data() {
    return {
      initialValue: '', // 储存默认值
      isRequired: false, // 当前的是否有问题
      validateState: '', // 是否校验成功
      validateMessage: '', // 校验失败文案
    };
  },
  methods: {
    /**
     * 绑定事件 进行是否 required 校验
     */
    setRules() {
      const that = this;
      const rules = this.getRules(); // 拿到父组件过滤后当前需要使用的规则
      if (rules.length) {
        // every 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）
        // some 只要有一个符合就返回true
        this.isRequired = rules.some(rule => rule.required);
      }
      /**
       * blur 事件
       */
      this.$on('on-form-blur', that.onFieldBlur);
      /**
       * change 事件
       */
      this.$on('on-form-change', that.onFieldChange);
    },
    /**
     * 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
     */
    getRules() {
      const that = this;
      let rules = that.form.rules;
      rules = rules ? rules[that.prop] : [];
      return [].concat(rules || []); // 这种写法可以让规则肯定是一个数组的形式
    },
    /**
     * Blur 进行表单验证
     */
    onFieldBlur() {
      this.validation('blur');
    },
    /**
     * change 进行表单验证
     */
    onFieldChange() {
      this.validation('change');
    },
    /**
     * 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
     */
    getFilteredRule(trigger) {
      const rules = this.getRules();
      // !res.trigger 没有调用方式的时候默认就校验的
      // filter 过滤出当前需要的规则
      return rules.filter(
        res => !res.trigger || res.trigger.indexOf(trigger) !== -1,
      );
    },
    /**
     * 校验数据
     * @param trigger 校验类型
     * @param callback 回调函数
     */
    validation(trigger, callback = () => {}) {
      // blur 和 change 是否有当前方式的规则
      const rules = this.getFilteredRule(trigger);
      // 判断当前是否有规则
      if (!rules || rules.length === 0) {
        return;
      }
      // 设置状态为校验中
      // async-validator的使用形式
      this.validateState = 'validating';
      const validator = new Schema({ [this.prop]: rules });
      // firstFields: true 只会校验一个
      validator.validate(
        { [this.prop]: this.fieldValue },
        { firstFields: true },
        (errors) => {
          this.validateState = !errors ? 'success' : 'error';
          this.validateMessage = errors ? errors[0].message : '';
          callback(this.validateMessage);
        },
      );
    },
    /**
     * 清空当前的 form-item
     */
    resetField() {
      this.form.model[this.prop] = this.initialValue;
    },
  },
  // 组件渲染时，将实例缓存在 Form 中
  mounted() {
    // console.log(this.form);
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch('vpForm', 'on-form-item-add', this);
      // 设置初始值，以便在重置时恢复默认值
      this.initialValue = this.fieldValue;
      // 添加表单校验
      this.setRules();
    }
  },
  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy() {
    this.dispatch('vpForm', 'on-form-item-remove', this);
  },
};
</script>

<style lang="scss" scoped>
.vp-form-item__wrap {
  width: 600px;
  display: flex;
  justify-content: center;
}
.vp-form-item-label {
  padding-right: 2px;
  width: 200px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #29292B;
  text-align: right;
}
.vp-form-item-label::after {
  content: ':';
  padding-right: 6px;
}
.vp-form-item-label-required:before {
  content: "*";
  color: red;
}
.vp-form-item-message {
  margin-top: 2px;
  height: 18px;
  line-height: 18px;
}
.vp-form-item-message-error {
  margin-top: 2px;
  height: 18px;
  line-height: 18px;
  padding-left: 12px;
  color: red;
  font-size: 12px;
  text-align: left;
}
.vp-form-item-box {
  position: relative;
}
.iconfont {
  position: absolute;
  top: 8px;
  margin-left: 6px;
}
</style>
