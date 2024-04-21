import React from 'react'

function Contact() {
  return (
    <div>
      <div className='text-white flex flex-col gap-5 justify-center h-screen text-left'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-2xl text-left'>
            Contact Us☎️
          </h1>
          <p>
            Thank you for your interest in this blogging website! We're here to assist you with any questions, feedback, or inquiries you may have. Feel free to reach out to us using the following contact information:
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl font-bold'>
            Contact Information
          </h1>
          <ol className='flex flex-col list-disc'>
            <li>
              <span className='font-bold'>Email:</span> anujsamdariya07@gmail.com
            </li>
            <li>
              <span className='font-bold'>Phone:</span> (+91)-9893380468
            </li>
            <li>
              {/* <span className='font-bold'>Social Media:</span>
              <div className='flex flex-row gap-2'>
              <a
                href="https://github.com/anujsamdariya07"
                className="text-white hover:text-gray-300">
                GitHub↗️
              </a>
              <a
                href="https://twitter.com/anujsamdariya07"
                className="text-white hover:text-gray-300">
                X↗️
              </a>
              <a
                href="https://linkedin.com/your-linkedin"
                className="text-white hover:text-gray-300">
                LinkedIn↗️
              </a>
              <a
                href="https://instagram.com/anujsamdariya07/"
                className="text-white hover:text-gray-300">
                Instagram↗️
              </a>
              <a
                href="https://www.facebook.com/anuj.samdariya.9"
                className="text-white hover:text-gray-300">
                Facebook↗️
              </a>
              </div> */}
              <span className='font-bold flex-shrink-0'>Social Media:</span>
              <h2 className='flex flex-row gap-2 flex-shrink-0'>
                <a
                  target='_blank'
                  href="https://github.com/anujsamdariya07"
                  className="text-white hover:text-gray-300">
                  GitHub↗️
                </a>
                <a
                  target='_blank'
                  href="https://twitter.com/anujsamdariya07"
                  className="text-white hover:text-gray-300">
                  X↗️
                </a>
                <a
                  target='_blank'
                  href="https://www.linkedin.com/in/anuj-samdariya-569162254/"
                  className="text-white hover:text-gray-300">
                  LinkedIn↗️
                </a>
                <a
                  target='_blank'
                  href="https://instagram.com/anujsamdariya07/"
                  className="text-white hover:text-gray-300">
                  Instagram↗️
                </a>
                <a
                  target='_blank'
                  href="https://www.facebook.com/anuj.samdariya.9"
                  className="text-white hover:text-gray-300">
                  Facebook↗️
                </a>
              </h2>

            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Contact