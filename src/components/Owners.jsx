import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { owners } from '../constants'; // Ensure this contains owner data
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const OwnersCard = ({ owner }) => (
  <div className="owner-card bg-[#1d1836] rounded-lg shadow-lg overflow-hidden w-full lg:w-[45%] p-4" style={{ minHeight: '300px' }}>    
    {/* Top row with two columns */}
    <div className="flex flex-col lg:flex-row">
      {/* Left column for the image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:h-[200px]"> {/* Fixed height only on large screens */}
        <img 
          src={owner.image} 
          alt={owner.name} 
          className="w-full h-full object-cover lg:object-cover sm:object-contain" 
        />
      </div>

      {/* Right column for the name and role */}
      <div className="w-full lg:w-1/2 p-6 text-white flex flex-col justify-center">
        <a 
          href={owner.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline"
        >
          <h3 className="text-white text-[24px] font-bold mb-2">{owner.name}</h3>
        </a>
        <p className="text-secondary text-[13px] font-semibold mb-2">{owner.role}</p>
      </div>
    </div>

    {/* Bottom row with full width for background and experience */}
    <div className="w-full mt-4 p-4 text-white">
      <div className="owner-background text-[13px] sm:text-[15px] md:text-[16px]">
        <p className="mb-2 sm:mb-4">{owner.background}</p>
      </div>
    </div>
  </div>
);

const Owners = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Meet the Team</h2>
      </motion.div>

      {/* Main container to align cards side by side */}
      <div className="mt-10 flex flex-wrap gap-10 justify-between p-10">
        {owners.map((owner, index) => (
          <OwnersCard key={index} owner={owner} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Owners, 'owners');
