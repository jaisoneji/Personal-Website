import { HeartFilledIcon } from '@radix-ui/react-icons';
import React from 'react';


function Footer() {
  return (
    <section id="site-footer" className='border-t-[0.5px] border-t-slate-50/40'>
        <div className='py-4 md:py-3 px-4 md:px-6 max-w-[980px] mx-auto flex items-center justify-between'>
          <div className='text-white text-sm'>
              Made with Next.js and TailwindCSS
          </div>
          <div>
            <p className='text-white text-sm'>Thanks for scrolling <HeartFilledIcon className='inline' /></p>
          </div>
        </div>
        
        
    </section>
  )
}

export default Footer