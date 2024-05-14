<template>
    <section id="func5" style="display: block">
        <h1 class="functitle">贷款处理界面</h1>
        <div class="window1">
            <div class="bpage">
                <button type="button" class="preloan" @click="tableSelect(0)">
                    preloan
                </button>
                <button type="button" class="loaning" @click="tableSelect(1)">
                    loaning
                </button>
                <button type="button" class="loaned" @click="tableSelect(2)">
                    loaned
                </button>
                <p class="checkcust">
                    <input type="checkbox" v-model="isspecial" />
                    show special
                </p>
            </div>
            <customer-table v-if="table_present === 0" :tableid="'preloan_table'" :listid="'preloan_table'"
                :cheads="preloan_thead" :cdata="preloan_tdata"></customer-table>
            <customer-table v-if="table_present === 1" :tableid="'loaning_table'" :listid="'loaning_table'"
                :cheads="loaning_thead" :cdata="loaning_tdata"></customer-table>
            <customer-table v-if="table_present === 2" :tableid="'loaned_table'" :listid="'loaned_table'"
                :cheads="loaned_thead" :cdata="loaned_tdata"></customer-table>
        </div>
    </section>
</template>

<!-- <script>
import CustomerTable from "./CustomerTable.vue";

export default {
    emit: ["show_detail"],
    props: {},
    components: {
        CustomerTable,
    },
    data() {
        return {
            table_name: "CustomerTable",
            table_present: 0,
            isspecial: false,
            risk_limit: 0,
            preloan_thead: [
                "id",
                "name",
                "quest_id",
                "quest_result",
                "risk_index",
                "functions",
            ],
            preloan_tdata: [{}],
            loaning_thead: [
                "id",
                "name",
                "quest_id",
                "quest_result",
                "risk_index",
                "functions",
            ],
            loaning_tdata: [{}],
            loaned_thead: [
                "id",
                "name",
                "quest_id",
                "quest_result",
                "risk_index",
                "functions",
            ],
            loaned_tdata: [{}],
        };
    },
    watch: {},
    computed: {},
    methods: {
        // eslint-disable-next-line no-unused-vars
        tableSelect(id) {
            if (this.tableSelect !== id) {
                this.tableSelect = id;
            } else return;
        },
        // eslint-disable-next-line no-unused-vars
        show_cdetail(id) {
            this.$emit("show_detail", id);
        },
        // eslint-disable-next-line no-unused-vars
        preloan_func(id) {
            /**/
        },
        // eslint-disable-next-line no-unused-vars
        loaning_func(id) {
            /**/
        },
        // eslint-disable-next-line no-unused-vars
        loaned_func(id) {
            /**/
        },
        getNewTable(table_name) {
            // eslint-disable-next-line no-unused-vars
            let sql =
                "SELECT " +
                "" +
                " FROM " +
                table_name +
                " WHERE risk_index <= " +
                this.risk_limit;
        },
    },
    mounted: {},
};
</script> -->

<style scoped>
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

#func5 .bpage button {
    border: #ffffff;
    background-color: aliceblue;
    position: relative;
    bottom: 35px;
    right: 10px;
    width: 100px;
    height: 50px;
}

#func5 .bpage button {
    height: 44px;
    padding: 0 15px;
    line-height: 1.2;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    transition: opacity 0.2s;
    outline: none;
    position: relative;
}

#func5 .bpage button::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: #000;
    border: inherit;
    border-color: #000;
    border-radius: inherit;
    transform: translate(-50%, -50%);
    opacity: 0;
    content: " ";
}

#func5 .bpage button:active::before {
    opacity: 0.1;
}

#func5 #preloan_table {
    display: block;
    /*display: none;*/
}

#func5 #preloan_table .risk_index {
    color: aquamarine;
}

#func5 #preloan_table .quest_result {
    color: rgb(169, 250, 169);
}

#func5 #loaning_table {
    display: none;
}

#func5 #loaned_table {
    display: none;
}
</style>