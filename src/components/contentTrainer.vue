<template>
  <div class="w-full h-full p-10">
    <h1 class="text-titleText mb-4 font-bold text-xl">سلام کاربر !</h1>
    <h4 class="text-sm text-primaryText">به بخش تولید محتوی سایتت خوش اومدی</h4>
    <p class="mt-10 text-sm text-primaryText">
      تو اینجا میتونی تقریا تمام کارای اصلی رو انجام بدی مثل :
    </p>
    <p>
      <router-link to="/mohtava/about" class="cursor-pointer text-green text-xs"
        >اضافه کردن متن درباره ما
      </router-link>
      ,
      <router-link
        to="/mohtava/contact"
        class="cursor-pointer text-green text-xs"
        >ویرایش اطلاعات در باره ما</router-link
      >
      ,
      <router-link to="/mohtava/new" class="cursor-pointer text-green text-xs">
        اضافه کردن یک بلاگ پست جدید
      </router-link>
    </p>
    <p class="text-primaryText text-sm">
      بخش تولید محتوی بخش ای هست که میتونی هر نوشته ای رو تو سایتت تغییر بدی
    </p>
    <p class="text-primaryText text-sm">
      حتی نویسنده های بلاگیت هم میتونن از این بخش به نوشتن بلاگ پست های جدید
      بپردازن و تو سئو کمکت کنن
    </p>
  </div>
</template>

<script>
export default {
  name: "contentTrainer",
};
</script>
