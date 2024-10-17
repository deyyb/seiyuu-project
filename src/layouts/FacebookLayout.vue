<template>
  <q-layout view="hHh lpR fff" class="bg-fb">
    <!-- Be sure to play with the Layout demo on docs -->
    <q-dialog v-model="dialog" position="top">
      <search-dialog @close-search="closeSearch()"></search-dialog>
    </q-dialog>
    <!-- (Optional) The Header -->
    <q-header elevated style="background: white">
      <div class="row">
        <div :class="leftHeaderSection">
          <div class="row q-pa-sm">
            <!-- For logo and search -->
            <q-avatar size="lg" class="q-ma-xs">
              <img src="public/icons/fb.svg" />
            </q-avatar>
            <q-avatar
              v-if="largeScreen"
              size="lg"
              class="bg-fb q-ma-xs"
              @click="openSearch"
            >
              <q-icon name="search" color="black"></q-icon>
            </q-avatar>
            <div v-else class="q-ma-xs">
              <q-input
                readonly
                dense
                rounded
                standout="bg-fb text-fb"
                label="Search Facebook"
                @click="openSearch"
              >
                <template v-slot:prepend>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
          </div>
        </div>

        <div v-show="!mediumScreen" class="col-4 q-pt-md">
          <!-- For tabs -->
          <q-tabs
            align="center"
            v-model="tab"
            class="ic-fb-not-active"
            active-color="primary"
          >
            <q-route-tab name="home" to="/fb" icon="home_filled" />
            <q-route-tab name="videos" to="/fb/videos" icon="ondemand_video" />
            <q-route-tab
              name="marketplace"
              to="/fb/marketplace"
              icon="storefront"
            />
            <q-route-tab name="groups" to="/fb/groups" icon="groups" />
          </q-tabs>
        </div>

        <div :class="rightHeaderSection">
          <div class="q-pt-sm flex justify-end">
            <!-- This is where right component goes-->
            <q-avatar size="lg" class="bg-fb q-ma-xs">
              <q-icon name="apps" color="black"></q-icon>
            </q-avatar>
            <q-avatar size="lg" class="bg-fb q-ma-xs">
              <q-icon name="chat_bubble" color="black"></q-icon>
            </q-avatar>
            <q-avatar size="lg" class="bg-fb q-ma-xs">
              <q-icon name="notifications" color="black"></q-icon>
            </q-avatar>
            <q-avatar size="lg" class="q-ma-xs">
              <img src="public/icons/rui.jpg" />
            </q-avatar>
            <q-avatar
              size="xs"
              round
              color="white"
              class="overlapping"
              style="right: 20px; margin-top: 30px"
            >
              <q-avatar size="14px" class="bg-fb">
                <q-icon size="16px" name="expand_more" color="black"></q-icon>
              </q-avatar>
            </q-avatar>
          </div>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <div class="row" style="height: 100%">
        <div v-show="!mediumScreen" class="col-3 q-pt-sm">
          <!-- This is where left component goes -->
          <left-container></left-container>
        </div>
        <div :class="middleSize">
          <div>
            <!-- This is where pages get injected -->
            <q-page><router-view /></q-page>
          </div>
        </div>
        <div v-show="!smallScreen" class="col-3" style="background: black">
          <!-- This is where right component goes-->
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import searchDialog from "src/components/searchDialog.vue";
import LeftContainer from "src/components/LeftContainer.vue";

export default {
  name: "LayoutName",
  components: {
    searchDialog,
    LeftContainer,
  },
  data() {
    return {
      tab: "home",
      smallScreen: false,
      mediumScreen: false,
      largeScreen: false,
      middleSize: "col-6",
      rightHeaderSection: "col-4",
      leftHeaderSection: "col-4",
      dialog: false,
    };
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      // console.log(this.$q);
      this.smallScreen = this.$q.screen.lt.sm;
      this.mediumScreen = this.$q.screen.lt.md;
      this.largeScreen = this.$q.screen.lt.lg;
    },
    openSearch() {
      this.dialog = true;
      // console.log("clicked");
    },
    closeSearch() {
      // console.log("niabot");
      this.dialog = false;
    },
  },
  watch: {
    mediumScreen(val) {
      if (val) {
        this.middleSize = "col-9";
        this.rightHeaderSection = "col-6";
        this.leftHeaderSection = "col-6";
      } else {
        this.middleSize = "col-6";
        this.rightHeaderSection = "col-4";
        this.leftHeaderSection = "col-4";
      }
    },
    smallScreen(val) {
      if (val) {
        this.middleSize = "col-12";
        this.rightHeaderSection = "col-8";
        this.leftHeaderSection = "col-4";
      } else {
        this.middleSize = "col-9";
        this.rightHeaderSection = "col-6";
        this.leftHeaderSection = "col-6";
      }
    },
  },
};
</script>
