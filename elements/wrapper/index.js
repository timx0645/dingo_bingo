import { SectionWrapper } from './style'
import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const isClient = typeof window === 'object';
  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }
  const [windowSize, setWindowSize] = useState(getSize);
  useEffect(() => {
    if (!isClient) {
      return false;
    }
    const handleResize = () => {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

const Wrapper = ({children}) => {
    return(
        <SectionWrapper size={useWindowSize()}>
            {children}
        </SectionWrapper>
    )
}

export default Wrapper;

