import React from "react";

export default function Content() {
  return (
    <div className="flex flex-col items-start pt-10 md:pt-[120px] px-2 md:px-40 container mx-auto relative overflow-x-hidden">
      <div>
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          How We Use Your Information
        </h1>
        <p className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5">
          We may use your information to:
        </p>
        <ul className="flex flex-col gap-2 pt-3 list-disc px-6">
          <li className="pro-regular  opacity-60 text-[18px] leading-[22px]">
            Provide, operate, and maintain our services
          </li>
          <li className="pro-regular  opacity-60 text-[18px] leading-[22px]">
            Process payments and invoices
          </li>
          <li className="pro-regular  opacity-60 text-[18px] leading-[22px]">
            Improve our website and services
          </li>
          <li className="pro-regular  opacity-60 text-[18px] leading-[22px]">
            Respond to inquiries and support requests
          </li>
          <li className="pro-regular  opacity-60 text-[18px] leading-[22px]">
            Send marketing and promotional materials (with your consent)
          </li>
          <li className="pro-regular  opacity-60 text-[18px] leading-[22px]">
            Comply with legal obligations
          </li>
        </ul>
      </div>
      <div className="pt-[24px]">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Cookies and Tracking Technologies
        </h1>
        <p className="pro-regular md:pro-medium text-[20px] opacity-60 pt-5 max-w-[1050px]">
          We use cookies and similar tracking tools to enhance your browsing
          experience. You can control cookies through your browser settings, but
          disabling them may affect your ability to use some features.
        </p>
      </div>
      <div className="pt-[24px]">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Sharing of Information
        </h1>
        <p className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5 max-w-[1050px]">
          We do not sell your personal information. We may share it in the
          following cases:
        </p>
        <ul className="list-disc pt-3 pl-6 flex flex-col gap-2">
          <li className="pro-regular text-[18px] leading-[22px]">
            With Service Providers:
            <span className="opacity-60">
              {" "}
              Who help us operate our website and services.
            </span>
          </li>
          <li className="pro-regular text-[18px] leading-[22px]">
            For Legal Reasons:{" "}
            <span className="opacity-60">
              {" "}
              If required by law, court order, or government regulation.
            </span>
          </li>
          <li className="pro-regular text-[18px] leading-[22px]">
            Business Transfers:
            <span className="opacity-60">
              {" "}
              In case of a merger, sale, or acquisition of our business.
            </span>
          </li>
        </ul>
      </div>
      <div className="pt-[24px]">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Data Security
        </h1>
        <p className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5 max-w-[1050px]">
          We use appropriate technical and organizational measures to protect
          your personal information. However, no method of transmission over the
          internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </div>
      <div className="pt-[24px]">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Your Privacy Rights
        </h1>
        <p className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5 max-w-[1050px]">
          Depending on your location, you may have the right to:
        </p>
        <ul className="flex flex-col gap-2 pt-3 list-disc pl-8">
          <li className="pro-regular  opacity-60 text-[18px] leading-[22px]">
            Access the personal data we hold about you
          </li>
          <li className="pro-regular  opacity-60 text-[18px] leading-[22px]">
            Request corrections to inaccurate data
          </li>
          <li className="pro-regular  opacity-60 text-[18px] leading-[22px]">
            Request deletion of your personal data
          </li>
          <li className="pro-regular  opacity-60 text-[18px] leading-[22px]">
            Withdraw consent for data processing
          </li>
        </ul>
        <p className='className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5 max-w-[1050px]"'>
          To exercise these rights, contact us at [vordxtechnologies.com].
        </p>
      </div>
      <div className="pt-[24px]">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Third-Party Links
        </h1>
        <p className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5 max-w-[1000px]">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices of these websites.
        </p>
      </div>
      <div className="pt-[24px]">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          Children’s Privacy
        </h1>
        <p className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5 max-w-[1000px]">
          Our services are not directed to individuals under 13 years of age. We
          do not knowingly collect personal information from children.
        </p>
      </div>
      <div className="pt-[24px]">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          {" "}
          Changes to This Privacy Policy
        </h1>
        <p className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5 max-w-[1000px]">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated date.
        </p>
      </div>
      <div className="pt-[24px]">
        <h1 className="pro-semibold md:pro-bold text-[24px] leading-[32px] ">
          {" "}
          Contact Us
        </h1>
        <p className="pro-regular md:pro-medium text-[20px]  opacity-60 pt-5 max-w-[1000px]">
          If you have any questions about this Privacy Policy or how we handle
          your data, please contact us:
        </p>
        <p className="pro-semibold text-[18px] leading-[22px] pt-3">
          Vordx Technologies
        </p>
        <p className="pro-semibold text-[18px] leading-[22px] pt-2">
          Email:{" "}
          <a
            className="text-[#009DFF] cursor-pointer"
            href="mailto:vordxtechnologies.com"
          >
            vordxtechnologies.com
          </a>{" "}
        </p>
        <p className="pro-semibold text-[18px] leading-[22px] pt-2">
          Phone:{" "}
          <a className="text-[#009DFF] cursor-pointer" href="tel:+923240110040">
            {" "}
            +92 324 0110040
          </a>
        </p>
        <p className="pro-semibold text-[18px] leading-[22px] pt-2">
          Website:{" "}
          <a
            className="text-[#009DFF] cursor-pointer"
            target="_blank"
            href="https://www.vordx.com"
          >
            {" "}
            www.vordx.com
          </a>
        </p>
      </div>
    </div>
  );
}
