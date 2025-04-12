'use client'

import { motion } from 'framer-motion'
import { FaSearch, FaBuilding, FaCalendarAlt, FaHome } from 'react-icons/fa'

const steps = [
  {
    id: '01',
    title: 'Explore',
    icon: <FaSearch className='text-[#12B7B6] text-xl' />,
    desc: 'Lorem ipsum dolor sit amet',
  },
  {
    id: '02',
    title: 'Select a property',
    icon: <FaBuilding className='text-[#12B7B6] text-xl' />,
    desc: 'Lorem ipsum dolor sit amet',
  },
  {
    id: '03',
    title: 'Book a site',
    icon: <FaCalendarAlt className='text-[#12B7B6] text-xl' />,
    desc: 'Lorem ipsum dolor sit amet',
  },
  {
    id: '04',
    title: 'Book your property',
    icon: <FaHome className='text-[#12B7B6] text-xl' />,
    desc: 'Lorem ipsum dolor sit amet',
  },
]

export default function Steps() {
  return (
    <div className="flex flex-col px-4 mt-16">
      <div>
        <h2 className='text-[56px] leading-16 mb-6'>Property Selection Process</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatibus iusto.</p>
      </div>
      <div className="flex justify-between items-center py-12 px-4 overflow-x-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-1/4 flex flex-col items-center text-center"
            >
              {/* Circle Number */}
              <div className="w-[80px] h-[80px] text-[30px] bg-white shadow-inner rounded-full flex items-center justify-center font-bold text-gray-800 z-10 mb-4">
                {step.id}
              </div>

              {/* Dotted Circle */}
              <div className="w-36 h-36 rounded-full border border-dashed border-gray-300 flex items-center justify-center mb-4">
                {step.icon}
              </div>

              {/* Step Info */}
              <div className="mt-2">
                <h3 className="font-bold text-black text-[27px]">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </div>

              {/* Connector
              {index !== steps.length - 1 && (
                <div className="absolute top-10 right-[-40px] w-20 h-16 border-t-2 border-r-2 border-gray-400 rounded-tr-full transform rotate-[45deg] z-0"></div>
              )} */}
            </motion.div>
          ))}
      </div>
      
    </div>
  )
}
