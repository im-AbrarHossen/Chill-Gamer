import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <img className='lg:h-[400px] h-[200px] w-[100%]' src="/images/slider1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:h-[400px] h-[200px] w-[100%]' src="/images/slider2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:h-[400px] h-[200px] w-[100%]' src="/images/slider3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:h-[400px] h-[200px] w-[100%]' src="/images/slider4.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;