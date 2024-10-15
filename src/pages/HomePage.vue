<template>
  <q-page padding>
    <!-- content -->
    <q-infinite-scroll @load="onLoad" :offset="250">
      <div class="q-pa-md row items-start q-gutter-md">
        <div v-for="seiyuu in seiyuus" :key="seiyuu.seiyuuId">
          <seiyuu-card
            :seiyuu-name="seiyuu.seiyuuName"
            :seiyuu-id="seiyuu.seiyuuId"
          />
        </div>
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
    <q-card v-show="end">No more data!</q-card>
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
      page: 0,
      end: false,
    };
  },
  async mounted() {
    try {
      const response = await this.$api.get(`seiyuu/allSeiyuu/0`);
      this.seiyuus.push(...response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    onLoad(index, done) {
      if (this.page < 150) {
        setTimeout(async () => {
          const response = await this.$api.get(
            `seiyuu/allSeiyuu/${this.page++}`
          );
          this.seiyuus.push(...response.data);
          done();
        }, 2000);
      } else {
        this.end = true;
        done();
      }
    },
  },
};
</script>
