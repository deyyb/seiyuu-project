<template>
  <q-layout view="hHh lpR fff" class="bg-fb">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated style="background: white">
      <div class="row">
        <div :class="headerSections">
          <div class="q-pa-sm">
            <!-- For logo and search -->
            <q-avatar size="lg" class="q-ma-xs">
              <img src="public/icons/fb.svg" />
            </q-avatar>
            <q-avatar size="lg" class="bg-fb q-ma-xs">
              <q-icon name="search" color="black"></q-icon>
            </q-avatar>
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

        <div :class="headerSections">
          <div class="q-pa-sm">
            <!-- This is where right component goes-->
            <q-drawer><q-scroll-area></q-scroll-area></q-drawer>
          </div>
        </div>
      </div>
    </q-header>

    <div class="row">
      <div
        v-show="!mediumScreen"
        class="col-3 q-pa-md"
        style="background: black"
      >
        <!-- This is where left component goes -->
      </div>
      <div :class="middleSize">
        <div class="q-pa-md">
          <!-- This is where pages get injected -->
          <q-page-container class="fit"><router-view /></q-page-container>
        </div>
      </div>
      <div
        v-show="!smallScreen"
        class="col-3 q-pa-md"
        style="background: black"
      >
        <!-- This is where right component goes-->
      </div>
    </div>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";

export default {
  name: "LayoutName",
  data() {
    return {
      tab: "home",
      smallScreen: false,
      mediumScreen: false,
      middleSize: "col-6",
      headerSections: "col-4",
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
    },
  },
  watch: {
    mediumScreen(val) {
      if (val) {
        this.middleSize = "col-9";
        this.headerSections = "col-6";
      } else {
        this.middleSize = "col-6";
        this.headerSections = "col-4";
      }
    },
    smallScreen(val) {
      if (val) {
        this.middleSize = "col-12";
      } else {
        this.middleSize = "col-9";
      }
    },
  },
};
</script>
