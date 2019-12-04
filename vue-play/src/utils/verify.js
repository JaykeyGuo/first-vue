const verify = {
  limitString(num) {
    return (rule, value, callback) => {
      if (value.length > num) {
        callback(`最长限制${num}个字`);
      } else {
        callback();
      }
    };
  },
  bankNo(rule, value, callback) {
    if (value.length > 32) {
      callback('银行卡号不能超过32位');
    } else {
      callback();
    }
  },
  idNo(rule, value, callback) {
    const idReg = new RegExp(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/);
    if (!idReg.test(value)) {
      callback('请输入正确的身份证号码');
    } else {
      callback();
    }
  },
  phoneNo(rule, value, callback) {
    const phoneReg = new RegExp(/^1\d{10}$/);
    if (!phoneReg.test(value)) {
      callback('请输入正确的手机号码');
    } else {
      callback();
    }
  },
};

export default verify;
