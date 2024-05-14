<template>
    <section id="func3">
        <div v-if="!isdetail">
            <h1 class="functitle">客户管理界面</h1>
            <div class="window1">
                <input type="text" placeholder="Search" v-model="searchValue" />
                <button @click="search">确认</button>
                <customer-table :cdata="customers"></customer-table>
            </div>
        </div>
        <customer-info v-else :customer="customerInfo" @close="hide_detail"></customer-info>
    </section>
</template>

<script>
import CustomerTable from "@/components/home/CustomerTable.vue";
import CustomerInfo from "@/components/home/CustomerInfo.vue";

export default {
    emit: [
        // "show_detail"
    ],
    props: {},
    components: {
        CustomerTable,
        CustomerInfo,
    },
    data() {
        return {
            FuncId: 3,
            customers: [
                {
                    id: 10001,
                    name: "张三",
                    loan_state: "not loan",
                    info4: null,
                    info5: null,
                },
                {
                    id: 10002,
                    name: "李四",
                    loan_state: "not loan",
                    info4: null,
                    info5: null,
                },
            ],
            isdetail: false,
            customerInfo: {
                id: "",
                username: "",
                gender: "",
                name: "",
                birth: "",
                identify: "",
                avatar: "",
                intro: "",
            },
            searchValue: String,
        };
    },
    watch: {},
    computed: {},
    methods: {
        search() { },
        show_details(id) {
            // let sql = "SELECT * FROM " + "" + "WHERE id = " + id;
            if (this.customerInfo.id === id) {
                this.isdetail = true;
            } else {
                this.isdetail = true;
            }
        },
        hide_detail() {
            this.isdetail = false;
        },
    },
    provide() {
        return {
            show_details: this.show_details,
        };
    },
};
</script>


<style scoped>
#func3 .window1 {
    background-color: #00000000;
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
</style>