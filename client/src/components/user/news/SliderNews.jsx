import React from "react";
import SliderNewItem from "./SliderNewItem";

export default function SliderNews() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex space-x-2 overflow-x-auto snap-x snap-mandatory scrollable">
        <SliderNewItem 
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/article-categories/ve-yodyjpeg.jpeg"
            title="Về Yody"
            id="#yody"
        />
        <SliderNewItem 
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/article-categories/yody-sale.jpg"
            title="Khuyến Mãi"
            id="#offer"
        />
        <SliderNewItem 
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/article-categories/banner-store.jpg"
            title="Bảo Vệ Khách Hàng"
            id="#protect"
        />
        <SliderNewItem 
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/article-categories/doi-tac-yody-min.png"
            title="Ưu Đãi Đối Tác"
            id="#endow"
        />
        <SliderNewItem 
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/article-categories/thoi-trang-the-gioi-yody-min.png"
            title="Thời Trang Thế Giới"
            id="#fashion"
        />
        <SliderNewItem 
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/article-categories/ao-dong-phuc-yody2.jpg"
            title="Đồng Phục"
            id="#uniform"
        />
        <SliderNewItem 
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/article-categories/thoi-trang-nu-yody.png"
            title="Thời Trang Nữ"
            id="#women"
        />
        <SliderNewItem 
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/article-categories/thoi-trang-tre-em35-kid4001-tra-2-yody-vn.jpg"
            title="Thời Trang Trẻ Em"
            id="#kids"
        />
        <SliderNewItem 
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/article-categories/thoi-trang-nam-yody.png"
            title="Thời Trang Nam"
            id="#men"
        />
        <SliderNewItem 
            image="https://m.yodycdn.com/fit-in/filters:format(webp)/products/media/article-categories/fast-fashion2.jpeg"
            title="Tin Tức Tổng Hợp"
            id="#news"
        />
      </div>
    </div>
  );
}
