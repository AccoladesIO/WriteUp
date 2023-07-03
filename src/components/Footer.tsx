import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {

  useEffect(() => {
    AOS.init({
      once: false, // Set this to true if you want animations to trigger only once on scroll
    });
  }, []);

  return (
    <footer
      aria-label="Site Footer"
      className="border bg-white lg:grid lg:grid-cols-5"
      data-aos="fade-up" // Add the data-aos attribute for the fade-in animation
      data-aos-offset="50" // Adjust the offset as per your preference
      data-aos-duration="800" // Adjust the duration of the animation
    >
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <Image
          src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="absolute inset-0 object-cover w-full h-full"
          layout="fill"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mt-4">
          <div>
            <p>
              <span className="text-xs tracking-wide text-gray-500 uppercase">Call us</span>

              <Link href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                0123456789
              </Link>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className="flex gap-6 mt-8">
              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5 17.103H7c-2.071 0-3.773-1.603-3.773-3.571V7.468C3.227 5.5 4.93 3.897 7 3.897h10c2.07 0 3.773 1.603 3.773 3.571v6.064c0 1.968-1.702 3.571-3.773 3.571zm-.333-3.305c.082 0 .148.065.148.147v1.259c0 .081-.066.147-.148.147h-3.334a.146.146 0 0 1-.148-.147v-1.259c0-.082.066-.147.148-.147h3.334zm-1.833-2.223a2.223 2.223 0 1 0-4.446 0 2.223 2.223 0 0 0 4.446 0zm3.694-.89c.192 0 .349.156.349.349v4.669a.35.35 0 0 1-.35.35H8.89a.35.35 0 0 1-.349-.35v-4.67c0-.193.157-.35.35-.35h7.125z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p>
              <span className="text-xs tracking-wide text-gray-500 uppercase">Company</span>

              <Link href="/about" className="block mt-4 text-base font-medium text-gray-900 hover:opacity-75">
                About Us
              </Link>

              <Link href="/services" className="block mt-4 text-base font-medium text-gray-900 hover:opacity-75">
                Services
              </Link>

              <Link href="/contact" className="block mt-4 text-base font-medium text-gray-900 hover:opacity-75">
                Contact
              </Link>

              <Link href="/privacy" className="block mt-4 text-base font-medium text-gray-900 hover:opacity-75">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
