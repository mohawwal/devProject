import React from 'react'

const Card = () => {
  return (
    <div className='my-10'>
      <div className='border-b-[0.5px] border-[#aaa] h-[50vh] flex gap-4 flex-col justify-center items-center px-4'>
        <p className='text-xs text-[#aaa] uppercase tracking-wide font-bold'>ORIGIN STORY</p>
        <div className='max-w-3xl pt-3 pb-6 text-center font-normal text-[#777] text-sm leading-relaxed space-y-3'>
          <p>
            I have always been building something, starting from a YouTube channel that flopped, pivoted to creating pixel art during
            the NFT hype (until that bubble burst), and was even a solid footballer for a while, and a lot more things from my journey.
          </p>
          <p>
            In my final semester, while juggling <span className='text-[#aaa]'>Agricultural and Biosystem Engineering</span> coursework, 
            final project research, and exams, I discovered my true calling - <span className='hover:text-[#E34234] transition-colors cursor-pointer'>TECH</span>. 
            Started learning to code with zero external motivation, just pure determination.
          </p>
          <p>
            The grind paid off. Graduated with a <span className='text-[#aaa]'>5.0 CGPA</span> and straight A's, 
            while simultaneously finding my rhythm in software development. Sometimes the best discoveries happen 
            when you're juggling multiple challenges and refuse to settle for just one path.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card