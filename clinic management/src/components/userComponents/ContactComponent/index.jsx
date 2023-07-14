import React from 'react';

function ContactComponent() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex flex-col">
            <h1 className="font-bold uppercase text-4xl lg:text-5xl mb-4">Send us a message</h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="w-full mt-8 lg:mt-0 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
          <div className="flex flex-col text-white">
            <h1 className="font-bold uppercase text-3xl lg:text-4xl my-4">Drop in our office</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam, eu feugiat felis
              fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
            </p>
            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl lg:text-2xl">Main Office</h2>
                <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
              </div>
            </div>
            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex items-center">
                <i className="fas fa-phone-alt pt-2 pr-2"></i>
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl lg:text-2xl">Call Us</h2>
                <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
              </div>
            </div>
            <div className="flex my-4 w-2/3 lg:w-1/2">
              <a
                href="https://www.facebook.com/ENLIGHTENEERING/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white h-8 w-8 inline-flex items-center justify-center mx-1 text-blue-900"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/enlighteneering-inc-"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white h-8 w-8 inline-flex items-center justify-center mx-1 text-blue-900"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 mb-4 mr-4">
        <a
          title="Buy me a pizza"
          href="https://www.buymeacoffee.com/Dekartmc"
          target="_blank"
          className="block w-12 h-12 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img
            className="object-cover object-center w-full h-full rounded-full"
            src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
            alt="Buy me a pizza"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactComponent;
