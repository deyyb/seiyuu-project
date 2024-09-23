import { boot } from "quasar/wrappers";
export default boot(({ app }) => {
  app.config.globalProperties.$APP_NAME = "Seiyuu Game";
  app.config.globalProperties.$APP_VERSION = "0.7.1";
});
