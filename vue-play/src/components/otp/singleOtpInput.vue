<template>
  <div class="single--otp__wrap">
    <input
      :class="inputClasses"
      :type="isInputNum ? 'number' : 'text'"
      min="0"
      max="9"
      ref="input"
      v-model="model"
      @input="handleOnChange"
      @keydown="handleOnKeyDown"
      @paste="handleOnPaste"
      @focus="handleOnFocus"
      @blur="handleOnBlur"
    />
    <span v-if="!isLastChild && separator">
      <span v-html="separator"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SingleOtpInput',
  props: {
    value: {
      type: String,
    },
    separator: {
      type: String,
    },
    focus: {
      type: Boolean,
    },
    inputClasses: {
      type: String,
    },
    shouldAutoFocus: {
      type: Boolean,
    },
    isInputNum: {
      type: Boolean,
    },
    isLastChild: {
      type: Boolean,
    },
  },
  data() {
    return {
      model: this.value || '',
    };
  },
  mounted() {
    if (this.$refs.input && this.focus && this.shouldAutoFocus) {
      this.$refs.input.focus();
    }
  },
  watch: {
    value(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.model = newValue;
      }
    },
    // whenever question changes, this function will run
    focus(newFocusValue, oldFocusValue) {
      // Check if focusedInput changed
      // Prevent calling function if input already in focus
      if (oldFocusValue !== newFocusValue && (this.$refs.input && this.focus)) {
        this.$refs.input.focus();
        this.$refs.input.select();
      }
    },
  },
  methods: {
    handleOnChange() {
      if (this.model.length > 1) {
        this.model = this.model.slice(0, 1);
      }
      return this.$emit('on-change', this.model);
    },
    handleOnKeyDown(event) {
      return this.$emit('on-keydown', event);
    },
    handleOnPaste(event) {
      return this.$emit('on-paste', event);
    },
    handleOnFocus() {
      this.$refs.input.select();
      return this.$emit('on-focus');
    },
    handleOnBlur() {
      return this.$emit('on-blur');
    },
  },
};
</script>

<style lang="scss">
.single--otp__wrap {
  input {
    outline: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
  input[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }
}
</style>
