/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./SideBar.module.css";
import classNames from "classnames/bind";
const categories = [
  {
    name: "Danh mục",
    children: [
      {
        name: "Nhà Sách Tiki",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png.webp",
      },
      {
        name: "Nhà Cửa - Đời Sống",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp",
      },
      {
        name: "Điện Thoại - Máy Tính Bảng",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp",
      },
      {
        name: "Đồ Chơi - Mẹ & Bé",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp",
      },
      {
        name: "Thiết Bị Số - Phụ Kiện Số",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/78e428fdd90408587181005f5cc3de32.png.webp",
      },
      {
        name: "Điện Gia Dụng",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp",
      },
      {
        name: "Làm Đẹp - Sức Khỏe",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/bf5095601d17f9971d7a08a1ffe98a42.png.webp",
      },
      {
        name: "Ô Tô - Xe Máy - Xe Đạp",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png.webp",
      },
      {
        name: "Thời trang nữ",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp",
      },
      {
        name: "Bách Hóa Online",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png.webp",
      },
      {
        name: "Thể Thao - Dã Ngoại",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png.webp",
      },
      {
        name: "Thời trang nam",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png.webp",
      },
      {
        name: "Cross Border - Hàng Quốc Tế",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png.webp",
      },
      {
        name: "Laptop - Máy Vi Tính - Linh kiện",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png.webp",
      },
      {
        name: "Giày - Dép nam",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp",
      },
      {
        name: "Điện Tử - Điện Lạnh",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png.webp",
      },
      {
        name: "Giày - Dép nữ",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/5a6b58f21fbcad0d201480c987f8defe.png.webp",
      },
      {
        name: "Máy Ảnh - Máy Quay Phim",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png.webp",
      },
      {
        name: "Phụ kiện thời trang",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png.webp",
      },
      {
        name: "NGON",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png.webp",
      },
      {
        name: "Đồng hồ và Trang sức",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png.webp",
      },
      {
        name: "Balo và Vali",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png.webp",
      },
      {
        name: "Voucher - Dịch vụ",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/0a/c9/7b/8e466bdf6d4a5f5e14665ce56e58631d.png.webp",
      },
      {
        name: "Túi thời trang nữ",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png.webp",
      },
      {
        name: "Túi thời trang nam",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png.webp",
      },
      {
        name: "Chăm sóc nhà cửa",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/product/62/d5/9d/6be83773e4836bcbcdaf99a1750b2a28.png.webp",
      },
    ],
  },
  {
    name: "Tiện ích",
    children: [
      {
        name: "Ưu đãi thẻ, ví",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png.webp",
      },
      {
        name: "Đóng tiền, nạp thẻ",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png.webp",
      },
      {
        name: "Mua trước trả sau",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp",
      },
    ],
  },
  {
    name: "",
    children: [
      {
        name: "Bán hàng cùng Tiki",
        href: "/",
        urlImage:
          "https://salt.tikicdn.com/cache/100x100/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png.webp",
      },
    ],
  },
];
export default function SideBar() {
  const cx = classNames.bind(styles);
  return (
    <div className={`${cx("wrapper")}`}>
      <div className={`${cx("categories")}`}>
        {categories.map((item, index) => (
          <div key={index}>
            <p className={`${cx("categories-title")}`}>{item.name}</p>
            {item.children.map((item, index) => (
              <button className={`${cx("categories-button")}`} key={index}>
                <img
                  className={`${cx("categories-img")}`}
                  src={item.urlImage}
                  alt="categories"
                />
                {item.name}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
