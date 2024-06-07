import React from 'react';
import heroimg from '../Assets/hero_image.png';

const Hero = () => {
    return (
        <div className='h-screen bg-gradient-to-b from-[#d5e69a8c] to-[#9f9548] via-[#e1ffea22] flex flex-col lg:flex-row'>
            <div className='flex-1 flex flex-col justify-center gap-5 px-6 lg:pl-[180px] leading-[1.1]'>
                <h2 className='text-[#090909] text-[26px] font-semibold'>New Arrivals only</h2>
                <div>
                    <div className='flex items-center gap-5'>
                        <p className='text-[#171717] text-[60px] lg:text-[100px] font-bold'>New</p>
                    </div>
                    <p className='text-[#171717] text-[60px] lg:text-[100px] font-bold'>Collections</p>
                    <p className='text-[#171717] text-[60px] lg:text-[100px] font-bold'>For everyone</p>
                </div>
                <div className='flex justify-center items-center gap-[15px] w-full sm:w-[310px] h-[50px] sm:h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[18px] sm:text-[22px] font-medium'>
                    <div>Latest Collections</div>
                </div>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <img src={heroimg} alt="Hero" className='w-[250px] sm:w-[450px] mb-7' />
            </div>
        </div>
    );
};

export default Hero;
