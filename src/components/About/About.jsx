import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='mx-6'>
      <div className='h-44 pt-16 flex flex-col gap-6 justify-center text-white'>
        <div className='flex flex-col gap-3 text-left'>
          <h1 className='text-xl font-bold'>
            About CodeWise✨
          </h1>
          <p>
            Welcome to CodeWise, your go-to platform for all things coding and development! We are passionate about empowering individuals to learn, create, and innovate in the digital world.
          </p>
        </div>
        <div className='flex flex-col gap-3 text-left'>
          <h1 className='text-xl font-bold'>
            Our Mission🚀
          </h1>
          <p>
            Welcome to CodeWise, your go-to platform for all things coding and development! We are passionate about empowering individuals to learn, create, and innovate in the digital world.
          </p>
        </div>
      </div>
      <div className='h-96 flex flex-col gap-6 justify-center text-white -mb-10'>
        <div className='flex flex-col gap-3 text-left'>
          <h1 className='text-xl font-bold'>
            What We Offer📢
          </h1>
          <ol className='flex flex-col gap-2 list-disc'>
            <li>
              <span className='font-bold'>Educational Resources:</span> Access our comprehensive tutorials, guides, and courses covering a wide range of programming languages and technologies.
            </li>
            <li>
              <span className='font-bold'>Interactive Coding Environment:</span>  Practice coding in real-time using our interactive code editor and compiler.
            </li>
            <li>
              <span className='font-bold'>Community Support:</span>  Connect with like-minded individuals, ask questions, and collaborate on projects in our vibrant community forum.
            </li>
            <li>
              <span className='font-bold'>Latest Updates:</span> Stay updated with the latest industry news, trends, and updates in the tech world.
            </li>
          </ol>
        </div>
      </div>
      <div className='h-56 py-5 text-left flex flex-col gap-6  text-white'>
          <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-bold'>
            Join Us Today🤝
          </h1>
          <p>
            Ready to dive into the exciting world of coding? Join CodeWise today and embark on a journey of learning, creativity, and growth!
          </p>
          <button className='hover:bg-gray-800 hover:border-white hover:border-s active:border-none focus-visible:border-none w-auto p-4'>
            <Link to='/'>
              Get Started↗️
            </Link>
          </button>
          </div>
      </div>
    </div>
  )
}

export default About