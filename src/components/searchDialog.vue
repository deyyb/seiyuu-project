<template>
  <q-card style="width: 350px">
    <div class="row q-pa-sm">
      <!-- For logo and search -->
      <q-avatar size="lg" class="q-ma-xs">
        <q-icon name="arrow_back" @click="closeSearch" />
      </q-avatar>
      <div class="q-ma-xs" style="width: 220px">
        <q-input
          :v-model="inputValue"
          autofocus
          dense
          rounded
          standout="bg-fb"
          color="black"
          placeholder="Search Facebook"
          input-class="text-fb"
        >
        </q-input>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    closeSearch() {
      this.$emit("close-search");
      // console.log("closing");
    },
  },
  // watch: (
  //   inputValue(val) {
  //     if (!val) {

  //     }
  //   }
  // )
};
</script>
