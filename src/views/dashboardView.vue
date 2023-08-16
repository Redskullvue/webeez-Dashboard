<template>
  <div
    class="w-full h-screen z-10 flex items-center justify-center"
    v-if="isLoading"
  >
    <y-loading />
  </div>
  <div
    v-if="!isLoading"
    dir="rtl"
    class="w-screen h-screen flex bg-gray overflow-hidden"
  >
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
import YLoading from "@/components/loading.vue";
export default {
  name: "dashView",
  components: {
    sideBar,
    YLoading,
  },
  data() {
    return {
      isAuthed: false,
      isLoading: true,
    };
  },
  mounted() {
    if (localStorage.getItem("isAuthorized")) {
      this.isAuthed = true;
    }
    this.goToDashboard();
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
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
