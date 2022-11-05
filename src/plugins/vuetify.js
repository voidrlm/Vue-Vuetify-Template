import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#ffcc50",
        secondary: "#b0bec5",
        error: "#ff8888",
        success: "#45a5ae",
        accent: "#8c9eff",
      },
      dark: {
        primary: "#333d9e",
        secondary: "#b0bec5",
        error: "#ff8888",
        success: "#45a5ae",
        accent: "#8c9eff",
      },
    },
  },
});
