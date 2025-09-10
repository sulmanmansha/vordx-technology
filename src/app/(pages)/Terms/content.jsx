import React from "react";

export default function Content() {
  return (
    <div className="flex flex-col items-start pt-10 md:pt-[120px] px-2 md:px-52 container mx-auto relative overflow-x-hidden">
      <div>
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Acceptance of Terms
        </h1>
        <p className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5">
          By accessing or using the Vordx website, products, and services, you
          agree to be bound by these Terms of Service and our Privacy Policy. If
          you do not agree, please discontinue using our services immediately.
        </p>
        {/* <ul className='flex flex-col gap-2 pt-3 list-disc px-6'>
        <li className="pro-regular text-[#FFFFFF99] opacity-60 text-[18px] leading-[22px]">Provide, operate, and maintain our services</li>
        <li className="pro-regular text-[#FFFFFF99] opacity-60 text-[18px] leading-[22px]">Process payments and invoices</li>
        <li className="pro-regular text-[#FFFFFF99] opacity-60 text-[18px] leading-[22px]">Improve our website and services</li>
        <li className="pro-regular text-[#FFFFFF99] opacity-60 text-[18px] leading-[22px]">Respond to inquiries and support requests</li>
        <li className="pro-regular text-[#FFFFFF99] opacity-60 text-[18px] leading-[22px]">Send marketing and promotional materials (with your consent)</li>
        <li className="pro-regular text-[#FFFFFF99] opacity-60 text-[18px] leading-[22px]">Comply with legal obligations</li>
      </ul> */}
      </div>
      <div className="pt-6">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Services Provided
        </h1>
        <p className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5 max-w-[1050px]">
          Vordx is a digital solutions agency offering software development, web
          design, UI/UX design, and related IT services. The scope of services
          may vary depending on project agreements made with clients.
        </p>
      </div>
      <div className="pt-6">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Use of Website
        </h1>
        <ul className="list-disc pt-3 pl-6 flex flex-col gap-2">
          <li className="pro-regular opacity-60 text-[18px] leading-[22px]">
            You agree to use our website only for lawful purposes.
          </li>
          <li className="pro-regular opacity-60 text-[18px] leading-[22px]">
            You may not attempt to disrupt or gain unauthorized access to our
            systems.
          </li>
          <li className="pro-regular opacity-60 text-[18px] leading-[22px]">
            Content on our site may not be copied, distributed, or used without
            written permission from Vordx.
          </li>
        </ul>
      </div>
      <div className="pt-6">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Client Responsibilities
        </h1>
        <ul className="list-disc pt-3 pl-6 flex flex-col gap-2">
          <li className="pro-regular opacity-60 text-[18px] leading-[22px]">
            Provide accurate project requirements, data, and materials.
          </li>
          <li className="pro-regular opacity-60 text-[18px] leading-[22px]">
            Ensure that all submitted content (e.g., images, text, media) does
            not violate third-party rights.
          </li>
          <li className="pro-regular opacity-60 text-[18px] leading-[22px]">
            Timely communication and approvals are required to avoid project
            delays.
          </li>
        </ul>
      </div>
      <div className="pt-6">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Payments & Refunds
        </h1>
        <ul className="flex flex-col gap-2 pt-3 list-disc pl-8">
          <li className="pro-regular  opacity-60 text-[18px] leading-[22px]">
            All payments must be made as per the agreed contract or invoice.
          </li>
          <li className="pro-regular  opacity-60 text-[18px] leading-[22px]">
            Refunds, if applicable, will be handled on a case-by-case basis.
          </li>
          <li className="pro-regular  opacity-60 text-[18px] leading-[22px]">
            Vordx reserves the right to suspend or terminate services for
            non-payment.
          </li>
        </ul>
      </div>
      <div className="pt-6">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Intellectual Property
        </h1>
        <ul className="list-disc pt-3 pl-6 flex flex-col gap-2">
          <li className="pro-regular text-[18px] opacity-60 leading-[22px]">
            Upon full payment, the client will own the final deliverables of the
            project, unless otherwise stated in the agreement.
          </li>
          <li className="pro-regular text-[18px] opacity-60 leading-[22px]">
            Vordx retains the right to showcase completed projects in our
            portfolio unless the client requests otherwise in writing.
          </li>
        </ul>
      </div>
      <div className="pt-6">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Limitation of Liability
        </h1>
        <ul className="list-disc pt-3 pl-6 flex flex-col gap-2">
          <li className="pro-regular opacity-60 text-[18px] leading-[22px]">
            Vordx is not liable for any indirect, incidental, or consequential
            damages arising from the use of our services.
          </li>
          <li className="pro-regular opacity-60 max-w-[1000px] text-[18px] leading-[22px]">
            We do not guarantee uninterrupted or error-free operation of
            delivered software, but we will provide support as outlined in
            project agreements.
          </li>
        </ul>{" "}
      </div>
      <div className="pt-6">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Termination
        </h1>
        <p className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5 max-w-[1000px]">
          We reserve the right to suspend or terminate your access to our
          website or services if you violate these Terms of Service.
        </p>
      </div>
      <div className="pt-6">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Governing Law
        </h1>
        <p className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5 max-w-[1000px]">
          These Terms shall be governed by and interpreted in accordance with
          the laws of Pakistan.
        </p>
      </div>

      <div className="pt-6">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Contact Us
        </h1>
        <p className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5 max-w-[1000px]">
          For questions regarding these Terms, you can contact us at:
        </p>
        <a
          href="mailto:support@vordx.com"
          className="pro-semibold block pt-3 text-[#009DFF] leading-[22px] cursor-pointer"
        >
          support@vordx.com
        </a>
        <a
          href="https://www.vordx.com"
          className="pro-semibold block pt-3 text-[#009DFF] leading-[22px] cursor-pointer"
        >
          www.vordx.com
        </a>
      </div>
    </div>
  );
}
