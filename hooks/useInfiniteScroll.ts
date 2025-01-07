import { useState, useEffect } from 'react';

interface InfiniteScrollConfig {
  threshold?: number;
  root?: HTMLElement | null;
  rootMargin?: string;
}

const useInfiniteScroll = (
  callback: () => void,
  config: InfiniteScrollConfig = { threshold: 1.0, root: null, rootMargin: '0px' }
) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsFetching(true);
        callback();
      }
    }, config);

    const sentinel = document.getElementById('infinite-scroll-sentinel');
    if (sentinel) observer.observe(sentinel);

    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, [callback, config]);

  useEffect(() => {
    if (isFetching) {
      setTimeout(() => {
        setIsFetching(false); // Retraso simulado de 1.5 segundos
      }, 1500);
    }
  }, [isFetching]);

  return isFetching;
};

export default useInfiniteScroll;
