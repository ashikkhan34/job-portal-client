import React from 'react';
import { motion } from "motion/react"
import { easeInOut } from 'motion';
import hire from '../assets/hire.jpg'
import programmer from '../assets/programmer.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                    <motion.img
                    src={hire}
                    animate={{y: [50,100,50]}}
                    transition={{duration:10,repeat:Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-700" />
                    <motion.img
                    src={programmer}
                    animate={{x: [100,150,100]}}
                    transition={{duration:10,repeat:Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-red-700" />
                    </div> 
                    <div className='flex-1'>
                        <motion.h1 
                        animate={{x:50}}
                        transition={{duration:2, delay:1 , ease: easeInOut, repeat:Infinity}}
                        className="text-5xl font-bold">Latest <motion.span 
                        animate={{color:['#cc00cc','#009933','#000099']}}
                        transition={{duration:1.5, repeat:Infinity}}
                        >job</motion.span> for you</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;