import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/6765164/pexels-photo-6765164.jpeg',
      alt: 'BJJ training on the mats',
    },
    {
      src: 'https://images.pexels.com/photos/7045393/pexels-photo-7045393.jpeg',
      alt: 'Students practicing techniques',
    },
    {
      src: 'https://images.pexels.com/photos/6956400/pexels-photo-6956400.jpeg',
      alt: 'Competition preparation',
    },
    {
      src: 'https://images.pexels.com/photos/6295858/pexels-photo-6295858.jpeg',
      alt: 'Kids class training session',
    },
    {
      src: 'https://images.pexels.com/photos/8428030/pexels-photo-8428030.jpeg',
      alt: 'Academy facility',
    },
    {
      src: 'https://images.pexels.com/photos/6253298/pexels-photo-6253298.jpeg',
      alt: 'Belt promotion ceremony',
    },
    {
      src: 'https://images.pexels.com/photos/8428027/pexels-photo-8428027.jpeg',
      alt: 'Students during warm-up',
    },
    {
      src: 'https://images.pexels.com/photos/9610869/pexels-photo-9610869.jpeg',
      alt: 'Team photo after tournament',
    },
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

        {/* Image Modal */}
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
