<template>
  <div class="w-full h-full flex items-center justify-center">
    <form
      class="w-10/12 h-5/6 flex items-center justify-center flex-col gap-4 p-10 bg-white rounded-lg shadow-lg"
      ref="form"
      enctype="multipart/form-data"
      @submit.prevent="newPostApi"
    >
      <input
        type="text"
        required
        v-model="newPost.title"
        placeholder="تیتر"
        class="w-1/2 h-12 bg-gray p-2 rounded-lg"
      />
      <input
        type="text"
        required
        v-model="newPost.category"
        placeholder="دسته بندی"
        class="w-1/2 h-12 bg-gray p-2 rounded-lg"
      />
      <textarea
        type="text"
        required
        v-model="newPost.content"
        placeholder="محتوای پست"
        class="w-1/2 h-32 bg-gray p-2 rounded-lg"
      ></textarea>
      <input
        @change="selectFile"
        ref="test"
        type="file"
        placeholder="غکس"
        class="w-1/2 bg-gray p-2 rounded-lg"
      />
      <input
        type="submit"
        class="bg-green text-white w-32 cursor-pointer mt-4 p-3 rounded-lg"
        value="نشر پست"
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "createPost",
  data() {
    return {
      newPost: {
        title: "",
        category: "",
        content: "",
        image: "",
      },
      image: "",
    };
  },
  methods: {
    selectFile(file) {
      this.image = file.target.files[0];
      console.log(this.image);
    },
    async newPostApi() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.newPost.title);
      formData.append("category", this.newPost.category);
      formData.append("content", this.newPost.content);
      await axios.post("https://webeez.iran.liara.run/api/post", formData);
      this.$router.push("/mohtava/posts");
    },
  },
};
</script>

<style></style>
