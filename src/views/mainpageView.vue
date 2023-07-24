<template>
  <div class="w-full h-full flex flex-col justify-between p-8">
    <div class="w-full px-6 py-2 flex justify-around gap-4">
      <!-- Box1 -->
      <div class="flex flex-col justify-between flex-auto">
        <div class="flex-auto h-48 bg-white overflow-auto rounded-lg shadow-lg">
          <div v-for="test in tests" :key="test">
            {{ test.author }}
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg flex-auto h-8 mt-10"></div>
      </div>
      <!-- Box2 -->
      <div class="flex flex-col justify-between flex-1">
        <div
          class="flex-1 h-48 bg-white p-2 rounded-lg flex flex-col shadow-lg"
        >
          <div>Done Maintaince</div>
          <div
            class="w-full flex justify-center items-center h-full font-bold text-xl"
          >
            03
          </div>
        </div>
      </div>

      <!-- Box3 -->
      <div class="flex-1 h-48 bg-red rounded-lg">3</div>
      <!-- Box4 -->
      <div class="flex-1 h-48 bg-red rounded-lg">3</div>
    </div>
    <div class="w-full h-full bg-green">2nd</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "mainpageView",
  data() {
    return {
      tests: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/todos").then((res) => {
      this.tests = res.data;
    });
  },
};
</script>
