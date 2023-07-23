<template>
  <div
    class="w-full flex gap-4 px-3 py-2 items-center text-primaryText rounded-lg cursor-pointer"
    :class="this.$route.path === properties.path ? 'bg-lightgreen' : ''"
  >
    <div class="flex items-center justify-center">
      <span
        class="material-symbols-outlined"
        :class="this.$route.path === properties.path ? 'text-green' : ''"
      >
        {{ properties.icon }}
      </span>
    </div>
    <div :class="this.$route.path === properties.path ? 'text-green' : ''">
      {{ properties.title }}
    </div>
  </div>
  <div v-if="properties.subItems">
    <ul class="flex items-center flex-col">
      <router-link
        v-for="subItem in properties.subItems"
        :to="subItem.path"
        :class="
          this.$route.path === subItem.path
            ? 'text-green font-bold list-disc '
            : 'text-primaryText'
        "
        :key="subItem"
      >
        <p class="text-xs">{{ subItem.name }}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sidebarBtn",
  props: {
    properties: Object,
  },
};
</script>
