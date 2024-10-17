<template>
  <h6 class="q-ma-md" style="margin-left: 25px; color: gray">Sponsored</h6>
  <Sponsor
    v-for="sponsor in sponsors"
    :key="sponsor.label"
    :pic="sponsor.icon"
    :label="sponsor.label"
    :link-label="sponsor.linkLabel"
    :link="sponsor.link"
  ></Sponsor>
</template>

<script>
import Sponsor from "./SponsorComponent.vue";

export default {
  // name: 'ComponentName',
  components: {
    Sponsor,
  },
  data() {
    return {
      sponsors: [
        {
          icon: "public/sponsors/bibideba.png",
          label: "Bibideba",
          linkLabel: "youtu.be/8ZP5eqm4JqM",
          link: "https://www.youtube.com/watch?v=8ZP5eqm4JqM",
        },
        {
          icon: "public/sponsors/marie.jpg",
          label: "Marie-nyan",
          linkLabel: "/@mariechanneru",
          link: "https://www.youtube.com/@mariechanneru",
        },
      ],
    };
  },
};
</script>
