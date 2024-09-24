<template>
  <q-page padding>
    <div v-scroll="onScroll">
      <!-- content -->
      <q-chat-message
        v-for="user in testUsers"
        :key="user"
        :text="[user.testUserName]"
      />
    </div>
  </q-page>
  <q-footer elevated class="bg-grey-8 text-white">
    <q-input
      bottom-slots
      v-model="inputName"
      label="Name"
      counter
      maxlength="99"
      @keyup.enter="submitData"
    >
      <template v-slot:before>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
        </q-avatar>
      </template>

      <template v-slot:hint> Input User </template>

      <template v-slot:after>
        <q-btn round flat icon="send" @click="submitData" />
      </template>
    </q-input>
  </q-footer>
</template>

<script>
export default {
  name: "PageName",
  setup() {
    function onScroll(position) {
      // when this method is invoked then it means user
      // has scrolled the page to `position`
      //
      // `position` is an Integer designating the current
      // scroll position in pixels.
    }

    return { onScroll };
  },
  data() {
    return {
      testUsers: [],
      inputName: "",
    };
  },
  async mounted() {
    try {
      const response = await this.$api.get(`/test/all`);
      console.log(response);
      this.testUsers = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async submitData() {
      const testUserData = {
        testUserName: this.inputName,
      };
      await this.$api
        .post("/test/submit", testUserData)
        .then((response) => {
          console.log("Response:", response.data);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
      await this.refetchData();
      this.inputName = "";
    },
    async refetchData() {
      try {
        const response = await this.$api.get(`/test/all`);
        console.log(response);
        this.testUsers = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
