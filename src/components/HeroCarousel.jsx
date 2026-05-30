import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const slides = [
    {
      id: 1,
      image: "./images/banner-1.webp",
      video: "./videos/banner-1.mp4",
      buttonText: "Book Now",
    },
    {
      id: 2,
      image: "./images/banner-2.webp",
      video: "./videos/banner-2.mp4",
    },
    {
      id: 3,
      image: "./images/banner-3.webp",
      video: "./videos/banner-3.mp4",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide]);

  // Touch and Mouse Drag Handlers
  const handleDragStart = (e) => {
    if (e.type === "mousedown") {
      setStartPos(e.clientX);
    } else {
      setStartPos(e.touches[0].clientX);
    }
    setIsDragging(true);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    const currentPosition =
      e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
    const diff = currentPosition - startPos;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    // If moved enough, change slide
    if (movedBy < -100) {
      nextSlide();
    } else if (movedBy > 100) {
      prevSlide();
    }

    setCurrentTranslate(prevTranslate);
  };

  useEffect(() => {
    setPrevTranslate(currentIndex * -window.innerWidth);
    setCurrentTranslate(currentIndex * -window.innerWidth);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{
          transform: isDragging
            ? `translateX(${currentTranslate}px)`
            : `translateX(-${currentIndex * 100}%)`,
          transition: isDragging
            ? "none"
            : "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="min-w-full h-full px-2 py-3 md:py-6 flex items-center justify-center"
          >
            {/* Rounded Container - Premium Style */}
            <div
              className={`w-full h-full ${
                slide.bg ? `bg-gradient-to-br ${slide.bg}` : "bg-gray-900"
              } rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden relative`}
            >
              {slide.title ? (
                /* Layout with Title: Grid with text and image */
                <div className="h-full grid lg:grid-cols-2 items-center">
                  {/* LEFT: Text Content */}
                  <div className="px-8 md:px-16 lg:px-20 py-12 flex flex-col justify-center">
                    <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-8 md:mb-12">
                      {slide.title}
                    </h1>

                    <div>
                      <Link
                        to="/contact"
                        className="inline-block px-10 py-4 bg-white text-gray-900 font-bold text-base md:text-lg rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT: Image */}
                  <div className="hidden lg:flex items-center justify-center h-full p-12">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full object-contain max-h-[350px] xl:max-h-[400px]"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              ) : (
                /* Layout without Title: Full carousel image/video */
                <div className="h-full w-full relative">
                  {/* Video for small screens */}
                  <video
                    src={slide.video}
                    className="md:hidden w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  {/* Image for medium and large screens */}
                  <img
                    src={slide.image}
                    alt="Banner"
                    className="hidden md:block w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  {/* Button overlay - positioned above navigation dots */}
                  {slide.buttonText && (
                    <div className="hidden md:block absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
                      <Link
                        to="/contact"
                        className="inline-block px-10 py-4 bg-white text-gray-900 font-bold text-base md:text-lg rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-xl"
                      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots - Premium Style */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="bg-white/20 backdrop-blur-md px-4 py-2.5 rounded-full flex gap-3 shadow-lg">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-2.5 bg-white shadow-md"
                  : "w-2.5 h-2.5 bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
