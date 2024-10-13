import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { owners } from '../constants'; // Ensure this contains owner data
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const OwnersCard = ({ owner }) => (
  <div className="flex flex-col lg:flex-row bg-[#1d1836] rounded-lg shadow-lg overflow-hidden w-full lg:w-[45%] p-4">
    {/* Left column for the image */}
    <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
      <img src={owner.image} alt={owner.name} className="w-full h-auto object-contain rounded-lg" />
    </div>

    {/* Right column for the information */}
    <div className="w-full lg:w-1/2 p-6 text-white">
      <h3 className="text-white text-[24px] font-bold mb-2">{owner.name}</h3>
      <p className="text-secondary text-[13px] font-semibold mb-2">{owner.role}</p>

      <div className="mt-4 space-y-2 text-white-100 text-[10px]">
        <p>{owner.background}</p>
        <p>{owner.experience}</p>

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
