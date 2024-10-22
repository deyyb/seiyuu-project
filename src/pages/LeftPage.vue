<template>
  <left-container v-show="tab === 'home'"></left-container>
  <videos-option v-show="tab === 'videos'"></videos-option>
  <marketplace-option v-show="tab === 'marketplace'"></marketplace-option>
  <groups-option v-show="tab === 'groups'"></groups-option>
</template>

<script>
import LeftContainer from "src/components/LeftContainer.vue";
import VideosOption from "src/components/VideosOption.vue";
import MarketplaceOption from "src/components/MarketplaceOption.vue";
import GroupsOption from "src/components/GroupsOption.vue";
export default {
  // name: 'PageName',
  props: {
    tab: String,
  },
  components: {
    LeftContainer,
    VideosOption,
    MarketplaceOption,
    GroupsOption,
  },
};
</script>
