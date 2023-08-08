<template>
  <div dir="rtl" class="w-screen h-screen flex bg-gray overflow-hidden">
    <!-- Side Bar -->
    <div
      v-if="this.$route.path != '/login'"
      class="w-2/12 h-screen overflow-y-scroll"
    >
      <side-bar />
    </div>
    <div
      class="w-10/12"
      :class="this.$route.path === '/login' ? 'w-full' : 'w-10/12'"
    >
      <router-view />
    </div>
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
  data() {
    return {
      isAuthed: true,
    };
  },
  mounted() {
    this.goToDashboard();
  },
  methods: {
    goToDashboard() {
      if (this.isAuthed) {
        this.$router.push("/");
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>
