import React from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import Carousel from "@/components/Carousel/Carousel";
import Policy from "@/components/Policy/Policy";
import Production from "@/components/Production/Production";
import Footer from "@/components/Footer/Footer";
import FlashSale from "@/components/FlashSale/FlashSale";
import Brand from "@/components/Brand/Brand";
import ForeignProduct from "@/components/ForeignProduct/ForeignProduct";
import YouMayLike from "@/components/YouMayLike/YouMayLike";
import ProductImageList from "@/components/ProductImageList/ProductImageList";
import FloatingSidebar from "@/components/FloatingSidebar/FloatingSidebar";

const deals = [
  {
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/70/98/1e/8d310b91ee15de7416257ab1e4284be1.png.webp",
  },
  {
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/43/a2/f3/ca593eb8beecdf7b2bc33efc47cc9ace.png.webp",
  },
  {
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/61/7a/36/8c3fedb048f670baa366acb917187d49.jpg.webp",
  },
  {
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/72/8f/09/480c8a8e92ec39d61265539457e98f76.png.webp",
  },
  {
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/ac/95/c5/f6db79ebe5918c602c12520a6b859819.png.webp",
  },
  {
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/de/0c/e1/2667aafdfab9deb4b7ced4efeb2b9373.jpg.webp",
  },
  {
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/ab/3f/f5/5ba5a316f5d20b398a0e2e79eec6444b.png.webp",
  },
  {
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/a1/a9/0f/dbdea664b05cfcafc8fbaa870bf01ce0.jpg.webp",
  },
  {
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/1d/ba/c1/c2c0635dd9f856b5c4d1d27e28f957de.png.webp",
  },
  {
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/12/8f/f9/cf60fe8f0e7b8cce6a82da15feb758f9.jpg.webp",
  },
  {
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/51/01/15/a597b7f099c077e8eddd1b393fc91027.jpg.webp",
  },
  {
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/a0/53/d3/904b35ac805e507e0aa76ec04a7eae3d.png.webp",
  },
];

const brands = [
  {
    id: 1,
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/tikimsp/75/8e/f9/282f85a5be117c1ada2522c87456839a.jpg",
    width: 400,
    height: 600,
  },
  {
    id: 2,
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/tikimsp/d8/2f/78/b125cfa99aeb734969ba1212c946edda.png",
    width: 400,
    height: 600,
  },
  {
    id: 3,
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/tikimsp/54/43/1a/00fc815617e5c81f3f037059feaa42ef.png",
    width: 400,
    height: 600,
  },
  {
    id: 4,
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/tikimsp/84/1e/7a/3c03703c910b5d980f583b4a991b4785.png",
    width: 400,
    height: 600,
  },
  {
    id: 5,
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/tikimsp/90/c5/65/16d324aaf1969235629ac84ffa2a088f.png",
    width: 400,
    height: 600,
  },
  {
    id: 6,
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/tikimsp/1e/eb/c0/4d87e2345b57687aa795628c4b32a8b4.png",
    width: 400,
    height: 600,
  },
  {
    id: 7,
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/tikimsp/01/d9/d2/0f8ad3df61e44b836dfce8ff6b99ae37.png",
    width: 400,
    height: 600,
  },
  {
    id: 8,
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/tikimsp/40/fc/01/cfadb9d2786429173dadb901ae087ea7.png",
    width: 400,
    height: 600,
  },
  {
    id: 9,
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/tikimsp/2c/61/66/87085e6cbe1cf72a7307fc09097bff75.png",
    width: 400,
    height: 600,
  },
  {
    id: 10,
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/tikimsp/c6/3b/d0/a1a75a5a5dc68bbee1b317727a442f33.jpg",
    width: 400,
    height: 600,
  },
];
export default function Home() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <Carousel />
      <Policy />
      <Production data={deals} />
      <FlashSale data={deals} />
      <Brand data={brands} />
      <ForeignProduct data={deals} />
      <YouMayLike data={deals} />
      <ProductImageList data={brands} />
      <Footer />
      <FloatingSidebar />
    </div>
  );
}
