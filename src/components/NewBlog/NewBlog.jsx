import React, { useEffect, useState } from 'react'

function NewBlog() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    slug: '',
    isPublished: false,
  })

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormData((prevFormData) => ({ ...prevFormData, isPublished: true }))
  }
  
  useEffect(() => {
    console.log(formData)
  }, [formData.isPublished])

  function createSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  return (
    <>
      <div className='extra-tall min-h-screen h-auto flex justify-center items-center text-lg text-white'>
        <div className='bg-gray-900 min-h-11/12  w-11/12 rounded-lg p-7 flex flex-col gap-2 border border-white'>
          {/* title, author, slug, content, isPublished */}
          <form action="" className='flex flex-col gap-10' onSubmit={handleSubmit}>
            <div className='flex gap-5 justify-center items-center'>
              <label htmlFor="title" className='w-20'>
                Title:
              </label>
              <input
                type="text"
                className='p-1 text-white w-full'
                required
                name='title'
                id='title'
                placeholder='Enter title of your blog'
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className='flex gap-5 justify-between items-center'>
              <label htmlFor="author" className='w-20'>
                Author:
              </label>
              <input
                type="text"
                className='p-1 text-white w-full'
                required
                name='author'
                id='author'
                placeholder="Enter the author's name here"
                value={formData.author}
                onChange={handleChange}
              />
            </div>
            <div className='flex gap-5 justify-between items-center'>
              <label htmlFor="slug" className='w-20'>
                Slug:
              </label>
              <input
                type="text"
                className='p-1 text-white w-full'
                required
                name='slug'
                id='slug'
                placeholder='Slug'
                value={formData.slug=createSlug(formData.title)}
                readOnly
              />
            </div>
            <div className='flex gap-5 justify-between items-center'>
              <label htmlFor="content" className='w-20'>
                Content:
              </label>
              <textarea
                name="content"
                id="content"
                cols="200"
                rows="15"
                className='rounded p-2'
                placeholder='Enter the content of your blog here...'
                onChange={handleChange}
                value={formData.content}
              ></textarea>
            </div>
            <div className='flex justify-center items-center'>
              <button className='bg-green-900 hover:border-white' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewBlog