import React from "react";
import styles from "./FooterBottom.module.css";

export default function FooterBottom() {
  return (
    <div className={styles.footerBottom}>
      <div className={styles.companyInfo}>
        <h4>Công ty TNHH TI KI</h4>
        <p>
          Tòa nhà số 52 đường Út Tịch, Phường 4, Quận Tân Bình, Thành phố Hồ Chí
          Minh
        </p>
        <p>
          Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và
          Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.
        </p>
        <p>
          Hotline: <a href="tel:19006035">1900 6035</a>
        </p>
      </div>

      <div className={styles.intro}>
        <h4>Tiki - Thật nhanh, thật chất lượng, thật rẻ</h4>
        <h5>Tiki có tất cả</h5>
        <p>
          Với hàng triệu sản phẩm từ các thương hiệu uy tín, cửa hàng uy tín,
          hàng ngàn loại mặt hàng từ <a href="#">Điện thoại smartphone</a> tới{" "}
          <a href="#">Rau củ quả tươi</a>, kèm theo dịch vụ giao hàng siêu tốc
          TikiNOW, Tiki mang đến cho bạn một trải nghiệm mua sắm online tuyệt
          vời với đa dạng sản phẩm dễ dàng sử dụng cùng vô vàn các tiện ích như{" "}
          <a href="#">mua thẻ cào</a>,{" "}
          <a href="#">thanh toán hoá đơn điện nước</a>,{" "}
          <a href="#">các dịch vụ bảo hiểm</a>.
        </p>

        <h5>Khuyến mãi, ưu đãi tràn ngập</h5>
        <p>
          Bạn muốn săn giá sốc, Tiki có <a href="#">giá sốc mỗi ngày</a> cho
          bạn! Bạn là tín đồ của các cửa hàng Official chính hãng đang chờ đón
          bạn. Không cần săn mã freeship, vì Tiki đã có hàng triệu sản phẩm
          trong <a href="#">chương trình Freeship+</a>, tiết kiệm thời gian vàng
          bạc của bạn. Mua thêm gói <a href="#">TikiNOW tiết kiệm</a> để nhận
          100% free ship 2h & trong ngày, hoặc mua gói TikiNOW cao cấp để nhận
          được 100% freeship, áp dụng cho 100% sản phẩm, 100% tỉnh thành Việt
          Nam. Bạn muốn thanh toán nhanh hơn, tiện lợi hơn? TikiCARD, thẻ tín
          dụng Tiki hoàn tiền 15% trên mọi giao dịch (tối đa hoàn 600k/tháng).
        </p>
      </div>
    </div>
  );
}
