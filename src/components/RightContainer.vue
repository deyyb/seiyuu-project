<template>
  <q-scroll-area style="height: 100%">
    <SponsorsContainer></SponsorsContainer>

    <!-- YOUR PAGES AND PROFILES -->
    <q-separator class="q-ma-md"></q-separator>

    <div class="q-ml-sm">
      <div class="row q-ma-xs" style="width: 100%">
        <div class="col-11">
          <div class="flex justify-start">
            <div class="h7-label q-ml-md">Your Pages and Profiles</div>
          </div>
        </div>
        <div class="col q-pt-xs">
          <div class="flex justify-end">
            <div style="color: black" class="q-mr-sm">
              <a href="#/fb" style="text-decoration: none; margin: 0 25px"
                ><q-icon name="more_horiz"></q-icon
              ></a>
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
        <q-avatar size="md" class="q-ma-xs q-ml-md">
          <q-icon color="blue-grey-12" name="change_circle"></q-icon>
        </q-avatar>
        <div class="q-pa-xs">
          <span style="margin: 0 0 0 0">Switch to Page</span>
        </div>
      </q-btn>
      <q-btn flat align="left" class="full-width" no-caps>
        <q-avatar size="md" class="q-ma-xs q-ml-md">
          <q-icon color="blue-grey-12" name="campaign"></q-icon>
        </q-avatar>
        <div class="q-pa-xs">
          <span style="margin: 0 0 0 0">Create Promotion</span>
        </div>
      </q-btn>
    </div>

    <!-- CONTACTS -->
    <q-separator class="q-ma-md"></q-separator>

    <div class="q-ml-sm">
      <div class="row q-ma-xs" style="width: 100%">
        <div class="col-10">
          <div class="flex justify-start">
            <div class="h7-label q-ml-md">Contacts</div>
          </div>
        </div>
        <div class="col q-pt-xs">
          <div class="flex justify-end">
            <div style="color: black" class="q-mr-sm">
              <a href="#/fb" style="text-decoration: none; margin: 0 25px"
                ><q-icon name="search"></q-icon
              ></a>
            </div>
          </div>
        </div>
        <div class="col q-pt-xs">
          <div class="flex justify-end">
            <div style="color: black" class="q-mr-sm">
              <a href="#/fb" style="text-decoration: none; margin: 0 25px"
                ><q-icon name="more_horiz"></q-icon
              ></a>
            </div>
          </div>
        </div>
      </div>

      <contacts-component
        v-for="contact in contacts"
        :key="contact.name"
        :pic="contact.pic"
        :name="contact.name"
      ></contacts-component>
    </div>
    <!-- COMMUNITY CHATS -->
    <q-separator class="q-ma-md"></q-separator>

    <div class="q-ml-sm">
      <div class="row q-ma-xs" style="width: 100%">
        <div class="col-10">
          <div class="flex justify-start">
            <div class="h7-label q-ml-md">Community Chats</div>
          </div>
        </div>
      </div>
    </div>
    <!-- GROUP CHATS -->
    <q-separator class="q-ma-md"></q-separator>
    <div class="q-ml-sm">
      <div class="row q-ma-xs" style="width: 100%">
        <div class="col-10">
          <div class="flex justify-start">
            <div class="h7-label q-ml-md">Group Chats</div>
          </div>
        </div>
      </div>
    </div>
  </q-scroll-area>
</template>

<script>
import SponsorsContainer from "./SponsorsContainer.vue";
import ContactsComponent from "./ContactsComponent.vue";

export default {
  // name: 'ComponentName',
  components: {
    SponsorsContainer,
    ContactsComponent,
  },
  data() {
    return {
      contacts: [
        {
          pic: "public/icons/emu.png",
          name: "Emu Otori",
        },
      ],
    };
  },
};
</script>
