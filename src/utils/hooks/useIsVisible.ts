import { createRef, useEffect, useState } from 'react';
import { throttle } from 'lodash';

export default function useIsVisible(
  offset = 0,
  throttleMilliseconds = 100
): [boolean, React.RefObject<HTMLDivElement>] {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = createRef<HTMLDivElement>();

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
    } else {
      const { top } = currentElement.current.getBoundingClientRect();
      setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
    }
  }, throttleMilliseconds);

  useEffect(() => {
    // check if initially visible on element load
    onScroll();

    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  }, [onScroll]);

  return [isVisible, currentElement];
}
