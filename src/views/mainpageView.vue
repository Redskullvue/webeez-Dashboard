<template>
  <div class="w-full h-full flex flex-col justify-between p-8">
    <div class="w-full mb-4">
      <h1 class="font-bold text-2xl text-titleText mr-4">داشبورد</h1>
      <span
        class="material-symbols-outlined opacity-20 text-green text-5xl font-bold absolute top-6 mr-8"
      >
        space_dashboard
      </span>
    </div>
    <div class="w-full px-6 py-2 flex justify-around gap-4">
      <!-- Box1 -->
      <div
        class="flex flex-col justify-between flex-auto animate__animated animate__fadeIn transition-all duration-150"
      >
        <div
          class="flex-auto h-48 bg-white overflow-auto rounded-lg shadow-lg"
        ></div>
        <div
          class="w-full h-8 mt-4 rounded-lg p-3 bg-white shadow-xl text-green flex items-center justify-center cursor-pointer"
        ></div>
        <div
          class="w-full h-8 mt-4 rounded-lg p-3 bg-white shadow-xl text-green flex items-center justify-center cursor-pointer"
        ></div>
      </div>
      <!-- Box2 -->
      <div
        class="flex flex-col justify-between flex-1 animate__animated animate__fadeIn transition-all duration-200 delay-200"
      >
        <div
          class="flex-1 h-48 bg-white px-3 py-6 rounded-lg flex flex-col shadow-lg"
        >
          <div class="text-primaryText">
            <h1>تعداد خدمات ثبت شده</h1>
            <span
              class="material-symbols-outlined opacity-20 text-5xl absolute text-green top-24 mr-16"
            >
              engineering
            </span>
          </div>
          <div
            class="w-full flex justify-center items-center h-full font-bold text-3xl text-titleText"
          >
            <span class="text-green text-xs font-noraml mt-8 absolute ml-12"
              >خدمت</span
            >
            3
          </div>
        </div>
        <div
          class="w-full h-8 mt-4 rounded-lg p-3 hover:bg-green hover:text-white transition-all duration-300 bg-white shadow-xl text-green flex items-center justify-center cursor-pointer"
        >
          ثبت خدمت جدید
        </div>
        <div
          class="w-full h-8 mt-4 rounded-lg p-3 hover:bg-green hover:text-white transition-all duration-300 bg-white shadow-xl text-green flex items-center justify-center cursor-pointer"
        >
          نوشتن وبلاگ جدید
        </div>
      </div>

      <!-- Box3 -->
      <div
        class="flex flex-col justify-between flex-1 animate__animated animate__fadeIn transition-all duration-300 delay-300"
      >
        <div
          class="flex-1 h-48 bg-white px-3 py-6 rounded-lg flex flex-col shadow-lg"
        >
          <div class="text-primaryText">
            <h1>تعداد ثبت نام در هفته</h1>
            <span
              class="material-symbols-outlined opacity-20 text-5xl absolute text-green top-24 mr-16"
            >
              check_circle
            </span>
          </div>
          <div
            class="w-full flex justify-center items-center h-full font-bold text-3xl text-titleText"
          >
            <span class="text-green text-xs font-noraml mt-8 absolute ml-12"
              >ثبت نام</span
            >
            105
          </div>
        </div>
        <div
          class="w-full h-8 mt-4 rounded-lg p-3 hover:bg-green hover:text-white transition-all duration-300 bg-white shadow-xl text-green flex items-center justify-center cursor-pointer"
        >
          آخرین کاربران
        </div>
        <div
          class="w-full h-8 mt-4 rounded-lg p-3 hover:bg-green hover:text-white transition-all duration-300 bg-white shadow-xl text-green flex items-center justify-center cursor-pointer"
        >
          نوشتن وبلاگ جدید
        </div>
      </div>
      <!-- Box4 -->
      <div
        class="flex-1 bg-white rounded-lg shadow-xl px-3 py-6 flex flex-col animate__animated animate__fadeIn transition-all duration-150 delay-600"
      >
        <div>
          <h1 class="text-primaryText">فروش ماهانه</h1>
          <span
            class="material-symbols-outlined opacity-20 text-5xl absolute text-green top-24 mr-6"
          >
            database
          </span>
        </div>
        <div class="self-end mt-3 flex flex-col">
          <h2 class="text-titleText font-bold text-xl">120.000.000</h2>
          <h4 class="text-green text-xs font-bold">تومان</h4>
        </div>
        <div class="h-0.5 w-full opacity-50 mt-2 bg-green"></div>
        <div class="flex flex-col gap-3">
          <h1 class="text-titleText mt-2">موارد</h1>
          <div
            class="w-full flex justify-around text-md text-primaryText"
            v-for="i in 3"
            :key="i"
          >
            <h4>طراحی سایت</h4>
            <h4>
              <span
                class="material-symbols-outlined text-sm text-green cursor-pointer"
              >
                edit
              </span>
            </h4>
            <h4>1.200.000</h4>
          </div>
          <button
            class="w-full bg-green px-2 py-4 rounded-xl shadow-md text-white"
          >
            مشاهده حساب کاربری
          </button>
        </div>
      </div>
    </div>
    <div
      class="w-full h-full bg-white shadow-xl p-4 rounded-lg flex flex-col overflow-hidden flex-1"
    >
      <div class="text-primaryText flex">
        <h1>کاربران آنلاین</h1>
        <span
          class="material-symbols-outlined text-5xl text-green opacity-20 absolute mr-4 -mt-3"
        >
          online_prediction
        </span>
      </div>
      <div class="w-full flex flex-col gap-2 overflow-y-scroll">
        <div
          v-for="i in 10"
          :key="i"
          class="w-full flex justify-around mt-4 p-1"
        >
          <div>محمد منوچهری</div>
          <div>00:20:01</div>
          <div>سبد خرید</div>
          <div class="text-green">اطلاعات کاریر</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainpageView",
  data() {
    return {};
  },
};
</script>
