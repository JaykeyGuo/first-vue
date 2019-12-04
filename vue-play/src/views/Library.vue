<template>
  <div class="home">
    <vp-form ref="formItems" :model="formValidate" :rules="ruleValidate">
      <vp-form-item label="史上最长的测名字" prop="name">
        <vp-input v-model="formValidate.name" />
        <div v-if="0" slot="moreInfo">Name</div>
      </vp-form-item>
      <vp-form-item label="银行卡号" prop="bankNo">
        <vp-input v-model="formValidate.bankNo" />
      </vp-form-item>
      <vp-form-item label="持卡人姓名" prop="idName">
        <vp-input v-model="formValidate.idName" />
      </vp-form-item>
      <vp-form-item label="身份证号" prop="idNo">
        <vp-input v-model="formValidate.idNo" />
      </vp-form-item>
      <vp-form-item label="银行预留手机号" prop="bankPhone">
        <vp-input v-model="formValidate.bankPhone" />
      </vp-form-item>
    </vp-form>
    <button @click="changeButton()">测试</button>
  </div>
</template>

<script>
import VpForm from '../components/vp-form/index.vue';
import VpFormItem from '../components/vp-form-item/index.vue';
import VpInput from '../components/vp-input/index.vue';
import verify from '../utils/verify';

export default {
  name: 'home',
  components: {
    VpInput,
    VpFormItem,
    VpForm,
  },
  data() {
    const checkName = (rule, value, cb) => {
      if (value === '123') {
        cb(new Error('1111'));
      }
      cb();
    };
    return {
      formValidate: {
        name: '1239999',
        mami: '',
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { validator: checkName, trigger: 'blur' },
        ],
        bankNo: [
          { required: true, message: '银行卡号不能为空', trigger: 'blur' },
          { validator: verify.bankNo, trigger: 'blur' },
        ],
        idName: [
          { required: true, message: '持卡人姓名不能为空', trigger: 'blur' },
          { validator: verify.limitString(20), trigger: 'blur' },
        ],
        idNo: [
          { required: true, message: '身份证号不能为空', trigger: 'blur' },
          { validator: verify.idNo, trigger: 'blur' },
        ],
        bankPhone: [
          { required: true, message: '银行预留手机号不能为空', trigger: 'blur' },
          { validator: verify.phoneNo, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    changeButton() {
      // this.$refs.formItems.resetFields(); // 清空方法
      this.$refs.formItems
        .validate() // 验证方法
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
