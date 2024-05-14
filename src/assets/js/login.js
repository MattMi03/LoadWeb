"use strict";
let btnElement = document.querySelector(".blogin");
btnElement.addEventListener("click", function () {
  login();
});
class Admin {
  #id = "a123456";
  #password = "a123456";
  constructor() {}
  check(a, b) {
    if (a == "" || b == "") return -1;
    if (a == this.#id && b == this.#password) return 1;
    else return 0;
  }
}
function login() {
  let admin = new Admin();
  let id = document.querySelector(".id").value;
  let pass = document.querySelector(".password").value;
  let ifp = admin.check(id, pass);
  if (ifp == 0) {
    alert("账号或密码错误");
    document.querySelector(".password").value = "";
  }
  if (ifp == -1) {
    alert("账号或密码不能为空");
  }
  if (ifp == 1) {
    alert("登录成功, 欢迎: a123456");
    //window.location.href = "https://live.bilibili.com/5050";
    window.location.href = "homepage.html";
  }
}
