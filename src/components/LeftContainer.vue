<template>
  <q-scroll-area style="height: 100%">
    <q-btn flat align="left" class="full-width" no-caps>
      <q-avatar size="md" class="q-ma-xs">
        <img src="public/icons/rui.jpg" />
      </q-avatar>
      <div class="q-pa-xs">
        <span style="margin: 0 0 0 0">Rui Kamishiro</span>
      </div>
    </q-btn>
    <q-btn flat align="left" class="full-width" no-caps>
      <q-avatar size="md" class="q-ma-xs">
        <q-icon color="primary" name="people"></q-icon>
      </q-avatar>
      <div class="q-pa-xs">
        <span style="margin: 0 0 0 0">Friends (32 online)</span>
      </div>
    </q-btn>
    <q-btn flat align="left" class="full-width" no-caps>
      <q-avatar size="md" class="q-ma-xs">
        <q-icon color="primary" name="history"></q-icon>
      </q-avatar>
      <div class="q-pa-xs">
        <span style="margin: 0 0 0 0">Memories</span>
      </div>
    </q-btn>
    <q-btn flat align="left" class="full-width" no-caps>
      <q-avatar size="md" class="q-ma-xs">
        <q-icon color="primary" name="bookmark"></q-icon>
      </q-avatar>
      <div class="q-pa-xs">
        <span style="margin: 0 0 0 0">Saved</span>
      </div>
    </q-btn>
    <q-btn flat align="left" class="full-width" no-caps>
      <q-avatar size="md" class="q-ma-xs">
        <q-icon color="primary" name="group"></q-icon>
      </q-avatar>
      <div class="q-pa-xs">
        <span style="margin: 0 0 0 0">Groups</span>
      </div>
    </q-btn>
    <q-btn flat align="left" class="full-width" no-caps>
      <q-avatar size="md" class="q-ma-xs">
        <q-icon color="primary" name="videocam"></q-icon>
      </q-avatar>
      <div class="q-pa-xs">
        <span style="margin: 0 0 0 0">Videos</span>
      </div>
    </q-btn>
    <q-btn flat align="left" class="full-width" no-caps>
      <q-avatar size="md" class="q-ma-xs">
        <q-icon color="primary" name="storefront"></q-icon>
      </q-avatar>
      <div class="q-pa-xs">
        <span style="margin: 0 0 0 0">Marketplace</span>
      </div>
    </q-btn>
    <q-btn flat align="left" class="full-width" no-caps>
      <q-avatar size="md" class="q-ma-xs">
        <q-icon color="primary" name="feed"></q-icon>
      </q-avatar>
      <div class="q-pa-xs">
        <span style="margin: 0 0 0 0">Feeds</span>
      </div>
    </q-btn>
    <q-btn flat align="left" class="full-width" no-caps>
      <q-avatar size="md" class="q-ma-xs" color="blue-grey-11">
        <q-icon color="black" name="expand_more"></q-icon>
      </q-avatar>
      <div class="q-pa-xs">
        <span style="margin: 0 0 0 0">See More</span>
      </div>
    </q-btn>

    <q-separator class="q-ma-md"></q-separator>

    <div class="row q-ma-xs" style="width: 100%">
      <div class="col-6">
        <div class="flex justify-start">
          <strong style="color: gray; margin: 0 0 0 0">Your Shortcuts</strong>
        </div>
      </div>
      <div class="col-6">
        <div class="flex justify-end">
          <div style="color: black" class="q-mr-sm">
            <a href="#/fb" style="text-decoration: none">edit</a>
          </div>
        </div>
      </div>
    </div>

    <q-btn flat align="left" class="full-width" no-caps>
      <q-avatar rounded size="md" class="q-ma-xs">
        <img src="public/icons/wxs.jpg" />
      </q-avatar>
      <div class="q-pa-xs">
        <span style="margin: 0 0 0 0">Wonderland X Showtime</span>
      </div>
    </q-btn>

    <q-btn flat align="left" class="full-width" no-caps>
      <q-avatar rounded size="md" class="q-ma-xs">
        <img src="public/icons/vbs.png" />
      </q-avatar>
      <div class="q-pa-xs">
        <span style="margin: 0 0 0 0">VIVID Bad Squad</span>
      </div>
    </q-btn>

    <q-btn flat align="left" class="full-width" no-caps>
      <q-avatar rounded size="md" class="q-ma-xs">
        <img src="public/icons/n25.jpg" />
      </q-avatar>
      <div class="q-pa-xs">
        <span style="margin: 0 0 0 0">Nightcord at 25:00</span>
      </div>
    </q-btn>

    <q-btn flat align="left" class="full-width" no-caps>
      <q-avatar rounded size="md" class="q-ma-xs">
        <img src="public/icons/khs.png" />
      </q-avatar>
      <div class="q-pa-xs">
        <span style="margin: 0 0 0 0">Kamiyama High School</span>
      </div>
    </q-btn>

    <div class="q-pa-sm">
      <a class="small-lct" href="#/fb" style="font-weight: bold">Privacy</a>
      <span style="color: gray"> &#183; </span>
      <a class="small-lct" href="#/fb" style="font-weight: bold">Terms</a>
      <span style="color: gray"> &#183; </span>
      <a class="small-lct" href="#/fb" style="font-weight: bold">Advertising</a>
      <span style="color: gray"> &#183; </span>
      <a class="small-lct" href="#/fb" style="font-weight: bold"
        >Ad Choices <q-icon name="warning_amber"></q-icon
      ></a>
      <span style="color: gray"> &#183; </span>
      <a class="small-lct" href="#/fb" style="font-weight: bold">Cookies</a>
      <span style="color: gray"> &#183; </span>

      <a
        class="small-lct"
        href="#/fb"
        style="color: gray; text-decoration: none"
        >More</a
      >
      <span style="color: gray"> &#183; </span>

      <a
        class="small-lct"
        href="#/fb"
        style="color: gray; text-decoration: none"
        >Meta <q-icon name="copyright" /> 2024</a
      >
    </div>
  </q-scroll-area>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
