<template>
  <div class="w-10/12 h-5/6 p-4 flex flex-col justify-start gap-4">
    <div class="w-full -mt-4">
      <h1 class="font-bold text-2xl text-titleText mr-4">ووکامرس</h1>
      <span
        class="material-symbols-outlined opacity-20 text-green text-5xl font-bold absolute top-10 mr-8"
      >
        credit_card
      </span>
    </div>
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
          >{{ numberSeperator(product.price) }}
        </div>
        <div>
          <span
            class="material-symbols-outlined ml-8"
            :class="product.isOff === true ? 'text-purple' : 'text-primaryText'"
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
          price: 1200000,
          isOff: true,
          isPublished: true,
          isSelected: false,
        },
        {
          name: "پکیج طراحی سایت ",
          category: "طراحی سایت",
          price: 2400000,
          isOff: true,
          isPublished: false,
          isSelected: false,
        },
        {
          name: "پکیج طراحی سایت ",
          category: "طراحی سایت",
          price: 5200000,
          isOff: false,
          isPublished: true,
          isSelected: false,
        },
        {
          name: "پکیج طراحی سایت ",
          category: "طراحی سایت",
          price: 1050000,
          isOff: true,
          isPublished: true,
          isSelected: false,
        },
        {
          name: "پکیج طراحی سایت ",
          category: "طراحی سایت",
          price: 4300000,
          isOff: false,
          isPublished: false,
          isSelected: false,
        },
        {
          name: "پکیج طراحی سایت ",
          category: "طراحی سایت",
          price: 1200000,
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
    numberSeperator(number) {
      let stringNum = number.toLocaleString("en");
      return stringNum;
    },
  },
};
</script>
