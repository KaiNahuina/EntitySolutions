import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const FeedbackCard = ({ index, testimonial, name, designation, company, link, stars }) => (
  <motion.div 
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl mx-auto" // Responsive width
    style={{
      width: '100%', // Full width
      boxSizing: 'border-box', // Include padding in width calculation
    }}
  >
    <p className="text-[35px]" style={{ color: '#FFD700' }}>
      {[...Array(stars)].map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} />
      ))}
    </p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">"{testimonial}"</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:underline"
      >
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> 
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} at {company}
            </p>
          </div>
        </div>
      </a>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine sizes based on screen width
  const isSmallScreen = windowWidth < 480;
  const isMediumScreen = windowWidth < 740;
  const isLargeScreen = windowWidth < 1024; // Adjust this value based on your design

  const cardStyle = {
    maxWidth: isSmallScreen ? '300px' : isMediumScreen ? '500px' : isLargeScreen ? '700px' : '800px', // Larger for wider screens
    margin: '0 auto', // Center the card
    padding: '0 20px', // Create space for the arrows
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px] h-auto min-h-[570px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[220px] mb-[12px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Real Results, Real People</p>
          <h2 className={styles.sectionHeadText}>Kind Words</h2>
        </motion.div>
      </div>

      <Carousel 
        indicators={false} 
        className="mt-8"
        controls={true}
        pause='hover'
        style={{ padding: '0 20px' }} // Add padding to the carousel
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Item 
            interval={8000} 
            key={testimonial.name}
          >
            <div style={cardStyle}> {/* Apply dynamic style here */}
              <FeedbackCard
                index={index}
                {...testimonial}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
