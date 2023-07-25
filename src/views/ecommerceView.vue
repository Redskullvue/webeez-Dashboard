<template>
  <div class="w-full h-full">
    <e-commerce-trainer v-if="this.$route.path === '/woo'" />
    <all-goods v-if="this.$route.path === '/woo/goods'" />
  </div>
</template>

<script>
import ECommerceTrainer from "@/components/e-commerceTrainer.vue";
import allGoods from "@/components/allgoods.vue";
export default {
  name: "ECommerce",
  components: {
    ECommerceTrainer,
    allGoods,
  },
};
</script>
