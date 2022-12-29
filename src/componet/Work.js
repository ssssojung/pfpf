import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import workswiperjson from '../json/work_info.json';

function Work(props) {
  const swiperinfo = workswiperjson.workswiperjson;
    return (
        <div href="#work">
            <Swiper className='workSection'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >;  '[
                    
                    '
                    {
                    swiperinfo.map( ( item, index ) => {
                            return(
                            <SwiperSlide className={item.cls} key={'sw'+index}>{item.worktitle}</SwiperSlide>
                            )
                        }
                    )
                    
                    }
           
         </Swiper> 
        </div>
    );
}

export default Work;