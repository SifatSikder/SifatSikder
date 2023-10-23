'use client'

import React from 'react';
import { motion } from 'framer-motion';

const tableVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.2,
        },
    },
};

const rowVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const AnimatedTable = () => {
    const tableData = [
        {
            Degree: <span>BSSE <br /> (Bachelor of Science in Software Engineering)</span>,
            Result: <span>CGPA-3.85 <br /> (Upto 5th semester)</span>,
            Institute: < span > IIT,University of Dhaka</span>,
        },
        {
            Degree: 'HSC',
            Result: 'GPA-5.00',
            Institute: < span >Dhaka College</span>,
        },
        {
            Degree: 'SSC',
            Result: 'GPA-5.00',
            Institute: < span >A.K High School</span>,
        },
    ];

    return (
        <motion.table
            initial="hidden"
            animate="visible"
            variants={tableVariants}
            className="table-auto w-full border-2 border-solid border-dark mx-8 my-8"
        >
            <thead>
                <tr className="bg-gray-800 text-white font-medium">
                    <th className="px-4 py-2 ">Degree</th>
                    <th className="px-4 py-2 ">Institute</th>
                    <th className="px-4 py-2 ">Result</th>
                </tr>
            </thead>
            <tbody className='font-semibold'>
                {tableData.map((data, index) => (
                    <motion.tr
                        key={index}
                        initial="hidden"
                        animate="visible"
                        variants={rowVariants}
                        className="border-b border-gray-200"
                    >
                        <td className="px-4 py-2 text-center">{data.Degree}</td>
                        <td className="px-4 py-2 text-center">{data.Institute}</td>
                        <td className="px-4 py-2 text-center">{data.Result}</td>
                    </motion.tr>
                ))}
            </tbody>
        </motion.table>
    );
};

export default AnimatedTable;


