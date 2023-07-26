<template>
  <div class="w-full h-full flex justify-center items-center">
    <create-post />
  </div>
</template>

<script>
import createPost from "../components/createpost.vue";
export default {
  name: "createPostView",

  components: {
    createPost,
  },
};
</script>
