<template>
  <div class="q-pa-md">
    <q-field stack-label>
      <q-input
        v-model="content"
        type="text"
        class="self-center full-width no-outline"
        :loading="loadingState"
        :autofocus="true"
        label="Seach Seiyuus"
        placeholder="Enter Name"
      />
    </q-field>
    <br />
    {{ content }}
    <br />
    <q-table
      flat
      bordered
      title="Seiyuus"
      :rows="rows"
      :columns="columns"
      no-data-label="I didn't find anything for you"
      row-key="seiyuuId"
      @row-click="handleRowClick"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      columns: [
        {
          name: "seiyuuName",
          required: true,
          label: "Seiyuu Name",
          align: "left",
          field: "seiyuuName",
          sortable: true,
        },
        {
          name: "totalRoles",
          align: "center",
          label: "Total Roles",
          field: "totalRoles",
          sortable: true,
        },
      ],
    };
  },
  data() {
    return {
      content: "",
      timeout: null,
      rows: [],
      loadingState: false,
    };
  },
  watch: {
    content(newVal) {
      // Clear the previous timeout
      clearTimeout(this.timeout);

      if (newVal === "") {
        this.handleEmptySearch();
        return;
      }

      // Set a new timeout to delay the search function
      this.timeout = setTimeout(() => {
        this.fetchSearch();
      }, 1000); // Delay of 1 second
    },
  },
  methods: {
    search() {
      console.log(this.content);
    },
    async handleEmptySearch() {
      console.log("Fetching the whole page again");
      try {
        this.loadingState = true;
        const response = await this.$api.get(`/acs/seiyuu_total/`);
        console.log(response);
        this.rows = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loadingState = false;
      }
    },
    handleRowClick(evt, row, index) {
      console.log("diri", row.seiyuuId);
      this.$router.push(`${row.seiyuuId}`);
    },
    async fetchSearch() {
      try {
        this.loadingState = true;
        const sResponse = await this.$api.get(
          `/acs/tseiyuu_total/${this.content}`
        );
        console.log(sResponse);
        this.rows = sResponse.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loadingState = false;
      }
    },
  },
  async mounted() {
    try {
      const response = await this.$api.get(`/acs/seiyuu_total/`);
      console.log(response);
      this.rows = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
