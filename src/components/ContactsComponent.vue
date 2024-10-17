<template>
  <q-btn flat align="left" class="full-width" no-caps>
    <q-avatar size="lg" class="q-ma-xs">
      <img :src="pic" />
    </q-avatar>
    <q-avatar
      size="13px"
      round
      color="white"
      class="overlapping"
      style="right: 20px; margin-top: 30px"
    >
      <q-avatar style="margin-left: 1px" size="10px" color="green"> </q-avatar
    ></q-avatar>
    <div class="q-pa-xs">
      <span style="margin: 0 0 0 0">{{ name }}</span>
    </div>
  </q-btn>
</template>

<script>
export default {
  name: "ContactsComponent",
  props: {
    pic: String,
    name: String,
  },
};
</script>
