<template>
  <a :href="link">
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <div style="flex: 1; max-width: 350px">
        <q-img
          :alt="seiyuuPic"
          :src="seiyuuPic"
          style="width: 225px; height: 350px"
          ><div class="absolute-bottom text-subtitle2 text-center">
            {{ seiyuuName }}
          </div></q-img
        >
      </div>
    </q-card>
  </a>
</template>

<script>
export default {
  name: "SeiyuuCard",
  setup() {
    return {};
  },
  props: {
    seiyuuName: String,
    seiyuuId: Number,
  },
  data() {
    return {
      seiyuuPic: "",
      link: "",
    };
  },
  async mounted() {
    try {
      this.link = `#/seiyuu/${this.seiyuuId}`;
      const response = await this.$api.get(`/acs/getPic/${this.seiyuuName}`);
      this.seiyuuPic = `seiyuuPics/${response.data}.jpg`;
    } catch (error) {
      this.seiyuuPic = `seiyuuPics/default.jpg`;
      console.log("Error fetching data: ", error);
    }
  },
};
</script>
