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
  <div v-if="properties.subItems" class="mt-4 mr-10">
    <ul class="flex items-start flex-col gap-4 text-right">
      <li
        v-for="subItem in properties.subItems"
        :class="
          this.$route.path === subItem.path
            ? 'text-green font-bold list-disc '
            : 'text-primaryText'
        "
        :key="subItem"
        class="p-1"
      >
        <router-link :to="subItem.path">
          <p class="text-xs">{{ subItem.name }}</p>
        </router-link>
      </li>
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
