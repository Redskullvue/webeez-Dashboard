<template>
  <div class="w-full h-full">
    <content-trainer />
  </div>
</template>

<script>
import contentTrainer from "@/components/contentTrainer.vue";
export default {
  name: "contentView",
  components: {
    contentTrainer,
  },
};
</script>
