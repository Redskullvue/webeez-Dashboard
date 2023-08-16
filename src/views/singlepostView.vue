<template>
  <div class="w-full h-full flex items-center justify-center">
    <div
      class="w-10/12 h-5/6 bg-white p-8 rounded-lg flex items-start justify-start flex-col gap-4"
    >
      <div class="self-end flex items-center gap-4">
        <button
          v-if="isEditing === true"
          @click="cancelEditing"
          class="px-4 py-2 bg-red text-white rounded-lg animate__animated animate__fadeInRight delay-0"
        >
          لغو ویرایش
        </button>
        <button
          v-if="isEditing === true"
          class="px-4 py-2 bg-green text-white rounded-lg animate__animated animate__fadeInRight delay-100"
        >
          تایید
        </button>
        <button
          v-if="isEditing === false"
          class="px-4 py-2 bg-green text-white rounded-lg hover:bg-hovergreen transition-all duration-300"
          @click="enableEdit"
        >
          ویرایش
        </button>
      </div>
      <div class="w-full">
        <h1>
          تیتر
          <span>
            <input
              ref="editTitle"
              class="outline-none p-4 w-full transition-all duration-200"
              :class="isEditing ? 'bg-gray' : 'bg-white'"
              readonly
              type="text"
              v-model="newPostInfo.singlePostTitle"
          /></span>
        </h1>
      </div>
      <div class="w-full">
        <h1>
          دسته بندی
          <span>
            <input
              ref="editCategory"
              class="outline-none p-4 w-full transition-all duration-200"
              :class="isEditing ? 'bg-gray' : 'bg-white'"
              readonly
              type="text"
              v-model="newPostInfo.singlePostCategory"
          /></span>
        </h1>
      </div>
      <div class="w-full">
        <h1>
          محتوای پست
          <span>
            <textarea
              ref="editContent"
              class="outline-none p-4 w-full transition-all duration-200"
              :class="isEditing ? 'bg-gray' : 'bg-white'"
              readonly
              type="text"
              v-model="newPostInfo.singlePostContent"
            ></textarea>
          </span>
        </h1>
      </div>
      <div>
        <h1 class="flex items-center justify-center gap-10 -mt-4">
          عکس:
          <img
            class="w-16 h-16"
            v-if="postInfo.image"
            :src="`/${postInfo.image}`"
          />
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "singlepostView",
  data() {
    return {
      postInfo: {},
      newPostInfo: {
        singlePostTitle: "",
        singlePostCategory: "",
        singlePostContent: "",
        image: "",
      },
      isEditing: false,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    axios.get(`http://localhost:3000/api/post/${id}`).then((res) => {
      this.postInfo = res.data;
      this.newPostInfo.singlePostTitle = res.data.title;
      this.newPostInfo.singlePostCategory = res.data.category;
      this.newPostInfo.singlePostContent = res.data.content;
    });
  },
  methods: {
    enableEdit() {
      this.isEditing = true;
      if (this.isEditing === true) {
        this.$refs.editTitle.removeAttribute("readonly");
        this.$refs.editCategory.removeAttribute("readonly");
        this.$refs.editContent.removeAttribute("readonly");
      }
    },
    cancelEditing() {
      this.isEditing = false;
      if (this.isEditing === false) {
        this.$refs.editTitle.setAttribute("readonly", "");
        this.$refs.editCategory.setAttribute("readonly", "");
        this.$refs.editContent.setAttribute("readonly", "");
      }
    },
    async acceptEditing() {
      this.isEditing = false;
      await axios.patch();
    },
  },
};
</script>
