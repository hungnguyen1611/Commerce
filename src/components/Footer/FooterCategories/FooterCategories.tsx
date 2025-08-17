import React from "react";
import styles from "./FooterCategories.module.css";

type Category = {
  title: string;
  links: string[];
};

const categories: Category[] = [
  {
    title: "Đồ Chơi – Mẹ & Bé",
    links: [
      "Thời Trang Cho Mẹ Và Bé",
      "Đồ chơi",
      "Đồ dùng cho bé",
      "Chăm sóc nhà cửa",
      "Chăm sóc mẹ mang thai, sau sinh",
      "Dinh dưỡng cho bé",
      "Tã, Bỉm",
      "Dinh dưỡng cho mẹ",
      "Thực phẩm ăn dặm",
      "Chuẩn bị mang thai",
    ],
  },
  {
    title: "Thực Phẩm Tươi Sống",
    links: [
      "Trái cây",
      "Thịt, trứng, cá",
      "Thủy hải sản",
      "Rau củ quả",
      "Thực phẩm Việt",
      "Đông lạnh, đồ sơ chế",
      "Đậu ăn, gia vị",
      "Gạo, mì, nướng",
      "Nấm, đồ khô, đồ hộp",
      "Đồ uống",
      "Thực phẩm chay",
      "Bánh kẹo, quà",
    ],
  },
  {
    title: "Điện thoại – Máy tính bảng",
    links: [
      "Điện thoại smartphone",
      "Điện thoại phổ thông",
      "Máy đọc sách",
      "Máy tính bảng",
    ],
  },
  {
    title: "Làm Đẹp – Sức Khỏe",
    links: [
      "Chăm sóc da mặt",
      "Dụng cụ làm đẹp",
      "Thực phẩm chức năng",
      "Trang điểm",
      "Chăm sóc cơ thể",
      "Nước hoa",
      "Đồ dùng y tế",
      "Dược mỹ phẩm",
    ],
  },
  // 👉 Bạn có thể bổ sung các category khác giống trong hình
];

const FooterCategories: React.FC = () => {
  return (
    <div className={styles.footerCategories}>
      {categories.map((cat, index) => (
        <div key={index} className={styles.category}>
          <h4 className={styles.title}>{cat.title}</h4>
          <ul className={styles.links}>
            {cat.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterCategories;
