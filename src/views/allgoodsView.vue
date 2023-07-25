<template>
  <div class="w-full h-full flex justify-center items-center">
    <all-goods />
  </div>
</template>

<script>
import allGoods from "@/components/allgoods.vue";
export default {
  name: "allGoodsView",
  components: {
    allGoods,
  },
};
</script>
