import { Client, Databases, Query } from "appwrite";
import React, { useEffect, useState } from 'react'
import BlogDisplay from "../BlogDisplay/BlogDisplay";

function Home() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => { 
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("662335cc12f41d0034f2")
  
    const databases = new Databases(client);
  
    let promise = databases.listDocuments(
      '66233b13b996516b9454',
      '66233b2083514e21bafd',
      []
    );
  
    promise.then(function (response) {
      console.log(response);
      setBlogs(response.documents)
    }, function (error) {
      console.log(error);
    });
  }, [])


  function extractFirst100Chars(htmlString) {
    let textContent = htmlString.replace(/<[^>]+>/g, ''); // Remove HTML tags
    textContent = textContent.trim().slice(0, 100);

    if (textContent.length < htmlString.length) {
      textContent += '...';
    }

    return textContent;
  }


  return (
    <div className='h-auto'>
      <div className="container mx-auto px-4 py-8 w-11/12">
        <h1 className="text-2xl font-bold mb-4">Latest Blogs</h1>
        <div className="">
          {blogs.length === 0 && (<div className="h-screen flex justify-center items-center">Loading...</div>)}
          {blogs.map((blog, index) => (
            <BlogDisplay key={index} title={blog.title} author={blog.author} metaDesc={extractFirst100Chars(blog.content)} slug={blog.slug} views={blog.views}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home