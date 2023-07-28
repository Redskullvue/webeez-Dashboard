<template>
  <div class="flex flex-col">
    <div class="w-full h-full p-4 flex justify-start gap-10 flex-wrap">
      <div
        class="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center cursor-pointer flex-1"
      >
        <span class="material-symbols-outlined text-5xl text-green">
          cloud_upload
        </span>
      </div>
      <postImage v-for="i in 7" :key="i" src="test" />
    </div>
    <div class="w-full flex items-center justify-end">
      <button
        @click="nextPage"
        class="bg-red m-2 px-4 py-2 text-white rounded-lg hover:bg-red transition-all duration-300"
      >
        مرحله قبل
      </button>
      <button
        @click="nextPage"
        class="bg-green m-2 px-4 py-2 text-white rounded-lg hover:bg-hovergreen transition-all duration-300"
      >
        مرحله بعد
      </button>
    </div>
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
