<template>
  <div>
    <h2>Vue One Time Password</h2>
    <otp-input
      ref="otp"
      class="otp-wrap"
      inputClasses="otp-input"
      separator=""
      :numInputs="6"
      :isInputNum="true"
      :shouldAutoFocus="true"
      @on-complete="handleOnComplete">
    </otp-input>
  </div>
</template>

<script>
import otpInput from '@/components/otp';

export default {
  name: 'Otp',
  components: {
    'otp-input': otpInput,
  },
  methods: {
    handleOnComplete(value) {
      console.log(`OTP: ${value}`);
      setTimeout(() => {
        console.log(`OTP 0000: ${value}`);
        document.getElementsByClassName('otp-input')[0].blur();
        if (value === '121212') {
          console.log('error');
          console.log(this.$refs.otp);
          this.$refs.otp.handleOnClean();
        } else {
          console.log('success');
          this.$refs.otp.handleOnClean();
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.otp-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
