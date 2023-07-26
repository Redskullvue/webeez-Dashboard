<template><dashView /></template>

<script>
import "./assets/css/output.css";
import "animate.css";
import dashView from "./views/dashboardView.vue";
export default {
  name: "App",
  components: {
    dashView,
  },
};
</script>
<style>
* {
  font-family: Vazirmatn, sans-serif;
}
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: white;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #14c8ab;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #109b84;
}
</style>
