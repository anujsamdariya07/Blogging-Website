import React from 'react'

function BlogView({ key, title, author, content, slug }) {
  function formatContent(content) {
    const paragraphs = content.split('\n').map((paragraph, index) => (
      <>
        <p key={index}>
          {paragraph}
        </p>
        <br />
      </>
    ));
    return paragraphs;
  }

  content = formatContent(content)
  
  return (    
    <>
      <div className='extra-tall min-h-screen h-auto flex justify-center items-center text-lg text-white'>
        <div className='bg-gray-900 min-h-11/12  w-11/12 rounded-lg p-7 flex flex-col gap-2 border border-white'>
          <h1 className='text-center text-4xl underline'>{title}</h1>
          <br />
          <h2 className='text-gray-300 text-2xl'>Written by {author}</h2>
          <br />
          <p className='text-xl'>
            {content}
          </p>
        </div>
      </div>
    </>
  )
}

export default BlogView