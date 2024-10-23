<template>
  <q-card
    class="my-card text-white q-mr-sm"
    style="width: 125px; border-radius: 10px"
  >
    <div style="max-width: 75px">
      <q-img
        :alt="myDayImg"
        :src="myDayImg"
        style="width: 125px; height: 210px; border-radius: 10px"
      >
        <q-avatar class="q-ma-sm" color="primary" style="position: absolute"
          ><q-avatar size="lg" style="position: absolute; left: 5px; top: 5px"
            ><q-img :src="iconImg"></q-img></q-avatar
        ></q-avatar>
        <span
          class="q-ma-md"
          style="
            position: absolute;
            width: 100px;
            bottom: 1%;
            font-weight: 700;
            text-shadow: 2px 2px 5px #000000;
          "
          >{{ myDayName }}</span
        >
      </q-img>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "ComponentName",
  props: {
    iconImg: String,
    myDayImg: String,
    myDayName: String,
  },
};
</script>
