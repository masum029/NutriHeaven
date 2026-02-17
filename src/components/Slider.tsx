'use client';

import { useState, useEffect } from 'react';

interface SlideProps {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  image: string;
  bgColor: string;
}

const sliderData: SlideProps[] = [
  {
    id: 1,
    title: '🥬 Fresh Organic Vegetables',
    description: 'Locally grown, pesticide-free vegetables picked fresh daily.',
    buttonText: 'Shop Vegetables',
    image: '/images/slider/vegetables.svg',
    bgColor: 'from-emerald-50 to-emerald-100',
  },
  {
    id: 2,
    title: '🍯 Pure Nutrition Better Living',
    description: 'Premium organic products from nature with enzymes and goodness.',
    buttonText: 'Shop Premium',
    image: '/images/products/honeyNuts.jpg',
    bgColor: 'from-yellow-50 to-yellow-100',
  },
  {
    id: 3,
    title: '🥕 Farm Fresh Organic Goods',
    description: 'Golden quality from happy farms packed with nutrition excellence.',
    buttonText: 'Shop Organic',
    image: '/images/slider/eggs.svg',
    bgColor: 'from-teal-50 to-teal-100',
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoplay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const slide = sliderData[currentSlide];

  return (
    <div className="relative w-full overflow-hidden">
      <div className={`relative w-full h-[500px] md:h-[600px] bg-gradient-to-r ${slide.bgColor} transition-all duration-500`}>
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12">
          <div className="flex-1 z-10 max-w-md md:max-w-lg animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">{slide.title}</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">{slide.description}</p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all text-lg">{slide.buttonText}</button>
          </div>

          <div className="flex-1 hidden md:flex items-center justify-center">
            <div className="relative w-96 h-96 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full text-green-500" fill="currentColor" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.12" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.18" />
                </svg>
              </div>

              <img src={slide.image} alt={slide.title} className="relative w-72 h-72 object-contain rounded-lg shadow-2xl transform transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary text-gray-900 hover:text-white p-3 rounded-full transition-all shadow-lg hover:shadow-xl" aria-label="Previous slide">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary text-gray-900 hover:text-white p-3 rounded-full transition-all shadow-lg hover:shadow-xl" aria-label="Next slide">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="flex justify-center items-center gap-3 py-6 bg-white">
        {sliderData.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`transition-all duration-300 rounded-full ${index === currentSlide ? 'bg-gradient-to-r from-primary to-secondary w-10 h-4' : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'}`} aria-label={`Go to slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
