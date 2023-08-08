<template>
  <div class="w-full h-screen flex items-center justify-center">
    <login-form />
  </div>
</template>

<script>
import loginForm from "@/components/loginform.vue";
export default {
  name: "LoginView",

  components: {
    loginForm,
  },
};
</script>
