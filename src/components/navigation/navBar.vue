<template>
  <nav>
    <v-navigation-drawer
      v-model="showNavbarDrawer"
      app
      class="primary"
      width="300"
    >
      <v-list-item>
        <v-list-item-content class="mt-3">
          <v-list-item-title class="text-h6 text-center">
            Application
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list nav rounded class="mt-5">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
        >
          <v-list-item-icon class="mx-3">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <app-bar @openCloseNavBar="showNavbarDrawer = !showNavbarDrawer" />
  </nav>
</template>

<script>
import appBar from "./appBar.vue";
export default {
  components: {
    appBar,
  },

  data: () => ({
    showNavbarDrawer: true,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", route: "/dashboard" },
    ],
  }),
};
</script>
