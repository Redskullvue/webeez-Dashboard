<template>
  <div class="w-10/12 h-5/6 p-4 flex flex-col justify-between">
    <!-- NavBar Of All Gooods -->
    <div
      class="flex bg-white w-full p-3 items-center justify-around shadow-lg rounded-lg text-primaryText"
    >
      <div>
        <span class="material-symbols-outlined"> check_box_outline_blank </span>
      </div>
      <div>نام محصول</div>
      <div>دسته بندی</div>
      <div>قیمت</div>
      <div>تخفیف</div>
      <div>وضعیت</div>
    </div>
    <div
      class="w-full h-5/6 flex flex-col items-center bg-white rounded-lg shadow-lg overflow-y-scroll"
    >
      <div
        class="w-full flex justify-around items-center p-3"
        v-for="i in 10"
        :key="i"
      >
        <div>
          <span class="material-symbols-outlined text-primaryText">
            check_box_outline_blank
          </span>
        </div>
        <div>پکیج طراحی</div>
        <div>طراحی وب</div>
        <div>
          <small class="text-xs text-green mt-8 mx-1">تومان</small>120.000
        </div>
        <div>
          <span class="material-symbols-outlined ml-8 text-red"> sell </span>
        </div>
        <div>
          <span class="material-symbols-outlined ml-4 text-green">
            check_circle
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "allGoods",
};
</script>
