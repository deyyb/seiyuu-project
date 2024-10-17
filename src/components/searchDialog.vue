<template>
  <q-card style="width: 300px">
    <div class="row q-pa-sm">
      <!-- For logo and search -->
      <div class="row" style="width: 100%">
        <q-avatar size="lg" class="q-ma-xs">
          <q-icon name="arrow_back" @click="closeSearch" />
        </q-avatar>
        <div class="col-9 q-ma-xs">
          <div style="width: 100%">
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
      </div>

      <!-- For Recent -->
      <div class="row q-ma-xs" style="width: 100%">
        <div class="col-6">
          <div class="flex justify-start">
            <h6 style="color: black; margin: 0 0 0 0">Recent</h6>
          </div>
        </div>
        <div class="col-6">
          <div class="flex justify-end">
            <div style="color: black" class="q-ma-xs">
              <a href="#/fb" style="text-decoration: none">edit</a>
            </div>
          </div>
        </div>
      </div>

      <!-- For the recent searches -->
      <recent-search
        v-for="search in searches"
        :key="search.name"
        :icon-pic="search.pic"
        :name="search.name"
        :new-value="search.new"
      />
    </div>
  </q-card>
</template>

<script>
import RecentSearch from "./RecentSearch.vue";

export default {
  components: {
    RecentSearch,
  },
  data() {
    return {
      inputValue: "",
      searches: [
        {
          pic: "public/icons/rui.jpg",
          name: "Rui Kamishiro",
          new: "7",
        },
        {
          pic: "public/icons/kanade.jpg",
          name: "Kanade Yoisaki",
          new: "0",
        },
        {
          pic: "public/icons/mizuki.jpg",
          name: "Mizuki Akiyama",
          new: "12",
        },
        {
          pic: "public/icons/kohane.png",
          name: "Kohane Azusawa",
          new: "5",
        },
        {
          pic: "public/icons/emu.png",
          name: "Emu Otori",
          new: "12",
        },
      ],
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
