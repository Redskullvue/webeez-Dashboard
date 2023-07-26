<template>
  <div class="w-full h-full p-4 flex justify-start gap-10 flex-wrap">
    <div
      class="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center cursor-pointer flex-1"
    >
      <span class="material-symbols-outlined"> cloud_upload </span>
    </div>
    <postImage v-for="i in 5" :key="i" src="logo" />
  </div>
</template>

<script>
import postImage from "@/components/postimage.vue";
export default {
  name: "createPostLevel2",
  components: {
    postImage,
  },
};
</script>
