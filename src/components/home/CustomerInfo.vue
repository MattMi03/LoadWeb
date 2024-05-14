<template>
    <table class="customers_info_0" border="1">
        <thead>
            <tr>
                <td class="title" colspan="6">
                    Customer<button type="button" @click="closeInfo">关闭</button>
                </td>
            </tr>
        </thead>
        <tr>
            <th>
                id<input :v-if="showSelect" :value="selectBoxes.id" type="checkbox" />
            </th>
            <th>
                用户名<input :v-if="showSelect" :value="selectBoxes.username" type="checkbox" />
            </th>
            <th>
                性别<input :v-if="showSelect" :value="selectBoxes.gender" type="checkbox" />
            </th>
            <th>
                生日<input :v-if="showSelect" :value="selectBoxes.birth" type="checkbox" />
            </th>
            <th>
                实名认证<input :v-if="showSelect" :value="selectBoxes.identify" type="checkbox" />
            </th>
            <th class="avatar">
                avatar<input :v-if="showSelect" :value="selectBoxes.avatar" type="checkbox" />
            </th>
        </tr>
        <tr>
            <td>{{ customer.id }}</td>
            <td>{{ customer.username }}</td>
            <td>{{ customer.gender }}</td>
            <td>{{ customer.birth }}</td>
            <td>{{ customer.name }}</td>
            <td rowspan="3" class="avatar">test</td>
        </tr>
        <tr>
            <th>Info<input :v-if="showSelect" type="checkbox" /></th>
            <th>Info<input :v-if="showSelect" type="checkbox" /></th>
            <th>Info<input :v-if="showSelect" type="checkbox" /></th>
            <th>Info<input :v-if="showSelect" type="checkbox" /></th>
            <th>Info<input :v-if="showSelect" type="checkbox" /></th>
        </tr>
        <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
        </tr>
        <tr>
            <td colspan="6" class="info">
                test<input :v-if="showSelect" :value="selectBoxes.intro" type="checkbox" />
            </td>
        </tr>
    </table>

    <div id="formContainer">
        <select></select>   
        <div id="selectBox">
            <ul>
                <li><input type="checkbox" /></li>
                <li><input type="checkbox" /></li>
                <li><input type="checkbox" /></li>
                <li><input type="checkbox" /></li>
            </ul>
            <button value="5">确定</button>
        </div>
        <div><input :value="showSelect" type="checkbox" />显示勾选框</div>
        <button @click="Reset">重置并提示</button>
    </div>
</template>


<script>
export default {
    emit: ["selectToReset", "close"],
    props: ["customer"],
    data() {
        return {
            showSelect: false,
            selectBoxes: {
                id: false,
                username: false,
                gender: false,
                birth: false,
                identify: false,
                avatar: false,
                intro: false,
            },
        };
    },
    methods: {
        Reset() {
            this.$emit("selectToReset", this.selectBoxes);
        },
        closeInfo() {
            this.$emit("close");
        },
    },
};
</script>
<style scoped></style>

<style scoped>
.customers_info_0 {
    border-collapse: collapse;
    margin: 2rem auto;
    background-color: #ffffff;
    width: 80%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.customers_info_0 thead .title {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
    padding: 0.5rem;
    background-color: #f5f5f5;
    position: relative;
}

.customers_info_0 thead button {
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    margin-left: 1rem;
    border: none;
    background-color: #e74c3c;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.customers_info_0 th,
.customers_info_0 td {
    border: 1px solid #ddd;
    padding: 0.75rem;
    text-align: center;
}

.customers_info_0 th {
    background-color: #f9f9f9;
    font-weight: normal;
}

.customers_info_0 tr:nth-child(even) {
    background-color: #f2f2f2;
}

.customers_info_0 .avatar {
    width: 150px;
}

.customers_info_0 .info {
    background-color: #f9f9f9;
    text-align: left;
    padding: 1rem;
}

#formContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
}

#selectBox {
    margin: 1rem 0;
}

#selectBox ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 0.5rem;
}

#selectBox li {
    display: inline-block;
}

#selectBox button {
    padding: 0.5rem 1rem;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

#selectBox button:hover {
    background-color: #2980b9;
}

#formContainer div,
#formContainer button {
    margin-top: 0.5rem;
}
</style>