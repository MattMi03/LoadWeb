<template>
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
