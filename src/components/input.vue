<template>
  <div class="w-full border-border text-primaryText rounded-md overflow-hidden">
    <label
      for="product-name"
      class="bg-white absolute text-xs -mt-2 mr-3 px-3 rounded-md focus:text-titleText"
    >
      {{ title }}</label
    >
    <input
      id="product-name"
      v-model="inputValue"
      class="border-2 w-full p-2 rounded-lg outline-none border-border overflow-clip focus:border-titleText text-sm transition-all duration-250"
      type="text"
      :placeholder="placeHolder"
    />
  </div>
</template>

<script>
export default {
  name: "YInput",
  props: {
    title: String,
    placeHolder: String,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    inputValue() {
      this.$emit("getInputValue", this.inputValue);
    },
  },
};
</script>

<style></style>
