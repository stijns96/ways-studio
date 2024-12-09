import { field, group } from "@nuxt/content/studio";

export default defineNuxtSchema({
  appConfig: {
    parent: group({
      title: "Parent title",
      description: "Parent description.",
      icon: "i-icon-to-display",
      fields: {
        leaf: field({
          type: "string",
          title: "Field title",
          description: "Field Description",
          icon: "i-icon-to-display",
          default: "default value",
        }),
      },
    }),
  },
});
