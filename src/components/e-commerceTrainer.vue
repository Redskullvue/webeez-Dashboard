<template>
  <div class="w-full h-full p-10">
    <h1 class="text-titleText mb-4 font-bold text-xl">سلام کاربر !</h1>
    <h4 class="text-sm text-primaryText">به بخش ووکامرس سایتت خوش اومدی</h4>
    <p class="mt-10 text-sm text-primaryText">
      تو اینجا میتونی تقریا تمام کارای اصلی رو انجام بدی مثل :
    </p>
    <p>
      <router-link
        to="/woo/createpost"
        class="cursor-pointer text-green text-xs"
        >اضافه کردن محصول جدیدت</router-link
      >
      ,
      <router-link to="/woo/orders" class="cursor-pointer text-green text-xs"
        >پیگیری سفارشایی که داری</router-link
      >
      ,
      <router-link to="/woo/goods/id" class="cursor-pointer text-green text-xs">
        ویرایش محصولای قبلی</router-link
      >
    </p>
    <p class="text-primaryText text-sm">
      بخش ووکامرس بخش فروشگاهی سایته که از طریق امکاناتی که داره میشه محصولات
      جدید ساخت ویرایش کرد و حتی تخفیف اضافه کرد
    </p>
    <p class="text-primaryText text-sm">
      ادمین ها و پشتیبانی سایت میتونن از بخش سفارشات پاسخ دقیق مشتری هارو بدن
    </p>
  </div>
</template>

<script>
export default {
  name: "ECommerceTrainer",
};
</script>
