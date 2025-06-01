import React, { memo, useState } from 'react';
import Image from 'next/image';

// Icono de graduación como SVG optimizado
const GraduationCapIcon = memo<{ size?: number }>(({ size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className="text-[var(--accent-color)]"
  >
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
  </svg>
));

GraduationCapIcon.displayName = 'GraduationCapIcon';

interface TimelineLogoProps {
  logo: string;
  institution: string;
  size?: number;
}

const TimelineLogo = memo<TimelineLogoProps>(({ logo, institution, size = 80 }) => {
  const [imgError, setImgError] = useState(false);

  // Fallback cuando no hay logo o hay error
  if (!logo || imgError) {
    return (
      <div 
        className="flex items-center justify-center rounded-full bg-[var(--card-bg-color)] border-2 border-[var(--accent-color)] shadow-lg"
        style={{ width: size, height: size }}
      >
        <GraduationCapIcon size={size * 0.4} />
      </div>
    );
  }

  return (
    <div className="relative">
      <Image
        src={logo}
        alt={`${institution} logo`}
        width={size}
        height={size}
        className="rounded-full shadow-lg border-2 border-[var(--accent-color)] bg-white p-1 transition-transform hover:scale-105"
        style={{
          objectFit: 'contain',
        }}
        loading="lazy"
        sizes={`${size}px`}
        onError={() => setImgError(true)}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBBEFITFBUWGRkv/aAAwDAQACEQMRAD8A0XGARfbNOwnZmMgbz7WPqGMu0BuGcrBuPCPiMVfGwt4cFUClMpCt1mZdJJlgCGgkEg8GZVdXSC9iB7LU6iL4h1bVJVQFYZmkLF8Z5jl4JNpMsKgkGRJjbS0PgGo6uWMUcGlZJGhCYd+8VfbXnLixaEUxpUUAP3VyE9LXMnNcuO0iSL9Kq3JhcWjJkjJn5s="
      />
    </div>
  );
});

TimelineLogo.displayName = 'TimelineLogo';

export default TimelineLogo; 