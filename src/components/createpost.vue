<template>
  <div class="w-10/12 h-5/6 flex flex-col justify-start gap-6 p-4">
    <div class="w-full -mt-4">
      <h1 class="font-bold text-2xl text-titleText mr-4">ووکامرس</h1>
      <span
        class="material-symbols-outlined opacity-20 text-green text-5xl font-bold absolute top-10 mr-8"
      >
        credit_card
      </span>
    </div>
    <div
      class="flex bg-white w-full px-6 py-4 items-center justify-start gap-10 shadow-lg rounded-lg text-primaryText"
    >
      <div
        @click="currentLevel = 1"
        :class="currentLevel === 1 ? 'text-green' : 'text-primaryText'"
        class="cursor-pointer"
      >
        اطلاعات اولیه
      </div>
      <div
        @click="currentLevel = 2"
        :class="currentLevel === 2 ? 'text-green' : 'text-primaryText'"
        class="cursor-pointer"
      >
        عکس محصول
      </div>
      <div
        @click="currentLevel = 3"
        :class="currentLevel === 3 ? 'text-green' : 'text-primaryText'"
        class="cursor-pointer"
      >
        قیمت گذاری
      </div>
      <div
        @click="currentLevel = 4"
        :class="currentLevel === 4 ? 'text-green' : 'text-primaryText'"
        class="cursor-pointer"
      >
        فهرست
      </div>
    </div>
    <div
      class="w-full h-5/6 flex flex-col items-center bg-white rounded-lg shadow-lg"
    >
      <div class="w-full flex flex-col gap-10 p-10" v-if="currentLevel === 1">
        <div
          class="w-full border-border text-primaryText rounded-md overflow-hidden"
        >
          <label
            for="product-name"
            class="bg-white absolute text-xs -mt-2 mr-3 px-3 rounded-md focus:text-titleText"
            >نام محصول</label
          >
          <input
            id="product-name"
            class="border-2 w-full p-2 outline-none rounded-lg border-border overflow-clip focus:border-titleText text-sm transition-all duration-250"
            type="text"
            placeholder="بسته طراحی وبسایت"
          />
        </div>
        <div
          class="w-full border-border text-primaryText rounded-md overflow-hidden"
        >
          <label
            for="product-name"
            class="bg-white absolute text-xs -mt-2 mr-3 px-3 rounded-md focus:text-titleText"
            >توضیحات محصول</label
          >
          <textarea
            id="product-name"
            class="border-2 w-full p-2 outline-none rounded-lg border-border overflow-clip focus:border-titleText text-sm transition-all duration-250"
            type="text"
            placeholder="این تلفن همراه در سال 2023 عرضه شد"
          ></textarea>
        </div>
        <div
          class="w-full border-border text-primaryText rounded-md overflow-hidden"
        >
          <label
            for="product-name"
            class="bg-white absolute text-xs -mt-2 mr-3 px-3 rounded-md focus:text-titleText"
          >
            دسته بندی مادر</label
          >
          <input
            id="product-name"
            class="border-2 w-full p-2 rounded-lg outline-none border-border overflow-clip focus:border-titleText text-sm transition-all duration-250"
            type="text"
            placeholder="توسعه دهنده"
          />
        </div>
        <div
          class="w-full border-border text-primaryText rounded-md overflow-hidden flex justify-between items-center"
        >
          <label
            for="product-name"
            class="bg-white absolute text-xs -mt-10 mr-3 px-3 rounded-md focus:text-titleText"
          >
            مدت زمان پروزه</label
          >
          <input
            id="product-name"
            class="border-2 w-1/2 rounded-lg p-2 outline-none border-border overflow-clip focus:border-titleText text-sm transition-all duration-250"
            type="text"
            placeholder="طراحی و توسعه"
          />
          <div>
            <button
              @click="nextPage"
              class="bg-green px-4 py-2 text-white rounded-lg hover:bg-hovergreen transition-all duration-300"
            >
              مرحله بعد
            </button>
          </div>
        </div>
      </div>
      <div class="w-full h-full" v-if="currentLevel === 2">
        <create-post-level2 />
      </div>
    </div>
  </div>
</template>

<script>
import createPostLevel2 from "@/components/createpostlevel2.vue";
export default {
  name: "createPost",
  components: {
    createPostLevel2,
  },
  data() {
    return {
      currentLevel: 1,
    };
  },
  methods: {
    nextPage() {
      this.currentLevel++;
    },
  },
};
</script>
