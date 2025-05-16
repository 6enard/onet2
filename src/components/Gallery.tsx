import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/6765164/pexels-photo-6765164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'BJJ training on the mats'
    },
    {
      src: 'https://images.pexels.com/photos/7045393/pexels-photo-7045393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Students practicing techniques'
    },
    {
      src: 'https://images.pexels.com/photos/6956400/pexels-photo-6956400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Competition preparation'
    },
    {
      src: 'https://images.pexels.com/photos/6295858/pexels-photo-6295858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Kids class training session'
    },
    {
      src: 'https://images.pexels.com/photos/8428030/pexels-photo-8428030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Academy facility'
    },
    {
      src: 'https://images.pexels.com/photos/6253298/pexels-photo-6253298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Belt promotion ceremony'
    },
    {
      src: 'https://images.pexels.com/photos/8428027/pexels-photo-8428027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Students during warm-up'
    },
    {
      src: 'https://images.pexels.com/photos/9610869/pexels-photo-9610869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Team photo after tournament'
    }
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
    <section id="gallery" className="section bg-white">
      <div className="container">
        <h2 className="section-title slide-up">Gallery</h2>
        <p className="section-subtitle slide-up">
          Take a glimpse into our academy and the One Tribe BJJ experience.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
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
          ))}
        </div>
        
        {/* Image modal */}
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