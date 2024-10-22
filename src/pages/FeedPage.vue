<template>
  <q-page padding>
    <!-- content -->
    <div class="flex justify-center">
      <q-card style="border-radius: 10px">
        <div class="row flex items-center q-ma-md">
          <q-avatar size="md" class="q-ma-xs">
            <img src="icons/fb.svg" />
          </q-avatar>
          <q-btn
            align="left"
            style="
              background-color: #e9ebee;
              color: gray;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-size: medium;
              font-weight: 400;
              width: 450px;
            "
            class="q-mx-sm"
            no-caps
            flat
            rounded
            label="What's on your mind, Rui?"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-btn>
        </div>

        <q-separator class="q-mx-md"></q-separator>

        <div class="row q-ma-sm justify-center">
          <q-btn flat no-caps>
            <q-icon
              size="md"
              name="video_camera_front"
              color="pink-13"
            ></q-icon>
            <div class="h7-label q-mx-sm" style="font-size: 14px">
              Live Video
            </div>
          </q-btn>
          <q-btn flat no-caps>
            <q-icon size="md" name="photo_library" color="green-5"></q-icon>
            <div class="h7-label q-mx-sm" style="font-size: 14px">
              Photo/Video
            </div>
          </q-btn>
          <q-btn flat no-caps>
            <q-icon size="md" name="tag_faces" color="amber-5"></q-icon>
            <div class="h7-label q-mx-sm" style="font-size: 14px">
              Feelings/Activity
            </div>
          </q-btn>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "FeedPage",
};
</script>
