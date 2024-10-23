<template>
  <q-page padding>
    <!-- content -->
    <div class="flex justify-center">
      <div class="col-6">
        <q-card style="border-radius: 8px; width: 100%">
          <div class="row flex items-center q-pa-md">
            <q-avatar size="lg" class="q-ma-xs">
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

        <q-scroll-area style="height: 245px; width: 100%">
          <!-- CREATE STORY -->
          <div
            v-scroll.self="onScroll"
            class="row no-wrap q-py-md flex"
            style="max-width: 100%"
          >
            <q-card
              class="my-card text-white q-mr-sm"
              style="width: 125px; border-radius: 10px"
            >
              <div style="max-width: 75px">
                <q-img
                  alt="icons/rui.jpg"
                  src="icons/rui.jpg"
                  style="width: 125px; height: 210px; border-radius: 10px"
                >
                  <div
                    class="absolute-bottom text-center"
                    style="
                      background-color: white;
                      color: black;
                      font-weight: 500;
                    "
                  >
                    <div class="q-pa-xs"></div>
                    <q-avatar
                      color="white"
                      style="position: absolute; bottom: 38px; left: 38px"
                      ><q-icon
                        size="45px"
                        color="primary"
                        name="add_circle"
                      ></q-icon
                    ></q-avatar>
                    <div>Create Story</div>
                  </div>
                </q-img>
              </div>
            </q-card>
            <!-- COMPONENTS -->

            <my-day
              v-for="myDay in myDays"
              :key="myDay.myDayName"
              :my-day-img="myDay.myDayImg"
              :icon-img="myDay.iconImg"
              :my-day-name="myDay.myDayName"
            ></my-day>
          </div>
        </q-scroll-area>

        <timeline-post></timeline-post>
      </div>
    </div>
  </q-page>
</template>

<script>
import MyDay from "src/components/MyDay.vue";
import TimelinePost from "src/components/TimelinePost.vue";
export default {
  name: "FeedPage",
  components: {
    MyDay,
    TimelinePost,
  },
  data() {
    return {
      myDays: [
        {
          myDayImg: "icons/emu.png",
          myDayName: "Akito Shinonome",
          iconImg: "icons/akito.jpg",
        },
        {
          myDayImg: "icons/emu.png",
          myDayName: "An Shiraishi",
          iconImg: "icons/an.jpg",
        },
        {
          myDayImg: "icons/emu.png",
          myDayName: "Mizuki Akiyama",
          iconImg: "icons/mizuki.jpg",
        },
        {
          myDayImg: "icons/emu.png",
          myDayName: "Marie Batller",
          iconImg: "sponsors/marie.jpg",
        },
        {
          myDayImg: "icons/emu.png",
          myDayName: "Hatsune Miku3",
          iconImg: "icons/hatsune_miku3.jpg",
        },
      ],
    };
  },
  methods: {
    onScroll(event) {
      console.log(event);
    },
  },
};
</script>
