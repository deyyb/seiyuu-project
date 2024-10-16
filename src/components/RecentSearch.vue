<template>
  <div class="row q-ma-xs" style="width: 100%">
    <div class="col-2" style="margin-right: 10px">
      <div class="flex justify-start q-ma-sm">
        <q-avatar size="lg">
          <img :src="iconPic" />
        </q-avatar>
      </div>
    </div>
    <div class="row col-7 flex items-center">
      <div class="col-12">
        <h6 style="color: black; margin: 0 0 0 0">{{ name }}</h6>
      </div>
      <div v-if="show">
        <q-badge color="blue" rounded class="q-mr-sm" />
        <span style="color: gray">{{ newValue }} new</span>
      </div>
      <div v-if="showPlus">
        <q-badge color="blue" rounded class="q-mr-sm" />
        <span style="color: gray">9+ new</span>
      </div>
    </div>
    <div class="col-2 flex justify-end">
      <div class="flex justify-end">
        <div style="color: black" class="q-ma-xs">
          <q-avatar size="lg" class="q-ma-xs">
            <q-icon name="clear"></q-icon>
          </q-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentSearch",
  props: {
    iconPic: String,
    name: String,
    newValue: String,
  },
  data() {
    return {
      show: false,
      showPlus: false,
      new: Number(this.newValue),
    };
  },
  mounted() {
    if (this.new > 0 && this.new < 9) {
      this.show = true;
    } else if (this.new > 9) {
      this.showPlus = true;
    }
  },
};
</script>
