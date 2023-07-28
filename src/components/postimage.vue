<template>
  <div
    class="w-32 h-32 bg-white shadow-lg rounded-lg flex items-center justify-center cursor-pointer"
  >
    <img
      class="w-full h-full object-cover rounded-lg"
      :src="require(`../assets/${src}.jpeg`)"
    />
  </div>
</template>

<script>
export default {
  name: "postImage",
  props: ["src"],
};
</script>
