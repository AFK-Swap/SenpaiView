import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';

const slides = [
  {
    title: 'Naruto',
    subtitle: 'Shippuden',
    rating: 'PG-13',
    release: '2002',
    quality: 'HD',
    tags: ['CC 220', '220'],
    video: "/img/mylivewallpapers-com-Naruto-Flames-4K-EDIT.mp4", // Replace with actual video URL or path
    bg: '/img/605592.png', // Replace with image path if there's no video
  },
  {
    title: 'Solo Leveling',
    subtitle: 'Arise from the Shadows',
    rating: 'PG-13',
    release: '2024',
    quality: 'HD',
    tags: ['CC 20', '23'],
    video: null, // Replace with actual video URL or path
    bg: '/img/wp11485180-solo-leveling-manga-wallpapers.png', // Replace with image path if there's no video
  },
  {
    title: 'Frieren',
    subtitle: "Beyond Journey's End",
    rating: 'PG-13',
    release: '2023',
    quality: 'HD',
    tags: ['CC 28', '28'],
    video: null, // No video, only image
    bg: "/img/wp14738966-frieren-desktop-wallpapers.jpg", // Image path
  },
];

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-6xl font-bold mb-8 animate-bounce">SenpaiView</h1>
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold mb-4">{current.title}</h2>
        <p className="text-xl text-gray-200 mb-6">{current.subtitle}</p>
        <div className="flex gap-4 justify-center">
          <button onClick={prevSlide} className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
