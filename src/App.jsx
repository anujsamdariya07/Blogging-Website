import { useEffect, useState } from 'react'
import { Client, Databases, ID } from "appwrite";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { About, Blogs, Contact, Home, Layout, NewBlog } from './components';

function App() {
  const [globalFormData, setGlobalFormData] = useState({})

  function useFormData (formData) {
    setGlobalFormData({...formData})
    console.log('Updated form data: ', globalFormData)
  }

  useEffect(() => {
    console.log(globalFormData)
  }, [globalFormData])
  
  // const client = new Client();

  // client
  //   .setEndpoint('https://cloud.appwrite.io/v1')
  //   .setProject('662335cc12f41d0034f2');

  // const databases = new Databases(client);

  //   const element = ;

  //   const promise = databases.createDocument(
  //     '66233b13b996516b9454',
  //     '66233b2083514e21bafd',
  //     ID.unique(),
  //     element, 
  //   );

  //   promise.then(function (response) {
  //     console.log(response);
  //   }, function (error) {
  //     console.log(error);
  //   });
  // }

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/newblog' element={<NewBlog onFormSubmit={useFormData} />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App