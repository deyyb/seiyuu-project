<template>
  <div class="q-ma-sm">
    <q-btn :href="link" flat align="left" class="full-width" no-caps>
      <div class="row">
        <div>
          <q-avatar rounded size="120px" color="black">
            <img :src="pic" />
          </q-avatar>
        </div>
        <div class="col flex items-center">
          <div class="q-pa-md flex items-start">
            <div class="full-width flex item-start">
              <div>{{ label }}</div>
            </div>
            <div class="small-lct" style="font-size: x-small">
              {{ linkLabel }}
            </div>
          </div>
        </div>
      </div>
    </q-btn>
  </div>
</template>

<script>
export default {
  name: "SponsorComponent",
  props: {
    pic: String,
    label: String,
    linkLabel: String,
    link: String,
  },
};
</script>
