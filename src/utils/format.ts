export const Formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

// console.log(formatter.format(1000000)); // "1.000.000 ₫"
