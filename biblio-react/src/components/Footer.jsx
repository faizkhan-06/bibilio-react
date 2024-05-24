import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="mx-20 mt-24 mb-6 bg-gray-950 rounded-3xl">
          <div className="grid grid-cols-3 p-6">
            <div className="flex flex-col justify-center items-center">
              <div>
                <h3 className="text-base text-gray-500 mb-5 footer-heading">
                  Company
                </h3>
                <ul>
                  <li className="mb-2 text-sm">
                    <a href="#" className="text-gray-700">
                      About Us
                    </a>
                  </li>
                  <li className="text-gray-700 mb-2 text-sm">
                    <a href="#" className="text-gray-700">
                      Our Services
                    </a>
                  </li>
                  <li className="text-gray-700 mb-2 text-sm">
                    <a href="#" className="text-gray-700">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <h3 className="text-base text-gray-500 mb-5 footer-heading">
                  Get Help
                </h3>
                <ul>
                  <li className="mb-2 text-sm">
                    <a href="../pages/faqPage.html" className="text-gray-700">
                      FAQ
                    </a>
                  </li>
                  <li className="mb-2 text-sm">
                    <a href="#" className="text-gray-700">
                      Shipping
                    </a>
                  </li>

                  <li className="mb-2 text-sm">
                    <a href="#" className="text-gray-700">
                      Order Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-base text-gray-500 mb-5 footer-heading">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <ion-icon
                  name="logo-facebook"
                  className="text-xl text-gray-500"
                ></ion-icon>
                <ion-icon
                  name="logo-twitter"
                  className="text-xl text-gray-500"
                ></ion-icon>
                <ion-icon
                  name="logo-instagram"
                  className="text-xl text-gray-500"
                ></ion-icon>
                <ion-icon
                  name="logo-linkedin"
                  className="text-xl text-gray-500"
                ></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
