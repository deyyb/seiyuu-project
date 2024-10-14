<template>
  <q-card class="my-card">
    <div>My component</div>
    <div>{{ seiyuuName }}</div>
    <div>{{ seiyuuPic }}</div>
  </q-card>
</template>

<script>
export default {
  name: "SeiyuuCard",
  setup() {
    return {};
  },
  props: {
    seiyuuName: String,
    seiyuuPic: String,
  },
};
</script>
