"use client";

import React, { useContext } from "react";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ColorContext } from "component/contexts/textColor";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";

import { Page3 } from "./page3";
import { Page4 } from "./page4";
import { Page5 } from "./page5";
import { Page1 } from "./page1";
import { Page2 } from "./page2";

export default function HomePage() {
    const { setColor } = useContext(ColorContext);

    const onSlideChange = (e: any) => {
        if (e.activeIndex == 2 || e.activeIndex == 3) {
            setColor("black");
        } else {
            setColor("white");
        }
    };

    return (
        <>
            <Swiper
                direction={"vertical"}
                slidesPerView={1}
                mousewheel={true}
                speed={1300}
                pagination={{
                    clickable: true,
                }}
                scrollbar={{ draggable: true }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
                onSlideChange={onSlideChange}
                touchEventsTarget="container"
                touchReleaseOnEdges={true}
            >
                <SwiperSlide>
                    <Page1 />
                </SwiperSlide>
                <SwiperSlide>
                    <Page2 />
                </SwiperSlide>
                <SwiperSlide>
                    <Page3 />
                </SwiperSlide>
                <SwiperSlide>
                    <Page4 />
                </SwiperSlide>
                <SwiperSlide>
                    <Page5 />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
