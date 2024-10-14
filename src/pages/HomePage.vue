<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md row items-start q-gutter-md">
      <div class="col-2" v-for="seiyuu in obj" :key="seiyuu.seiyuuName">
        <seiyuu-card
          :seiyuu-name="seiyuu.seiyuuName"
          :seiyuu-pic="seiyuu.seiyuuPic"
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
      obj: [
        { seiyuuName: "Rie Takahashi", seiyuuPic: "try" },
        { seiyuuName: "Inori Minase", seiyuuPic: "try" },
      ],
    };
  },
};
</script>
