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
</style>