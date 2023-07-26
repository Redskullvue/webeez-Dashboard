<template>
  <div class="w-10/12 h-5/6 p-4 flex flex-col justify-between">
    <!-- NavBar Of All Gooods -->
    <div
      class="flex bg-white w-full p-3 items-center justify-around shadow-lg rounded-lg text-primaryText"
    >
      <div @click="selectAllProducts" v-if="!selectAll">
        <span
          class="material-symbols-outlined cursor-pointer animate__animated animate__jello"
        >
          check_box_outline_blank
        </span>
      </div>
      <div @click="selectAllProducts" v-if="selectAll">
        <span
          class="material-symbols-outlined text-green cursor-pointer animate__animated animate__jello"
        >
          check_box
        </span>
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
        @click="product.isSelected = !product.isSelected"
        class="w-full flex justify-around items-center p-3"
        v-for="product in products"
        :key="products[product]"
      >
        <div v-if="!product.isSelected">
          <span
            class="material-symbols-outlined text-primaryText cursor-pointer animate__animated animate__jello"
          >
            check_box_outline_blank
          </span>
        </div>
        <div v-if="product.isSelected">
          <span
            class="material-symbols-outlined text-green transition-all cursor-pointer animate__animated animate__jello"
          >
            check_box
          </span>
        </div>
        <div>{{ product.name }}</div>
        <div>{{ product.category }}</div>
        <div>
          <small class="text-xs text-green mt-8 mx-1">تومان</small
          >{{ product.price }}
        </div>
        <div>
          <span
            class="material-symbols-outlined ml-8"
            :class="product.isOff === true ? 'text-green' : 'text-red'"
          >
            sell
          </span>
        </div>
        <div>
          <span
            class="material-symbols-outlined ml-4"
            :class="product.isPublished === true ? 'text-green' : 'text-red'"
          >
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
  data() {
    return {
      products: [
        {
          name: "پکیج طراحی سایت ",
          category: "طراحی سایت",
          price: 120000,
          isOff: true,
          isPublished: true,
          isSelected: false,
        },
        {
          name: "پکیج طراحی سایت ",
          category: "طراحی سایت",
          price: 240000,
          isOff: true,
          isPublished: false,
          isSelected: false,
        },
        {
          name: "پکیج طراحی سایت ",
          category: "طراحی سایت",
          price: 520000,
          isOff: false,
          isPublished: true,
          isSelected: false,
        },
        {
          name: "پکیج طراحی سایت ",
          category: "طراحی سایت",
          price: 105000,
          isOff: true,
          isPublished: true,
          isSelected: false,
        },
        {
          name: "پکیج طراحی سایت ",
          category: "طراحی سایت",
          price: 430000,
          isOff: false,
          isPublished: false,
          isSelected: false,
        },
        {
          name: "پکیج طراحی سایت ",
          category: "طراحی سایت",
          price: 120000,
          isOff: true,
          isPublished: true,
          isSelected: false,
        },
      ],
      selectAll: false,
    };
  },
  methods: {
    selectAllProducts() {
      this.selectAll = !this.selectAll;
      if (this.selectAll === true) {
        this.products.forEach((product) => {
          product.isSelected = true;
        });
      }

      if (this.selectAll === false) {
        this.products.forEach((product) => {
          product.isSelected = false;
        });
      }
    },
  },
};
</script>
