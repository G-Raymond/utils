//手机号码校验
function isPhoneAvailable(phone) {
  const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
  return phoneReg.test(phone);
}
// 电话号码校验
function isTelAvailable(tel) {
  var telReg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
  return telReg.test(tel);
}