<template>
  <q-page padding>
    <!-- content -->
    <div class="flex justify-center">
      <div class="col-6">
        <q-card style="border-radius: 8px; width: 100%">
          <div class="row flex items-center q-pa-md">
            <q-avatar size="md" class="q-ma-xs">
              <img src="icons/fb.svg" />
            </q-avatar>
            <div class="col-auto q-mx-sm" style="width: 450px">
              <q-btn
                align="left"
                style="
                  background-color: #e9ebee;
                  color: gray;
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  font-size: medium;
                  font-weight: 400;
                  width: 100%;
                "
                no-caps
                flat
                rounded
                label="What's on your mind, Rui?"
              >
              </q-btn>
            </div>
          </div>

          <q-separator class="q-mx-md"></q-separator>

          <div class="row q-pa-sm justify-center">
            <q-btn class="col-4" flat no-caps>
              <q-icon
                size="sm"
                name="video_camera_front"
                color="pink-13"
              ></q-icon>
              <div class="h7-label q-mx-sm" style="font-size: 12px">
                Live Video
              </div>
            </q-btn>
            <q-btn class="col-4" flat no-caps>
              <q-icon size="sm" name="photo_library" color="green-5"></q-icon>
              <div class="h7-label q-mx-sm" style="font-size: 12px">
                Photo/Video
              </div>
            </q-btn>
            <q-btn class="col-4" flat no-caps>
              <q-icon size="sm" name="tag_faces" color="amber-5"></q-icon>
              <div class="h7-label q-mx-sm" style="font-size: 12px">
                Feelings/Activity
              </div>
            </q-btn>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "FeedPage",
};
</script>
