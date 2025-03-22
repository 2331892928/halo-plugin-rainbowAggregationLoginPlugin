import { definePlugin } from "@halo-dev/console-shared";
import HomeView from "./views/HomeView.vue";
import { IconPlug } from "@halo-dev/components";
import { markRaw } from "vue";

export default definePlugin({
  components: {},
  routes: [
    {
      parentName: "Root",
      route: {
        path: "/rainbowAggregationLogin",
        name: "rainbowAggregationLogin",
        component: HomeView,
        meta: {
          title: "彩虹聚合登录配置",
          searchable: true,
          menu: {
            name: "彩虹聚合登录配置",
            group: "湮灭网络",
            icon: markRaw(IconPlug),
            priority: 0,
          },
        },
      },
    },
  ],
  extensionPoints: {},
});
