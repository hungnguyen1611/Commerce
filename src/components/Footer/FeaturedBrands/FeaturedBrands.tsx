import React from "react";
import styles from "./FeaturedBrands.module.css";

export default function FeaturedBrands() {
  const brands = [
    "vascara",
    "dior",
    "esteelauder",
    "th truemilk",
    "barbie",
    "owen",
    "ensure",
    "durex",
    "bioderma",
    "elly",
    "milo",
    "skechers",
    "aldo",
    "triumph",
    "nutifood",
    "kindle",
    "nerman",
    "wacom",
    "anessa",
    "yoosee",
    "olay",
    "similac",
    "comfort",
    "bitas",
    "shiseido",
    "langfarm",
    "hukan",
    "vichy",
    "fila",
    "tsubaki",
  ];

  return (
    <div className={styles.featuredBrands}>
      <h4>Thương Hiệu Nổi Bật</h4>
      <div className={styles.brandList}>
        {brands.map((brand, index) => (
          <a href="#" key={index} className={styles.brandItem}>
            {brand}
          </a>
        ))}
      </div>
    </div>
  );
}
