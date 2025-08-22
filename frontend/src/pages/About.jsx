import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'About'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
        <p>At Zyora, we believe shopping should be more than just buying — it should be an experience.
           Our mission is to bring together quality, style, and convenience in one place, making it easier than ever to find what you love.</p>
        <p>Driven by innovation and trust, Zyora is more than an e-commerce platform — it’s a community of trendsetters and smart shoppers. 
          Whether you’re discovering the latest arrivals or picking from our best sellers, we’re here to make your shopping journey seamless and enjoyable.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>“Our mission is to make online shopping seamless, stylish, and trustworthy for everyone. Also to connect people with products that inspire confidence and enhance everyday living.”</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'Why to'} text2={'Choose Us'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'></div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-700'>Every product at Zyora is handpicked and quality-checked to ensure it meets the highest standards. Zyora stands for trust — delivering products that are built to last and crafted with care</p>
          </div>

          
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-700'>Shop anytime, anywhere with fast delivery, hassle-free checkout, multiple payment options, and smooth experience. Stay updated with real-time order tracking. 24/7 access from web or mobile app</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-700'>At Zyora, your satisfaction is our top priority. Our dedicated support team is always ready to assist you — 
              from pre-purchase guidance to after-sales care. We believe in building trust by providing quick, reliable, and friendly service that goes beyond shopping.</p>
          </div>

        </div>

        <NewsletterBox />

    </div>
  )
}

export default about