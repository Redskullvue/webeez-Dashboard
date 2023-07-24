<template>
  <div
    class="w-full flex gap-4 px-3 py-2 items-center text-primaryText rounded-lg cursor-pointer transition-all duration-200"
    :class="this.$route.path === properties.path ? 'bg-lightgreen' : ''"
    @click="toggle = !toggle"
  >
    <div class="flex items-center justify-center">
      <span
        class="material-symbols-outlined"
        :class="
          this.$route.path === properties.path ? 'text-green font-bold' : ''
        "
      >
        {{ properties.icon }}
      </span>
    </div>
    <div
      :class="
        this.$route.path === properties.path ? 'text-green font-bold' : ''
      "
      class="flex items-center justify-between transition-all duration-300"
    >
      {{ properties.title }}
      <div v-if="properties.subItems" class="flex items-center">
        <span
          class="material-symbols-outlined transition-all duration-300"
          :class="toggle === true ? 'rotate-180' : 'rotate-0'"
        >
          chevron_left
        </span>
      </div>
    </div>
  </div>
  <div
    v-if="properties.subItems && toggle"
    class="mt-4 mr-10 animate__animated animate__slideInRight transition-all duration-300"
    :class="toggle === false ? 'animate__slideOutRight' : ''"
  >
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
        <router-link :to="subItem.path" class="transition-all duration-200">
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
  data() {
    return {
      toggle: false,
    };
  },
};
</script>
