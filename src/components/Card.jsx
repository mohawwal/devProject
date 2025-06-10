import React from 'react'

const Card = () => {
  return (
    <div className='my-8'>
      <div className='border-b-[0.5px] border-[#aaa] h-[50vh] flex gap-4 flex-col justify-center items-center px-4'>
        <p className='text-xs text-[#aaa] uppercase tracking-wide font-bold'>ORIGIN STORY</p>
        <div className='max-w-3xl pt-3 pb-6 text-start font-normal text-[#777] text-base leading-relaxed space-y-3'>
          <p>
            My journey into tech wasn’t linear. I explored different creative paths from content creation to digital art before finding clarity in code.
          </p>
          <p>
            In my final semester studying <span className='text-[#aaa]'>Agricultural and Biosystems Engineering</span>, 
            I taught myself how to code while balancing research and exams. What began as a side passion quickly became a professional pursuit.
          </p>
          <p>
            Today, I’m a <span className='text-[#aaa]'>Software Engineer at a fintech company,</span> where we build secure escrow-based payment systems for modern commerce. 
            I craft responsive, reliable user experiences that anchor trust and usability turning ideas into scalable, real world solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
