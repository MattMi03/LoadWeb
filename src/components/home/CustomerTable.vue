<template>
  <section id="func3" style="display: block">
    <h1 class="functitle">客户管理界面</h1>
    <div class="window1">
      <table class="customers_table_0" :id="tableid" border="1">
        <thead>
          <tr class="thead">
            <th v-for="chead in cheads" :key="chead">{{ chead }}</th>
          </tr>
        </thead>
        <div class="customers_table_list" :id="listid">
          <tr v-for="cdatum in cdata" :key="cdatum">
            <td>{{ cdatum.id }}</td>
            <td>{{ cdatum.name }}</td>
            <td>{{ cdatum.state }}</td>
            <td>{{ cdatum.info4 }}</td>
            <td>{{ cdatum.info5 }}</td>
            <td>
              <button type="button" class="details" @click="myfunc(cdatum.id)">
                详情
              </button>
            </td>
          </tr>
        </div>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  inject: ["show_details"],
  emit: [],
  props: {
    cheads: {
      type: [],
      required: false,
      default: ["id", "name", "state", "info4", "info5", "info6"],
    },
    cdata: {
      type: [],
      required: true,
    },
    tableid: {
      type: String,
      required: false,
      default: "",
    },
    listid: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      customers: [],
    };
  },
  watch: {},
  computed: {},
  methods: {
    myfunc(id) {
      this.show_details(id);
    },
  },
};
</script>

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

.customers_table_0 {
  border: 1px;
  border-color: #000;
  position: relative;
  left: 1rem;
  top: 1rem;
  background-color: #ffffff;
  /*display: none !important;*/
  z-index: 0;
}

.customers_table_0 .id,
.customers_table_0 .name {
  width: 150px;
  height: 30px;
}

.customers_table_0 .loan_state {
  width: 200px;
}

.customers_table_0 tr {
  height: 30px;
}

.customers_table_0 td {
  text-align: center;
}

.customers_table_0 .functions {
  width: 200px;
}

.customers_table_0 .details {
  width: 100px;
}

.customers_info_0 {
  border: 1px;
  border-color: #000;
  left: 2rem;
  top: 3.5rem;
  background-color: #ffffff;
  z-index: 1;
  position: absolute;
  display: none;
}

.customers_info_0 thead td {
  height: 10px;
}

.customers_info_0 thead button {
  width: 20px;
  position: relative;
  left: 34rem;
  bottom: 1rem;
}

.customers_info_0 tr {
  height: 30px;
}

.customers_info_0 td {
  text-align: center;
  height: 70px;
}

.customers_info_0 th {
  width: 200px;
}

.customers_info_0 .avatar {
  width: 150px;
  -ms-grid-row-span: 2;
}

.customers_info_0 .function {
  width: 30px;
  height: 22px;
  position: relative;
  top: 1rem;
  left: 4rem;
}

.customers_info_0 td.avatar button {
  position: relative;
  top: 4.5rem;
  left: 2.8rem;
}

.customers_info_0 .info {
  height: 500px;
}

.customers_info_0 .info button {
  position: relative;
  top: 14rem;
  left: 34rem;
}
</style>
