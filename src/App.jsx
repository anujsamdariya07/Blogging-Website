import { useEffect, useRef, useState } from 'react'
import { Client, Databases, ID } from "appwrite";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { About, Blogs, Contact, Home, Layout, NewBlog, BlogView } from './components';

function App() {
  const [globalFormData, setGlobalFormData] = useState({})
  const prevGlobalFormData = useRef({});

  function encloseContent (data) {
    return `<p>${data}</p>`
  }

  function useFormData(formData) {
    setGlobalFormData({ ...formData })
    setGlobalFormData((prev) => ({...prev, content: encloseContent(prev.content)}))
    console.log('Updated form data: ', globalFormData)
  }

  useEffect(() => {
    console.log(globalFormData)

    if (globalFormData.isPublished && !prevGlobalFormData.current.isPublished) {
      const client = new Client();
      client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('662335b6786db603f545');
        
      const databases = new Databases(client);
      const promise = databases.createDocument(
        '6639d672000bc7697ca7',
        '6639de2200249e8694b8',
        ID.unique(),
        globalFormData,
      );
    
      promise.then(function (response) {
        console.log(response);
      }, function (error) {
        console.log(error);
      });
    }
    prevGlobalFormData.current = globalFormData
  }, [globalFormData])

  // For opening already written individual blogs 
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
      // console.log(response);
      setBlogs(response.documents)
    }, function (error) {
      console.log(error);
    });
  }, [])

  // For removing the <p></p> tags in the content
  function removePTags(str) {
    // Check if the string starts with <p> and ends with </p>
    if (str.startsWith('<p>') && str.endsWith('</p>')) {
      // Remove <p> from the beginning and </p> from the end
      return str.slice(3, -4);
    } else {
      // If the string doesn't match the expected format, return as is
      return str;
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' >
          {blogs.map((blog, index) => (
            <Route path={`/blogs/${blog.slug}`} element={<BlogView key={index} title={blog.title} author={blog.author} content={removePTags(blog.content)} slug={blog.slug} />} />
          ))}
        </Route>
        <Route path='/newblog' element={<NewBlog onFormSubmit={useFormData} />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App