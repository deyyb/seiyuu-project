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
              v-model="inputValue"
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

      <div v-if="fetching">
        <q-btn flat align="left" class="full-width" no-caps>
          <q-avatar rounded size="md" class="q-ma-xs">
            <q-icon name="search"></q-icon>
          </q-avatar>
          <div class="q-pa-xs">
            <span style="margin: 0 0 0 0">{{ inputValue }}</span>
          </div>
        </q-btn>
      </div>

      <div v-else>
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
    </div>

    <div class="row flex justify-center">
      <q-circular-progress
        v-show="loading"
        indeterminate
        rounded
        size="25px"
        color="blue-grey-11"
        class="q-ma-md"
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
      fetching: false,
      loading: false,
      timeout: null,
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
    fetchSearch() {
      this.fetching = true;
      this.loading = false;
    },
    handleEmptySearch() {
      this.fetching = false;
      this.loading = false;
    },
  },
  watch: {
    inputValue(newVal) {
      // console.log(newVal);

      clearTimeout(this.timeout);
      this.fetching = true;
      this.loading = true;

      if (newVal === "") {
        this.handleEmptySearch();
        return;
      }

      // Set a new timeout to delay the search function
      this.timeout = setTimeout(() => {
        this.fetchSearch();
      }, 1000);
    },
  },
};
</script>
