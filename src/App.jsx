import React from 'react'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Portfolio from './sections/portfolio/Portfolio'
import FAQs from './sections/faqs/FAQs'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import Blog from './pages/Blog'
import Skills from './sections/skills/Skills'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Skills/>
      <Portfolio />
      <FAQs />
      <Contact />
      <Footer />
      <Outlet />
    </>
  )
}

const BlogLayout = () => {
  return (
    <>
      <main
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <Blog />
        <Footer />
      </main>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
  {
    path: '/:slug',
    element: <BlogLayout />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
