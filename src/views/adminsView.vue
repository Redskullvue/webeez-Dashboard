<template>
  <div class="w-full h-full flex justify-center items-center">
    <all-admins />
  </div>
</template>

<script>
import allAdmins from "@/components/alladmins.vue";
export default {
  name: "adminsView",
  components: {
    allAdmins,
  },
};
</script>
