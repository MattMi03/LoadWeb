<template>
    <div id="func2" style="display: block">
        <h1 class="functitle">已有产品管理界面</h1>
        <div class="window1">
            <button @click="productAdd" class="product_add">新增产品</button>
            <ol class="products">
                <li id="productinfo"></li>
            </ol>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
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
}

</script>

<style scoped>
.window1 ol {
    position: relative;
    left: 3rem;
    top: 1rem;
}

.window1 li {
    background-color: rgb(241, 241, 241);
    width: 66rem;
    height: auto;
}

.window1 .product_add {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
}
</style>