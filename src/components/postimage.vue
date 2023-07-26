<template>
  <div
    class="w-32 h-32 bg-white shadow-lg rounded-lg flex items-center justify-center cursor-pointer flex-1"
  >
    <img :src="require(`../assets/${src}.png`)" />
  </div>
</template>

<script>
export default {
  name: "postImage",
  props: ["src"],
};
</script>
