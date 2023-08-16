<template>
  <div class="w-10/12 h-5/6 p-4 flex flex-col justify-start gap-6">
    <div
      v-if="showDeleteModal"
      class="w-48 h-16 bg-green text-white flex items-center justify-center rounded-tr-lg rounded-br-lg absolute top-2 left-0 animate__animated animate__lightSpeedInLeft"
    >
      پست مورد نظر پاک شد
    </div>
    <div class="w-full -mt-4">
      <h1 class="font-bold text-2xl text-titleText mr-4">پست ها</h1>
      <span
        class="material-symbols-outlined opacity-20 text-green text-5xl font-bold absolute top-10 mr-8"
      >
        person
      </span>
    </div>
    <!-- NavBar Of All Gooods -->
    <div
      class="flex bg-white w-full p-3 items-center gap-4 justify-around shadow-lg rounded-lg text-sm text-primaryText"
    >
      <div @click="selectAllusers" v-if="!selectAll">
        <span
          class="material-symbols-outlined cursor-pointer animate__animated animate__jello"
        >
          check_box_outline_blank
        </span>
      </div>
      <div @click="selectAllusers" v-if="selectAll">
        <span
          class="material-symbols-outlined text-green cursor-pointer animate__animated animate__jello"
        >
          check_box
        </span>
      </div>
      <div>نام</div>
      <div>دسته بندی</div>
      <div>تاریخ اتنشار</div>
      <div>خلاصه</div>
      <div>کاور</div>
      <div></div>
    </div>
    <div
      class="w-full h-5/6 flex flex-col items-center bg-white rounded-lg shadow-lg overflow-y-scroll p-4"
    >
      <div
        v-for="post in posts"
        :key="post._id"
        class="w-full flex justify-around items-center p-3 px-10 gap-8 text-sm rounded-lg transition-all duration-500 cursor-pointer"
      >
        <div>
          <span
            class="material-symbols-outlined text-primaryText cursor-pointer animate__animated animate__jello"
          >
            check_box_outline_blank
          </span>
        </div>
        <div>
          <span
            v-if="isSelected"
            class="material-symbols-outlined text-green transition-all cursor-pointer animate__animated animate__jello"
          >
            check_box
          </span>
        </div>
        <div
          @click="postSinglePage(post._id)"
          class="flex-1 flex items-center justify-start px-4 text-titleText font-bold"
        >
          {{ post.title }}
        </div>
        <div
          @click="postSinglePage(post._id)"
          class="flex-1 flex items-center justify-start -mr-2 text-titleText font-bold"
        >
          {{ post.category }}
        </div>
        <div class="flex-1 text-titleText">{{ post.created }}</div>
        <div class="flex-1 text-titleText">
          {{ post.content.substring(0, 50) + "..." }}
        </div>
        <img class="flex-1 text-titleText w-24 h-24" :src="`/${post.image}`" />
        <div class="flex items-center">
          <div>
            <span class="material-symbols-outlined text-green"> star </span>
          </div>
          <div @click="deletePost(post._id, post)">
            <span class="material-symbols-outlined text-red cursor-pointer">
              delete
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "allPosts",
  data() {
    return {
      posts: [],
      showDeleteModal: false,
    };
  },
  beforeMount() {
    axios.get("http://localhost:3000/api/post").then((res) => {
      this.posts = res.data;
      console.log(this.posts);
    });
  },
  methods: {
    deletePost(id, post) {
      axios.delete(`https://webeez.iran.liara.run/api/post/${id}`);
      this.showDeleteModal = true;
      setTimeout(() => {
        this.showDeleteModal = false;
      }, 2000);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    },
    postSinglePage(id) {
      this.$router.push(`/mohtava/post/${id}`);
    },
  },
};
</script>
