<template>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>主页</title>
        <link rel="stylesheet" href="./assets/css/home_style.css" />
    </head>

    <body>
        <header>
            <h1>个人贷款风险控制管理系统</h1>
            <p>LRCM</p>
            <button @click="pageSelect(0)" class="bhome">主页</button>
            <button @click="delogin" class="bdelogin">退出登录</button>
        </header>
        <div class="list">
            <div class="user_info">
                <div class="circle">
                    <img src="~@/assets/images/100.png" class="avatar" />
                </div>
                <p class="user_name">a123456</p>
            </div>
            <div class="pages">
                <p>
                    <button @click="pageSelect(1)" class="page" id="page1">风险系数管理</button>
                </p>
                <p>
                    <button @click="pageSelect(2)" class="page" id="page2">已有产品管理</button>
                </p>
                <p><button @click="pageSelect(3)" class="page" id="page3">客户管理</button></p>
                <p><button @click="pageSelect(4)" class="page" id="page4">信息传送</button></p>
                <p><button @click="pageSelect(5)" class="page" id="page5">贷款处理</button></p>
            </div>
        </div>
        <div class="main_window">
            <div id="pmain_window" style="display: block">
                <div class="window1">
                    <h1>welcome, a123456</h1>
                    <p><span class="timer">{{ time }}</span></p>
                </div>
            </div>
            <div id="func1" style="display: block">
                <h1 class="functitle">风险系数管理界面</h1>
                <div class="window1">
                    <p class="present_index">
                        当前风险系数为：<a id="riskinfo"></a>
                    </p>
                    <p class="index_chart1">chart1</p>
                    <p class="index_chart2">chart2</p>
                    <p class="index_change">
                        修改风险系数<input type="number" class="quest_index" />
                        <button @click="riskChange" class="bindex_change">提交申请</button>
                    </p>
                </div>
            </div>
            <div id="func2" style="display: block">
                <h1 class="functitle">已有产品管理界面</h1>
                <div class="window1">
                    <button @click="productAdd" class="product_add">新增产品</button>
                    <ol class="products">
                        <li id="productinfo"></li>
                    </ol>
                </div>
            </div>
            <div id="func3" style="display: block">
                <h1 class="functitle">客户管理界面</h1>
                <div class="window1">
                    <input type="text" placeholder="Search" /><button>确认</button>
                    <table class="customers_table_0" border="1">
                        <thead>
                            <tr>
                                <th class="id">id</th>
                                <th class="name">name</th>
                                <th class="loan_state">loan_state</th>
                                <th class="loan_state">loan_state</th>
                                <th class="loan_state">loan_state</th>
                                <th class="functions">functions</th>
                            </tr>
                        </thead>
                        <div class="customers_table_list">
                            <tr>
                                <td>10001</td>
                                <td>张三</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button type="button" class="details">详情</button></td>
                            </tr>
                        </div>
                    </table>
                    <table class="customers_info_0" border="1">
                        <thead>
                            <tr>
                                <td class="title" colspan="6">
                                    Customer<button type="button">X</button>
                                </td>
                            </tr>
                        </thead>
                        <tr>
                            <th>id</th>
                            <th>用户名</th>
                            <th>性别</th>
                            <th>生日</th>
                            <th>实名认证</th>
                            <th class="avatar">avatar</th>
                        </tr>
                        <tr>
                            <td>
                                10001<!--<button type="button" class="function">test</button></td>-->
                            </td>
                            <td>张三<button type="button" class="function">test</button></td>
                            <td>
                                男<!--<button type="button" class="function">test</button></td>-->
                            </td>
                            <td>
                                1995.04.02<!--<button type="button" class="function">test</button>-->
                            </td>
                            <td>
                                张三<!--<button type="button" class="function">test</button>-->
                            </td>
                            <td rowspan="3" class="avatar">
                                test<button type="button" class="function">test</button>
                            </td>
                        </tr>
                        <tr>
                            <th>Customer</th>
                            <th>Customer</th>
                            <th>Customer</th>
                            <th>Customer</th>
                            <th>Customer</th>
                        </tr>
                        <tr>
                            <td>test<button type="button" class="function">test</button></td>
                            <td>test<button type="button" class="function">test</button></td>
                            <td>test<button type="button" class="function">test</button></td>
                            <td>test<button type="button" class="function">test</button></td>
                            <td>test<button type="button" class="function">test</button></td>
                        </tr>
                        <tr>
                            <td colspan="6" class="info">
                                test<button type="button" class="function">test</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id="func4" style="display: block">
                <h1 class="functitle">信息传送界面</h1>
                <div class="window1">
                    <table class="info" border="1">
                        <tr>
                            <td class="title">
                                <textarea type="input" maxlength="40" placeholder="title" cols="1"></textarea>
                            </td>
                            <td class="tosent">
                                <textarea type="input" placeholder="tosent" maxlength="10" cols="1"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td class="text">
                                <textarea type="input" placeholder="input" maxlength="400" cols="10"></textarea>
                            </td>
                            <td class="checkboxes">
                                <p class="checkcust">Please select the object to be sent</p>
                                <p class="checkcust">
                                    <input type="checkbox" />
                                    customer
                                </p>
                                <p class="checkannounce">
                                    <input type="checkbox" />
                                    announce
                                </p>
                            </td>
                        </tr>
                    </table>
                    <span id="limit_text1">0/40</span>
                    <span id="limit_text2">0/400</span>
                    <button type="button" class="reset">reset</button>
                    <button type="button" class="submit">submit</button>
                </div>
            </div>
            <div id="func5" style="display: block">
                <h1 class="functitle">贷款处理界面</h1>
                <div class="window1">
                    <div class="bpage">
                        <button type="button" class="preloan">preloan</button>
                        <button type="button" class="loaning">loaning</button>
                        <button type="button" class="loaned">loaned</button>
                        <p class="checkcust">
                            <input type="checkbox" />
                            show special
                        </p>
                    </div>
                    <table class="customers_table_0" id="preloan_table" border="1">
                        <thead>
                            <tr>
                                <th class="id">id</th>
                                <th class="name">name</th>
                                <th class="loan_state">quest_id</th>
                                <th class="loan_state">quest_result</th>
                                <th class="loan_state">risk_index</th>
                                <th class="functions">functions</th>
                            </tr>
                        </thead>
                        <div class="customers_table_list" id="preloan_table">
                            <tr>
                                <td>10001</td>
                                <td>张三</td>
                                <td>1</td>
                                <td class="quest_result">access</td>
                                <td class="risk_index">50</td>
                                <td><button type="button" class="details">详情</button></td>
                            </tr>
                        </div>
                    </table>
                    <table class="customers_table_0" id="loaning_table" border="1">
                        <thead>
                            <tr>
                                <th class="id">id</th>
                                <th class="name">name</th>
                                <th class="loan_state">loan_state</th>
                                <th class="loan_state">loan_state</th>
                                <th class="loan_state">loan_state</th>
                                <th class="functions">functions</th>
                            </tr>
                        </thead>
                        <div class="customers_table_list" id="loaning_table">
                            <tr>
                                <td>10001</td>
                                <td>张三</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button type="button" class="details">详情</button></td>
                            </tr>
                        </div>
                    </table>
                    <table class="customers_table_0" id="loaned_table" border="1">
                        <thead>
                            <tr>
                                <th class="id">id</th>
                                <th class="name">name</th>
                                <th class="loan_state">loan_state</th>
                                <th class="loan_state">loan_state</th>
                                <th class="loan_state">loan_state</th>
                                <th class="functions">functions</th>
                            </tr>
                        </thead>
                        <div class="customers_table_list" id="loaned_list">
                            <tr>
                                <td>10001</td>
                                <td>张三</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button type="button" class="details">详情</button></td>
                            </tr>
                        </div>
                    </table>
                </div>
            </div>
        </div>
    </body>
</template>

<script>

export default {

    data() {
        return {
            page0: null,
            page1: null,
            page2: null,
            page3: null,
            page4: null,
            page5: null,
            pages: [],
            page_last: null,
            time: null,
            page_present: null
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.page0 = document.querySelector("#pmain_window");
            this.page1 = document.querySelector("#func1");
            this.page2 = document.querySelector("#func2");
            this.page3 = document.querySelector("#func3");
            this.page4 = document.querySelector("#func4");
            this.page5 = document.querySelector("#func5");
            this.pages = [this.page0, this.page1, this.page2, this.page3, this.page4, this.page5];
            this.page_present = this.pages[0];
            this.page_last = this.pages[0];
            for (let i = 1; i < this.pages.length; i++) {
                this.pages[i].style.display = "none";
            }
            this.page0.style.display = "block";
            this.fetchRiskInfo();
            this.fetchProductInfo();
            setInterval(() => {
                this.getData();
            }, 1000);
        });
        window.productChange = this.productChange;
        window.productDelete = this.productDelete;
    },
    methods: {
        getData() {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = this.padZero(currentDate.getMonth() + 1); // 加 1 是因为月份是从 0 开始计数的
            const currentDay = this.padZero(currentDate.getDate());
            const currentHour = this.padZero(currentDate.getHours());
            const currentMinute = this.padZero(currentDate.getMinutes());
            const currentSecond = this.padZero(currentDate.getSeconds());
            this.time = `${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinute}:${currentSecond}`;
        },
        padZero(num) {
            return num < 10 ? `0${num}` : num;
        },
        pageSelect(index) {
            if (this.page_present === this.pages[index]) {
                return;
            }
            this.page_last = this.page_present;
            this.page_present = this.pages[index];
            this.page_present.style.display = "block";
            this.page_last.style.display = "none";
        },
        delogin() {
            let ifdelogin = window.confirm("是否确认登出？");
            if (ifdelogin) {
                alert("成功登出");
                window.location.href = "/";
            }
        },
        riskChange() {
            let risk_index = document.querySelector('.quest_index');
            let risk_index_value = risk_index.value;
            if (risk_index_value === '') {
                alert('请输入风险系数');
                return;
            }
            else if (risk_index_value < 0 || risk_index_value > 100) {
                alert('风险系数应在0-100之间');
                return;
            }
            else {
                fetch('http://localhost:3000/riskinfo/1', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        risk_coefficient: risk_index_value
                    }),
                });
                alert('风险系数修改成功');
                window.location.href = '/homepage';
            }
        },
        fetchRiskInfo() {
            fetch('http://localhost:3000/riskinfo')
                .then(response => response.json())
                .then(data => {
                    const tableBody = document.getElementById('riskinfo');
                    data.forEach(item => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                      <div class="risk" id="${item.id}">
                        <p class="name">${item.risk_coefficient}</p>
                        </div>
                `;
                        tableBody.appendChild(row);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        },
        productChange() {
            window.location.href = `/productchange`;
        },
        productAdd() {
            window.location.href = `/productadd`;
        },
        productDelete(id) {
            fetch(`http://localhost:3000/productdelete`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id
                })

            })
                .catch(error => console.error('Error:', error));
            window.location.href = '/homepage';
        },
        fetchProductInfo() {
            fetch('http://localhost:3000/productinfo')
                .then(response => response.json())
                .then(data => {
                    const tableBody = document.getElementById('productinfo');
                    data.forEach(item => {
                        const row = document.createElement('body');
                        row.innerHTML = `
                      <div>
                        <p class="id"> id: ${item.id} </p>
                        <p class="name">name: ${item.name}</p>
                        <p class="introduction">introduction: ${item.introduction}</p>
                        <p class="information">information:${item.information}</p>
                        <p class="product_function">
                          function:
                          <button onclick="window.productChange()" class="product_change">申请更改</button>
                          <button onclick="window.productDelete(${item.id})" class="product_delete">申请删除</button>
                        </p>
                      </div>
                    `;
                        tableBody.appendChild(row);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }
};
</script>

<style scoped>
@import "@/assets/css/home_style.css";
</style>