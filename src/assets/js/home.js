"use strict";
let bpage0 = document.querySelector(".bhome");
let bpage1 = document.querySelector("#page1");
let bpage2 = document.querySelector("#page2");
let bpage3 = document.querySelector("#page3");
let bpage4 = document.querySelector("#page4");
let bpage5 = document.querySelector("#page5");
let page0 = document.querySelector("#pmain_window");
let page1 = document.querySelector("#func1");
let page2 = document.querySelector("#func2");
let page3 = document.querySelector("#func3");
let page4 = document.querySelector("#func4");
let page5 = document.querySelector("#func5");

let page_present;
let page_last;
let pages;
let time = 123;
document.querySelector(".timer").value = time;
bpage0.addEventListener("click", function () {
  page_select(0);
});
bpage1.addEventListener("click", function () {
  page_select(1);
});
bpage2.addEventListener("click", function () {
  page_select(2);
});
bpage3.addEventListener("click", function () {
  page_select(3);
});
bpage4.addEventListener("click", function () {
  page_select(4);
});
bpage5.addEventListener("click", function () {
  page_select(5);
});

//#func0
function awake() {
  page_present = page0;
  page_last = page0;
  pages = [page0, page1, page2, page3, page4, page5];
}
function start() {
  page0.style.display = "block";
  for (let i = 1; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
}
window.onload = function () {
  awake();
  start();
};
function page_select(index) {
  if (page_present == pages[index]) {
    return;
  }
  page_last = page_present;
  page_present = pages[index];
  page_present.style.display = "block";
  page_last.style.display = "none";
}
function delogin() {
  let ifdelogin = window.confirm("是否确认登出？");
  if (ifdelogin) {
    alert("成功登出");
    location.href = "login.html";
  }
}

//#func1
let bdelogin = document.querySelector(".bdelogin");
let bindex_change = document.querySelector(".bindex_change");
bdelogin.addEventListener("click", function () {
  delogin();
});
bindex_change.addEventListener("click", function () {
  index_change();
});
function index_change() {
  let index = document.querySelector(".quest_index");
  if (index == "") {
    alert("内容不能为空");
    return;
  }
  alert("已提交更改申请");
}

//#func2

//#func3
document.addEventListener('dataLoaded', function () {
  const bdetails = document.querySelectorAll(".details");
  const customers_info_0 = document.querySelector(".customers_info_0");
  const bcustomers_info_close = document.querySelector(".customers_info_0 .title button");

  bdetails.forEach(button => {
    button.addEventListener("click", function () {
      const id = this.getAttribute('data-id');
      customers_info_0.style.display = "block";
      getdetails(id);
    });
  });

  bcustomers_info_close.addEventListener("click", function () {
    customers_info_0.style.display = "none";
  });
});

function getdetails(id) {
  fetch('http://localhost:3000/customerinfo')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.getElementById('customerinfo');
        tableBody.innerHTML = ''; // 清空已有的行
        // 筛选出与点击的 id 匹配的数据
        const filteredData = data.filter(item => item.id == id);

        // 使用筛选后的数据填充表格
        filteredData.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.sex}</td>
          <td>${item.birth}</td>
          <td>${item.authentication}</td>
        `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('获取数据出错:', error));
}


//#func4
let info_title = document.querySelector("#func4 .info .title textarea");
let info_text = document.querySelector("#func4 .info .text textarea");
let info_tosent = document.querySelector("#func4 .info .tosent textarea");
let info_title_lengthtext = document.querySelector("#limit_text1");
let info_text_lengthtext = document.querySelector("#limit_text2");
let title_lang = info_title.value.length;
let text_lang = info_text.value.length;
let bresert = document.querySelector("#func4 .reset");
let bsubmit = document.querySelector("#func4 .submit");
let checkcust = document.querySelector("#func4 .checkcust input");
let checkannounce = document.querySelector("#func4 .checkannounce input");

$("#limit_text1").html(title_lang + "/40");
$("#limit_text2").html(text_lang + "/400");
if (title_lang >= info_title.maxLength)
  info_title_lengthtext.style.color = "red";
if (text_lang >= info_text.maxLength) info_text_lengthtext.style.color = "red";
bresert.addEventListener("click", function () {
  let ifdelogin = window.confirm("是否确认重置？");
  if (ifdelogin) reset();
});
bsubmit.addEventListener("click", function () {
  if (
    info_title.value == "" ||
    info_text.value == "" ||
    info_tosent.value == ""
  ) {
    alert("请完成内容填写");
    return;
  }
  if (checkcust.checked == checkannounce.checked) {
    alert("请选择对象或使对象唯一");
    return;
  }
  let ifdelogin = window.confirm("是否确认提交？");
  if (ifdelogin) {
    alert("内容已提交");
    reset();
  }
});
function reset() {
  info_title.value = "";
  info_text.value = "";
  info_tosent.value = "";
}
//#func5
