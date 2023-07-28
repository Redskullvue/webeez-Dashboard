<template>
  <div class="w-full h-full p-4 flex flex-col justify-start gap-10 flex-wrap">
    <y-input placeHolder="1.222.000" title="قیمت با کسر مالیات" />
    <y-input placeHolder="1.225.000" title="قیمت بدون کسر مالیات" />
    <y-input placeHolder="1.230.000" title="نرخ مالیات" />
    <div class="self-end">
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
import YInput from "@/components/input.vue";
export default {
  name: "createPostLevel3",
  components: {
    YInput,
  },
};
</script>
