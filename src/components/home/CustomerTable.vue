<template>
  <div>
    <table class="customers_table_0" :id="tableid" border="1">
      <thead>
        <tr class="thead">
          <th v-for="chead in cheads" :key="chead">{{ chead }}</th>
          <!-- <th class="functions">Functions</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="cdatum in cdata" :key="cdatum.id">
          <td>{{ cdatum.id }}</td>
          <td>{{ cdatum.name }}</td>
          <td>{{ cdatum.state }}</td>
          <td>{{ cdatum.info4 }}</td>
          <td>{{ cdatum.info5 }}</td>
          <td>
            <button type="button" class="details" @click="myfunc(cdatum.id)">详情</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  inject: ["show_details"],
  props: {
    cheads: {
      type: Array,
      required: false,
      default: () => ["id", "name", "state", "info4", "info5", "info6"],
    },
    cdata: {
      type: Array,
      required: true,
    },
    tableid: {
      type: String,
      required: false,
      default: "",
    },
  },
  methods: {
    myfunc(id) {
      this.show_details(id);
    },
  },
};
</script>

<style scoped>
.customers_table_0 {
  border-collapse: collapse;
  margin: 1rem;
  background-color: #ffffff;
}

.customers_table_0 th,
.customers_table_0 td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.customers_table_0 th.functions,
.customers_table_0 td.functions {
  width: 100px;
}

.customers_table_0 th,
.customers_table_0 td {
  min-width: 100px;
}

.customers_table_0 .details {
  width: 80px;
}
</style>
