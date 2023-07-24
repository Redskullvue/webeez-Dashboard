<template>
  <div dir="rtl" class="w-screen h-screen flex bg-gray overflow-hidden">
    <!-- Side Bar -->
    <div class="w-2/12 h-screen">
      <side-bar />
    </div>
    <div class="w-10/12"><router-view /></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import sideBar from "@/components/sidebar.vue";
export default {
  name: "dashView",
  components: {
    // HelloWorld,
    sideBar,
  },
};
</script>
