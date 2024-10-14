<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md row items-start q-gutter-md">
      <div v-for="seiyuu in seiyuus" :key="seiyuu.seiyuuId">
        <seiyuu-card
          :seiyuu-name="seiyuu.seiyuuName"
          :seiyuu-id="seiyuu.seiyuuId"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import SeiyuuCard from "src/components/SeiyuuCard.vue";

export default {
  name: "HomePage",
  components: {
    SeiyuuCard,
  },
  data() {
    return {
      seiyuuName: "",
      link: ``,
      seiyuus: [],
    };
  },
  async mounted() {
    try {
      const response = await this.$api.get(`seiyuu/allSeiyuu/0`);
      this.seiyuus = response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
