fetch('http://localhost:3000/userdata')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('userdatas');
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.quest_id}</td>
                        <td>${item.quest_result}</td>
                        <td>${item.risk_index}</td>
                        <td><button type="button" class="details">详情</button></td>
                    `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

fetch('http://localhost:3000/userinfos')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('userinfos');
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.loan_state_1}</td>
                <td>${item.loan_state_2}</td>
                <td>${item.loan_state_3}</td>
                <td><button type="button" class="details" data-id="${item.id}">详情</button></td>
            `;
            tableBody.appendChild(row);
        });

        // 触发自定义事件，表示数据已加载并且按钮已添加
        document.dispatchEvent(new CustomEvent('dataLoaded'));
    })
    .catch(error => console.error('Error fetching data:', error));

fetch('http://localhost:3000/productinfo')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('productinfo');
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                      <div class="product" id="${item.name}">
                        <p class="name">name: ${item.name}</p>
                        <p class="introduction">introduction: ${item.introduction}</p>
                        <p class="information">information:${ item.infomation}</p>
                        <p class="product_function">
                          function:
                          <button type="button" class="product_change">申请更改</button>
                          <button type="button" class="product_delete">申请删除</button>
                        </p>
                      </div>
                    `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

