"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Optional
import "swiper/css/pagination"; // Optional

export default function Home() {
  return (
    <main>
      {/* Banner Section */}
      <div className="banner-container">
        <div className="banner-overlay">
          <h1 className="banner-title">Welcome to Our Consulting Firm</h1>
        </div>
      </div>

      {/* Welcome Paragraph */}
      <section className="welcome-section">
        <p>
          We are the leading consulting experts in tight shale and
          unconventional play dynamics. With over 40 years in the industry, we
          help customers get the most money out of their formations in West
          Texas, the Baaken, and beyond!
        </p>
      </section>

      {/* Reviews Carousel Section */}
      <section className="reviews-section">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5000, // 5 seconds
            disableOnInteraction: false, // Keep autoplay running even after user interaction
          }}
          loop={true}
        >
          <SwiperSlide>
            <p>
              "Amazing service and expertise. Our production efficiency improved
              dramatically!"
            </p>
            <h4>- Client 1</h4>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              "Professional and reliable. Highly recommend their consulting
              team."
            </p>
            <h4>- Client 2</h4>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              "They provided solutions that others couldn&apos;t. We saw great
              results."
            </p>
            <h4>- Client 3</h4>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
}
