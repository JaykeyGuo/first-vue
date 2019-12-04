<template>
  <div style="display: flex">
    <SingleOtpInput
      v-for="(item, i) in numInputs"
      :key="i"
      :focus="activeInput === i"
      :value="otp[i]"
      :separator="separator"
      :input-classes="inputClasses"
      :is-last-child="i === numInputs - 1"
      :should-auto-focus="shouldAutoFocus"
      :is-input-num="isInputNum"
      @on-change="handleOnChange"
      @on-keydown="handleOnKeyDown"
      @on-paste="handleOnPaste"
      @on-focus="handleOnFocus(i);"
      @on-blur="handleOnBlur"
      @on-clean="handleOnClean"
    />
  </div>
</template>

<script>
import SingleOtpInput from './singleOtpInput.vue';
// keyCode constants
const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DELETE = 46;
export default {
  name: 'OtpInput',
  components: {
    SingleOtpInput,
  },
  props: {
    numInputs: {
      type: Number,
      default: 4,
    },
    separator: {
      type: String,
      default: '-',
    },
    inputClasses: {
      type: String,
      default: 'otp-input',
    },
    isInputNum: {
      type: Boolean,
      default: false,
    },
    shouldAutoFocus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeInput: 0,
      otp: [''],
      oldOtp: [],
    };
  },
  watch: {
    activeInput(newValue) {
      this.activeInput = newValue;
    },
  },
  methods: {
    handleOnFocus(index) {
      const otpSet = new Set(this.otp);
      this.activeInput = otpSet.size === 1 && otpSet.has('') ? 0 : index;
    },
    handleOnBlur() {
      this.activeInput = -1;
    },
    // Helper to return OTP from input
    checkFilledAllInputs() {
      if (this.otp.join('').length === this.numInputs) {
        this.handleOnBlur();
        return this.$emit('on-complete', this.otp.join(''));
      }
      return 'Wait until the user enters the required number of characters';
    },
    // Focus on input by index
    focusInput(input) {
      this.activeInput = Math.max(Math.min(this.numInputs - 1, input), 0);
    },
    // Focus on next input
    focusNextInput() {
      this.focusInput(this.activeInput + 1);
    },
    // Focus on previous input
    focusPrevInput() {
      this.focusInput(this.activeInput - 1);
    },
    // Change OTP value at focused input
    changeCodeAtFocus(value) {
      this.otp[this.activeInput] = value;
      this.checkFilledAllInputs();
    },
    // Handle pasted OTP
    handleOnPaste(event) {
      event.preventDefault();
      const pastedData = event.clipboardData
        .getData('text/plain')
        .slice(0, this.numInputs - this.activeInput)
        .split('');
      if (this.isInputNum && !pastedData.join('').match(/^\d+$/)) {
        return 'Invalid pasted data';
      }
      // Paste data from focused input onwards
      const currentCharsInOtp = this.otp.slice(0, this.activeInput);
      const combinedWithPastedData = currentCharsInOtp.concat(pastedData);
      this.otp = combinedWithPastedData.slice(0, this.numInputs);
      return this.checkFilledAllInputs();
    },
    handleOnChange(value) {
      this.changeCodeAtFocus(value);
      this.focusNextInput();
    },
    // Handle cases of backspace, delete, left arrow, right arrow
    handleOnKeyDown(event) {
      switch (event.keyCode) {
        case BACKSPACE:
          event.preventDefault();
          this.changeCodeAtFocus('');
          this.focusPrevInput();
          break;
        case DELETE:
          event.preventDefault();
          this.changeCodeAtFocus('');
          break;
        case LEFT_ARROW:
          event.preventDefault();
          this.focusPrevInput();
          break;
        case RIGHT_ARROW:
          event.preventDefault();
          this.focusNextInput();
          break;
        default:
          break;
      }
    },
    handleOnClean() {
      this.otp.fill('');
      this.activeInput = -1;
      this.handleOnFocus(-1);
    },
  },
};
</script>

<style lang="scss">
.otp-input {
  width: 2rem;
  height: 2.5rem;
  padding: 0.5rem 0;
  margin: 0 0.3rem;
  font-size: 2rem;
  border-radius: 0rem;
  border: none;
  border-bottom: 0.2rem solid rgba(0, 0, 0, 0.3);
  text-align: center;
  font-weight: 600;
  &.error {
    border: 0.0625rem solid red !important;
  }
}
</style>
