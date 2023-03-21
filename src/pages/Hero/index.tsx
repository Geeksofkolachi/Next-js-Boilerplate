// import Image from 'next/image'
import React from 'react';

// import Bg from 'public/assets/images/BG.png'
import Button from 'src/component/Button';

const Hero = () => {
  return (
    <div className='bg-cover h-full bg-no-repeat  flex bg-hero-bg w-full mt-32'>
      {/* <Image src={Bg} alt="cover"/> */}
      <div className=' w-full flex justify-center items-center flex-col  '>
        <div className='w-auto'>
          <h1 className='text-5xl'>Wherever you</h1>
          <h1 className='text-5xl'>can reach, you</h1>
          <h1 className='text-5xl'>can teach!</h1>
          <h3 className='text-lg mt-3'>K-21 Virtual Classrooms</h3>
          <Button btnText='Download App' btnStyle='mt-6 px-9 py-4' />
        </div>
      </div>
      <div className=' w-full flex justify-center items-center flex-col  '>
        <div className='w-auto'>
          <h1 className='text-5xl'>Wherever you</h1>
          <h1 className='text-5xl'>can reach, you</h1>
          <h1 className='text-5xl'>can teach!</h1>
          <h3 className='text-lg mt-3'>K-21 Virtual Classrooms</h3>
          <Button btnText='Download App' btnStyle='mt-6 px-9 py-4' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
