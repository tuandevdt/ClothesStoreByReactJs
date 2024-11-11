import React from "react";
import NewItem from "../../components/user/news/NewItem";
import SliderNews from "../../components/user/news/SliderNews";
import TitleNewItem from "../../components/user/news/TitleNewItem";

export default function NewPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mt-10 mb-4 text-center">
        Tổng Hợp Tin Tức
      </h1>
      <SliderNews />

      <TitleNewItem id="yody" title="Về Yody" />
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/yody-top-10-thuong-hieu-thoi-trang.jpg"
            title="YODY lọt Top 10 thương hiệu thời trang lớn nhất tại Đông Nam Á"
            date="Về Yody | 28/10/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/280.jpeg"
            title="Cán Mốc 280 Cửa Hàng - YODY Chinh Phục Mọi Miền Đất Nước"
            date="Về Yody | 27/09/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/he-thong-cua-hang-toan-quoc-yody-vn-2-fafd6bab-2b6e-4c7b-b090-c6feadc6cf1f.jpg"
            title="Hệ thống cửa hàng YODY miền Nam"
            date="Về Yody | 22/05/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/he-thong-cua-hang-toan-quoc-yody-vn-2-67747b96-4dca-4f7d-aec3-eb81bbd0f439.jpg"
            title="Hệ thống cửa hàng YODY miền Trung"
            date="Về Yody | 22/05/2024"
          />
        </div>
      </div>

      <TitleNewItem id="offer" title="Khuyến Mãi" />
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/voucher-thang-11.jpg"
            title="CHÀO THÁNG 11 - WEBSITE YODY TẶNG VOUCHER LÊN ĐẾN 200K"
            date="Khuyến Mãi | 01/11/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/YODY%2050K.jpg"
            title="TẶNG VOUCHER 50K CHO KHÁCH HÀNG CÓ ĐƠN ONLINE THÀNH CÔNG THÁNG 11"
            date="Khuyến Mãi | 01/11/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/1.%20MUA%20C%C3%80NG%20NHI%E1%BB%80U%20-%20GI%E1%BA%A2M%20C%C3%80NG%20S%C3%82U.jpg"
            title="MUA CÀNG NHIỀU GIẢM CÀNG SÂU - LÊN ĐẾN 15%"
            date="Khuyến Mãi | 02/10/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/4.%20%C4%90%C4%82NG%20K%C3%8D%20TH%C3%94NG%20TIN.jpg"
            title="ĐỘC QUYỀN WEBSITE - VOUCHER 100K CHO KHÁCH HÀNG ĐĂNG KÍ EMAIL"
            date="Khuyến Mãi | 01/11/2024"
          />
        </div>
      </div>

      <TitleNewItem id="protect" title="Bảo Vệ Khách Hàng" />
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/canh-bao-lua-dao-yody15.jpg"
            title="CẢNH BÁO: LỢI DỤNG HÌNH ẢNH CỦA YODY ĐỂ LỪA ĐẢO"
            date="Bảo vệ khách hàng | 28/09/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/kenh-truyen-thong-yody.jpg"
            title="CÁC KÊNH THÔNG TIN VÀ MUA SẮM ONLINE CHÍNH THỨC CỦA YODY"
            date="Bảo vệ khách hàng | 22/05/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/yody-thumb-chong-lua-dao.jpeg"
            title="CÙNG YODY CHUNG TAY ĐẨY LÙI MẠO DANH, LỪA ĐẢO QUA MẠNG"
            date="Bảo vệ khách hàng | 08/08/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/bai-dang-instagram-thong-bao-dich-vu-cong-cong-mau-do-va-xanh-la-cay-dam-1.png"
            title="NHỮNG THÔNG TIN NHẤT ĐỊNH PHẢI BIẾT ĐỂ TRÁNH BỊ LỪA ĐẢO"
            date="Bảo vệ khách hàng | 22/05/2024"
          />
        </div>
      </div>

      <TitleNewItem id="endow" title="Ưu Đãi Đối Tác" />
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/YODY_ZALOPAY_T10_1200x800.jpg"
            title="YODY x ZALOPAY THÁNG 10 - NHẬN NGAY VOUCHER LÊN ĐẾN 300K"
            date="Ưu đãi Đối tác | 30/10/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/YODY_BE_T10_1200x800.jpg"
            title="YODY x BE:  TÌM DEAL TO CÓ NGAY BE LO"
            date="Ưu đãi Đối tác | 30/10/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/YODY_OPPO_1200x800.jpg"
            title="YODY x OPPO - NHẬN NGAY VOUCHER 50K KHI MUA SẮM TẠI YODY"
            date="Ưu đãi Đối tác | 30/10/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/YODY_XANH%20SM_1200X800.jpg"
            title="YODY x XANH SM - THOẢI MÁI DI CHUYỂN ĐẾN YODY MUA SẮM VỚI XANH SM"
            date="Ưu đãi Đối tác | 25/10/2024"
          />
        </div>
      </div>

      <TitleNewItem id="fashion" title="Thời Trang Thế Giới" />
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/magazine-5cdb5120-f54c-4e52-9768-988ababfaf7c.jpg"
            title="Kendall Jenner là ai? Tìm hiểu nàng người mẫu đẹp không tì vết"
            date="Thời Trang Thế Giới | 22/05/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/kham-pha-trang-phuc-truyen-thong-cua-cac-nuoc.jpg"
            title="Điểm danh 15 trang phục truyền thống nổi tiếng của các nước"
            date="Thời Trang Thế Giới | 22/05/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/y-nghia-cua-ao-dai-yodyvn.jpg"
            title="Ý nghĩa của áo dài Việt Nam: Tìm hiểu nguồn gốc và lịch sử"
            date="Thời Trang Thế Giới | 22/05/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/trang-phuc-truyen-thong-viet-nam.jpg"
            title="Điểm danh 5 trang phục truyền thống Việt Nam đặc biệt nhất"
            date="Thời Trang Thế Giới | 22/05/2024"
          />
        </div>
      </div>

      <TitleNewItem id="uniform" title="Đồng Phục" />
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/ao-lop-polo.jpg"
            title="Gợi ý TOP 12 mẫu áo lớp polo ĐỘC ĐÁO, HÓT HÒN HỌT"
            date="Đồng Phục | 22/05/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/ao-gio-dong-phuc-hoc-sinh-cao-cap.jpg"
            title="Áo gió đồng phục học sinh cao cấp chiết khấu lên đến 25%"
            date="Đồng Phục | 22/05/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/dong-phuc-hop-lop-yody-vn-9.jpg"
            title="10+ Mẫu đồng phục họp lớp THỜI TRANG VÀ CHẤT LƯỢNG"
            date="Đồng Phục | 22/05/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/dong-phuc-cho-ca-cong-ty-mac-xuyen-suot-yody-vn.jpg"
            title="Địa chỉ mua áo phông đồng phục ở Hà Nội uy tín, chất lượng"
            date="Đồng Phục | 22/05/2024"
          />
        </div>
      </div>

      <TitleNewItem id="women" title="Thời Trang Nữ" />
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/c%C3%A1ch%20ph%E1%BB%91i%20gi%C3%A0y%20v%E1%BB%9Bi%20%C4%91%E1%BA%A7m.jpg"
            title="Cách phối giày với đầm HACK DÁNG siêu đỉnh, nàng nào cũng nên biết!"
            date="Thời Trang Nữ | 02/11/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/chan-to-nen-mac-quan-gi.jpg"
            title="Chân to nên mặc quần gì? TIP phối đồ che khuyết điểm cực đỉnh"
            date="Thời Trang Nữ | 22/05/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/quan-jean-ong-rong-ket-hop-voi-giay-gi.jpg"
            title="Quần Jean ống rộng kết hợp với giày gì để NÂNG TẦM PHONG CÁCH?"
            date="Thời Trang Nữ | 01/11/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/wolf-cut.jpg"
            title="TOP 10 kiểu tóc wolf cut đang cực hot và trendy hiện nay"
            date="Thời Trang Nữ | 22/05/2024"
          />
        </div>
      </div>

      <TitleNewItem id="kids" title="Thời Trang Trẻ Em" />
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/kieu-toc-cho-be-gai-min.png"
            title="Tổng hợp 10+ kiểu tóc cho bé gái siêu dễ thương & hot trend nhất"
            date="Thời Trang Trẻ Em | 22/05/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/toc-be-trai-han-quoc.jpg"
            title="Top 20+ kiểu tóc bé trai Hàn Quốc cực ngầu mà vẫn đáng yêu"
            date="Thời Trang Trẻ Em | 22/05/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/ao-thun-be-gai.jpg"
            title="TOP 15 mẫu áo thun bé gái đáng yêu, phong cách cực XINH"
            date="Thời Trang Trẻ Em | 24/09/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/xu-huong-thoi-trang-tre-em-copy-result.jpg"
            title="Xu hướng thời trang trẻ em 2024 - Yếu tố nào sẽ lên ngôi?"
            date="Thời Trang Trẻ Em | 22/05/2024"
          />
        </div>
      </div>

      <TitleNewItem id="men" title="Thời Trang Nam" />
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/mau-nau-reu-nam.jpg"
            title="10 kiểu tóc màu nâu rêu nam cực ấn tượng lịch lãm nhất 2024"
            date="Thời Trang Nam | 22/05/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/nh%E1%BB%AFng%20%C4%91%C3%B4i%20gi%C3%A0y%20d%E1%BB%85%20ph%E1%BB%91i%20%C4%91%E1%BB%93%20cho%20nam.jpg"
            title="TOP 10 những đôi giày dễ phối đồ cho nam THỜI TRANG, không bao giờ lỗi mốt"
            date="Thời Trang Nam | 16/10/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/shop-quan-ao-nam-tphcm.jpg"
            title="TOP 14 shop quần áo nam TPHCM nổi tiếng, được yêu thích nhất"
            date="Thời Trang Nam | 23/05/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/Shop%20%C3%A1o%20d%E1%BA%A1%20nam%20%C4%91%E1%BA%B9p.jpg"
            title="TOP 11 shop bán áo khoác dạ nam sang chảnh, nam tính nhất"
            date="Thời Trang Nam | 07/10/2024"
          />
        </div>
      </div>

      <TitleNewItem id="news" title="Tin Tức Tổng Hợp" />
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/bach-lap-kim-la-gi-yody.vn.jpg"
            title="Bạch Lạp Kim là gì? 99+ điều bạn cần biết về nạp âm Canh Thìn, Tân Tỵ"
            date="Tin Tức Tổng Hợp | 05/11/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/dai-hai-thuy-la-gi-yodyvn16.jpg"
            title="Mệnh Đại Hải Thuỷ là gì? Luận giải A-Z về mệnh Đại Hải Thuỷ"
            date="Tin Tức Tổng Hợp | 05/11/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/articles/2020-menh-gi-hop-mau-gi-yodyvn16.jpg"
            title="2020 mệnh gì? Hợp màu gì? Luận giải phong thuỷ Canh Tý 2020"
            date="Tin Tức Tổng Hợp | 05/11/2024"
          />
          <NewItem
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/blog/mau-xanh-nuoc-bien-2.jpg"
            title="Màu xanh nước biển là gì? 7 cách phối đồ với màu xanh nước biển"
            date="Tin Tức Tổng Hợp | 23/05/2024"
          />
        </div>
      </div>
    </>
  );
}
