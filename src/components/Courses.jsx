import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import { courses } from '../data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Courses & Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuous learning through various platforms and courses to stay updated with the latest technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
              bulletClass: 'swiper-pagination-bullet',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="courses-swiper"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group h-[420px] flex flex-col"
                >
                  {/* Course Image */}
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex-shrink-0 mx-4 mt-4 rounded-lg">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 bg-white/10 rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg" />
                    
                    {/* Platform Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                      {course.platform}
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2 min-h-[3rem]">
                      {course.name}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-6 text-sm text-gray-600 flex-shrink-0">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {course.completedDate}
                      </span>
                    </div>

                    {/* Certificate Button */}
                    <motion.a
                      href={course.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium mt-auto"
                    >
                      <FaCertificate className="mr-2 text-sm" />
                      View Certificate
                    </motion.a>
                  </div>

                  {/* Hover overlay effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary-600/5 to-transparent pointer-events-none"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Custom Swiper Styles */}
        <style jsx>{`
          :global(.courses-swiper .swiper-pagination) {
            bottom: -50px !important;
          }
          
          :global(.courses-swiper .swiper-pagination-bullet) {
            background-color: #d1d5db !important;
            opacity: 1 !important;
            width: 12px !important;
            height: 12px !important;
          }
          
          :global(.courses-swiper .swiper-pagination-bullet-active) {
            background-color: #0ea5e9 !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Courses;
