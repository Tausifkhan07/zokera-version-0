import { useState, useEffect } from 'react';

interface ResponsiveProps {
  Mobile: React.ReactNode;
  Desktop: React.ReactNode;
}

const ResponsiveComponent = ({ Mobile, Desktop }: ResponsiveProps) => {
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {viewportWidth < 768 ? Mobile : Desktop}
    </>
  );
};

export default ResponsiveComponent;
