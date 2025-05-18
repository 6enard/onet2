import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

// Import images from IMG-20250518-WA0023 to IMG-20250518-WA0042
import img1 from './IMG-20250518-WA0023.jpg';
import img2 from './IMG-20250518-WA0024.jpg';
import img3 from './IMG-20250518-WA0025.jpg';
import img4 from './IMG-20250518-WA0026.jpg';
import img5 from './IMG-20250518-WA0027.jpg';
import img6 from './IMG-20250518-WA0028.jpg';
import img7 from './IMG-20250518-WA0029.jpg';
import img8 from './IMG-20250518-WA0030.jpg';
import img9 from './IMG-20250518-WA0031.jpg';
import img10 from './IMG-20250518-WA0032.jpg';
import img11 from './IMG-20250518-WA0033.jpg';
import img12 from './IMG-20250518-WA0034.jpg';
import img13 from './IMG-20250518-WA0035.jpg';
import img14 from './IMG-20250518-WA0036.jpg';
import img15 from './IMG-20250518-WA0037.jpg';
import img16 from './IMG-20250518-WA0038.jpg';
import img17 from './IMG-20250518-WA0039.jpg';
import img18 from './IMG-20250518-WA0040.jpg';
import img19 from './IMG-20250518-WA0041.jpg';
import img20 from './IMG-20250518-WA0042.jpg';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: img1, alt: 'Gallery image 1' },
    { src: img2, alt: 'Gallery image 2' },
    { src: img3, alt: 'Gallery image 3' },
    { src: img4, alt: 'Gallery image 4' },
    { src: img5, alt: 'Gallery image 5' },
    { src: img6, alt: 'Gallery image 6' },
    { src: img7, alt: 'Gallery image 7' },
    { src: img8, alt: 'Gallery image 8' },
    { src: img9, alt: 'Gallery image 9' },
    { src: img10, alt: 'Gallery image 10' },
    { src: img11, alt: 'Gallery image 11' },
    { src: img12, alt: 'Gallery image 12' },
    { src: img13, alt: 'Gallery image 13' },
    { src: img14, alt: 'Gallery image 14' },
    { src: img15, alt: 'Gallery image 15' },
    { src: img16, alt: 'Gallery image 16' },
    { src: img17, alt: 'Gallery image 17' },
    { src: img18, alt: 'Gallery image 18' },
    { src: img19, alt: 'Gallery image 19' },
    { src: img20, alt: 'Gallery image 20' },
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="section bg-white py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">Gallery</h2>
        <p className="text-center text-slate-600 mb-8">
          Take a glimpse into our academy and the One Tribe BJJ experience.
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Navigation]}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(image.src)}
                onKeyDown={(e) => e.key === 'Enter' && openModal(image.src)}
                tabIndex={0}
                role="button"
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
              onClick={closeModal}
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery view"
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};
