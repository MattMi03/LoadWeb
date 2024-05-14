<template>
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
</template>

<script>

export default {
    data() {
        return {
            risk: 0,
        };
    },
    methods: {
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
    },
};

</script>

<style scoped>

.functitle {
    margin-top: 10px;
    text-align: center;
}

.window1 {
    position: absolute;
    background-color: rgb(234, 234, 234);
    top: 3rem;
    height: 45rem;
    left: 5rem;
    right: 5rem;
    z-index: 0;
}

.window1 p {
    margin-left: 2rem;
    margin-top: 1rem;
}

.present_index {
    position: relative;
    font-size: 20px;
}

.index_chart1 {
    text-align: center;
    height: 25rem;
    width: 30rem;
    background-color: aqua;
    position: absolute;
}

.index_chart2 {
    text-align: center;
    margin-left: 50rem;
    height: 25rem;
    width: 30rem;
    left: 40rem;
    background-color: aqua;
    position: absolute;
}

.index_change {
    top: 27rem;
    position: relative;
}
</style>