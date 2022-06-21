import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative">
          <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
                <div>
                    <img src="https://www.japancentric.com/wp-content/uploads/2020/01/2020_Summer_Olympics_logo-2-e1579062602539.png" loading="lazy" alt="">
                    </img>
                </div>
                <div>
                    <img src="https://www.hdrshooter.com/wp-content/uploads/2014/06/Dubai-IMG_4506-web.jpg" loading="lazy" alt="">
                    </img>
                </div>
                <div>
                    <img src="https://ssl.tzoo-img.com/images/tzoo.24069.0.793912.Lauterbrunnen-switzerland.jpg" loading="lazy" alt="">
                    </img>
                </div>
            </Carousel>
        </div>
    );
}

export default Banner;
