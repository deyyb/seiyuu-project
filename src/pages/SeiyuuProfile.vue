<template>
  <q-page padding>
    <div class="q-gutter-md" style="display: flex; flex-wrap: wrap">
      <q-card
        class="my-card text-white"
        style="
          background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
          width: 100%;
        "
      >
        <div class="row">
          <!-- Image Section -->
          <div style="flex: 1; padding: 16px; max-width: 350px">
            <img
              alt="seiyuuPic"
              src="seiyuuPic"
              style="width: 225px; height: 350px"
            />
          </div>

          <!-- Text Section -->
          <div style="flex: 2; padding: 16px">
            <q-card-section>
              <p class="text-h6">{{ seiyuuName }}</p>
              <p class="text-subtitle2">Total Roles: {{ seiyuuTotalRoles }}</p>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Notable Roles:
              <div v-for="role in seiyuuThreeRoles" :key="role.acsId">
                * {{ role.characterName }} in {{ role.animeName }}
              </div>
            </q-card-section>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "SeiyuuComponent",
  data() {
    return {
      seiyuuId: 1,
      seiyuuName: "placeholder",
      seiyuuTotalRoles: 0,
      seiyuuThreeRoles: [],
    };
  },
  async mounted() {
    this.seiyuuId = this.$route.params.seiyuuId;
    try {
      // Make the API request using the global $api instance
      const response = await this.$api.get(`/seiyuu/id/${this.seiyuuId}`); // Replace '/your-endpoint' with your actual endpoint
      const totalRoles = await this.$api.get(
        `/acs/seiyuuTotalRoles/${this.seiyuuId}`
      );
      const threeRoles = await this.$api.get(`/acs/rand/${this.seiyuuId}`);
      console.log(response, totalRoles, threeRoles);
      this.seiyuuName = response.data.seiyuuName;
      this.seiyuuTotalRoles = totalRoles.data;
      this.seiyuuThreeRoles = threeRoles.data;
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  },
};
</script>
