<template>
  <div class="w-full h-full flex justify-center items-center">
    <all-posts />
  </div>
</template>

<script>
import allPosts from "@/components/allposts.vue";
export default {
  name: "postsView",
  components: {
    allPosts,
  },
};
</script>
