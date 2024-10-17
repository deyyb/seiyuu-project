<template>
  <left-container v-show="tab === 'home'"></left-container>
</template>

<script>
import LeftContainer from "src/components/LeftContainer.vue";
export default {
  // name: 'PageName',
  props: {
    tab: String,
  },
  components: {
    LeftContainer,
  },
};
</script>
