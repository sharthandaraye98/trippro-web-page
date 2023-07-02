import React from "react";
import FooterImg from "../images/footer.png";
import shopifyImg from "../images/shopify.png";
import payPalImg from "../images/paypal.png";
import adWord from "../images/adWords.png";
import googleAnalyticImg from "../images/googleAnalytics.png";
import googleTrustImg from "../images/googleTrusted.png";
import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div
        className="flex flex-col"
        style={{
          backgroundImage: `url(${FooterImg})`,
          height: "550px",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-around mt-8">
          <div className="flex flex-col items-start leading-8">
            <h3 className="text-white">QUICK LINKS</h3>
            <p className="text-white">• Services</p>
            <p className="text-white">• About Us</p>
            <p className="text-white">• Blog</p>
            <p className="text-white">• Quotation</p>
            <p className="text-white">• Partnership</p>
            <p className="text-white">• Contact Us</p>
          </div>
          <div className="flex flex-col items-start leading-8">
            <h3 className="text-white">OURS SERVICES</h3>
            <p className="text-white">• Web Development</p>
            <p className="text-white">• Web Design</p>
            <p className="text-white">• Responsive Website Design</p>
            <p className="text-white">• CMS Website Design</p>
            <p className="text-white">• UI & UX Website Design</p>
            <p className="text-white">• 360 Virtual TOur</p>
          </div>
          <div className="flex flex-col pt-8 items-start leading-8">
            <p className="text-white">• Ecommerce Development</p>
            <p className="text-white">• WooCommerce Development</p>
            <p className="text-white">• osCommerce Development</p>
            <p className="text-white">• Magento Development</p>
            <p className="text-white">• SSL Certificate</p>
            <p className="text-white">• Promotion VIdeo</p>
          </div>
          <div className="flex flex-col items-start leading-8">
            <h3 className="text-white">VISBLE ONE SINGAPORE</h3>
            <p className="text-white">+65 6248 0838</p>
            <div className="flex items-center">
              <FaEnvelope className="fill-white" />
              <p className="text-white pl-2">info@visibleone.com</p>
            </div>
            <p className="text-white">24 SIn Ming Lane Midview City #07-93</p>
            <p className="text-white">Singapore 573970</p>
            <p className="text-white">Office Hour: Mon-Fri(9am-6pm)</p>
            <div className="flex mt-5 items-center">
              <button className="w-40 h-12 bg-blue-500 px-6 py-3 text-sm uppercase tracking-wide text-white transition-none hover:bg-blue-600 sm:mt-0 sm:w-auto sm:shrink-0">
                Contact Us
              </button>
              <p className="text-blue-500 text-sm text-right ml-6">
                Contact HK Office
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex basis-8/12 px-5 mt-14 justify-evenly">
            <img
              className="h-10"
              src={shopifyImg}
              alt="shopify partners image"
            />
            <img className="h-10" src={payPalImg} alt="paypal image" />
            <img className="h-10" src={adWord} alt="AdWords CERTIFIED image" />
            <img
              className="h-10"
              src={googleAnalyticImg}
              alt="Google Analytics CCERTIFIED image"
            />
            <img
              className="h-10"
              src={googleTrustImg}
              alt="Google Trusted image"
            />
          </div>
          <div className="mt-12 flex items-center basis-4/12 gap-6 md:gap-8">
            <div className="flex flex-col mb-3">
              <p className="text-white text-sm justify-start">
                Subscribe to our news, tips and guidelines
              </p>
              <div className="border w-64 border-gray-100 p-2 focus-within:ring text-sm text-slate-500 sm:flex sm:items-center sm:gap-4">
                123@test.com
              </div>
            </div>
            <button className="mt-1 w-28 h-10 bg-blue-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-blue-600 sm:mt-0 sm:w-auto sm:shrink-0">
              SUBMIT
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-12 flex justify-center gap-6 md:gap-8">
            <FaFacebook className="fill-white h-6 w-6" />
            <FaTwitter className="fill-white h-6 w-6" />
            <FaInstagram className="fill-white h-6 w-6" />
            <FaLinkedin className="fill-white h-6 w-6" />
          </div>
          <div className="mt-8 flex justify-center gap-6 md:gap-8">
            <p className="text-white">Shopping T & C</p>
            <p className="text-white">•Terms & Conditions</p>
            <p className="text-white">•Privacy Pollicy</p>
            <p className="text-white">©2018 - Visible One</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
