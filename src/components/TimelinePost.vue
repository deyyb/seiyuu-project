<template>
  <q-card style="border-radius: 8px; width: 100%">
    <div class="row q-pa-md" style="width: 100%">
      <div class="col-auto" style="margin-right: 10px">
        <div class="flex justify-start q-ma-xs">
          <q-avatar size="lg">
            <img src="icons/kohane.png" />
          </q-avatar>
        </div>
      </div>
      <div class="row col flex items-center">
        <div class="col-12 flex items-start">
          <strong style="color: black; margin: 0 0 0 0">Kohane Azusawa</strong>
        </div>
        <div class="flex items-center">
          <span style="color: gray">Just Now</span>
          <q-avatar size="sm">
            <q-icon name="public" color="blue-grey-13"></q-icon>
          </q-avatar>
        </div>
      </div>
      <div class="col-auto flex justify-end">
        <div class="flex justify-end">
          <div style="color: black">
            <q-avatar size="lg" class="q-ma-xs">
              <q-icon name="more_horiz"></q-icon>
            </q-avatar>
          </div>
        </div>
      </div>

      <div class="col-auto flex justify-end">
        <div class="flex justify-end">
          <div style="color: black">
            <q-avatar size="lg" class="q-ma-xs">
              <q-icon name="clear"></q-icon>
            </q-avatar>
          </div>
        </div>
      </div>
    </div>

    <div class="row q-pa-md" style="padding-top: 0">Caption goes here</div>

    <q-img src="icons/kohane_card.png"></q-img>

    <q-separator class="q-mx-md"></q-separator>

    <div class="row q-pa-sm justify-center">
      <q-btn class="col-3" flat no-caps>
        <q-icon size="sm" name="thumb_up" color="blue-grey-11"></q-icon>
        <div class="h7-label q-mx-sm" style="font-size: 12px">Like</div>
      </q-btn>
      <q-btn class="col-3" flat no-caps>
        <q-icon size="sm" name="mode_comment" color="blue-grey-11"></q-icon>
        <div class="h7-label q-mx-sm" style="font-size: 12px">Comment</div>
      </q-btn>
      <q-btn class="col-3" flat no-caps>
        <q-icon size="sm" name="link" color="blue-grey-11"></q-icon>
        <div class="h7-label q-mx-sm" style="font-size: 12px">Copy</div>
      </q-btn>
      <q-btn class="col-3" flat no-caps>
        <q-icon size="sm" name="reply" color="blue-grey-11"></q-icon>
        <div class="h7-label q-mx-sm" style="font-size: 12px">Schare</div>
      </q-btn>
    </div>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
