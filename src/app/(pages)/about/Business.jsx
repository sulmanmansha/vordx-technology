'use client'
import {React , useEffect , useState} from 'react';
import Image from 'next/image';
import Button from '@/app/shared/Button';
import { useInView } from 'react-intersection-observer';

function Business() {
  const [percentage, setPercentage] = useState(0);
  const [experts, setExperts] = useState(0);

  // Use the ref from useInView and track when element is in view (for counting only)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      // Animate percentage from 0 to 30
      const animatePercentage = () => {
        let start = 0;
        const duration = 2000;
        const increment = 30 / (duration / 10);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= 30) {
            setPercentage(30);
            clearInterval(timer);
          } else {
            setPercentage(Math.ceil(start));
          }
        }, 10);
        
        return () => clearInterval(timer);
      };

      // Animate experts from 0 to 20
      const animateExperts = () => {
        let start = 0;
        const duration = 2000;
        const increment = 20 / (duration / 10);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= 20) {
            setExperts(20);
            clearInterval(timer);
          } else {
            setExperts(Math.ceil(start));
          }
        }, 10);
        
        return () => clearInterval(timer);
      };

      animatePercentage();
      animateExperts();
    }
  }, [inView]);

  return (
    <div className='md:py-[80px] px-[10px] md:px-[126px]' ref={ref}>
      <div className="flex flex-col items-center md:flex-row gap-[40px] lg:gap-[80px]">
        {/* Image animation - triggers on every mount */}
          <Image 
            src="/images/buisness.svg" 
            width={500} 
            height={532} 
            alt='business'
          />
        
        {/* Content animation - triggers on every mount */}
        < div >
          <h2 className="pro-medium text-[25px] md:text-[30px] xl:text-[48px] leading-[35px] md:leading-[56px] max-w-[608px] text-[#FFFFFF]">
            Empowering Businesses with Innovation and Expertise
          </h2>
          <div className='py-[20px] md:py-[80px] flex gap-[119px]'>
            <div className='flex flex-col gap-[12px]'>
              <p className='pro-bold text-[40px] leading-[56px]'>
                {percentage}%
              </p>
              <p className='pro-regular leading-[26px]'>Business Performance</p>
            </div>
            <div className='flex flex-col gap-[12px]'>
              <p className='pro-bold text-[40px] leading-[56px]'>
                {experts}+
              </p>
              <p className='pro-regular leading-[26px]'>Experts in strategy</p>
            </div>
          </div>
          <div>
            <p className="pro-regular text-[18px] leading-[28px] max-w-[353px]">
              We are a passionate collective of creatives, designers, and strategists dedicated to shaping remarkable brand experiences.
            </p>
            < div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button href="/work" text="See Our Work" className='w-[162px] h-[48px] mt-[32px]'/>
            </ div>
          </div>
        </ div>
      </div>
    </div>
  );
}

export default Business;