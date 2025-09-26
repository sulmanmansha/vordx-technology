import React from 'react'

export default function Content() {
  return (
    <div className='flex flex-col items-start pt-10 md:pt-[120px] px-2 md:px-52 container mx-auto relative overflow-x-hidden'>
      <div>
        <h1 className='pro-semibold md:pro-bold text-[24px] leading-[32px] '>Cookies Policy</h1>
        <p className="pro-regular md:pro-medium text-[20px] opacity-60 pt-5">
          This Cookies Policy explains how Vordx (“we”, “our”, or “us”) uses cookies and similar tracking technologies on our website. By using our site, you consent to the use of cookies as described in this policy.
        </p>
      </div>

      <div className='pt-6'>
        <h1 className='pro-semibold md:pro-bold text-[24px] leading-[32px] '>What Are Cookies?</h1>
        <p className="pro-regular md:pro-medium text-[20px] opacity-60 pt-5 max-w-[1050px]">
          Cookies are small text files placed on your device when you visit a website. They help us remember your preferences, improve performance, and provide you with a better browsing experience.
        </p>
      </div>

      <div className='pt-6'>
        <h1 className='pro-semibold md:pro-bold text-[24px] leading-[32px] '>Types of Cookies We Use</h1>
        <ul className='list-disc pt-3 pl-6 flex flex-col gap-2'>
          <li className='pro-regular text-[18px] leading-[22px]'>
            Essential Cookies: <span className='opacity-60'> Required for the proper functioning of our website. </span>
          </li>
          <li className='pro-regular  text-[18px] leading-[22px]'>
            Performance Cookies: <span className='opacity-60'> Help us analyze website traffic and improve site functionality.</span>
          </li>
          <li className='pro-regular  text-[18px] leading-[22px]'>
            Functional Cookies: <span className='opacity-60'> Remember your preferences and settings.</span>
          </li>
          <li className='pro-regular  text-[18px] leading-[22px]'>
            Advertising Cookies:<span className='opacity-60'> Used to deliver relevant ads and measure campaign effectiveness.</span>
          </li>
        </ul>
      </div>

      <div className='pt-6'>
        <h1 className='pro-semibold md:pro-bold text-[24px] leading-[32px] '>Third-Party Cookies</h1>
        <p className="pro-regular md:pro-medium text-[20px] opacity-60 pt-5 max-w-[1000px]">
          We may allow trusted third-party partners (such as analytics and advertising providers) to place cookies on your device to collect information about your browsing activity.
        </p>
      </div>

      <div className='pt-6'>
        <h1 className='pro-semibold md:pro-bold text-[24px] leading-[32px] '>Managing Cookies</h1>
        <ul className='list-disc pt-3 pl-6 flex flex-col gap-2'>
          <li className='pro-regular opacity-60 text-[18px] leading-[22px]'>
            You can manage or disable cookies through your browser settings.
          </li>
          <li className='pro-regular opacity-60 text-[18px] leading-[22px]'>
            Please note that disabling cookies may affect the functionality of certain features on our site.
          </li>
        </ul>
      </div>

      <div className='pt-6'>
        <h1 className='pro-semibold md:pro-bold text-[24px] leading-[32px] '>Changes to This Policy</h1>
        <p className="pro-regular md:pro-medium text-[20px] opacity-60 pt-5 max-w-[1000px]">
          We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>
      </div>

      <div className='pt-6'>
        <h1 className='pro-semibold md:pro-bold text-[24px] leading-[32px] '>Contact Us</h1>
        <p className="pro-regular md:pro-medium text-[20px] opacity-60 pt-5 max-w-[1000px]">
          If you have any questions about this Cookies Policy, you can contact us at:
        </p>
        <a href='mailto:support@vordx.com' className="pro-semibold block pt-5 text-[#009DFF] leading-[22px] cursor-pointer">support@vordx.com</a>
        <a href='https://www.vordx.com' className="pro-semibold block pt-3 text-[#009DFF] leading-[22px] cursor-pointer">www.vordx.com</a>
      </div>
    </div>
  )
}
