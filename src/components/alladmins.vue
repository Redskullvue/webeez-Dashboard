<template>
  <div class="w-10/12 h-5/6 p-4 flex flex-col justify-start gap-6">
    <div class="w-full -mt-4">
      <h1 class="font-bold text-2xl text-titleText mr-4">کاربران</h1>
      <span
        class="material-symbols-outlined opacity-20 text-green text-5xl font-bold absolute top-10 mr-8"
      >
        person
      </span>
    </div>
    <!-- NavBar Of All Gooods -->
    <div
      class="flex bg-white w-full p-3 items-center gap-4 justify-around shadow-lg rounded-lg text-sm text-primaryText"
    >
      <div @click="selectAllusers" v-if="!selectAll">
        <span
          class="material-symbols-outlined cursor-pointer animate__animated animate__jello"
        >
          check_box_outline_blank
        </span>
      </div>
      <div @click="selectAllusers" v-if="selectAll">
        <span
          class="material-symbols-outlined text-green cursor-pointer animate__animated animate__jello"
        >
          check_box
        </span>
      </div>
      <div>نام</div>
      <div>نام خانوادگی</div>
      <div>تاریخ ثبت نام</div>
      <div>ایمیل</div>
      <div>شماره تماس</div>
      <div></div>
    </div>
    <div
      class="w-full h-5/6 flex flex-col items-center bg-white rounded-lg shadow-lg overflow-y-scroll"
    >
      <div
        v-for="i in 8"
        :key="i"
        class="w-full flex justify-around items-center p-3 px-10 gap-8 text-sm"
      >
        <div>
          <span
            class="material-symbols-outlined text-primaryText cursor-pointer animate__animated animate__jello"
          >
            check_box_outline_blank
          </span>
        </div>
        <div>
          <span
            v-if="isSelected"
            class="material-symbols-outlined text-green transition-all cursor-pointer animate__animated animate__jello"
          >
            check_box
          </span>
        </div>
        <div
          class="flex-1 flex items-center justify-start px-4 text-titleText font-bold"
        >
          محمد
        </div>
        <div
          class="flex-1 flex items-center justify-start -mr-2 text-titleText font-bold"
        >
          منوچهری
        </div>
        <div class="flex-1 text-titleText">10/10/1402</div>
        <div class="flex-1 text-titleText">lorem@gmail.com</div>
        <div class="flex-1 text-titleText font-bold">09121111111</div>
        <div class="flex items-center">
          <div>
            <span class="material-symbols-outlined text-green"> star </span>
          </div>
          <div>
            <span class="material-symbols-outlined text-red"> delete </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "allAdmins",
};
</script>
