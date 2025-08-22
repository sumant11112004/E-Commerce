import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t '>
        <Title text1={'Contact'} text2={'us'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact} alt="" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='font-semibold text-xl text-gary-700 '>Our Store</p>
          <p className='text-gray-600'>Patel Nagar, Raisen Road, <br />Bhopal, Madhya Pradesh 462021 </p>
          <p className='text-gray-600'>Phone: +91-7488819884 <br />Email: sumantkumar11112004@gmail.com</p>
          <p className='font-semibold text-xl text-gray-700'>Careers at Zyora</p>
          <p className='text-gray-600'>Learn more about our teams and job openings.</p>
          <button className='border border-blue-400 px-8 py-4 text-sm hover:bg-blue-400 hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default contact